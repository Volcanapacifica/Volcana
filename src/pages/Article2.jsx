import React from 'react';
import { Link } from 'react-router-dom';
import './Article2.css';

const Article2 = () => {
  return (
    <div className="article-page">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="article-hero">
        <div className="article-hero-overlay" />
        <img
          src="/images/article2-hero.jpg"
          alt="Centro Historico de Noche"
          className="article-hero-img"
        />
        <div className="article-hero-content container">
          <span className="accent-label">Tax Strategy · Analysis</span>
          <h1>No Property Taxes: Why El Salvador Is Rewriting the Rules</h1>
          <div className="article-meta">
            <span>By Kevin Ramos</span>
            <span className="meta-dot">·</span>
            <span>Volcana Pacifica</span>
            <span className="meta-dot">·</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────── */}
      <article className="article-body container">

        <div className="article-lead">
          In a world where property taxes continue to rise, eating into investment yields and increasing the long-term cost of ownership, El Salvador offers a radical alternative: zero annual property taxes.
        </div>

        <h2>A system designed to attract investment</h2>
        <p>
          Unlike the United States, Canada, or even neighboring Costa Rica, El Salvador does not levy an annual property tax on real estate. Once you purchase your property and pay the initial transfer tax at closing, your recurring tax obligations to the government drop to zero.
        </p>

        {/* CALLOUT */}
        <div className="article-callout">
          <span className="callout-icon">💡</span>
          <p>
            <strong>The impact on ROI:</strong> For investors looking to rent out properties or hold for appreciation, the absence of annual property taxes significantly boosts net yields. 
          </p>
        </div>

        <h2>How local municipalities are funded</h2>
        <p>
          Instead of taxing property values annually, municipalities in El Salvador collect small monthly fees for services like trash collection, street lighting, and park maintenance. These fees are typically nominal, often less than $10 to $20 per month, depending on the location and size of the property.
        </p>

        <h2>The Transfer Tax (Alcabala)</h2>
        <p>
          While there is no annual property tax, there is a one-time real estate transfer tax when you buy. This tax is 3% of the purchase price for any amount exceeding approximately $28,571. This is paid only once, at the time the property deed is registered in your name.
        </p>

        {/* FACT BOX */}
        <div className="article-factbox">
          <h4>Key Tax Advantages</h4>
          <ul>
            <li>No annual property taxes (0%)</li>
            <li>No capital gains tax on properties held for more than 5 years</li>
            <li>Territorial tax system (foreign-sourced income is generally not taxed)</li>
          </ul>
        </div>

        <h2>The bottom line</h2>
        <p>
          El Salvador's tax structure makes it one of the most attractive markets for long-term real estate investors and expats looking to minimize their ongoing cost of living. 
        </p>

        {/* ── CTA ── */}
        <div className="article-cta">
          <h3>Ready to explore your options?</h3>
          <p>
            Schedule a free 30-minute consultation with Kevin to discuss how El Salvador's tax advantages align with your investment goals.
          </p>
          <Link to="/contact" className="btn btn-primary">Schedule Free Consultation →</Link>
        </div>

      </article>
    </div>
  );
};

export default Article2;
