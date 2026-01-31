# Implementation Plan

## Recommended SLC Release: "The Elevator Pitch"

**Audience:** Developers who want to build apps autonomously using AI — from experienced engineers seeking more leverage to newer developers tackling ambitious projects solo.

**Value proposition:** A visitor lands on the page, immediately understands what Ralph Vibe does ("describe it, walk away, working code"), sees the 5-step flow, reads why it works, gets their questions answered, and copies the install command. One page, one job: convince them to try it.

**Activities included:**

| Activity | Depth | Why Included |
|----------|-------|--------------|
| Grasp Value Proposition | Standard | Core hook - animated terminal demo sells the "walk away" promise |
| See How It Works | Basic | Essential context - shows the 5-step flow so visitors trust the magic |
| Discover Features | Basic | Addresses "why not just use Claude Code?" objection |
| Browse Examples | Basic | Social proof (placeholder repos acceptable for MVP) |
| Get Answers | Standard | FAQ accordion addresses decision blockers |
| Install Tool | Standard | Primary CTA with copy-to-clipboard - conversion point |

**What's NOT in this slice:**
- Advanced depth for any activity (rotating headlines, live GitHub stats, searchable FAQ)
- GitHub stats badge (optional enhancement deferred)
- Multiple install methods (brew, npm - curl only)
- Video demos or interactive terminals

---
<!-- HUMAN VERIFICATION: Does this slice form a coherent, valuable product? -->
<!-- Verification: YES - A visitor can understand the tool, see how it works, read features, see examples, get answers, and install. Complete evaluation-to-action journey. -->

## Phase 1: Project Foundation & Vertical Slice

**Goal:** Working site with hero section deployed to GitHub Pages. Proves the entire pipeline works.

- [x] Initialize Astro project with Tailwind CSS v4 and GitHub Pages deployment workflow
  - Set up `astro.config.mjs` with GitHub Pages base path
  - Configure Tailwind v4 with `@tailwindcss/vite`
  - Add GitHub Actions workflow for deploy
  - Create Layout component with SEO meta tags
  - Test build + deploy works end-to-end
  [spec: grasp-value-proposition.md] [research: approaches/astro-project-structure.md]

- [x] Implement Hero section with static content and copy button (no terminal animation yet)
  - Create Hero component with headline, subheadline, install command
  - Create CopyButton component with Clipboard API + fallback
  - Style with Tailwind (responsive: mobile/tablet/desktop)
  - Verify copy button works and shows "Copied!" feedback
  [spec: grasp-value-proposition.md, install-tool.md] [research: approaches/copy-button.md, apis/clipboard.md]

---
<!-- CHECKPOINT: Deploy working hero to GitHub Pages before proceeding -->

## Phase 2: Terminal Animation (Hero Enhancement)

**Goal:** The animated terminal demo that sells the "walk away" promise.

- [x] Implement TerminalDemo component with typing animation sequence
  - Build terminal UI shell (dark background, border, mock title bar)
  - Implement typing animation for `ralph init --vibe` command
  - Add status message cycling: Interviewing → Specs → Planning → Building
  - Show playful "Go grab a coffee. Or a beer." message
  - Display success state: files created, tests passing
  - Handle reduced-motion preference (show final state)
  - Add noscript fallback for static terminal
  [spec: grasp-value-proposition.md] [research: approaches/terminal-animation.md]

---
<!-- CHECKPOINT: Hero with animated terminal working before adding more sections -->

## Phase 3: How It Works Section

**Goal:** Visual diagram showing the 5-step Ralph flow.

- [x] Implement HowItWorks section with flow diagram
  - Create 5 step boxes: Init → Interview → Research → Plan → Build
  - Add icons/visual indicators for each step
  - Style arrows/connectors between steps
  - Responsive: horizontal on desktop, vertical stack on mobile
  - Add callout for `--vibe` mode ("chains everything automatically")
  [spec: see-how-it-works.md] [research: approaches/responsive-layout.md]

---
<!-- CHECKPOINT: Above-the-fold content complete (hero + flow) -->

## Phase 4: Features Section

**Goal:** Address the "why not just Claude Code?" objection with 4 differentiators.

- [x] Implement Features section with 4 feature cards
  - Create FeatureCard component (title, description, optional icon)
  - Add 4 features: Fresh Start, Specs Are Truth, No Homework, Tests Keep It Honest
  - Layout: 2x2 grid on tablet+, single column on mobile
  - Style cards with consistent visual treatment
  [spec: discover-features.md] [research: approaches/responsive-layout.md]

---
<!-- CHECKPOINT: Core value messaging complete -->

## Phase 5: Examples Section

**Goal:** Social proof showing real projects built with Ralph.

- [x] Implement Examples section with project cards
  - Create ExampleCard component (name, type badge, description, GitHub link)
  - Add 2 placeholder example projects (Task Manager, Weather API)
  - GitHub links open in new tab
  - Responsive: side-by-side on tablet+, stacked on mobile
  [spec: browse-examples.md]

---
<!-- CHECKPOINT: Social proof section complete -->

## Phase 6: FAQ Section

**Goal:** Address decision blockers with expandable Q&A.

- [x] Implement FAQ section with animated accordion
  - Use native `<details>/<summary>` for accessibility
  - Add CSS grid animation for smooth expand/collapse
  - Include all 6 FAQ items from spec
  - Optional: one-at-a-time behavior (close others when one opens)
  - Style with consistent visual treatment
  [spec: get-answers.md] [research: approaches/accordion-faq.md]

---
<!-- CHECKPOINT: All objections addressed -->

## Phase 7: Footer CTA & Polish

**Goal:** Final conversion opportunity + production readiness.

- [ ] Implement Footer section with reinforcing CTA
  - Add "Ready to build while AFK?" heading
  - Reuse CopyButton component for install command
  - Add GitHub link ("View on GitHub")
  - Style footer with appropriate spacing
  [spec: install-tool.md]

- [ ] Final polish and accessibility pass
  - Verify responsive layout at 375px, 768px, 1024px
  - Test keyboard navigation (tab order, Enter/Space activation)
  - Check color contrast meets WCAG AA
  - Test with prefers-reduced-motion
  - Verify page loads <3s on simulated 3G
  - Add favicon and og-image.png for social sharing
  [spec: all specs have test requirements]

---

## Future Work (Outside Current Scope)

Insights noted during analysis, deferred to future releases:

- **GitHub stats badge:** Live stars/forks via build-time API fetch (research complete in apis/github.md)
- **Advanced terminal effects:** Shimmer, cursor blink, more realistic delays
- **Rotating headlines:** "Built for [builders/dreamers/shippers]" animation
- **Comparison table:** Original Ralph Loop vs Ralph Vibe side-by-side
- **Real example projects:** Replace placeholders once actual Ralph-built projects exist
- **Searchable FAQ:** Category filters, search input
- **Multiple install methods:** Tabs for curl/npm/brew with OS detection
- **Analytics:** Track install command copies, scroll depth
- **Dark mode:** System preference toggle
