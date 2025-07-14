import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { heroStyles } from "../styles/styles";

export const HeroSection = () => {
  return (
    <Box sx={heroStyles.section}>
      <Box sx={heroStyles.overlay} />

      <Box sx={heroStyles.content}>
        <Typography variant="h1" sx={heroStyles.title}>
          황토마루
        </Typography>

        <Typography variant="h6" sx={heroStyles.subtitle}>
          전통 한식 고기뷔페와 모던한 브런치를 한 곳에서
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" sx={heroStyles.menuButton}>
            메뉴 보기
          </Button>
          <Button variant="contained" sx={heroStyles.reserveButton}>
            예약하기
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;