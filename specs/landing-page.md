# Ralph Vibe Landing Page

## Overview

A single-page marketing and documentation website for Ralph Vibe, the CLI tool that automates the Ralph Wiggum technique for autonomous AI development. The site lives in its own GitHub repository and is hosted on GitHub Pages with optional custom domain support.

## User Experience

A developer lands on the page and immediately understands what Ralph Vibe does through a punchy hero section. They scroll down to learn more about the tool, see installation instructions, understand the available commands, and grasp the underlying philosophy. The experience is clean, fast, and developer-friendly — no clutter, no distractions.

The page follows the RalphCoin.org aesthetic: minimalist design, abundant white space, sticky navigation, monospaced code blocks, and a tech-forward look.

## Acceptance Criteria

- [ ] Page loads as a static HTML/CSS site (no build step required)
- [ ] Sticky navigation header with anchor links to each section
- [ ] All 6 content sections are present and populated
- [ ] Code blocks use monospace font and are easily readable
- [ ] Page is responsive (works on mobile and desktop)
- [ ] GitHub Pages deployment works from the main branch
- [ ] Custom domain can be configured via CNAME file
- [ ] All external links open in new tabs
- [ ] Page loads in under 2 seconds on a standard connection

## Page Structure

### Navigation Header (Sticky)

- Logo/title: "Ralph Vibe"
- Anchor links: About, Quick Start, Commands, Philosophy, GitHub
- Stays fixed at top when scrolling

### Section 1: Hero

- Main tagline (something punchy that captures the essence — e.g., "Autonomous Development, Simplified")
- Subtitle: Brief one-liner explaining what Ralph Vibe does
- Two CTA buttons:
  - Primary: "Get Started" (links to Quick Start section)
  - Secondary: "View on GitHub" (links to the ralph-vibe repo)

### Section 2: What is Ralph Vibe?

- 2-3 paragraphs explaining:
  - What the Ralph Wiggum technique is (AI autonomously building software)
  - The problem Ralph Vibe solves (eliminates complex setup)
  - What you get (a CLI that handles the infrastructure)
- Keep it conversational and accessible

### Section 3: Quick Start

- Prerequisites: mention Claude Code requirement (Pro/Team subscription)
- Installation command in a code block
- Basic usage example showing the simplest path to autonomous development
- Example:
  ```bash
  # Install
  deno install -g -A -n ralph jsr:@anthropic/ralph

  # Initialize and start building
  ralph init --vibe
  ```

### Section 4: Commands

Display each command with its purpose. Use a consistent format:

**`ralph init`**
Sets up project scaffolding with specs and build instructions.

**`ralph start`**
Conducts an interview to gather project requirements.

**`ralph plan`**
Analyzes specs and generates implementation tasks.

**`ralph work`**
Executes the autonomous build loop, completing tasks iteratively.

**`ralph spec`**
Adds new features via interview process.

**`--vibe` flag**
Chains commands automatically for true autonomous development. Example: `ralph init --vibe` runs init → start → plan → work sequentially.

### Section 5: The Philosophy

Present the 5 reliability principles that make Ralph Vibe work:

1. **Fresh context each iteration** — No accumulated confusion between builds
2. **Specs as truth** — Claude follows written specifications precisely
3. **Single-task focus** — One feature completed per iteration
4. **Test-driven completion** — Tasks only finish when tests pass
5. **File-based persistence** — All state survives context resets

Use numbered list or cards format. Brief explanation for each.

### Section 6: Footer / Community

- Link to GitHub repository (https://github.com/whatiskadudoing/ralph-vibe)
- Optional: social links if applicable
- Copyright notice

## Visual Design Specifications

### Color Palette

Mirror RalphCoin.org aesthetic:
- Background: White or very light gray (#ffffff or #fafafa)
- Text: Dark gray/black (#1a1a1a or #333333)
- Accent color: Choose one for CTAs and links (suggest a blue or purple)
- Code blocks: Light gray background (#f5f5f5) with dark text

### Typography

- Headings: Clean sans-serif (system fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", etc.)
- Body text: Same sans-serif stack, 16-18px base size
- Code: Monospace font (Monaco, "Fira Code", "Courier New", monospace)
- Generous line-height (1.5-1.7) for readability

### Layout

- Max content width: 800-900px, centered
- Generous padding and margins (white space is key)
- Sections clearly separated with spacing
- Mobile-first responsive approach

### Components

- Buttons: Rounded corners, solid fill for primary, outline for secondary
- Code blocks: Rounded corners, subtle border or shadow, padding inside
- Navigation: Clean horizontal layout, no heavy borders

## Edge Cases

### Broken External Links
- If GitHub repo URL changes, update the link in the HTML
- All external links should use `target="_blank"` and `rel="noopener noreferrer"`

### Missing Custom Domain
- Site should work perfectly on default `username.github.io/repo-name` URL
- CNAME file is optional and can be added later

### JavaScript Disabled
- Site must be fully functional without JavaScript
- All navigation uses anchor links (no JS required)
- No critical content hidden behind JS interactions

### Very Long Code Examples
- Code blocks should have horizontal scroll if content overflows
- No text wrapping inside code blocks

## Technical Constraints

- **No build step**: Plain HTML, CSS, and minimal JS only
- **No frameworks**: No React, Vue, or similar — keep it simple
- **No package manager**: No npm/node dependencies for the site itself
- **GitHub Pages compatible**: Must deploy directly from repo without Actions (unless needed for custom domain)
- **Performance**: Total page size under 500KB (excluding any images)

## File Structure

```
ralph-vibe-site/
├── index.html          # The single page
├── styles.css          # All styles
├── CNAME               # Custom domain (optional, add later)
└── README.md           # Repo readme explaining the site
```

## Out of Scope

- **Multi-page site**: This is a single-page site only
- **Blog or news section**: Not included
- **User authentication**: No login or accounts
- **Analytics**: No tracking scripts (can be added later if desired)
- **Dark mode toggle**: Not for initial version
- **Animations or transitions**: Keep it static and simple
- **Images or illustrations**: Text-focused for now (can add later)
- **Contact form**: Just links to GitHub for issues/discussions
- **Localization**: English only
