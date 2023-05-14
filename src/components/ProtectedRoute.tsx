import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/home" />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
