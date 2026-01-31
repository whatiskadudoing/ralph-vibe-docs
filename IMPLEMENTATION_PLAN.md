# Implementation Plan

## Current Status: Elevator Pitch SLC COMPLETE ✅

**Verified:** January 2026 gap analysis confirms all 6 activities are implemented at their planned depths.

| Activity | Spec Depth | Implemented | Status |
|----------|------------|-------------|--------|
| Grasp Value Proposition | Standard | Standard | ✅ COMPLETE |
| See How It Works | Basic | Basic+ | ✅ COMPLETE |
| Discover Features | Basic | Basic+ | ✅ COMPLETE |
| Browse Examples | Basic | Basic+ | ✅ COMPLETE (real example + community CTA) |
| Get Answers | Standard | Standard | ✅ COMPLETE |
| Install Tool | Standard | Standard | ✅ COMPLETE |

**Build:** ✅ Succeeds (`bun run build` - 963ms)
**Deployment:** Ready for GitHub Pages

---

## Recommended Next SLC: The Credibility Layer

**Audience:** Same primary audience, but addressing users who need more trust signals before committing.

**Value proposition:** Transform placeholder social proof into real credibility signals. Visitors see actual projects built with Ralph, live GitHub activity, and a path to documentation — answering "does this actually work?" before they commit to trying it.

**Activities included:**

| Activity | Depth Upgrade | Why Included |
|----------|---------------|--------------|
| Browse Examples | Basic → Standard | Real projects with descriptions build trust (JTBD 3: Evaluate Tool Fit) |
| Install Tool | Standard → Standard+ | Add GitHub stats badge + docs link for credibility |

**What's NOT in this slice:**
- Advanced depth features (rotating headlines, particle effects, searchable FAQ)
- Dark mode toggle
- Analytics tracking
- Multiple install methods (npm, brew)
- Screenshot previews for examples
- OS detection for install commands

---
<!-- HUMAN VERIFICATION: Does this slice form a coherent, valuable product? -->
<!-- The Elevator Pitch SLC delivers the core value proposition. The Credibility Layer adds the social proof that converts skeptics. -->

## Phase 1: Real Example Projects - CRITICAL

Replace placeholder example URLs with real Ralph-built projects. This is the single most impactful change for credibility.

- [x] **Update Examples section with real project URLs** [spec: browse-examples.md] [file: src/components/Examples.astro]
  - Replaced placeholder with ClaudeApp (verified Ralph-built: has AGENTS.md, IMPLEMENTATION_PLAN.md, specs/)
  - Added "Your Project?" placeholder card with honest "community just getting started" messaging
  - GitHub link verified working: https://github.com/whatiskadudoing/claudeapp
  - Second card links to ralph-vibe repo for community contribution discovery

---
<!-- CHECKPOINT: Verify real example URLs are live and accessible before proceeding -->

## Phase 2: GitHub Credibility Badge

Add live GitHub stats (stars, forks) fetched at build time to demonstrate project activity and community adoption.

- [x] **Implement GitHubStats component with build-time API fetch** [spec: browse-examples.md (Advanced depth)] [file: src/components/GitHubStats.astro] [research: research/apis/github.md]
  - Component already existed with full implementation (API fetch, error handling, number formatting)
  - Added to Hero section next to "view on GitHub" link with vertical separator
  - Displays star count (and forks if > 0) fetched at build time
  - Build logs confirm API working: "GitHub API: 51/60 requests remaining"

- [ ] **Add daily rebuild workflow for fresh stats** [research: research/apis/github.md]
  - Create `.github/workflows/daily-build.yml`
  - Schedule cron job for daily rebuilds (e.g., 00:00 UTC)
  - Ensure GitHub Pages deployment triggers on schedule
  - Test workflow runs successfully

---
<!-- CHECKPOINT: Verify GitHub stats display correctly and workflow runs -->

## Phase 3: Documentation Link

Add "Read the docs" link to complete the conversion funnel for users who want to learn more before installing.

- [ ] **Add documentation link to Footer section** [spec: install-tool.md] [file: src/components/Footer.astro]
  - Add "Read the docs" link alongside "View on GitHub"
  - Link to: `https://github.com/whatiskadudoing/ralph-vibe-docs` (or docs subdomain when available)
  - Style consistently with existing GitHub link
  - Ensure `target="_blank"` and `rel="noopener noreferrer"`
  - Update Hero section to include docs link if space allows

---
<!-- CHECKPOINT: Full credibility layer complete -->

## Future Work (Outside Current Scope)

Insights noted during gap analysis, deferred to future releases:

### Next SLC: "The Power User Experience"
| Enhancement | Depth | Value |
|-------------|-------|-------|
| Multiple install methods | Advanced | Tabs for curl/npm/brew with OS detection |
| Searchable FAQ | Advanced | Category filters, search input for large FAQ |
| Dark mode toggle | Standard | System preference with manual override |

### Future Enhancements
| Enhancement | Description |
|-------------|-------------|
| Rotating headlines | "Built for [builders/dreamers/shippers]" animation (grasp-value-proposition Advanced) |
| Advanced terminal effects | Shimmer, cursor blink, more realistic delays |
| Comparison table | Original Ralph Loop vs Ralph Vibe side-by-side (discover-features Advanced) |
| Project screenshots | Visual previews for example projects (browse-examples Advanced) |
| Analytics tracking | Track install command copies, scroll depth, conversion funnel |
| Live GitHub stats | Client-side refresh for always-current numbers |

---

## Completed Releases (Archive)

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

**Minor gaps (non-blocking):**
- Example GitHub URLs are placeholders (`/example/` org) — acceptable per spec
- Footer missing "Read the docs" link — docs site may not exist yet
- CopyButton shows "Failed" not "Failed to copy" — minor UX detail

| Phase | Status |
|-------|--------|
| Phase 1: Project Foundation & Vertical Slice | ✅ Complete |
| Phase 2: Terminal Animation | ✅ Complete |
| Phase 3: How It Works Section | ✅ Complete |
| Phase 4: Features Section | ✅ Complete |
| Phase 5: Examples Section | ✅ Complete (placeholder URLs) |
| Phase 6: FAQ Section | ✅ Complete |
| Phase 7: Footer CTA & Polish | ✅ Complete |

---

## Research Artifacts (Reference)

```
research/
├── readiness.md              # Build readiness: READY
├── inspiration.md            # Competitor analysis
├── api-validation.md         # API test results
├── apis/
│   ├── github.md             # GitHub API (for stats badge) ← RELEVANT
│   └── clipboard.md          # Clipboard API (implemented)
└── approaches/
    ├── terminal-animation.md # Hero terminal (implemented)
    ├── accordion-faq.md      # FAQ section (implemented)
    ├── copy-button.md        # Copy-to-clipboard (implemented)
    ├── responsive-layout.md  # Mobile/tablet/desktop (implemented)
    └── astro-project-structure.md  # Project setup (implemented)
```
