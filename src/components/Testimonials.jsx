import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../firebase"; // Adjust the path according to your file structure
import { motion, useAnimation } from "framer-motion";
import CustomButton from "./CustomButton";
import { LuQuote } from "react-icons/lu";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const testimonialsArray = [];
      querySnapshot.forEach((doc) => {
        testimonialsArray.push({ ...doc.data(), id: doc.id });
      });
      setTestimonials(testimonialsArray);
    };

    fetchTestimonials();
  }, []);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const testimonialsSection = document.getElementById("testimonials");
      const { top } = testimonialsSection.getBoundingClientRect();
      const isVisible = top < window.innerHeight - 100;

      if (isVisible) {
        controls.start({ opacity: 1, scale: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <section
      className="bg-transparent bg-opacity-20 backdrop:filter backdrop-blur-md mx-10 py-16 md:mb-[100px]"
      id="testimonials"
    >
      <div className="mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
          Отзывы пользователей
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white px-12 flex items-center justify-center flex-col relative bg-opacity-10 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={controls}
              transition={{ duration: 0.8 }}
            >
              <LuQuote className="absolute -left-2 -top-2 h-[20px] w-[20px] text-green-400" />
              <div className="text-gray-300 text-[17px] mb-4">
                <p className="text-green-200 font-bold mb-2">
                  {" "}
                  {testimonial.name}{" "}
                </p>{" "}
                {testimonial.testimonial}
              </div>
              <span className="flex text-end"></span>{" "}
              <LuQuote className="absolute -right-2 -bottom-2 h-[20px] w-[20px] text-green-400" />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <CustomButton text="Начать сейчас" link="pricing" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
