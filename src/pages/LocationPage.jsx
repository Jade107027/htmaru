import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import LocationSection from "../sections/LocationSection";
import MapTab from "../pages/MapTab";
import NearbyTab from "../pages/NearbyTab";

const tabList = [
  { id: 0, label: "오시는 길" },
  { id: 1, label: "내부지도" },
  { id: 2, label: "주변 볼거리" },
];


const LocationPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ px: 0, py: { xs: 6, md: 8 }, width: "100%" }}>
      {/* 탭 그룹 전체 박스 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: "999px",
          boxShadow: "none",
          border: "1px solid #fff",
          width: "fit-content",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        {tabList.map((tab, index) => (
          <Button
  key={tab.id}
  onClick={() => setActiveTab(tab.id)}
  disableRipple
  sx={{
    borderRadius: 0,
    px: { xs: 1.5, sm: 5, md: 6 },
    py: { xs: 0.8, sm: 1.5, md: 1.8 },
    fontSize: { xs: "12px", sm: "16px", md: "24px" },
    whiteSpace: "nowrap",
    backgroundColor: activeTab === tab.id ? "#a75e2b" : "#fff",
    color: activeTab === tab.id ? "#fff" : "#333",
    fontWeight: activeTab === tab.id ? "bold" : "normal",
    borderRight:
      index !== tabList.length - 1 ? "1px solid #fef5ea" : "none",
    "&:hover": {
      backgroundColor: "#fef5ea",
      color: "#a75e2b", 
    },
  }}
>
  {tab.label}
</Button>
        ))}
      </Box>

      {/* 탭별 콘텐츠 */}
      <Box mt={6}>
        {activeTab === 0 && <LocationSection />}
        {activeTab === 1 && <MapTab />}
        {activeTab === 2 && <NearbyTab />}
      </Box>
    </Box>
  );
};

export default LocationPage;