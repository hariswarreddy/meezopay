import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import GetMeezoButton from "@/components/GetMeezoButton";

export const metadata: Metadata = {
  title: "Personal Banking, Simplified — Meezo",
  description: "See every connected bank account, track spending, and move money between them — all from one app built for everyday UK banking.",
  openGraph: {
    title: "Personal Banking, Simplified — Meezo",
    description: "See every connected bank account, track spending, and move money between them — all from one app built for everyday UK banking.",
    type: "website",
  },
};

const jsonLd0 = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.meezopay.com/"}, {"@type": "ListItem", "position": 2, "name": "Personal Banking, Simplified"}]};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd0} />
      <section className="page-hero">
        <div className="container">
          <p className="crumbs"><Link href="/">Home</Link> / Personal</p>
          <p className="eyebrow">For individuals</p>
          <h1>Personal banking, without the app-switching.</h1>
          <p>Connect every UK bank account you hold, see it all in one dashboard, and send, split or move money in whichever way suits the moment.</p>
          <div className="btn-row" style={{marginTop: '26px'}}><GetMeezoButton /><Link href="/payments" className="btn btn-secondary">See the payment options</Link></div>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="section-head"><p className="eyebrow">All-in-one banking</p><h2>Every account, one dashboard.</h2><p>Connect your current account, savings, and any second bank you use — Meezo shows balances and transactions together, in real time.</p></div>
          <div className="hero-grid" style={{alignItems: 'center'}}>
            {/* <div className="phone-stage"><div className="phone" style={{width: 'min(260px,70vw)'}}><img src="/assets/ss_dashboard.jpg" alt="Meezo home dashboard with HSBC, Lloyds and NatWest accounts connected" /></div></div> */}
            <div className="grid-2">
              <div className="card"><h3>Connect in minutes</h3><p>Search your bank, sign in through their own secure login, and it appears in your dashboard.</p></div>
              <div className="card"><h3>All major UK banks</h3><p>HSBC, Lloyds, NatWest, Halifax, Nationwide, Santander, Revolut and more.</p></div>
              <div className="card"><h3>Real-time balances</h3><p>No refreshing five apps to know what you actually have.</p></div>
              <div className="card"><h3>One transaction feed</h3><p>Every account's activity, searchable, in a single list.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="section-head"><p className="eyebrow">Four ways to pay</p><h2>Send money your way.</h2></div>
          <div className="grid-4">
            <div className="card"><h3>Phone number</h3><p>No sort code needed — just their number.</p></div>
            <div className="card"><h3>QR &amp; payment link</h3><p>Scan a code or share a link for a set amount.</p></div>
            <div className="card"><h3>Meezo ID</h3><p>Get paid without sharing your bank details.</p></div>
            <div className="card"><h3>Self transfer</h3><p>Move money between your own accounts instantly.</p></div>
          </div>
          <div style={{marginTop: '24px'}}><Link href="/payments" className="btn btn-secondary">See every payment method in detail →</Link></div>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="hero-grid" style={{alignItems: 'center'}}>
            <div>
              <p className="eyebrow">Split &amp; settle</p>
              <h2 style={{fontSize: 'clamp(24px,3.6vw,32px)'}}>Split the bill. Not the friendship.</h2>
              <p className="measure" style={{color: 'var(--text-dim)', marginTop: '14px'}}>Split any bill evenly or by custom amount, send the request, and track who's paid and who's still owed.</p>
              <div style={{marginTop: '20px'}}><Link href="/split-bills" className="btn btn-secondary">See how splitting works →</Link></div>
            </div>
            <div className="split-flow" style={{gridTemplateColumns: 'repeat(2,1fr)'}}>
              <div className="split-step"><div className="amt">£120</div><h4>The bill</h4></div>
              <div className="split-step"><div className="amt">÷4</div><h4>Choose people</h4></div>
              <div className="split-step"><div className="amt">£30</div><h4>Request sent</h4></div>
              <div className="split-step"><div className="amt">✓</div><h4>Settled</h4></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head"><p className="eyebrow">For freelancers</p><h2>Keep client and personal money visible together.</h2><p>If you invoice clients and bank personally at the same time, Meezo's multi-account view already helps — see everything in one place today, while dedicated freelancer tools are on our roadmap.</p></div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="final-cta">
            <h2>One app for everyday money.</h2>
            <p>Free to join. Connect your first account in under a minute.</p>
            <div className="btn-row"><GetMeezoButton /></div>
          </div>
        </div>
      </section>
    </>
  );
}
