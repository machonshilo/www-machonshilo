// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://machonshilo.org",
  compressHTML: true,
  prerenderConflictBehavior: "error",
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
            weight: "normal",
            style: "normal",
            src: ["./src/assets/fonts/Taamey_D.woff2"],
          },
        ],
      },
    },
  ],
});
