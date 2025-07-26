import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"Hahmlet", "sans-serif"`,

    h1: {
      fontFamily: `"Gowun Batang", "serif"`,
      fontSize: "3rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontFamily: `"Gowun Batang", "serif"`,
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "1.6rem",
      },
    },
    h3: {
      fontFamily: `"Gowun Batang", "serif"`,
      fontSize: "2rem",
      "@media (max-width:600px)": {
        fontSize: "1.4rem",
      },
    },
    h4: {
      fontFamily: `"Gowun Batang", "serif"`,
      fontSize: "1.7rem",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    h5: {
      fontFamily: `"Gowun Batang", "serif"`,
      fontSize: "1.4rem",
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      fontFamily: `"Gowun Batang", "serif"`,
      fontSize: "1.2rem",
      "@media (max-width:600px)": {
        fontSize: "0.95rem",
      },
    },

    body1: { fontFamily: `"Hahmlet", "sans-serif"` },
    body2: { fontFamily: `"Hahmlet", "sans-serif"` },
  },

  palette: {
    background: {
      default: "#fdf8f3",
    },
    primary: {
      main: "#a75e2b",
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
          textTransform: "none",
          fontWeight: 400,
        },
        contained: {
          backgroundColor: "#a75e2b",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#dba96b",
            color: "#fff",
          },
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