import type { Metadata } from "next";

import MarketDetailPage from "@/components/markets/MarketDetailPage";
import { getMarketBySlug } from "../../../data/market";

export const metadata: Metadata = {
  title: "Gold Market Analysis | XAU/USD Trading Insights",
  description:
    "Explore gold market analysis, XAU/USD technical levels, price action, market structure, volatility and risk awareness with Orvix.",
  keywords: [
    "gold market analysis",
    "XAU USD analysis",
    "gold trading",
    "gold price analysis",
    "precious metals",
    "XAU USD technical analysis",
  ],
};

export default function GoldPage() {
  const market = getMarketBySlug("gold");

  if (!market) {
    return null;
  }

  return <MarketDetailPage market={market} />;
}