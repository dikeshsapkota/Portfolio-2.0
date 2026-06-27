import { useEffect, useRef, useState } from "react";
import cv from "../assets/dikesh-sapkota.pdf";

const roles = [
  "Aspiring Full Stack Developer",
  "BSc CSIT Student",
  "Problem Solver",
  "Coffee Driven Coder ☕",
  "Chess Enthusiast ♟️",
  "Football Fan ⚽",
  "Funny Guy 😆",
];

function Hero() {
  const [text, setText] = useState("");
  const [dragStyle, setDragStyle] = useState({});
  const dragging = useRef(false);
  const start = useRef({ x: 0, y: 0 });
const nameRef = useRef(null);
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    function typeEffect() {
      const currentRole = roles[roleIndex];

      if (!deleting) {
        setText(currentRole.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentRole.length) {
          deleting = true;
          timer = setTimeout(typeEffect, 1500);
          return;
        }
      } else {
        setText(currentRole.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }

      timer = setTimeout(typeEffect, deleting ? 50 : 100);
    }

    typeEffect();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleMove(e) {
      if (!dragging.current) return;
      const moveX = e.clientX - start.current.x;
      const moveY = e.clientY - start.current.y;
      setDragStyle({
        transform: `translate(${moveX}px, ${moveY}px)`,
        transition: "none",
      });
    }

    function handleUp() {
      if (!dragging.current) return;
      dragging.current = false;
      setDragStyle({
        transform: "translate(0, 0)",
        transition: "transform 0.5s ease",
      });
    }

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleUp);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
    };
  }, []);

  function handleMouseDown(e) {
    dragging.current = true;
    start.current = { x: e.clientX, y: e.clientY };
  }
function handleMouseDown(e) {
  dragging.current = true;
  start.current = { x: e.clientX, y: e.clientY };
}

// ADD HERE ↓↓↓

function handleNameMove(e) {
  const name = nameRef.current;
  const rect = name.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = ((y / rect.height) - 0.5) * -12;
  const rotateY = ((x / rect.width) - 0.5) * 12;

  name.style.transform = `
    perspective(900px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.02)
  `;
}

function resetName() {
  nameRef.current.style.transform =
    "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
}
  return (
    <section id="home" className="hero">
      <div>
<h1
  className="tilt-name"
  ref={nameRef}
  onMouseMove={handleNameMove}
  onMouseLeave={resetName}
>
  <span className="first-name">DIKESH</span>
  <span className="last-name">SAPKOTA</span>
</h1>

        <h3
          id="draggableText"
          style={dragStyle}
          onMouseDown={handleMouseDown}
        >
          <span id="typing-text">{text}</span>
        </h3>

        <p>
          Building modern web applications with clean code, beautiful
          interfaces and scalable backend systems.
        </p>

        <div className="availability">
          <span className="pulse"></span>
          Currently Available for Work
        </div>

        <div className="social-links">
          <a href="https://github.com/dikeshsapkota" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/dikesh-sapkota-430831316/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/dikeshsapkotaa" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="hero-buttons">
          <a href={cv} download className="btn cv-btn">
            <i className="fas fa-download"></i> Download CV
          </a>
        </div>
      </div>
      <a href="#about" className="scroll-down">
  <span>Scroll Down</span>
  <div className="mouse">
    <div className="wheel"></div>
  </div>
</a>
    </section>
  );
}

export default Hero;
