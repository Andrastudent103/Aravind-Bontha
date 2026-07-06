import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Background Splitting */}
      <div className="hero-left-bg"></div>
      <div className="hero-right-bg"></div>

      {/* Main Container */}
      <div className="hero-container">
        
        {/* Navigation Menu */}
        <nav className="hero-nav">
          <a href="#about" className="nav-item nav-item-dark">About me</a>
          <a href="#education" className="nav-item nav-item-dark">Education</a>
          <a href="#certifications" className="nav-item nav-item-dark">Certifications</a>
          <a href="#skills" className="nav-item nav-item-light">Skills</a>
          <a href="#experience" className="nav-item nav-item-light">Experience</a>
          <a href="#projects" className="nav-item nav-item-light">Projects</a>
          <a href="#contact" className="nav-item-btn">CONTACT ME</a>
        </nav>

        {/* Left Side Content */}
        <div className="hero-left-content">
          {/* Stylized AP Logo */}
          <a href="#home" className="logo-container" aria-label="Home">
            <svg className="logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M 50 15 L 20 80 L 35 80 L 42 62 L 58 62 L 65 80 L 80 80 Z" 
                fill="none" 
                stroke="#000000" 
                strokeWidth="7" 
                strokeLinejoin="miter"
              />
              <path 
                d="M 42 62 C 45 52, 55 52, 58 62" 
                fill="none" 
                stroke="#000000" 
                strokeWidth="7"
              />
              <circle cx="50" cy="40" r="4" fill="#000000" />
            </svg>
          </a>

          <div className="intro-text-group">
            <span className="intro-greeting">Hi, I am</span>
            <h1 className="intro-name">Aravind Bontha</h1>
            <p className="intro-role">Full Stack Developer / UI Designer</p>
          </div>

          {/* Social Icons */}
          <div className="social-links">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aravindbontha563@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Email">
              <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            
            <a href="https://github.com/Andrastudent103" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="hero-right-content">

          {/* User Profile Image Overlay */}
          <div className="profile-image-container">
            <img 
              src="/assets/profile_transparent.png" 
              alt="Aravind Profile" 
              className="profile-image" 
            />

            {/* Decorative Vector Lines and Icons */}
            <svg className="bubble-decorations-svg" viewBox="0 0 500 670" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Path pointing to Head */}
              <path 
                d="M -10 210 Q 50 270 120 200" 
                stroke="#ffffff" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
                fill="none" 
              />
              {/* Paper Plane */}
              <g transform="translate(128, 199) rotate(-10) scale(0.9)">
                <path d="M 0,0 L -16,-4 L -8,-8 Z" fill="#ffffff" />
                <path d="M 0,0 L -12,-12 L -8,-8 Z" fill="#cccccc" />
              </g>

              {/* Path pointing to Book */}
              <path 
                d="M -30 400 Q 30 499 120 490" 
                stroke="#ffffff" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
                fill="none" 
              />
              {/* Mini Plane (Clean Vector Airplane Icon) */}
              <g transform="translate(120, 490) scale(0.8) rotate(135) translate(-12, -12)">
                <path 
                  d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" 
                  fill="#ffffff" 
                />
              </g>
            </svg>

            {/* Floating Speech Bubbles */}
            <div className="speech-bubble bubble-whats-going-on">
              WHATS GOING ON !!
            </div>

            <div className="speech-bubble bubble-full-stack">
              FULL STACK DEVELOPER
            </div>

            <div className="speech-bubble bubble-tech-stack">
              HTML , CSS , JAVA<br />
              REACT , NODE.JS<br />
              NEXT.JS , EXPRESS.JS
            </div>

            <div className="speech-bubble bubble-omg">
              OMG !! DADDY'S HOME 
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
