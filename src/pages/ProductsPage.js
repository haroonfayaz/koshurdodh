import React from "react";
import { Container, Typography, Grid, Box, Divider } from "@mui/material";
import ProductCard from "../components/ProductCard";
import SEOHead from "../components/SEOHead";
import freshMilk from "../assets/images/bottleMilk.jpeg";
import curd from "../assets/images/curd.jpeg";
import cheese from "../assets/images/cheese.png";
import butter from "../assets/images/butter.avif";
import ghee from "../assets/images/ghee.jpg";
import processingEquipment from "../assets/images/processing-equipment.jpg";
import testingKit from "../assets/images/testing-kit.jpg";
import storageTank from "../assets/images/storage-tank.avif";
import sanitizer from "../assets/images/sanitizer.jpeg";
import milkPacket from "../assets/images/milkpacket.png";

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
      name: "Milk Packets",
      description:
        "Conveniently packed fresh milk for easy storage and daily use. Ideal for households and businesses.",
      image: milkPacket,
      status: "Coming Soon",
    },
    {
      id: 3,
      name: "Curd/Yogurt",
      description:
        "Creamy, probiotic-rich curd made from fresh milk. Perfect for a healthy diet and better digestion.",
      image: curd,
      status: "Coming Soon",
    },
    {
      id: 4,
      name: "Paneer",
      description:
        "Fresh, homemade cottage cheese made from pure milk. High in protein and perfect for various culinary applications.",
      image: cheese,
      status: "Coming Soon",
    },
    {
      id: 5,
      name: "Butter",
      description:
        "Pure dairy butter churned from fresh cream. Rich in taste and perfect for everyday use.",
      image: butter,
      status: "Coming Soon",
    },
    {
      id: 6,
      name: "Ghee",
      description:
        "Traditional clarified butter made from pure milk cream. Known for its rich aroma and authentic taste.",
      image: ghee,
      status: "Coming Soon",
    },
  ];

  const hygieneProducts = [
    {
      id: 7,
      name: "Milk Processing Equipment",
      description:
        "State-of-the-art pasteurization and homogenization equipment that ensures the highest quality and safety standards in milk processing.",
      image: processingEquipment,
    },
    {
      id: 8,
      name: "Quality Testing Kits",
      description:
        "Advanced testing equipment for monitoring milk quality, including fat content, SNF, protein analysis, and contamination detection.",
      image: testingKit,
    },
    {
      id: 9,
      name: "Storage Solutions",
      description:
        "Temperature-controlled bulk milk coolers and storage tanks that maintain optimal conditions for preserving milk freshness.",
      image: storageTank,
    },
    {
      id: 10,
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
        variant="h4"
        align="left"
        color="primary.main"
        gutterBottom
        sx={{
          fontWeight: 600,
          mt: 6,
          mb: 4,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -8,
            left: 0,
            width: 60,
            height: 4,
            backgroundColor: "primary.main",
            borderRadius: 2,
          },
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <>
      <SEOHead
        title="Our Products - Fresh Dairy & Hygiene Products | Koshur Dodh"
        description="Explore our range of fresh dairy products including milk, curd, paneer, butter, and ghee. Plus quality dairy equipment and hygiene products in Kashmir."
        keywords="dairy products Kashmir, fresh milk products, paneer Kashmir, butter ghee, dairy equipment, milk processing, hygiene products"
      />
      <Box
        sx={{ margin: { xs: "4rem 1rem", sm: "4rem 2rem", md: "6rem 8rem" } }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              fontFamily: "Matemasie",
              color: "primary.main",
            }}
          >
            Our Products
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{
              mb: 8,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: "1.8",
              fontSize: "1.1rem",
            }}
          >
            We take pride in offering high-quality dairy products and
            maintaining the highest standards of hygiene in our operations. Each
            product is carefully processed and packaged to ensure maximum
            freshness and nutritional value.
          </Typography>

          <ProductSection
            title="Dairy Products"
            products={dairyProducts}
            isDairySection={true}
          />

          <Divider
            sx={{ my: 8, height: 2, backgroundColor: "primary.light" }}
          />

          <ProductSection
            title="Hygiene & Equipment"
            products={hygieneProducts}
          />

          {/* Call to Action */}
          <Box
            sx={{
              mt: 10,
              p: 6,
              backgroundColor: "primary.main",
              borderRadius: 4,
              textAlign: "center",
              backgroundImage:
                "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                mb: 2,
                fontWeight: 600,
              }}
            >
              Interested in Our Products?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                mb: 4,
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Contact us today to learn more about our products, pricing, and
              delivery options. We're here to serve you with the finest dairy
              products Kashmir has to offer.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Products;
