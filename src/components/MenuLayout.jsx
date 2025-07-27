import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
  useMediaQuery,
  Paper,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { heroStyles } from "../styles/styles";

const galleryImages = [
  "/htmaru/menu-images/menu1.jpg",
  "/htmaru/menu-images/menu2.jpg",
  "/htmaru/menu-images/menu3.jpg",
  "/htmaru/menu-images/menu4.jpg",
  "/htmaru/menu-images/menu5.jpg",
  "/htmaru/menu-images/menu6.jpg",
  "/htmaru/menu-images/menu7.jpg",
  "/htmaru/menu-images/menu8.jpg",
];

const MenuLayout = ({ showAllMenuButton = false }) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const isMobile = useMediaQuery("(max-width:600px)");

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const getVisibleImages = () => {
    const images = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + galleryImages.length) % galleryImages.length;
      images.push({ src: galleryImages[index], isCenter: i === 0 });
    }
    return images;
  };

  return (
    <Box sx={{ px: 2, py: { xs: 6, md: 8 } }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 3, fontWeight: "bold", color: "#1f1f1f" }}
      >
        황토마루 메뉴
      </Typography>

      <Box
        component="section"
        sx={{
          backgroundColor: "#fdf8f3",
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ position: "relative" }}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              sx={{ mb: 4, fontWeight: 600 }}
            >
              프미리엄 고기뷔페 안내
            </Typography>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 4 }}
              alignItems="stretch"
              sx={{ justifyContent: "center" }}
            >
              {["주말", "주중"].map((type, index) => {
                const isWeekend = type === "주말";
                const imageUrl = isWeekend
                  ? "/htmaru/menu-images/menu1.jpg"
                  : "/htmaru/menu-images/menu2.jpg";
                const item = {
                  title: type,
                  desc:
                    "소갈빗살 / 토시살 / 우삼겹 / 육회 / 한돈목살 / 한돈삼겹살\n채소류 / 샐러드류 / 디저트류 / 과일류\n쫄면 / 된장찌개 / 김치찌개 / 밥",
                  additional:
                    "36개월 미만 유아 성인 1명당 1인 무료\n초등학생 4학년 이하 1만원 할인",
                  price: isWeekend ? "33,800원" : "31,800원",
                };

                return (
                  <Paper
                    key={index}
                    elevation={2}
                    sx={{
                      width: "100%",
                      borderRadius: 3,
                      bgcolor: "white",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={imageUrl}
                      alt={`${type} 이미지`}
                      sx={{
                        width: "90%",
                        height: "auto",
                        maxHeight: 200,
                        objectFit: "cover",
                        borderRadius: 2,
                        mx: "auto", // 가로 가운데 정렬
                        mb: 0,      // 이미지 아래 여백
                        mt: 1       // 이미지 위 여백
                      }}
                    />

                    <Box sx={{ px: { xs: 3, md: 4 }, pt: 3, pb: 4 }}>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          mb: 2,
                          color: "#b45309",
                          fontSize: { xs: "23px", md: "32px" },
                          fontFamily: "Gowun Batang, serif",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "21px" },
                          color: "#333",
                          fontFamily: "Hahmlet-Regular, Helvetica",
                          lineHeight: { xs: 1.7, md: 1.8 },
                          mb: 2,
                          whiteSpace: "pre-line",
                          wordBreak: "keep-all",
                        }}
                      >
                        {item.desc}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: "14px", md: "17px" },
                          color: "#777",
                          whiteSpace: "pre-line",
                          wordBreak: "keep-all",
                          lineHeight: { xs: 1.5, md: 1.6 },
                          mb: 2,
                        }}
                      >
                        {item.additional}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: "20px", md: "24px" },
                          fontWeight: "bold",
                          color: "#b45309",
                          mt: 0,
                          textAlign: { xs: "center", md: "left" },
                          fontFamily: "Gowun Batang, serif",
                        }}
                      >
                        {item.price}
                      </Typography>
                    </Box>
                  </Paper>
                );
              })}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box sx={{ mt: 10 }}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowX: "hidden",
            px: 1,
          }}
        >
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: { xs: 4, md: 12 },
              zIndex: 1,
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
          >
            <ArrowBackIosNew fontSize="small" />
          </IconButton>

          <Stack
            direction="row"
            spacing={{ xs: 1.5, sm: 2 }}
            justifyContent="center"
            alignItems="center"
            sx={{ overflowX: "auto", px: 1 }}
          >
            {getVisibleImages().map((img, idx) => {
              const actualIndex = (currentIndex + idx - 2 + galleryImages.length) % galleryImages.length;
              return (
                <Box
                  key={idx}
                  onClick={() => setCurrentIndex(actualIndex)}
                  sx={{
                    cursor: "pointer",
                    width: {
                      xs: img.isCenter ? 220 : 120,
                      sm: img.isCenter ? 300 : 180,
                      md: img.isCenter ? 400 : 240,
                    },
                    height: {
                      xs: img.isCenter ? 140 : 90,
                      sm: img.isCenter ? 200 : 140,
                      md: img.isCenter ? 280 : 180,
                    },
                    borderRadius: 2,
                    backgroundImage: `url(${img.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "all 0.3s ease-in-out",
                    boxShadow: img.isCenter ? 6 : 1,
                    flexShrink: 0,
                  }}
                />
              );
            })}
          </Stack>

          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: { xs: 4, md: 12 },
              zIndex: 1,
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {showAllMenuButton && (
        <Box display="flex" justifyContent="center" mt={6}>
          <Button component={Link} to="/menupage" sx={heroStyles.menuButton}>
            메뉴 보기
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default MenuLayout;