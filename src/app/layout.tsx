import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteBehavior from "@/components/SiteBehavior";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.meezopay.com"),
  title: {
    default: "Meezo — All Your UK Banks, One App",
    template: "%s",
  },
  description:
    "Connect your UK bank accounts, see every balance in one place, and send, split or move money without switching apps. Free to join.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SiteBehavior />
      </body>
    </html>
  );
}
