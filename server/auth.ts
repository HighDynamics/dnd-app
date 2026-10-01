import bcrypt from "bcryptjs";
import connectPgSimple from "connect-pg-simple";
import type { RequestHandler } from "express";
import session from "express-session";
import { createHash, timingSafeEqual } from "node:crypto";
import pg from "pg";

import { db } from "./db";
import config, { schema } from "./knexfile";

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

declare module "express-serve-static-core" {
  interface Request {
    userId: string;
  }
}

const isProd = process.env.NODE_ENV === "production";
const SESSION_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days, rolling
const BCRYPT_ROUNDS = 10;
const MIN_PASSWORD_LEN = 8;

// Compared against when no user matches, so a wrong email takes as long as a
// wrong password (no account enumeration by timing).
const DUMMY_HASH = bcrypt.hashSync("unused-placeholder", BCRYPT_ROUNDS);

if (isProd && !process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET must be set in production");
}

const PgSession = connectPgSimple(session);

// Session cookie: httpOnly (unreadable by page scripts), sameSite=lax (blocks
// cross-site writes), secure in production. Rolling, so each visit extends it
// and only 30 idle days sign you out.
export const sessionMiddleware = session({
  name: "herofolio.sid",
  store: new PgSession({
    // connect-pg-simple needs a node-postgres Pool rather than knex's.
    pool: new pg.Pool(config.connection as pg.PoolConfig),
    // Keep the session table in this app's schema, like everything else.
    schemaName: schema,
    tableName: "session",
    createTableIfMissing: true,
  }),
  secret: process.env.SESSION_SECRET || "dev-only-insecure-secret",
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    httpOnly: true,
    sameSite: "lax",
    secure: isProd,
    maxAge: SESSION_MAX_AGE_MS,
  },
});

// ─── Rate limit (per IP, in memory) ───────────────────────────────────────────
// Blunts password and invite-code guessing. A reset on redeploy only ever frees
// a locked-out attacker, so memory is fine. A successful sign-in doesn't clear
// the count, or an attacker could reset it by signing into their own account
// between guesses; failures simply expire.

const MAX_FAILURES = 5;
const LOCK_MS = 15 * 60 * 1000;
const PRUNE_THRESHOLD = 1000;
const failures = new Map<
  string,
  { count: number; lockedUntil: number; expires: number }
>();

function isLockedOut(ip: string) {
  const rec = failures.get(ip);
  return !!rec && rec.lockedUntil > Date.now();
}

function registerFailure(ip: string) {
  const now = Date.now();
  if (failures.size > PRUNE_THRESHOLD) {
    for (const [key, rec] of failures) if (rec.expires <= now) failures.delete(key);
  }
  const rec = failures.get(ip) ?? { count: 0, lockedUntil: 0, expires: 0 };
  rec.count += 1;
  if (rec.count >= MAX_FAILURES) {
    rec.lockedUntil = now + LOCK_MS;
    rec.count = 0;
  }
  rec.expires = now + LOCK_MS;
  failures.set(ip, rec);
}

const tooManyAttempts = { error: "Too many attempts. Try again in a few minutes." };

// ─── Helpers ──────────────────────────────────────────────────────────────────

type UserRow = {
  id: string;
  email: string;
  name: string | null;
  passwordHash: string | null;
};

const publicUser = (user: UserRow) => ({
  id: user.id,
  email: user.email,
  name: user.name,
});

const findByEmail = (email: string): Promise<UserRow | undefined> =>
  db("users").whereRaw("lower(email) = lower(?)", [email.trim()]).first();

// Compare digests so the check takes the same time whatever the input length.
function inviteCodeMatches(code: string) {
  const expected = process.env.SIGNUP_INVITE_CODE;
  if (!expected) return false;
  const digest = (s: string) => createHash("sha256").update(s).digest();
  return timingSafeEqual(digest(code.trim()), digest(expected));
}

// Issue a fresh session id on sign-in, so a pre-login (possibly planted) id is
// never promoted to an authenticated one.
async function startSession(req: Parameters<RequestHandler>[0], userId: string) {
  await new Promise<void>((resolve, reject) =>
    req.session.regenerate((err) => (err ? reject(err) : resolve())),
  );
  req.session.userId = userId;
  await new Promise<void>((resolve, reject) =>
    req.session.save((err) => (err ? reject(err) : resolve())),
  );
}

