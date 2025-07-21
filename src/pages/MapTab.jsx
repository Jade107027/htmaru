import React from "react";
import { Box, Container, Typography } from "@mui/material";

const MapTab = () => {
  return (
    <Box component="section" py={8} sx={{ backgroundColor: "#fdf8f3", width: "100%" }}>
      <Container maxWidth="xl">
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            color="#333333"
            sx={{ mb: 4, fontWeight: 600 }}
          >
            황토마루 내부 지도
          </Typography>

          {/* 내부지도 이미지 삽입 */}
          <Box
            component="img"
            src="/images/htmaru_map2.png" // 이미지 경로 확인 필요
            alt="황토마루 내부 지도"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MapTab;