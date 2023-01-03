import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Main from "../layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
