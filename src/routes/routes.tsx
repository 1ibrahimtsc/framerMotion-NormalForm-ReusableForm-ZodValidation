import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/home";
import AdminLayout from "@/components/layouts/AdminLayout";
import MainLayout from "@/components/layouts/MainLayout";

import { createBrowserRouter } from "react-router-dom";
import ScrollAnimation from "@/pages/ScrollAnimation";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "scrollanimation",
        element: <ScrollAnimation />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
