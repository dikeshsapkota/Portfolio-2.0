import travelImg from "../assets/images/travel-journal.png";
import quizImg from "../assets/images/quiz-app.png";

function Projects() {
  const projects = [
    {
      title: "My Travel Journal",
      image: travelImg,
      description:
        "A React travel journal with reusable components, data-driven rendering, image upload, and add destination feature.",
      techStack: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "GitHub Pages",
      ],
      features: [
        "Responsive Design",
        "Reusable React Components",
        "Dynamic Data Rendering",
        "Destination Management",
        "Modern UI",
      ],
      live: "https://dikeshsapkota.github.io/MyTravelJournal/",
      github: "https://github.com/dikeshsapkota/MyTravelJournal",
    },
    {
      title: "Quiz App",
      image: quizImg,
      description:
        "A JavaScript quiz app using API, timer, score system, categories, and dynamic questions.",
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "REST API",
        "GitHub Pages",
      ],
      features: [
        "API Integration",
        "Countdown Timer",
        "Score Tracking",
        "Multiple Categories",
        "Responsive Interface",
      ],
      live: "https://dikeshsapkota.github.io/Quiz-app/",
      github: "https://github.com/dikeshsapkota/Quiz-app",
    },
  ];


  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.techStack.map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-features">
                <h4>Key Features</h4>

                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="more-projects">
        <h3>Want to explore more?</h3>

        <p>
          Visit my GitHub repositories to discover more projects, experiments,
          and coding practice that showcase my learning journey and development
          skills.
        </p>

        <a
          href="https://github.com/dikeshsapkota?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          Explore My GitHub Repositories →
        </a>
      </div>
    </section>
  );
}

export default Projects;