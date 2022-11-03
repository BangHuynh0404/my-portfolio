import { createBrowserRouter, redirect } from "react-router-dom";

import MainLayoutContainer from "./containers/MainLayout/index";
import HomePage from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutContainer />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default routes;
