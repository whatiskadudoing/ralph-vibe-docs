# Ralph Vibe Landing Page

## Overview

A single-page marketing website for Ralph Vibe, the CLI tool that automates the Ralph Wiggum technique for autonomous AI development. Built with Astro and Tailwind CSS, outputting static HTML/CSS for GitHub Pages hosting.

## Tech Stack

- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS
- **Output:** Static HTML/CSS (no client-side JavaScript required)
- **Hosting:** GitHub Pages from main branch
- **Build:** `astro build` outputs to `dist/` folder

## Visual Design

### Color Palette

```css
/* Backgrounds */
--bg-primary: #FAF9F6;      /* Warm cream - main background */
--bg-secondary: #F5F3EF;    /* Slightly darker cream - alternating sections */
--bg-code: #EDEAE5;         /* Code blocks background */

/* Text */
--text-primary: #1A1A1A;    /* Near black - headings */
--text-secondary: #4A4A4A;  /* Dark gray - body text */
--text-muted: #6B6B6B;      /* Medium gray - secondary info */

/* Accents */
--accent-primary: #C46849;  /* Burnt orange - CTAs, links, highlights */
--accent-hover: #A85A3D;    /* Darker orange - hover states */

/* Borders & Subtle Elements */
--border-light: #E5E2DD;    /* Subtle borders, dividers */
--border-dark: #D1CEC8;     /* Stronger borders, card outlines */

/* Code Syntax Highlighting */
--code-keyword: #C46849;    /* Orange - commands, keywords */
--code-string: #5A7A5A;     /* Muted green - strings */
--code-comment: #8B8B8B;    /* Gray - comments */
```

### Typography

- **Headings:** Clean sans-serif (Inter or system fonts), bold weights
- **Body:** Same sans-serif, 16-18px base, `#4A4A4A`
- **Code:** Monospace (JetBrains Mono, Fira Code, or system mono), 14-16px
- **Line height:** 1.6-1.7 for readability

### Design Principles

- **Japanese minimalist aesthetic:** Clean, intentional, uncluttered
- **Generous negative space:** Let content breathe, don't crowd elements
- **Developer-forward:** Code blocks prominent, technical but approachable
- **Fully responsive:** Mobile-first, scales beautifully to desktop

### Layout

- Max content width: 1200px, centered
- Section padding: 80-120px vertical on desktop, 48-64px on mobile
- Card grid: 1 column mobile, 2-3 columns desktop
- Consistent horizontal padding: 24px mobile, 48px+ desktop

## Page Sections

### 1. Navigation (Sticky)

- Logo/wordmark: "Ralph Vibe" (left)
- Anchor links: How It Works, Commands, Quick Start, FAQ (center/right)
- GitHub link with icon (right)
- Sticky on scroll with subtle shadow
- Mobile: Hamburger menu

### 2. Hero Section

**Content:**
- Eyebrow text: Small label like "Autonomous Development" (optional, subtle)
- Main headline: Punchy tagline (e.g., "The Ralph technique, without learning the Ralph technique")
- Subtitle: One-liner explaining value (e.g., "All the power of autonomous AI development. None of the setup.")
- Install command block with copy button:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/whatiskadudoing/ralph-vibe/main/install.sh | sh
  ```
- Dual CTAs:
  - Primary: "Get Started" (scrolls to Quick Start)
  - Secondary: "View on GitHub" (external link)

**Design:**
- Centered layout
- Large headline typography
- Code block styled prominently with copy-to-clipboard functionality
- Ample whitespace above and below

### 3. What is Ralph Vibe?

**Content:**
- Clear problem statement: Setting up the Ralph Wiggum technique is complex and time-consuming
- Solution: Ralph Vibe handles all the infrastructure automatically
- Key message: "Describe what you want. Ralph builds it while you sleep."

**Design:**
- 2-3 short paragraphs, conversational tone
- Optional: Simple visual or icon representing the concept
- Alternating background color (`#F5F3EF`)

