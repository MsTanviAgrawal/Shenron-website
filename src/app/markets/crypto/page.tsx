import type { Metadata } from "next";

import MarketDetailPage from "@/components/markets/MarketDetailPage";
import { getMarketBySlug } from "../../../data/market";
export const metadata: Metadata = {
  title: "Crypto Market Analysis | Bitcoin & Ethereum Insights",
  description:
    "Explore crypto market analysis, Bitcoin and Ethereum trends, technical analysis, market structure, volatility and digital asset risk.",
  keywords: [
    "crypto market analysis",
    "Bitcoin analysis",
    "BTC USD analysis",
    "Ethereum analysis",
    "crypto trading",
    "digital asset market",
  ],
};

export default function CryptoPage() {
  const market = getMarketBySlug("crypto");

  if (!market) {
    return null;
  }

  return <MarketDetailPage market={market} />;
}