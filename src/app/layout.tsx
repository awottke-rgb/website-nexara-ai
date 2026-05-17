import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexara AI - KI-gestützte Digitalagentur",
  description: "Wir entwickeln performante Websites und KI-Lösungen für kleine und mittlere Unternehmen.",
};

import LeadModal from "@/components/nexara/LeadModal";
import MobileStickyCTA from "@/components/nexara/MobileStickyCTA";
import ScrollProgress from "@/components/nexara/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-navy text-foreground">
        <ScrollProgress />
        <div className="edge-glow" />
        {children}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
