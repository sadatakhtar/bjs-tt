import React from "react";
import LogoTitle from "./LogoTitle";
import { useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const handleRegistration = () => {
    history.push("/register");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <LogoTitle />
      <div
        className="flex flex-col justify-center   
            border-2 border-gray mt-5 w-96 p-5"
      >
        <h1 className="mt-5 mr-5 text-3xl mb-5">Sign-In</h1>
        <form className="flex flex-col">
          <h5 className="space-y-2 text-xs font-bold mb-1">E-mail</h5>
          <input
            className="bg-blue-100 w-full h-8 border-black  p-2"
            type="email"
            required
          />
          <h5 className="space-y-2 text-xs font-bold mt-3 mb-1">Password</h5>
          <input className="bg-blue-100 w-full h-8" type="password" required />
          <button className="w-full bg-[#f0c14b] p-2 text-xs mt-5 border-black">
            Sign in
          </button>
        </form>

        <p className="text-xs p-2 mt-3 tracking-tighter w-full">
          By signing-in you agree to BJS's Conditions of Use & Sale. Please see
          our Privacy Notice, our Cookies Notice and our Internet-Based Ads
          Notice{" "}
        </p>
        <button
          onClick={handleRegistration}
          className="w-full bg-[#f0c14b] p-2 text-xs mt-2 border-black hover:text-gray-900"
        >
          Create Your BJS Account
        </button>
      </div>
    </div>
  );
}

export default SignIn;
