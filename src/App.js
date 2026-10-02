import { useState } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;