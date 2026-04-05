import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import { CircularProgress } from "@mui/material";

export const SecureRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, loading } = useUserContext();

  if (loading) {
    return <CircularProgress size={20} sx={{ color: "#1cb690" }} />;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
