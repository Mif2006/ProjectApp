import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center text-center flex-row py-2 mt-3 bg-transparent">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex items-center"
      >
        <RouterLink to="/">
          <h1 className="text-[#00FF00] cursor-pointer hover:text-white text-xl  font-bold ml-6">
            Automagify
          </h1>
        </RouterLink>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex flex-col gap-3 md:flex-row lg:flex-row items-center text-2xl justify-center flex-grow"
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300  hover:text-white mx-4 cursor-pointer"
        >
          <Link to="features" smooth={true} duration={500} offset={-70}>
            Функции
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
          <Link to="testimonials" smooth={true} duration={500} offset={-70}>
            Отзывы
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
          <Link to="faq" smooth={true} duration={500} offset={-70}>
            Часто задаваемые вопросы
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
          <Link to="pricing" smooth={true} duration={500} offset={-70}>
            Цены
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex items-center"
      >
        <RouterLink to="/Отзывы" smooth={true} duration={500} offset={-70}>
          <button className="text-[#00FF00] mr-6 border-[#00FF00] border-2 bg-transparent min-h-10 px-4 py-2 rounded-md hover:text-white font-semibold">
            Оставить Отзыв
          </button>
        </RouterLink>
      </motion.div>
    </nav>
  );
};

export default Navbar;
