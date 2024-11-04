// ./src/app/AppRouter.jsx
//
// Centralized, declarative routing for the whole application using react-router.

// React essential imports.
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Local route component imports.
import Homepage from "@app/routes/Homepage";
import Nodemailer from "@app/routes/Nodemailer";
import NotFound from "@app/routes/NotFound";

// -----------------------------------------------------------------------------
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nodemailer" element={<Nodemailer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
