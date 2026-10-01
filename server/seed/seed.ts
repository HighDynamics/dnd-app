// Replaces all compendium and character data with the files in ./data.
// Usage: npm run seed (set SEED_CONFIRM=1 to overwrite existing data)
import { db } from "../db";
import abilities from "./data/abilities";
import characters from "./data/characters";
import items from "./data/items";
import { skillSynergies, skills } from "./data/skills";
import spells from "./data/spells";

// Only SRD content is shared with every user. Everything else in the seed data
// belongs to the seed user.
const NON_SRD_SKILLS = new Set(["Perception", "Stealth"]);

const email = process.env.BOOTSTRAP_USER_EMAIL;
if (!email) {
  console.error("Set BOOTSTRAP_USER_EMAIL to the account that should own the seed data.");
  process.exit(1);
}

try {
  const [{ count }] = await db("characters").count({ count: "*" });
  if (Number(count) > 0 && process.env.SEED_CONFIRM !== "1") {
    console.error(
      `Refusing to seed: ${count} character(s) already exist and would be deleted. ` +
        "Rerun with SEED_CONFIRM=1 to overwrite.",
    );
    process.exit(1);
  }

  await db.transaction(async (trx) => {
    for (const table of [
      "characters",
      "skill_synergies",
      "skills",
      "abilities",
      "items",
      "spells",
    ]) {
      await trx(table).del();
    }

    const owner =
      (await trx("users").whereRaw("lower(email) = lower(?)", [email]).first()) ??
      (await trx("users").insert({ email }).returning("*"))[0];
    const ownerIf = (isOwned: boolean) => (isOwned ? owner.id : null);

    await trx("skills").insert(
      skills.map((s) => ({ ...s, ownerId: ownerIf(NON_SRD_SKILLS.has(s.name)) })),
    );
    await trx("skillSynergies").insert(skillSynergies.map((s) => ({ ...s })));
    await trx("abilities").insert(
      abilities.map(({ effects, ...a }) => ({
        ...a,
        ownerId: owner.id,
        effects: effects && JSON.stringify(effects),
      })),
    );
    await trx("items").insert(
      items.map(({ isSrd, effects, ...i }) => ({
        ...i,
        ownerId: ownerIf(!isSrd),
        effects: effects && JSON.stringify(effects),
      })),
    );
    await trx("spells").insert(
      spells.map(({ isSrd, effects, ...s }) => ({
        ...s,
        ownerId: ownerIf(!isSrd),
        effects: effects && JSON.stringify(effects),
      })),
    );
    await trx("characters").insert(
      characters.map(({ id, name, ...data }) => ({
        id,
        name,
        ownerId: owner.id,
        data: JSON.stringify(data),
      })),
    );
  });

  const counts = await Promise.all(
    ["skills", "skill_synergies", "abilities", "items", "spells", "characters"].map(
      async (table) => {
        const [{ total, owned }] = await db(table)
          .select(db.raw("count(*)::int as total"), db.raw("count(owner_id)::int as owned"));
        return `${table}: ${total} (${owned} owned by ${email})`;
      },
    ),
  );
  console.log(`Seeded:\n  ${counts.join("\n  ")}`);
} finally {
  await db.destroy();
}
