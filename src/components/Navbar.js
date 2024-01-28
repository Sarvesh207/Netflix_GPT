import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGAUGES } from "../utils/constant";
import { changeLangauge } from "../utils/configSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // user is signed In
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe from the listener when the component unmounts;

    return () => unsubscribe();
  }, []);



  const handleLangugeChange = (e) => {
    dispatch(changeLangauge(e.target.value));
  };

  return (
    <div className="relative">
    <div className="z-50 absolute mx-auto w-full  ">
      <div
        className="bg-transparent  flex  justify-between lg:justify-around md:justify-around items-center
     lg:py-5 md:py-5 py-5 px-5 lg:px-0 md:px-0 "
      >
        <div className="left">
          <div className="netflix_logo">
            <img className=" w-28 lg:w-44 md:w-44" src={LOGO} alt="logo" />
          </div>
        </div>
        <div className="right">
          <div className="flex items-center gap-3 ">
             { showGptSearch && <div
                className=" bg-[#111112] text-white mx-4 
                  lg:px-5 md:px-5 px-3 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80 "
              >
                <select name="" id="" className=" bg-transparent outline-none " onChange={handleLangugeChange}>
                  {
                    SUPPORTED_LANGAUGES.map(lang => <option className="bg-black" key={lang.identifier}>{lang.name}</option>)
                  }
                </select>
              </div>
            }

            {user && (
              <div className="flex gap-3">
                <Link to="/gptsearch">
                <button className="text-white bg-purple-800 hover:bg-purple-900 px-5 py-1.5 rounded-lg font-bold" >{showGptSearch ? "Home" : "GPT Search"}</button>
                </Link>
              </div>
            )}
            <Link to={"/signin"}>
                  <button
                    className=" bg-[#e50815] hover:bg-[#d80c1a] text-white px-5 py-1.5 rounded-lg font-bold"
                    onClick={handleSignOut}
                  >
                    {user ? "Sign Out" : "Sign IN"}
                  </button>
                </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
