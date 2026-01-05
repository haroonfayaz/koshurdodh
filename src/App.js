// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import theme from "./styles/theme";
import Navbar from "./components/Navbar";
import routes from "./routes";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <Router>
            <Navbar />
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
