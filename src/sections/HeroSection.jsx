import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100dvh",
        backgroundImage: "url(/htmaru/images/image3.jpg)", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start", 
        justifyContent: { xs: "center", md: "flex-start" }, 
        pt: { xs: "33vh", md: "33vh" }, 
        pl: { xs: 0, md: 10 }, 
        pr: { xs: 0 },
        boxSizing: "border-box",
      }}
    >
      {/* 오버레이 */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />

      {/* 텍스트와 버튼 */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: { xs: "90%", md: "40%" },
          textAlign: { xs: "center", md: "left" },
          px: { xs: 3, md: 0 },
          ml: { xs: 0, md: 13 }, 
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "32px", sm: "36px", md: "48px" },
            fontWeight: 500,
            color: "#fff",
            fontFamily: "Hahmlet, serif",
            mb: { xs: 3, md: 4 },
          }}
        >
          황토마루
        </Typography>

        <Typography
          variant="h6"
          sx={{
            whiteSpace: "pre-line",
            fontSize: { xs: "16px", sm: "18px", md: "24px" },
            fontWeight: 400,
            lineHeight: { xs: 1.6, md: 1.8 },
            color: "#fefefe",
            fontFamily: "Hahmlet, sans-serif",
            textShadow: "0 1px 3px rgba(0,0,0,0.1)",
            mb: { xs: 5, md: 7 },
          }}
        >
          {`몸과 마음이 머무는\n자연 속 맛있는 휴식공간`}
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "center", md: "flex-start" }}
          justifyContent="flex-start"
          sx={{ width: "100%", maxWidth: 400 }}
        >
          <Button
            component={Link}
            to="/menupage"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "white",
              color: "#a75e2b",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "bold",
              px: 3,
              py: 1.5,
              fontFamily: "Hahmlet, serif",
              borderRadius: "8px",
              textTransform: "none",
              whiteSpace: "nowrap", 
              width: { xs: "100%", sm: "auto" }, 
              minWidth: 120,
              "&:hover": {
                backgroundColor: "#dba96b",
                color: "white",
              },
            }}
          >
            메뉴 보기
          </Button>
          <Button
            component="a"
            href="https://booking.naver.com/booking/6/bizes/1396607/items/6686682"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#a75e2b",
              color: "white",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "bold",
              px: 3,
              py: 1.5,
              fontFamily: "Hahmlet, serif",
              borderRadius: "8px",
              textTransform: "none",
              whiteSpace: "nowrap", 
              width: { xs: "100%", sm: "auto" }, 
              minWidth: 120, 
              "&:hover": {
                backgroundColor: "#dba96b",
                color: "white",
              },
            }}
          >
            예약하기
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;