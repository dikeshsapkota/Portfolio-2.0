import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import SocialContact from "./components/SocialContact";
import Experience from "./components/Experience";

const pages = {
  about: About,
  experience: Experience,
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

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      "main section:not(.hero), .about-card, .info-card, .card, .project-card, .experience-card, .more-projects"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px",
      }
    );

    revealElements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 60}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  const Page = pages[currentPage];

  return (
    <>
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
            <SocialContact />
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
