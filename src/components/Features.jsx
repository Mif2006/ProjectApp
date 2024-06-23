import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomButton from "./CustomButton";
import {
  RxCamera,
  RxCodesandboxLogo,
  RxEnvelopeClosed,
  RxIdCard,
  RxRocket,
  RxSketchLogo,
} from "react-icons/rx";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const features = [
    {
      icon: RxRocket,
      title: "Автоматизация бизнес-процессов",
      description:
        "Упрощайте свои операции с помощью искусственного интеллекта, сокращая ручную работу и увеличивая эффективность.",
    },
    {
      icon: RxCodesandboxLogo,
      title: "Помощь в создании контента",
      description:
        "Автоматически генерируйте привлекательный контент, адаптированный под вашу брендовую позицию и предпочтения аудитории.",
    },
    {
      icon: RxIdCard,
      title: "Индивидуализированные услуги",
      description:
        "Создавайте уникальные предложения для каждого клиента, используя данные для понимания их потребностей и предпочтений.",
    },
    {
      icon: RxSketchLogo,
      title: "Прогнозирование и анализ",
      description:
        "Анализируйте большие объемы данных для получения ценных инсайтов, которые помогут вам принимать обоснованные решения и прогнозировать тренды.",
    },
    {
      icon: RxEnvelopeClosed,
      title: "Эффективное общение",
      description:
        "Автоматизируйте рабочие процессы коммуникации, чтобы поддерживать команду в согласованном состоянии и информированной, улучшая сотрудничество.",
    },
    {
      icon: RxCamera,
      title: "Динамическое управление контентом",
      description:
        "Управляйте и оптимизируйте свою библиотеку контента с помощью рекомендаций и инструментов организации на базе ИИ.",
    },
  ];

  return (
    <section
      className="bg-transparent px-10 py-10 mb-[50px] md:mb-[340px]"
      id="features"
      ref={ref}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-100 text-center mb-10">
          Ключевые функции
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <feature.icon className="w-16 h-16 text-green-500 mb-2" />
              <h3 className="text-xl font-bold text-center text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <CustomButton text="Отзывы" link="testimonials" />
      </div>
    </section>
  );
};

export default Features;
