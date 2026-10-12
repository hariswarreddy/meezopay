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
          <p className="crumbs"><Link href="/">Home</Link> / Terms &amp; Conditions</p>
          {/* <p className="eyebrow">Terms &amp; Conditions</p> */}
          <h1 className="min-w-full">Terms and Conditions</h1>
        </div>
      </section>
      <section className="tight">
        <div className="container">
          <div className="legal-prose">
            <p className="legal-effective">Effective Date: October 17, 2025</p>

            <p className="legal-intro">
              Welcome to Meezo (&ldquo;Meezo&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;). These Terms and Conditions (&ldquo;Terms&rdquo;) set out how you may use our mobile application, website, and related services (&ldquo;Services&rdquo;). By creating an account or using Meezo, you agree to these Terms. Please read them carefully before you start using our Services.
            </p>

            <p>
              Meezo operates as an Appointed Representative of Finexer, which is authorised and regulated by the Financial Conduct Authority (FCA) under reference number 0004319191. Finexer provides Meezo with the regulatory permissions to offer Account Information Services (AIS) and Payment Initiation Services (PIS) under the Payment Services Regulations 2017.
            </p>

            <p>Meezo currently provides its Services only within the United Kingdom.</p>

            <h2>1. Who We Are</h2>
            <p>
              Meezo is a UK-based financial technology company on a mission to simplify money management. We bring multiple bank accounts and payment features together in one secure, user-friendly app.
            </p>
            <p>Meezo is not a bank and does not hold or store customer funds.</p>
            <p>
              When you make a payment through Meezo, we initiate the payment directly from your chosen linked bank account to the recipient&rsquo;s account using secure, regulated connections. All payments and account access take place through FCA-regulated financial partners, and funds move only between banks — never through Meezo.
            </p>

            <h2>2. What Meezo Offers</h2>
            <p>Meezo allows you to:</p>
            <ul>
              <li>Connect your UK bank accounts to view balances and recent transactions in one place.</li>
              <li>Transfer money between your own linked accounts.</li>
              <li>Send and receive peer-to-peer payments using a phone number, QR code, or MeezoID.</li>
              <li>Pay small businesses or freelancers directly via QR code payments.</li>
            </ul>
            <p>
              Meezo&rsquo;s Services are designed to make everyday banking simpler, faster, and more connected — all while keeping your funds secure in your existing bank accounts.
            </p>

            <h2>3. Eligibility and Account Registration</h2>
            <p>To use Meezo, you must:</p>
            <ul>
              <li>Be at least 18 years old.</li>
              <li>Be a UK resident.</li>
              <li>Hold a valid UK bank account with a supported bank.</li>
            </ul>
            <p>
              You agree to provide accurate information when registering and to keep your account details secure. You are responsible for any actions taken through your account unless you have notified us of unauthorised use.
            </p>

            <h2>4. Data Protection and Privacy</h2>
            <p>
              Your personal and financial information is protected under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p>
              Our <Link href="/privacy-policy" style={{color: 'var(--accent-soft)'}}>Privacy Policy</Link> explains in detail how we collect, use, and protect your data. By using Meezo, you agree to the processing of your information as described there.
            </p>

            <h2>5. Security</h2>
            <p>We use industry-leading security practices, including:</p>
            <ul>
              <li>Bank-grade encryption for data in transit and at rest.</li>
              <li>Secure, regulated APIs to connect with your bank.</li>
              <li>Multi-factor authentication (MFA) for account access.</li>
              <li>Continuous monitoring for fraud and suspicious activity.</li>
            </ul>
            <p>
              If you suspect any unauthorised activity, contact us immediately at <a href="mailto:support@meezopay.co.uk">support@meezopay.co.uk</a>
            </p>

            <h2>6. Your Responsibilities</h2>
            <p>When using Meezo, you agree to:</p>
            <ul>
              <li>Use the Services only for lawful purposes.</li>
              <li>Provide accurate and current information.</li>
              <li>Not share your login credentials or access your account from compromised devices.</li>
              <li>Not interfere with or misuse Meezo&rsquo;s systems.</li>
            </ul>
            <p>
              We may suspend or terminate your account if we detect misuse, fraud, or breaches of these Terms.
            </p>

            <h2>7. Third-Party Services</h2>
            <p>
              Meezo connects securely with banks and regulated payment service providers to deliver its Services. These third parties have their own terms and privacy policies that apply in addition to ours.
            </p>
            <p>
              Meezo is not responsible for any issues caused by your bank or other external service providers.
            </p>

            <h2>8. Service Availability</h2>
            <p>
              We aim to provide reliable, continuous access to Meezo, but we cannot guarantee the Services will always be available or error-free.
            </p>
            <p>
              We may carry out updates or maintenance from time to time and will provide notice when possible.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>Meezo is not responsible for indirect, incidental, or consequential losses (including loss of data or profits).</li>
              <li>Meezo is not liable for events outside our reasonable control, such as network failures or third-party service issues.</li>
              <li>Our total liability in any 12-month period is limited to the amount you have paid to Meezo for using the Services in that period (if any).</li>
            </ul>
            <p>
              Nothing in these Terms limits our liability for fraud, gross negligence, or death/personal injury caused by our actions.
            </p>

            <h2>10. Suspension or Termination</h2>
            <p>Meezo may suspend or close your account if:</p>
            <ul>
              <li>You breach these Terms.</li>
              <li>You engage in fraud or misuse of the platform.</li>
              <li>We are required to do so by law, Finexer, or the FCA.</li>
            </ul>
            <p>
              You may close your account at any time by contacting <a href="mailto:support@meezopay.co.uk">support@meezopay.co.uk</a>.
            </p>

            <h2>11. Intellectual Property</h2>
            <p>
              All intellectual property rights in the Meezo app, website, and materials belong to Meezo or our licensors. You may not copy, modify, distribute, or commercially use any part of the Service without prior permission.
            </p>

            <h2>12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. If changes are significant, we will notify you through the app or by email. Continued use of Meezo after changes take effect constitutes acceptance of the updated Terms.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms are governed by and interpreted in accordance with the laws of England and Wales.
            </p>
            <p>Any disputes will be resolved in the courts of England and Wales.</p>

            <h2>14. Contact Us</h2>
            <p>
              If you have questions or concerns about these Terms or Meezo&rsquo;s Services, please contact us:
            </p>
            <p>
              <strong>Meezo Support</strong><br />
              Email: <a href="mailto:support@meezopay.co.uk">support@meezopay.co.uk</a><br />
              Regulatory Authority: Financial Conduct Authority (FCA) via Finexer – FCA Reference No. 0004319191
            </p>

            <div className="legal-footer">
              <p>Meezo — Simplifying life, one click at a time.</p>
              <p>Transforming how money moves. Your finances, seamlessly integrated.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
