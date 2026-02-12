import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./auth-context";

export default function ProtectedRoute({ redirectTo = "/login" }) {
  const { isAuthenticated, isChecking } = useAuth();
  const location = useLocation();

  if (isChecking) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }

  return <Outlet />;
}
