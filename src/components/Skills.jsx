import { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiPostman,
  SiCplusplus,
  SiC,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const skillGroups = {
  webSkills: [
    { icon: FaHtml5, title: "HTML", level: "Proficient", color: "#E34F26" },
    { icon: FaCss3Alt, title: "CSS", level: "Proficient", color: "#1572B6" },
    { icon: FaJs, title: "JavaScript", level: "Proficient", color: "#F7DF1E" },
    { icon: FaReact, title: "React", level: "Beginner", color: "#61DAFB" },
    { icon: FaNodeJs, title: "Node.js", level: "Beginner", color: "#339933" },
    { icon: SiExpress, title: "Express.js", level: "Beginner", color: "#888888" },
    { icon: VscCode, title: "REST API", level: "Familiar", color: "#007ACC" },
  ],

  programmingSkills: [
    { icon: SiC, title: "C", level: "Intermediate", color: "#00599C" },
    { icon: SiCplusplus, title: "C++", level: "Intermediate", color: "#00599C" },
    { icon: FaJs, title: "JavaScript", level: "Proficient", color: "#F7DF1E" },
    { icon: VscCode, title: "DSA", level: "Learning", color: "#7C3AED" },
    { icon: VscCode, title: "OOP", level: "Intermediate", color: "#3B82F6" },
    { icon: VscCode, title: "Problem Solving", level: "Strong", color: "#22C55E" },
  ],

  databaseSkills: [
    { icon: SiMysql, title: "MySQL", level: "Familiar", color: "#4479A1" },
    { icon: SiMysql, title: "Database Design", level: "Learning", color: "#4479A1" },
    { icon: SiMysql, title: "SQL Queries", level: "Familiar", color: "#4479A1" },
  ],

  toolsSkills: [
    { icon: FaGitAlt, title: "Git", level: "Proficient", color: "#F05032" },
    { icon: FaGithub, title: "GitHub", level: "Proficient", color: "var(--github-color)" },
    { icon: VscCode, title: "VS Code", level: "Daily Use", color: "#007ACC" },
    { icon: SiPostman, title: "Postman", level: "Familiar", color: "#FF6C37" },
    { icon: SiMysql, title: "MySQL Workbench", level: "Familiar", color: "#4479A1" },
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
          {skillGroups[activeTab].map((skill) => {
            const Icon = skill.icon;

            return (
              <div className="card" key={skill.title}>
                <Icon
                  className="skill-icon"
                  style={{ color: skill.color }}
                />

                <h3>{skill.title}</h3>

                <p>{skill.level}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;