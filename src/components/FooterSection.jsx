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
import { footerStyles as styles } from "../styles/styles";

const navigationLinks = ["매장소개", "메뉴", "예약하기", "오시는길"];

const contactInfo = [
  { icon: Phone, text: "02-123-4567" },
  { icon: Email, text: "info@hwangtomaru.com" },
  { icon: LocationOn, text: "서울시 강남구 테헤란로 123" },
];

const socialIcons = [Facebook, Instagram, Twitter, YouTube];

const FooterSection = () => {
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
            <Box>
              <Typography variant="h6" sx={styles.sectionTitle}>
                팔로우
              </Typography>
              <Stack direction="row" spacing={1}>
                {socialIcons.map((Icon, index) => (
                  <IconButton key={index} sx={styles.snsIconButton}>
                    <Icon sx={{ fontSize: 16 }} />
                  </IconButton>
                ))}
              </Stack>
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
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default FooterSection;