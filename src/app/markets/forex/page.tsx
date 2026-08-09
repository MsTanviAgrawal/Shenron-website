import type { Metadata } from "next";

import MarketDetailPage from "@/components/markets/MarketDetailPage";
import { getMarketBySlug } from "../../../data/market";
export const metadata: Metadata = {
  title: "Forex Market Analysis | EUR/USD & Currency Markets",
  description:
    "Explore forex market analysis, currency pairs, market structure, trading sessions, technical analysis and risk awareness with Shenron.",
  keywords: [
    "forex market analysis",
    "forex trading",
    "EUR USD analysis",
    "currency market",
    "forex technical analysis",
    "forex market structure",
  ],
};

export default function ForexPage() {
  const market = getMarketBySlug("forex");

  if (!market) {
    return null;
  }

  return <MarketDetailPage market={market} />;
}