import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import React from "react";
import Login from "./components/Login";
import Browse from "./pages/Browse";
import LandingPage from "./pages/LandingPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/Signin";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
