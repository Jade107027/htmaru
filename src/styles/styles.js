// styles.js

export const sectionWrapper = {
  backgroundColor: "#fdf8f3",
  py: 8,
  px: 2,
  width: "100%",
};

export const titleText = {
  fontWeight: "bold",
  color: "#1f1f1f",
  textAlign: "center",
  mb: 6,
};

export const cardBase = {
  p: 3,
  boxShadow: 3,
  borderRadius: 2,
  bgcolor: "white",
  minWidth: 320,
  maxWidth: 400,
  flex: 1,
};

export const chipSelected = {
  backgroundColor: "#5c3a21",
  color: "white",
  px: 3,
  py: 1,
  fontSize: "16px",
  fontWeight: "normal",
  "&:hover": {
    backgroundColor: "#5c3a21",
  },
};

export const chipUnselected = {
  color: "#6b7280",
  fontSize: "16px",
  fontWeight: "normal",
  textTransform: "none",
  minWidth: "auto",
  px: 3,
  py: 1,
};

export const buttonFilledBrown = {
  backgroundColor: "#a75e2b",
  color: "white",
  fontSize: "16px",
  fontWeight: "normal",
  padding: "12px 24px",
  borderRadius: "8px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#8b4e24",
  },
};

export const buttonOutlinedBrown = {
  color: "#b45309",
  borderColor: "#a75e2b",
  backgroundColor: "white",
  px: 3,
  py: 1.5,
  fontSize: "16px",
  textTransform: "none",
  borderRadius: 1,
  "&:hover": {
    borderColor: "#a75e2b",
    backgroundColor: "#fef7ed",
  },
};

export const footerStyles = {
  root: {
    backgroundColor: "#2c1810",
    py: 6,
    px: 2,
    width: "100%",
  },
  container: {
    maxWidth: "1536px",
    mx: "auto",
    position: "relative",
  },
  brandTitle: {
    color: "white",
    fontWeight: "bold",
    mb: 3,
    fontSize: "2rem",
  },
  brandDescription: {
    color: "#d1d5db",
    lineHeight: 1.5,
    maxWidth: "400px",
  },
  sectionTitle: {
    color: "white",
    fontWeight: "bold",
    mb: 2,
  },
  linkText: {
    color: "#d1d5db",
    cursor: "pointer",
    "&:hover": { color: "white" },
  },
  contactIcon: {
    color: "white",
    fontSize: 16,
  },
  contactText: {
    color: "white",
  },
  snsIconButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
    width: 40,
    height: 40,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },
  copyright: {
    color: "#9ca3af",
    fontSize: "0.875rem",
  },
  bottomLink: {
    color: "#9ca3af",
    fontSize: "0.875rem",
    cursor: "pointer",
    "&:hover": { color: "#d1d5db" },
  },
};

export const headerStyles = {
  appBar: {
    backgroundColor: "#fdf8f3",
  },
  toolbar: {
    justifyContent: "space-between",
    px: 3,
  },
  logo: {
    width: 168,
    height: 65,
  },
  navLink: {
    color: "#374151",
    fontFamily: "Hahmlet-Regular, Helvetica",
    textDecoration: "none",
    "&:hover": {
      opacity: 0.7,
    },
  },
};

export const aboutStyles = {
  sectionBox: {
    py: 8,
    px: 2,
    bgcolor: "white",
    width: "100%",
  },
  title: {
    textAlign: "center",
    color: "#333333",
    fontWeight: "bold",
    mb: 6,
  },
  imageBox: {
    flex: 1,
    height: { xs: 300, md: 520 },
    borderRadius: 2,
    backgroundImage: "url(/image.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow:
      "0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)",
  },
  paper: {
    flex: 1,
    bgcolor: "#fdf8f3",
    borderRadius: 2,
    p: { xs: 3, md: 4 },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  subtitle: {
    color: "#B45309",
    fontWeight: "bold",
    mb: 2,
  },
  description: {
    color: "#333333",
    lineHeight: 1.7,
    mb: 2,
  },
  contactIconBox: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    bgcolor: "rgba(180, 83, 9, 0.1)",
    color: "#B45309",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contactLabel: {
    color: "#333333",
    fontWeight: "bold",
  },
  contactValue: {
    color: "#666666",
  },
};

export const heroStyles = {
  section: {
    position: "relative",
    width: "100%",
    height: "960px",
    backgroundImage: "url(images/image3.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: "208px",
    paddingTop: "200px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: "600px",
  },
  title: {
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "16px",
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
    whiteSpace: "nowrap",
  },
  subtitle: {
    color: "white",
    fontSize: "18px",
    fontWeight: "normal",
    marginBottom: "48px",
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
    whiteSpace: "nowrap",
  },
  menuButton: {
    backgroundColor: "#a75e2b",
    color: "white",
    fontSize: "16px",
    fontWeight: "normal",
    padding: "12px 24px",
    borderRadius: "8px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#8b4e24",
    },
  },
  reserveButton: {
    backgroundColor: "white",
    color: "#b45309",
    fontSize: "16px",
    fontWeight: "normal",
    padding: "12px 24px",
    borderRadius: "8px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
};
