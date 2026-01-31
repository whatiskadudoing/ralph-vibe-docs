# Implementation Plan

## Current Status: Credibility Layer SLC COMPLETE ✅

**Verified:** January 2026 gap analysis confirms Elevator Pitch + Credibility Layer are complete.

| Activity | Spec Depth | Implemented | Status |
|----------|------------|-------------|--------|
| Grasp Value Proposition | Standard | Standard | ✅ COMPLETE |
| See How It Works | Basic | Basic+ | ✅ COMPLETE |
| Discover Features | Basic | Basic+ | ✅ COMPLETE |
| Browse Examples | Standard | Standard | ✅ COMPLETE (real example + community CTA) |
| Get Answers | Standard | Standard | ✅ COMPLETE |
| Install Tool | Standard | Standard | ✅ COMPLETE |

**Build:** ✅ Succeeds (`bun run build`)
**Deployment:** Ready for GitHub Pages

---

## Gap Analysis: Design System Divergence

### Critical Finding

The design system specification (`specs/design-system.md`) defines a dark "Autonomous Build Station" industrial aesthetic inspired by NERV headquarters (Evangelion). However, the current implementation uses a light theme with GitHub's color palette.

| Aspect | Spec | Current Implementation | Gap |
|--------|------|------------------------|-----|
| Background | `--void: #0C0C0C` (near-black) | `white` / light grays | ❌ Major |
| Accent | `--signal: #D4522A` (burnt orange) | `#0969da` (GitHub blue) | ❌ Major |
| Primary Font | Space Grotesk | System UI fonts | ❌ Major |
| Mono Font | JetBrains Mono | System monospace | ⚠️ Minor |
| Visual Language | Industrial, worn machinery | Clean tech startup | ❌ Major |

**Exception:** The `TerminalDemo` component already uses a dark theme (Catppuccin Mocha: `#1e1e2e`), but not the spec'd industrial palette.

### Decision Required

**The next SLC has two paths:**

1. **Path A: Design System Overhaul** — Rewrite CSS to match the NERV industrial aesthetic. High effort, transforms the visual identity.

2. **Path B: Power User Experience** — Keep current light theme, add Advanced depth features (comparison table, OS detection, searchable FAQ). Lower effort, incremental improvement.

---

## Recommended SLC Release: The Industrial Rebrand

**Audience:** Developers who want autonomous AI coding — but the current light/generic design doesn't communicate the "industrial automation" narrative that differentiates Ralph Vibe.

**Value proposition:** Transform the visual identity from "generic tech landing page" to "Autonomous Build Station" — an industrial control room aesthetic that reinforces the core message: you set the specs, walk away, and the machine builds while you're gone.

**Why this slice:**

1. **Design carries meaning** — The industrial aesthetic isn't decoration; it reinforces the product's core value (autonomous machinery)
2. **Differentiation** — Most AI coding tools have clean, corporate aesthetics. NERV/industrial is distinctive and memorable
3. **The terminal already hints at it** — The dark terminal creates visual tension with the light page. Harmonizing the design feels unfinished
4. **Research is complete** — The design system spec is comprehensive with exact tokens, patterns, and component examples

**Activities included:**

| Activity | Depth Change | Why Included |
|----------|--------------|--------------|
| All Activities | Visual only | Restyle existing components to industrial palette |
| Design System | Full implementation | Core infrastructure for all styling |

**What's NOT in this slice:**
- New features (rotating headlines, comparison table, searchable FAQ)
- OS detection for install commands
- Additional example projects
- Analytics or tracking

---
<!-- HUMAN VERIFICATION: Does this slice form a coherent, valuable product? -->
<!-- The Industrial Rebrand transforms the visual identity to match the product narrative. It's a polish release, not a feature release. -->

## Phase 1: Design System Foundation - CRITICAL

Implement the core design tokens and infrastructure that all components will use.

