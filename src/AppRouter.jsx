// ./src/app/AppRouter.jsx
//
// Centralized, declarative routing for the whole application using react-router.

// React essential imports.
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Local route component imports.
import Homepage from "@pages/Homepage";
import NotFound from "@pages/NotFound";
import EventPage from "@pages/EventPage";

// -----------------------------------------------------------------------------
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/EventPage" element={<EventPage />} />
        {/* Put catch-all 404 route at the end of all other routes. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
