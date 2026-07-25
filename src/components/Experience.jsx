function Experience() {
  const techStack = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Vite",
    "REST APIs",
    "GSAP",
    "Git",
    "Tailwind CSS",
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>

      <div className="experience-list">
        <article className="experience-card">
          <div className="experience-marker" aria-hidden="true" />

          <div className="experience-content">
            <span className="experience-date">February 2026 — Present</span>
            <h3>Frontend Engineer</h3>
            <p className="experience-company">Techsab Solutions Pvt. Ltd.</p>

            <div className="experience-tech-stack" aria-label="Technologies used">
              {techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
