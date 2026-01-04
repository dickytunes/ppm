import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  output: 'static',
  site: 'https://dickytunes.github.io/ppm',
  base: '/ppm',
  integrations: [tailwind()],
});
