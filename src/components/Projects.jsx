const projects = [
  {
    title: "Quiz Application",
    description:
      "A quiz app using JavaScript, API, timer, score system and categories.",
    link: "https://dikeshsapkota.github.io/Quiz-app/",
  },
  {
    title: "My Travel Journal",
    description:
      "An interactive React travel journal featuring reusable components, dynamic rendering with props, image uploads, and the ability to add custom travel destinations.",
    link: "https://dikeshsapkota.github.io/MyTravelJournal/",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((project) => (
        <div className="project" key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
