export type MarketData = {
  slug: string;
  name: string;
  shortName: string;
  symbol: string;
  category: string;
  headline: string;
  description: string;
  price: string;
  change: string;
  changeValue: string;
  direction: "up" | "down";
  bias: "Bullish" | "Bearish" | "Neutral";
  volatility: "Low" | "Medium" | "High";
  session: string;
  color: "cyan" | "violet" | "amber" | "emerald";
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  overview: string[];
  factors: string[];
  education: string[];
  pairs: string[];
};

export const markets: MarketData[] = [
  {
    slug: "forex",
    name: "Forex Market",
    shortName: "Forex",
    symbol: "EUR/USD",
    category: "Foreign Exchange",
    headline: "Understand the world's largest currency market.",
    description:
      "Explore forex market structure, currency pairs, trading sessions, momentum and risk conditions through a clean market-intelligence experience.",
    price: "1.1742",
    change: "+0.31%",
    changeValue: "+0.0036",
    direction: "up",
    bias: "Neutral",
    volatility: "Low",
    session: "London / New York",
    color: "cyan",
    seoTitle: "Forex Market Analysis & Trading Intelligence | Orvix",
    seoDescription:
      "Explore forex market analysis, currency pairs, market structure, trading sessions, technical analysis and risk awareness with Orvix.",
    keywords: [
      "forex market analysis",
      "forex trading",
      "currency market",
      "EUR USD analysis",
      "forex technical analysis",
      "forex market structure",
    ],
    overview: [
      "The foreign exchange market is a global marketplace where currencies are exchanged around the clock during major trading sessions.",
      "Forex analysis often combines market structure, macroeconomic context, momentum, volatility and important technical levels.",
      "Major currency pairs such as EUR/USD, GBP/USD and USD/JPY are widely followed because of their liquidity and global economic relevance.",
    ],
    factors: [
      "Central bank decisions",
      "Interest rate expectations",
      "Inflation and employment data",
      "Economic growth",
      "Geopolitical developments",
      "Market risk sentiment",
    ],
    education: [
      "Understanding currency pairs",
      "Major, minor and exotic pairs",
      "Forex trading sessions",
      "Support and resistance",
      "Market structure",
      "Risk management",
    ],
    pairs: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD", "USD/CAD"],
  },

  {
    slug: "gold",
    name: "Gold & Metals",
    shortName: "Gold",
    symbol: "XAU/USD",
    category: "Precious Metals",
    headline: "Track gold through price, momentum and macro context.",
    description:
      "Explore gold market analysis with a focus on XAU/USD, price structure, volatility, support and resistance and broader market risk.",
    price: "2,438.21",
    change: "+1.82%",
    changeValue: "+43.54",
    direction: "up",
    bias: "Bullish",
    volatility: "Medium",
    session: "London / New York",
    color: "amber",
    seoTitle: "Gold Market Analysis & XAU/USD Trading Insights | Orvix",
    seoDescription:
      "Explore gold market analysis, XAU/USD technical levels, price action, market structure, volatility and risk awareness with Orvix.",
    keywords: [
      "gold market analysis",
      "XAU USD analysis",
      "gold trading",
      "gold price analysis",
      "precious metals",
      "XAU USD technical analysis",
    ],
    overview: [
      "Gold is one of the most closely watched precious metals and is often analyzed alongside interest rates, inflation, currencies and global risk sentiment.",
      "XAU/USD represents the value of gold relative to the US dollar and is commonly used to analyze gold price movements.",
      "Gold can experience significant volatility around major economic releases and changes in monetary-policy expectations.",
    ],
    factors: [
      "US dollar strength",
      "Interest rate expectations",
      "Inflation expectations",
      "Central bank policy",
      "Global risk sentiment",
      "Geopolitical uncertainty",
    ],
    education: [
      "Understanding XAU/USD",
      "Gold market sessions",
      "Gold price action",
      "Key support and resistance",
      "Dollar and gold relationship",
      "Gold risk management",
    ],
    pairs: ["XAU/USD", "XAG/USD", "XAU/EUR", "XAU/GBP"],
  },

  {
    slug: "crypto",
    name: "Crypto Markets",
    shortName: "Crypto",
    symbol: "BTC/USD",
    category: "Digital Assets",
    headline: "Navigate digital asset markets with greater context.",
    description:
      "Explore Bitcoin, Ethereum and major crypto market trends through price structure, momentum, volatility and market sentiment.",
    price: "118,240",
    change: "+2.18%",
    changeValue: "+2,526",
    direction: "up",
    bias: "Bullish",
    volatility: "High",
    session: "24 / 7",
    color: "violet",
    seoTitle: "Crypto Market Analysis & Bitcoin Trading Insights | Orvix",
    seoDescription:
      "Explore crypto market analysis, Bitcoin and Ethereum trends, technical analysis, market structure, volatility and digital asset risk.",
    keywords: [
      "crypto market analysis",
      "Bitcoin analysis",
      "BTC USD analysis",
      "Ethereum analysis",
      "crypto trading",
      "digital asset market",
    ],
    overview: [
      "Cryptocurrency markets operate continuously and can experience significant price movements across both major and emerging digital assets.",
      "Bitcoin and Ethereum are among the most widely followed crypto assets and often influence broader market sentiment.",
      "Crypto analysis can include price structure, momentum, volume, volatility, liquidity and broader risk sentiment.",
    ],
    factors: [
      "Bitcoin market dominance",
      "Liquidity conditions",
      "Regulatory developments",
      "Institutional flows",
      "Market sentiment",
      "Network activity",
    ],
    education: [
      "Understanding Bitcoin",
      "Understanding Ethereum",
      "Crypto market cycles",
      "Market capitalization",
      "Crypto volatility",
      "Digital asset risk management",
    ],
    pairs: ["BTC/USD", "ETH/USD", "SOL/USD", "BNB/USD"],
  },

  {
    slug: "indices",
    name: "Global Indices",
    shortName: "Indices",
    symbol: "NASDAQ",
    category: "Global Equity Indices",
    headline: "Follow global equity markets and risk sentiment.",
    description:
      "Explore major global indices through market trends, momentum, volatility, macroeconomic context and risk sentiment.",
    price: "21,482",
    change: "+0.72%",
    changeValue: "+153.20",
    direction: "up",
    bias: "Bullish",
    volatility: "Medium",
    session: "US Cash",
    color: "emerald",
    seoTitle: "Global Indices Analysis & Market Intelligence | Orvix",
    seoDescription:
      "Explore NASDAQ, S&P 500, Dow Jones and global index market analysis with technical trends, momentum, volatility and risk context.",
    keywords: [
      "stock market indices",
      "NASDAQ analysis",
      "S&P 500 analysis",
      "Dow Jones analysis",
      "global indices",
      "index market analysis",
    ],
    overview: [
      "Global equity indices provide a broad view of stock-market performance and investor risk appetite.",
      "Major benchmarks such as the Nasdaq, S&P 500 and Dow Jones are frequently used to understand equity-market trends.",
      "Index analysis can combine technical structure with earnings expectations, interest rates, economic data and market sentiment.",
    ],
    factors: [
      "Interest rates",
      "Corporate earnings",
      "Economic growth",
      "Employment data",
      "Technology sector performance",
      "Investor sentiment",
    ],
    education: [
      "Understanding stock indices",
      "NASDAQ vs S&P 500",
      "Index market structure",
      "Equity market volatility",
      "Risk sentiment",
      "Index trading risk",
    ],
    pairs: ["NASDAQ", "S&P 500", "DOW", "DAX", "FTSE 100"],
  },
];

export const getMarketBySlug = (slug: string) => {
  return markets.find((market) => market.slug === slug);
};
