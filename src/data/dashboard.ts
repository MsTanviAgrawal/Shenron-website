export type Direction = "up" | "down";

export type MarketBias =
  | "Bullish"
  | "Neutral"
  | "Bearish";

export type Volatility =
  | "Low"
  | "Medium"
  | "High";

export type Market = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  direction: Direction;
  bias: MarketBias;
  volatility: Volatility;
  session: string;
};

export const markets: Market[] = [
  {
    symbol: "XAU/USD",
    name: "Gold",
    price: "2,438.21",
    change: "+1.82%",
    direction: "up",
    bias: "Bullish",
    volatility: "Medium",
    session: "London / NY",
  },
  {
    symbol: "EUR/USD",
    name: "Euro / US Dollar",
    price: "1.1742",
    change: "+0.31%",
    direction: "up",
    bias: "Neutral",
    volatility: "Low",
    session: "London / NY",
  },
  {
    symbol: "BTC/USD",
    name: "Bitcoin",
    price: "118,240",
    change: "+2.18%",
    direction: "up",
    bias: "Bullish",
    volatility: "High",
    session: "24 / 7",
  },
  {
    symbol: "NASDAQ",
    name: "Nasdaq 100",
    price: "21,482",
    change: "+0.72%",
    direction: "up",
    bias: "Bullish",
    volatility: "Medium",
    session: "US Cash",
  },
];

export const watchlist = [
  {
    symbol: "XAU/USD",
    name: "Gold",
    price: "2,438.21",
    change: "+1.82%",
    direction: "up" as Direction,
  },
  {
    symbol: "EUR/USD",
    name: "Euro / US Dollar",
    price: "1.1742",
    change: "+0.31%",
    direction: "up" as Direction,
  },
  {
    symbol: "GBP/USD",
    name: "British Pound",
    price: "1.3528",
    change: "-0.18%",
    direction: "down" as Direction,
  },
  {
    symbol: "BTC/USD",
    name: "Bitcoin",
    price: "118,240",
    change: "+2.18%",
    direction: "up" as Direction,
  },
  {
    symbol: "ETH/USD",
    name: "Ethereum",
    price: "4,282.60",
    change: "+1.46%",
    direction: "up" as Direction,
  },
];

export const marketEvents = [
  {
    time: "10:30",
    event: "US CPI Preview",
    impact: "High" as const,
  },
  {
    time: "12:00",
    event: "ECB Commentary",
    impact: "Medium" as const,
  },
  {
    time: "14:00",
    event: "US Consumer Sentiment",
    impact: "Medium" as const,
  },
  {
    time: "16:30",
    event: "Fed Member Speech",
    impact: "High" as const,
  },
];