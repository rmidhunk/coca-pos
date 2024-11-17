import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/home-page";
import SignIn from "@/pages/signin-page";

const AppRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/*",
        children: [{ path: "*", element: <LandingPage /> }],
      },
      {
        path: "/signin/*",
        children: [{ path: "*", element: <SignIn /> }],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    },
  );

  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export { AppRouter };
