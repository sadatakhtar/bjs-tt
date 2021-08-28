import React from "react";
import { useHistory } from "react-router";
import LogoTitle from "./LogoTitle";
import { motion } from "framer-motion";

function Register() {
  const history = useHistory();
  const handleButton = () => {
    history.push("/");
  };
  return (
    <motion.div 
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 2, delay: 1}}
    className="flex flex-col justify-center items-center">
      <LogoTitle />
      <div
        className="flex flex-col justify-center   
            border-2 border-gray mt-5 w-96 p-5"
      >
        <h1 className="mt-5 mr-5 text-3xl mb-5">Register</h1>
        <form action="">
          <h5 className="space-y-2 text-xs font-bold mb-1">Full name</h5>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-100 w-full h-8 border-black  p-2"
            type="text"
            required
          />

          <h5 className="space-y-2 text-xs font-bold mb-1 mt-3">Email</h5>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-100 w-full h-8 border-black  p-2"
            type="email"
            required
          />

          <h5 className="space-y-2 text-xs font-bold mb-1 mt-3">Password</h5>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-100 w-full h-8 border-black  p-2"
            type="password"
            required
          />

          <h5 className="space-y-2 text-xs font-bold mb-1 mt-3">
            Confirm Password
          </h5>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-100 w-full h-8 border  p-2"
            type="password"
            required
          />

          <motion.button
            initial={{ x: 1200 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 2 }}
            onClick={handleButton}
            className=" mt-5 w-full bg-[#f0c14b] p-2 text-xs mt-5
            border-black hover:text-gray-900 hover:text-white"
          >
            Click to Create Account
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default Register;
