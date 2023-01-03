import React from "react";
import image from '../../assets/pngwing.com.png';
import '../../sharedPage/customCss/Custom.css'

const Hero1 = () => {
  return (
    <div className="mt-5">
    <div className="flex flex-col lg:flex-row gap-[10%] ">
      <img
        src={image}
        className=" w-[500px] h-[400px] rounded-lg shadow-2xl"
        alt=""
      />
      <div>
        <h1 className="text-5xl font-bold fonts">Find Your Best Job</h1>
        <p className="py-6">
            We are providing the best matching job with you. Lorem ipsum <br /> dolor sit amet consectetur adipisicing elit. Fugit, placeat?
          
        </p>
        <button className="btn1 py-3 px-2">Get Job </button>
      </div>
    </div>
  </div>
  );
};

export default Hero1;
