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
          minHeight: "calc(100vh - 300px)", // 화면 채우기용 (Header + Footer 합친 높이만큼 뺌)
          px: { xs: 2, md: 4 }, // 좌우 여백
          py: { xs: 4, md: 6 }, // 상하 여백 (원하면 조절)
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Frame;