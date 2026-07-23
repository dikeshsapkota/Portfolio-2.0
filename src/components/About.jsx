import { useState } from "react";
import manwha from "../assets/images/manwha.jpeg";
import dikesh from "../assets/images/dikesh.jpeg";
import coding from "../assets/images/coding.webp";
import messi from "../assets/images/messi.jpg";

const educationTimeline = [
  {
    level: "SEE",
    school: "Chulachuli English Boarding Secondary School",
    location: "Damak, Jhapa",
    date: "Completed",
    result: "GPA: 3.35",
  },
  {
    level: "+2 Science / Management",
    school: "Siddhartha English Boarding Secondary School",
    location: "Damak, Jhapa",
    date: "2021 - 2023",
    result: "GPA: 3.22",
  },
  {
    level: "BSc CSIT",
    school: "Vedas College",
    location: "Jawlakhel, Lalitpur",
    date: "2023 - Present",
    result: "Bachelor's Running",
  },
  {
    level: "Masters",
    school: "Loading...",
    location: "Future Plan",
    date: "Coming Soon",
    result: "Loading...",
  },
];
function About() {
  const [showMore, setShowMore] = useState(false);
  const [educationIndex, setEducationIndex] = useState(0);
  const currentEducation = educationTimeline[educationIndex];
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="about-layout">
        <div className="about-card">
          <div className="about-card-header">
            <h3>About Me</h3>
            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? "See Less" : "See More"}
            </button>
          </div>

          <p>
            I am <strong>Dikesh Sapkota</strong>, a CSIT student currently
            pursuing my Bachelor's degree at Vedas College, Jawlakhel. I am
            passionate about software development, web technologies, and creating
            user-focused digital experiences.I enjoy transforming ideas into responsive,
             user-friendly web applications while constantly improving my technical skills.
              My experience includes HTML, CSS, JavaScript, React, Git, GitHub, REST APIs, and MySQL,
             and I'm currently expanding my knowledge of full-stack development.
          </p>

          {showMore && (
            <p>
              Beyond coding, I'm a curious and detail-oriented person who enjoys
               learning by building real projects and refining them until they meet
                a high standard. I believe in writing clean, maintainable code and 
                approaching challenges with patience and persistence. Whether I'm 
                exploring new technologies, solving programming problems, or collaborating
                 with others, I value continuous growth, creativity, and professionalism.
                  My goal is to become a skilled full-stack developer who builds meaningful 
                  digital experiences and continues learning throughout my career.
            </p>
          )}
        </div>

        <div className="about-bottom-grid">
          <div className="info-card education-slider-card">
            <h3>Education Timeline</h3>

            <div className="education-display">
              <span className="edu-badge">{currentEducation.level}</span>
              <h4>{currentEducation.school}</h4>
              <p>{currentEducation.location}</p>
              <span>{currentEducation.date}</span>
              <strong>{currentEducation.result}</strong>
            </div>

            <input
              type="range"
              min="0"
              max={educationTimeline.length - 1}
              value={educationIndex}
              onChange={(e) => setEducationIndex(Number(e.target.value))}
              className="education-range"
            />

            <div className="education-steps">
              {educationTimeline.map((item, index) => (
                <button
                  key={item.level}
                  className={educationIndex === index ? "active" : ""}
                  onClick={() => setEducationIndex(index)}
                >
                  {item.level}
                </button>
              ))}
            </div>
          </div>



          <div className="info-card hobby-card">
            <h3>Interests & Hobbies</h3>

            <div className="hobby-list">
              <HobbyItem
                image={manwha}
                emoji="📚"
                title="Reading Comics & Manga"
              />

              <HobbyItem
                image={dikesh}
                emoji="♟️"
                title="Chess"
                link="https://www.chess.com/member/blunderkingdikesh"
              />

              <HobbyItem
                image={coding}
                emoji="💻"
                title="Coding & Coffee"
              />

              <HobbyItem
                image={messi}
                emoji="⚽"
                title="Football"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
function HobbyItem({ image, emoji, title, link }) {
  return (
    <div className="hobby-row">
      <div className="hobby-inner">
        <img src={image} alt={title} />

        <div className="hobby-content">
          <h4>
            {emoji} {title}
          </h4>
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              Chess Profile →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default About;