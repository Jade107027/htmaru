// src/components/ImageSlider.jsx
import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const ImageSlider = ({ images, height = 300 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box
      position="relative"
      width="100%"
      height={height}
      borderRadius={2}
      overflow="hidden"
    >
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`이미지 ${currentIndex + 1}`}
        width="100%"
        height="100%"
        sx={{ objectFit: "cover" }}
      />

      <IconButton
        onClick={prevImage}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.3)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ArrowBackIosNew fontSize="small" />
      </IconButton>

      <IconButton
        onClick={nextImage}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.3)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;