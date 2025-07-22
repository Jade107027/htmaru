import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  Instagram,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { footerStyles as styles } from "../styles/styles";

const navigationLinks = [
  { label: "매장소개", path: "/about" },
  { label: "메뉴", path: "/menupage" },
  { label: "예약하기", path: "/reservation" },
  { label: "오시는길", path: "/location" },
];

const contactInfo = [
  { icon: Phone, text: "010-5821-4668" },
  { icon: LocationOn, text: "부산시 기장군 정관면 병산1길 74-18" },
];

const Footer = () => {
  return (
    <Box component="footer" sx={styles.root}>
      <Box sx={styles.container}>
        <Stack spacing={6}>
          <Stack direction="row" spacing={4} alignItems="flex-start">
            {/* 브랜드 소개 */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={styles.brandTitle}>
                황토마루
              </Typography>
              <Typography sx={styles.brandDescription}>
                몸과 마음이 머무는
                <br />
                자연 속 맛있는 휴식공간
              </Typography>
            </Box>

            {/* 정보 (네비게이션) */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={styles.sectionTitle}>
                정보
              </Typography>
              <Stack spacing={1}>
                {navigationLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      sx={{
                        ...styles.linkText,
                        fontFamily: "Hahmlet, serif",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* 연락처 */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={styles.sectionTitle}>
                연락처
              </Typography>
              <Stack spacing={1}>
                {contactInfo.map((item, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <item.icon sx={styles.contactIcon} />
                    <Typography
                      sx={{
                        ...styles.contactText,
                        fontFamily: "Hahmlet, serif",
                        color: "#aaa",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* 인스타그램 */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={styles.sectionTitle}>
                인스타그램
              </Typography>
              <IconButton
                component="a"
                href="https://www.instagram.com/hwangtomaru1996"
                target="_blank"
                rel="noopener"
                sx={styles.snsIconButton}
              >
                <Instagram sx={{ fontSize: 20 }} />
              </IconButton>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#aaa",
                  mb: 1,
                  fontFamily: "Hahmlet, serif",
                }}
              >
                실시간 소식을 확인하세요
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ borderColor: "#374151" }} />

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography sx={styles.copyright}>
              © 2025 황토마루. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={3}>

              <Typography
                component={Link}
                to="/admin-login"
                sx={{ ...styles.bottomLink, fontSize: "0.85rem" }}
              >
                관리자 로그인
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;