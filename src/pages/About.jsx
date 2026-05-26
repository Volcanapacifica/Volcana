import React from 'react';
import { Target, Globe, Shield } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header section bg-primary text-center">
        <div className="container">
          <h1 className="text-white fade-in-up">About Volcana Pacifica</h1>
          <p className="page-subtitle fade-in-up">Guiding international buyers to their ideal property in El Salvador.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="about-story-grid">
            <div className="story-content">
              <span className="accent-label">Our Story</span>
              <h2>Why El Salvador, Why Now?</h2>
              <p>
                El Salvador is undergoing one of the most remarkable transformations in modern history. 
                What was once overlooked is now becoming the premier destination in Central America for 
                those seeking freedom, safety, and a tropical lifestyle without the overwhelming tax 
                burdens of traditional markets.
              </p>
              <p>
                At Volcana Pacifica, we recognized early that international buyers needed more than just 
                a real estate agent—they needed a trusted advisory firm that understands cross-border 
                transactions, lifestyle relocation, and the unique benefits of El Salvador's zero 
                property tax environment.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="/images/hero-garden.jpg"
                alt="Tropical garden with city view — El Salvador"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="section-header text-center">
            <span className="accent-label">Core Values</span>
            <h2>How We Operate</h2>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <Shield size={40} className="value-icon" />
              <h3>Radical Transparency</h3>
              <p>We believe in full clarity. No hidden fees, no confusing legal jargon, and completely transparent property histories.</p>
            </div>
            
            <div className="value-card">
              <Target size={40} className="value-icon" />
              <h3>Local Expertise</h3>
              <p>Deep connections with vetted developers and legal professionals to ensure your transaction is secure and compliant.</p>
            </div>
            
            <div className="value-card">
              <Globe size={40} className="value-icon" />
              <h3>International Mindset</h3>
              <p>We understand the expectations of buyers from the US, Canada, and Europe. We speak your language—literally and professionally.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container text-center">
          <div className="cta-box">
            <h2>Ready to start your journey?</h2>
            <p>Connect with Kevin to discuss your goals in El Salvador.</p>
            <a href="/contact" className="btn btn-primary">Schedule a Free Consultation</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
