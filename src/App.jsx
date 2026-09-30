import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeBackground from "./components/ThreeBackground";
import "./App.css";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <ThreeBackground />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;