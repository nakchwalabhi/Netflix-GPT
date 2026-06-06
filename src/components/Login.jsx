import React, { useRef, useState } from "react";
import Header from "./Header";
import { isFormValid } from "../utils/formValidation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {
 
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  };

  const validate = () => {
    const error = isFormValid(
      emailRef.current.value,
      passRef.current.value
    );

    setErrorMessage(error);

    if (error) return;

    const auth = getAuth();

    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then(() => {
         navigate("/browse")
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-credential":
              setErrorMessage("Invalid email or password");
              break;
            case "auth/user-not-found":
              setErrorMessage("User not found");
              break;
            default:
              setErrorMessage("Failed to sign in");
          }
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then(() => {
          navigate("/browse")
          
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              setErrorMessage("Email already exists");
              break;
            case "auth/weak-password":
              setErrorMessage(
                "Password should be at least 6 characters"
              );
              break;
            default:
              setErrorMessage("Failed to create account");
          }
        });
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg"
        alt="Netflix Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Login Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          bg-black/80
          text-white
          w-full
          max-w-md
          px-10
          py-12
          rounded-lg
          flex
          flex-col
          gap-4
          z-20
          shadow-2xl
        "
      >
        <h1 className="text-3xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="
              w-full
              px-4
              py-3
              rounded
              bg-neutral-800
              border
              border-neutral-700
              focus:outline-none
              focus:border-white
            "
          />
        )}

        <input
          ref={emailRef}
          type="email"
          placeholder="Email Address"
          className="
            w-full
            px-4
            py-3
            rounded
            bg-neutral-800
            border
            border-neutral-700
            focus:outline-none
            focus:border-white
          "
        />

        <input
          ref={passRef}
          type="password"
          placeholder="Password"
          className="
            w-full
            px-4
            py-3
            rounded
            bg-neutral-800
            border
            border-neutral-700
            focus:outline-none
            focus:border-white
          "
        />

        {errorMessage && (
          <p className="text-red-500 font-medium text-sm">
            {errorMessage}
          </p>
        )}

        <button
          type="button"
          onClick={validate}
          className="
            bg-[#e50914]
            py-3
            rounded
            font-semibold
            hover:bg-red-700
            transition-all
            duration-200
            cursor-pointer
            active:scale-95
          "
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="
            text-gray-400
            cursor-pointer
            hover:text-white
            transition
            mt-2
          "
          onClick={toggleForm}
        >
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in."}
        </p>
      </form>
    </div>
  );
};

export default Login;