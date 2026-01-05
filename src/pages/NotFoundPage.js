import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SEOHead from "../components/SEOHead";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoToProducts = () => {
    navigate("/products");
  };

  return (
    <>
      <SEOHead
        title="Page Not Found - Koshur Dodh | Fresh Dairy Products Kashmir"
        description="The page you're looking for doesn't exist. Explore our fresh dairy products and services from Kashmir valley."
        keywords="404 error, page not found, Koshur Dodh, dairy products Kashmir"
      />
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            textAlign: "center",
            py: 8,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "6rem", md: "8rem" },
              fontWeight: 700,
              color: "primary.main",
              mb: 2,
              lineHeight: 1,
            }}
          >
            404
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            Oops! Page Not Found
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "text.secondary",
              maxWidth: "500px",
              lineHeight: 1.6,
            }}
          >
            The page you're looking for seems to have wandered off like a cow in
            the Kashmir meadows. But don't worry, we can help you find your way
            back to our fresh dairy products!
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              startIcon={<HomeIcon />}
              onClick={handleGoHome}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Go Home
            </Button>

            <Button
              variant="outlined"
              startIcon={<SearchIcon />}
              onClick={handleGoToProducts}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Browse Products
            </Button>
          </Box>

          <Box
            sx={{
              mt: 6,
              p: 3,
              backgroundColor: "background.paper",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
              Need Help?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Contact us at{" "}
              <a
                href="tel:+916005141549"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                +91 6005141549
              </a>{" "}
              or{" "}
              <a
                href="mailto:Koshurdodh@gmail.com"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Koshurdodh@gmail.com
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NotFoundPage;
