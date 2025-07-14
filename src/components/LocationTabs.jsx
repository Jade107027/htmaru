// LocationTabs.jsx
import { Box, Button, Divider } from "@mui/material";

const tabs = ["오시는 길", "내부지도", "주변 볼거리"];

const LocationTabs = ({ activeTab, setActiveTab }) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "32px",
        overflow: "hidden",
        border: "2px solid #e0e0e0",
        backgroundColor: "white",
        width: "fit-content",
        mx: "auto",
        boxShadow: 1,
      }}
    >
      {tabs.map((label, index) => (
        <Button
          key={index}
          onClick={() => setActiveTab(index)}
          sx={{
            flex: 1,
            px: 4,
            py: 1.5,
            backgroundColor: activeTab === index ? "#a75e2b" : "white",
            color: activeTab === index ? "white" : "#333",
            fontWeight: "bold",
            fontSize: "16px",
            borderRadius: 0,
            "&:hover": {
              backgroundColor: activeTab === index ? "#8a4d23" : "#f5f5f5",
            },
            borderRight:
              index < tabs.length - 1 ? "1px solid #e0e0e0" : "none",
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
};

export default LocationTabs;