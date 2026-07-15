// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://machonshilo.org",
  prerenderConflictBehavior: "error",
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
  i18n: {
    locales: ["en", "he"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Frank",
      cssVariable: "--font-frank",
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/Taamey_D.woff2"],
          },
        ],
      },
    },
  ],
});
