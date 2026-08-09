import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://shenron-next.vercel.app",
  ),

  title: {
    default:
      "Shenron | Market Intelligence for Modern Traders",
    template: "%s | Shenron",
  },

  description:
    "Shenron is a modern market intelligence platform for forex, gold, crypto and global indices, combining market context, technical analysis, risk awareness and trading education.",

  keywords: [
    "forex trading",
    "forex market analysis",
    "market intelligence",
    "trading dashboard",
    "technical analysis",
    "gold trading",
    "XAU/USD analysis",
    "crypto market analysis",
    "Bitcoin market analysis",
    "indices analysis",
    "trading education",
    "risk management",
    "market structure",
    "trading tools",
  ],

  authors: [
    {
      name: "Shenron",
    },
  ],

  creator: "Shenron",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Shenron",
    title:
      "Shenron | Market Intelligence for Modern Traders",
    description:
      "Explore market context, technical analysis, risk insights and trading education for forex, gold, crypto and global indices.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          min-h-screen
          bg-[#070A0F]
          font-sans
          text-white
          antialiased
        `}
      >
        <SiteChrome>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}