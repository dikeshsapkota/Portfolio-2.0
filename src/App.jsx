import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundBlobs from "./components/BackgroundBlob";
function App() {
  const [lightTheme, setLightTheme] = useState(
    localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    document.body.classList.toggle("light-theme", lightTheme);
    localStorage.setItem("theme", lightTheme ? "light" : "dark");
  }, [lightTheme]);

  return (
    <>
     <BackgroundBlobs />
      <Header lightTheme={lightTheme} setLightTheme={setLightTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
