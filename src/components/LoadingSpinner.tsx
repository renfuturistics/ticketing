// LoadingSpinner.jsx

import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Adjust this based on your layout
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
