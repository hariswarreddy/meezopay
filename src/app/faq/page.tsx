import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Help & FAQ — Meezo",
  description: "Answers to common questions about how Meezo works, which banks are supported, security, and getting the app.",
  openGraph: {
    title: "Help & FAQ — Meezo",
    description: "Answers to common questions about how Meezo works, which banks are supported, security, and getting the app.",
    type: "website",
  },
};

const jsonLd0 = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.meezopay.com/"}, {"@type": "ListItem", "position": 2, "name": "Help & FAQ"}]};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd0} />
      <section className="page-hero">
        <div className="container">
          <p className="crumbs"><Link href="/">Home</Link> / Help &amp; FAQ</p>
          <p className="eyebrow">Help &amp; FAQ</p>
          <h1>Questions, answered plainly.</h1>
        </div>
      </section>
      <section className="tight">
        <div className="container">
          <div data-faq-group className="faq-group">
            <div className="faq-item open"><button className="faq-q">What is Meezo?<span className="plus"></span></button><div className="faq-a"><p>Meezo is a UK app that connects to your existing bank accounts through Open Banking, so you can see every balance and transaction in one place and send, split or move money without switching apps.</p></div></div>
            <div className="faq-item"><button className="faq-q">How does Meezo work?<span className="plus"></span></button><div className="faq-a"><p>Connect your UK bank accounts, see them together in one dashboard, then send, split or transfer money from the same app.</p></div></div>
            <div className="faq-item"><button className="faq-q">Is Meezo a bank?<span className="plus"></span></button><div className="faq-a"><p>No. Meezo doesn't hold your money — it connects to the UK bank accounts you already have and initiates payments on your behalf.</p></div></div>
            <div className="faq-item"><button className="faq-q">Can I connect multiple bank accounts?<span className="plus"></span></button><div className="faq-a"><p>Yes — connect as many UK bank accounts as you hold.</p></div></div>
            <div className="faq-item"><button className="faq-q">Which UK banks does Meezo support?<span className="plus"></span></button><div className="faq-a"><p>All the UK's major banks, including HSBC, Lloyds, NatWest, Halifax, Nationwide, Royal Bank of Scotland, Santander and Revolut.</p></div></div>
            <div className="faq-item"><button className="faq-q">Can I send money using a phone number?<span className="plus"></span></button><div className="faq-a"><p>Yes — enter their phone number, choose which account to pay from, and send.</p></div></div>
            <div className="faq-item"><button className="faq-q">What is Meezo ID?<span className="plus"></span></button><div className="faq-a"><p>A unique ID that lets people pay you without sharing your phone number or bank details.</p></div></div>
            <div className="faq-item"><button className="faq-q">How do Meezo payment links work?<span className="plus"></span></button><div className="faq-a"><p>Generate a link or QR code for a specific amount and share it — the payment settles straight into your bank.</p></div></div>
            <div className="faq-item"><button className="faq-q">Can I split bills with Meezo?<span className="plus"></span></button><div className="faq-a"><p>Yes — split evenly or by custom amount, send requests, and track who's paid.</p></div></div>
            <div className="faq-item"><button className="faq-q">Can I transfer money between my own bank accounts?<span className="plus"></span></button><div className="faq-a"><p>Yes, instantly, without opening a separate banking app.</p></div></div>
            <div className="faq-item"><button className="faq-q">Is Meezo safe?<span className="plus"></span></button><div className="faq-a"><p>Data is encrypted, MFA protects sign-in and new payees, and every bank connection runs through an FCA-regulated Open Banking provider.</p></div></div>
            <div className="faq-item"><button className="faq-q">Does Meezo hold my money?<span className="plus"></span></button><div className="faq-a"><p>No — your money stays in your own bank accounts at all times.</p></div></div>
            <div className="faq-item"><button className="faq-q">How does Meezo use Open Banking?<span className="plus"></span></button><div className="faq-a"><p>It lets Meezo see your balances and initiate payments directly with your bank's permission — no shared passwords.</p></div></div>
            <div className="faq-item"><button className="faq-q">Is Meezo free?<span className="plus"></span></button><div className="faq-a"><p>Yes, free to join and use for personal banking.</p></div></div>
            <div className="faq-item"><button className="faq-q">Who can use Meezo?<span className="plus"></span></button><div className="faq-a"><p>Anyone in the UK with a bank account.</p></div></div>
            <div className="faq-item"><button className="faq-q">Is Meezo available outside the UK?<span className="plus"></span></button><div className="faq-a"><p>Not yet — UK only, for now.</p></div></div>
            <div className="faq-item"><button className="faq-q">How do I get the Meezo app?<span className="plus"></span></button><div className="faq-a"><p>Download it free from the App Store and connect your first bank account.</p></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
