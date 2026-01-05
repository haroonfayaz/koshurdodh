// src/pages/HomePage.js
import React, { useCallback } from "react";
import { Box, Button, Typography, Container, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MilkIcon from "@mui/icons-material/EmojiFoodBeverage";
import QualityIcon from "@mui/icons-material/VerifiedUser";
import backgroundImage from "../assets/images/main.webp";
import milk from "../assets/images/bottleMilk.jpeg";
import yogurt from "../assets/images/yogurt.png";
import cheese from "../assets/images/cheese.png";
import milkPacket from "../assets/images/milkpacket.png";
import ProductCard from "../components/ProductCard";
import TestimonialSection from "../components/TestimonialSection";
import StatsSection from "../components/StatsSection";
import FAQSection from "../components/FAQSection";
import SEOHead from "../components/SEOHead";

const features = [
  {
    icon: <MilkIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    title: "Fresh Dairy Products",
    description:
      "Farm-fresh milk, yogurt, cheese, and traditional dairy delights delivered daily from Kashmir valley farms",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    title: "Home Delivery",
    description:
      "Early morning doorstep delivery ensuring your daily dairy needs are met with convenience and reliability",
  },
  {
    icon: <QualityIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    title: "Quality Assured",
    description:
      "100% pure and hygienic products from certified Kashmir valley farms with rigorous quality testing",
  },
];

const products = [
  {
    title: "Fresh Milk",
    image: milk,
    description:
      "Pure cow milk, straight from Kashmir valleys - rich in nutrients and taste",
  },
  {
    title: "Milk Packets",
    image: milkPacket,
    description:
      "Conveniently packed fresh milk for easy storage and daily use",
    status: "Coming Soon",
  },
  {
    title: "Curd",
    image: yogurt,
    description:
      "Traditional creamy curd made fresh daily - perfect for healthy digestion",
    status: "Coming Soon",
  },
  {
    title: "Cheese",
    image: cheese,
    description: "Authentic Kashmir cheese varieties made from pure milk",
    status: "Coming Soon",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleOrderClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const handleLearnMore = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <SEOHead
        title="Koshur Dodh - Fresh Dairy Products from Kashmir Valley | Home Delivery in Srinagar"
        description="Premium fresh milk and dairy products delivered daily in Srinagar. 100% pure, farm-fresh milk from Kashmir valley farms. Order now for reliable home delivery service."
        keywords="fresh milk Srinagar, dairy products Kashmir, milk delivery Srinagar, pure milk Kashmir, home delivery milk, organic milk, Kashmir dairy products, daily milk delivery"
      />
      {/* Enhanced Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", md: "4.5rem", lg: "6rem" },
                fontWeight: 700,
                color: "white",
                mb: 3,
                textShadow: "3px 3px 6px rgba(0,0,0,0.5)",
                fontFamily: "Matemasie",
                animation: "fadeInUp 1s ease-out",
                "@keyframes fadeInUp": {
                  from: {
                    opacity: 0,
                    transform: "translateY(30px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              KOSHUR DOD'H
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.3rem", md: "2rem" },
                color: "white",
                mb: 4,
                maxWidth: "900px",
                mx: "auto",
                lineHeight: 1.6,
                fontFamily: "Matemasie",
                animation: "fadeInUp 1s ease-out 0.2s both",
              }}
            >
              Bringing the Pure Taste of Kashmir Valley to Your Doorstep
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                mb: 5,
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.7,
                animation: "fadeInUp 1s ease-out 0.4s both",
              }}
            >
              Experience the authentic taste of Kashmir with our farm-fresh
              dairy products, delivered fresh to your home every morning.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
              sx={{ animation: "fadeInUp 1s ease-out 0.6s both" }}
            >
              <Button
                onClick={handleOrderClick}
                variant="contained"
                size="large"
                sx={{
                  py: 2,
                  px: 6,
                  fontSize: "1.2rem",
                  backgroundColor: "success.main",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "success.dark",
                    transform: "translateY(-3px)",
                  },
                  fontFamily: "Matemasie",
                }}
              >
                Order Now
              </Button>
              <Button
                onClick={handleLearnMore}
                variant="outlined"
                size="large"
                sx={{
                  py: 2,
                  px: 6,
                  fontSize: "1.2rem",
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-3px)",
                  },
                  fontFamily: "Matemasie",
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Enhanced Features Section */}
      <Box sx={{ py: 10, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 3,
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Why Choose Koshur Dodh
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              mb: 8,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            We're committed to delivering the finest dairy products with
            unmatched quality and service
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Products Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 3,
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Our Premium Products
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              mb: 8,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Discover our range of fresh, pure, and nutritious dairy products
          </Typography>
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: "primary.main",
          backgroundImage: "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                mb: 3,
                fontWeight: 600,
              }}
            >
              Ready to Experience Pure Kashmir Dairy?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                mb: 5,
                lineHeight: 1.6,
              }}
            >
              Join hundreds of satisfied customers who trust us for their daily
              dairy needs. Start your journey to healthier living today.
            </Typography>
            <Button
              onClick={handleOrderClick}
              variant="contained"
              size="large"
              sx={{
                py: 2.5,
                px: 8,
                fontSize: "1.3rem",
                backgroundColor: "white",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  transform: "translateY(-3px)",
                },
                fontWeight: 600,
              }}
            >
              Start Your Order
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
