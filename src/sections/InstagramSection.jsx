// src/sections/InstagramSection.jsx
import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

const InstagramSection = () => {
  return (
    <Box component="section" py={8} sx={{ backgroundColor: "#fdf8f3", width: "100%" }}>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 600, color: "#333" }}>
          Instagram 피드
        </Typography>

        <Paper elevation={2} sx={{ borderRadius: 2, overflow: "hidden", height: 400 }}>
          <iframe
            src="https://snapwidget.com/embed/123456"
            title="Instagram Feed"
            frameBorder="0"
            scrolling="no"
            style={{ width: "100%", height: "100%", border: "none" }}
            loading="lazy"
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default InstagramSection;