// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://OriC28.github.io",
  base: "/Skillswap_LandingPage",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      iconDir: "src/icons",
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
