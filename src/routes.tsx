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
      {
        path: "/personal-info",
        element: <h1>personal-info</h1>,
      },
      {
        path: "/tech",
        element: <h1>Tech</h1>,
      },
      {
        path: "/learning",
        element: <h1>learning</h1>,
      },
      {
        path: "/staff-man",
        element: (
          <iframe
            style={{ height: "90vh" }}
            src="https://staffmanage.netlify.app"
            title="W3Schools Free Online Web Tutorials"
          >
          </iframe>
        ),
      },
    ],
  },
]);

export default routes;
