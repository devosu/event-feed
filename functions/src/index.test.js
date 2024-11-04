// ./functions/src/index.test.js
//
// Integration test suite for the Cloud Functions for Firebase entry point.

// Vitest essential imports (must use ESM syntax).
import { describe, expect, it } from "vitest";

// Testing target import.
const entrypoint = require("./index");

// -----------------------------------------------------------------------------
describe("index.js entrypoint", () => {
  it("exports the expected functions", () => {
    expect(entrypoint).toHaveProperty("sendTestEmailOnCall");
  });
});
