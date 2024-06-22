import { motion } from "framer-motion";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="bg-transparent" id="home">
      <div className="container mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-4xl max-w-[700px] lg:text-6xl font-bold text-green-200 mb-6 mt-24 text-center"
        >
          The Next Generation of Artificial Inteligence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl lg:text-2xl max-w-[600px] text-white mb-10 text-center"
        >
          An AI tool allowing you to perform a myriad of tasks, from automating
          your business to content creation
        </motion.p>
        <CustomButton text="Learn More" link="features" />
      </div>
    </div>
  );
};

export default Hero;