- [x] **Implement design system CSS custom properties and base styles** [spec: design-system.md] [file: src/styles/global.css]
  - Replace current GitHub-based tokens with industrial palette (void/signal/output colors)
  - Add Space Grotesk and JetBrains Mono via Google Fonts
  - Add spacing scale (4px to 96px), typography scale, animation timing tokens
  - Update body background to `--void`, text to `--text-primary`
  - Add industrial shadow system (no blue tint, solid black shadows)
  - Update reduced motion preferences
  - Update skip-to-main link styling to use `--signal`

---
<!-- CHECKPOINT: Verify design tokens load correctly, page has dark background, fonts render -->

## Phase 2: Hero & Terminal Restyle

Apply industrial design to the hero section — the most impactful visual change.

- [x] **Restyle Hero section to industrial aesthetic** [spec: design-system.md, grasp-value-proposition.md] [file: src/components/Hero.astro]
  - Updated `.headline` to use Space Grotesk (`--font-sans`), `--text-primary` color
  - Updated `.subheadline` to use `--text-secondary` color
  - Restyled `.code-wrapper` install block: `--void` background, `--concrete` border, `--signal` accent on code
  - Updated CopyButton.astro: `--metal` background, `--concrete` border, signal hover states
  - Updated GitHubStats.astro: `--text-secondary` text, `--signal` icons, monospace font
  - Link colors now use `--signal` with `--signal-glow` hover

