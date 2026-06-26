import manwha from "../assets/images/manwha.jpeg";
import dikesh from "../assets/images/dikesh.jpeg";
import coding from "../assets/images/coding.webp";
import messi from "../assets/images/messi.jpg";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="about-grid">
        <p className="about-description">
          I am <strong>Dikesh Sapkota</strong>, a Computer Science and Information
          Technology (CSIT) student currently pursuing my Bachelor's degree at
          Vedas College, Jawlakhel. I am passionate about software development,
          web technologies, and creating user-focused digital experiences.
          <br /><br />
          My interests lie in full-stack web development, problem solving, and
          continuously learning modern technologies. I have hands-on experience
          with HTML, CSS, JavaScript, Git, GitHub, REST APIs, and I am currently
          expanding my skills in React, Node.js, Express.js, and database systems.
          <br /><br />
          Beyond academics and coding, I enjoy reading comics and manga, playing
          chess, following football, and spending time building projects while
          enjoying a good cup of coffee.
        </p>

        <div>
          <h3>Education</h3>

          <div className="timeline-item">
            <h4>+2 Science / Management</h4>
            <p>Siddhartha English Boarding Secondary School</p>
            <span>Damak, Jhapa | 2021 - 2023</span>
          </div>

          <div className="timeline-item">
            <h4>BSc CSIT</h4>
            <p>Vedas College</p>
            <span>Jawlakhel, Lalitpur | 2023 - Present</span>
          </div>
        </div>

        <div className="hobbies-column">
          <h3>Interests & Hobbies</h3>

          <div className="hobbies-grid">
            <HobbyCard image={manwha} title="Reading Comics & Manga" text="Exploring creative stories and visual storytelling." />
            <HobbyCard image={dikesh} title="Chess" text="Strategic thinking and problem solving." link="https://www.chess.com/member/blunderkingdikesh" />
            <HobbyCard image={coding} title="Coding & Coffee" text="Building projects while learning new technologies." />
            <HobbyCard image={messi} title="Football" text="Following major leagues, tactics and international tournaments." />
          </div>
        </div>
      </div>
    </section>
  );
}

function HobbyCard({ image, title, text, link }) {
  return (
    <div className="mini-hobby-card">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
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
