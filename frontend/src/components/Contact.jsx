import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '64a3c25d-09d3-4a2f-bfdb-3c8fea4bd12c',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* Contact Section Header logo and decorative circle */}
      <div className="contact-header">
        <div className="contact-logo">ARAVIND BONTHA</div>
        
        {/* Hand-drawn outline circle with inner lines */}
        <div className="contact-hand-circle">
          <svg viewBox="0 0 60 60" className="hand-circle-svg">
            <path 
              d="M 28,6 C 41,5 53,14 54,27 C 55,40 44,53 30,54 C 16,55 6,43 5,30 C 4,17 15,7 28,6 Z M 29,4 C 11,6 3,17 4,32 C 5,47 18,56 33,54 C 48,52 57,40 56,25 C 55,10 42,3 29,4 Z" 
              fill="currentColor"
            />
            <line x1="22" y1="26" x2="38" y2="26" stroke="currentColor" strokeWidth="1.2" />
            <line x1="25" y1="33" x2="35" y2="33" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
      </div>

      <div className="contact-grid">
        {/* Left Column: Heading & Social Links */}
        <div className="contact-left-col">
          <div className="contact-title-group">
            <h2 className="contact-title">
              Want to <br />
              start <br />
              <span className="italic-text">a new.</span> <br />
              project?
            </h2>
            <p className="contact-subtitle">Or just say hello.</p>
          </div>

          <div className="contact-socials-grid">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-item">
              <svg className="contact-social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            
            <a href="https://github.com/Andrastudent103" target="_blank" rel="noopener noreferrer" className="contact-social-item">
              <svg className="contact-social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a href="https://www.instagram.com/andra_student_103/" target="_blank" rel="noopener noreferrer" className="contact-social-item">
              <svg className="contact-social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8c0 2 1.6 3.6 3.6 3.6h8.8c2 0 3.6-1.6 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
              <span>Instagram</span>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-social-item">
              <svg className="contact-social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.53v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.31 1.83c-.35 0-.69-.02-1.02-.06C3.44 20.29 6.18 21 9.09 21 18.09 21 23 13.52 23 7.03v-.64c.96-.69 1.79-1.56 2.46-2.54l-.04-.04z"/>
              </svg>
              <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Right Column: Links and Form */}
        <div className="contact-right-col">
          <div className="contact-email-box">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aravindbontha563@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-email-link"
            >
              aravindbontha563@gmail.com
            </a>
          </div>

          <div className="contact-form-box">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label className="form-label" htmlFor="contact-name">Your name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  className="form-input" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  disabled={status !== 'idle'}
                  required 
                />
              </div>

              <div className="contact-form-group">
                <label className="form-label" htmlFor="contact-email">Your email</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  className="form-input" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  disabled={status !== 'idle'}
                  required 
                />
              </div>

              <div className="contact-form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea 
                  id="contact-message" 
                  className="form-input form-textarea" 
                  rows="3"
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                  disabled={status !== 'idle'}
                  required 
                />
              </div>

              <div className="form-submit-wrapper">
                <button type="submit" className="form-submit-btn" disabled={status !== 'idle'}>
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent! ✓' : status === 'error' ? 'Failed! Try Again' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative hand-drawn squiggle line at the bottom right */}
      <div className="contact-squiggly-decor">
        <svg viewBox="0 0 150 50" className="squiggly-decor-svg">
          <path 
            d="M 5 25 C 20 10, 30 40, 45 25 C 60 10, 70 40, 85 25 C 100 10, 110 40, 125 25 C 135 15, 140 25, 145 20" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none" 
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Contact;
