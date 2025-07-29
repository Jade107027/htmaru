import React from "react";
import { Box, Container, Typography, Stack, Paper } from "@mui/material";

const introData = [
  {
    title: " ",
    image: "../images/image1.jpg",
    description: `깊은 숲속, 
    10여 년간 가족이 정성스럽게 지은 황토집.  
4만 평 자연 속
여섯 채의 황토집 사이로 
작은 계곡물이 흐르는 기픈골 황토마루!  

황토마루는 
새소리, 물소리, 바람결이 어우러지는
사계절을 온전히 느낄 수 있는 공간입니다.
`,
  },
  {
    title: " ",
    image: "../images/image4.jpg",
    description: `1996년 첫 오픈 이후, 
2025년 새로운 감각으로 다시 태어났습니다.

30년 전 황토마루를 시작하신 80대 이모와  
어린시절을 황토마루에서 보낸 30대 조카의 콜라보!

세대를 뛰어넘는 콜라보로  
재미있고 맛있는 이야기를 만들어 가겠습니다.`,
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
              alignItems="stretch"
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
                  objectFit: "cover",
                  height: { xs: "auto", md:400 }
                }}
              />

              {/* 텍스트 박스 */}
              <Paper
                elevation={0}
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
                  fontSize: { xs: "1rem", md: "1.3rem" },      
                  lineHeight: { xs: 1.9, md: 1.8 },            
                  color: "#444",
                  fontFamily: "Hahmlet, serif",
                  whiteSpace: "pre-line",
                  wordBreak: "keep-all",                     
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