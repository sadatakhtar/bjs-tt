import React from "react";
import { motion } from 'framer-motion'

function LogoTitle() {
  return (
    <motion.div
    initial={{ y: -250}}
  animate={{ y: 0 }}
  transition={{ duration: 2 }}

    // animate={{
    //     scale: [1,2,2,1,1],
    //     rotate: [0,0,270,270,0],
    //     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    // }} 
    className="flex flex-col justify-center items-center mt-5">
      <h1 className="text-5xl text-[#f0a80f] font-extrabold">BJS</h1>
      <p className="text-xs text-[#695e50] tracking-tight">TWO-MAN HOME</p>
      <p className="text-[#695e50] font-bold leading-4">DELIVERY</p>
    </motion.div>
  );
}

export default LogoTitle;
