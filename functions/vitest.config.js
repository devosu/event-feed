// ./functions/vitest.config.js
//
// Vitest config for Cloud Functions for Firebase testing.

// Vitest essential imports.
import { defineConfig } from "vitest/config";

// -----------------------------------------------------------------------------
export default defineConfig({
  plugins: [],

  test: {
    // Test file patterns.
    include: ["src/**/*.test.js"],

    // Disable test file watching.
    watch: false,

    // Setup files to run before all tests.
    setupFiles: ["vitest.setup.js"],
  },
});
