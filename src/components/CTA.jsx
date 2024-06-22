const Cta = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center md:mb-[100px]">
      <div className="w-[80%] md:w-[60%] h-[70%] md:h-[400px] flex flex-col justify-center md:flex-row gap-12 md:gap-0 md:justify-between items-center p-6 px-6 md:px-20 bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md rounded-xl border border-green-400">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl text-green-200 font-semibold max-w-[400px]">
            What are you waiting for?
          </h1>
          <p className="text-[18px] text-gray-200 max-w-[400px]">
            Complete the onboarding and start using our AI tool in just 5
            minutes
          </p>
        </div>
        <button className="text-3xl  font-semibold text-white border hover:bg-green-700 p-6 hover:p-7 transition-all duration-500 ease-in-out border-green-400 rounded-[20px]">
          Start Now!
        </button>
      </div>
    </div>
  );
};

export default Cta;
