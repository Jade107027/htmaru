import React from "react";
import { Box, Container, Typography } from "@mui/material";

const NearbyTab = () => {
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
            주변 볼거리
          </Typography>

          {/* 주변 관광지 콘텐츠 삽입 */}
          <Typography align="center">
            (예시) 근처 산책로, 전통 마을, 기장 해변 등 소개 이미지와 설명 들어갈 자리
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default NearbyTab;