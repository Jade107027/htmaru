import React from "react";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  Link,
} from "@mui/material";

const places = [
  {
    title: "장안사",
    image: "../images/nearby1.jpeg",
    description:
      "불광산 자락에 위치한 유서 깊은 사찰로, 신라 진흥왕 시기 원효대사가 창건한 것으로 전해집니다. \n 청정한 자연 속에서 산책과 사찰 체험이 가능한 힐링 명소입니다.",
    info: [
      { label: "주소", value: "부산 기장군 장안읍 장안사로 108" },
      { label: "대표번호", value: "051-727-2393" },
      { label: "입장료", value: "무료" },
    ],
    credit: "※ 사진 출처: 부산관광공사 Visit Busan 공식 홈페이지 (www.visitbusan.net)",
  },
  {
    title: "아홉산 숲",
    image: "../images/nearby2.jpeg",
    description:
      "아홉산 숲은 400년간 보존된 천연 대나무 숲으로, 드라마·영화 촬영지로도 유명한 기장의 대표 힐링 명소입니다. \n울창한 숲길과 고즈넉한 자연을 따라 산책하며 도심 속 여유를 느낄 수 있는 특별한 공간입니다.",
    info: [
      { label: "주소", value: "부산 기장군 철마면 웅천리 520-10" },
      { label: "대표번호", value: "051-721-9183" },
      { label: "운영시간", value: "09:00 ~ 18:00 (입장 마감 17:00)" },
    ],
    credit: "※ 사진 출처: 부산관광공사 Visit Busan 공식 홈페이지 (www.visitbusan.net)",
  },
  {
    title: "신세계 프리미엄 아울렛 부산",
    image: "../images/nearby3.jpeg",
    description:
      "해안가에 위치한 대형 프리미엄 아울렛으로, 약 200여 개의 글로벌 브랜드를 갖춘 쇼핑 명소입니다. 가족 단위 방문객을 위한 다양한 편의시설도 마련되어 있습니다.",
    info: [
      { label: "주소", value: "부산 기장군 장안읍 정관로 1133 부산 프리미엄 아울렛" },
      { label: "대표번호", value: "1644-4001" },
      {
        label: "홈페이지",
        value: (
          <Link
            href="https://www.premiumoutlets.co.kr/rpage/main/index/03"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="#a75e2b"
          >
            www.premiumoutlets.co.kr
          </Link>
        ),
      },
    ],
    credit: "※ 사진 출처: 부산관광공사 Visit Busan 공식 홈페이지 (www.visitbusan.net)",
  },
  {
    title: "롯데월드 어드벤처 부산",
    image: "../images/nearby4.jpeg",
    description:
      "다양한 어트랙션과 공연, 먹거리까지 즐길 수 있는 가족형 테마파크로, 바닷가 인근에 위치해 있어 경관도 뛰어납니다.",
    info: [
      { label: "주소", value: "부산 기장군 기장읍 동부산관광로 42" },
      { label: "대표번호", value: "1661-2000" },
      {
        label: "홈페이지",
        value: (
          <Link
            href="https://adventurebusan.lotteworld.com/kor/main/index.do"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="#a75e2b"
            sx={{
              whiteSpace: "nowrap",     // 줄바꿈 방지
              overflow: "hidden",       // 넘칠 경우 자르기
              textOverflow: "ellipsis", // ...으로 처리
              display: "inline-block",
              maxWidth: "100%",
            }}
          >
            adventurebusan.lotteworld.com
          </Link>
        ),
      },
    ],
    credit: "※ 사진 출처: 부산관광공사 Visit Busan 공식 홈페이지 (www.visitbusan.net)",
  },
  {
    title: "일광 해수욕장",
    image: "../images/nearby5.jpeg",
    description:
      "일광해수욕장은 1.8km 길이의 백사장을 따라 완만한 곡선을 이루며 펼쳐진 기장의 대표 해변으로, 수심이 얕아 가족 단위 피서지로 인기가 높습니다.\n역사적 명소인 삼성대와 강송정, 갯마을 촬영지 등 주변 관광 자원도 풍부해 휴양과 문화 체험을 함께 즐길 수 있습니다.",
    info: [
      { label: "주소", value: "부산 기장군 일광읍 삼성리 143-10" },
      { label: "문의", value: "051-709-5446" },
      {
        label: "홈페이지",
        value: (
          <Link
            href="http://tour.busan.go.kr/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="#a75e2b"
          >
            tour.busan.go.kr
          </Link>
        ),
      },
    ],
    credit: "※ 사진 출처: 부산관광공사 Visit Busan 공식 홈페이지 (www.visitbusan.net)",
  },
];

const NearbyTab = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#fdf8f3",
        pt: { xs: 1, sm: 4 }, 
        pb: { xs: 6, sm: 8 }, 
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 700, color: "#333", mb: 6 }}
        >
          주변관광지
        </Typography>

        <Stack spacing={6} alignItems="stretch">
          {places.map((place, idx) => (
            <Stack
              key={idx}
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems="stretch"
            >
              <Box
                component="img"
                src={place.image}
                alt={place.title}
                sx={{
                  width: { xs: "100%", md: "45%" },
                  height: 300,
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />

              <Paper
                elevation={0}
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
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "#a75e2b", fontWeight: 700, mb: 1 }}
                  >
                    {place.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#333",
                      lineHeight: 1.8,
                      fontSize: { xs: 14, sm: 15 },
                      wordBreak: "keep-all",
                      whiteSpace: "pre-line",
                      mb: 2,
                    }}
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
                            <td
                              style={{
                                color: "#333",
                                wordBreak: "break-word",
                                whiteSpace: "normal",
                                fontSize: "14px",
                                lineHeight: 1.6,
                              }}
                            >
                              {typeof row.value === "string" ? (
                                row.value
                              ) : (
                                <Box
                                  sx={{
                                    display: "inline-block",
                                    wordBreak: "break-word",
                                    maxWidth: "100%",
                                  }}
                                >
                                  {row.value}
                                </Box>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Box>
                  )}
                </Box>

                {place.credit && (
                  <Typography
                    component="div"
                    variant="caption"
                    sx={{
                      display: "block",
                      fontSize: "12px",
                      color: "#999",
                      mt: 2,
                      whiteSpace: "normal",
                      textAlign: "right",
                      wordBreak: "keep-all",
                    }}
                  >
                    {place.credit}
                  </Typography>
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