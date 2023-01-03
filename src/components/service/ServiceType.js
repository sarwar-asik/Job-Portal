import React from "react";
import job from "../../assets/job-removebg-preview.png";
import intern from "../../assets/intern-removebg-preview.png";
import "../../sharedPage/customCss/Custom.css";
const ServiceType = () => {
  const services = [
    {
      name: "Verified Jobs",
      img: job,
      details: " ",
    },
    {
      name: "Internship Opportunity",
      img: intern,
      details: "",
    },
    {
      name: "Easy Apply",
      img: "https://cdn-icons-png.flaticon.com/512/829/829755.png?w=740&t=st=1672773601~exp=1672774201~hmac=195e2c5f590810a9f8d53f354353be4f3d2811a658a4d44fcb07513686d0d6e9",
      details: "",
    },
  ];
  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {services?.map((service) => {
        return (
          <div className="shadow1 px-3 py-[70px] rounded-lg">
            <img
              src={service?.img}
              className="h-[120px] w-[90px] mb-3"
              alt=""
            />
            <h4 className="text-4xl font-serif fonts my-5">{service?.name} </h4>
            <p className="text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              quidem sed corrupti voluptate illo ullam consectetur eaque
              necessitatibus nostrum eligendi.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceType;
