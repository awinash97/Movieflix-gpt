import React from "react";

const LoginForm = () => {
  return (
    <div className="absolute flex justify-center w-full h-full px-[25%] pt-20">
        <div className="bg-[rgba(0,0,0,0.7)] flex justify-center flex-col w-[60%] p-16 text-white">
        <header className="font-bold text-3xl mb-8">
            <h1>Sign In</h1>
        </header>
        <form className="flex flex-col gap-5 pb-28" action="">
            <input className="bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)]  h-14 placeholder:p-5" type="text" placeholder="Email or phone number" />
            <input className="bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)]  h-14 placeholder:p-5" type="password" placeholder="Password" />
            <button className="bg-red-600 rounded h-10">Sign In</button>
            <button>Forget password?</button>
        </form>
        <footer className="flex flex-col gap-5">
            <div className="flex flex-row gap-2">
            <input className="w-5 h-5 focus:accent-white" type="checkbox"/>
            <p>Remember me</p>
            </div>
            <p>
            New to Netflix? <a href="/" className="font-bold">Sign up now</a>.
            </p>
        </footer>
        </div>
    </div>
  );
};

export default LoginForm;
