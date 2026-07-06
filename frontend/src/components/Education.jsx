import React from 'react';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      institution: "Sri Sivani College of Engineering",
      degree: "B.Tech in CSE (AI & ML)",
      period: "2022 - 2026",
      description: "Pursuing Bachelor of Technology in Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning. CGPA: 8.6. Active participant in hackathons and research presentations."
    },
    {
      institution: "TSR Junior College",
      degree: "Intermediate in MPC",
      period: "2020 - 2022",
      description: "Completed Intermediate education with focus on Mathematics, Physics, and Chemistry. CGPA: 6.8. Built strong analytical and problem-solving foundation."
    },
    {
      institution: "MHS Laxmi Nagar School",
      degree: "Secondary School Certificate (SSC)",
      period: " 2019 -  2020",
      description: "Completed secondary education in Srikakulam, AP. Achieved excellent academic performance with CGPA: 9.9. Built strong foundation in Mathematics and Science."
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        
        {/* Title Box */}
        <div className="education-header-box">
          <h2 className="education-section-title">EDUCATION</h2>
        </div>

        {/* Cards Grid */}
        <div className="education-grid">
          {educationList.map((edu, index) => (
            <div key={index} className="edu-card">
              <span className="edu-period">{edu.period}</span>
              <h3 className="edu-institution">{edu.institution}</h3>
              <h4 className="edu-degree">{edu.degree}</h4>
              <p className="edu-desc">{edu.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
