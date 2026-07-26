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
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
  SiCplusplus,
  SiC,
  SiGreensock,
  SiResend,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const skillGroups = {
  webSkills: [
    { icon: FaHtml5, title: "HTML", level: "Advanced", proficiency: 90, color: "#E34F26" },
    { icon: FaCss3Alt, title: "CSS", level: "Advanced", proficiency: 86, color: "#1572B6" },
    { icon: FaJs, title: "JavaScript", level: "Proficient", proficiency: 84, color: "#F7DF1E" },
    { icon: FaReact, title: "React", level: "Project Ready", proficiency: 82, color: "#61DAFB" },
    { icon: SiTypescript, title: "TypeScript", level: "Applied", proficiency: 62, color: "#3178C6" },
    { icon: SiTailwindcss, title: "Tailwind CSS", level: "Comfortable", proficiency: 76, color: "#06B6D4" },
    { icon: VscCode, title: "REST API", level: "Comfortable", proficiency: 75, color: "#007ACC" },
    { icon: VscCode, title: "OCR Integration", level: "Applied", proficiency: 68, color: "#22C55E" },
    { icon: FaNodeJs, title: "Node.js", level: "Growing", proficiency: 55, color: "#339933" },
    { icon: SiExpress, title: "Express.js", level: "Growing", proficiency: 50, color: "#888888" },
    { icon: SiSocketdotio, title: "Socket.IO", level: "Applied", proficiency: 58, color: "var(--text)" },
    { icon: VscCode, title: "Serverless APIs", level: "Applied", proficiency: 58, color: "#4F7CFF" },
    { icon: SiGreensock, title: "GSAP", level: "Applied", proficiency: 55, color: "#88CE02" },
  ],

  programmingSkills: [
    { icon: FaJs, title: "JavaScript", level: "Proficient", proficiency: 84, color: "#F7DF1E" },
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
    { icon: SiPostgresql, title: "PostgreSQL", level: "Applied", proficiency: 60, color: "#4169E1" },
    { icon: SiPrisma, title: "Prisma ORM", level: "Applied", proficiency: 58, color: "var(--text)" },
  ],

  toolsSkills: [
    { icon: VscCode, title: "VS Code", level: "Daily Use", proficiency: 90, color: "#007ACC" },
    { icon: FaGitAlt, title: "Git", level: "Proficient", proficiency: 78, color: "#F05032" },
    { icon: FaGithub, title: "GitHub", level: "Proficient", proficiency: 82, color: "var(--github-color)" },
    { icon: SiVite, title: "Vite", level: "Comfortable", proficiency: 72, color: "#646CFF" },
    { icon: SiVercel, title: "Vercel", level: "Applied", proficiency: 68, color: "var(--text)" },
    { icon: SiResend, title: "Resend", level: "Applied", proficiency: 55, color: "#6366F1" },
    { icon: VscCode, title: "AI Tools", level: "Project Assisted", proficiency: 72, color: "#8B5CF6" },
    { icon: VscCode, title: "Deployment", level: "Comfortable", proficiency: 78, color: "#4F7CFF" },
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

function getActiveSkillTab() {
  const tabFromHash = window.location.hash
    .replace(/^#\/?/, "")
    .split("/")[1];

  return skillGroups[tabFromHash] ? tabFromHash : "webSkills";
}

function Skills({ preview = false }) {
  const [activeTab, setActiveTab] = useState(getActiveSkillTab);
  const activeTabLabel = tabs.find(([id]) => id === activeTab)?.[1].replace(/^\S+\s/, "");

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
          {skillGroups[activeTab].slice(0, preview ? 4 : undefined).map((skill) => {
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

      {preview && (
        <div className="skills-more">
          <a href={`#/skills/${activeTab}`}>
            See more {activeTabLabel} skills →
          </a>
        </div>
      )}
    </section>
  );
}

export default Skills;
