import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bitcoin,
  CircleDollarSign,
  Gauge,
  LineChart,
  ShieldCheck,
  Sparkles,
  Activity,
  Clock3,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Market Analysis | Forex, Gold, Crypto & Indices",
  description:
    "Explore structured market analysis for forex, gold, crypto and global indices with technical trends, momentum, volatility, market structure and risk context.",
  keywords: [
    "market analysis",
    "forex market analysis",
    "gold market analysis",
    "XAU/USD analysis",
    "crypto market analysis",
    "Bitcoin market analysis",
    "indices analysis",
    "NASDAQ analysis",
    "technical analysis",
    "market structure analysis",
    "trading analysis",
    "market intelligence",
    "risk analysis",
  ],
  openGraph: {
    title: "Market Analysis | Orvix",
    description:
      "Structured market intelligence covering forex, gold, crypto and global indices.",
    type: "website",
  },
};

const marketCards = [
  {
    name: "XAU/USD",
    category: "Gold",
    price: "2,438.21",
    change: "+1.82%",
    bias: "Bullish",
    risk: "Moderate",
    session: "London / New York",
    icon: Sparkles,
  },
  {
    name: "EUR/USD",
    category: "Forex",
    price: "1.1742",
    change: "+0.31%",
    bias: "Neutral",
    risk: "Low",
    session: "London / New York",
    icon: CircleDollarSign,
  },
  {
    name: "BTC/USD",
    category: "Crypto",
    price: "118,240",
    change: "+2.18%",
    bias: "Bullish",
    risk: "High",
    session: "24 / 7",
    icon: Bitcoin,
  },
  {
    name: "NASDAQ",
    category: "Indices",
    price: "21,482",
    change: "+0.72%",
    bias: "Bullish",
    risk: "Moderate",
    session: "US Cash",
    icon: BarChart3,
  },
];

const analysisCategories = [
  {
    title: "Technical Analysis",
    description:
      "Understand trend structure, support and resistance, momentum, breakouts and potential market reactions.",
    icon: LineChart,
    href: "/education/technical-analysis",
  },
  {
    title: "Market Structure",
    description:
      "Review higher highs, lower lows, liquidity areas and changing market conditions before building a trade idea.",
    icon: Activity,
    href: "/markets",
  },
  {
    title: "Momentum & Volatility",
    description:
      "Compare momentum strength and volatility conditions to understand when markets are expanding or consolidating.",
    icon: Gauge,
    href: "/markets",
  },
  {
    title: "Risk Context",
    description:
      "Put every market idea into a risk-aware framework using volatility, exposure and invalidation context.",
    icon: ShieldCheck,
    href: "/education/risk-management",
  },
];

const marketInsights = [
  {
    label: "Gold",
    symbol: "XAU/USD",
    bias: "Bullish",
    strength: "Strong",
    description:
      "Price structure remains constructive in this illustrative market view. Watch session liquidity and confirmation around key levels.",
  },
  {
    label: "Forex",
    symbol: "EUR/USD",
    bias: "Neutral",
    strength: "Moderate",
    description:
      "The pair is currently presented as balanced. Macro catalysts and session direction should be considered before interpreting short-term moves.",
  },
  {
    label: "Crypto",
    symbol: "BTC/USD",
    bias: "Bullish",
    strength: "Strong",
    description:
      "Momentum remains elevated in this illustrative view. Higher volatility means confirmation and position sizing are particularly important.",
  },
  {
    label: "Indices",
    symbol: "NASDAQ",
    bias: "Bullish",
    strength: "Moderate",
    description:
      "Index momentum is positive in the current example. Traders should monitor US cash-session breadth and major macro events.",
  },
];

const methodology = [
  {
    number: "01",
    title: "Market Context",
    description:
      "Start with the broader environment, trading session, macro conditions and relevant market catalysts.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Identify trend direction, important levels, liquidity zones and potential areas where market behavior may change.",
  },
  {
    number: "03",
    title: "Momentum",
    description:
      "Assess whether price movement has enough strength to support continuation or whether conditions are becoming compressed.",
  },
  {
    number: "04",
    title: "Risk Context",
    description:
      "Define what would invalidate the market thesis and keep exposure proportional to current volatility.",
  },
];

