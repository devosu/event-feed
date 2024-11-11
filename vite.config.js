// ./vite.config.js
//
// Global Vite configuration file.
// See // https://vitejs.dev/config/ for more information.

// Node native module imports.
import path from "node:path";

// Vite essential and plugin imports.
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// -----------------------------------------------------------------------------
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Source directory alias.
      "@src": path.resolve(__dirname, "./src"),

      // Static asset directory alias.
      "@assets": path.resolve(__dirname, "./src/assets"),

      // Pages and routing alias.
      "@pages": path.resolve(__dirname, "./src/pages"),

      // Other directories alias.
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
