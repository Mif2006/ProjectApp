import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      title: "Что такое Automagify?",
      content:
        "Automagify предлагает передовые аналитические возможности и прогностические функции, разработанные специально для бизнеса, стремящегося использовать искусственный интеллект для улучшения процессов принятия решений.",
    },
    {
      title: "Как это работает?",
      content:
        "Платформа использует алгоритмы машинного обучения для анализа огромных объемов данных, предоставляя инсайты и прогнозы, которые могут направлять стратегические решения.",
    },
    {
      title: "Можете ли вы интегрироваться с нашей существующей системой?",
      content:
        "Да, мы предлагаем различные варианты интеграции, чтобы обеспечить бесперебойное подключение к вашей текущей IT-инфраструктуре.",
    },
    {
      title: "Какую поддержку вы предоставляете?",
      content:
        "Мы предоставляем комплексную поддержку через электронную почту, телефон и чат в режиме реального времени, чтобы помочь вам с любыми вопросами или проблемами.",
    },
    {
      title: "Есть ли период пробного использования?",
      content:
        "Конечно, мы предлагаем бесплатный период пробного использования, чтобы вы могли лично оценить наши услуги перед окончательным решением.",
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
      <div className="bg-transparent flex flex-col gap-3 justify-center bg-opacity-20 backdrop-filter backdrop-blur-md py-16 md:py-6 p-6 min-h-[400px] w-[820px] rounded-lg shadow-md border">
        <h2 className="text-4xl text-green-200 font-semibold mb-4">
          Часто задаваемые вопросы
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
