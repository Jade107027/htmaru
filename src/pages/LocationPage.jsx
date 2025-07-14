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
    <Box sx={{ px: 2, py: 6 }}>
      {/* 탭 그룹 전체 박스 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: "999px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          border: "1px solid #ddd",
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
              px: 4,
              py: 1.5,
              backgroundColor: activeTab === tab.id ? "#a75e2b" : "#fff",
              color: activeTab === tab.id ? "#fff" : "#333",
              fontWeight: activeTab === tab.id ? "bold" : "normal",
              fontSize: "16px",
              borderRight:
                index !== tabList.length - 1 ? "1px solid #e0e0e0" : "none",
              "&:hover": {
                backgroundColor: activeTab === tab.id ? "#8a4d23" : "#f7f7f7",
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