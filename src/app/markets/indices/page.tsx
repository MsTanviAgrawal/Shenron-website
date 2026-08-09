import type { Metadata } from "next";

import MarketDetailPage from "../../../components/markets/MarketDetailPage";
import { getMarketBySlug } from "../../../data/market";

export const metadata: Metadata = {
  title: "Global Indices Analysis | NASDAQ, S&P 500 & More",

  description:
    "Explore NASDAQ, S&P 500, Dow Jones and global index market analysis with technical trends, momentum, volatility and risk context.",

  keywords: [
    "global indices",
    "NASDAQ analysis",
    "S&P 500 analysis",
    "Dow Jones analysis",
    "stock market indices",
    "index market analysis",
    "global stock market",
    "equity market analysis",
    "stock market analysis",
  ],
};

export default function IndicesPage() {
  const market = getMarketBySlug("indices");

  if (!market) {
    return null;
  }

  return <MarketDetailPage market={market} />;
}