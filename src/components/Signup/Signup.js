import React from "react";
import { Link } from "react-router-dom";
import "../../sharedPage/customCss/Custom.css";

const Signup = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left rounded-lg">
            <img
              src="https://img.freepik.com/free-photo/cheerful-smiling-guy-introduce-banner-pointing-hand-left_176420-18863.jpg?w=1060&t=st=1672770300~exp=1672770900~hmac=ce04bf341d6b1ec9f78f02645ae5ca3a2e8ff0d97e5fbc15871500e7706bfc65"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 sm:w-full lg:max-w-sm  shadow-2xl bg-[#dcdcdc]   rounded-sm">
            <div className="card-body">
              <div className="form-control">
                <h1 className="text-5xl fonts font-bold mb-7"> Sign Up </h1>
                <label className="label">
                  <span className="text-xl text-slate-500">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl text-slate-500">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Your password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="." className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <label className="label">
                  <a href="." className="">
                    Already Sign Up ?
                  </a>
                  <Link to="/login" className=" link link-hover">
                    Log In Please ..
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn1 py-3 text-xl">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
