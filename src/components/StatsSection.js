import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const stats = [
  {
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    number: "500+",
    label: "Happy Customers",
    color: "#4caf50",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
    number: "1000+",
    label: "Daily Deliveries",
    color: "#2196f3",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
    number: "100%",
    label: "Pure & Fresh",
    color: "#ff9800",
  },
  {
    icon: <LocationCityIcon sx={{ fontSize: 40 }} />,
    number: "15+",
    label: "Areas Covered",
    color: "#9c27b0",
  },
];

const StatsSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "primary.main" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "white",
            fontWeight: 600,
          }}
        >
          Our Impact in Numbers
        </Typography>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      color: stat.color,
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: stat.color,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
