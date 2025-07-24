import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const Frame = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          py: 0,
          overflowX: "hidden",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Frame;