import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children }) {
  // If user is NOT authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, allow access
  return children;
}

export default ProtectedRoute;
