import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { Image_URLs } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const user = useSelector((store) => store.user);
  return (
    <div className="mx-5 sm:absolute sm:left-0 sm:right-0 sm:z-10 xl:mx-40 bg-gradient-to-b from-black flex justify-between items-center">
      <img className="w-44" src={Image_URLs.APP_LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex cursor-pointer">
          <img
            className="rounded-lg"
            src={Image_URLs.USER_ICON}
            alt="usericon"
          />
          <p className="text-white ml-1" onClick={signOutUser}>
            (Sign Out)
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
