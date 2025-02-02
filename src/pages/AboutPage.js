import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import vision from "../assets/images/vision.jpg";
import ourstory from "../assets/images/koshurdodh.jpeg";
import story from "../assets/images/ourstory.jpeg";
import mission from "../assets/images/milkProducts.jpg";
const AboutPage = () => {
  return (
    <Box sx={{ margin: { xs: "4rem 1rem", sm: "4rem 2rem", md: "6rem 8rem" } }}>
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
            Our story began with an idea of fulfilling the deficit of
            unadulterated milk in the market and make pure milk accessible to
            every household in Srinagar as milk is a daily necessity and
            majority of Srinagarites didn’t had access to 100 % pure milk.
            Children and elderly form the core of our idea.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={story}
            alt="About Us"
            sx={{
              width: { xs: "300px", md: "100%" },
              height: "200px",
              borderRadius: "8px",
              boxShadow: "-1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ marginTop: "4rem" }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={mission}
            alt="mission"
            sx={{
              width: { xs: "300px", md: "100%" },
              height: "200px",
              borderRadius: "8px",
              boxShadow: "-1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
            }}
          />
        </Grid>
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
            Our mission is to take care of health of the people, create
            employment opportunities , generate uninterrupted revenue for the
            milk farmers and bringing a white revolution in Kashmir.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ marginTop: "4rem" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontSize: "1.1rem" }}
          >
            Our vision would be to supply quality Kashmiri milk to main land
            India and to rest of the world.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={vision}
            alt="vision"
            sx={{
              width: { xs: "300px", md: "100%" },
              height: "200px",
              borderRadius: "8px",
              boxShadow: "-1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        sx={{ marginTop: { xs: "0rem", md: "4rem" } }}
      >
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Box
            component="img"
            src={ourstory}
            alt="vision"
            sx={{
              width: "100%",
              height: "300px",
              borderRadius: "8px",
              boxShadow: "-1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              textAlign: "center",
              mt: "4rem",
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontSize: "1.1rem" }}
          >
            At KOSHUR DOD'H, we pride ourselves on transparency, quality, and
            customer satisfaction. Our products are sourced directly from
            trusted farms, ensuring freshness and purity. We guarantee the
            finest products for your family. Choose us for a healthier, happier
            lifestyle.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
