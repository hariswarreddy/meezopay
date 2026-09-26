import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="brand"><img src="/assets/logo.png" alt="Meezo" /><span>Meezo</span></Link>
              <p>Every UK bank you use, finally in one place.</p>
              <div className="social-row">
                <a href="https://www.linkedin.com/company/meezopay" aria-label="LinkedIn">in</a>
                <a href="https://x.com/meezopay" aria-label="X">𝕏</a>
                <a href="https://www.instagram.com/meezopay" aria-label="Instagram">◎</a>
              </div>
            </div>
            <div><h5>Product</h5>
              <Link href="/#multi-bank">All-in-one banking</Link>
              <Link href="/personal">Personal</Link>
              <Link href="/payments">Payments</Link>
              <Link href="/split-bills">Split bills</Link>
              <Link href="/security">Security</Link>
            </div>
            <div><h5>Company</h5>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/business">Business (soon)</Link>
            </div>
            <div><h5>Resources</h5>
              <Link href="/faq">Help &amp; FAQ</Link>
              <Link href="/security">Security</Link>
            </div>
            <div><h5>Legal</h5>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms &amp; conditions</Link>
              <Link href="/contact#complaints">Complaints</Link>
            </div>
          </div>
          <hr className="divider" />
          <div className="footer-legal">
            <p>Meezo Ltd is registered in England and Wales, company number 15947872. Registered office: 28 Riverview Court, Old Bellgate Place, London, E14 3SY. Meezo Ltd acts as an agent of Finexer Ltd, which is authorised and regulated by the Financial Conduct Authority under the Payment Services Regulations 2017 for the provision of Account Information Services and Payment Initiation Services (Firm Reference Number: 1041872). Meezo does not hold customer funds — money stays in your own bank accounts at all times. © 2026 Meezo Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
