import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RefreshIcon from "@mui/icons-material/Refresh";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
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
            <ErrorOutlineIcon
              sx={{
                fontSize: 80,
                color: "error.main",
                mb: 3,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              Oops! Something went wrong
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
              We're sorry for the inconvenience. Please try refreshing the page
              or contact us if the problem persists.
            </Typography>
            <Button
              variant="contained"
              startIcon={<RefreshIcon />}
              onClick={this.handleRefresh}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Refresh Page
            </Button>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
