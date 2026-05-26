import React from 'react';
import { Link } from 'react-router-dom';
import './Article1.css';

const Article1 = () => {
  return (
    <div className="article-page">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="article-hero">
        <div className="article-hero-overlay" />
        {/* Replace src with a real El Salvador photo from Unsplash */}
        <img
          src="/images/article1-hero.jpg"
          alt="El Salvador Pacific coast aerial view"
          className="article-hero-img"
        />
        <div className="article-hero-content container">
          <span className="accent-label">Legal Process · Complete Guide</span>
          <h1>How Foreigners Can Buy Property in El Salvador in 30 Days</h1>
          <div className="article-meta">
            <span>By Kevin Ramos</span>
            <span className="meta-dot">·</span>
            <span>Volcana Pacifica</span>
            <span className="meta-dot">·</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────── */}
      <article className="article-body container">

        <div className="article-lead">
          Most people assume buying property abroad is complicated, slow, and full of legal traps.
          In El Salvador, it's surprisingly straightforward — and as a foreigner, you have the
          same property rights as any Salvadoran citizen. Here's the complete process, step by step.
        </div>

        {/* ── SECTION 1 ── */}
        <h2>What foreigners need to know first</h2>
        <p>
          El Salvador grants full direct property ownership to foreign nationals. There are no
          restrictions on the type of property foreigners can buy, no requirement to form a local
          company, and no trust structure needed — unlike Mexico, where foreigners in coastal zones
          must use a bank trust called a <em>fideicomiso</em>.
        </p>
        <p>
          You buy the property. Your name goes on the title. That's it.
        </p>
        <p>
          The only documents a foreign buyer needs to begin the process are a valid passport and a
          Salvadoran tax ID number called an <strong>NIT</strong> (Número de Identificación
          Tributaria). More on that below.
        </p>

        {/* CALLOUT */}
        <div className="article-callout">
          <span className="callout-icon">💡</span>
          <p>
            Unlike Mexico's <em>fideicomiso</em> or Panama's realty structures, El Salvador gives
            foreigners <strong>the same ownership rights as citizens</strong>. No middlemen,
            no annual trust fees, no restrictions on what you can own.
          </p>
        </div>

        {/* ── SECTION 2 ── */}
        <h2>Step 1 — Get your Salvadoran Tax ID (NIT)</h2>
        <p>
          The NIT is a simple administrative requirement. It does not make you a tax resident of
          El Salvador, does not obligate you to file local tax returns, and does not interfere
          with your tax situation in your home country in any way.
        </p>
        <p>
          Think of it as a registration number the government uses to track the property
          transaction — nothing more.
        </p>

        <div className="article-steps">
          <div className="article-step">
            <span className="step-num">01</span>
            <div>
              <strong>Go to any Ministerio de Hacienda office</strong> in San Salvador.
              No appointment needed.
            </div>
          </div>
          <div className="article-step">
            <span className="step-num">02</span>
            <div>
              <strong>Bring your valid passport.</strong> That's the only document required.
            </div>
          </div>
          <div className="article-step">
            <span className="step-num">03</span>
            <div>
              <strong>Fill out a short form and pay $2.</strong> The fee is literally two US dollars.
            </div>
          </div>
          <div className="article-step">
            <span className="step-num">04</span>
            <div>
              <strong>Receive your NIT in 20 minutes.</strong> The process is faster than most
              DMV visits in the United States.
            </div>
          </div>
        </div>

        <p>
          Once you have your NIT, you are legally ready to purchase property in El Salvador.
          Most buyers obtain it during their first visit to the country.
        </p>

        {/* ── SECTION 3 ── */}
        <h2>Step 2 — Find your property and agree on a price</h2>
        <p>
          This is where working with a knowledgeable local advisor becomes critical. The Salvadoran
          real estate market is not fully digitized — many of the best properties and developments
          are not listed on international platforms and require local relationships to access.
        </p>
        <p>
          Once you identify a property you want to purchase, you negotiate the price directly with
          the seller or developer. There is no standardized offer process like in the US — this is
          a direct negotiation, typically conducted verbally first and then formalized in writing.
        </p>

        {/* FACT BOX */}
        <div className="article-factbox">
          <h4>What to verify before making an offer</h4>
          <ul>
            <li>The property has a clean title registered at the CNR (Centro Nacional de Registros)</li>
            <li>No outstanding liens, mortgages, or legal disputes on the property</li>
            <li>All municipal permits and construction approvals are in order</li>
            <li>The seller has legal authority to sell (especially important for inherited properties)</li>
          </ul>
        </div>

        {/* ── SECTION 4 ── */}
        <h2>Step 3 — Sign the Promise to Purchase (<em>Promesa de Venta</em>)</h2>
        <p>
          Once both parties agree on a price and terms, a notary drafts a <em>promesa de venta</em>
          — a binding promise to purchase. This document:
        </p>
        <ul className="article-list">
          <li>Locks in the agreed price and conditions</li>
          <li>Sets the timeline for the final sale</li>
          <li>Requires a deposit from the buyer — typically 10% of the purchase price</li>
          <li>Protects both parties legally if one party backs out</li>
        </ul>
        <p>
          This document must be signed before a Salvadoran notary. Your advisor will coordinate
          this step and ensure the terms protect your interests as a foreign buyer.
        </p>

        {/* ── SECTION 5 ── */}
        <h2>Step 4 — Legal due diligence</h2>
        <p>
          Between the promesa and the final sale, your attorney conducts a full title search
          at the CNR. This process typically takes 1 to 3 weeks and verifies:
        </p>
        <ul className="article-list">
          <li>The seller is the legitimate registered owner</li>
          <li>The property has no hidden debts or encumbrances</li>
          <li>The property boundaries match the registered cadastral data</li>
          <li>There are no pending legal disputes or court orders on the property</li>
        </ul>
        <p>
          This is a non-negotiable step. Never skip due diligence, regardless of how trustworthy
          the seller appears. A clean title search is your protection.
        </p>

        {/* ── SECTION 6 ── */}
        <h2>Step 5 — Final sale and title transfer (<em>Escritura Pública</em>)</h2>
        <p>
          Once due diligence is complete and both parties are ready, the final sale is executed
          through a <em>escritura pública</em> — a public deed — signed before a Salvadoran notary.
          At this point, the buyer pays the remaining balance and the property officially transfers
          to the buyer's name.
        </p>
        <p>
          The costs at this stage are:
        </p>

        {/* COST TABLE */}
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr>
                <th>Cost</th>
                <th>Rate</th>
                <th>Example on $300,000</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Transfer Tax</td>
                <td>3% on amount above $28,571</td>
                <td>~$8,143</td>
              </tr>
              <tr>
                <td>Registration Fee</td>
                <td>~0.63%</td>
                <td>~$1,890</td>
              </tr>
              <tr>
                <td>Legal / Notary Fees</td>
                <td>~1% (variable)</td>
                <td>~$3,000</td>
              </tr>
              <tr className="table-highlight">
                <td>Annual Property Tax</td>
                <td>$0</td>
                <td>$0 — forever</td>
              </tr>
              <tr className="table-highlight">
                <td>HOA (most properties)</td>
                <td>$0</td>
                <td>$0 — forever</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          After the escritura is signed, you pay once and you're done. No annual property tax.
          No recurring municipal fees. No HOA in most developments. Your cost of ownership
          after closing day is effectively zero.
        </p>

        {/* ── SECTION 7 ── */}
        <h2>Step 6 — Property registration at the CNR</h2>
        <p>
          The final step is registering the new deed at the CNR (Centro Nacional de Registros).
          Your notary handles this process. Once registered, your name appears in the national
          property registry as the official owner of the property.
        </p>
        <p>
          This registration typically takes between 2 and 6 weeks depending on the CNR's current
          workload. During this period, you already own the property — registration simply makes
          it official in the public record.
        </p>

        {/* TIMELINE */}
        <div className="article-timeline">
          <h4>Typical Timeline</h4>
          <div className="timeline-items">
            <div className="timeline-item">
              <span className="timeline-week">Week 1</span>
              <span className="timeline-desc">Obtain NIT · Find property · Negotiate price</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-week">Week 1–2</span>
              <span className="timeline-desc">Sign <em>promesa de venta</em> · Pay deposit</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-week">Weeks 2–4</span>
              <span className="timeline-desc">Legal due diligence · Title search at CNR</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-week">Week 4–5</span>
              <span className="timeline-desc">Sign <em>escritura pública</em> · Pay balance · Transfer complete</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-week">Weeks 5–10</span>
              <span className="timeline-desc">CNR registration · Title officially in your name</span>
            </div>
          </div>
        </div>

        {/* ── SECTION 8 ── */}
        <h2>Common questions from foreign buyers</h2>

        <div className="article-faq">
          <div className="faq-item">
            <h4>Can I buy property remotely without visiting El Salvador?</h4>
            <p>
              Yes. You can grant a Power of Attorney (<em>poder notarial</em>) to a local
              representative who can sign documents on your behalf. However, we strongly recommend
              visiting at least once before purchasing — especially for lifestyle properties
              where the environment and neighborhood matter as much as the property itself.
            </p>
          </div>
          <div className="faq-item">
            <h4>Do I need to open a local bank account?</h4>
            <p>
              Not necessarily. Most transactions can be completed via international wire transfer
              directly to the seller or developer. A local account can be useful for ongoing
              property management but is not required to complete a purchase.
            </p>
          </div>
          <div className="faq-item">
            <h4>Can I buy with cryptocurrency?</h4>
            <p>
              El Salvador is the only country in the world where Bitcoin is legal tender. Some
              developers accept Bitcoin directly. For other cryptocurrencies, buyers typically
              convert to USD before the transaction. Discuss this with your advisor and the
              developer before proceeding.
            </p>
          </div>
          <div className="faq-item">
            <h4>Does buying property give me residency?</h4>
            <p>
              Property ownership alone does not automatically grant residency. However,
              El Salvador has a straightforward residency program, and property ownership
              can support your residency application. Consult an immigration attorney
              for your specific situation.
            </p>
          </div>
        </div>

        {/* ── CLOSING ── */}
        <h2>The bottom line</h2>
        <p>
          Buying property in El Salvador as a foreigner is genuinely straightforward compared to
          most international markets. The legal framework is clear, the costs are transparent,
          and the absence of recurring property taxes makes it one of the most cost-efficient
          places in the world to own real estate long-term.
        </p>
        <p>
          The key is working with someone who knows the local market, has relationships with
          vetted developers and attorneys, and understands what international buyers need
          to feel confident in the process.
        </p>

        {/* ── CTA ── */}
        <div className="article-cta">
          <h3>Ready to explore your options?</h3>
          <p>
            Schedule a free 30-minute consultation with Kevin. No commitment, no pressure —
            just clear answers to your specific questions about buying in El Salvador.
          </p>
          <Link to="/contact" className="btn btn-primary">Schedule Free Consultation →</Link>
        </div>

      </article>
    </div>
  );
};

export default Article1;
