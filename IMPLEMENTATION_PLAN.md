# Implementation Plan

## Phase 1: Build System Setup ✓

- [x] Initialize Astro project with `npm create astro@latest` in a temp directory, then migrate config files (package.json, astro.config.mjs, tsconfig.json) to project root
- [x] Install and configure Tailwind CSS with `@tailwindcss/vite` integration (Tailwind v4), custom color palette defined in global.css @theme block
- [x] Create src/ directory structure: layouts/, components/, pages/, styles/
- [x] Create src/styles/global.css with Tailwind directives and Inter + JetBrains Mono font imports
- [x] Create src/layouts/Layout.astro base template with HTML head, meta tags, and global styles

**Note:** Tailwind v4 uses CSS-based configuration with `@theme` block instead of tailwind.config.mjs. Colors are defined as CSS custom properties (e.g., `--color-bg-primary: #FAF9F6`).

## Phase 2: Core Components

- [x] Create src/components/Nav.astro with sticky header, logo, and navigation links for all 9 sections (desktop version)
- [x] Create src/components/Footer.astro with copyright, external links (GitHub, npm), and proper rel="noopener noreferrer" attributes
- [x] Create src/components/CodeBlock.astro with copy-to-clipboard button and JavaScript functionality
- [x] Create src/components/Card.astro reusable component with white background, border, shadow, and padding variants (used in Commands and Philosophy sections)

## Phase 3: Section Components (Part 1)

- [ ] Create src/components/Hero.astro with headline, tagline, install command CodeBlock, and CTA buttons
- [ ] Create src/pages/index.astro with Layout and placeholder sections to verify build works
- [ ] Create About section in index.astro with Ralph character description and cream/orange styling
- [ ] Create Quick Start section in index.astro with numbered steps and CodeBlock components

## Phase 4: Section Components (Part 2)

- [ ] Create "How It Works" section with 3-step workflow visualization (Write → Run → Vibe)
- [ ] Create Commands section with card grid layout showing ralph init, ralph work, ralph review, --vibe flag highlight
- [ ] Create Philosophy/Principles section with 5-card grid (icons/numbers, titles, descriptions)

## Phase 5: Interactive Components

- [ ] Create src/components/FAQItem.astro accordion component with expand/collapse JavaScript
- [ ] Create FAQ section in index.astro with 5-6 FAQ items using FAQItem component
- [ ] Add mobile hamburger menu to Nav.astro with toggle JavaScript and slide-out menu

## Phase 6: Responsive & Polish

- [ ] Implement responsive breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px) across all components
- [ ] Add alternating section backgrounds (#FAF9F6 and #F5F3EF) and proper section spacing (80-120px)
- [ ] Test all interactive features: copy buttons, FAQ accordion, mobile menu, smooth scroll navigation
- [ ] Verify GitHub Pages deployment: update any paths if needed, test `astro build` produces valid dist/

## Phase 7: Cleanup & Verification

- [ ] Remove old index.html and styles.css after verifying Astro build works
- [ ] Run final checks: all 9 sections render, colors match spec, page loads <2s, no layout shifts
- [ ] Update README.md with new dev commands (npm install, npm run dev, npm run build)
