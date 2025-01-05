// src/pages/HomePage.js
import React, { useCallback } from "react";
import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../assets/images/main.webp";
import { useNavigate } from "react-router-dom";
import PackageHome from "../components/PackageHome";
import LocationsHome from "../components/LocationsHome";

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ display: "block" }}>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "50px" },
              color: "White",
              fontWeight: 700,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Koshur Dod'h
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: { xs: "14px", md: "22px" } }}
          >
            Savor the richness of nature with our pure and delicious dairy
            products!
          </Typography>
          <Button
            onClick={handleRegisterClick}
            sx={{
              mt: 2,
              backgroundColor: "white",
              height: "60px",
              width: "180px",
              fontWeight: 700,
              color: "inherit",
              borderRadius: "8px",
              "&:hover": {
                color: "inherit",
                fontSize: "20px",
                backgroundColor: "white",
                transform: "scale(1.1)",
                width: "230px",
              },
            }}
          >
            Register Now
          </Button>
        </Box>
      </Box>
      <PackageHome />
      <LocationsHome />
    </>
  );
};

export default HomePage;
