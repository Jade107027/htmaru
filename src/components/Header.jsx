import React, { useState, useEffect } from "react";
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
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"; 

const logo = "../images/logo3.png";

const navItems = [
  { label: "매장소개", path: "/about" },
  { label: "메뉴", path: "/menupage" },
  { label: "예약하기", path: "/reservation" },
  { label: "오시는길", path: "/location" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdminLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("로그아웃 되었습니다.");
        window.location.href = "/login";
      })
      .catch((err) => {
        console.error("로그아웃 실패:", err);
        alert("로그아웃 중 오류 발생");
      });
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#fdf8f3",
        height: { xs: 55, md: 90 },
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
                width: { xs: 75, md: 170 },
                height: { xs: 30, md: 65 },
                mt: { xs: 0, md: 1 },
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
                  fontSize: { xs: "14px", md: "20px" },
                  px: 1,
                  "&:hover": { opacity: 0.7 },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* 관리자 로그인 시 로그아웃 버튼 */}
            {isAdminLoggedIn && (
              <Button
                onClick={handleLogout}
                sx={{
                  ml: 2,
                  color: "#b91c1c",
                  fontFamily: "Hahmlet, serif",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", md: "16px" },
                  "&:hover": { opacity: 0.7 },
                }}
              >
                로그아웃
              </Button>
            )}
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
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: "35%",
            maxWidth: "80vw",
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={Link} to={item.path} onClick={toggleDrawer}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}

          {/* 모바일 로그아웃 버튼 */}
          {isAdminLoggedIn && (
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  toggleDrawer();
                  handleLogout();
                }}
              >
                <ListItemText primary="로그아웃" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;