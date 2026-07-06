import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        
        {/* Title Box */}
        <div className="skills-header-box">
          <h2 className="skills-section-title">SKILLS</h2>
        </div>

        {/* Skills Wrapper with expand/collapse */}
        <div className={`skills-wrapper ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {/* Section: USING NOW */}
          <div className="skills-group">
            <h3 className="skills-group-title">USING NOW:</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-html5-plain colored"></i>
                </div>
                <span className="skill-name">HTML5</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-css3-plain colored"></i>
                </div>
                <span className="skill-name">CSS3</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-sass-original colored"></i>
                </div>
                <span className="skill-name">SASS</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-javascript-plain colored"></i>
                </div>
                <span className="skill-name">JAVASCRIPT</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-react-original colored"></i>
                </div>
                <span className="skill-name">REACT</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-bootstrap-plain colored"></i>
                </div>
                <span className="skill-name">BOOTSTRAP</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-git-plain colored"></i>
                </div>
                <span className="skill-name">GIT</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-figma-plain colored"></i>
                </div>
                <span className="skill-name">FIGMA</span>
              </div>
            </div>
          </div>

          {/* Section: LEARNING */}
          <div className="skills-group">
            <h3 className="skills-group-title">LEARNING:</h3>
            <div className="skills-grid skills-grid-learning">
              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-nodejs-plain colored"></i>
                </div>
                <span className="skill-name">NODEJS</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-mysql-plain colored"></i>
                </div>
                <span className="skill-name">MySQL</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-mongodb-plain colored"></i>
                </div>
                <span className="skill-name">MONGODB</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-typescript-plain colored"></i>
                </div>
                <span className="skill-name">TYPESCRIPT</span>
              </div>
            </div>
          </div>

          {/* Section: OTHER SKILLS */}
          <div className="skills-group">
            <h3 className="skills-group-title">OTHER SKILLS:</h3>
            <div className="skills-grid skills-grid-other">
              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-python-plain colored"></i>
                </div>
                <span className="skill-name">PYTHON</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-java-plain colored"></i>
                </div>
                <span className="skill-name">JAVA</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-cplusplus-plain colored"></i>
                </div>
                <span className="skill-name">C++</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <i className="devicon-c-plain colored"></i>
                </div>
                <span className="skill-name">C</span>
              </div>
            </div>
          </div>

          <div 
            className="skills-fade-overlay" 
            onClick={() => setIsExpanded(true)}
            role="button"
            aria-label="Expand skills"
          ></div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
