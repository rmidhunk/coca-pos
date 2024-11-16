import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/home-page";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <div>login</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export { AppRouter };
