// MenuLayout.jsx
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

const galleryImages = [
  "/menu-images/menu1.jpg",
  "/menu-images/menu2.jpg",
  "/menu-images/menu3.jpg",
  "/menu-images/menu4.jpg",
  "/menu-images/menu5.jpg",
  "/menu-images/menu6.jpg",
  "/menu-images/menu7.jpg",
  "/menu-images/menu8.jpg",
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
    <Box sx={{ px: 2, py: 8 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 3, fontWeight: "bold", color: "#1f1f1f" }}
      >
        황토마루 메뉴
      </Typography>

      {/* 고기뷔페 안내 */}
      <Box component="section" py={6} sx={{ backgroundColor: "#fdf8f3", width: "100%" }}>
        <Container maxWidth="xl">
          <Box sx={{ position: "relative" }}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              color="#333333"
              sx={{ mb: 4, fontWeight: 600 }}
            >
              프미리엄 고기뷔페 안내
            </Typography>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              alignItems="stretch"
              sx={{ width: "100%", justifyContent: "center" }}
            >
              {[
                {
                  title: "주말",
                  desc: "프리미엄 한우 BBQ / 샐러드 / 찬 음식 / 따뜻한 음식 / 반찬 / 소스 / 디저트 포함",
                  time: "토–일 11:00 - 21:00 (라스트오더 19:30)",
                  additional: "36개월 미만 유아 성인 1명당 1인 무료\n초등학생 4학년 이하 1만원 할인",
                  price: "₩33,800",
                },
                {
                  title: "주중",
                  desc: "정통 한식 BBQ / 샐러드 / 찬 음식 / 따뜻한 음식 / 반찬 / 소스 / 아이스크림 및 커피 포함",
                  time: "수–금 11:30 - 21:00 (라스트오더 19:30)\n브레이크타임 15:30 - 16:30",
                  price: "₩31,800",
                },
              ].map((item, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    borderRadius: "16px",
                    p: 4,
                    overflow: "hidden",
                    flex: 1,
                    bgcolor: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 420,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        color: "#b45309",
                        fontSize: "28px",
                        fontFamily: "Hahmlet-Regular, Helvetica",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "#333",
                        fontFamily: "Hahmlet-Regular, Helvetica",
                        lineHeight: 1.6,
                        mb: 2,
                      }}
                    >
                      {item.desc}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#333",
                        whiteSpace: "pre-line",
                        mb: item.additional ? 1.5 : 2,
                      }}
                    >
                      {item.time}
                    </Typography>

                    {item.additional && (
                      <Typography
                        sx={{
                          fontSize: "15px",
                          color: "#777",
                          whiteSpace: "pre-line",
                          mb: 2,
                        }}
                      >
                        {item.additional}
                      </Typography>
                    )}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#b45309",
                      mt: "auto",
                    }}
                  >
                    {item.price}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* 메뉴 갤러리 */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h5" align="center" sx={{ mb: 4 }}>
          메뉴 갤러리
        </Typography>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: 0,
              zIndex: 1,
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
          >
            <ArrowBackIosNew fontSize="small" />
          </IconButton>

          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            {getVisibleImages().map((img, idx) => {
              const actualIndex = (currentIndex + idx - 2 + galleryImages.length) % galleryImages.length;
              return (
                <Box
                  key={idx}
                  onClick={() => setCurrentIndex(actualIndex)}
                  sx={{
                    cursor: "pointer",
                    width: img.isCenter ? 400 : 240,
                    height: img.isCenter ? 280 : 180,
                    borderRadius: 2,
                    backgroundImage: `url(${img.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "all 0.3s ease-in-out",
                    boxShadow: img.isCenter ? 6 : 1,
                  }}
                />
              );
            })}
          </Stack>

          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: 0,
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

      {/* 전체 메뉴 보기 버튼 */}
      {showAllMenuButton && (
        <Box display="flex" justifyContent="center" mt={6}>
          <Button
            component={Link}
            to="/menupage"
            variant="outlined"
            sx={{
              color: "#b45309",
              borderColor: "#a75e2b",
              backgroundColor: "white",
              px: 3,
              py: 1.5,
              fontSize: "16px",
              textTransform: "none",
              borderRadius: 1,
              "&:hover": {
                borderColor: "#a75e2b",
                backgroundColor: "#fef7ed",
              },
            }}
          >
            전체 메뉴 보기
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default MenuLayout;
