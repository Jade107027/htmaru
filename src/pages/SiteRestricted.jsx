import React from "react";
import { Box, Typography, Container } from "@mui/material";

function SiteRestricted() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fdf8f3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 3,
            boxShadow: 3,
            textAlign: "center",
            py: { xs: 6, md: 8 },
            px: { xs: 3, md: 5 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "30px" },
              fontWeight: "bold",
              color: "#1f1f1f",
              mb: 2,
            }}
          >
            황토마루
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#444",
              lineHeight: 1.8,
              wordBreak: "keep-all",
            }}
          >
            현재 홈페이지 이용이 일시적으로 제한됩니다.
            <br />
            이용에 불편을 드려 죄송합니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default SiteRestricted;