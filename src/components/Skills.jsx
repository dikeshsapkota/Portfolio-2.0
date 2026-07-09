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
    { icon: FaHtml5, title: "HTML", level: "Advanced", proficiency: 90, color: "#E34F26" },
    { icon: FaCss3Alt, title: "CSS", level: "Advanced", proficiency: 86, color: "#1572B6" },
    { icon: FaJs, title: "JavaScript", level: "Proficient", proficiency: 80, color: "#F7DF1E" },
    { icon: FaReact, title: "React", level: "Project Ready", proficiency: 74, color: "#61DAFB" },
    { icon: VscCode, title: "REST API", level: "Comfortable", proficiency: 68, color: "#007ACC" },
    { icon: VscCode, title: "OCR Integration", level: "Applied", proficiency: 62, color: "#22C55E" },
    { icon: FaNodeJs, title: "Node.js", level: "Learning", proficiency: 45, color: "#339933" },
    { icon: SiExpress, title: "Express.js", level: "Learning", proficiency: 42, color: "#888888" },
  ],

  programmingSkills: [
    { icon: FaJs, title: "JavaScript", level: "Proficient", proficiency: 80, color: "#F7DF1E" },
    { icon: SiC, title: "C", level: "Intermediate", proficiency: 70, color: "#00599C" },
    { icon: SiCplusplus, title: "C++", level: "Intermediate", proficiency: 68, color: "#00599C" },
    { icon: VscCode, title: "OOP", level: "Intermediate", proficiency: 66, color: "#3B82F6" },
    { icon: VscCode, title: "DSA", level: "Growing", proficiency: 58, color: "#7C3AED" },
    { icon: VscCode, title: "Problem Solving", level: "Strong", proficiency: 78, color: "#22C55E" },
  ],

  databaseSkills: [
    { icon: SiMysql, title: "MySQL", level: "Comfortable", proficiency: 64, color: "#4479A1" },
    { icon: SiMysql, title: "SQL Queries", level: "Comfortable", proficiency: 62, color: "#4479A1" },
    { icon: SiMysql, title: "Database Design", level: "Learning", proficiency: 54, color: "#4479A1" },
  ],

  toolsSkills: [
    { icon: VscCode, title: "VS Code", level: "Daily Use", proficiency: 90, color: "#007ACC" },
    { icon: FaGitAlt, title: "Git", level: "Proficient", proficiency: 78, color: "#F05032" },
    { icon: FaGithub, title: "GitHub", level: "Proficient", proficiency: 82, color: "var(--github-color)" },
    { icon: VscCode, title: "AI Tools", level: "Project Assisted", proficiency: 72, color: "#8B5CF6" },
    { icon: VscCode, title: "Deployment", level: "Comfortable", proficiency: 72, color: "#4F7CFF" },
    { icon: SiPostman, title: "Postman", level: "Comfortable", proficiency: 60, color: "#FF6C37" },
    { icon: SiMysql, title: "MySQL Workbench", level: "Familiar", proficiency: 56, color: "#4479A1" },
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

                <div className="skill-meter" aria-label={`${skill.title} proficiency`}>
                  <span
                    style={{
                      width: `${skill.proficiency}%`,
                      background: skill.color,
                    }}
                  />
                </div>

                <strong>{skill.proficiency}%</strong>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
