import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import GetMeezoButton from "@/components/GetMeezoButton";

export const metadata: Metadata = {
  title: "About Meezo — UK Fintech, Built for Everyday Banking",
  description: "Why Meezo exists, what it's building next, and the team behind a simpler way to manage money across every UK bank account you hold.",
  openGraph: {
    title: "About Meezo — UK Fintech, Built for Everyday Banking",
    description: "Why Meezo exists, what it's building next, and the team behind a simpler way to manage money across every UK bank account you hold.",
    type: "website",
  },
};

const jsonLd0 = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.meezopay.com/"}, {"@type": "ListItem", "position": 2, "name": "About Meezo"}]};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd0} />
      <section className="page-hero">
        <div className="container">
          <p className="crumbs"><Link href="/">Home</Link> / About</p>
          <p className="eyebrow">About Meezo</p>
          <h1>Built because managing money across banks shouldn't take five apps.</h1>
          <p>Meezo was founded in 2024 on a simple question: what if managing your money could be effortless, instead of scattered across every bank and payment app you use?</p>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="grid-2">
            <div className="card"><h3>Mission</h3><p>Transforming how money moves — starting with putting every bank you use in one place.</p></div>
            <div className="card"><h3>Vision</h3><p>A financial life that's seamlessly integrated, not spread across apps that don't talk to each other.</p></div>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="section-head"><p className="eyebrow">Our values</p><h2>Why Meezo</h2></div>
          <div className="grid-3">
            <div className="card"><h3>Built on trust</h3><p>Regulated infrastructure, and your money never leaves your own bank.</p></div>
            <div className="card"><h3>Transparent by design</h3><p>No hidden complexity in how the product works or what it costs.</p></div>
            <div className="card"><h3>Designed for you</h3><p>Features built around how people actually pay and split money, not around what's easiest to build.</p></div>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="section-head"><p className="eyebrow">Who we're building for</p><h2>Individuals first — with more on the way.</h2></div>
          <div className="grid-3">
            <div className="card"><h3>Individuals &amp; families</h3><p>Live today — multi-bank management, payments and bill splitting.</p></div>
            <div className="card"><h3>Freelancers</h3><p>Live today, using Meezo's personal multi-account tools — dedicated freelancer features are on the roadmap.</p></div>
            <div className="card soon" style={{borderStyle: 'dashed'}}><span className="tag-soon">Coming soon</span><h3 style={{marginTop: '10px'}}>Businesses &amp; expats</h3><p>Meezo for Business is launching soon. Expats are part of the longer-term vision — nothing dedicated is live for this group yet.</p></div>
          </div>
        </div>
      </section>

      {/* <section className="tight">
        <div className="container">
          <div className="section-head"><p className="eyebrow">Founding team</p><h2>Four co-founders, one product.</h2></div>
          <div className="grid-4">
            <div className="card"><h3>Ritesh</h3><p>Co-founder &amp; CEO</p></div>
            <div className="card"><h3>Karishma</h3><p>Co-founder &amp; CTO</p></div>
            <div className="card"><h3>Prajwal</h3><p>Co-founder &amp; COO</p></div>
            <div className="card"><h3>Thanush</h3><p>Co-founder &amp; CFO</p></div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container">
          <div className="final-cta">
            <h2>Come use the app we wished existed.</h2>
            <div className="btn-row"><GetMeezoButton /><Link href="/contact" className="btn btn-secondary">Get in touch</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
