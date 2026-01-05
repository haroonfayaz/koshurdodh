import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  { path: "/", exact: true, element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
