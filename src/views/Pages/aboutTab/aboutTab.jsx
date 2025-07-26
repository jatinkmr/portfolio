import React from 'react';
import './aboutTab.css';

const AboutTab = () => {
    return (
        <div className="about-container fade-in">
            <div className="about-card">
                <div className="header-section">
                    <h2 className="about-question">
                        Discovering <span className="name-highlight">Jatin Kumar</span>
                        <i className="fas fa-lightbulb pulse-icon" aria-hidden="true"></i>
                    </h2>

                    <div className="greeting-section">
                        <h1 className="wave-greeting">
                            Hello World! <span className="wave" role="img" aria-label="waving-hand">👋</span>
                        </h1>
                    </div>
                </div>

                <div className="about-content">
                    <p>
                        I'm a tech enthusiast based in the vibrant city of Delhi, India.
                        Passionate about creating seamless digital experiences as a <span className="highlight">Full Stack Developer</span>.
                    </p>

                    <p>
                        Known for my meticulous attention to detail, problem-solving mindset, and ability to work independently.
                        Beyond coding, I find joy in exploring the outdoors, creating pencil sketches, watching horror films, and diving into immersive video games.
                    </p>

                    <p className="interest-text">Currently exploring exciting new opportunities in the tech world.</p>

                    <p>
                        I'm constantly experimenting with emerging web technologies and implementing innovative solutions that push boundaries.
                    </p>

                    <div className="cta-section">
                        <p>
                            Interested in collaborating on something extraordinary?
                        </p>
                    </div>
                    <div className="connect-wrapper">
                        <p>
                            Let's connect! <a href="mailto:kumar.jatin873@gmail.com" className="email-link">
                                Reach out via email <i className="fa fa-paper-plane hover-icon" aria-hidden="true"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTab;
