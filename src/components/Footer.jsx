import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container text-white mx-auto lg:max-w-6xl lg:py-20 md:py-20 py-10 px-5 ">
        <p className="text-gray-300 mb-5">
        
          Questions? Call <span className="underline"> 000-708-345-7304</span>
        </p>

        <div className="maintext-gray-300 flex justify-between flex-wrap mb-4 cursor-pointer ">
          <div className="1">
            <ul className="underline">
              <li className="mb-3">FAQ</li>
              <li className="mb-3">Investor Relations</li>
              <li className="mb-3">Privacy</li>
              <li className="mb-3">Speed Test</li>
            </ul>
          </div>
          <div className="2">
            <ul className="underline">
              <li className="mb-3">Help Centre</li>
              <li className="mb-3">Jobs</li>
              <li className="mb-3">Cookie Preferences</li>
              <li className="mb-3">Legal Notices</li>
            </ul>
          </div>
          <div className="3">
            <ul className="underline">
              <li className="mb-3">Account</li>
              <li className="mb-3">Ways to Watch</li>
              <li className="mb-3">Corporate Information</li>
              <li className="mb-3">Only on Netflix</li>
            </ul>
          </div>
          <div className="4">
            <ul className="underline">
              <li className="mb-3">Media Centre</li>
              <li className="mb-3">Terms of Use</li>
              <li className="mb-3">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='main flex items-center'>
                    <div className="selector  bg-[#111112] text-white px-5 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-75">
                        <select name="" id="" className='bg-transparent outline-none opacity-70'>

                            <option value="English" className='bg-[#111112] text-white'>English</option>
                            <option value="हिंदी" className='bg-[#111112] text-white '>हिंदी</option>

                        </select>
                        
                    </div>
                    <p className='text-gray-300 mx-5'>Netflix India</p>

                </div>
      </div>
    </div>
  );
};

export default Footer;
