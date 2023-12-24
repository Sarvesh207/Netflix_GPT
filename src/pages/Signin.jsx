import React, {useState, useRef} from "react";
import { BG_URL } from "../utils/constant";
import { checkValidData } from "../utils/validate";
const Signin = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {

    //Validate Form Data
   const message =  checkValidData(email.current.value, password.current.value, fullname.current.value);

  //  Set Error if Emaail or Password is Not Valid
   setErrorMessage(message);

   // Sign In and Sign Up

  }
  const fullname = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  return (
    <div
      className="lg:h-[100vh] md:h-[100vh]"
      style={{
        background: ` linear-gradient(80deg,black,transparent), url(${BG_URL})`,
      }}
    >
      <div className="main flex justify-center items-center  h-screen">
        <form onSubmit={(e) => (e.preventDefault())} className="sub_main bg-black bg-opacity-75 p-20 text-white rounded ">
          <h2 className="text-3xl font-bold mb-7">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && <div className="mb-7">
            <input
            ref={fullname}
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none"
            />
          </div>}
          <div className="mb-7">
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none"
            />
          </div>
         
          <div className="mb-7">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none"
            />
          </div>

          <div>
          <p>{errorMessage}</p>
          </div>

          <div className="mb-2">
            <button
              type="button"
              className="bg-[#e50815] w-full py-3 rounded-md"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
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
            <p>
              <span className="font-light text-gray-400 ">{isSignInForm ? "New to Netflix" : "Already registered?"}</span>{" "}
              <span className=" font-light text-gray-400hover:underline cursor-pointer" onClick={toggleSignInForm}>
                {
                  isSignInForm ? "  Sign Up Now.." :"Sign In Now"
                }
              
              </span>{" "}
            </p>
          </div>
          <div className="">
            <p className="text-gray-400">
              This page is protected by Google reCAPTCHA to <br />
              ensure you're not a bot.
              <span className="text-blue-600">Learn more.</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
