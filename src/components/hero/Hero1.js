import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/pngwing.com.png";
import "../../sharedPage/customCss/Custom.css";
import bottomImg from "../../assets/wave (1).svg";

const Hero1 = () => {
  return (
    <div className="mt-5 relative">
      <img className="topImg" src={bottomImg} alt="" />
      <div className="flex flex-col lg:flex-row md:flex-row gap-[10%] py-[75px]">
        <div className="" data-aos="fade-left">
          <img
            src={image}
            className=" w-[500px] h-[400px] rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div data-aos="fade-right" className="lg:mt-[100px]">
          <h1 className="text-5xl font-bold fonts mt-3">Find Your Best Job</h1>
          <p className="py-6">
            We are providing the best matching job with you. And ipsum <br />{" "}
            dolor sit amet consectetur adipisicing elit. Fugit, placeat?
          </p>
          <Link to="/signup">
            <button className="btn1 py-3 px-4">Get Job </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
