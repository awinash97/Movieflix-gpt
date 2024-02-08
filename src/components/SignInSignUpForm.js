import React, { useRef, useState } from "react";
import {
  checkEmailValidate,
  checkNameValidate,
  checkPasswordValidate,
} from "../utils/ValidateForm";

const SignInSignUpForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
  const [nameErrorMessage, setNameErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // we validate the form data in both signin and signup
    if (isSignInForm) {
      const emailErrorMessage = checkEmailValidate(email.current.value);
      setEmailErrorMessage(emailErrorMessage);
      const passwordErrorMessage = checkPasswordValidate(
        password.current.value
      );
      setPasswordErrorMessage(passwordErrorMessage);
    }
    if (!isSignInForm) {
      const nameErrorMessage = checkNameValidate(fullName.current.value);
      setNameErrorMessage(nameErrorMessage);
    }

    // after validate then Proceed signIN /signUp
  };

  return (
    <div className="absolute flex justify-center w-full h-full px-[25%] pt-20">
      <div className="bg-[rgba(0,0,0,0.7)] flex justify-center flex-col w-[60%] p-16 text-white">
        <header className="font-bold text-3xl mb-8">
          <h1>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        </header>
        <form
          className="flex flex-col gap-5 pb-28"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          {!isSignInForm && (
            <div>
              <input
                className="bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)] w-full h-14 placeholder:p-5"
                type="text"
                placeholder="Full Name"
                ref={fullName}
              />
              <p className="text-red-600 text-xs">{nameErrorMessage}</p>
            </div>
          )}
          <input
            className="bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)]  h-14 placeholder:p-5"
            type="text"
            placeholder="Email"
            ref={email}
          />
          <p className="text-red-600 text-xs">{emailErrorMessage}</p>
          <input
            className="bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)]  h-14 placeholder:p-5"
            type="password"
            placeholder="Password"
            ref={password}
          />
          <p className="text-red-600 text-xs">{passwordErrorMessage}</p>
          <button
            className="bg-red-600 rounded h-10"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <button>Forget password?</button>
        </form>
        <footer className="flex flex-col gap-5">
          <div className="flex flex-row gap-2">
            <input className="w-5 h-5 focus:accent-white" type="checkbox" />
            <p>Remember me</p>
          </div>
          <p onClick={toggleSigninForm} className="cursor-pointer">
            {isSignInForm
              ? "New to Movieflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SignInSignUpForm;
