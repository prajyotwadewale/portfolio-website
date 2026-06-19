import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a Computer Science Engineering student and AI & Data Science enthusiast with hands-on experience in building intelligent applications.
        </p>
        <p className="para-sub">
          I have hands-on experience in Generative AI, Data Analytics, Python, FastAPI, and Prompt Engineering through industry internships. Skilled in developing AI-powered workflows, building robust backend APIs, and analyzing datasets to support data-driven decision-making.
        </p>
        <p className="para-sub">
          Demonstrated leadership as NSS Secretary and GDG WIT Management Head, managing large-scale initiatives and cross-functional teams. I enjoy combining technical expertise with operational leadership to solve real-world problems.
        </p>
        <div className="about-details">
          <div>
            <strong>Location:</strong> Solapur, Maharashtra, India
          </div>
          <div>
            <strong>Email:</strong>{" "}
            <a href="mailto:wadewaleprajyot@gmail.com" data-cursor="disable">
              wadewaleprajyot@gmail.com
            </a>
          </div>
          <div>
            <strong>Phone:</strong>{" "}
            <a href="tel:+918847764268" data-cursor="disable">
              +91 8847764268
            </a>
          </div>
          <div>
            <strong>Languages:</strong> English, Hindi, Marathi
          </div>
        </div>
        <div className="about-achievements">
          <h4>Key Achievements</h4>
          <ul>
            <li>NSS Competition Gold Medalist</li>
            <li>Represented Ball Badminton at State Level and appeared for National Finals</li>
            <li>Participated in multiple District and Division Level sports competitions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
