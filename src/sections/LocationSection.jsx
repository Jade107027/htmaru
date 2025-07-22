import React, { useEffect, useRef } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const locationData = {
  title: "황토마루 위치 안내",
  sections: [
    {
      icon: <LocationOnIcon />,
      label: "주소",
      content: "부산 기장군 정관읍 병산1길 74-18 황토마루",
    },
    {
      icon: <LocalParkingIcon />,
      label: "주차",
      content: "매장 앞 넉넉한 주차 공간이 마련되어 있어 차량 이용이 편리합니다.",
    },
    {
      icon: <AccessTimeIcon />,
      label: "영업시간",
      content:
        `월, 화: 정기휴무 (매주 월, 화요일)\n` +
        `수, 목, 금: 11:30 - 21:00 (브레이크타임 15:30 - 16:30)\n` +
        `토, 일: 11:00 - 21:00\n` +
        `라스트오더: 19:30`,
    },
  ],
};

export const LocationSection = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=ez5rqxy2k6"; // ← 여기에 본인 client ID 넣기
    script.async = true;
    script.onload = () => {
      const location = new window.naver.maps.LatLng(35.34236, 129.19363); // 황토마루 좌표
      const map = new window.naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 12,
        mapTypeId: window.naver.maps.MapTypeId.NORMAL, // ✅ 도로명 나옴
      });

      new window.naver.maps.Marker({
        position: location,
        map,
        title: "황토마루",
      });
    };

    document.head.appendChild(script);
  }, []);

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
            오시는 길
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems="stretch"
            sx={{ width: "100%", justifyContent: "center" }}
          >
            {/* 지도 삽입된 박스 */}
            <Box
              ref={mapRef}
              sx={{
                width: { xs: "100%", md: "50%" },
                borderRadius: 2,
                overflow: "hidden",
                flex: 1,
              }}
            />

            {/* 위치 정보 카드 */}
            <Paper
              elevation={2}
              sx={{
                width: { xs: "100%", md: "50%" },
                borderRadius: "16px",
                p: 4,
                overflow: "hidden",
                flex: 1,
              }}
            >
              <Typography
                variant="h6"
                color="primary.dark"
                sx={{
                  mb: 3,
                  fontFamily: "Gowun Batang, serif",
                  fontWeight: 700,
                }}
              >
                {locationData.title}
              </Typography>

              <Stack spacing={3}>
                {locationData.sections.map((section, index) => (
                  <Stack key={index} direction="row" spacing={2}>
                    <Box sx={{ mt: "2px" }}>
                      {React.cloneElement(section.icon, { sx: { fontSize: 20 } })}
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        color="#333333"
                        sx={{
                          fontFamily: "Hahmlet, serif",
                          fontWeight: 500,
                        }}
                      >
                        {section.label}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontFamily: "Hahmlet, serif",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {section.content}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                href="https://map.naver.com/v5/entry/place/11605363"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 4,
                  backgroundColor: "#a75e2b",
                  "&:hover": {
                    backgroundColor: "#dba96b",
                    color: "white",
                  },
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                }}
              >
                네이버 지도에서 길찾기
              </Button>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default LocationSection;