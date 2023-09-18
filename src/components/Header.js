import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGAUGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLangauge } from "../utils/configSlice";

const Header = () => {
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangugeChange = (e) => {
    dispatch(changeLangauge(e.target.value));
  };

  return (
    <div className="absolute w-full px-8  bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2">
          { showGptSearch &&
            <select
              className="p-2 bg-gray-900 text-white "
              onChange={handleLangugeChange}
            >
              {SUPPORTED_LANGAUGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          }
          <button
            className="py-2 px-4 bg-purple-800 text-white mx-4 my-2 rounded-md "
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage":"GPT Search"}
            
          </button>
          <img className=" h-12 w-12" src={user?.photoURL} alt="userIcon" />

          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
