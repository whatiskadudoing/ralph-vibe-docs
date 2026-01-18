# Ralph Vibe Landing Page

A single-page marketing and documentation website for [Ralph Vibe](https://github.com/whatiskadudoing/ralph-vibe), the CLI tool that automates the Ralph Wiggum technique for autonomous AI development.

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) v4.

## Local Development

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site builds to `dist/` and deploys automatically to GitHub Pages from the `main` branch.

Configured for deployment at `whatiskadudoing.github.io/ralph-vibe-docs/`.

## File Structure

```
src/
  components/     # Astro components (Nav, Footer, Card, CodeBlock)
  layouts/        # Base layout template
  pages/          # Page routes (index.astro)
  styles/         # Global CSS with Tailwind
specs/            # Feature specifications
dist/             # Build output (generated)
```

## Tech Stack

- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS v4 (CSS-based config)
- **Output:** Static HTML/CSS
- **Hosting:** GitHub Pages
