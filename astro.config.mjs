import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://matheoboulanger.netlify.app/',
  output: "server",
  adapter: netlify()
});