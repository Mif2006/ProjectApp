import { useState } from "react";
import app from "../../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

const Form = () => {
  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "testimonials"), {
        name,
        testimonial,
        timestamp: Date.now(),
      });
      // alert("Testimonial submitted successfully!");
      setName("");
      setTestimonial("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] flex justify-center flex-col gap-2"
      >
        <h2 className="text-5xl font-bold mb-5 text-green-200 text-center">
          Оставить Отзыв
        </h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Имя"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 text-md text-green-200 placeholder-green-400 bg-transparent border border-white rounded shadow"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Отзыв"
            name="testimonial"
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            className="w-full px-3 py-2 text-md text-green-200 placeholder-green-400 bg-transparent border border-white rounded shadow resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 mb-10 py-3 text-sm rounded-[12px] font-bold text-white uppercase transition-all duration-150 ease-linear bg-opacity-20 bg-green-500 hover:bg-green-700"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Form;
