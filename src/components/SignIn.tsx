import React, { useState } from "react";
import LogoTitle from "./LogoTitle";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverResponse, setServerResponse] = useState("");

  const history = useHistory();
  const handleRegistration = () => {
    history.push("/register");
  };

  const credentials = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("https://bjs-sample-node.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //set condition here based on server response
        if (data) {
          if (data.success) {
            setServerResponse(data.success);
          } else {
            setServerResponse(data.message);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="flex flex-col justify-center items-center"
    >
      <LogoTitle />
      <div
        className="flex flex-col justify-center   
            border-2 border-gray mt-5 w-96 p-5"
      >
        <h1 className="mt-5 mr-5 text-3xl mb-5">Sign-In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h5 className="space-y-2 text-xs font-bold mb-1">E-mail</h5>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-100 w-full h-8 border-black  p-2"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5 className="space-y-2 text-xs font-bold mt-3 mb-1">Password</h5>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-100 w-full h-8"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <motion.button
            initial={{ x: -1200 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 4 }}
            className="w-full bg-[#f0c14b] p-2 text-xs mt-5 border-black hover:text-white"
          >
            Sign in
          </motion.button>
        </form>

        <p className="text-xs p-2 mt-3 tracking-tighter w-full">
          By signing-in you agree to BJS's Conditions of Use & Sale. Please see
          our Privacy Notice, our Cookies Notice and our Internet-Based Ads
          Notice{" "}
        </p>
        <motion.button
          initial={{ x: 1200 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 4 }}
          onClick={handleRegistration}
          className="w-full bg-[#f0c14b] p-2 text-xs mt-2 border-black hover:text-white"
        >
          Create Your BJS Account
        </motion.button>
      </div>
      <div>
        <p className='text-2xl m-5'>{serverResponse}</p>
      </div>
    </motion.div>
  );
}

export default SignIn;
