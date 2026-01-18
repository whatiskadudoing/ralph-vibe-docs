# Implementation Plan

## Phase 1: Build System Setup ✓

- [x] Initialize Astro project with `npm create astro@latest` in a temp directory, then migrate config files (package.json, astro.config.mjs, tsconfig.json) to project root
- [x] Install and configure Tailwind CSS with `@tailwindcss/vite` integration (Tailwind v4), custom color palette defined in global.css @theme block
- [x] Create src/ directory structure: layouts/, components/, pages/, styles/
- [x] Create src/styles/global.css with Tailwind directives and Inter + JetBrains Mono font imports
- [x] Create src/layouts/Layout.astro base template with HTML head, meta tags, and global styles

**Note:** Tailwind v4 uses CSS-based configuration with `@theme` block instead of tailwind.config.mjs. Colors are defined as CSS custom properties (e.g., `--color-bg-primary: #FAF9F6`).

## Phase 2: Core Components ✓

- [x] Create src/components/Nav.astro with sticky header, logo, and navigation links for all 9 sections (desktop version)
- [x] Create src/components/Footer.astro with copyright, external links (GitHub, npm), and proper rel="noopener noreferrer" attributes
- [x] Create src/components/CodeBlock.astro with copy-to-clipboard button and JavaScript functionality
- [x] Create src/components/Card.astro reusable component with white background, border, shadow, and padding variants (used in Commands and Philosophy sections)

## Phase 3: Page Sections (Part 1) ✓

- [x] Create src/pages/index.astro with Layout and all sections implemented inline
- [x] Create Hero section with headline, tagline, install command, and CTA buttons
- [x] Create About section with Ralph character description and cream styling
- [x] Create Quick Start section with numbered steps and code blocks

**Note:** Sections implemented inline in index.astro rather than as separate components (Hero.astro). This keeps the codebase simpler for a single-page site.

## Phase 4: Page Sections (Part 2) ✓

- [x] Create "How It Works" section with 4-step workflow visualization (Interview → Specs → Plan → Build)
- [x] Create Commands section with card grid layout showing ralph init, ralph start, ralph spec, ralph plan, ralph work, and --vibe flag
- [x] Create Philosophy/Principles section with 5-card grid (Fresh Context, Specs as Truth, Atomic Tasks, Test-Driven, File Persistence)

## Phase 5: Interactive Components ✓

- [x] Create FAQ section in index.astro using native HTML details/summary elements (works without JS)
- [x] Add mobile hamburger menu to Nav.astro with toggle JavaScript and slide-out menu

**Note:** FAQ uses native `<details>`/`<summary>` elements instead of a separate FAQItem.astro component. This ensures accordion works without JavaScript while keeping implementation simple.

## Phase 6: Responsive & Polish

- [x] Implement responsive breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px) across all components
- [x] Add alternating section backgrounds (#FAF9F6 and #F5F3EF) and proper section spacing (80-120px)
- [x] Test all interactive features: copy buttons, FAQ accordion, mobile menu, smooth scroll navigation
- [x] Verify GitHub Pages deployment: update any paths if needed, test `astro build` produces valid dist/

**Note:** Responsive breakpoints now use `sm:` (640px), `md:` (768px), and `lg:` (1024px). All sections use responsive padding (`px-4 sm:px-6`), responsive typography (`text-sm md:text-base`), and responsive vertical spacing (`py-16 md:py-20 lg:py-24`). Card component has responsive padding. Footer has responsive text sizes.

**Note:** Interactive features verified: (1) Copy buttons now use CodeBlock component in Hero and Quick Start sections with proper data-code attributes, (2) FAQ uses native details/summary elements, (3) Mobile menu has ARIA attributes and Escape key handling, (4) Smooth scroll via CSS scroll-behavior: smooth in global.css, (5) All external links have target="_blank" rel="noopener noreferrer".

**Note:** GitHub Pages deployment configured in astro.config.mjs with `site: 'https://whatiskadudoing.github.io'` and `base: '/ralph-vibe-docs'`. This ensures asset paths are correctly prefixed for deployment at `whatiskadudoing.github.io/ralph-vibe-docs/`.

## Phase 7: Cleanup & Verification

- [x] Remove old index.html and styles.css after verifying Astro build works
- [ ] Run final checks: all 9 sections render, colors match spec, page loads <2s, no layout shifts
- [ ] Update README.md with new dev commands (npm install, npm run dev, npm run build)
