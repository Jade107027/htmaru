import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { heroStyles } from "../styles/styles";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <Box sx={heroStyles.section}>
      <Box sx={heroStyles.overlay} />

      <Box sx={heroStyles.content}>
        <Typography
          variant="h1"
          sx={{
            ...heroStyles.title,
            fontSize: { xs: '35px', md: '64px' },     
            fontWeight: 500,                         
            color: '#fff',
            fontFamily: 'Helvetica, serif',           
            letterSpacing: '-0.5px',
            mb: 4,
          }}
        >
          황토마루
        </Typography>

        <Typography
          variant="h6"
          sx={{
            ...heroStyles.subtitle,
            whiteSpace: 'pre-line',
            fontSize: { xs: '16px', md: '24px' },
            fontWeight: 400,
            lineHeight: 1.8,
            color: '#fefefe',
            fontFamily: 'Hahmlet, sans-serif',
            textShadow: '0 1px 3px rgba(0,0,0,0.1)',  
            mb: 7,
          }}
        >
          {`몸과 마음이 머무는
        자연 속 맛있는 휴식공간`}
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            to="/menupage"
            variant="contained"
            sx={heroStyles.menuButton}
          >
            메뉴 보기
          </Button>
          <Button
            component="a"
            href="https://booking.naver.com/booking/6/bizes/1396607/items/6686682?area=ple&defaultOpen=all&lang=ko&startDate=2025-07-22&theme=place"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={heroStyles.reserveButton}
          >
            예약하기
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;