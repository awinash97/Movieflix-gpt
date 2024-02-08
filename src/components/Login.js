import Header from "./Header";
import SignInSignUpForm from "./SignInSignUpForm";

const Login = () => {
  return (
    <div>
      <div className="absolute max-w-[-webkit-fill-available] overflow-x-hidden bg-black">
        <img
          className="opacity-50 max-w-none"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <Header />
      <SignInSignUpForm />
    </div>
  );
};

export default Login;
