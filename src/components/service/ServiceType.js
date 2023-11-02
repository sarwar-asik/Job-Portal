import React from "react";
import job from "../../assets/job-removebg-preview.png";
import intern from "../../assets/intern-removebg-preview.png";
import "../../sharedPage/customCss/Custom.css";
const ServiceType = () => {
  const services = [
    {
      name: "Verified Jobs",
      img: "https://cdn-icons-png.flaticon.com/512/600/600297.png?w=740&t=st=1672927929~exp=1672928529~hmac=c889e92c7347973a168180d72faa45c5eba6dbed81426d452e18fb8b95855daa",
      details: " We Services Verified Jobs",
    },
    {
      name: "Paid Internship",
      img: "https://cdn-icons-png.flaticon.com/512/945/945603.png?w=740&t=st=1672928296~exp=1672928896~hmac=05caa09862c651dc33d85ab1ee1a38b55c502bad25b0413848d8e08ca9346636",
      details: " Internship with paid for fresher",
    },
    {
      name: "Easy Apply",
      img: "https://cdn-icons-png.flaticon.com/512/829/829755.png?w=740&t=st=1672773601~exp=1672774201~hmac=195e2c5f590810a9f8d53f354353be4f3d2811a658a4d44fcb07513686d0d6e9",
      details: "Apply to easy for candidate",
    },
  ];
  return (
    <div className="mt-10 ">
      <header>
        <h2 className="fonts text-center text-[48px] font-bold font-serif">
          {" "}
          Our Opportunities{" "}
        </h2>
        <p className="text-center text-slate-500 mb-10 mt-3 text-2xl font-semibold">
          {" "}
          We are giving our Client best than other site . All are trustful
          service for them .{" "}
        </p>
      </header>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services?.map((service) => {
          return (
            <div
              data-aos="flip-left"
            
              className="shadow1 shadow-2xl px-5 py-[30px] rounded-lg "
            >
              <img
                src={service?.img}
                className="h-[120px] w-[90px] mb-3"
                alt=""
              />
              <h4 className="text-4xl font-serif fonts my-5">
                {service?.name}{" "}
              </h4>
              <p className="text-slate-600">
                {service?.details} adipisicing elit. Veniam quidem sed corrupti
                voluptate illo ullam consectetur eaque necessitatibus nostrum
                eligendi.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceType;
