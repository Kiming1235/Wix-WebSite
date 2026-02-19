// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import customErrorOverlayPlugin from "./vite-error-overlay-plugin.js";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), react()],
  vite: {
    plugins: [customErrorOverlayPlugin()],
  },
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: ["static.wixstatic.com", "wixmp-fe53c9ff592a4da924211f23.wixmp.com", "img-wixmp-a85a29aaf55baa3e5171a82d.wixmp.com"],
  },
  server: {
    allowedHosts: true,
    host: true,
  },
});