export default function AnalysisPage() {
  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Ambient background */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[120px]" />

          <div className="absolute right-[-100px] top-[80px] h-[450px] w-[450px] rounded-full bg-violet-500/[0.05] blur-[120px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-4xl">
            {/* Eyebrow */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(98,230,255,0.9)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                Orvix Market Intelligence
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-7xl">
              Market analysis built for
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
                clearer trading decisions.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore structured analysis across forex, gold, crypto and
              global indices. Review market structure, momentum, volatility
              and risk context before turning a market idea into a plan.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/markets"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-cyan-300/25
                  bg-cyan-300/[0.09]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-cyan-100
                  shadow-[0_0_30px_rgba(98,230,255,0.06)]
                  transition-all
                  hover:border-cyan-300/40
                  hover:bg-cyan-300/[0.14]
                "
              >
                Explore Markets

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/dashboard"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-slate-300
                  transition-all
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                Open Dashboard

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Hero metrics */}

          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["4", "Core markets"],
              ["24/7", "Crypto coverage"],
              ["4", "Analysis layers"],
              ["Risk-first", "Decision framework"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-5
                  backdrop-blur-xl
                "
              >
                <p className="text-2xl font-semibold tracking-tight text-white">
                  {value}
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MARKET SNAPSHOT
      ========================================================= */}

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                  Market Snapshot
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                A faster view of the markets that matter.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                Use this illustrative market board to compare price context,
                directional bias, session conditions and risk characteristics.
              </p>
            </div>

            <Link
              href="/markets"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
            >
              View all markets
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {marketCards.map((market) => {
              const Icon = market.icon;

              return (
                <article
                  key={market.name}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[#0C1119]
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-300/15
                    hover:bg-[#0E141D]
                  "
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-cyan-300">
                        <Icon className="h-4 w-4" />
                      </span>

                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {market.name}
                        </h3>

                        <p className="mt-0.5 text-[10px] text-slate-600">
                          {market.category}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-slate-700 transition-colors group-hover:text-cyan-300" />
                  </div>

                  <div className="mt-7 flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-semibold tracking-tight text-white">
                        {market.price}
                      </p>

                      <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                        <TrendingUp className="h-3 w-3" />
                        {market.change}
                      </p>
                    </div>

                    <span
                      className={`
                        rounded-full
                        border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        ${
                          market.bias === "Bullish"
                            ? "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-300"
                            : "border-white/[0.08] bg-white/[0.03] text-slate-400"
                        }
                      `}
                    >
                      {market.bias}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/[0.06] pt-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.14em] text-slate-700">
                        Session
                      </p>

                      <p className="mt-1 text-[10px] text-slate-500">
                        {market.session}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[9px] uppercase tracking-[0.14em] text-slate-700">
                        Risk
                      </p>

                      <p className="mt-1 text-[10px] text-slate-500">
                        {market.risk}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ANALYSIS FRAMEWORK
      ========================================================= */}

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                Analysis Framework
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                From price movement to market context.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Good analysis is more than identifying whether price is going
                up or down. Orvix organizes market information into
                structured layers so traders can understand the conditions
                surrounding a potential setup.
              </p>

              <div className="mt-8 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.035] p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Risk comes before execution.
                    </p>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      Market analysis is presented for educational and
                      informational purposes. Always validate prices,
                      spreads, execution conditions and risk limits through
                      your own trading platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {analysisCategories.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="
                      group
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#0C1119]
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-300/15
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-cyan-300">
                        <Icon className="h-4 w-4" />
                      </span>

                      <ArrowUpRight className="h-4 w-4 text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                    </div>

                    <h3 className="mt-6 text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MARKET INSIGHTS
      ========================================================= */}

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300/70">
              Cross-Market Intelligence
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Compare the market before choosing the trade.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Different markets behave differently. Compare directional bias,
              momentum and risk characteristics instead of analyzing one chart
              in isolation.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0C1119]">
            <div className="hidden grid-cols-[130px_130px_130px_150px_1fr] border-b border-white/[0.06] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-700 md:grid">
              <span>Market</span>
              <span>Symbol</span>
              <span>Bias</span>
              <span>Momentum</span>
              <span>Context</span>
            </div>

            {marketInsights.map((item, index) => (
              <div
                key={item.symbol}
                className={`
                  grid
                  gap-4
                  px-5
                  py-5
                  md:grid-cols-[130px_130px_130px_150px_1fr]
                  md:items-center
                  md:px-6
                  ${
                    index !== marketInsights.length - 1
                      ? "border-b border-white/[0.05]"
                      : ""
                  }
                `}
              >
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.label}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-600 md:hidden">
                    {item.symbol}
                  </p>
                </div>

                <span className="hidden text-xs text-slate-500 md:block">
                  {item.symbol}
                </span>

                <span className="w-fit rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                  {item.bias}
                </span>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

                    <span className="text-xs font-medium text-slate-300">
                      {item.strength}
                    </span>
                  </div>
                </div>

                <p className="text-xs leading-5 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          METHODOLOGY
      ========================================================= */}

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                Our Method
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A repeatable process for reading markets.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                A structured workflow makes analysis easier to review,
                communicate and improve. Orvix's framework moves from broad
                context toward a clearly defined risk scenario.
              </p>
            </div>

            <div className="grid gap-3">
              {methodology.map((item) => (
                <div
                  key={item.number}
                  className="
                    group
                    grid
                    gap-5
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    p-5
                    transition-colors
                    hover:border-cyan-300/15
                    sm:grid-cols-[70px_180px_1fr]
                    sm:items-start
                  "
                >
                  <span className="text-xs font-semibold text-cyan-300/70">
                    {item.number}
                  </span>

                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RISK NOTICE
      ========================================================= */}

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-amber-300/10 bg-amber-300/[0.025] p-7 sm:p-10">
            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[300px] w-[300px] rounded-full bg-amber-300/[0.035] blur-[100px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-3xl gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-300/[0.04] text-amber-300">
                  <TriangleAlert className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Analysis is context, not a guarantee.
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    Market commentary, examples and illustrative data are
                    provided for educational and informational purposes only.
                    Financial markets can move rapidly, and past performance
                    does not guarantee future results. Always evaluate your
                    own risk tolerance and verify live market conditions
                    before making a trading decision.
                  </p>
                </div>
              </div>

              <Link
                href="/education/risk-management"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-slate-300
                  transition-colors
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                Learn Risk Management

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.06] pt-6 text-[10px] text-slate-700">
            <span className="flex items-center gap-2">
              <Clock3 className="h-3.5 w-3.5" />
              Structured market review
            </span>

            <span className="flex items-center gap-2">
              <BarChart3 className="h-3.5 w-3.5" />
              Multi-asset coverage
            </span>

            <span className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              Risk-aware framework
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}