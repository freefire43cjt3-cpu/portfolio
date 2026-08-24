import { useState } from "react";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skils from "./Components/Skills";
import Project from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      {!loading && <Navbar />}
      <Home />
      <About />
      <Skils />
      <Project />
      <Certificates />
      <Contact />
      <Footer />

    </>
  );
}

export default App;