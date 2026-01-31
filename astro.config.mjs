import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://whatiskadudoing.github.io',
  base: '/ralph-website',
  vite: {
    plugins: [tailwindcss()]
  }
});
