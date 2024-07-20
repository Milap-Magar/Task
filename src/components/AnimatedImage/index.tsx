import React from "react";
import { styled } from "@mui/material";

const AnimatedImageContainer = styled("img")({
  width: "100%",
  maxWidth: "200px",
  animation: "float 3s ease-in-out infinite",
  "@keyframes float": {
    "0%": {
      transform: "translatey(0px)",
    },
    "50%": {
      transform: "translatey(-10px)",
    },
    "100%": {
      transform: "translatey(0px)",
    },
  },
});

interface AnimatedImageProps {
  src: string;
  alt: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt }) => {
  return <AnimatedImageContainer src={src} alt={alt} />;
};

export default AnimatedImage;