### 4. How It Works

**Content:**
Visual workflow showing the Ralph Vibe process:

1. **Interview** — Ralph asks what you want to build
2. **Specs** — Your answers become precise specifications
3. **Plan** — Tasks are generated from specs
4. **Build** — Autonomous loop builds and tests until done

**Design:**
- Horizontal steps on desktop, vertical on mobile
- Numbered or icon-based steps
- Connecting lines or arrows between steps
- Brief description under each step

### 5. Commands

**Content:**
Cards for each command:

| Command | Description |
|---------|-------------|
| `ralph init` | Initialize a new project or integrate with existing code. Add `--vibe` to run the full pipeline automatically. |
| `ralph start` | Interactive interview to understand your project and generate specifications. |
| `ralph spec` | Add new features via interview. Use `-f "feature"` to skip the interview. |
| `ralph plan` | Analyze specs and create an implementation task list with file linkage. |
| `ralph work` | Execute the autonomous build loop. One task per iteration until tests pass. |

**The `--vibe` flag:**
Highlight that adding `--vibe` to any command chains subsequent steps automatically:
- `ralph init --vibe` → init → start → plan → work
- `ralph spec --vibe` → spec → plan → work

**Design:**
- Card grid layout (2-3 columns on desktop)
- Each card shows command name prominently
- Description below
- Subtle border or shadow on cards
- Cards have consistent sizing

### 6. Why Ralph Vibe? (5 Principles)

**Content:**
Benefit cards based on the core reliability principles:

1. **Fresh Context** — Each iteration starts clean. No accumulated confusion from long sessions.
2. **Specs as Truth** — What's in `specs/` is what gets built. No ambiguity.
3. **Atomic Tasks** — One task per iteration. No partial implementations.
4. **Test-Driven** — Tasks only complete when tests pass. Quality enforced automatically.
5. **File Persistence** — All state lives in files. Survives context resets across sessions.

**Design:**
- 5 cards in a grid (3+2 or responsive flow)
- Icon or number for each principle
- Short title + 1-2 sentence explanation
- Consistent card styling with Commands section

### 7. Quick Start

**Content:**
Step-by-step getting started guide:

```markdown
### Prerequisites
- Claude Code CLI installed with Pro or Team subscription

### Installation
curl -fsSL https://raw.githubusercontent.com/whatiskadudoing/ralph-vibe/main/install.sh | sh

### Verify Installation
ralph --version

### Start Building
ralph init --vibe
```

Include brief explanation of what happens when you run `ralph init --vibe`.

**Design:**
- Numbered steps with clear headings
- Code blocks for each command
- Copy buttons on code blocks
- Alternating background (`#F5F3EF`)

### 8. FAQ (Accordion)

**Content:**
Expandable questions:

1. **Do I need a Claude Pro subscription?**
   Yes. Ralph Vibe uses Claude Code under the hood, which requires an active Claude Pro or Team subscription.

2. **Can I use Ralph Vibe with an existing project?**
   Yes. Run `ralph init` in your project directory and it will integrate with your existing codebase.

3. **What happens if a build fails?**
   Ralph Vibe runs tests after each task. If tests fail, it attempts to fix the issues. You can also intervene manually and run `ralph work` to continue.

4. **How is this different from using Claude Code directly?**
   Ralph Vibe adds structure: specifications, task planning, and an autonomous loop. Claude Code is the engine; Ralph Vibe is the autopilot.

5. **What files does Ralph Vibe create?**
   It creates `specs/` for specifications, `IMPLEMENTATION_PLAN.md` for tasks, `AGENTS.md` for configuration, and supporting prompt files.

6. **Can I edit the generated files?**
   Absolutely. Ralph creates the scaffolding; you own all the files. Edit specs, adjust the plan, customize as needed.

**Design:**
- Clean accordion with `+` / `-` toggle icons
- Question text prominent, answer revealed on click
- Smooth expand/collapse animation
- Sufficient padding inside expanded answers

