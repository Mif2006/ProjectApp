import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Modal from "react-modal";

const Pricing = () => {
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
  });

  const pricingOptions = [
    {
      id: 1,
      title: "Basic",
      price: "$9.99",
      features: [
        "Unlimited access to core functionalities",
        "Priority customer support",
        "Integration with essential tools",
      ],
    },
    {
      id: 2,
      title: "Pro",
      price: "$19.99",
      features: [
        "All Basic features plus",
        "Advanced analytics and reporting",
        "Custom branding options",
        "Dedicated account manager",
        "Priority queue for customer support",
      ],
    },
    {
      id: 3,
      title: "Premium",
      price: "$29.99",
      features: [
        "All Pro features plus",
        "Custom integrations",
        "Access to exclusive webinars and workshops",
        "Monthly strategy session with a senior advisor",
        "Guaranteed response time within 1 hour",
        "Complimentary annual audit",
      ],
    },
  ];

  const [selectedPlan, setselectedPlan] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleChoosePlan = (plan) => {
    setselectedPlan(plan);
    setisModalOpen(true);
  };

  const handleCloseModal = () => {
    setselectedPlan(null);
    setisModalOpen(false);
  };
  return (
    <section className="bg-transparent px-10 py-16" id="pricing">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-green-200 text-center mb-10">
          Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option) => (
            <motion.div
              key={option.id}
              className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">
                  {option.title}
                </h3>
                <p className="text-green-500 text-2xl font-bold mb-6">
                  {option.price}
                </p>
                <ul className="text-gray-500 mb-6">
                  {option.features.map((feature) => (
                    <li key={feature} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <motion.button
                  className="bg-white bg-opacity-20 hover:bg-opacity-70 text-green-500 hover:text-green-600 font-semibold rounded-full py-2 px-6 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={controls}
                  transition={{ duration: 0.8 }}
                  onClick={() => handleChoosePlan(option)}
                >
                  Choose Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Plan Details"
        className="modal fixed inset-0 flex items-center justify-center"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedPlan && (
          <motion.div
            className="modal-content bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md w-1/3 h-1/2 rounded-lg p-6 max-w-xl flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-xl text-white font-bold mb-4">
                {selectedPlan.title}
              </h2>
              <p className="text-green-500 text-2xl font-bold mb-6">
                {selectedPlan.price}
              </p>
              <ul className="text-gray-200 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </ul>
            </div>

            <button
              onClick={handleCloseModal}
              className="bg-white bg-opacity-20 hover:bg-opacity-80 text-green-500 hover:text-green-600 font-semibold py-2 p-5 mx-6 rounded-full shadow-lg"
            >
              Close
            </button>
          </motion.div>
        )}
      </Modal>
    </section>
  );
};

export default Pricing;
