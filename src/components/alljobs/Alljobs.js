import React, { useEffect, useState } from "react";
import '../../sharedPage/customCss/Custom.css';
import { RxReader, RxTimer, RxTrackNext } from "react-icons/rx";

const Alljobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then(data =>{
        setJobs(data)
      });
  }, []);

//   console.log("all jobs are ...",jobs);
  return <div className="my-24">
    <h1 className="fonts text-center text-[48px] font-bold font-serif">Our Jobs</h1>
    
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-3">
{
    jobs?.map(job=>{
        const {name, place, time,type, details, salary, source } = job;

        return <div className="py-10 px-5 shadow-xl jobs">
            <header>
                <h2 className=" text-3xl font-serif text-slate-600  hover:text-[#00ae87]  font-bold mb-5"> {name}</h2>

                 <p className="text-slate-500 flex items-center gap-1">
                    <RxReader/> <span> {type}</span>
                     </p>
                 <p className="text-slate-500 flex items-center gap-1">
                    <RxTimer/> <span> {time} minute ago</span>
                     </p>
            </header>
            <main>
                <p className="text-slate-600 mt-2">{details} And it is dolor sit, amet consectetur adipisicing elit. Veritatis, commodi.</p>
                <p className="mt-2 flex gap-2 text-slate-700">
                    <span className="shadow-xl py-3 hover:text-[#00ae87] px-2 bg-slate-200 ">React  </span>
                    <span className="shadow-xl  hover:text-[#00ae87] py-3 px-2 bg-slate-200 ">JavaScript </span>
                    <span className="shadow-xl  hover:text-[#00ae87] py-3 px-2 bg-slate-200 "> CSS  </span>
                    <span className="shadow-xl  hover:text-[#00ae87] py-3 px-2 bg-slate-200 ">MERN </span>
                </p>


            </main>
            <footer className="mt-10 flex justify-between">
                <p>
                    <span className="fonts text-4xl font-bold">${salary}</span>
                    <span className="text-slate-500">/Month</span>
                </p>
                <button className="bg-slate-200 apply fonts p-2 rounded-md text-slate-700 font-medium flex items-center gap-3">Quick Apply <RxTrackNext/> </button>

            </footer>
            
        </div>
    })
}

</div>

    
  </div>;
};

export default Alljobs;
