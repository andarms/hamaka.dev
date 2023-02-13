import image from "@astrojs/image";
// https://astro.build/config
import mdx from "@astrojs/mdx";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
import remarkMermaid from 'astro-diagram/remark-mermaid';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), mdx()],
   markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },

    remarkPlugins: [
      remarkMermaid,
    ],
  }
});