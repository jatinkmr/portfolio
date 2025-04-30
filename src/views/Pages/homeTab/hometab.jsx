import React from 'react';
import './hometab.css';

const HomeTab = () => {
  return (
    <div className="home-container fade-in">
      <div className="intro-section">
        <div className="greeting">
          <span className="highlight">Hello, I'm</span>
          <span className="wave" role="img" aria-label="wave">👋</span>
        </div>

        <h1 className="name">
          <span className="name-highlight">Jatin Kumar</span>
        </h1>

        <h2 className="title">
          Full-Stack <span className="js-highlight">JavaScript</span> Developer
        </h2>

        <div className="description">
          <p>
            I craft <span className="highlight-text">scalable web applications</span> with <span className="exp-highlight">4+ years</span> of hands-on experience across the entire development stack.
          </p>

          <p className="intro-detail">
            Previously at <span className="company">FirstCry.com</span>, I build CRM dashboards and integrate frontend interfaces with REST APIs.
            My expertise spans <span className="tech">Node.js</span>, <span className="tech">Express</span>, <span className="tech">React</span>,
            and <span className="tech">Vue.js</span>, with cloud deployments on <span className="tech">AWS</span>.
          </p>

          <p className="intro-detail">
            When I'm not coding, you'll find me exploring new technologies,<span className="passion"> crafting delicious meals</span>,
            or perfecting my <span className="coffee-art">coffee brewing art </span><span className="coffee-icon" role="img" aria-label="coffee">☕</span>.
          </p>
        </div>

        <div className="cta-section">
          <a
            href={`${process.env.PUBLIC_URL}/resume/resume.pdf`}
            download="JatinKumarKambojResume.pdf"
            className="resume-btn"
          >
            <span className="btn-text">View My Resume</span>
            <span className="icon" role="img" aria-label="scroll">📜</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
