import ErrorPage from "./error-page";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/page/dashboard/Dashboard";
import AllFeatures from "./components/page/all-features/AllFeatures";
import BlogPage from "./components/page/blog/BlogPage";
import AboutPage from "./components/page/about/AboutPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/all-features",
      element: <AllFeatures />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/damaged-shipment",
      element: <Dashboard />,
    },
    {
      path: "/shipment-protection",
      element: <Dashboard />,
    },
    {
      path: "/ndr-management",
      element: <Dashboard />,
    },
    {
      path: "/hyper-local",
      element: <Dashboard />,
    },
    {
      path: "/amazon-self-ship",
      element: <Dashboard />,
    },
    {
      path: "/early-cod",
      element: <Dashboard />,
    },
    {
      path: "/pickup-locations",
      element: <Dashboard />,
    },
    {
      path: "/about-us",
      element: <AboutPage />,
    },
    {
      path: "/rate-calculators",
      element: <Dashboard />,
    },
    {
      path: "/prepaid-and-cod",
      element: <Dashboard />,
    },
    {
      path: "/support",
      element: <Dashboard />,
    },
    {
      path: "/carrier-integration",
      element: <Dashboard />,
    },
    {
      path: "/channel-integration",
      element: <Dashboard />,
    },
    {
      path: "/whatsapp-integration",
      element: <Dashboard />,
    },
    {
      path: "/refer-and-earn",
      element: <Dashboard />,
    },
    {
      path: "/blogs",
      element: <BlogPage />,
    },
    {
      path: "/career",
      element: <Dashboard />,
    },
    {
      path: "/contact-us",
      element: <Dashboard />,
    },
    {
      path: "/order-tracking",
      element: <Dashboard />,
    },
    {
      path: "/plans-and-pricing",
      element: <Dashboard />,
    },
    {
      path: "/api-integration",
      element: <Dashboard />,
    },
    {
      path: "/terms-of-services",
      element: <Dashboard />,
    },
    {
      path: "/privacy-policy",
      element: <Dashboard />,
    },
    {
      path: "/all-faq",
      element: <Dashboard />,
    },
    {
      path: "/all-glossary",
      element: <Dashboard />,
    },
    {
      path: "/guide",
      element: <Dashboard />,
    },
  ]);