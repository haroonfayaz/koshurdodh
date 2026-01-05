import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Srinagar",
    rating: 5,
    comment:
      "The milk quality is exceptional! Fresh delivery every morning and the taste reminds me of my childhood in the village.",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Lal Chowk",
    rating: 5,
    comment:
      "Reliable service and pure milk. My family has been using Koshur Dodh for months now. Highly recommended!",
    avatar: "RK",
  },
  {
    id: 3,
    name: "Fatima Ali",
    location: "Jawahar Nagar",
    rating: 5,
    comment:
      "Best dairy service in Srinagar. The milk is always fresh and the delivery is punctual. Great quality!",
    avatar: "FA",
  },
];

const TestimonialSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 2,
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          What Our Customers Say
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "text.secondary",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Don't just take our word for it - hear from our satisfied customers
          across Srinagar
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -10,
                    left: 20,
                    backgroundColor: "primary.main",
                    borderRadius: "50%",
                    p: 1,
                  }}
                >
                  <FormatQuoteIcon sx={{ color: "white", fontSize: 20 }} />
                </Box>

                <CardContent sx={{ pt: 4, flexGrow: 1 }}>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontStyle: "italic",
                      lineHeight: 1.6,
                      color: "text.secondary",
                    }}
                  >
                    "{testimonial.comment}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: "primary.main",
                        width: 48,
                        height: 48,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, color: "text.primary" }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
