import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink"; // Milk icon
import IcecreamIcon from "@mui/icons-material/Icecream"; // Cheese/butter icon
import AgricultureIcon from "@mui/icons-material/Agriculture"; // Farm visits icon
import ForestIcon from "@mui/icons-material/Forest";

const CustomBox = styled(Box)(({ theme, color }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "200px",
  height: "100px",
  padding: theme.spacing(3),
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: color,
  color: theme.palette.getContrastText(color),
  textAlign: "center",
}));

const ServicesCard = () => {
  return (
    <Box mt="4rem">
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
          },
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
          },
          fontWeight: "bold",
        }}
      >
        <Box
          component="span"
          sx={{
            backgroundColor: "#B9F3FC",
            borderRadius: "8px",
            display: "inline",
            padding: "0.4rem 0.8rem",
          }}
        >
          Dairy Services Available for You
        </Box>
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" p={2} gap={2}>
        <CustomBox color="#B9F3FC">
          <LocalDrinkIcon fontSize="large" sx={{ fontSize: 40 }} />
          <Typography variant="caption" sx={{ fontSize: 16 }}>
            Fresh Milk
          </Typography>
        </CustomBox>
        <CustomBox color="#B9F3FC">
          <IcecreamIcon fontSize="large" sx={{ fontSize: 40 }} />
          <Typography variant="caption" sx={{ fontSize: 16 }}>
            Butter & Cheese
          </Typography>
        </CustomBox>
        <CustomBox color="#B9F3FC">
          <ForestIcon fontSize="large" sx={{ fontSize: 40 }} />
          <Typography variant="caption" sx={{ fontSize: 16 }}>
            Organic Products
          </Typography>
        </CustomBox>
        <CustomBox color="#B9F3FC">
          <AgricultureIcon fontSize="large" sx={{ fontSize: 40 }} />
          <Typography variant="caption" sx={{ fontSize: 16 }}>
            Farm Visits
          </Typography>
        </CustomBox>
      </Box>
    </Box>
  );
};

export default ServicesCard;
