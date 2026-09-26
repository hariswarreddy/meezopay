import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import GetMeezoButton from "@/components/GetMeezoButton";
import InlineVideo from "@/components/InlineVideo";

export const metadata: Metadata = {
  title: "Split Bills Without the Chase — Meezo",
  description: "Split any bill evenly or by custom amount, send the request, and see who's paid and who hasn't — settled straight from your bank.",
  openGraph: {
    title: "Split Bills Without the Chase — Meezo",
    description: "Split any bill evenly or by custom amount, send the request, and see who's paid and who hasn't — settled straight from your bank.",
    type: "website",
  },
};

const jsonLd0 = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.meezopay.com/"}, {"@type": "ListItem", "position": 2, "name": "Split Bills Without the Chase"}]};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd0} />
       <section id="split">
              <div className="container">
                <div className="hero-grid split-hero-grid" style={{alignItems: 'center'}}>
                  <div className="phone-stage">
                    <InlineVideo src="https://ik.imagekit.io/hariswarreddy/meezo/split-bills.mp4" className="add-bank-video" />
                  </div>
                  <div style={{padding: '0 20px'}}>
                    <p className="eyebrow">Split &amp; settle</p>
                    <h2 style={{fontSize: 'clamp(26px,4vw,36px)'}}>Split the bill. Not the friendship.</h2>
                    <p className="measure" style={{color: 'var(--text-dim)', fontSize: '16px', marginTop: '16px'}}>Set each person's share, send the requests, and watch the ring fill in as everyone settles up.</p>
                  </div>
                </div>
              </div>
            </section>

      {/* <section className="tight">
        <div className="container">
          <div className="grid-3">
            <div>
              <div className="phone-stage"><div className="phone" style={{width: '100%'}}><img src="/assets/fg_split_percent.jpg" alt="Meezo split screen: setting Bob's share to 20% of the bill with a number pad" /></div></div>
              <p style={{textAlign: 'center', color: 'var(--text-dim)', fontSize: '14.5px', marginTop: '16px'}}><strong style={{color: 'var(--text)'}}>1. Set each share.</strong> Split evenly, or dial in a custom percentage per person.</p>
            </div>
            <div>
              <div className="phone-stage"><div className="phone" style={{width: '100%'}}><img src="/assets/fg_split_pending3.jpg" alt="Pending Splits screen listing Wi-Fi bill, Food bill and Travel bill, each with a progress ring" /></div></div>
              <p style={{textAlign: 'center', color: 'var(--text-dim)', fontSize: '14.5px', marginTop: '16px'}}><strong style={{color: 'var(--text)'}}>2. Track collection.</strong> Every open split, with a ring showing how much has come in.</p>
            </div>
            <div>
              <div className="phone-stage"><div className="phone" style={{width: '100%'}}><img src="/assets/fg_split_pending2.jpg" alt="Shoreditch Dinner split detail: £240 total, four people marked Paid £48, one still Pending £48" /></div></div>
              <p style={{textAlign: 'center', color: 'var(--text-dim)', fontSize: '14.5px', marginTop: '16px'}}><strong style={{color: 'var(--text)'}}>3. See who's left.</strong> Paid and pending, person by person, until it's settled.</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="tight">
        <div className="container">
          <div className="grid-2">
            <div className="card"><h3>Even or custom splits</h3><p>Divide a bill equally across everyone, or set exactly what each person owes.</p></div>
            <div className="card"><h3>Requests, not awkward reminders</h3><p>Send a payment request in-app instead of texting "did you send that yet?"</p></div>
            <div className="card"><h3>See who's paid</h3><p>A live view of who's settled and who still owes — no spreadsheet required.</p></div>
            <div className="card"><h3>Settles to your bank</h3><p>Once someone pays their share, it lands straight in your connected account.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head"><p className="eyebrow">FAQ</p><h2>Splitting bills, answered.</h2></div>
          <div data-faq-group className="faq-group">
            <div className="faq-item open"><button className="faq-q">Can I split bills with Meezo?<span className="plus"></span></button><div className="faq-a"><p>Yes — split any bill evenly or by custom amount, send requests, and track who's paid.</p></div></div>
            <div className="faq-item"><button className="faq-q">What happens once everyone's paid?<span className="plus"></span></button><div className="faq-a"><p>The bill shows as settled, and each payment has already landed in your connected bank account.</p></div></div>
            <div className="faq-item"><button className="faq-q">Do the people I split with need Meezo?<span className="plus"></span></button><div className="faq-a"><p>They'll need the app to pay their share directly — the same way any of Meezo's payment methods work.</p></div></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="final-cta">
            <h2>Stop chasing people for money.</h2>
            <div className="btn-row"><GetMeezoButton /></div>
          </div>
        </div>
      </section>
    </>
  );
}
