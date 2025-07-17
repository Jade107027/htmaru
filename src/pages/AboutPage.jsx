// src/pages/AboutPage.jsx
import React from "react";
import { Box, Container, Typography, Stack, Paper } from "@mui/material";

const introData = [
  {
    title: " ",
    image: "/images/image1.jpg",
    description: `황토마루는 전통 한식 고기뷔페와 세련된 브런치가 공존하는 공간입니다.
매장 안으로 들어서면 따뜻한 황토 인테리어와 함께 자연의 감성이 가득한 공간이 펼쳐집니다.
고요한 정관의 풍경 속에서 여유롭고 풍성한 한 끼를 즐기실 수 있어요.`,
  },
  {
    title: " ",
    image: "/images/image2.jpg",
    description: `직접 재배한 신선한 식재료와 정성 어린 손맛이 담긴 요리.
건강을 생각한 레시피로 준비된 다양한 메뉴는 아이부터 어르신까지 모두가 만족할 수 있도록 준비되어 있습니다.
우리 가족이 먹는다는 마음으로 한 접시 한 접시 정성껏 담아냅니다.`,
  },
  {
    title: " ",
    image: "/images/image3.jpg",
    description: `매장 앞 넉넉한 주차 공간과 함께 단체 모임, 가족 외식, 데이트 장소로도 적합합니다.
고객의 만족을 최우선으로 생각하며, 편안한 공간과 친절한 서비스를 제공하기 위해 항상 노력하고 있습니다.
황토마루에서 따뜻한 환대와 힐링의 시간을 경험해보세요.`,
  },
];

const AboutPage = () => {
  return (
    <Box sx={{ backgroundColor: "#fdf8f3", py: 8, width: "100%" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ fontWeight: 700, mb: 8, color: "#333" }}
        >
          황토마루 소개
        </Typography>

        <Stack spacing={8}>
          {introData.map((section, index) => (
            <Stack
              key={index}
              direction={{ xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
              spacing={4}
              alignItems="center"
            >
              {/* 이미지 */}
              <Box
                component="img"
                src={section.image}
                alt={section.title}
                sx={{
                  width: { xs: "100%", md: "50%" },
                  borderRadius: 3,
                  boxShadow: 2,
                }}
              />

              {/* 텍스트 박스 */}
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: "white",
                  flex: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    color: "#a75e2b",
                    fontFamily: "Hahmlet, serif",
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "#444",
                    fontFamily: "Hahmlet, serif",
                    whiteSpace: "pre-line",
                  }}
                >
                  {section.description}
                </Typography>
              </Paper>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutPage;