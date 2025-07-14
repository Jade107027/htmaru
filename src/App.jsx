// src/App.jsx
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";

import Frame from "./Frame";
import MenuPage from "./pages/MenuPage";
import LocationPage from "./pages/LocationPage"; // ← 이거 추가!
import HeroSection from "./sections/HeroSection";
import MenuSection from "./sections/MenuSection";
import ReservationSection from "./sections/ReservationSection";
import LocationSection from "./sections/LocationSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReservationPage from "./pages/ReservationPage";

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
                </>
              </Frame>
            }
          />

          {/* 메뉴 전용 페이지 */}
          <Route
            path="/menupage"
            element={
              <Frame>
                <MenuPage />
              </Frame>
            }
          />

          {/* 오시는 길 전용 페이지 */}
          <Route
            path="/location"
            element={
              <Frame>
                <LocationPage />
              </Frame>
            }
          />

          <Route
            path="/reservation"
            element={
              <Frame>
                <ReservationPage />
              </Frame>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;