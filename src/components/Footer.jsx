import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import { Instagram, LocationOn, Phone } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const navigationLinks = [
  { label: "매장소개", path: "/about" },
  { label: "메뉴", path: "/menupage" },
  { label: "예약하기", path: "/reservation" },
  { label: "오시는길", path: "/location" },
];

const contactInfo = [
  { icon: Phone, text: "010-2250-6320" },
  { icon: LocationOn, text: "부산시 기장군 정관면 병산1길 74-18" },
];

const styles = {
  root: {
    width: "100%",
    backgroundColor: "#331F14",
    color: "#fff",
    py: { xs: 6, md: 8 },
    px: 2,
  },
  container: {
    width: "100%",
    mx: "auto",             
    px: { xs: 2, md: 4 },    
  },
  brandTitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
    mb: 1,
    fontFamily: "Hahmlet, serif",
  },
  brandDescription: {
    fontSize: "0.95rem",
    color: "#ccc",
    fontFamily: "Hahmlet, serif",
    lineHeight: 1.6,
  },
  sectionTitle: {
    fontSize: "1rem",
    fontWeight: "bold",
    mb: 1,
    fontFamily: "Hahmlet, serif",
  },
  linkText: {
    fontSize: "0.9rem",
    color: "#ccc",
    "&:hover": { color: "#fff" },
  },
  contactIcon: {
    fontSize: "1.1rem",
    color: "#aaa",
  },
  contactText: {
  fontSize: "0.9rem",
  color: "#ccc", 
  fontFamily: "Hahmlet, serif", 
},
  snsIconButton: {
    backgroundColor: "#fff",
    color: "#000",
    "&:hover": {
      backgroundColor: "#dba96b",
      color: "#fff",
    },
  },
  copyright: {
    fontSize: "0.8rem",
    color: "#aaa",
    fontFamily: "Hahmlet, serif",
  },
  bottomLink: {
    color: "#aaa",
    fontFamily: "Hahmlet, serif",
    "&:hover": { color: "#fff" },
  },
};

const Footer = () => {
  return (
    <Box component="footer" sx={styles.root}>
      <Box sx={styles.container}>
        <Stack spacing={6}>
          <Grid
            container
            spacing={{ xs: 4, md: 8 }}
            justifyContent="space-between"  // ✅ 중앙 정렬 + 반응형 간격
          >
            {/* 브랜드 소개 */}
            <Grid item xs={12} md={3}>
              <Typography variant="h4" sx={styles.brandTitle}>
                황토마루
              </Typography>
              <Typography sx={styles.brandDescription}>
                몸과 마음이 머무는
                <br />자연 속 맛있는 휴식공간
              </Typography>
            </Grid>

            {/* 정보 */}
            <Grid item xs={12} md={2}>
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
                    <Typography sx={styles.linkText}>
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* 연락처 */}
            <Grid item xs={12} md={4}>
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
                    <Typography sx={styles.contactText}>{item.text}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            {/* 인스타그램 */}
            <Grid item xs={12} md={2}>
              <Typography variant="h6" sx={styles.sectionTitle}>
                인스타그램
              </Typography>
              <IconButton
                component="a"
                href="https://www.instagram.com/hwangtomaru1996"
                target="_blank"
                rel="noopener"
                sx={{
                  p: 0, 
                  backgroundColor: "transparent",
                  "&:hover": {
                    color: "#transparent",
                  },
                }}
              >
                <Instagram sx={{ fontSize: 20, color: "#ffffff" }} />
              </IconButton>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "#ccc",
                  mt: 1,
                  fontFamily: "Hahmlet, serif",
                  maxWidth: 200,
                }}
              >
                실시간 소식을 확인하세요
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: "#374151" }} />

          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={styles.copyright}>
              © 2025 황토마루. All rights reserved.
            </Typography>
            <Typography
              component={Link}
              to="/admin-login"
              sx={styles.bottomLink}
            >
              관리자 로그인
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;