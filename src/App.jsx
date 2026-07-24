import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundBlobs from "./components/BackgroundBlob";
import BottomNav from "./components/BottomNav";

const pages = {
  about: About,
  skills: Skills,
  projects: Projects,
  contact: Contact,
};

function getCurrentPage() {
  const hash = window.location.hash.replace(/^#\/?/, "").split("/")[0];
  return pages[hash] ? hash : "home";
}

function App() {
  const [lightTheme, setLightTheme] = useState(
    localStorage.getItem("theme") === "light"
  );
  const [currentPage, setCurrentPage] = useState(getCurrentPage);

  useEffect(() => {
    document.body.classList.toggle("light-theme", lightTheme);
    localStorage.setItem("theme", lightTheme ? "light" : "dark");
  }, [lightTheme]);

  useEffect(() => {
    function handleRouteChange() {
      setCurrentPage(getCurrentPage());
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  const Page = pages[currentPage];

  return (
    <>
      <BackgroundBlobs />
      <Header
        lightTheme={lightTheme}
        setLightTheme={setLightTheme}
        currentPage={currentPage}
      />
      <BottomNav currentPage={currentPage} />
      <main className={currentPage === "home" ? "" : "standalone-page"}>
        {currentPage === "home" ? (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        ) : (
          <Page />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
