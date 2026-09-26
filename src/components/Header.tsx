"use client";

import Link from "next/link";
import { useState, type MouseEvent } from "react";
import GetMeezoButton from "./GetMeezoButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    const next = !open;
    setOpen(next);
    if (typeof document !== "undefined") {
      document.body.style.overflow = next ? "hidden" : "";
    }
  }

  function closeMenu() {
    setOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }

  function handleMobileNavClick(e: MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;
    if (target.tagName === "A") closeMenu();
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="inner">
          <Link href="/" className="brand"><img src="/assets/logo.png" alt="Meezo" /><span>Meezo</span></Link>
          <nav className="main-nav" aria-label="Primary">
            <div className="navgroup" tabIndex={0}>
              <button type="button">Product <i className="chev"></i></button>
              <div className="dropdown">
                <Link href="/#multi-bank">All-in-one banking<small>Every account, one view</small></Link>
                <Link href="/payments">Send &amp; receive money<small>Phone, QR, link, Meezo ID</small></Link>
                <Link href="/split-bills">Split bills<small>Request, track, settle</small></Link>
                <Link href="/payments#self-transfer">Self transfer<small>Between your own accounts</small></Link>
              </div>
            </div>
            <div className="navgroup" tabIndex={0}>
              <button type="button">Why Meezo <i className="chev"></i></button>
              <div className="dropdown">
                <Link href="/#why-meezo">Why Meezo<small>What makes it different</small></Link>
                <Link href="/security">Security<small>How your money is protected</small></Link>
                <Link href="/#how-it-works">How it works<small>Connect, manage, move</small></Link>
              </div>
            </div>
            <div className="navgroup" tabIndex={0}>
              <button type="button">For you <i className="chev"></i></button>
              <div className="dropdown">
                <Link href="/personal">Personal<small>Everyday money, sorted</small></Link>
                <Link href="/business">Business<small>Coming soon — join the waitlist</small></Link>
              </div>
            </div>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="header-cta">
            <Link href="/contact" className="btn btn-secondary btn-sm">See how it works</Link>
            <GetMeezoButton className="btn btn-primary btn-sm" text="Get Meezo" />
            <button type="button" className="nav-toggle" aria-label="Open menu" aria-expanded={open} onClick={toggleMenu}>☰</button>
          </div>
        </div>
      </header>

      <nav className={"mobile-nav" + (open ? " open" : "")} aria-label="Mobile" onClick={handleMobileNavClick}>
        <div className="grp-label">Product</div>
        <Link href="/#multi-bank">All-in-one banking</Link>
        <Link href="/payments">Send &amp; receive money</Link>
        <Link href="/split-bills">Split bills</Link>
        <div className="grp-label">Why Meezo</div>
        <Link href="/security">Security</Link>
        <Link href="/#how-it-works">How it works</Link>
        <div className="grp-label">For you</div>
        <Link href="/personal">Personal</Link>
        <Link href="/business">Business</Link>
        <div className="grp-label">Company</div>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <GetMeezoButton />
      </nav>
    </>
  );
}
