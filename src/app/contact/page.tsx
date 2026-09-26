import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Meezo — Support & Complaints",
  description: "Get in touch with Meezo for support, feedback or a formal complaint, and see our response-time commitments.",
  openGraph: {
    title: "Contact Meezo — Support & Complaints",
    description: "Get in touch with Meezo for support, feedback or a formal complaint, and see our response-time commitments.",
    type: "website",
  },
};

const jsonLd0 = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.meezopay.com/"}, {"@type": "ListItem", "position": 2, "name": "Contact Meezo"}]};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd0} />
      <section className="page-hero">
        <div className="container">
          <p className="crumbs"><Link href="/">Home</Link> / Contact</p>
          <p className="eyebrow">Contact</p>
          <h1>We're here to help.</h1>
          <p>Get in touch for support, a general enquiry, or to raise a formal complaint.</p>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="grid-3">
            <div className="card"><h3>Support &amp; general enquiries</h3><p><a href="mailto:support@meezopay.co.uk" style={{color: 'var(--accent-soft)'}}>support@meezopay.co.uk</a></p></div>
            <div className="card"><h3>Privacy &amp; data protection</h3><p><a href="mailto:dataprotection@meezopay.co.uk" style={{color: 'var(--accent-soft)'}}>dataprotection@meezopay.co.uk</a></p></div>
            <div className="card"><h3>Phone &amp; registered office</h3><p>+44 7767 173487<br />28 Riverview Court, Old Bellgate Place, London, E14 3SY</p></div>
          </div>
        </div>
      </section>

      <section id="complaints" className="tight">
        <div className="container">
          <div className="section-head"><p className="eyebrow">Complaints</p><h2>How to submit a complaint</h2></div>
          <div className="grid-2">
            <div className="card"><h3>1. Tell us what happened</h3><p>Email <a href="mailto:support@meezopay.co.uk" style={{color: 'var(--accent-soft)'}}>support@meezopay.co.uk</a> with your full name, registered email address, a clear description of the issue, and any relevant transaction details or supporting documents.</p></div>
            <div className="card"><h3>2. We acknowledge and respond</h3><p>We acknowledge every complaint within 1 business day, and aim to complete our investigation and give a final response within 2 business days.</p></div>
          </div>
          <div className="callout" style={{marginTop: '20px'}}><p>If you're not satisfied with how a complaint has been handled, you can ask for it to be escalated within Meezo — reply to your original complaint email and ask for escalation.</p></div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="final-cta">
            <h2>Talk to us directly.</h2>
            <p>support@meezopay.co.uk · +44 7767 173487</p>
            <div className="btn-row"><a href="mailto:support@meezopay.co.uk" className="btn btn-primary">Email support</a></div>
          </div>
        </div>
      </section>
    </>
  );
}
