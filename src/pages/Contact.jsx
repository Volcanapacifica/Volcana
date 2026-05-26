import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-header section bg-primary text-center">
        <div className="container">
          <h1 className="text-white fade-in-up">Contact Us</h1>
          <p className="page-subtitle fade-in-up">Start your journey to El Salvador today.</p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="accent-label">Get in Touch</span>
              <h2>We're Here to Help</h2>
              <p className="mb-8">
                Whether you're ready to schedule a property tour or just have some preliminary 
                questions about the process of buying in El Salvador, we're ready to assist you.
              </p>
              
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Office</h4>
                    <p>San Salvador, El Salvador</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>contacto@volcanapacifica.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p><a href="https://wa.me/50376118318">+503 7611-8318</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124119.53037678174!2d-89.28481439284242!3d13.691478144215918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633068e1ab00a5%3A0xc34638d15c8c6913!2sSan%20Salvador%2C%20El%20Salvador!5e0!3m2!1sen!2sus!4v1709664795000!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Volcana Pacifica Location in San Salvador"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
