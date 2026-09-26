import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import GetMeezoButton from "@/components/GetMeezoButton";
import InlineVideo from "@/components/InlineVideo";

export const metadata: Metadata = {
  title: "Send & Receive Money — Meezo",
  description:
    "Pay by phone number, QR code, payment link, Meezo ID or bank transfer. Instant transfers between UK bank accounts.",
  openGraph: {
    title: "Send & Receive Money — Meezo",
    description:
      "Pay by phone number, QR code, payment link, Meezo ID or bank transfer. Instant transfers between UK bank accounts.",
    type: "website",
  },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.meezopay.com/",
    },
    { "@type": "ListItem", position: 2, name: "Send & Receive Money" },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd0} />
      <section className="page-hero">
        <div className="container">
          <p className="crumbs">
            <Link href="/">Home</Link> / Payments
          </p>
          <p className="eyebrow">Send &amp; receive money</p>
          <h1>Four ways to pay. Pick whichever fits.</h1>
          <p>
            Every method settles the same way — instantly, straight into a
            connected bank account. The only thing that changes is how you start
            it.
          </p>
        </div>
      </section>

      <section id="phone-number" className="tight">
        <div className="container hero-grid" style={{ alignItems: "center" }}>
          <div>
            <p className="eyebrow">Phone number</p>
            <h2 style={{ fontSize: "clamp(24px,3.6vw,32px)" }}>
              Send with just a phone number.
            </h2>
            <p
              className="measure"
              style={{ color: "var(--text-dim)", marginTop: "14px" }}
            >
              No sort code, no account number. Enter their phone number, choose
              which connected account to pay from, and send.
            </p>
          </div>
          <div className="phone-stage">
            <InlineVideo
              src="https://ik.imagekit.io/hariswarreddy/meezo/meezo-id.mp4"
              className="add-bank-video"
            />
          </div>
        </div>
      </section>

      <section id="qr-links" className="tight">
        <div className="container hero-grid" style={{ alignItems: "center" }}>
          <div className="phone-stage">
            <InlineVideo
              src="https://ik.imagekit.io/hariswarreddy/meezo/IMG_2048.MP4"
              className="add-bank-video"
            />
          </div>
          <div style={{ order: "1" }}>
            <p className="eyebrow">QR code &amp; payment link</p>
            <h2 style={{ fontSize: "clamp(24px,3.6vw,32px)" }}>
              Scan a code, or share a link.
            </h2>
            <p
              className="measure"
              style={{ color: "var(--text-dim)", marginTop: "14px" }}
            >
              Reached from the phone-number flow: generate a QR code or payment
              link for a specific amount, then share it however's easiest — hand
              over a phone to scan, or send the link by text, WhatsApp or email.
              It settles straight into your bank.
            </p>
          </div>
        </div>
      </section>

      <section id="meezo-id" className="tight">
        <div className="container hero-grid" style={{ alignItems: "center" }}>
          <div>
            <p className="eyebrow">Meezo ID</p>
            <h2 style={{ fontSize: "clamp(24px,3.6vw,32px)" }}>
              Get paid without sharing your bank details.
            </h2>
            <p
              className="measure"
              style={{ color: "var(--text-dim)", marginTop: "14px" }}
            >
              Every Meezo user has a unique ID — share that instead of your
              phone number or account details, and get paid just the same.
            </p>
          </div>
         <div className="phone-stage">
            <InlineVideo
              src="https://ik.imagekit.io/hariswarreddy/meezo/meezo_id.MP4"
              className="add-bank-video"
            />
          </div>
        </div>
      </section>

      <section id="self-transfer" className="tight">
        <div className="container hero-grid" style={{ alignItems: "center" }}>
          <div className="phone-stage">
            <InlineVideo
              src="https://ik.imagekit.io/hariswarreddy/meezo/self-transfer.mp4"
              className="add-bank-video"
            />
          </div>
          <div style={{ order: "1" }}>
            <p className="eyebrow">Self transfer</p>
            <h2 style={{ fontSize: "clamp(24px,3.6vw,32px)" }}>
              Move money between your own accounts.
            </h2>
            <p
              className="measure"
              style={{ color: "var(--text-dim)", marginTop: "14px" }}
            >
              Pick which of your connected banks to move money between — it
              shifts instantly, without opening a second banking app to do it.
            </p>
          </div>
        </div>
      </section>

      <section id="bank-transfer" className="tight">
        <div className="container hero-grid" style={{ alignItems: "center" }}>
          <div>
            <p className="eyebrow">Bank transfer</p>
            <h2 style={{ fontSize: "clamp(24px,3.6vw,32px)" }}>
              Or send the traditional way.
            </h2>
            <p
              className="measure"
              style={{ color: "var(--text-dim)", marginTop: "14px" }}
            >
              Have someone's account number and sort code instead? Enter their
              details directly — same as any normal bank transfer, just from
              inside Meezo.
            </p>
          </div>
            <div className="phone-stage">
            <InlineVideo
              src="https://ik.imagekit.io/hariswarreddy/meezo/bank_transfer.mp4"
              className="add-bank-video"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Payments, answered.</h2>
          </div>
          <div data-faq-group className="faq-group">
            <div className="faq-item open">
              <button className="faq-q">
                Can I send money using a phone number?
                <span className="plus"></span>
              </button>
              <div className="faq-a">
                <p>
                  Yes. Enter the recipient's phone number, choose which
                  connected account to pay from, and send.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                How do payment links and QR codes work?
                <span className="plus"></span>
              </button>
              <div className="faq-a">
                <p>
                  Generate one for a specific amount from the phone-number flow,
                  then share or scan it — the payment settles directly into the
                  connected bank account.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                What is Meezo ID?<span className="plus"></span>
              </button>
              <div className="faq-a">
                <p>
                  A unique ID that lets someone pay you without you sharing your
                  phone number or bank details.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                Can I still use a sort code and account number?
                <span className="plus"></span>
              </button>
              <div className="faq-a">
                <p>
                  Yes — Bank transfer is one of the four ways to pay, for when
                  that's what you've been given.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                Is there a fee to send money?<span className="plus"></span>
              </button>
              <div className="faq-a">
                <p>
                  Meezo is free to join and use for personal payments between UK
                  bank accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="final-cta">
            <h2>Send your first payment in minutes.</h2>
            <div className="btn-row">
              <GetMeezoButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
