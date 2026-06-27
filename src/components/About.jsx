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
            user-focused digital experiences.
          </p>

          {showMore && (
            <p>
              I have hands-on experience with HTML, CSS, JavaScript, Git,
              GitHub, REST APIs, and I am currently expanding my skills in
              React, Node.js, Express.js, and database systems. Beyond coding, I
              enjoy manga, chess, football, and building projects with coffee.
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
      text="Exploring creative stories and visual storytelling."
    />

    <HobbyItem
      image={dikesh}
      emoji="♟️"
      title="Chess"
      text="Strategic thinking and problem solving."
      link="https://www.chess.com/member/blunderkingdikesh"
    />

    <HobbyItem
      image={coding}
      emoji="💻"
      title="Coding & Coffee"
      text="Building projects while learning new technologies."
    />

    <HobbyItem
      image={messi}
      emoji="⚽"
      title="Football"
      text="Following major leagues and international tournaments."
    />
  </div>
</div>
          </div>
        </div>
      
    </section>
  );
}
function HobbyItem({ image, emoji, title, text, link }) {
  return (
    <div className="hobby-row">
      <img src={image} alt={title} />

      <div className="hobby-content">
        <h4>
          {emoji} {title}
        </h4>

        <p>
          {text}

          {link && (
            <>
              {" "}
              <a href={link} target="_blank" rel="noreferrer">
                Chess Profile →
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
export default About;