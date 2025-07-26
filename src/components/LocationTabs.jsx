import { Box, Button, useTheme } from "@mui/material";

const tabs = ["오시는 길", "내부지도", "주변 볼거리"];

const LocationTabs = ({ activeTab, setActiveTab }) => {
  const theme = useTheme(); // ✅ 함수 안에서 호출해야 함
  console.log("Breakpoint check:", theme.breakpoints.values);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
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
          disableRipple
          variant="text"
          sx={{
            flex: 1,
            px: { xs: 1.5, sm: 4 },
            py: { xs: 0.75, sm: 1.5 },
            fontSize: { xs: "12px", sm: "24px" },
                backgroundColor: { xs: "red", sm: "green" }, // ✅ 테스트용

            fontWeight: "bold",
            textTransform: "none",
            whiteSpace: "nowrap",
            borderRadius: 0,
            backgroundColor: activeTab === index ? "#a75e2b" : "white",
            color: activeTab === index ? "white" : "#333",
            borderRight:
              index < tabs.length - 1 ? "1px solid #e0e0e0" : "none",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor:
                activeTab === index ? "#8a4d23" : "#fef5ea",
              color: activeTab === index ? "white" : "#dba96b",
            },
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
};

export default LocationTabs;