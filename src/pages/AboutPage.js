import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import vision from "../assets/images/vision.jpg";

const AboutPage = () => {
  return (
    <Box sx={{ margin: { xs: "2rem 1rem", sm: "4rem 2rem", md: "6rem 8rem" } }}>
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
        About Us
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}
          >
            Our Story
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontSize: "1.1rem" }}
          >
            Welcome to Koshur Dodh, your trusted source for fresh, high-quality
            dairy products. Our journey began with a commitment to delivering
            nutritious and wholesome milk directly from our farms to your
            doorstep. We believe in sustainable farming practices and the
            importance of purity in every drop we offer.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={vision}
            alt="About Us"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "-1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ marginTop: "4rem" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontSize: "1.1rem" }}
          >
            Our mission is to provide fresh, healthy, and ethically sourced
            dairy products to our customers. We aim to support local farmers,
            uphold the highest standards of quality, and ensure that every
            product you receive is packed with nutrition and goodness.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontSize: "1.1rem" }}
          >
            At Koshur Dodh, we pride ourselves on transparency, quality, and
            customer satisfaction. Our products are sourced directly from
            trusted farms, ensuring freshness and purity. Whether it's milk,
            yogurt, cheese, or other dairy essentials, we guarantee the finest
            products for your family. Choose us for a healthier, happier
            lifestyle.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
