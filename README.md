# Ralph Vibe Landing Page

A single-page marketing and documentation website for [Ralph Vibe](https://github.com/whatiskadudoing/ralph-vibe), the CLI tool that automates the Ralph Wiggum technique for autonomous AI development.

## Local Development

This is a static HTML/CSS site with no build step required.

To preview locally:

```bash
# Start a local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

Alternatively, open `index.html` directly in your browser.

## Deployment

The site deploys automatically to GitHub Pages from the `main` branch root directory.

To set up a custom domain, create a `CNAME` file with your domain name.

## File Structure

```
index.html    # The single page
styles.css    # All styles
CNAME         # Custom domain (optional)
README.md     # This file
```
