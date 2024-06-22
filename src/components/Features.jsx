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
      title: "Automated Business Operations",
      description:
        "Streamline your operations with AI-driven automation, reducing manual tasks and increasing efficiency.",
    },
    {
      icon: RxCodesandboxLogo,
      title: "Content Creation Assistance",
      description:
        "Generate engaging content automatically, tailored to your brand voice and audience preferences.",
    },
    {
      icon: RxIdCard,
      title: "Personalized Customer Experiences",
      description:
        "Deliver personalized experiences to your customers based on their interactions and preferences.",
    },
    {
      icon: RxSketchLogo,
      title: "Strategic Insights",
      description:
        "Gain deep insights into your business performance and customer behavior to inform strategic decisions.",
    },
    {
      icon: RxEnvelopeClosed,
      title: "Efficient Communication",
      description:
        "Automate communication workflows to keep your team aligned and informed, improving collaboration.",
    },
    {
      icon: RxCamera,
      title: "Dynamic Content Management",
      description:
        "Manage and optimize your content library with AI-powered recommendations and organization tools.",
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
          Key Features
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
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <CustomButton text="Testimonials" link="testimonials" />
      </div>
    </section>
  );
};

export default Features;
