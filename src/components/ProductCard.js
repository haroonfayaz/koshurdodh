import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Chip,
  Box,
  Skeleton,
} from "@mui/material";

const ProductCard = ({ product, isLoading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (isLoading) {
    return (
      <Card sx={{ height: "100%" }}>
        <Skeleton variant="rectangular" height={240} />
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            height={240}
            sx={{ position: "absolute", top: 0, left: 0, right: 0 }}
          />
        )}
        <CardMedia
          component="img"
          height="240"
          image={product.image}
          alt={product.title}
          onLoad={() => setImageLoaded(true)}
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
            display: imageLoaded ? "block" : "none",
          }}
        />
        {product.status === "Coming Soon" && (
          <Chip
            label="Coming Soon"
            color="success"
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              fontWeight: "bold",
              fontSize: "0.75rem",
              background: "linear-gradient(45deg, #4caf50, #2e7d32)",
              color: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h5"
          sx={{
            mb: 1.5,
            fontWeight: 600,
            color: "text.primary",
            lineHeight: 1.3,
          }}
        >
          {product.title || product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
