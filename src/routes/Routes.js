import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Signup from "../components/Signup/Signup";
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
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);

export default routes;
