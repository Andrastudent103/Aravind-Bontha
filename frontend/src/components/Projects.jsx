import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Full Stack Developer",
      subtitle: "Online Code Translation",
      period: "2025",
      description: "Developed an AI-powered code translation system that converts source code between programming languages to reduce manual effort and improve developer productivity.",
      bullets: [
        "Built with Python, FastAPI and AI to translate code across multiple languages.",
        "Addressed challenges of syntax errors & reduced development time.",
        "Deployed as a live web application for developers and students."
      ],
      image: "/assets/code_translation.png",
      alt: "Online Code Translation Tool",
      demoUrl: "https://judha-app.netlify.app"
    },
    {
      title: "Frontend Developer & Designer",
      subtitle: "Personal Portfolio for CEO",
      period: "2025",
      description: "Developed a professional portfolio website for the CEO of Mom Pharmacy within 24 hours as part of a high-priority task.",
      bullets: [
        "Built using HTML, React, Python, and AI-powered design tools.",
        "Created a premium, responsive portfolio with modern UI/UX design.",
        "Delivered the complete project within a 24-hour deadline."
      ],
      image: "/assets/ceo_portfolio.png",
      alt: "CEO Portfolio Website",
      demoUrl: "https://cockroachpreneur.netlify.app"
    },
    {
      title: "Data Analyst & Developer",
      subtitle: "Diamond Prize Analysis",
      period: "2024",
      description: "Developed a Diamond Price Analysis system to analyze pricing patterns and predict diamond values using data analysis techniques.",
      bullets: [
        "Built with Python, AIML & JavaScript for comprehensive data analysis.",
        "Implemented predictive pricing models using ML algorithms.",
        "Created interactive data visualizations for pricing pattern insights."
      ],
      image: "/assets/diamond_analysis.png",
      alt: "Diamond Prize Analysis Dashboard",
      demoUrl: "#"
    },
    {
      title: "Full Stack Developer",
      subtitle: "SDG13 Awareness Web App (Hackathon)",
      period: "Feb 2025",
      description: "Created a web solution aligned with UN SDG Goal 13 (Climate Action), integrating interactive UI/UX and database-driven content. Won 2nd place in a 24-hour innovation hackathon.",
      bullets: [
        "Built with HTML, CSS, JavaScript, PHP, and MySQL.",
        "Integrated interactive UI/UX with database-drien content.",
        "Won 2nd place in the 24-hour Thinking & Innovation Hackathon."
      ],
      image: "/assets/sdg13_webapp.png",
      alt: "SDG13 Awareness Web App",
      demoUrl: "#"
    },
    {
      title: "Frontend Developer",
      subtitle: "QR Code Scanner & Generator",
      period: "Jul 2025 - Aug 2025",
      description: "Built a web application that allows users to easily scan existing QR codes and generate new ones with 99% accuracy. Designed for fast, user-friendly, and reliable real-time use.",
      bullets: [
        "Scan existing QR codes and generate new ones with 99% accuracy.",
        "Enables quick sharing of text, links, or other data through QR codes.",
        "Designed to be fast, user-friendly, and reliable in real-time."
      ],
      image: "/assets/qr_code_scanner.png",
      alt: "QR Code Scanner & Generator",
      demoUrl: "#"
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Title Box */}
        <div className="projects-header-box">
          <h2 className="projects-section-title">PROJECTS</h2>
        </div>

        {/* Projects List */}
        <div className="projects-list">
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`project-item ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="project-content">
                <h2>{project.subtitle}</h2>
                <h3>{project.title}</h3>
                <span className="project-period">{project.period}</span>
                <p>{project.description}</p>
                <ul>
                  {project.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="proj-img"
                />
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-demo-btn"
                >
                  <span>LIVE DEMO</span>
                  <svg className="demo-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
