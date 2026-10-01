import type { Knex } from "knex";

// connect-pg-simple's session table (see its table.sql), managed here instead
// of created at runtime. Databases where the session store already created it
// are left as they are.
export async function up(knex: Knex) {
  if (await knex.schema.hasTable("session")) return;
  await knex.schema.createTable("session", (t) => {
    t.specificType("sid", "varchar").primary();
    t.json("sess").notNullable();
    t.timestamp("expire", { precision: 6, useTz: false }).notNullable();
    t.index("expire", "idx_session_expire");
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTableIfExists("session");
}
