# AGENTS.md - Operational Guide

## Build & Run

This is a static HTML/CSS site with no build step.

- **Build:** N/A (static files, no build required)
- **Test:** N/A (no test framework)
- **Lint:** N/A (no linter configured)
- **Preview:** Open `index.html` in a browser, or use `python3 -m http.server 8000`

---

## Validation Checklist

Before marking a task complete:

1. [x] Page size under 500KB: `wc -c index.html styles.css`
2. [x] External links have `target="_blank" rel="noopener noreferrer"`
3. [x] All anchor links point to valid section IDs
4. [x] Page renders without JavaScript
5. [ ] Visual inspection in browser at mobile and desktop widths

---

## Operational Notes

- No package manager or build tools needed
- GitHub Pages compatible: deploy from main branch `/` (root)
- For local preview with proper MIME types: `python3 -m http.server 8000`
- Total page size validation: `wc -c index.html styles.css` (must be under 500KB)

---

## Codebase Patterns

- CSS variables defined in `:root` for colors, fonts, spacing
- BEM-lite class naming: `.site-header`, `.nav-container`, `.btn-primary`
- Mobile-first responsive design with `@media (min-width: ...)` breakpoints
- Semantic HTML5 elements: `<header>`, `<main>`, `<section>`, `<footer>`
- Section IDs match anchor link hrefs: `#about`, `#quick-start`, `#commands`, `#philosophy`
