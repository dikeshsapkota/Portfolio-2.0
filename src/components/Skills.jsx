import { useState } from "react";

const skillGroups = {
  webSkills: [
    ["fab fa-html5", "HTML", "Proficient"],
    ["fab fa-css3-alt", "CSS", "Proficient"],
    ["fab fa-js", "JavaScript", "Proficient"],
    ["fab fa-react", "React", "Beginner"],
    ["fab fa-node-js", "Node.js", "Beginner"],
    ["fas fa-server", "Express.js", "Beginner"],
    ["fas fa-plug", "REST API", "Familiar"],
  ],
  programmingSkills: [
    ["fas fa-code", "C", "Intermediate"],
    ["fas fa-laptop-code", "C++", "Intermediate"],
    ["fab fa-js", "JavaScript", "Proficient"],
    ["fas fa-project-diagram", "DSA", "Learning"],
    ["fas fa-cubes", "OOP", "Intermediate"],
    ["fas fa-brain", "Problem Solving", "Strong"],
  ],
  databaseSkills: [
    ["fas fa-database", "MySQL", "Familiar"],
    ["fas fa-table", "Database Design", "Learning"],
    ["fas fa-code", "SQL Queries", "Familiar"],
  ],
  toolsSkills: [
    ["fab fa-git-alt", "Git", "Proficient"],
    ["fab fa-github", "GitHub", "Proficient"],
    ["fas fa-code", "VS Code", "Daily Use"],
    ["fas fa-paper-plane", "Postman", "Familiar"],
    ["fas fa-database", "MySQL Workbench", "Familiar"],
  ],
};

const tabs = [
  ["webSkills", "🌐 Web Development"],
  ["programmingSkills", "💻 Programming"],
  ["databaseSkills", "🗄️ Databases"],
  ["toolsSkills", "🛠️ Tools"],
];

function Skills() {
  const [activeTab, setActiveTab] = useState("webSkills");

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skill-tabs">
        {tabs.map(([id, label]) => (
          <button
            key={id}
            className={`skill-tab ${activeTab === id ? "active" : ""}`}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="skills-content active">
        <div className="cards">
          {skillGroups[activeTab].map(([icon, title, level]) => (
            <div className="card" key={title}>
              <i className={icon}></i>
              <h3>{title}</h3>
              <p>{level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
