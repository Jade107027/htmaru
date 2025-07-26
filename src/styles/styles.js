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
  fontSize: { xs: "14px", md: "16px" },
  fontWeight: "normal",
  "&:hover": {
    backgroundColor: "#5c3a21",
  },
};

export const chipUnselected = {
  color: "#6b7280",
  fontSize: { xs: "14px", md: "16px" },
  fontWeight: "normal",
  textTransform: "none",
  minWidth: "auto",
  px: 3,
  py: 1,
};

export const buttonFilledBrown = {
  backgroundColor: "#a75e2b",
  color: "white",
  fontSize: { xs: "14px", md: "16px" },
  fontWeight: "normal",
  px: { xs: 2, md: 3 },
  py: { xs: 1, md: 1.5 },
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
  px: { xs: 2, md: 3 },
  py: { xs: 1, md: 1.5 },
  fontSize: { xs: "14px", md: "16px" },
  textTransform: "none",
  borderRadius: 1,
  "&:hover": {
    borderColor: "#a75e2b",
    backgroundColor: "#fef7ed",
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
    height: { xs: 240, md: 520 },
    borderRadius: 2,
    backgroundImage: "url(/htmaru/image.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
  minHeight: "100vh", // ✅ 화면 전체 높이 채움
  backgroundImage: "url(/htmaru/images/image3.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center", // ✅ 중앙 정렬로 변경
  justifyContent: "center",
  px: { xs: 2, md: "208px" }, // ✅ 좌우 여백 반응형
  pt: { xs: 10, md: "200px" }, // ✅ 위쪽 여백 반응형
  boxSizing: "border-box",
  flexDirection: "column", // 모바일 대응
},
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
  position: "relative",
  zIndex: 1,
  maxWidth: { xs: "100%", md: "600px" }, 
  px: { xs: 2, md: 0 },
  textAlign: "center", 
},
  title: {
    fontSize: { xs: "40px", md: "64px" },
    fontWeight: "bold",
    color: "white",
    mb: 2,
    whiteSpace: "normal",
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: { xs: "16px", md: "24px" },
    color: "white",
    lineHeight: 1.7,
    mb: 6,
    whiteSpace: "pre-line",
  },
menuButton: {
  backgroundColor: "white",
  color: "#a75e2b",
  border: "1px solid #a75e2b",
  fontSize: { xs: "14px", md: "16px" },
  fontWeight: "bold",
  px: { xs: 2, md: 3 },
  py: { xs: 1, md: 1.5 },
  fontFamily: "Hahmlet, serif",
  borderRadius: "8px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#dba96b",
    color: "white",
  },
},
  reserveButton: {
    backgroundColor: "#a75e2b",
    color: "white",
    fontSize: { xs: "14px", md: "16px" },
    fontWeight: "bold",
    px: { xs: 2, md: 3 },
    py: { xs: 1, md: 1.5 },
    fontFamily: "Hahmlet, serif",
    borderRadius: "8px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#dba96b",
      color: "white",
    },
  },
};