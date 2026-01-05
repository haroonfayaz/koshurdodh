import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import SEOHead from "../components/SEOHead";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import ScheduleIcon from "@mui/icons-material/Schedule";

const services = [
  {
    title: "Home Delivery",
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    description:
      "Fresh dairy products delivered to your doorstep every morning",
    features: [
      "Daily morning delivery (6 AM - 8 AM)",
      "Fresh milk in glass bottles or packets",
      "Temperature-controlled transportation",
      "Contactless delivery available",
    ],
  },
  {
    title: "Subscription Service",
    icon: <ScheduleIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    description: "Flexible subscription plans for regular customers",
    features: [
      "Weekly, monthly subscription options",
      "Pause/resume service anytime",
      "Advance payment discounts",
      "Priority customer support",
    ],
  },
  {
    title: "Quality Assurance",
    icon: <CheckCircleIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    description: "100% pure and tested dairy products",
    features: [
      "Farm-fresh milk from local farms",
      "Regular quality testing",
      "Hygienic processing and packaging",
      "No artificial additives or preservatives",
    ],
  },
];

const coverageAreas = [
  "Lal Chowk",
  "Jawahar Nagar",
  "Rajbagh",
  "Gogji Bagh",
  "Bemina",
  "Hyderpora",
  "Batmaloo",
  "Kralkhud",
  "Baghat Barzulla",
  "Natipora",
  "Peerbagh",
  "Illahibagh",
  "Soura",
  "Hazratbal",
  "Nishat",
];

const ServicesPage = () => {
  return (
    <>
      <SEOHead
        title="Our Services - Home Delivery & Subscription | Koshur Dodh Kashmir"
        description="Reliable dairy delivery services in Srinagar. Daily home delivery, flexible subscriptions, quality assurance. Serving 15+ areas across Kashmir."
        keywords="milk delivery Srinagar, dairy services Kashmir, home delivery milk, subscription milk service, fresh milk delivery areas"
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
            Our Services
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
            We provide comprehensive dairy services across Srinagar, ensuring
            fresh and pure milk products reach your home every day.
          </Typography>

          {/* Services Grid */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box sx={{ mb: 3 }}>{service.icon}</Box>
                    <Typography
                      variant="h5"
                      sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {service.description}
                    </Typography>
                    <List sx={{ textAlign: "left" }}>
                      {service.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon
                              sx={{ fontSize: 20, color: "success.main" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              variant: "body2",
                              color: "text.secondary",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Service Hours */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <AccessTimeIcon
                    sx={{ fontSize: 32, color: "primary.main", mr: 2 }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Service Hours
                  </Typography>
                </Box>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Delivery Hours"
                      secondary="6:00 AM - 8:00 AM (Daily)"
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Customer Support"
                      secondary="8:00 AM - 8:00 PM (Daily)"
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Order Booking"
                      secondary="24/7 via WhatsApp"
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <PhoneIcon
                    sx={{ fontSize: 32, color: "primary.main", mr: 2 }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Contact Information
                  </Typography>
                </Box>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Phone"
                      secondary="+91 6005141549"
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="WhatsApp"
                      secondary="+91 6005141549"
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Email"
                      secondary="Koshurdodh@gmail.com"
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>

          {/* Coverage Areas */}
          <Card sx={{ p: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <LocationOnIcon
                sx={{ fontSize: 32, color: "primary.main", mr: 2 }}
              />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Service Coverage Areas
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              We currently deliver to the following areas in Srinagar:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {coverageAreas.map((area, index) => (
                <Chip
                  key={index}
                  label={area}
                  variant="outlined"
                  color="primary"
                  sx={{ mb: 1 }}
                />
              ))}
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 3, fontStyle: "italic" }}
            >
              Don't see your area? Contact us - we're expanding our coverage
              regularly!
            </Typography>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default ServicesPage;
