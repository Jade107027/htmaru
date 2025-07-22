import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { headerStyles as styles } from "../styles/styles";

const logo = "/images/logo3.png";

const navItems = [
  { label: "매장소개", path: "/about" },
  { label: "메뉴", path: "/menupage" },
  { label: "예약하기", path: "/reservation" },
  { label: "오시는길", path: "/location" },
];

const Header = () => {
  const location = useLocation();

  return (
    <AppBar position="static" elevation={0} sx={styles.appBar}>
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "100%",
          px: { xs: 2, md: 4 },
          py: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 로고 */}
        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
          <Box component="img" src={logo} alt="황토마루 로고" sx={styles.logo} />
        </Box>

        {/* 네비게이션 버튼 */}
        <Stack direction="row" spacing={1}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              disableRipple
              sx={{
                color: "#5c3a1d",
                fontFamily: "Hahmlet, serif",
                fontWeight: 500,
                fontSize: "1.5rem",
                textTransform: "none",
                backgroundColor: "transparent",
                borderRadius: 2,
                px: 2,
                py: 0.8,
                transition: "transform 0.15s ease-in-out, background-color 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: "#f3e8dc",
                },
                "&:active": {
                  transform: "scale(1.12)",
                  backgroundColor: "#e9dac6",
                },
                "&:visited": {
                  color: "#5c3a1d", // 황토 계열 색으로 강제 고정
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;