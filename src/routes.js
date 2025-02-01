import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import { Navigate } from "react-router-dom";

const routes = [
  { path: "/", exact: true, element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "*", element: <Navigate to="/" /> },
];

export default routes;
