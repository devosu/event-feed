// ./src/lib/firebaseClientApp.js
//
// Client-side Firebase app, auth, and Firestore initialization.
// Usage example:
// import { fbAuth, fbStore } from "@lib/firebaseClientApp";

// -----------------------------------------------------------------------------
// Firebase (client) SDK essential imports.
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Local Firebase config import.
import { firebaseConfig } from "@lib/firebaseConfig";

// -----------------------------------------------------------------------------
export function firebaseClientApp() {
  // If Firebase app already initialized, use it.
  // Else initialize a new Firebase app using the shared config.
  let fbApp;
  const fbAppList = getApps();

  // If no Firebase app exists, initialize a new Firebase app.
  if (fbAppList && fbAppList.length > 0 && fbAppList[0]) {
    fbApp = fbAppList[0];
  } else {
    fbApp = initializeApp(firebaseConfig);
  }

  // Get Firebase auth and Firestore services.
  const fbAuth = getAuth(fbApp);
  const fbStore = getFirestore(fbApp);
  const fbFunc = getFunctions(fbApp);

  // Return Firebase auth and Firestore services.
  return { fbApp, fbAuth, fbStore, fbFunc };
}

// -----------------------------------------------------------------------------
// Export Firebase client objects for use in other modules.
export const { fbApp, fbAuth, fbStore, fbFunc } = firebaseClientApp();
