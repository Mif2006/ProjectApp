const ContactForm = () => {
  return (
    <form className="w-[400px]  flex justify-center flex-col gap-2">
      <h2 className="text-5xl font-bold mb-5 text-green-200 text-center">
        Связаться с нами
      </h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Ваше имя"
          name="name"
          className="w-full px-3 py-2 text-md text-green-200 placeholder-green-400 bg-transparent border border-white rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-md text-green-200 placeholder-green-400 bg-transparent border border-white  rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Your сообщение"
          name="message"
          className="w-full px-3 py-2 text-md text-green-200 placeholder-green-400 bg-transparent border border-white  rounded shadow"
        />
      </div>
      <button
        type="submit"
        className="px-6 mb-10 py-3 text-sm rounded-[12px] font-bold text-white uppercase transition-all duration-150 ease-linear bg-opacity-20 bg-green-500 hover:bg-green-700"
      >
        Отправить сообщение
      </button>
    </form>
  );
};

export default ContactForm;
