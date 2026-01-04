import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  output: 'static',
  site: 'https://example.github.io/your-portfolio', // TODO: update to real GitHub Pages URL
  integrations: [tailwind()],
});
