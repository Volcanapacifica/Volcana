import React from 'react';
import { Mail } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-grid">
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="John Doe" required />
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" required />
          </div>
          
          <div className="input-group">
            <label htmlFor="country">Country of Residence</label>
            <input type="text" id="country" placeholder="United States" required />
          </div>
          
          <div className="input-group">
            <label htmlFor="whatsapp">WhatsApp Number (Optional)</label>
            <input type="tel" id="whatsapp" placeholder="+1 (555) 000-0000" />
          </div>
        </div>
        
        <div className="input-group">
          <label htmlFor="message">How can we help you?</label>
          <textarea id="message" rows="4" placeholder="Tell us about your goals in El Salvador..."></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary submit-btn">
          Request My Free Consultation
        </button>
      </form>
      
      <div className="contact-socials">
        <p className="accent-label">Or reach us directly</p>
        <div className="social-icons">
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
  );
};

export default ContactForm;
