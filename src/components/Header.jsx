import { useEffect, useState } from "react";

function Header({ lightTheme, setLightTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav>
        <h2 className="logo">Dikesh</h2>

        <ul id="navLinks" className={menuOpen ? "active" : ""}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
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
