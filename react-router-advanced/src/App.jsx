import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Import pages/components
import Home from "./pages/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";

function App() {
  // Simulate authentication
  const isAuthenticated = false; // Change to true to test

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Protected route */}
        <Route
          path="/profile/*"
          element={
            isAuthenticated ? <Profile /> : <Navigate to="/login" replace />
          }
        >
          {/* Nested routes inside Profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
