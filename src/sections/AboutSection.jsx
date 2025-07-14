import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { aboutStyles as styles } from "../styles/styles"; // 추가

export const AboutSection = () => {
  const restaurantInfo = {
    title: "매장 소개",
    subtitle: "전통과 현대의 만남",
    description: [
      "황토마루는 정통 한식 고기뷔페와 모던한 브런치 메뉴를 함께 즐길 수 있는 특별한 공간입니다. 자연 친화적인 황토와 나무로 꾸며진 따뜻한 분위기 속에서 최상급 한우와 신선한 식재료로 만든 다양한 요리를 경험하실 수 있습니다.",
      "아침에는 건강한 브런치를, 점심과 저녁에는 풍성한 고기뷔페를 제공하여 하루 종일 다양한 고객님들의 입맛을 사로잡고 있습니다. 가족 모임, 연인과의 데이트, 비즈니스 미팅 등 어떤 자리에도 어울리는 황토마루에서 특별한 시간을 보내세요.",
    ],
    contact: {
      hours: {
        label: "영업시간",
        value: "매일 10:00 - 22:00",
        icon: <AccessTimeIcon fontSize="small" />,
      },
      phone: {
        label: "전화번호",
        value: "02-123-4567",
        icon: <PhoneIcon fontSize="small" />,
      },
    },
  };

  return (
    <Box sx={styles.sectionBox}>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={styles.title}>
          {restaurantInfo.title}
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="stretch"
        >
          <Box sx={styles.imageBox} />

          <Paper elevation={2} sx={styles.paper}>
            <Typography variant="h5" sx={styles.subtitle}>
              {restaurantInfo.subtitle}
            </Typography>

            {restaurantInfo.description.map((text, idx) => (
              <Typography key={idx} variant="body1" sx={styles.description}>
                {text}
              </Typography>
            ))}

            <Stack
              direction="row"
              spacing={4}
              mt={2}
              justifyContent="flex-start"
              alignItems="center"
              flexWrap="wrap"
            >
              {[restaurantInfo.contact.hours, restaurantInfo.contact.phone].map(
                (item, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Box sx={styles.contactIconBox}>{item.icon}</Box>
                    <Box>
                      <Typography variant="subtitle1" sx={styles.contactLabel}>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" sx={styles.contactValue}>
                        {item.value}
                      </Typography>
                    </Box>
                  </Stack>
                )
              )}
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutSection;