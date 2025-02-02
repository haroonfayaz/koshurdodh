// src/pages/HomePage.js
import React, { useCallback } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MilkIcon from "@mui/icons-material/EmojiFoodBeverage";
import QualityIcon from "@mui/icons-material/VerifiedUser";
import backgroundImage from "../assets/images/main.webp"; // Update with your image
import milk from "../assets/images/milk.png";
import yogurt from "../assets/images/yogurt.png";
import cheese from "../assets/images/cheese.png";
const features = [
  {
    icon: <MilkIcon sx={{ fontSize: 40, color: "#1a237e" }} />,
    title: "Fresh Dairy Products",
    description:
      "Farm-fresh milk, yogurt, cheese, and traditional dairy delights delivered daily",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: "#1a237e" }} />,
    title: "Home Delivery",
    description:
      "Early morning doorstep delivery ensuring your daily dairy needs",
  },
  {
    icon: <QualityIcon sx={{ fontSize: 40, color: "#1a237e" }} />,
    title: "Quality Assured",
    description:
      "100% pure and hygienic products from certified Kashmir valley farms",
  },
];

const products = [
  {
    title: "Fresh Milk",
    image: milk, // Add your product images
    description: "Pure cow milk, straight from Kashmir valleys",
  },
  {
    title: "Yogurt",
    image: yogurt,
    description: "Traditional creamy yogurt made fresh daily",
  },
  {
    title: "Cheese",
    image: cheese,
    description: "Authentic Kashmir cheese varieties",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleOrderClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Products Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "#1a237e",
              fontWeight: 600,
            }}
          >
            Our Products
          </Typography>
          <Grid container spacing={4}>
            {products.map((product, index) => {
              const isComingSoon = product.title !== "Fresh Milk";

              return (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      position: "relative",
                      transition: isComingSoon ? "none" : "transform 0.3s ease",
                      "&:hover": !isComingSoon && {
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    {/* Coming Soon Overlay */}
                    {isComingSoon && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(255, 255, 255, 0.6)",
                          borderRadius: "8px",
                          zIndex: 1,
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontSize: "35px",
                            color: "green",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            transform: "rotate(-15deg)",
                            padding: "8px 16px",
                            fontFamily: "Matemasie",
                          }}
                        >
                          Coming Soon
                        </Typography>
                      </Box>
                    )}

                    <CardMedia
                      component="img"
                      height="240"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        filter: isComingSoon ? "grayscale(80%)" : "none",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                        {product.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {product.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
