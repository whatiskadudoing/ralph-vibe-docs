# Implementation Plan

## Current Status: Industrial Rebrand SLC COMPLETE ✅

**Verified:** January 2026 gap analysis confirms all three completed SLCs are production-ready.

| Activity | Spec Depth | Implemented | Status |
|----------|------------|-------------|--------|
| Grasp Value Proposition | Standard | Standard | ✅ COMPLETE |
| See How It Works | Standard | Standard | ✅ COMPLETE |
| Discover Features | Standard | Advanced | ✅ COMPLETE (with comparison table) |
| Browse Examples | Standard | Standard | ✅ COMPLETE (1 real + community CTA) |
| Get Answers | Standard | Standard | ✅ COMPLETE |
| Install Tool | Standard | Standard | ✅ COMPLETE |
| Design System | Full | Full | ✅ Industrial rebrand complete |

**Build:** ✅ Succeeds (`bun run build`)
**Code Quality:** Zero TODOs, no technical debt
**Deployment:** Ready for GitHub Pages

---

## Gap Analysis: What Remains

### Advanced Features Not Yet Implemented

| Activity | Advanced Feature | Spec Reference |
|----------|-----------------|----------------|
| Grasp Value Proposition | Rotating taglines ("Built for [builders/dreamers/shippers]") | grasp-value-proposition.md |
| Grasp Value Proposition | Particle/background effects | grasp-value-proposition.md |
| See How It Works | Scroll-triggered entrance animations | see-how-it-works.md |
| See How It Works | Interactive hover states on steps | see-how-it-works.md |
| ~~Discover Features~~ | ~~**Comparison table** (Original Ralph vs Ralph Vibe)~~ | ~~discover-features.md~~ ✅ DONE |
| Browse Examples | Project screenshots/previews | browse-examples.md |
| Browse Examples | Live GitHub stats per project | browse-examples.md |
| Get Answers | Searchable FAQ | get-answers.md |
| Get Answers | Category filters | get-answers.md |
| Install Tool | **Multiple install methods** (curl/npm/brew tabs) | install-tool.md |
| Install Tool | **OS detection** for install command | install-tool.md |

### Content Gap

The Examples section has only 1 real project (ClaudeApp). The second card is a placeholder inviting community contributions. This is a **content gap**, not a code gap — resolved by building more projects with Ralph Vibe.

---

## Recommended SLC Release: The Conversion Optimizer

**Audience:** Developers evaluating Ralph Vibe who need clearer differentiation and lower friction to try it.

**Value proposition:** Remove the two biggest conversion barriers:
1. "How is this different from just using Claude Code?" → Comparison table answers this visually
2. "Will this work on my machine?" → OS-aware install commands remove uncertainty

**Why this slice:**

1. **Comparison table directly addresses JTBD 3** — Visitors evaluating tools need to understand differentiation. The current Features section lists benefits but doesn't contrast them against the alternative (setting up Ralph manually).

2. **OS detection reduces friction** — Developers seeing a curl command may hesitate ("Does this work on Windows?"). Showing their OS-specific command with tabs for alternatives increases confidence.

3. **Both features are conversion-critical** — These aren't visual polish; they directly address the "should I try this?" decision point.

4. **Scope is tight** — Two substantial features that build on existing infrastructure (Features section, CopyButton component).

**Activities included:**

| Activity | Depth Change | Why Included |
|----------|--------------|--------------|
| Discover Features | Standard → Advanced | Comparison table is the clearest differentiation |
| Install Tool | Standard → Advanced | OS detection + method tabs reduce friction |

**What's NOT in this slice:**
- Rotating taglines (visual polish, not conversion-critical)
- Scroll animations (nice-to-have, not decision-changing)
- Searchable FAQ (useful at scale, not yet needed with 6 questions)
- Project screenshots (requires real projects first)

---
<!-- HUMAN VERIFICATION: Does this slice form a coherent, valuable product? -->
<!-- The Conversion Optimizer addresses the two most common conversion blockers directly. -->

## Phase 1: Comparison Table - CRITICAL

Add a visual comparison that shows why Ralph Vibe exists.

- [x] **Implement comparison table in Features section** [spec: discover-features.md] [file: src/components/Features.astro]
  - ✅ Added comparison table below feature cards
  - ✅ Two columns: "[Original Ralph Loop]" vs "[Ralph Vibe]" with bracket syntax
  - ✅ 5 rows contrasting pain points with solutions
  - ✅ Industrial styling: output card background, concrete borders, signal-colored solution badges
  - ✅ Responsive: side-by-side on desktop (600px+), stacked cards on mobile
  - ✅ Accessible: proper table semantics with scope="col", aria-label

---
<!-- CHECKPOINT: Verify comparison table renders correctly, is readable, and responsive -->

## Phase 2: Multi-Method Install with OS Detection

