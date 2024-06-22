import React, { useState } from "react"; // Assuming you're going to create a separate CSS file

const FAQ = () => {
  const faqs = [
    {
      title: "What is your AI-based SaaS?",
      content:
        "Our AI-based SaaS offers advanced analytics and predictive capabilities tailored for businesses looking to leverage artificial intelligence to enhance decision-making processes.",
    },
    {
      title: "How does it work?",
      content:
        "The platform uses machine learning algorithms to analyze vast amounts of data, providing insights and predictions that can guide strategic decisions.",
    },
    {
      title: "Can you integrate with our existing systems?",
      content:
        "Yes, we offer various integration options to ensure seamless connectivity with your current IT infrastructure.",
    },
    {
      title: "What kind of support do you offer?",
      content:
        "We provide comprehensive support through email, phone, and live chat to assist you with any queries or issues.",
    },
    {
      title: "Is there a trial period available?",
      content:
        "Absolutely, we offer a free trial period so you can experience our services firsthand before committing.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="faq"
      className="w-screen pb-[200px] flex items-center justify-center bg-transparent"
    >
      <div className="bg-transparent flex flex-col gap-3 justify-center bg-opacity-20 backdrop-filter backdrop-blur-md py-16 md:py-6 p-6 min-h-[400px] w-[800px] rounded-lg shadow-md border">
        <h2 className="text-4xl text-green-200 font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-8 md:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-8 transition-all duration-600 ease-in-out transform ${
                activeIndex === index ? "scale-100" : "scale-95"
              }`}
              style={{
                maxHeight: `${activeIndex === index ? "500px" : "0px"}`,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-gray-200 py-2"
              >
                <span className="text-2xl font-medium">{faq.title}</span>
              </button>
              {activeIndex === index && (
                <p className="pl-4 pb-2 text-md text-gray-200">{faq.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
