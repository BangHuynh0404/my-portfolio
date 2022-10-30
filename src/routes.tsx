import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayoutContainer from "./containers/MainLayout/index";
import PatientListPage from "./pages/PatientList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutContainer />,
    children: [
      {
        path: "patients",
        element: <PatientListPage />,
      },
    ],
  },
]);

export default routes;
