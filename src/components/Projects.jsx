import travelImg from "../assets/images/travel-journal.png";
import quizImg from "../assets/images/quiz-app.png";

function Projects() {
  const projects = [
    {
      title: "My Travel Journal",
      image: travelImg,
      description:
        "A React travel journal with reusable components, data-driven rendering, image upload, and add destination feature.",
      live: "#",
      github: "https://github.com/dikeshsapkota/MyTravelJournal",
    },
    {
      title: "Quiz App",
      image: quizImg,
      description:
        "A JavaScript quiz app using API, timer, score system, categories, and dynamic questions.",
      live: "https://dikeshsapkota.github.io/Quiz-app/",
      github: "#",
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

              <div className="project-links">
                <a href={project.live} target="_blank">Live Demo</a>
                <a href={project.github} target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;