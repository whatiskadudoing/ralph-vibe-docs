# AGENTS.md - Operational Guide

<!-- KEEP THIS FILE BRIEF (~60 lines max). It loads every iteration. -->
<!-- Only operational commands and patterns. NO status updates here. -->

## Commands

- **Build:** `npm run build`
- **Test:** N/A (no test framework yet)
- **Lint/Types:** `npm run check`
- **Dev:** `npm run dev`

## Validation (Backpressure)

Before marking task complete, ALL must pass:
1. Tests pass (exit code 0)
2. Lint passes
3. Types check
4. Build succeeds

If any fail → fix before committing.

## Patterns

- Components: `src/components/*.astro`
- Pages: `src/pages/*.astro`
- Styles: `src/styles/global.css` (Tailwind v4)
- Static assets: `public/`

## Notes

- Astro uses Tailwind v4 via `@tailwindcss/vite` plugin
- BASE_URL is `/ralph-website` - use `${import.meta.env.BASE_URL}/` for static asset paths
- GitHub Pages deploy on push to main via `.github/workflows/deploy.yml`