import React from 'react';
import { Link } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-page">
      <section className="page-header section bg-primary text-center">
        <div className="container">
          <h1 className="text-white fade-in-up">The El Salvador Buyer's Guide</h1>
          <p className="page-subtitle fade-in-up">Insights, updates, and expert advice for international buyers.</p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="articles-grid">
            {/* Article 1 */}
            <article className="article-card">
              <div className="article-image placeholder"></div>
              <div className="article-content">
                <span className="accent-label">Guide</span>
                <h3>How Foreigners Buy Property in El Salvador: The Complete Process</h3>
                <Link to="/resources/how-foreigners-buy-property-el-salvador" className="btn btn-primary" style={{marginTop: '1rem', display: 'inline-block'}}>Read Article →</Link>
              </div>
            </article>

            {/* Article 2 */}
            <article className="article-card">
              <div className="article-image placeholder"></div>
              <div className="article-content">
                <span className="accent-label">Tax Strategy</span>
                <h3>No Property Taxes: Why El Salvador Is Rewriting the Rules</h3>
                <Link to="/resources/no-property-taxes-el-salvador" className="btn btn-primary" style={{marginTop: '1rem', display: 'inline-block'}}>Read Article →</Link>
              </div>
            </article>

            {/* Article 3 */}
            <article className="article-card">
              <div className="article-image placeholder"></div>
              <div className="article-content">
                <span className="accent-label">Market Comparison</span>
                <h3>Why High-Net-Worth Individuals Are Quietly Buying in El Salvador in 2026</h3>
                <Link to="/resources/why-hnw-buyers-el-salvador-2026" className="btn btn-primary" style={{marginTop:'1rem', display:'inline-block'}}>Read Article →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-white text-center">
        <div className="container">
          <div className="newsletter-box">
            <h2>Get the Latest Insights</h2>
            <p>Join our private list for exclusive market updates and new property alerts.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
