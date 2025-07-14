// src/Frame.jsx
import React from "react";
import { Box } from "@mui/material";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";

const Frame = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: "#fdf8f3" }}>
      <HeaderSection />
      {children}
      <FooterSection />
    </Box>
  );
};

export default Frame;