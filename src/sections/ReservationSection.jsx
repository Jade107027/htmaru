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
  "예약은 네이버로만 가능합니다.\n(3주 전부터 예약 가능)",
  "10인 이상 단체 예약은 전화문의 부탁 드립니다.",
  "예약 확정 후 변경 및 취소는 예약일 하루 전까지 네이버로 가능합니다.",
  "주말 및 공휴일 예약은 조기 마감될 수 있으니 참고 부탁 드립니다.",
];

const ReservationSection = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#fdf8f3",
        pt: { xs: 1, sm: 4 },
        pb: { xs: 6, sm: 8 },
        px: 2,
        width: "100%",
      }}
    >
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
                height: "auto",
                borderRadius: "16px",
                overflow: "hidden",
                flex: 1,
                display: "flex",
                minHeight: 300,
                backgroundImage: "url(../images/image2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* 오른쪽 카드 */}
            <Paper
              elevation={0}
              sx={{
                width: { xs: "100%", md: "50%" },
                borderRadius: "16px",
                p: 4,
                overflow: "hidden",
                flex: 1,
                minHeight: 300,
                bgcolor: "white", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "primary.dark", 
                    fontFamily: "Gowun Batang, serif", 
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
                      alignItems="flex-start"
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "#B45309",
                          fontSize: { xs: "15px", sm: "14px", md: "13px" },
                          position: "relative",
                          top: "4px", 
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#333",
                          fontSize: { xs: 14, sm: 15 },
                          lineHeight: 1.6,
                          wordBreak: "keep-all",
                          whiteSpace: "pre-line",
                        }}
                      >
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
                  backgroundColor: "#03c75a",
                  fontWeight: "bold", 
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#02b350",
                    color: "white", 
                  },
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontFamily: "Hahmlet-Regular, Helvetica",
                }}
                component="a"
                href="https://booking.naver.com/booking/6/bizes/1396607/items/6686682?area=ple&defaultOpen=all&lang=ko&startDate=2025-07-22&theme=place"
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