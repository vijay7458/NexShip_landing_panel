import ErrorPage from "./error-page";
import { createBrowserRouter } from "react-router-dom";
import BlogPage from "./components/page/blog/BlogPage";
import AboutPage from "./components/page/about/AboutPage";
import App from "./App";
import AllFeatures from "./components/page/Features/AllFeatures/AllFeatures";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/all-features",
    element: <AllFeatures />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/damaged-shipment",
    element: <App />,
  },
  {
    path: "/shipment-protection",
    element: <App />,
  },
  {
    path: "/ndr-management",
    element: <App />,
  },
  {
    path: "/hyper-local",
    element: <App />,
  },
  {
    path: "/amazon-self-ship",
    element: <App />,
  },
  {
    path: "/early-cod",
    element: <App />,
  },
  {
    path: "/pickup-locations",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <AboutPage />,
  },
  {
    path: "/rate-calculators",
    element: <App />,
  },
  {
    path: "/prepaid-and-cod",
    element: <App />,
  },
  {
    path: "/support",
    element: <App />,
  },
  {
    path: "/carrier-integration",
    element: <App />,
  },
  {
    path: "/channel-integration",
    element: <App />,
  },
  {
    path: "/whatsapp-integration",
    element: <App />,
  },
  {
    path: "/refer-and-earn",
    element: <App />,
  },
  {
    path: "/blogs",
    element: <BlogPage />,
  },
  {
    path: "/career",
    element: <App />,
  },
  {
    path: "/contact-us",
    element: <App />,
  },
  {
    path: "/order-tracking",
    element: <App />,
  },
  {
    path: "/plans-and-pricing",
    element: <App />,
  },
  {
    path: "/api-integration",
    element: <App />,
  },
  {
    path: "/terms-of-services",
    element: <App />,
  },
  {
    path: "/privacy-policy",
    element: <App />,
  },
  {
    path: "/all-faq",
    element: <App />,
  },
  {
    path: "/all-glossary",
    element: <App />,
  },
  {
    path: "/guide",
    element: <App />,
  },
]);