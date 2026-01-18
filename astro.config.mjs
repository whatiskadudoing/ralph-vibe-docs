// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://whatiskadudoing.github.io',
  base: '/ralph-vibe-docs',
  vite: {
    plugins: [tailwindcss()]
  }
});