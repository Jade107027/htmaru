// src/sections/ReservationSection.jsx
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { reservationStyles } from "../styles/styles";

const reservationInfo = [
  "예약은 최소 1일 전까지 가능합니다.",
  "주말 및 공휴일은 예약이 조기 마감될 수 있습니다.",
  "10인 이상 단체 예약은 전화로 문의해 주세요.",
  "예약 확정 후 변경 및 취소는 예약일 하루 전까지 가능합니다.",
];

export const ReservationSection = () => {
  return (
    <Box sx={reservationStyles.sectionContainer}>
      <Typography variant="h4" sx={reservationStyles.sectionTitle}>
        예약하기
      </Typography>

      <Stack {...reservationStyles.stackWrapper}>
        {/* 좌측 이미지 */}
        <Paper elevation={3} sx={reservationStyles.imagePaper} />

        {/* 우측 텍스트 */}
        <Stack spacing={3} flex={1}>
          <Paper elevation={0} sx={reservationStyles.infoBox}>
            <Typography variant="h6" sx={reservationStyles.infoTitle}>
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
                  <CheckCircleIcon fontSize="small" sx={reservationStyles.icon} />
                  <Typography sx={reservationStyles.infoText}>{info}</Typography>
                </Stack>
              ))}
            </Stack>
          </Paper>

          <Button
            variant="contained"
            fullWidth
            startIcon={<Box component="span" sx={reservationStyles.buttonIcon} />}
            sx={reservationStyles.reserveButton}
            component="a"
            href="https://map.naver.com/p/entry/place/11605363?c=15.00,0,0,0,dh&placePath=/booking?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507142245&locale=ko&svcName=map_pcv5&entry=bmp&fromPanelNum=1&additionalHeight=76&timestamp=202507142245&locale=ko&svcName=map_pcv5"
            target="_blank"
            rel="noopener noreferrer"
          >
            네이버 예약하기
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ReservationSection;
