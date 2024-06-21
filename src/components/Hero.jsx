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
          className="text-4xl md:text-4xl lg:text-6xl font-bold text-green-500 mb-6 mt-24 text-center"
        >
          Новое поколение И.И.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-white mb-10 text-center"
        >
          Начните использовать прямо сейчас
        </motion.p>
        <CustomButton text="Узнать больше" link="features" />
      </div>
    </div>
  );
};

export default Hero;
