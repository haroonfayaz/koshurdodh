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
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MilkIcon from "@mui/icons-material/EmojiFoodBeverage";
import QualityIcon from "@mui/icons-material/VerifiedUser";
import backgroundImage from "../assets/images/mainbg.jpg";
import milk from "../assets/images/bottleMilk.jpeg";
import yogurt from "../assets/images/yogurt.png";
import cheese from "../assets/images/cheese.png";
import milkPacket from "../assets/images/milkpacket.png";
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
    title: "Milk Packets",
    image: milkPacket,
    description: "Conveniently packed fresh milk",
    status: "Coming Soon",
  },
  {
    title: "Curd",
    image: yogurt,
    description: "Traditional creamy Curd made fresh daily",
    status: "Coming Soon",
  },
  {
    title: "Cheese",
    image: cheese,
    description: "Authentic Kashmir cheese varieties",
    status: "Coming Soon",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleOrderClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                fontWeight: 700,
                color: "white",
                mb: 3,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                fontFamily: "Matemasie",
              }}
            >
              KOSHUR DOD'H
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.8rem" },
                color: "white",
                mb: 4,
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
                fontFamily: "Matemasie",
              }}
            >
              Bringing the Pure Taste of Kashmir Valley to Your Doorstep
            </Typography>
            <Button
              onClick={handleOrderClick}
              variant="contained"
              size="large"
              sx={{
                py: 2,
                px: 6,
                fontSize: "1.2rem",
                borderRadius: "50px",
                backgroundColor: "#fff",
                color: "#1a237e",
                "&:hover": {
                  backgroundColor: "#1a237e",
                  color: "#fff",
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                },
                transition: "all 0.3s ease",
                fontFamily: "Matemasie",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
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
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                  elevation={0}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

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
            {products.map((product, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                        {product.title}
                      </Typography>
                      {product.status === "Coming Soon" && (
                        <Typography
                          sx={{
                            display: "inline-block",
                            px: 2,
                            py: 0.5,
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "14px",
                            textTransform: "uppercase",
                            background:
                              "linear-gradient(45deg, #388e3c, #2e7d32, #1b5e20)", // Different green shades

                            clipPath:
                              "polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
                          }}
                        >
                          {product.status}
                        </Typography>
                      )}
                    </Stack>

                    <Typography color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
