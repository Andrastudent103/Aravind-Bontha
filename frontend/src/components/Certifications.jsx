import React, { useState } from 'react';
import './Certifications.css';

const Certifications = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const certificationsList = [
    {
      title: "Python Programming",
      issuer: "Infosys",
      date: "Issued 2024",
      credentialId: "INFY-PY-2024",
      verifyUrl: "#"
    },
    {
      title: "AI for Beginners",
      issuer: "HP Life",
      date: "Issued 2024",
      credentialId: "HP-AI-2024",
      verifyUrl: "#"
    },
    {
      title: "MERN Full-Stack Development",
      issuer: "LinkedIn",
      date: "Issued 2024",
      credentialId: "LI-MERN-2024",
      verifyUrl: "#"
    },
    {
      title: "Software Engineering",
      issuer: "IBM",
      date: "Issued 2024",
      credentialId: "IBM-SE-2024",
      verifyUrl: "#"
    },
    {
      title: "Introduction to Python",
      issuer: "Infosys Springboard",
      date: "Issued Jul 2025",
      credentialId: "INFY-PY-2025",
      verifyUrl: "https://verify.onwingspan.com"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Issued Jul 20, 2025",
      credentialId: "CISCO-CS-2025",
      verifyUrl: "#"
    }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-container">

        {/* Title Box */}
        <div className="certifications-header-box">
          <h2 className="certifications-section-title">CERTIFICATIONS</h2>
        </div>

        {/* Certifications Wrapper with fade-out effect and toggle */}
        <div className={`certifications-wrapper ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <div className="certifications-grid-landscape">
            {certificationsList.map((cert, index) => (
              <div key={index} className="cert-card-landscape">
                {/* Gold borders */}
                <div className="cert-card-inner-border"></div>

                {/* Background Watermark Crest */}
                <div className="cert-card-watermark">
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="41" strokeWidth="0.8" />
                    <path d="M50 20 L58 35 L52 35 L52 65 L48 65 L48 35 L42 35 Z" fill="currentColor" opacity="0.08" />
                    <path d="M30 50 Q50 30 70 50 Q50 70 30 50 Z" strokeWidth="0.5" />
                  </svg>
                </div>

                {/* Certificate Header */}
                <div className="cert-card-header">
                  <span className="cert-card-subtitle">PROFESSIONAL CERTIFICATE</span>
                </div>

                {/* Certificate Main Content */}
                <div className="cert-card-body">
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <p className="cert-card-recipient-text">This is proudly presented to</p>
                  <h4 className="cert-card-recipient-name">Aravind Bontha</h4>
                  <p className="cert-card-congratulations">for successfully completing all program requirements.</p>
                </div>

                {/* Certificate Footer */}
                <div className="cert-card-footer">
                  <div className="cert-footer-left">
                    <div className="cert-footer-item">
                      <span className="cert-footer-label">ISSUER:</span>
                      <span className="cert-footer-value">{cert.issuer}</span>
                    </div>
                    <div className="cert-footer-item">
                      <span className="cert-footer-label">DATE:</span>
                      <span className="cert-footer-value">{cert.date}</span>
                    </div>
                    <div className="cert-footer-item">
                      <span className="cert-footer-label">CREDENTIAL ID:</span>
                      <span className="cert-footer-value monospace">{cert.credentialId}</span>
                    </div>
                  </div>

                  <div className="cert-footer-right">
                    {/* Wax Seal SVG */}
                    <div className="cert-wax-seal">
                      <svg viewBox="0 0 100 100" className="wax-seal-svg">
                        <path d="M50 15 C30 15 15 30 15 50 C15 70 30 85 50 85 C70 85 85 70 85 50 C85 30 70 15 50 15 Z" fill="#d4af37" opacity="0.8" />
                        <path d="M50 20 C33 20 20 33 20 50 C20 67 33 80 50 80 C67 80 80 67 80 50 C80 33 67 20 50 20 Z" fill="none" stroke="#b28d26" strokeWidth="1.5" />
                        {/* Ribbon details */}
                        <path d="M42 75 L30 105 L50 95 L70 105 L58 75 Z" fill="#aa7c11" opacity="0.75" />
                        {/* Crest inside seal */}
                        <polygon points="50,33 55,44 67,44 58,52 61,64 50,56 39,64 42,52 33,44 45,44" fill="#ffffff" />
                      </svg>
                    </div>

                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="cert-verify-btn-new">
                      <span>VERIFY</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div 
            className="certifications-fade-overlay" 
            onClick={() => setIsExpanded(true)}
            role="button"
            aria-label="Expand certifications"
          ></div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;

