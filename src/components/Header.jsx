import { useEffect, useState } from "react";

const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];

function Header({ lightTheme, setLightTheme, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSection, setVisibleSection] = useState(currentPage);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);

      if (currentPage !== "home") {
        setVisibleSection(currentPage);
        return;
      }

      const sectionAtHeader = [...document.querySelectorAll("main section")].find(
        (section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= 100 && bounds.bottom > 100;
        }
      );

      setVisibleSection(sectionAtHeader?.id || "home");
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav>
        <a href="#/" className="logo" aria-label="Go to home page">
  <span className="logo-d">D</span>
  <span className="logo-s">S</span>
</a>

        <ul id="navLinks" className={menuOpen ? "active" : ""}>
          {navItems.map(([page, label]) => (
            <li key={page}>
              <a
                href={page === "home" ? "#/" : `#/${page}`}
                className={visibleSection === page ? "active" : ""}
                aria-current={visibleSection === page ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="theme-toggle">
          <input
            type="checkbox"
            id="theme-switch"
            checked={lightTheme}
            onChange={(e) => setLightTheme(e.target.checked)}
          />
          <label htmlFor="theme-switch" className="slider">
            <span className="sun">🌙</span>
            <span className="moon">☀️</span>
          </label>
        </div>

        <button id="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Header;
