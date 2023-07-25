import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://redo.rehab',
  experimental: {
    assets: true
  },
  integrations: [sitemap(), tailwind()],
});
