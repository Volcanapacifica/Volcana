import React from 'react';
import { ShieldCheck, Landmark, FileText, PiggyBank, Briefcase, Map, Home as HomeIcon, Sun } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text fade-in-up">
            <h1>Your Life, Upgraded. Own Property in El Salvador.</h1>
            <p className="hero-subheadline">
              No property taxes. No HOA. Direct ownership. Full title. 
              The tropical lifestyle you've been looking for — without the complexity.
            </p>
            <a href="#contact" className="btn btn-primary">Schedule a Free Consultation</a>
          </div>
        </div>
      </section>

      {/* Why El Salvador Section */}
      <section className="section why-el-salvador bg-background">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="accent-label">The Advantage</span>
            <h2>Why El Salvador?</h2>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <Landmark size={32} className="benefit-icon" />
              <h3>No Property Taxes</h3>
              <p>El Salvador has zero recurring property taxes — ever. Keep what you own without annual burdens.</p>
            </div>
            
            <div className="benefit-card">
              <HomeIcon size={32} className="benefit-icon" />
              <h3>Direct Ownership</h3>
              <p>Full direct ownership with no complicated leases or bank trusts required for foreigners.</p>
            </div>
            
            <div className="benefit-card">
              <FileText size={32} className="benefit-icon" />
              <h3>Simple Process</h3>
              <p>Foreign buyers need only a valid passport and a simple $2 local tax ID to purchase.</p>
            </div>
            
            <div className="benefit-card">
              <PiggyBank size={32} className="benefit-icon" />
              <h3>Low Transfer Costs</h3>
              <p>Transfer tax is only 3% on amounts above $28,800, making entry highly affordable.</p>
            </div>
            
            <div className="benefit-card">
              <ShieldCheck size={32} className="benefit-icon" />
              <h3>Safe & Secure</h3>
              <p>Experience peace of mind in a country with one of the fastest-improving safety records in Latin America.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="section who-we-help bg-white">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="accent-label">Our Clients</span>
            <h2>Who We Help</h2>
          </div>
          
          <div className="profiles-grid">
            <div className="profile-card">
              <div className="profile-icon-wrapper">
                <Briefcase size={28} />
              </div>
              <h3>The Tax Optimizer</h3>
              <p>Business owners reducing their global tax burden through strategic real estate ownership and residency.</p>
            </div>
            
            <div className="profile-card">
              <div className="profile-icon-wrapper">
                <Map size={28} />
              </div>
              <h3>The Lifestyle Buyer</h3>
              <p>Professionals seeking a premium Pacific coast retreat with zero recurring property costs.</p>
            </div>
            
            <div className="profile-card">
              <div className="profile-icon-wrapper">
                <Sun size={28} />
              </div>
              <h3>The Free Family</h3>
              <p>Parents choosing homeschooling freedom, natural environments, and a tropical upbringing for their children.</p>
            </div>
            
            <div className="profile-card">
              <div className="profile-icon-wrapper">
                <HomeIcon size={28} />
              </div>
              <h3>The Graceful Retiree</h3>
              <p>Those seeking their final chapter in a warm, safe, affordable, and beautiful destination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section how-it-works bg-background">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="accent-label">The Process</span>
            <h2>How It Works</h2>
          </div>
          
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Tell us what you're looking for</h3>
              <p>Start with a free consultation call to discuss your lifestyle goals, budget, and ideal location.</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>We find your perfect match</h3>
              <p>Review a curated property selection from our trusted network of vetted developers.</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>We guide you home</h3>
              <p>Receive end-to-end support from your first visit to receiving the title securely in your name.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Kevin Section */}
      <section className="section about-kevin bg-white">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/images/kevin-ramos.jpg" alt="Kevin Ramos, founder of Volcana Pacifica" />
            </div>
            <div className="about-content">
              <span className="accent-label">Your Advisor</span>
              <h2>Kevin Ramos</h2>
              <p>
                Kevin Ramos is an El Salvador-based international real estate advisor specializing in 
                connecting global buyers with premium properties in one of Central America's most 
                exciting emerging markets. 
              </p>
              <p>
                With deep local knowledge and a bilingual approach, Kevin guides every client from 
                first inquiry to final title, ensuring a seamless and secure transition into your 
                new tropical lifestyle.
              </p>
              <p>
                Kevin also works professionally as an Anti-Money Laundering (AML) analyst in the 
                fintech sector. This background gives Volcana Pacifica's clients a rare advantage: 
                a clear, well-documented approach to the source and legitimacy of funds — including 
                purchases made in Bitcoin, which is legal tender in El Salvador. For international 
                buyers, that added layer of transparency and security is often what makes a 
                cross-border purchase feel safe.
              </p>
              <a href="/about" className="link-arrow">Read full story &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section bg-background">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="accent-label">Take the first step</span>
            <h2>Ready to explore El Salvador?</h2>
            <p className="contact-subtitle">
              Schedule a free 30-minute consultation. No commitment. No pressure. Just clarity.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
