import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const logo = "/htmaru/images/logo3.png";

const navItems = [
  { label: "매장소개", path: "/about" },
  { label: "메뉴", path: "/menupage" },
  { label: "예약하기", path: "/reservation" },
  { label: "오시는길", path: "/location" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#fdf8f3",
        height: { xs: 70, md: 120 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, md: 4 }, // 좌우 여백
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* 로고 */}
          <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={logo}
              alt="황토마루 로고"
              sx={{
                width: { xs: 120, md: 200 },
                height: { xs: 50, md: 70 },
                mt: { xs: 1, md: 2 }, // ✅ 로고 아래 공간 추가
              }}
            />
          </Box>

          {/* 데스크탑 네비게이션 */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                disableRipple
                sx={{
                  color: "#374151",
                  fontFamily: "Hahmlet, serif",
                  textDecoration: "none",
                  fontSize: { xs: "14px", md: "16px" },
                  px: 1,
                  "&:hover": { opacity: 0.7 },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* 모바일 메뉴 버튼 */}
          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { xs: "flex", md: "none" }, color: "#5c3a1d" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Box>

      {/* 모바일 드로어 */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <List sx={{ width: 220 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={Link} to={item.path} onClick={toggleDrawer}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;