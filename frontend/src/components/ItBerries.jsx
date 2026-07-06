import React, { useState } from 'react';
import './ItBerries.css';

const ItBerries = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="itberries-section" id="it-berries">
      <div className="itberries-container">
        
        {/* Left Content Side */}
        <div className="itberries-content">
          <h2 className="itberries-title">IT BERRIES</h2>
          <p className="itberries-description">
            A passionate and results-driven Full Stack Developer with hands-on experience in developing modern web applications using React.js, Python, FastAPI, JavaScript, HTML, CSS, and SQL. Experienced in designing responsive user interfaces, building scalable backend services, and developing AI-powered solutions through industry projects, internships, and research initiatives. Strong understanding of software development principles with the ability to quickly learn and adapt to emerging technologies.
          </p>

          <div className={`itberries-expanded-content ${isExpanded ? 'expanded' : ''}`}>
            <p className="itberries-description">
              Currently working as an Associate Software Trainee at Flyhii Solutions, contributing to real-world full-stack web applications and enterprise websites by developing frontend interfaces, backend functionalities, and integrating modern technologies. Successfully delivered production-ready projects under strict deadlines, including a professional CEO portfolio website and AI-powered software solutions, demonstrating technical proficiency, ownership, and commitment to quality.
            </p>
            <p className="itberries-description">
              Possess practical experience in Artificial Intelligence, Machine Learning, and Data Analysis, with projects such as an AI-Based Code Translation System and Diamond Price Analysis Platform. Strengthened technical expertise through multiple internships in Artificial Intelligence, Deep Learning, and Software Development while gaining hands-on exposure to collaborative development environments, problem-solving methodologies, and industry-standard tools.
            </p>
            <p className="itberries-description">
              A proactive learner with excellent communication, leadership, and teamwork abilities, complemented by experience in hackathons, international research presentations, and cross-functional collaboration. Passionate about building innovative, scalable, and user-centric software solutions while continuously expanding technical knowledge and contributing effectively to organizational success. Seeking an opportunity to leverage technical expertise, creativity, and problem-solving skills as a Software Engineer or Full Stack Developer.
            </p>
          </div>

          <div className="itberries-action">
            <button className="itberries-btn" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'SHOW LESS' : 'READ MORE'}
            </button>
          </div>
        </div>

        {/* Right Watermark Side */}
        <div className="itberries-watermark-container">
          <svg className="itberries-watermark-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect 
              x="8" 
              y="8" 
              width="84" 
              height="84" 
              rx="18" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="6" 
            />
            {/* Letter I */}
            <path 
              d="M 38 28 L 38 72" 
              stroke="currentColor" 
              strokeWidth="9" 
              strokeLinecap="square" 
            />
            {/* Letter T */}
            <path 
              d="M 52 28 L 78 28" 
              stroke="currentColor" 
              strokeWidth="9" 
              strokeLinecap="square" 
            />
            <path 
              d="M 65 28 L 65 72" 
              stroke="currentColor" 
              strokeWidth="9" 
              strokeLinecap="square" 
            />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default ItBerries;
