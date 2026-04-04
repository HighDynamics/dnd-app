# DnD App

A D&D character management app built with React, TypeScript, Vite, Tailwind CSS v4, and Recoil for state management. Has a mock server via MirageJS.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for bundling
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Recoil** for global state
- **SWR** for data fetching
- **React Router v7**
- **MirageJS** for mock server/API

## Commands

```bash
npm start          # Dev server (with --host for LAN access)
npm run build      # Production build
npm run serve      # Preview production build
npm run deploy     # Build and deploy to GitHub Pages
```

## Project Structure

- `src/components/` — React UI components
- `src/server/` — MirageJS mock server and data (characters, skills)
- `src/store/` — Recoil atoms and server state
