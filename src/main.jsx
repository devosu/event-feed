// ./src/main.jsx
//
// Main entry point for the application. DO NOT MODIFY THIS FILE!!

// React essential imports.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Local main app component import.
import AppRouter from "@src/AppRouter";

// Local global stylesheet import.
import "@src/index.css";

// -----------------------------------------------------------------------------
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
