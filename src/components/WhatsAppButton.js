import React from "react";
import { Fab, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "916005141549"; // Your WhatsApp number
    const message =
      "Hi! I'm interested in your dairy products. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Tooltip title="Chat with us on WhatsApp" placement="left">
      <Fab
        onClick={handleWhatsAppClick}
        sx={{
          position: "fixed",
          bottom: 90,
          right: 20,
          zIndex: 1000,
          backgroundColor: "#25D366",
          color: "white",
          "&:hover": {
            backgroundColor: "#128C7E",
            transform: "scale(1.1)",
          },
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": {
              boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)",
            },
            "70%": {
              boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)",
            },
            "100%": {
              boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)",
            },
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppButton;
