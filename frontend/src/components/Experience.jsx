import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Trainee / Full-Stack Developer",
      company: "Flyhii Solutions",
      period: "Jan 2026 - Present",
      description: "Developing full-stack web applications and building scalable frontend and backend services. Contributing to projects like Scienga Summits and its sub-websites.",
      details: [
        "Developed responsive user interfaces using React and modern web technologies.",
        "Built backend functionalities and integrated RESTful APIs.",
        "Collaborated with cross-functional teams on Scienga Summits platform."
      ]
    },
    {
      role: "Business Development Executive (BDE)",
      company: "Sprint - M Technologies",
      period: "Sep 2025 - Nov 2025",
      description: "Worked as a Business Development Executive, enhancing communication and client handling skills through real-time business interactions.",
      details: [
        "Enhanced communication, client handling, and teamwork skills.",
        "Worked closely with customers to support business growth and organizational goals.",
        "Developed strong adaptability, problem-solving, and professional relationship management skills."
      ]
    },
    {
      role: "BharatVersity Internship",
      company: "BITS Pilani Hyderabad Campus (Onsite)",
      period: "2024",
      description: "Developed technical, analytical, and communication skills through hands-on project experience and collaborative learning in a professional environment.",
      details: [
        "Gained hands-on project experience at BITS Pilani Hyderabad Campus.",
        "Enhanced analytical and communication skills through collaborative learning.",
        "Worked in a professional environment with industry mentors."
      ]
    },
    {
      role: "Deep Learning Internship",
      company: "Shamgar Software Solutions (Online)",
      period: "2024",
      description: "Worked on deep learning concepts and AI-based problem-solving techniques using modern tools and technologies.",
      details: [
        "Explored deep learning architectures and neural network models.",
        "Applied AI-based problem-solving techniques to real-world scenarios.",
        "Gained proficiency in modern ML/DL tools and frameworks."
      ]
    },
    {
      role: "Artificial Intelligence Internship",
      company: "PursuitFuture Technologies (Online)",
      period: "2023",
      description: "Built strong foundations in Artificial Intelligence by working on real-world AI concepts, model development, and practical problem-solving applications.",
      details: [
        "Worked on real-world AI concepts and model development.",
        "Built practical problem-solving applications using AI techniques.",
        "Gained foundational knowledge in machine learning and AI systems."
      ]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        
        {/* Title Box */}
        <div className="experience-header-box">
          <h2 className="experience-section-title">EXPERIENCE</h2>
        </div>

        {/* Rows Layout */}
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-row">
              
              {/* Left Column: Period & Company */}
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
                <span className="experience-company">{exp.company}</span>
              </div>

              {/* Right Column: Role & Details */}
              <div className="experience-details">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-desc">{exp.description}</p>
                <ul className="experience-bullets">
                  {exp.details.map((detail, dIndex) => (
                    <li key={dIndex}>{detail}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
