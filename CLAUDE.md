# Herofolio

A D&D 3.5 character management app built with React, TypeScript, Vite, Tailwind CSS v4, and Recoil for state management. An Express API serves data from Postgres.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for bundling
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Recoil** for global state
- **SWR** for data fetching
- **React Router v7**
- **Express 5 + Knex** API over **Postgres**, run with `tsx`

## Commands

```bash
npm start          # Vite (with --host for LAN access) + API on :4002, proxied at /api
npm run migrate    # Create the schema if needed and apply migrations
npm run seed       # Load server/seed/data (SEED_CONFIRM=1 to overwrite existing data)
npm run typecheck  # Typecheck the frontend and the server
npm run build      # Production build
npm run serve      # Preview production build
```

## Project Structure

- `src/components/` — React UI components
- `src/store/` — Recoil atoms, server state, and the stat engine (`src/store/stats/`)
- `server/` — Express API (`routes.ts`), Knex config, migrations (`db/migrations/`)
- `server/seed/data/` — seed data: Arn and the SRD compendiums

## Database

- All tables live in the `herofolio` Postgres schema (`DB_SCHEMA`); the production database is shared with other apps, so never touch other schemas.
- Compendium rows with a null `owner_id` are SRD content everyone sees. Rows with an owner are that user's private additions. Only SRD content ships as shared data.
- Characters store everything except id, owner, and name in a `data` jsonb column.
- Knex converts camelCase in queries to snake_case columns, and rows back to camelCase.
