import {
  Features,
  Footer,
  Hero,
  Navbar,
  Pricing,
  Testimonials,
} from "./components";
import Cta from "./components/CTA";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import MatrixRainingCode from "./components/MatrixRainingCode";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <MatrixRainingCode className="absolute inset-0" />

      <div className="flex flex-col z-[20]">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Cta />
        <FAQ />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
