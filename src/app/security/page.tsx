import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import GetMeezoButton from "@/components/GetMeezoButton";

export const metadata: Metadata = {
  title: "Security — How Meezo Protects Your Money",
  description: "How Meezo encrypts your data, verifies every payment, and connects to your bank through FCA-regulated Open Banking infrastructure.",
  openGraph: {
    title: "Security — How Meezo Protects Your Money",
    description: "How Meezo encrypts your data, verifies every payment, and connects to your bank through FCA-regulated Open Banking infrastructure.",
    type: "website",
  },
};

const jsonLd0 = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.meezopay.com/"}, {"@type": "ListItem", "position": 2, "name": "Security"}]};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd0} />
      <section className="page-hero">
        <div className="container">
          <p className="crumbs"><Link href="/">Home</Link> / Security</p>
          <p className="eyebrow">Security</p>
          <h1>Simple on the surface. Serious underneath.</h1>
          <p>Meezo doesn't hold your money — it stays in your own bank accounts at every step. Here's exactly how the rest is protected.</p>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="security-grid">
            <div className="sec-row">
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sec-svg sec-lock">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" className="lock-shackle"></path>
                </svg>
              </div>
              <div><h4>Encrypted in transit and at rest</h4><p>Your data is encrypted both while it moves between the app, Meezo and your bank, and while it's stored.</p></div>
            </div>
            <div className="sec-row">
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sec-svg sec-shield">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4" className="shield-check"></path>
                </svg>
              </div>
              <div><h4>Multi-factor authentication</h4><p>A second confirmation on sign-in, and whenever you add a new payee or connect a new bank account.</p></div>
            </div>
            <div className="sec-row">
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sec-svg sec-bank">
                  <line x1="3" x2="21" y1="22" y2="22" />
                  <line x1="6" x2="6" y1="18" y2="11" className="bank-pillar p1" />
                  <line x1="10" x2="10" y1="18" y2="11" className="bank-pillar p2" />
                  <line x1="14" x2="14" y1="18" y2="11" className="bank-pillar p3" />
                  <line x1="18" x2="18" y1="18" y2="11" className="bank-pillar p4" />
                  <polygon points="12 2 20 7 4 7" />
                </svg>
              </div>
              <div><h4>Regulated Open Banking connections</h4><p>Meezo Ltd acts as an agent of Finexer Ltd, which is authorised and regulated by the Financial Conduct Authority under the Payment Services Regulations 2017, holding Account Information Services (AIS) and Payment Initiation Services (PIS) permissions (Firm Reference Number: 1041872). Every bank connection runs through this regulated infrastructure — never a shared password, never screen-scraping.</p></div>
            </div>
            <div className="sec-row">
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sec-svg sec-card">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10" />
                  <path d="M16 15h.01" className="card-chip" strokeWidth="3" />
                </svg>
              </div>
              <div><h4>Meezo never holds your money</h4><p>Meezo initiates payments on your instruction; your bank processes and holds the funds throughout, exactly as it always has.</p></div>
            </div>
            <div className="sec-row">
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sec-svg sec-doc">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" x2="8" y1="13" y2="13" className="doc-line l1"></line>
                  <line x1="16" x2="8" y1="17" y2="17" className="doc-line l2"></line>
                  <line x1="10" x2="8" y1="9" y2="9" className="doc-line l3"></line>
                </svg>
              </div>
              <div><h4>UK GDPR compliant</h4><p>Your personal data is handled under UK GDPR, with account data retained only as long as needed — up to 7 years after account closure, to meet legal and regulatory record-keeping obligations.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="callout">
            <p>Meezo's regulatory relationship with Finexer Ltd gives it the permissions to read your account data and initiate payments — it does not give Meezo custody of your money at any point. Full detail is in our <Link href="/privacy" style={{color: 'var(--accent-soft)'}}>privacy policy</Link> and <Link href="/terms" style={{color: 'var(--accent-soft)'}}>terms &amp; conditions</Link>.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head"><p className="eyebrow">FAQ</p><h2>Security &amp; regulation, answered.</h2></div>
          <div data-faq-group className="faq-group">
            <div className="faq-item open"><button className="faq-q">Is Meezo safe?<span className="plus"></span></button><div className="faq-a"><p>Yes — data is encrypted, MFA protects sign-in and new payees, and every bank connection runs through an FCA-regulated Open Banking provider.</p></div></div>
            <div className="faq-item"><button className="faq-q">Does Meezo hold my money?<span className="plus"></span></button><div className="faq-a"><p>No. Your money stays in your own bank accounts at all times.</p></div></div>
            <div className="faq-item"><button className="faq-q">Is Meezo regulated?<span className="plus"></span></button><div className="faq-a"><p>Meezo Ltd acts as an agent of Finexer Ltd, authorised and regulated by the FCA under the Payment Services Regulations 2017 (Firm Reference Number: 1041872) for Account Information and Payment Initiation Services.</p></div></div>
            <div className="faq-item"><button className="faq-q">How does Open Banking keep this secure?<span className="plus"></span></button><div className="faq-a"><p>Open Banking connects Meezo to your bank directly, with your explicit permission — there's no password sharing and no screen-scraping involved.</p></div></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="final-cta">
            <h2>Security you don't have to think about.</h2>
            <div className="btn-row"><GetMeezoButton /></div>
          </div>
        </div>
      </section>
    </>
  );
}
