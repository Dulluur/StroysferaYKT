import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Comparison from "./components/Comparison";
import Torket from "./components/Torket";
import Shukaturka from "./components/Shukaturka";
// import Team from "./components/Team";
// import Header from "./components/Header";
import Steps from "./components/Steps"
import FAQ from "./components/FAQ";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Steps/>
      {/* <Team /> */}
      <Advantages />
      <Services />
      <Torket />
      <Shukaturka />
      <Comparison />
      <Gallery />
      <FAQ/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
