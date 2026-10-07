import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy — Meezo",
  description: "How Meezo Ltd collects, protects and retains your personal data.",
  openGraph: {
    title: "Privacy Policy — Meezo",
    description: "How Meezo Ltd collects, protects and retains your personal data.",
    type: "website",
  },
};

const jsonLd0 = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.meezopay.com/"}, {"@type": "ListItem", "position": 2, "name": "Privacy Policy"}]};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd0} />
      <section className="page-hero">
        <div className="container">
          <p className="crumbs"><Link href="/">Home</Link> / Privacy policy</p>
          <p className="eyebrow">Privacy policy</p>
          <h1>How Meezo handles your data.</h1>
          <p>This page summarises the confirmed points of Meezo's privacy policy. The full, legally binding policy should be finalised and published by Meezo's legal team — nothing here should be treated as a substitute for that document.</p>
        </div>
      </section>
      <section className="tight">
        <div className="container">
          <div className="grid-2">
            <div className="card"><h3>Who's responsible for your data</h3><p>Meezo Ltd, registered in England and Wales (company number 15947872), registered office 28 Riverview Court, Old Bellgate Place, London, E14 3SY.</p></div>
            <div className="card"><h3>Data retention</h3><p>Account data is retained for up to 7 years after account closure, to meet legal and regulatory record-keeping obligations.</p></div>
            <div className="card"><h3>How your data is protected</h3><p>Encryption, secure storage, and multi-factor authentication are used throughout.</p></div>
            <div className="card"><h3>UK GDPR</h3><p>Meezo handles personal data in line with UK GDPR, including for any international transfers.</p></div>
          </div>
          <div className="callout" style={{marginTop: '24px'}}><p>Questions about your data or this policy — <a href="mailto:dataprotection@meezopay.co.uk" style={{color: 'var(--accent-soft)'}}>dataprotection@meezopay.co.uk</a>.</p></div>
        </div>
      </section>
    </>
  );
}