Transform the install command into an intelligent, OS-aware component.

- [x] **Create InstallCommand component with OS detection and method tabs** [spec: install-tool.md] [files: src/components/InstallCommand.astro (new), src/components/Hero.astro, src/components/Footer.astro]
  - ✅ Created new InstallCommand.astro component with tabbed interface
  - ✅ OS detection via navigator.userAgentData (modern) with navigator.platform fallback
  - ✅ Three install methods as tabs: curl (default fallback), npm, brew
  - ✅ Auto-select tab based on detected OS:
    - macOS: Selects brew tab
    - Linux: Selects curl tab
    - Windows: Selects npm tab
  - ✅ Each tab shows relevant command with CopyButton and method-specific note
  - ✅ Commands implemented with correct URLs
  - ✅ Industrial tab styling: concrete borders, signal accent on active tab, bracket syntax labels
  - ✅ Replaced install blocks in Hero.astro and Footer.astro
  - ✅ Graceful fallback: curl shown by default in SSR HTML before JS runs
  - ✅ Full keyboard navigation: Arrow keys, Home/End, proper tabindex management
  - ✅ ARIA attributes for accessibility: role="tab", role="tabpanel", aria-selected, aria-controls
  - ✅ "Detected: [OS]" hint shown after OS detection
  - ✅ Mobile responsive: tabs compact on small screens (375px+)

---
<!-- CHECKPOINT: Verify OS detection works, tabs switch correctly, all commands copy properly -->

## Phase 3: Polish & Integration

Ensure both features integrate seamlessly with existing design.

- [ ] **Integration testing and responsive refinement** [files: src/components/Features.astro, src/components/InstallCommand.astro]
  - Test comparison table at all breakpoints (375px, 768px, 1024px+)
  - Test install tabs at all breakpoints
  - Verify keyboard navigation for tabs (arrow keys, Enter)
  - Verify ARIA attributes for tab panel pattern
  - Test reduced-motion preferences (instant tab switch, no table animations)
  - Run `bun run build` to verify no build errors
  - Manual browser testing: Chrome, Firefox, Safari

---
<!-- CHECKPOINT: Full conversion optimizer complete, build succeeds, ready for deployment -->

## Future Work (Outside Current Scope)

Insights noted during gap analysis, deferred to future releases:

### Next SLC: "The Polish Release"

| Enhancement | Depth | Value |
|-------------|-------|-------|
| Rotating taglines | Advanced | "Built for [builders/dreamers/shippers]" animation |
| Scroll animations | Advanced | Subtle entrance for How It Works steps |
| Interactive step hover | Advanced | Steps highlight with detail on hover |

### Content Priorities

| Priority | Description |
|----------|-------------|
| More example projects | Build real projects with Ralph Vibe to replace placeholder |
| Video demo | Show the full ralph init --vibe flow in action |
| Blog post | Explain the Ralph Wiggum technique and why Ralph Vibe exists |

### Future Enhancements

| Enhancement | Description |
|-------------|-------------|
| Searchable FAQ | Category filters, search input (when FAQ grows) |
| Project screenshots | Visual previews in Examples section |
| Analytics | Track copy button clicks, scroll depth, conversion funnel |
| Dark mode toggle | System preference with manual override (site is dark by default) |
| Paper/screen textures | PNG grain overlays for extra tactile feel |

---

## Completed Releases (Archive)

### SLC 3: Industrial Rebrand ✅ (January 2026)

**Value delivered:** Transformed visual identity from "generic tech landing page" to "Autonomous Build Station" — industrial control room aesthetic that reinforces the autonomous machinery narrative.

- ✅ Full design system implementation (void/signal/output palette)
- ✅ Space Grotesk + JetBrains Mono typography
- ✅ Industrial shadows and edge highlights
- ✅ Corner marks for page framing
- ✅ All components restyled to industrial aesthetic

### SLC 2: Credibility Layer ✅ (January 2026)

**Value delivered:** Real projects replace placeholders, GitHub stats badge shows activity, documentation link completes conversion funnel.

- ✅ ClaudeApp as real example project
- ✅ GitHub stars badge in Hero (fetched at build time)
- ✅ Daily rebuild workflow for fresh stats
- ✅ Documentation link in Footer

### SLC 1: Elevator Pitch ✅ (January 2026)

**Value delivered:** A visitor lands on the page, immediately understands what Ralph Vibe does, sees the 5-step flow, reads why it works, gets their questions answered, and copies the install command.

- ✅ Terminal animation with typing effects
- ✅ Copy button with Clipboard API + fallback
- ✅ FAQ accordion with one-at-a-time toggle
- ✅ Responsive layout
- ✅ Accessibility (skip-to-main, ARIA, keyboard navigation)
- ✅ SEO meta tags + Open Graph image

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
