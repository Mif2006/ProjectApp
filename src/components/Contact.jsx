import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen h-screen  flex items-center justify-center"
    >
      <div className="h-[80%] bg-transparent bg-opacity-20 backdrop:filter backdrop-blur-md flex items-center justify-center w-[80%]  relative bg-cover bg-center rounded-xl border border-gray-400">
        <div className="flex items-center bottom-16 w-[200px] md:w-[400px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