- [x] **Restyle TerminalDemo to match industrial palette** [spec: design-system.md] [file: src/components/TerminalDemo.astro]
  - Replaced Catppuccin colors with spec'd industrial colors
  - Background: `--void-warm` (#121210)
  - Border: `--concrete` (#1A1918), rounded to 16px per spec
  - Header: `--concrete` background with industrial muted buttons
  - Text: `--text-primary` (#E8E4DC)
  - Accent (star): `--signal` (#D4522A)
  - Success checkmarks: Using `--signal` for cohesive orange theme
  - Spinner: Using `--signal` color, 800ms per spec
  - Added inner edge highlight for depth
  - Cursor blink uses `--signal` color

---
<!-- CHECKPOINT: Verify Hero looks cohesive on dark background, terminal integrates smoothly -->

## Phase 3: Content Sections Restyle

Apply industrial design to remaining content sections.

- [x] **Restyle HowItWorks section to industrial aesthetic** [spec: design-system.md, see-how-it-works.md] [file: src/components/HowItWorks.astro]
  - Removed emoji icons, replaced with bracketed step numbers `[01]` through `[05]` in `--bracket` color
  - Step cards: `--void-warm` background, `--concrete` border, `--text-primary`/`--text-secondary` text
  - Added hover lift effect with shadow expansion
  - Arrows: Split into `.arrow-line` (gray) and `.arrow-head` (signal orange)
  - Callout: `--void-warm` background with `--signal` colored code element
  - Updated spacing to use design system tokens (--space-X)
  - Added proper typography (font-sans, font-mono)

- [ ] **Restyle Features section to output card design** [spec: design-system.md, discover-features.md] [file: src/components/Features.astro]
  - Feature cards: `--output` (#E8E4DC) off-white background
  - Cards float on `--void` background
  - Add industrial shadow (solid black, 30-40% opacity)
  - Icon styling: Consider stroke-only icons in `--signal`
  - Card hover: Subtle lift (translateY -4px), shadow expansion
  - Optional: Add paper texture overlay (3-5% opacity)

- [ ] **Restyle Examples and FAQ sections to industrial aesthetic** [spec: design-system.md] [files: src/components/Examples.astro, src/components/FAQ.astro]
  - Examples: Output cards with bracketed type badges `[Web App]` in `--bracket` color
  - FAQ: Dark background, `--concrete` borders, `--signal` expand icons (+/−)
  - Maintain accessibility (focus states, keyboard navigation)

---
<!-- CHECKPOINT: Verify all content sections harmonize with industrial theme -->

## Phase 4: Footer & Final Polish

Complete the design transformation with footer and site-wide polish.

- [ ] **Restyle Footer CTA section to industrial aesthetic** [spec: design-system.md, install-tool.md] [file: src/components/Footer.astro]
  - Decision: Use `--signal` background for high-impact CTA OR continue `--void` with signal accent card
  - Install command: Industrial code block styling
  - Links: Ghost button style with `--signal` hover
  - Tagline styling: Industrial typography

- [ ] **Update Layout and site-wide elements** [spec: design-system.md] [file: src/components/Layout.astro]
  - Update favicon if needed (consider industrial-themed icon)
  - Verify Open Graph image still works against new design (may need update)
  - Add any ambient industrial elements (section dividers, corner marks)

---
<!-- CHECKPOINT: Full industrial rebrand complete, verify build succeeds -->

## Future Work (Outside Current Scope)

Insights noted during gap analysis, deferred to future releases:

### Next SLC: "The Power User Experience"

| Enhancement | Depth | Value |
|-------------|-------|-------|
| Multiple install methods | Advanced | Tabs for curl/npm/brew with OS detection |
| Searchable FAQ | Advanced | Category filters, search input for large FAQ |
| Comparison table | Advanced | Original Ralph Loop vs Ralph Vibe side-by-side |

### Future Enhancements

| Enhancement | Description |
|-------------|-------------|
| Rotating headlines | "Built for [builders/dreamers/shippers]" animation (grasp-value-proposition Advanced) |
| Scroll animations | Subtle entrance animations for How It Works (see-how-it-works Advanced) |
| Project screenshots | Visual previews for example projects (browse-examples Advanced) |
| Dark mode toggle | System preference with manual override (though site is now dark by default) |
| Analytics tracking | Track install command copies, scroll depth, conversion funnel |
| Paper/screen textures | Subtle grain overlays for output cards and terminal |

---

## Completed Releases (Archive)

### SLC 2: Credibility Layer ✅ (January 2026)

**Value delivered:** Real projects replace placeholders, GitHub stats badge shows activity, documentation link completes conversion funnel.

- ✅ ClaudeApp as real example project
- ✅ GitHub stars badge in Hero (fetched at build time)
- ✅ Daily rebuild workflow for fresh stats
- ✅ Documentation link in Footer

### SLC 1: Elevator Pitch ✅ (January 2026)

**Value delivered:** A visitor lands on the page, immediately understands what Ralph Vibe does, sees the 5-step flow, reads why it works, gets their questions answered, and copies the install command.

**Verified Working:**
- ✅ Terminal animation with typing effects, status cycling, playful "Go grab a beer" message
- ✅ Copy button with Clipboard API + execCommand fallback, 2-second feedback
- ✅ FAQ accordion with CSS grid animation, one-at-a-time toggle
- ✅ Responsive layout (mobile vertical stacking, desktop horizontal flow)
- ✅ Accessibility (skip-to-main, ARIA labels, keyboard navigation, focus states)
- ✅ SEO meta tags + Open Graph image (1200x630)
- ✅ `prefers-reduced-motion` support throughout
- ✅ `<noscript>` fallbacks for terminal

---

## Research Artifacts (Reference)

```
research/
├── readiness.md              # Build readiness: READY
├── inspiration.md            # Competitor analysis
├── api-validation.md         # API test results
├── apis/
│   ├── github.md             # GitHub API (for stats badge)
│   └── clipboard.md          # Clipboard API (implemented)
└── approaches/
    ├── terminal-animation.md # Hero terminal (implemented)
    ├── accordion-faq.md      # FAQ section (implemented)
    ├── copy-button.md        # Copy-to-clipboard (implemented)
    ├── responsive-layout.md  # Mobile/tablet/desktop (implemented)
    └── astro-project-structure.md  # Project setup (implemented)
```
