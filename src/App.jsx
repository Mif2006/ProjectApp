import {
  Features,
  Footer,
  Hero,
  Navbar,
  Pricing,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <div className="absolute pink__gradient top-[180px] right-40  w-[40%] h-[40%] rounded-full " />
      <div className="absolute blue__gradient top-[600px] w-[40%] h-[40%] rounded-full" />
      <div className="absolute green__gradient w-[40%]  h-[40%] rounded-full opacity-50" />
      <div className="absolute purple__gradient top-[880px] right-40  w-[40%] h-[40%] rounded-full opacity-20" />
      <div className="absolute navy__gradient top-[1200px] w-[40%] h-[40%] rounded-full opacity-50" />

      <div className="absolute pink__gradient top-[1400px] right-40 w-[40%] h-[40%] rounded-full " />
      <div className="absolute white__gradient top-[2800px] w-[50%] h-[50%] rounded-full opacity-50" />
      <div className="absolute blue__gradient top-[2300px] right-40 w-[40%] h-[40%] rounded-full opacity-50" />
      <div className="absolute navy__gradient top-[2450px] left-[25%] w-[40%] h-[40%] rounded-full opacity-50" />
      <div className="absolute blue__gradient md:hidden top-[2900px] left-[25%] w-[40%] h-[40%] rounded-full opacity-50" />
      <div className="absolute green__gradient top-[2800px] right-40 w-[40%] h-[40%] rounded-full opacity-30" />

      <div className="flex flex-col z-[20]">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
