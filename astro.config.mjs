import image from "@astrojs/image";
// https://astro.build/config
import mdx from "@astrojs/mdx";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
import remarkMermaid from 'astro-diagram/remark-mermaid';
import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), mdx(), react(), sitemap()],
  site: 'https://www.hamaka.dev',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    },
    remarkPlugins: [remarkMermaid]
  }
});