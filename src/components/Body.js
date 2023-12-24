import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import LandingPage from "../pages/LandingPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "../pages/Signin";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/landing",
      element: <LandingPage />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
