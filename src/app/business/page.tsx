import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Meezo for Business — Coming Soon",
  description: "Multiple businesses, QR payments and near-instant settlement — Meezo for Business is launching soon. Join the waitlist.",
  openGraph: {
    title: "Meezo for Business — Coming Soon",
    description: "Multiple businesses, QR payments and near-instant settlement — Meezo for Business is launching soon. Join the waitlist.",
    type: "website",
  },
};

const jsonLd0 = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.meezopay.com/"}, {"@type": "ListItem", "position": 2, "name": "Meezo for Business"}]};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd0} />
      <section className="page-hero">
        <div className="container">
          <p className="crumbs"><Link href="/">Home</Link> / Business</p>
          <span className="tag-soon">Coming soon</span>
          <h1 style={{marginTop: '14px'}}>Meezo for Business is on its way.</h1>
          <p>One dashboard for every business you run, every account behind it, and payments your customers can make by scanning a code. Not live yet — here's what's coming, and a place to join the list.</p>
          <form className="waitlist-form" data-waitlist-form>
            <label htmlFor="wl-email" className="visually-hidden" style={{position: 'absolute', left: '-9999px'}}>Email address</label>
            <input id="wl-email" type="email" placeholder="you@business.co.uk" required />
            <button type="submit" className="btn btn-primary">Join the waitlist</button>
          </form>
          <p className="waitlist-note">Preview build — this form isn't connected to anything live yet.</p>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="section-head"><p className="eyebrow">What's coming</p><h2>Built for businesses that take payments, not just make them.</h2></div>
          <div className="grid-3">
            <div className="card"><h3>Multiple businesses, one login</h3><p>Add as many businesses as you run, each with its own connected bank accounts.</p></div>
            <div className="card"><h3>Accept payments by QR code</h3><p>No card machine required — start by putting up a QR code and accepting payments straight away.</p></div>
            <div className="card"><h3>Near-instant settlement</h3><p>Payments made through Open Banking settle into your account with no buffer period.</p></div>
            <div className="card"><h3>Low transaction fees</h3><p>Priced to compete with existing payment processors — with no large setup fee.</p></div>
            <div className="card"><h3>Refunds, built in</h3><p>Issue refunds to customers directly from the same dashboard you accept payments in.</p></div>
            <div className="card"><h3>Vendor &amp; business-to-business payments</h3><p>Pay other businesses and vendors you work with from the same place.</p></div>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="section-head"><p className="eyebrow">For the owner</p><h2>One admin view, across every business.</h2></div>
          <div className="grid-2">
            <div className="card"><h3>Employee access, with limits</h3><p>Give staff access on their own device — restricted to accepting payments, issuing refunds and seeing the day's activity, not full account control.</p></div>
            <div className="card"><h3>Trends across every business</h3><p>See daily income and expenses for each business individually, and combined, from one admin dashboard.</p></div>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="callout">
            <p><strong>Further down the roadmap</strong> — built-in accounting, tax filing, and a running view of what you owe in tax. These come after the core business launch, not with it.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="final-cta">
            <h2>Be first to know when it launches.</h2>
            <form className="waitlist-form" data-waitlist-form style={{justifyContent: 'center', margin: '0 auto'}}>
              <input type="email" placeholder="you@business.co.uk" required />
              <button type="submit" className="btn btn-primary">Join the waitlist</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
