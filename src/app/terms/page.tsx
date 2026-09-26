import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions — Meezo",
  description: "The terms governing use of the Meezo app and its regulated payment services.",
  openGraph: {
    title: "Terms & Conditions — Meezo",
    description: "The terms governing use of the Meezo app and its regulated payment services.",
    type: "website",
  },
};

const jsonLd0 = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.meezopay.com/"}, {"@type": "ListItem", "position": 2, "name": "Terms & Conditions"}]};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd0} />
      <section className="page-hero">
        <div className="container">
          <p className="crumbs"><Link href="/">Home</Link> / Terms &amp; conditions</p>
          <p className="eyebrow">Terms &amp; conditions</p>
          <h1>The terms of using Meezo.</h1>
          <p>This page summarises the confirmed points of Meezo's terms. The full, legally binding terms should be finalised and published by Meezo's legal team — nothing here should be treated as a substitute for that document.</p>
        </div>
      </section>
      <section className="tight">
        <div className="container">
          <div className="grid-2">
            <div className="card"><h3>Who you're contracting with</h3><p>Meezo Ltd, company number 15947872, registered in England and Wales.</p></div>
            <div className="card"><h3>Regulatory basis</h3><p>Meezo Ltd acts as an agent of Finexer Ltd, authorised and regulated by the FCA under the Payment Services Regulations 2017 (Firm Reference Number: 1041872), for Account Information and Payment Initiation Services.</p></div>
            <div className="card"><h3>Your funds</h3><p>Meezo does not hold customer funds. Money stays in your own bank accounts; Meezo initiates payments and your bank carries them out.</p></div>
            <div className="card"><h3>Where Meezo operates</h3><p>Meezo currently provides its services within the UK only.</p></div>
          </div>
          <div className="callout" style={{marginTop: '24px'}}><p>Questions about these terms — <a href="mailto:support@meezopay.co.uk" style={{color: 'var(--accent-soft)'}}>support@meezopay.co.uk</a>.</p></div>
        </div>
      </section>
    </>
  );
}