// ─── Routes ───────────────────────────────────────────────────────────────────

export const signUp: RequestHandler = async (req, res) => {
  if (isLockedOut(req.ip!)) {
    res.status(429).json(tooManyAttempts);
    return;
  }
  const { email, password, name, inviteCode } = req.body ?? {};
  if (!email || !password || !inviteCode) {
    res.status(400).json({ error: "Email, password, and invite code are required" });
    return;
  }
  if (!inviteCodeMatches(inviteCode)) {
    registerFailure(req.ip!);
    res.status(403).json({ error: "That invite code isn't valid" });
    return;
  }
  if (password.length < MIN_PASSWORD_LEN) {
    res.status(400).json({ error: `Password must be at least ${MIN_PASSWORD_LEN} characters` });
    return;
  }
  // An existing row, even one without a password yet, can't be claimed here.
  if (await findByEmail(email)) {
    res.status(409).json({ error: "That email already has an account" });
    return;
  }
  const [user] = await db("users")
    .insert({
      email: email.trim(),
      name: name?.trim() || null,
      passwordHash: await bcrypt.hash(password, BCRYPT_ROUNDS),
    })
    .returning("*");
  await startSession(req, user.id);
  res.status(201).json({ user: publicUser(user) });
};

export const login: RequestHandler = async (req, res) => {
  if (isLockedOut(req.ip!)) {
    res.status(429).json(tooManyAttempts);
    return;
  }
  const { email, password } = req.body ?? {};
  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }
  const user = await findByEmail(email);
  const ok = await bcrypt.compare(password, user?.passwordHash ?? DUMMY_HASH);
  if (!user?.passwordHash || !ok) {
    registerFailure(req.ip!);
    res.status(401).json({ error: "Invalid email or password" });
    return;
  }
  await startSession(req, user.id);
  res.json({ user: publicUser(user) });
};

export const logout: RequestHandler = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("herofolio.sid");
    res.json({ user: null });
  });
};

export const me: RequestHandler = async (req, res) => {
  const user =
    req.session.userId &&
    (await db("users").where({ id: req.session.userId }).first());
  res.json({ user: user ? publicUser(user) : null });
};

// Fails closed, and re-reads the account on every request so a deleted user
// loses access immediately instead of riding a still-valid session.
export const requireAuth: RequestHandler = async (req, res, next) => {
  const user =
    req.session.userId &&
    (await db("users").where({ id: req.session.userId }).first());
  if (!user) {
    res.status(401).json({ error: "Sign in required" });
    return;
  }
  req.userId = user.id;
  next();
};

// Requires the current password, so a borrowed signed-in device can't
// silently take over the account.
export const changePassword: RequestHandler = async (req, res) => {
  const { currentPassword, newPassword } = req.body ?? {};
  if (!currentPassword || !newPassword) {
    res.status(400).json({ error: "Current and new passwords are required" });
    return;
  }
  if (newPassword.length < MIN_PASSWORD_LEN) {
    res.status(400).json({ error: `New password must be at least ${MIN_PASSWORD_LEN} characters` });
    return;
  }
  const user: UserRow = await db("users").where({ id: req.userId }).first();
  if (!(await bcrypt.compare(currentPassword, user.passwordHash ?? DUMMY_HASH))) {
    res.status(403).json({ error: "Current password is incorrect" });
    return;
  }
  await db("users")
    .where({ id: user.id })
    .update({
      passwordHash: await bcrypt.hash(newPassword, BCRYPT_ROUNDS),
      updatedAt: db.fn.now(),
    });
  res.json({ ok: true });
};

// Gives the bootstrap account (the owner of the seed data) its password, from
// env vars holding only a bcrypt hash. Idempotent: it creates the user if
// missing and sets the hash only if the account doesn't have one yet.
export async function ensureBootstrapUser() {
  const email = process.env.BOOTSTRAP_USER_EMAIL;
  const passwordHash = process.env.BOOTSTRAP_USER_PASSWORD_HASH;
  if (!email || !passwordHash) return;

  const existing = await findByEmail(email);
  if (existing?.passwordHash) return;
  if (existing) {
    await db("users").where({ id: existing.id }).update({ passwordHash });
  } else {
    await db("users").insert({ email, passwordHash });
  }
  console.log(`Bootstrapped account ${email}`);
}
