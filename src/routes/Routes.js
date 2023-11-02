import { createBrowserRouter } from "react-router-dom";
import DetailsJob from "../components/alljobs/DetailsJob";
import Contacts from "../components/contacts/Contacts";
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
      {
        path: "/contacts",
        element: <Contacts/>,
      },
      
      {
        path: "/job/:details",
        element: <DetailsJob/>,
      },
    ],
  },
]);

export default routes;
