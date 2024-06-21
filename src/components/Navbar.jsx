import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex items-center flex-grow p-4 mt-3 bg-transparent">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex items-center"
      >
        <h1 className="text-[#00FF00] cursor-pointer hover:text-white text-xl  font-bold ml-6">
          Matrix App
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex flex-col md:flex-row lg:flex-row items-center text-2xl justify-center flex-grow"
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
          <Link to="features" smooth={true} duration={500} offset={-70}>
            About
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
          <Link to="testimonials" smooth={true} duration={500} offset={-70}>
            Tetsimonials
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
          <Link to="pricing" smooth={true} duration={500} offset={-70}>
            Pricing
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex items-center"
      >
        <a
          href="mailto:example@example.com?subject=Contact%20Request&body=Hello,%20I%20would%20like%20to%20contact%20you.%20Best,%20[Your%20Name]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-[#00FF00] mr-6 border-[#00FF00] border-2 bg-transparent h-10 px-4 rounded-md hover:text-white font-semibold">
            Contact
          </button>
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
