// ./src/app/routes/Homepage.jsx
//
// Homepage main component for the Event Feed application.

// React essential imports.
import { useEffect, useState } from "react";

import reactLogo from "@assets/images/react.svg";
// Local asset imports.
import viteLogo from "/vite.svg";
import "@assets/stylesheets/Homepage.css";
import { fbAuth } from "@lib/firebaseClientApp";

// -----------------------------------------------------------------------------
export default function Homepage() {
  // Homepage clicker state and setter.
  const [count, setCount] = useState(0);

  // For DEMO ONLY, DELETE for production.
  // Log Firebase Auth object to console on mount.
  useEffect(() => {
    console.log(
      fbAuth
        ? "Firebase Auth object available."
        : "Firebase Auth object not available.",
    );
  }, []);

  // Homepage render.
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Event Feed Project</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          Counter example: {count}
        </button>
        <p>
          Edit <code>src/app/routes/Homepage.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
