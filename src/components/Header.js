import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const user = useSelector((store) => store.user);
  return (
    <div className="mx-5 sm:absolute sm:left-0 sm:right-0 sm:z-10 xl:mx-40 bg-gradient-to-b from-black flex justify-between items-center">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex cursor-pointer">
          <img
            className="rounded-lg"
            src="https://occ-0-6502-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"
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
