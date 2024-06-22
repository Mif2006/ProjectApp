/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const CustomButton = ({ text, link }) => {
  return (
    <Link to={link} smooth={true} duration={500} className="cursor-pointer">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-white bg-opacity-20 hover:bg-opacity-80 text-green-500 hover:text-green-600 font-semibold py-2 p-5 mx-6 rounded-full shadow-lg"
      >
        {text}
      </motion.button>
    </Link>
  );
};

export default CustomButton;
