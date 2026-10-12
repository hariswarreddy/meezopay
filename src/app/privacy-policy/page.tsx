import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy — Meezo",
  description: "How Meezo collects, uses, stores, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy — Meezo",
    description: "How Meezo collects, uses, stores, and protects your personal information.",
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
          <p className="crumbs"><Link href="/">Home</Link> / Privacy Policy</p>
          {/* <p className="eyebrow">Privacy Policy</p> */}
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="tight">
        <div className="container">
          <div className="legal-prose">
            <p className="legal-effective">Effective Date: 17 October 2025</p>

            <p className="legal-intro">
              We&rsquo;re committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our application (&ldquo;App&rdquo;), website, and related services.
            </p>

            <p>
              Meezo operates as an Appointed Representative of Finexer, which is authorised and regulated by the Financial Conduct Authority (FCA) under reference number 0004319191. This ensures our financial activities comply with FCA standards for consumer protection, transparency, and data integrity.
            </p>

            <h2>1. Who We Are</h2>
            <p>
              Meezo is a UK-based financial technology platform designed to simplify multi-banking, payments, and financial insights.
            </p>
            <p>
              <strong>Our registered office:</strong> 28 Riverview Court, Old Bellgate Place, Tower Hamlets, London, E14 3SY<br />
              <strong>Contact:</strong> <a href="mailto:dataprotection@meezopay.co.uk">dataprotection@meezopay.co.uk</a>
            </p>
            <p>
              As an FCA-approved agent through Finexer, we adhere to all applicable data protection and financial conduct requirements.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect the following types of information to provide and improve our services:</p>

            <h3>a. Personal Information</h3>
            <ul>
              <li>Name, date of birth, contact details, and verification documents (for identity verification and compliance with AML/KYC regulations).</li>
            </ul>

            <h3>b. Financial Information</h3>
            <ul>
              <li>Bank account details, transaction data, account balances, and payment activity (where users choose to connect their accounts).</li>
            </ul>

            <h3>c. Technical and Usage Data</h3>
            <ul>
              <li>Device information, IP address, app activity logs, cookies, and analytics data to improve functionality and security.</li>
            </ul>

            <h3>d. Communication Data</h3>
            <ul>
              <li>Records of correspondence with our support or compliance teams.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Provide, operate, and improve Meezo services.</li>
              <li>Facilitate secure multi-banking and payments.</li>
              <li>Verify your identity and prevent fraud (AML/KYC compliance).</li>
              <li>Personalise insights through AI-powered analytics.</li>
              <li>Communicate service updates and policy changes.</li>
              <li>Comply with FCA and UK regulatory obligations.</li>
            </ul>
            <p><strong>We will never sell or lease your data to third parties.</strong></p>

            <h2>4. Legal Basis for Processing</h2>
            <p>Our legal bases for processing your data include:</p>
            <ul>
              <li><strong>Performance of a contract</strong> (to deliver the Meezo services you&rsquo;ve requested).</li>
              <li><strong>Compliance with legal obligations</strong> (FCA, AML, and KYC requirements).</li>
              <li><strong>Legitimate interests</strong> (service improvement, analytics, fraud prevention).</li>
              <li><strong>User consent</strong> (for data sharing, marketing, or linking financial accounts).</li>
            </ul>

            <h2>5. Data Sharing and Partners</h2>
            <p>
              We only share your data with trusted service providers that help us deliver our services, such as:
            </p>
            <ul>
              <li>Banking and payment infrastructure partners.</li>
              <li>FCA-regulated entities (including Finexer).</li>
              <li>Identity verification and fraud prevention services.</li>
              <li>Cloud hosting and security providers.</li>
            </ul>
            <p>All partners are bound by strict confidentiality and data protection agreements.</p>

            <h2>6. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary for the purposes stated, in accordance with FCA and data protection regulations. When no longer required, your data will be securely deleted or anonymised.
            </p>

            <h2>7. Your Rights</h2>
            <p>Under the UK GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal data.</li>
              <li>Request correction or deletion.</li>
              <li>Object to or restrict processing.</li>
              <li>Withdraw consent at any time.</li>
              <li>Port your data to another provider.</li>
            </ul>
            <p>
              To exercise these rights, contact us at <a href="mailto:dataprotection@meezopay.co.uk">dataprotection@meezopay.co.uk</a>.
            </p>

            <h2>8. Security</h2>
            <p>
              We use advanced encryption, secure storage, and multi-factor authentication to protect your data. Our systems are monitored and regularly audited to maintain FCA-grade security standards.
            </p>

            <h2>9. International Transfers</h2>
            <p>
              If your data is transferred outside the UK, we ensure that equivalent data protection safeguards are in place, compliant with UK GDPR and FCA standards.
            </p>

            <h2>10. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in law, regulation, or business operations. Any updates will be posted within the app and on our website, with clear notice to users.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions or complaints regarding this policy, you may contact:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:dataprotection@meezopay.co.uk">dataprotection@meezopay.co.uk</a>
            </p>

            <div className="legal-footer">
              <p>Meezo — Transforming how money moves, with trust and transparency at its core.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
