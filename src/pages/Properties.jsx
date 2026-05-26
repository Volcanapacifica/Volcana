import React from 'react';
import './Properties.css';

const Properties = () => {
  return (
    <div className="properties-page">
      <section className="page-header section bg-primary text-center">
        <div className="container">
          <h1 className="text-white fade-in-up">Exclusive Portfolio</h1>
          <p className="page-subtitle fade-in-up">Curated properties for the discerning international buyer.</p>
        </div>
      </section>

      <section className="section bg-background min-h-50vh flex items-center justify-center">
        <div className="container text-center">
          <div className="placeholder-message-box">
            <span className="accent-label">Coming Soon</span>
            <h2>Portfolio Curating in Progress</h2>
            <p>
              We are currently finalizing exclusive agreements with El Salvador's top developers 
              to bring you a highly curated selection of premium properties. 
            </p>
            <p>
              Our portfolio focuses on high-yield, low-maintenance properties perfect for lifestyle 
              investors and relocators.
            </p>
            <div className="mt-8">
              <p className="contact-prompt">Contact us today to receive personalized recommendations based on your unique goals.</p>
              <a href="/contact" className="btn btn-primary">Request Personalized Recommendations</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
