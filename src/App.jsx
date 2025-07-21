import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";

import Frame from "./Frame";
import MenuPage from "./pages/MenuPage";
import LocationPage from "./pages/LocationPage";
import HeroSection from "./sections/HeroSection";
import MenuSection from "./sections/MenuSection";
import ReservationSection from "./sections/ReservationSection";
import LocationSection from "./sections/LocationSection";
import ReservationPage from "./pages/ReservationPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramSection from "./sections/InstagramSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* 홈페이지 */}
          <Route
            path="/"
            element={
              <Frame>
                <>
                  <HeroSection />
                  <MenuSection />
                  <ReservationSection />
                  <LocationSection />
                  <InstagramSection />
                </>
              </Frame>
            }
          />

          {/* 메뉴 페이지 */}
          <Route
            path="/menupage"
            element={
              <Frame>
                <MenuPage />
              </Frame>
            }
          />

          {/* 오시는 길 */}
          <Route
            path="/location"
            element={
              <Frame>
                <LocationPage />
              </Frame>
            }
          />

          {/* 예약하기 */}
          <Route
            path="/reservation"
            element={
              <Frame>
                <ReservationPage />
              </Frame>
            }
          />

          {/* 매장소개 */}
          <Route
            path="/about"
            element={
              <Frame>
                <AboutPage />
              </Frame>
            }
          />

          {/* 어드민 로그인 */}
          <Route
            path="/admin-login"
            element={
              <Frame>
                <LoginPage />
              </Frame>
            }
          />

          {/* 관리자 페이지 */}
          <Route
            path="/admin"
            element={
              <Frame>
                <AdminPage />
              </Frame>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;