import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import React from "react";
import { pages } from "../Constants";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import XIcon from "@mui/icons-material/X";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "success.main",
        pt: { xs: 4, md: 6 },
        pb: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 3 }}>
          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={3}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "8px",
                height: "100%",
                p: { xs: 2, md: 3 },
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    pb: 1,
                    borderBottom: "2px solid",
                    borderColor: "primary.main",
                  }}
                >
                  Quick Links
                </Typography>
                {pages?.map(({ name, path }) => (
                  <Button
                    key={name}
                    component={Link}
                    to={path}
                    sx={{
                      display: "block",
                      textAlign: "left",
                      color: "text.primary",
                      fontFamily: "'Roboto Slab', serif",
                      fontWeight: 500,
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      pl: 0,
                      "&:hover": {
                        color: "primary.main",
                        backgroundColor: "transparent",
                        pl: 1,
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    {name}
                  </Button>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Address Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={3}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "8px",
                height: "100%",
                p: { xs: 2, md: 3 },
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    pb: 1,
                    borderBottom: "2px solid",
                    borderColor: "primary.main",
                  }}
                >
                  Address
                </Typography>
                <Box
                  sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}
                >
                  <LocationOnIcon color="primary" />
                  <Typography variant="body1" color="text.secondary">
                    Ninety Feet Road
                    <br />
                    Near Moomin Steels , <br />
                    Illahibagh, <br />
                    Srinagar, <br />
                    Jammu and Kashmir, 190020 <br />
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={3}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "8px",
                height: "100%",
                p: { xs: 2, md: 3 },
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    pb: 1,
                    borderBottom: "2px solid",
                    borderColor: "primary.main",
                  }}
                >
                  Contact
                </Typography>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <PhoneIcon color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    +91-6005141549{" "}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <EmailIcon color="primary" />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ wordBreak: "break-word" }}
                  >
                    <a
                      href="mailto:Koshurdodh@gmail.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Koshurdodh@gmail.com
                    </a>{" "}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Connect Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={3}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "8px",
                height: "100%",
                p: { xs: 2, md: 3 },
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    pb: 1,
                    borderBottom: "2px solid",
                    borderColor: "primary.main",
                  }}
                >
                  Connect
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <IconButton
                    component="a"
                    href="https://www.facebook.com/share/14vRrG2oyT/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#3b5998",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#2d4373",
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://www.instagram.com/koshurdodh?igsh=MTRkdHBsdWhvMHhx&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#E1306C",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#c13584",
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://x.com/koshurdosh?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "black", // X (Twitter) brand color
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#1DA1F2", // X (Twitter) blue
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <XIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://wa.me/6005141549"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#25D366",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#128C7E",
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 7 }}>
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              mt: { xs: 3, md: 4 },
              fontSize: { xs: "0.75rem", md: "0.875rem" },
            }}
          >
            © {new Date().getFullYear()} KOSHUR DOD'H All rights reserved.
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
