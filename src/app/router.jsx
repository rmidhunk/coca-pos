import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/home-page";
import SignIn from "@/pages/signin-page";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export { AppRouter };
