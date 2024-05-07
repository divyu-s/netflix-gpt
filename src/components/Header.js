import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { Image_URLs, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGeminiSearchView } from "../store/geminiSlice";
import { changeLanguage } from "../store/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGeminiSearch = useSelector(
    (store) => store.gemini.showGeminiSearch
  );
  const langKey = useSelector((store) => store.config.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGeminiSearchClick = () => {
    dispatch(toggleGeminiSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="mx-5 sm:absolute sm:left-0 sm:right-0 sm:z-10 xl:mx-40 bg-gradient-to-b from-black flex justify-between items-center">
      <img className="w-44" src={Image_URLs.APP_LOGO} alt="Netflix Logo" />

      {user && (
        <div className="flex items-center gap-4">
          {showGeminiSearch && (
            <select
              className="py-2 px-4 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((item) => (
                <option key={item.identifier} value={item.identifier}>
                  {item.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 bg-purple-800 rounded-lg text-white cursor-pointer"
            onClick={handleGeminiSearchClick}
          >
            {showGeminiSearch ? "Home Page" : "Gemini Search"}
          </button>
          <img
            className="w-12 h-12"
            src={Image_URLs.USER_ICON}
            alt="usericon"
          />
          <p
            className="text-white font-bold cursor-pointer"
            onClick={signOutUser}
          >
            (Sign Out)
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
