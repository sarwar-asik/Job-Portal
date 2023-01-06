import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../sharedPage/Footer/Footer";
import Navbar from "../sharedPage/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
     <div className="container mx-auto">
     <Outlet />
     </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
};

export default Main;
