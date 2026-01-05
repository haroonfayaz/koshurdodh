import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Container } from "@mui/material";
import { pages } from "../Constants";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "success.main",
        boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: "70px" }}>
          {/* Desktop Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              textDecoration: "none",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Koshur Dodh Logo"
              sx={{
                height: 45,
                width: "auto",
                mr: 2,
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: "Matemasie",
                fontWeight: 600,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
                fontSize: "1.4rem",
              }}
            >
              KOSHUR DOD'H
            </Typography>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  borderRadius: "12px",
                  mt: 1,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                },
              }}
            >
              {pages.map(({ name, path }) => (
                <MenuItem
                  key={name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(46, 125, 50, 0.08)",
                    },
                  }}
                >
                  <Typography
                    component={Link}
                    to={path}
                    textAlign="center"
                    sx={{
                      textDecoration: "none",
                      color: isActivePage(path) ? "primary.main" : "inherit",
                      fontWeight: isActivePage(path) ? 600 : 400,
                    }}
                  >
                    {name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Koshur Dodh Logo"
              sx={{
                height: 40,
                width: "auto",
                mr: 2,
                borderRadius: "10px",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontFamily: "Matemasie",
                fontWeight: 600,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              KOSHUR DOD'H
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              ml: 4,
            }}
          >
            {pages.map(({ name, path }) => (
              <Button
                key={name}
                component={Link}
                to={path}
                sx={{
                  my: 2,
                  mx: 1,
                  color: "white",
                  display: "block",
                  fontWeight: isActivePage(path) ? 700 : 500,
                  fontSize: "1rem",
                  fontFamily: "Matemasie",
                  px: 3,
                  py: 1,
                  borderRadius: "25px",
                  position: "relative",
                  backgroundColor: isActivePage(path)
                    ? "rgba(255, 255, 255, 0.15)"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  "&::after": isActivePage(path)
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "60%",
                        height: 2,
                        backgroundColor: "white",
                        borderRadius: 1,
                      }
                    : {},
                  transition: "all 0.3s ease",
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
