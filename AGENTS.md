# AGENTS.md - Operational Guide

## Build & Run

This is an Astro site with Tailwind CSS (v4).

- **Install:** `npm install`
- **Dev:** `npm run dev` (starts local server at localhost:4321)
- **Build:** `npm run build` (outputs to dist/)
- **Preview:** `npm run preview` (preview production build)

---

## Validation Checklist

Before marking a task complete:

1. [ ] `npm run build` completes without errors
2. [ ] All 9 sections render correctly in browser
3. [ ] External links have `target="_blank" rel="noopener noreferrer"`
4. [ ] All anchor links point to valid section IDs
5. [ ] Page renders without JavaScript (FAQ uses details/summary)
6. [ ] Visual inspection in browser at mobile and desktop widths

---

## Operational Notes

- Tailwind v4 uses CSS-based config with `@theme` in global.css (no tailwind.config.mjs)
- Colors defined as CSS custom properties: `--color-bg-primary`, `--color-accent`, etc.
- Use `[--color-name]` syntax in Tailwind classes: `bg-[--color-bg-primary]`
- GitHub Pages: build outputs to dist/, configure Pages to serve from dist/ or use gh-pages branch

---

## Codebase Patterns

- Astro components in src/components/
- Single page layout in src/pages/index.astro
- Global styles in src/styles/global.css
- Base layout in src/layouts/Layout.astro
- Mobile-first responsive design with `md:` and `lg:` breakpoints
- Semantic HTML5 elements: `<header>`, `<main>`, `<section>`, `<footer>`
- Section IDs for anchor navigation: `#about`, `#how-it-works`, `#commands`, `#quick-start`, `#faq`