### 9. Footer

**Content:**
- "Ralph Vibe" wordmark or logo
- GitHub repository link: https://github.com/whatiskadudoing/ralph-vibe
- Brief tagline or credit line
- Copyright notice

**Design:**
- Simple, minimal footer
- Centered or left-aligned content
- Subtle top border or background change
- Links open in new tabs

## Components

### Code Block with Copy Button

- Rounded corners (8px)
- Background: `#EDEAE5`
- Padding: 16-24px
- Monospace font
- Copy button in top-right corner
- "Copied!" feedback on click
- Syntax highlighting for bash commands

### Card Component

- Background: white (`#FFFFFF`) or transparent
- Border: 1px solid `#E5E2DD`
- Border radius: 12px
- Padding: 24-32px
- Optional subtle shadow on hover
- Consistent spacing between cards

### FAQ Accordion Item

- Question row with text + expand icon
- Border-bottom between items
- Smooth height transition on expand
- Answer padding when expanded
- Only one item open at a time (optional)

### Button Styles

**Primary Button:**
- Background: `#C46849`
- Text: white
- Padding: 12px 24px
- Border radius: 8px
- Hover: `#A85A3D`

**Secondary Button:**
- Background: transparent
- Border: 1px solid `#C46849`
- Text: `#C46849`
- Padding: 12px 24px
- Border radius: 8px
- Hover: light fill

## Responsive Breakpoints

- **Mobile:** < 640px (single column, stacked layout)
- **Tablet:** 640px - 1024px (2 columns where appropriate)
- **Desktop:** > 1024px (full layout, 3 columns for cards)

## Acceptance Criteria

- [ ] Site builds with `astro build` without errors
- [ ] All 9 sections render correctly
- [ ] Color palette matches specification exactly
- [ ] Code blocks have working copy-to-clipboard functionality
- [ ] FAQ accordion expands/collapses smoothly
- [ ] Navigation links scroll to correct sections
- [ ] Fully responsive across mobile, tablet, and desktop
- [ ] GitHub Pages deployment works from main branch
- [ ] All external links open in new tabs with `rel="noopener noreferrer"`
- [ ] Page loads in under 2 seconds
- [ ] No layout shifts during page load

## Edge Cases

### JavaScript Disabled
- FAQ should ideally work without JS (use `<details>`/`<summary>` as base)
- Copy buttons won't work, but code blocks remain readable
- Navigation anchor links work without JS

### Long Code Examples
- Horizontal scroll for overflow
- No text wrapping in code blocks

### Very Long FAQ Answers
- Content should not break layout
- Smooth scrolling within accordion

### Mobile Navigation
- Hamburger menu for small screens
- Menu closes after selecting a link

## File Structure

```
ralph-vibe-site/
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML layout
│   ├── components/
│   │   ├── Nav.astro           # Sticky navigation
│   │   ├── Hero.astro          # Hero section
│   │   ├── CodeBlock.astro     # Code with copy button
│   │   ├── Card.astro          # Reusable card component
│   │   ├── FAQItem.astro       # Accordion item
│   │   └── Footer.astro        # Footer section
│   ├── pages/
│   │   └── index.astro         # Main page composing all sections
│   └── styles/
│       └── global.css          # Tailwind imports + custom CSS
├── public/
│   └── CNAME                   # Custom domain (optional)
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind configuration with custom colors
├── package.json
└── README.md
```

## Out of Scope

- **Multi-page site:** Single page only for this version
- **Dark mode toggle:** Light theme only
- **Blog or news:** Not included
- **User authentication:** No accounts or login
- **Analytics:** No tracking (can add later)
- **Contact form:** GitHub issues for feedback
- **Animations beyond accordion:** Keep it minimal
- **Images or illustrations:** Text and code focused
- **Localization:** English only
- **CMS integration:** Static content only
