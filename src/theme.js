// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"Hahmlet", "sans-serif"`,

    h1: { fontFamily: `"Gowun Batang", "serif"` },
    h2: { fontFamily: `"Gowun Batang", "serif"` },
    h3: { fontFamily: `"Gowun Batang", "serif"` },
    h4: { fontFamily: `"Gowun Batang", "serif"` },
    h5: { fontFamily: `"Gowun Batang", "serif"` },
    h6: { fontFamily: `"Gowun Batang", "serif"` },

    body1: { fontFamily: `"Hahmlet", "sans-serif"` },
    body2: { fontFamily: `"Hahmlet", "sans-serif"` },
  },

  palette: {
    background: {
      default: "#fdf8f3", // 사이트 배경색
    },
    primary: {
      main: "#a75e2b", // 황토 계열 주 색상
    },
    secondary: {
      main: "#b45309",
    },
    text: {
      primary: "#1f1f1f",
      secondary: "#6b7280",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none", // 버튼 텍스트 대문자 방지
          fontWeight: "bold",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h6",
          subtitle2: "h6",
        },
      },
    },
  },
});

export default theme;