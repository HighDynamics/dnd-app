// Usage: tsx server/db/migrate.ts [rollback]
import { db } from "../db";
import { schema } from "../knexfile";

try {
  if (process.argv[2] === "rollback") {
    const [batch, reverted] = await db.migrate.rollback();
    console.log(
      reverted.length
        ? `Rolled back batch ${batch}: ${reverted.join(", ")}`
        : "Nothing to roll back.",
    );
  } else {
    // knex places its tables in the schema via searchPath but won't create the
    // schema itself, so make sure it exists first.
    await db.raw("create schema if not exists ??", [schema]);
    const [batch, applied] = await db.migrate.latest();
    console.log(
      applied.length
        ? `Batch ${batch} applied to "${schema}": ${applied.join(", ")}`
        : `"${schema}" is already up to date.`,
    );
  }
} finally {
  await db.destroy();
}
