import { createBrowserRouter, redirect } from "react-router-dom";
import HomeContainer from "./containers/Home";
import MainLayoutContainer from "./containers/MainLayout/index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutContainer />,
    children: [
      {
        path: "/",
        element: <HomeContainer />,
      },
    ],
  },
]);

export default routes;
