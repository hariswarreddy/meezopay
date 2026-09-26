import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import HeroVideo from "@/components/HeroVideo";
import InlineVideo from "@/components/InlineVideo";
import SectionVideo from "@/components/SectionVideo";
import GetMeezoButton from "@/components/GetMeezoButton";

export const metadata: Metadata = {
  title: "Meezo — All Your UK Banks, One App",
  description: "Connect your UK bank accounts, see every balance in one place, and send, split or move money without switching apps. Free to join.",
  openGraph: {
    title: "Meezo — All Your UK Banks, One App",
    description: "Connect your UK bank accounts, see every balance in one place, and send, split or move money without switching apps. Free to join.",
    type: "website",
  },
};

const jsonLd0 = {"@context": "https://schema.org", "@type": "Organization", "name": "Meezo", "url": "https://www.meezopay.com/", "logo": "https://www.meezopay.com/meezo.webp", "sameAs": ["https://www.linkedin.com/company/meezopay", "https://x.com/meezopay", "https://www.instagram.com/meezopay"]};
const jsonLd1 = {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Meezo", "operatingSystem": "iOS", "applicationCategory": "FinanceApplication", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "GBP"}};
const jsonLd2 = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is Meezo?", "acceptedAnswer": {"@type": "Answer", "text": "Meezo is a UK app that connects to your existing bank accounts through Open Banking, so you can see every balance and transaction in one place and send, split or move money without switching apps."}}, {"@type": "Question", "name": "Is Meezo a bank?", "acceptedAnswer": {"@type": "Answer", "text": "No. Meezo doesn't hold your money. It connects to the UK bank accounts you already have and initiates payments on your behalf \u2014 your bank processes and holds the funds."}}, {"@type": "Question", "name": "Does Meezo hold my money?", "acceptedAnswer": {"@type": "Answer", "text": "No. Your money stays in your own bank accounts at all times \u2014 Meezo only initiates the payment; your bank carries it out."}}, {"@type": "Question", "name": "Is Meezo free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, it's free to join and use for personal banking."}}, {"@type": "Question", "name": "Is Meezo available outside the UK?", "acceptedAnswer": {"@type": "Answer", "text": "Not yet \u2014 Meezo currently operates within the UK only."}}]};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd0} />
      <JsonLd data={jsonLd1} />
      <JsonLd data={jsonLd2} />
      {/* 01 HERO — full-bleed background video */}
      <section className="hero hero--video">
        <HeroVideo />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Your money. One simpler place.</p>
            <h1>Every bank you use, <em>finally in one place.</em></h1>
            <p className="dek">Connect your UK bank accounts, see every balance and transaction together, and send, split or move money — without switching apps to do it.</p>
            <div className="btn-row">
              <GetMeezoButton />
              <a href="#how-it-works" className="btn btn-secondary">See how it works</a>
            </div>
            <div className="hero-proof">
              <div><b>4 ways to pay</b>Phone, QR, link, Meezo ID</div>
              <div><b>FCA-regulated</b>Open Banking infrastructure</div>
              <div><b>UK banks</b>All major banks supported</div>
            </div>
          </div>
          {/* <div className="phone-stage">
            <div className="phone"><img src="/assets/ss_dashboard.jpg" alt="Meezo app home screen showing three connected bank accounts, a money transfer grid and recent transactions" /></div>
            <div className="float-card fc-1"><div className="dot">S</div><div><b>+£24.00</b><span>From Sara · just now</span></div></div>
            <div className="float-card fc-2"><div className="dot">£</div><div><b>Split saved</b><span>Dinner · 4 people</span></div></div>
          </div> */}
        </div>
      </section>

      {/* 02 THE PROBLEM */}
      <section className="tight">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Sound familiar?</p>
            <h2>Your money is everywhere except one place.</h2>
            <p>A current account here, a second bank there, a P2P app for splitting things, a screenshot of who owes what. None of them talk to each other — so you do the reconciling by hand.</p>
          </div>

          <div className="scatter" aria-hidden="true">
            <div className="chip" style={{top: '6%', left: '2%'}}><i style={{background: 'var(--hsbc)'}}></i>HSBC current account</div>
            <div className="chip" style={{top: '2%', left: '46%'}}><i style={{background: 'var(--lloyds)'}}></i>Lloyds savings</div>
            <div className="chip" style={{top: '14%', right: '2%'}}><i style={{background: 'var(--natwest)'}}></i>NatWest joint account</div>
            <div className="chip" style={{top: '46%', left: '14%'}}><i style={{background: '#3b82f6'}}></i>"Who owes what" group chat</div>
            <div className="chip" style={{top: '50%', right: '10%'}}><i style={{background: 'var(--accent)'}}></i>A P2P app, just for splitting</div>
            <div className="chip" style={{top: '76%', left: '36%', background: 'var(--accent-wash)', borderColor: 'rgba(128,54,251,0.4)', color: 'var(--text)'}}><i style={{background: 'var(--accent-2)'}}></i>You, reconciling it all in your head</div>
          </div>
         
          {/* <SectionVideo src="https://ik.imagekit.io/hariswarreddy/meezo/banks.mp4" className="banks-video" /> */}
          <div className="arrow-down">↓ &nbsp; Meezo brings it together</div>
        </div>
      </section>

      {/* 03 MULTI BANK */}
      <section id="multi-bank">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">One app, every bank</p>
            <h2>All your banks. One clear view.</h2>
            <p>Connect your UK bank accounts through Open Banking and see every balance and transaction together — nothing moves out of your existing banks to get there.</p>
          </div>
          <div className="bank-row">
            <div className="bank-chip"><img src="/assets/logos/hsbc_personal.png" alt="HSBC" className="bank-swatch" style={{objectFit: 'cover'}} />HSBC</div>
            <div className="bank-chip"><img src="/assets/logos/barclays_personal.png" alt="Barclays" className="bank-swatch" style={{objectFit: 'cover'}} />Barclays</div>
            <div className="bank-chip"><img src="/assets/logos/lloyds_personal.png" alt="Lloyds" className="bank-swatch" style={{objectFit: 'cover'}} />Lloyds</div>
            <div className="bank-chip"><img src="/assets/logos/monzo.png" alt="Monzo" className="bank-swatch" style={{objectFit: 'cover'}} />Monzo</div>
            <div className="bank-chip"><img src="/assets/logos/nationwide.png" alt="Nationwide" className="bank-swatch" style={{objectFit: 'cover'}} />Nationwide</div>
            <div className="bank-chip"><img src="/assets/logos/revolut.png" alt="Revolut" className="bank-swatch" style={{objectFit: 'cover'}} />Revolut</div>
            <div className="bank-chip"><img src="/assets/logos/starling.png" alt="Starling" className="bank-swatch" style={{objectFit: 'cover'}} />Starling</div>
            <div className="bank-chip"><img src="/assets/logos/tsb.png" alt="TSB" className="bank-swatch" style={{objectFit: 'cover'}} />TSB</div>
            <div className="bank-chip"><span className="bank-swatch" style={{background: 'var(--surface-3)'}}></span>+ all major UK banks</div>
          </div>
          <SectionVideo src="https://ik.imagekit.io/hariswarreddy/meezo/banks.mp4" className="banks-video" />
          <div className="add-bank-section" style={{textAlign: 'center', marginTop: '64px'}}>
            <div style={{maxWidth: '600px', margin: '0 auto 32px'}}>
              <h3 style={{fontSize: '24px', marginBottom: '12px'}}>Add an account in under a minute</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '16px'}}>Search your bank, confirm through their own secure login, and it appears alongside every other account you've connected — balance, recent activity, all of it.</p>
            </div>
            <div className="phone-stage">
              <InlineVideo src="https://ik.imagekit.io/hariswarreddy/meezo/add_bank.MP4" className="add-bank-video" />
            </div>
          </div>
        </div>
      </section>

      {/* 04 SEND MONEY */}
      <section id="payments">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Four ways to pay</p>
            <h2>Send money your way.</h2>
            <p>Pick whichever's fastest for the person you're paying — Meezo works out the rest.</p>
          </div>
          <div data-tabs>
            <div className="tabs" role="tablist">
              <button className="tab-btn" role="tab" aria-selected="true" data-target="panel-phone">Phone number</button>
              <button className="tab-btn" role="tab" aria-selected="false" data-target="panel-id">Meezo ID</button>
              <button className="tab-btn" role="tab" aria-selected="false" data-target="panel-self">Self transfer</button>
              <button className="tab-btn" role="tab" aria-selected="false" data-target="panel-bank">Bank transfer</button>
            </div>
            <div className="tab-panels">
              <div>
                <div className="tab-panel active" id="panel-phone">
                  <h3>Send with just a phone number</h3>
                  <p>No sort code, no account number. Enter their phone number, choose which of your connected accounts to pay from, and send. QR codes and payment links are one tap further, from the same screen.</p>
                </div>
                <div className="tab-panel" id="panel-id">
                  <h3>Pay using a Meezo ID, not your bank details</h3>
                  <p>Every Meezo user gets a unique ID (like <code>bobsimons112@meezo</code>) so you can get paid without handing out your phone number or sort code.</p>
                </div>
                <div className="tab-panel" id="panel-self">
                  <h3>Move money between your own accounts</h3>
                  <p>Pick which of your connected banks to move money between, and it's done instantly — no second app required.</p>
                </div>
                <div className="tab-panel" id="panel-bank">
                  <h3>Or send the traditional way</h3>
                  <p>Have someone's sort code and account number instead? Enter their details directly, same as a normal bank transfer.</p>
                </div>
              </div>
              <div className="tab-visual">
                <div id="visual-phone" className="tp-visual" data-for="panel-phone" style={{display: 'block'}}>
                  <InlineVideo src="https://ik.imagekit.io/hariswarreddy/meezo/meezo-id.mp4" className="tab-video-container" />
                </div>
                <div id="visual-id" className="tp-visual" data-for="panel-id" style={{display: 'none'}}>
                  <InlineVideo src="https://ik.imagekit.io/hariswarreddy/meezo/meezo_id.MP4" className="tab-video-container" />
                </div>
                <div id="visual-self" className="tp-visual" data-for="panel-self" style={{display: 'none'}}>
                  <InlineVideo src="https://ik.imagekit.io/hariswarreddy/meezo/self-transfer.mp4" className="tab-video-container" />
                </div>
                <div id="visual-bank" className="tp-visual" data-for="panel-bank" style={{display: 'none'}}>
                  <InlineVideo src="https://ik.imagekit.io/hariswarreddy/meezo/bank_transfer.mp4" className="tab-video-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 05 SPLIT BILLS */}
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

      {/* 06 TRANSACTIONS */}
      <section >
        <div className="container" style={{textAlign: 'center', maxWidth: '680px', margin: '0 auto'}}>
          <div>
            <p className="eyebrow" style={{justifyContent: 'center'}}>One view, every account</p>
            <h2 style={{fontSize: 'clamp(26px,4vw,36px)'}}>See where your money is going.</h2>
            <p className="measure" style={{color: 'var(--text-dim)', fontSize: '16px', margin: '16px auto 0'}}>Every connected account's transactions, searchable and in one feed — no more opening three apps to work out what you actually spent this month.</p>
            <div className="callout" style={{marginTop: '32px', textAlign: 'left', marginInline: 'auto', maxWidth: '600px'}}>
              <p><strong>Coming soon:</strong> AI-powered spending insights that flag patterns across all your accounts automatically. Not live yet — today, Meezo gives you the unified transaction view above.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 SECURITY */}
      <section id="security-preview">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Security</p>
            <h2>Simple on the surface. Serious underneath.</h2>
            <p>Meezo doesn't hold your money — it stays in your own bank accounts. Here's what actually protects it.</p>
          </div>
          <div className="security-grid">
            <div className="sec-row" data-reveal>
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sec-svg sec-lock">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" className="lock-shackle"></path>
                </svg>
              </div>
              <div><h4>Encrypted, end to end</h4><p>Your data is encrypted in transit and at rest, both inside the app and between Meezo and your bank.</p></div>
            </div>
            <div className="sec-row" data-reveal>
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sec-svg sec-shield">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4" className="shield-check"></path>
                </svg>
              </div>
              <div><h4>Multi-factor authentication</h4><p>A second check on sign-in and whenever you add a new payee or connect a new account.</p></div>
            </div>
            <div className="sec-row" data-reveal>
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sec-svg sec-bank">
                  <line x1="3" x2="21" y1="22" y2="22" />
                  <line x1="6" x2="6" y1="18" y2="11" className="bank-pillar p1" />
                  <line x1="10" x2="10" y1="18" y2="11" className="bank-pillar p2" />
                  <line x1="14" x2="14" y1="18" y2="11" className="bank-pillar p3" />
                  <line x1="18" x2="18" y1="18" y2="11" className="bank-pillar p4" />
                  <polygon points="12 2 20 7 4 7" />
                </svg>
              </div>
              <div><h4>Regulated Open Banking, not screen-scraping</h4><p>Every bank connection runs through Finexer Ltd, authorised and regulated by the FCA — never a shared password.</p></div>
            </div>
            <div className="sec-row" data-reveal>
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sec-svg sec-card">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10" />
                  <path d="M16 15h.01" className="card-chip" strokeWidth="3" />
                </svg>
              </div>
              <div><h4>Your money never sits with Meezo</h4><p>Meezo initiates the payment; your bank processes and holds the funds, exactly as it always has.</p></div>
            </div>
          </div>
          <div style={{marginTop: '40px', textAlign: 'center'}}><Link href="/security" className="btn btn-secondary">Read the full security overview →</Link></div>
        </div>
      </section>

      {/* 08 WHY MEEZO */}
      <section id="why-meezo">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why Meezo</p>
            <h2>Not a new bank. The layer across the ones you have.</h2>
          </div>
          <div className="grid-4">
            <div className="card" data-reveal><span className="num">01</span><h3>One place</h3><p>Every bank relationship, in a single dashboard.</p></div>
            <div className="card" data-reveal><span className="num">02</span><h3>Less switching</h3><p>Stop jumping between banking apps to piece your finances together.</p></div>
            <div className="card" data-reveal><span className="num">03</span><h3>More control</h3><p>See where your money actually is and where it's going, clearly.</p></div>
            <div className="card" data-reveal><span className="num">04</span><h3>Built around you</h3><p>Four ways to pay, because people don't all pay the same way.</p></div>
          </div>
        </div>
      </section>

      {/* 09 WHO IT'S FOR */}
      <section>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Who Meezo is for</p>
            <h2>Built for real financial lives, not just one kind.</h2>
          </div>
          <div className="grid-3">
            <div className="audience-card"><h3>Individuals</h3><p>Manage every account, transfer, and everyday payment from one place.</p></div>
            <div className="audience-card"><h3>Friends &amp; families</h3><p>Send money instantly and split shared costs without the awkward follow-up.</p></div>
            <div className="audience-card soon"><span className="tag-soon">Coming soon</span><h3>Businesses</h3><p>Multiple businesses, multiple accounts, and QR payments with near-instant settlement. <Link href="/business" style={{color: 'var(--accent-soft)'}}>See what's coming →</Link></p></div>
          </div>
        </div>
      </section>

      {/* 10 HOW IT WORKS */}
      <section id="how-it-works">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>Three steps. That's it.</h2>
          </div>
          <div className="steps-3">
            <div className="step-item" data-reveal><span className="stepnum">01 — Connect</span><h3>Connect your accounts</h3><p>Securely link the UK bank accounts you already use, through Open Banking.</p></div>
            <div className="step-item" data-reveal><span className="stepnum">02 — Manage</span><h3>See it all together</h3><p>Balances, transactions and payments, in one dashboard instead of five apps.</p></div>
            <div className="step-item" data-reveal><span className="stepnum">03 — Move</span><h3>Send, split, transfer</h3><p>Move money your way — phone number, QR, link, Meezo ID or between your own accounts.</p></div>
          </div>
        </div>
      </section>

      {/* 11 APP EXPERIENCE */}
      {/* <section>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Inside the app</p>
            <h2>The real screens, not a mockup.</h2>
          </div>
        </div>
        <div className="container">
          <div className="strip">
            <div className="strip-item"><img src="/assets/ss_dashboard.jpg" alt="Home dashboard" /><div className="cap"><b>Home</b>Every connected account at a glance</div></div>
            <div className="strip-item"><img src="/assets/ss_accounts.jpg" alt="Accounts and transactions" /><div className="cap"><b>Accounts</b>One feed for every transaction</div></div>
            <div className="strip-item"><img src="/assets/ss_add_bank.jpg" alt="Add bank account" /><div className="cap"><b>Connect</b>Add any major UK bank</div></div>
            <div className="strip-item"><img src="/assets/ss_qr_code.jpg" alt="Meezo ID and QR code" /><div className="cap"><b>Meezo ID</b>Get paid without sharing your bank details</div></div>
            <div className="strip-item"><img src="/assets/ss_payment_link.jpg" alt="Payment link and QR" /><div className="cap"><b>Request</b>Share a link or a code, get paid</div></div>
            <div className="strip-item"><img src="/assets/fg_split_pending3.jpg" alt="Pending splits with progress rings" /><div className="cap"><b>Split bills</b>See collection progress at a glance</div></div>
            <div className="strip-item"><img src="/assets/fg_bank_transfer.jpg" alt="Bank transfer screen" /><div className="cap"><b>Bank transfer</b>Sort code and account number, the usual way</div></div>
          </div>
        </div>
      </section> */}

      {/* 12 FUTURE */}
      <section className="tight">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What's next</p>
            <h2>The future of Meezo.</h2>
            <p>The vision is a connected financial life — these aren't live in the app today, but they're where Meezo is headed.</p>
          </div>
          <div className="grid-3">
            <div className="card"><span className="tag-soon">Coming soon</span><h3 style={{marginTop: '12px'}}>AI-powered insights</h3><p>Spending patterns surfaced automatically across every connected account.</p></div>
            <div className="card"><span className="tag-soon">Coming soon</span><h3 style={{marginTop: '12px'}}>Meezo Touch</h3><p>Tap-to-pay between phones, no card reader needed.</p></div>
            <div className="card"><span className="tag-soon">Coming soon</span><h3 style={{marginTop: '12px'}}>Meezo for Business</h3><p>Multiple businesses, QR payments, and near-instant settlement. <Link href="/business" style={{color: 'var(--accent-soft)'}}>Join the waitlist →</Link></p></div>
          </div>
        </div>
      </section>

      {/* 13 FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Questions, answered plainly.</h2>
          </div>
          <div data-faq-group className="faq-group">
            <div className="faq-item open"><button className="faq-q">What is Meezo?<span className="plus"></span></button><div className="faq-a"><p>Meezo is a UK app that connects to your existing bank accounts through Open Banking, so you can see every balance and transaction in one place and send, split or move money without switching apps.</p></div></div>
            <div className="faq-item"><button className="faq-q">Is Meezo a bank?<span className="plus"></span></button><div className="faq-a"><p>No. Meezo doesn't hold your money. It connects to the UK bank accounts you already have and initiates payments on your behalf — your bank processes and holds the funds, exactly as it always has.</p></div></div>
            <div className="faq-item"><button className="faq-q">Which UK banks does Meezo support?<span className="plus"></span></button><div className="faq-a"><p>Meezo supports all the UK's major banks for connection, including HSBC, Lloyds, NatWest, Halifax, Nationwide, Royal Bank of Scotland, Santander, Revolut and more — search for your bank in the app to connect it.</p></div></div>
            <div className="faq-item"><button className="faq-q">Can I connect multiple bank accounts?<span className="plus"></span></button><div className="faq-a"><p>Yes — connect as many UK bank accounts as you hold and see them together in one dashboard.</p></div></div>
            <div className="faq-item"><button className="faq-q">Can I send money using a phone number?<span className="plus"></span></button><div className="faq-a"><p>Yes. Enter the recipient's phone number, choose which connected account to pay from, and send — no sort code or account number needed.</p></div></div>
            <div className="faq-item"><button className="faq-q">What is Meezo ID?<span className="plus"></span></button><div className="faq-a"><p>A unique ID (for example <code>@yourname</code>) that lets people pay you without you sharing your phone number or bank details.</p></div></div>
            <div className="faq-item"><button className="faq-q">How do Meezo payment links and QR codes work?<span className="plus"></span></button><div className="faq-a"><p>Generate a QR code or link for a specific amount from the payments screen, then share it or have it scanned — the payment settles straight into your connected bank account.</p></div></div>
            <div className="faq-item"><button className="faq-q">Can I split bills with Meezo?<span className="plus"></span></button><div className="faq-a"><p>Yes — split any bill evenly or by custom amount, send requests, and track who's paid and who hasn't until it's settled.</p></div></div>
            <div className="faq-item"><button className="faq-q">Can I transfer money between my own bank accounts?<span className="plus"></span></button><div className="faq-a"><p>Yes, instantly, from the self-transfer option — no need to open a separate banking app.</p></div></div>
            <div className="faq-item"><button className="faq-q">Is Meezo safe?<span className="plus"></span></button><div className="faq-a"><p>Your data is encrypted in transit and at rest, every new payee or account needs a second confirmation, and every bank connection runs through Finexer Ltd, which is authorised and regulated by the FCA.</p></div></div>
            <div className="faq-item"><button className="faq-q">Does Meezo hold my money?<span className="plus"></span></button><div className="faq-a"><p>No. Your money stays in your own bank accounts at all times — Meezo only initiates the payment; your bank carries it out.</p></div></div>
            <div className="faq-item"><button className="faq-q">How does Meezo use Open Banking?<span className="plus"></span></button><div className="faq-a"><p>Open Banking lets Meezo see your balances and transactions, and initiate payments, directly with your bank's permission — no shared passwords and no screen-scraping.</p></div></div>
            <div className="faq-item"><button className="faq-q">Is Meezo free?<span className="plus"></span></button><div className="faq-a"><p>Yes, it's free to join and use for personal banking.</p></div></div>
            <div className="faq-item"><button className="faq-q">Who can use Meezo?<span className="plus"></span></button><div className="faq-a"><p>Anyone in the UK with a bank account — individuals, friends and families splitting costs, and soon, businesses.</p></div></div>
            <div className="faq-item"><button className="faq-q">Is Meezo available outside the UK?<span className="plus"></span></button><div className="faq-a"><p>Not yet — Meezo currently operates within the UK only.</p></div></div>
            <div className="faq-item"><button className="faq-q">How do I get the Meezo app?<span className="plus"></span></button><div className="faq-a"><p>Download Meezo free from the App Store and connect your first bank account in a couple of minutes.</p></div></div>
          </div>
        </div>
      </section>


      {/* 14 FINAL CTA */}
      <section>
        <div className="container">
          <div className="final-cta">
            <p className="eyebrow" style={{justifyContent: 'center'}}>Ready when you are</p>
            <h2>Your money doesn't need more apps. It needs one that already speaks to all of them.</h2>
            <p>Free to join. Connect your first bank account in under a minute.</p>
            <div className="btn-row"><GetMeezoButton /></div>
          </div>
        </div>
      </section>
    </>
  );
}
