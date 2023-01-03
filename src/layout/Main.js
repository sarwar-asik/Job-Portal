import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../sharedPage/Footer/Footer";
import Navbar from "../sharedPage/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
