import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const Frame = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ width: "100%", overflowX: "hidden" }}
    >
      <Header />

      {/* 메인 콘텐츠 영역 - 남은 공간을 채움 */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 0,
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Frame;