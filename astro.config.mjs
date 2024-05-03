import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://brewfiles.com",
  adapter: vercel(),
  integrations: [tailwind(), icon(), react(), sitemap()],
  prefetch: {
    prefetchAll: true,
  },
});
