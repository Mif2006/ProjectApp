import { Route, Routes } from "react-router-dom";
import {
  Contact,
  Cta,
  FAQ,
  Features,
  Footer,
  Hero,
  Navbar,
  Pricing,
  Testimonials,
} from "./components";
import Form from "./components/Form";

import MatrixRainingCode from "./components/MatrixRainingCode";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <MatrixRainingCode className="absolute inset-0" />

      <div className="flex flex-col z-[20]">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Testimonials />
                <Cta />
                <FAQ />
                <Pricing />
                <Contact />
              </>
            }
          />
          <Route
            path="/Отзывы"
            element={
              <>
                <Form />
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
