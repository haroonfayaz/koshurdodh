import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        color="primary"
        size="medium"
        aria-label="scroll back to top"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default BackToTop;
