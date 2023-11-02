import React, { useEffect, useState } from "react";
import "../../sharedPage/customCss/Custom.css";
import { RxReader, RxTimer, RxTrackNext } from "react-icons/rx";
import { HiLocationMarker } from "react-icons/hi";
import DetailModal from "./DetailModal";

const Alljobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const skills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "NodeJS " },
    { name: "Tailwind" },
  ];

  //   console.log("all jobs are ...",jobs);
  return (
    <div className="my-16">
      <h1 className="fonts text-center text-[48px] font-bold font-serif">
        Current Jobs
      </h1>
      <p className="text-center text-slate-500 mb-10 mt-3 text-xl font-semibold">
        Our jobs Portal dolor sit amet, consectetur adipisicing elit. Eligendi
        deleniti , <br /> denim excepturi architecto nisi commodi .{" "}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-5">
        {jobs?.map((job) => {
          const {
            name,
            place,
            img,
            time,
            company,
            type,
            details,
            salary,
            source,
          } = job;

          return (
            <div
              className="py-[15px] px-5 shadow-xl  jobs"
            
            >
              <header className="flex justify-between mb-12">
                <img
                  className="h-[100px] w-[140px]  rounded-[10px] shadow-xl"
                  src={img}
                  alt=""
                />
                <aside>
                  <h3 className="text-slate-500 text-3xl font-bold ">
                    {company}{" "}
                  </h3>
                  <p className="flex items-center font-mono text-slate-700 f gap-2 py-2">
                    <HiLocationMarker /> <span>{place}</span>
                  </p>
                </aside>
              </header>
              <main>
                <div className="">
                  <h2 className=" text-3xl font-serif text-slate-600  hover:text-[#00ae87]  font-bold mb-5">
                    {" "}
                    {name}
                  </h2>

                  <p className="text-slate-500 font-mono flex items-center gap-1">
                    <RxReader /> <span> {type}</span>
                  </p>
                  <p className="text-slate-500 font-mono flex items-center gap-1">
                    <RxTimer /> <span> {time} minute ago</span>
                  </p>
                </div>
                <p className="text-slate-600 text-sm font-medium my-2">
                  {details} And it is dolor sit, amet consectetur adipisicing
                  elit. Veritatis, commodi.
                </p>
                <p className="mt-5 flex gap-2 text-slate-700">
                  {skills?.map((skill) => (
                    <span className="shadow-lg py-3 text-sm font-normal hover:text-[#00ae87] px-2 bg-slate-200 ">
                      {skill?.name}{" "}
                    </span>
                  ))}
                </p>
              </main>
              <footer className="mt-10 flex justify-between">
                <p>
                  <span className="fonts text-4xl font-bold">${salary}</span>
                  <span className="text-slate-500">/Month</span>
                </p>

                <label
                  htmlFor={name}
                  className="bg-slate-200 apply cursor-pointer fonts p-2 rounded-md text-slate-700 font-medium flex items-center gap-3"
                >
                  Quick Apply <RxTrackNext />
                </label>
              </footer>
              <DetailModal job={job}  />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alljobs;
