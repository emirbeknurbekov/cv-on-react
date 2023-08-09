import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Education from "./components/Education/Education.jsx";
import Portfolios from "./components/Portfolios/Portfolios.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Portfolios />
      <Footer />
    </>
  );
};

export default App;
