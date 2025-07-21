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
      "깊은 숲속에서 10여년간 가족들이 직접 공들여 지은 황토집입니다.",
      "4만평 자연 속 6채의 황토집 사이 작은 계곡물이 흐르고 새소리, 물소리, 바람소리 등 자연의 사계절을 보고 느낄 수 있는 공간입니다.",
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