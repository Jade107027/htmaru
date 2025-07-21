import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { footerStyles as styles } from "../styles/styles";

const navigationLinks = ["매장소개", "메뉴", "예약하기", "오시는길"];

const contactInfo = [
  { icon: Phone, text: "051-728-7200" },
  { icon: LocationOn, text: "부산시 기장군 정관면 병산1길 74-18" },
];

const socialIcons = [Facebook, Instagram, Twitter, YouTube];

const Footer = () => {
  return (
    <Box component="footer" sx={styles.root}>
      <Box sx={styles.container}>
        <Stack spacing={6}>
          <Stack direction="row" spacing={8} alignItems="flex-start">
            {/* 브랜드 소개 */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={styles.brandTitle}>
                황토마루
              </Typography>
              <Typography sx={styles.brandDescription}>
                전통 한식 고기뷔페와 모던한 브런치를 한 곳에서 즐길 수 있는 황토
                <br />
                마루에서 특별한 식사 경험을 선사합니다.
              </Typography>
            </Box>

            {/* 네비게이션 */}
            <Box sx={{ minWidth: "200px" }}>
              <Typography variant="h6" sx={styles.sectionTitle}>
                정보
              </Typography>
              <Stack spacing={1}>
                {navigationLinks.map((link, index) => (
                  <Typography key={index} sx={styles.linkText}>
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Box>

            {/* 연락처 */}
            <Box sx={{ minWidth: "250px" }}>
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
                    <Typography sx={styles.contactText}>
                      {item.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* SNS */}
            <Box sx={{ minWidth: "150px" }}>
              
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
              <Typography sx={{ fontSize: "0.85rem", color: "#aaa", mb: 1 }}>
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
              <Typography sx={styles.bottomLink}>개인정보처리방침</Typography>
              <Typography sx={styles.bottomLink}>이용약관</Typography>
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