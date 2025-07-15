import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const reservationInfo = [
  "예약은 최소 1일 전까지 가능합니다.",
  "주말 및 공휴일은 예약이 조기 마감될 수 있습니다.",
  "10인 이상 단체 예약은 전화로 문의해 주세요.",
  "예약 확정 후 변경 및 취소는 예약일 하루 전까지 가능합니다.",
];

const ReservationSection = () => {
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
            예약하기
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems="stretch"
            sx={{ width: "100%", justifyContent: "center" }}
          >
            {/* 왼쪽 이미지 */}
            <Paper
              elevation={2}
              sx={{
                width: { xs: "100%", md: "50%" },
                borderRadius: "16px",
                overflow: "hidden",
                flex: 1,
                display: "flex",
                minHeight: 420,
                backgroundImage: "url(/images/image2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* 오른쪽 카드 */}
            <Paper
              elevation={2}
              sx={{
                width: { xs: "100%", md: "50%" },
                borderRadius: "16px",
                p: 4,
                overflow: "hidden",
                flex: 1,
                minHeight: 420,
                bgcolor: "white", // ✅ LocationSection과 동일하게
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#333",
                    fontFamily: "Hahmlet-Regular, Helvetica",
                  }}
                >
                  예약 안내
                </Typography>

                <Stack spacing={1.5}>
                  {reservationInfo.map((info, index) => (
                    <Stack
                      key={index}
                      direction="row"
                      spacing={1.2}
                      alignItems="center"
                    >
                      <CheckCircleIcon
                        fontSize="small"
                        sx={{ color: "#B45309" }}
                      />
                      <Typography sx={{ color: "#333", fontSize: 15 }}>
                        {info}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 4,
                  backgroundColor: "#03c75a", // ✅ 초록색 복원
                  "&:hover": {
                    backgroundColor: "#02b350", // ✅ hover 시 진한 초록
                  },
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontFamily: "Hahmlet-Regular, Helvetica",
                  fontWeight: 500,
                }}
                component="a"
                href="https://map.naver.com/p/entry/place/11605363"
                target="_blank"
                rel="noopener noreferrer"
              >
                네이버 예약하기
              </Button>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ReservationSection;