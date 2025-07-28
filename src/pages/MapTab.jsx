import React from "react";
import { Box, Typography } from "@mui/material";

const MapTab = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#fdf8f3",
        pt: { xs: 1, sm: 4 }, 
        pb: { xs: 6, sm: 8 },
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <Box sx={{ px: 2 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          color="#333333"
          sx={{ mb: 4, fontWeight: 600 }}
        >
          황토마루 내부 지도
        </Typography>

        <Box
          component="img"
          src="../images/htmaru_map2.png"
          alt="황토마루 내부 지도"
          sx={{
            width: "100%",
            maxWidth: "100%",
            display: "block",
            mx: "auto",
            mt: 4,
          }}
        />
      </Box>
    </Box>
  );
};

export default MapTab;