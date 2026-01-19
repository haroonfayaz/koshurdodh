import React from "react";
import { Link } from "react-router-dom";
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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color="success">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: 40,
                width: "auto",
                mr: 2,
                borderRadius: "10px",
                ml: 2,
                display: { xs: "none", md: "flex" },
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Matemasie",
                fontWeight: 500,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              KOSHUR DOD'H
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 3 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map(({ name, path }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={path}
                    textAlign="center"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    {name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: 40,
                width: "auto",
                mr: 2,
                borderRadius: "10px",
                ml: 0,
                display: { xs: "flex", md: "none" },
              }}
            />
            {/* Mobile Logo */}
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Matemasie",
                fontWeight: 500,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              KOSHUR DOD'H
            </Typography>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 30 }}
          >
            {pages.map(({ name, path }) => (
              <Button
                key={name}
                component={Link}
                to={path}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: "Matemasie",
                  "&:hover": {
                    color: "grey",
                    backgroundColor: "white",
                  },
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
