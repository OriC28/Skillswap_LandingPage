// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/static/",
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
