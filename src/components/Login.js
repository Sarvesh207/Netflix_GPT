import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background_logo"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-md bg-gray-700"
        />
       
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-md bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">
          {isSignInForm
            ? "New to Netfilx Sign Up Now"
            : "Already registered? Sign In Now..."}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;