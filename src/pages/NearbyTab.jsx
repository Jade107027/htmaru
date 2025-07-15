import React from "react";
import { Box, Container, Paper, Stack, Typography, Link } from "@mui/material";

const places = [
  {
    title: "장안사",
    image: "/images/image1.jpg",
    description:
      "불광산(659m) 자락에 있는 고찰로 범어사의 말사이다. 673년 원효대사가 창건하여 이후 여러 차례 중수되어 오늘에 이름.",
    info: [
      { label: "주소", value: "부산 기장군 장안읍 장안리 591번지" },
      { label: "대표번호", value: "051-727-2393" },
      { label: "입장료", value: "무료" },
    ],
  },
  {
    title: "간절곶",
    image: "/images/image1.jpg",
    description:
      "우리나라에서 새해 가장 먼저 해가 뜨는 간절곶은 대표적인 해맞이 명소로 소망우체통이 있는 이색적인 관광지입니다.",
    info: [
      { label: "주소", value: "울산광역시 울주군 서생면 대송리" },
      { label: "대표번호", value: "052-229-7000" },
      {
        label: "홈페이지",
        value: (
          <Link
            href="http://ganjeolgot.ulju.ulsan.kr"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="#a75e2b"
          >
            ganjeolgot.ulju.ulsan.kr
          </Link>
        ),
      },
    ],
  },
  {
    title: "동부산 롯데아울렛",
    image: "/images/image1.jpg",
    description:
      "동부산 롯데아울렛은 대형 매장과 쇼핑몰이 결합된 관광형 복합 쇼핑몰로 다양한 매장을 갖추고 있어 관광객들에게 인기입니다.",
    info: [
      { label: "주소", value: "부산 기장군 기장읍 당사리 64" },
      { label: "대표번호", value: "051-901-2500" },
      { label: "영업시간", value: "오전 10:00 - 오후 21:00 (금~일 연장)" },
    ],
  },
  {
    title: "일광해수욕장",
    image: "/images/image1.jpg",
    description:
      "맑고 얕은 바다와 넓은 백사장을 가진 일광해수욕장은 여름철 피서지로 인기가 높으며 숙박과 음식점도 가까이에 위치합니다.",
    info: [],
  },
];

const NearbyTab = () => {
  return (
    <Box component="section" sx={{ bgcolor: "#fdf8f3", py: 8, px: 2 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 700, color: "#333", mb: 6 }}
        >
          주변관광지
        </Typography>

        <Stack spacing={6}>
          {places.map((place, idx) => (
            <Stack
              key={idx}
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              alignItems="stretch"
            >
              <Box
                component="img"
                src={place.image}
                alt={place.title}
                sx={{
                  width: { xs: "100%", md: "45%" },
                  height: { xs: 260, md: 260 },
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />

              <Paper
                elevation={2}
                sx={{
                  flex: 1,
                  p: 3,
                  borderRadius: 2,
                  bgcolor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#a75e2b", fontWeight: 700, mb: 1 }}
                >
                  {place.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "#333", lineHeight: 1.7, mb: 2 }}
                >
                  {place.description}
                </Typography>

                {place.info.length > 0 && (
                  <Box
                    component="table"
                    sx={{ width: "100%", borderSpacing: 8 }}
                  >
                    <tbody>
                      {place.info.map((row, i) => (
                        <tr key={i}>
                          <td
                            style={{
                              color: "#666",
                              fontWeight: "bold",
                              width: "80px",
                              verticalAlign: "top",
                            }}
                          >
                            {row.label}
                          </td>
                          <td style={{ color: "#333" }}>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Box>
                )}
              </Paper>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default NearbyTab;