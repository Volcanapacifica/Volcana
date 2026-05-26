import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img 
                src="/images/logo-verde.png"
                alt="Volcana Pacifica"
                style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p className="footer-tagline">Where paradise meets ownership.</p>
          </div>
          
          <div className="footer-links">
            <h4 className="accent-label">Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/properties">Properties</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="accent-label">Contact</h4>
            <p>San Salvador, El Salvador</p>
            <p><a href="mailto:contacto@volcanapacifica.com">contacto@volcanapacifica.com</a></p>
            <div className="social-icons" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <a href="https://www.linkedin.com/in/volcana-pacifica-285282406/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://www.instagram.com/volcanapacifica/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.youtube.com/@VolcanaPacifica" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
                <FaYoutube size={20} />
              </a>
              <a href="mailto:contacto@volcanapacifica.com" aria-label="Email" className="social-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Volcana Pacifica. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            {/* Local partner Spanish link as requested */}
            <a href="#" className="spanish-link">Para Socios Locales (ES)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
