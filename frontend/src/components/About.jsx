import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Title / Header */}
        <div className="about-header-box">
          <h2 className="about-section-title">ABOUT ME</h2>
        </div>

        {/* Short description paragraph */}
        <p className="about-lead-text">
          I'm Aravind Bontha, I am a learner who learns new things everyday with my success & failures. <br />
          I observe, learn, adapt and execute!
        </p>

        {/* Explore Button */}
        <div className="about-explore-container">
          <button className="about-explore-btn">EXPLORE</button>
        </div>

        {/* Divider (—— \\\/// ——) */}
        <div className="about-divider">
          <div className="divider-line"></div>
          <div className="divider-pattern">\\\ ///</div>
          <div className="divider-line"></div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          
          {/* Design Service */}
          <div className="service-item design-service">
            <div className="service-content">
              <h3 className="service-title">
                <span className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    <path d="m15 5 3 3" />
                  </svg>
                </span>
                DESIGN
              </h3>
              <p className="service-description">
                I can design the website based on your needs and suggestions. I can also design the website from scratch and consult you during the job.
              </p>
            </div>
          </div>

          {/* Development Service */}
          <div className="service-item development-service">
            <div className="service-content">
              <h3 className="service-title">
                <span className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
                    <path d="m7 14-3 3" />
                    <path d="m10 11-3 3" />
                  </svg>
                </span>
                DEVELOPMENT
              </h3>
              <p className="service-description">
                I can build robust, responsive, and high-performance web applications using modern frontend and backend technologies, ensuring scalable and clean code.
              </p>
            </div>
          </div>

          {/* Maintenance Service */}
          <div className="service-item maintenance-service">
            <div className="service-content">
              <h3 className="service-title">
                <span className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </span>
                MAINTENANCE
              </h3>
              <p className="service-description">
                I can maintain, support, and optimize your web applications, ensuring they stay secure, fast, up-to-date, and completely bug-free.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Divider (—— \\\/// ——) */}
        <div className="about-divider" style={{ marginTop: '50px', marginBottom: '20px' }}>
          <div className="divider-line"></div>
          <div className="divider-pattern">\\\ ///</div>
          <div className="divider-line"></div>
        </div>

      </div>
    </section>
  );
};

export default About;
