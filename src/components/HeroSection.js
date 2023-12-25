import React from "react";
import Navbar from './Navbar'
import { BG_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
    <div className='lg:h-[45.5em] mt  md:h-[40em]' style={{background: `linear-gradient(80deg,black,transparent), url(${BG_URL})`}}>
      <Navbar/>
      <div className=" container mx-auto flex justify-center items-center min-96 lg:mb-28 md:mb-28 mt-32 ">
        <div className=" ">
          <h1 className=" text-white text-center lg:text-5xl md:text-5xl text-3xl px-5  font-bold lg:px-20 mb-5">
            Enjoy big movies, hit series and more from ₹149.
          </h1>
          <p className="text-center text-white lg:text-2xl md:text-2xl text-xl mb-5">
            Watch anywhere. Cancel anytime.
          </p>
          <p
            className="text-center text-white lg:text-xl md:text-xl
                    text-lg mb-5"
          >
            Ready to watch? Enter your email to{" "}
            <br className=" lg:hidden md:hidden" /> create or restart your
            membership.
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-2">
            <input
              type="text"
              className=" bg-[#1d1e1e] text-white text-lg py-3 px-3 w-80 lg:w-96 rounded-md opacity-80 border border-gray-300 hover:ring-1 hover:ring-gray-50   outline-none mb-5 md:mb-0 lg:mb-0"
              placeholder="Email address"
            />
            <Link to={'/signin'}>
            <button className="bg-[#e50815] hover:bg-[#d80c1a] flex items-center gap-2 py-3 px-5 rounded-lg">
              <p className="text-white font-bold text-xl">Get Started</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </div>
      </div>

      <div className="hr_Line"></div>
    </>
  );
};

export default HeroSection;
