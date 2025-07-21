import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

const InstagramSection = () => {
  return (
    <Box component="section" py={8} sx={{ backgroundColor: "#fdf8f3", width: "100%" }}>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 600, color: "#333" }}>
          인스타그램
        </Typography>

        <Paper elevation={2} sx={{ borderRadius: 2, overflow: "hidden", height: 700 }}>
          <iframe
  src="https://app.mirror-app.com/feed-instagram/7564b65b-f77f-49fa-9f54-7d7c942fcb3e/preview"
  title="Instagram Feed"
  style={{
    width: "100%",
    height: "100%",
    border: "none",
    overflow: "hidden", // 이 위치에 있어야 함
    display: "block"     // 여백 문제 방지용
  }}
  loading="lazy"
/>
        </Paper>
      </Container>
    </Box>
  );
};

export default InstagramSection;