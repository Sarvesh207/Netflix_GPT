import React from "react";
import { BG_URL } from "../utils/constant";
const Signin = () => {
  return (
    <div
      className="lg:h-[100vh] md:h-[100vh]"
      style={{
        background: ` linear-gradient(80deg,black,transparent), url(${BG_URL})`,
      }}
    >
      <div className="main flex justify-center items-center  h-screen">
        <div className="sub_main bg-black bg-opacity-75 p-20 text-white rounded ">
          <h2 className="text-3xl font-bold mb-7">Sign In</h2>
          <div className="mb-7">
            <input
              type="text"
              placeholder="Email or Phone Nummber"
              className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none"
            />
          </div>
          <div className="mb-7">
            <input
              type="text"
              placeholder="Password"
              className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none"
            />
          </div>

          <div className="mb-2">
            <button
              type="button"
              className="bg-[#e50815] w-full py-3 rounded-md"
            >
              SignIn
            </button>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center">
              {/* left */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <label htmlFor="" className="text-gray-400 font-light text-sm">
                  Remember
                </label>
              </div>
              {/* right */}
              <p className="font-light text-sm text-gray-400">Need help?</p>
            </div>
          </div>
          <div className="mb-5">
            <p><span className="font-light text-gray-400 ">New to Netflix</span> <span className=" font-light text-gray-400hover:underline cursor-pointer"> Sign up Now.</span> </p>
          </div>
          <div className="">
            <p className="text-gray-400">
            This page is protected by Google reCAPTCHA to  <br /> 
ensure you're not a bot.<span className="text-blue-600">Learn more.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
