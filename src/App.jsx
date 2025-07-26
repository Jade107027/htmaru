import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; 

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
import theme from "./theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramSection from "./sections/InstagramSection";

function App() {
  return (
    <HashRouter> 
      <Routes>
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
        <Route path="/menupage" element={<Frame><MenuPage /></Frame>} />
        <Route path="/location" element={<Frame><LocationPage /></Frame>} />
        <Route path="/reservation" element={<Frame><ReservationPage /></Frame>} />
        <Route path="/about" element={<Frame><AboutPage /></Frame>} />
        <Route path="/admin-login" element={<Frame><LoginPage /></Frame>} />
        <Route path="/admin" element={<Frame><AdminPage /></Frame>} />
      </Routes>
    </HashRouter>
  );
}

export default App;