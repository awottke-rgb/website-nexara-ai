import type { Metadata } from "next";
import { Geist, Geist_Mono, Epilogue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexara-ai.de"),
  title: "Nexara AI - KI-gestützte Digitalagentur",
  description: "Ich entwickle performante Websites und KI-Lösungen für kleine und mittlere Unternehmen.",
  openGraph: {
    title: "Nexara AI - KI-gestützte Digitalagentur",
    description: "Ich entwickle performante Websites und KI-Lösungen für kleine und mittlere Unternehmen.",
    url: "https://nexara-ai.de",
    siteName: "Nexara AI",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexara AI - KI-gestützte Digitalagentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexara AI - KI-gestützte Digitalagentur",
    description: "Ich entwickle performante Websites und KI-Lösungen für kleine und mittlere Unternehmen.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
};

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
      className={`${geistSans.variable} ${geistMono.variable} ${epilogue.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-navy text-foreground relative">
        {/* Background Grid & Ambient Glows */}
        <div className="fixed inset-0 grid-pattern pointer-events-none z-0 opacity-70" />
        <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none z-0 animate-glow-blue-1" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none z-0 animate-glow-blue-2" />
        <div className="fixed top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none z-0 animate-glow-purple" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <ScrollProgress />
          <div className="edge-glow" />
          {children}
          <MobileStickyCTA />
        </div>
      </body>
    </html>
  );
}
