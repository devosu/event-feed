// ./src/app/AppRouter.jsx
//
// Centralized, declarative routing for the whole application using react-router.

// React essential imports.
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Local route component imports.
import Homepage from "@app/routes/Homepage";
import NotFound from "@app/routes/NotFound";
import EventPage from "../pages/EventPage";

// -----------------------------------------------------------------------------
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/EventPage" element={<EventPage />} />
      </Routes>
    </Router>
  );
}
