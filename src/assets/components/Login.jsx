import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_small.jpg"
          alt="logo"
        />
      </div>
      <form
        className="absolute rounded-md bg-black bg-opacity-85 p-12 w-4/12 mt-20 mx-auto right-0 left-0 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full rounded-md bg-slate-800"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full rounded-md bg-slate-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full rounded-md bg-slate-800"
          />
          <button
            className="p-4 my-4 bg-red-600 text-white font-medium rounded-md w-full hover:bg-red-700"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <h3>
            {isSignInForm ? "New to Netflix? " : "Already registered? "}
            <button className="hover:underline" onClick={toggleSignInForm}>
              {isSignInForm ? "Sign up now." : " Sign In now."}
            </button>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Login;
