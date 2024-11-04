// ./src/hooks/useLoading.js
//
// Generic, client-only loading state hook for React components.

// React essential imports.
import { useState } from "react";

// -----------------------------------------------------------------------------
export default function useLoading(initialState = false) {
  const [isLoading, setIsLoading] = useState(initialState);
  return {
    isLoading,
    startLoading: () => {
      setIsLoading(true);
    },
    stopLoading: () => {
      setIsLoading(false);
    },
  };
}
