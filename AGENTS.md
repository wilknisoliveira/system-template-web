# AGENTS.md

## MANDATORY: Read Architecture First

**ALWAYS read `ARCHITECTURE.md` before planning or implementing any changes.**

## Commands

```bash
npm run dev      # Start dev server at localhost:5173
npm run build   # TypeScript build + Vite build (tsc -b && vite build)
npm run lint   # ESLint code checks
npm run preview # Preview production build locally
```

## Tech Stack

- React 19 + Vite 7 + TypeScript
- React Router 7
- Bootstrap 5 (react-bootstrap)
- Sass for styling
- React Icons

## Build Order

`npm run build` runs `tsc -b` first, then `vite build`. Run `npm run lint` separately (not automated in build).

## Notes

- Dependencies already installed (node_modules present)
- No monorepo - single package
- No codegen or special env loading