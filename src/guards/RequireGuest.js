import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireGuest = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  if (token) {
    <Navigate to="/dashboard" />;
  }

  return children;
};

export default RequireGuest;
