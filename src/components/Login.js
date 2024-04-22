import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkVaildData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmitForm = () => {
    const message = checkVaildData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) {
      return;
    }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="bg-black w-[100vw] h-[100vh] sm:relative sm:bg-none">
      <Header />
      <img
        className="hidden w-[100vw] h-[100vh] sm:block sm:blur-sm"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Background"
      />
      <form
        className="text-white py-14 px-14 sm:absolute sm:top-[20vh] sm:right-0 sm:left-0 sm:max-lg:w-5/12 lg:w-4/12 md: sm:mx-auto sm:bg-black sm:rounded-lg sm:bg-opacity-85"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="mb-8 text-3xl font-bold">Sign In</h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="mb-5 p-3 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          className="mb-5 p-3 w-full bg-gray-700 rounded-lg"
          placeholder="Enter your email"
          ref={email}
        />
        <input
          className="mb-5 p-3 w-full bg-gray-700 rounded-lg"
          placeholder="Enter your password"
          ref={password}
        />
        {errorMessage && (
          <p className="mb-5 text-red-500 font-bold">{errorMessage}</p>
        )}
        <button
          className="w-full p-3 mb-1 bg-red-600 rounded-lg"
          type="submit"
          onClick={handleSubmitForm}
        >
          Submit
        </button>
        <p>
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span className="cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
