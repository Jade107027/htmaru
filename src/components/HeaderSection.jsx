import React from "react";
import { AppBar, Toolbar, Typography, Box, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { headerStyles as styles } from "../styles/styles";

const logo = "/images/htmaru_logo.png";

const navItems = [
  { label: "매장소개", path: "#about" },
  { label: "메뉴", path: "#menu" },
  { label: "예약하기", path: "/reservation" },
  { label: "오시는길", path: "/location" },
];

const HeaderSection = () => {
  const location = useLocation();

  return (
    <AppBar position="static" elevation={0} sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
          <Box component="img" src={logo} alt="황토마루 로고" sx={styles.logo} />
        </Box>
        <Stack direction="row" spacing={4}>
          {navItems.map((item) =>
            item.path.startsWith("/") ? (
              // 내부 라우트는 Link 컴포넌트 사용
              <Typography
                key={item.label}
                component={Link}
                to={item.path}
                sx={styles.navLink}
              >
                {item.label}
              </Typography>
            ) : (
              // 해시(#) 섹션 이동은 a 태그 사용
              <Typography
                key={item.label}
                component="a"
                href={item.path}
                sx={styles.navLink}
              >
                {item.label}
              </Typography>
            )
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderSection;