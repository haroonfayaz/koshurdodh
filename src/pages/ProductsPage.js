import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Divider,
} from "@mui/material";
import freshMilk from "../assets/images/fresh-milk.webp";
import curd from "../assets/images/curd.jpeg";
import cheese from "../assets/images/cheese.png";
import butter from "../assets/images/butter.avif";
import ghee from "../assets/images/ghee.jpg";
import processingEquipment from "../assets/images/processing-equipment.jpg";
import testingKit from "../assets/images/testing-kit.jpg";
import storageTank from "../assets/images/storage-tank.avif";
import sanitizer from "../assets/images/sanitizer.jpeg";
const Products = () => {
  const dairyProducts = [
    {
      id: 1,
      name: "Fresh Milk",
      description:
        "Farm-fresh, pasteurized milk rich in calcium, protein, and essential nutrients. Available in various quantities to suit your needs.",
      image: freshMilk,
    },
    {
      id: 2,
      name: "Curd/Yogurt",
      description:
        "Creamy, probiotic-rich curd made from fresh milk. Perfect for a healthy diet and better digestion.",
      image: curd,
    },
    {
      id: 3,
      name: "Paneer",
      description:
        "Fresh, homemade cottage cheese made from pure milk. High in protein and perfect for various culinary applications.",
      image: cheese,
    },
    {
      id: 4,
      name: "Butter",
      description:
        "Pure dairy butter churned from fresh cream. Rich in taste and perfect for everyday use.",
      image: butter,
    },
    {
      id: 5,
      name: "Ghee",
      description:
        "Traditional clarified butter made from pure milk cream. Known for its rich aroma and authentic taste.",
      image: ghee,
    },
  ];

  const hygieneProducts = [
    {
      id: 6,
      name: "Milk Processing Equipment",
      description:
        "State-of-the-art pasteurization and homogenization equipment that ensures the highest quality and safety standards in milk processing.",
      image: processingEquipment,
    },
    {
      id: 7,
      name: "Quality Testing Kits",
      description:
        "Advanced testing equipment for monitoring milk quality, including fat content, SNF, protein analysis, and contamination detection.",
      image: testingKit,
    },
    {
      id: 8,
      name: "Storage Solutions",
      description:
        "Temperature-controlled bulk milk coolers and storage tanks that maintain optimal conditions for preserving milk freshness.",
      image: storageTank,
    },
    {
      id: 9,
      name: "Dairy Plant Sanitizers",
      description:
        "Food-grade sanitizing solutions specifically designed for dairy equipment and processing areas, ensuring maximum hygiene.",
      image: sanitizer,
    },
  ];

  const ProductSection = ({ title, products, isDairySection }) => (
    <>
      <Typography
        component="h2"
        variant="h5"
        align="left"
        color="text.primary"
        gutterBottom
        sx={{ fontFamily: "Matemasie", mt: 6, mb: 4 }}
      >
        {title}
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => {
          const isComingSoon = isDairySection && product.name !== "Fresh Milk";

          return (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              sx={{ position: "relative" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: isComingSoon ? "none" : "transform 0.2s",
                  "&:hover": !isComingSoon && {
                    transform: "scale(1.02)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                  },
                }}
              >
                {/* Coming Soon Overlay for Dairy Products Except Fresh Milk */}
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
                        fontSize: "40px",
                        color: "red",
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
                  sx={{
                    height: 200,
                    objectFit: "cover",
                    filter: isComingSoon ? "grayscale(80%)" : "none",
                  }}
                  image={product.image}
                  alt={product.name}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={{
                      color: "#2c3e50",
                      fontWeight: "500",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#7f8c8d",
                      lineHeight: "1.6",
                    }}
                  >
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );

  return (
    <Box sx={{ margin: { xs: "2rem 1rem", sm: "4rem 2rem", md: "6rem 8rem" } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            fontFamily: "Matemasie",
            color: "#1a237e",
          }}
        >
          Our Products
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{
            mb: 6,
            maxWidth: "800px",
            mx: "auto",
            lineHeight: "1.8",
          }}
        >
          We take pride in offering high-quality dairy products and maintaining
          the highest standards of hygiene in our operations. Each product is
          carefully processed and packaged to ensure maximum freshness and
          nutritional value.
        </Typography>

        <ProductSection
          title="Dairy Products"
          products={dairyProducts}
          isDairySection={true}
        />
        <Divider sx={{ my: 6 }} />
        <ProductSection title="Hygiene Products" products={hygieneProducts} />
      </Container>
    </Box>
  );
};

export default Products;
