"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Gauge,
  LineChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

type MarketData = {
  color: "cyan" | "violet" | "amber" | "emerald";
  direction: "up" | "down";
  category: string;
  headline: string;
  description: string;
  symbol: string;
  name: string;
  price: string;
  change: string;
  bias: string;
  volatility: string;
  session: string;
  slug: string;
  shortName: string;
  overview: string[];
  factors: string[];
  education: string[];
};

type MarketDetailPageProps = {
  market: MarketData;
};

const colorMap = {
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-300/[0.06]",
    border: "border-cyan-300/15",
    glow: "bg-cyan-300/[0.045]",
    gradient: "from-cyan-300 to-cyan-500",
  },
  violet: {
    text: "text-violet-300",
    bg: "bg-violet-300/[0.06]",
    border: "border-violet-300/15",
    glow: "bg-violet-300/[0.045]",
    gradient: "from-violet-300 to-cyan-300",
  },
  amber: {
    text: "text-amber-300",
    bg: "bg-amber-300/[0.06]",
    border: "border-amber-300/15",
    glow: "bg-amber-300/[0.045]",
    gradient: "from-amber-300 to-orange-400",
  },
  emerald: {
    text: "text-emerald-300",
    bg: "bg-emerald-300/[0.06]",
    border: "border-emerald-300/15",
    glow: "bg-emerald-300/[0.045]",
    gradient: "from-emerald-300 to-cyan-300",
  },
};

export default function MarketDetailPage({
  market,
}: MarketDetailPageProps) {
  const theme = colorMap[market.color];
  const positive = market.direction === "up";

  return (
    <div className="min-h-screen overflow-hidden bg-[#070A0F] text-white">
      {/* ================================================================
          HERO
      ================================================================= */}
      <section className="relative border-b border-white/[0.06] pt-28">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-[-150px] top-20 h-[450px] w-[450px] rounded-full blur-[140px] ${theme.glow}`}
        />

        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:pt-4 lg:px-8 lg:pt-4">
          <Link
            href="/markets"
            className="group inline-flex items-center gap-2 text-xs font-medium text-slate-600 transition-colors hover:text-slate-300"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            All Markets
          </Link>

          <div className="mt-4 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] ${theme.border} ${theme.bg} ${theme.text}`}
                >
                  {market.category}
                </span>

                <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                  Market Intelligence
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                {market.headline}
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                {market.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/dashboard"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold ${theme.border} ${theme.bg} ${theme.text} transition-all hover:brightness-125`}
                >
                  Open Dashboard
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#market-analysis"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  View Analysis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Market snapshot */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#0C1119] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-700">
                    Market Snapshot
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-white">
                    {market.symbol}
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    {market.name}
                  </p>
                </div>

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${theme.border} ${theme.bg}`}
                >
                  <BarChart3 className={`h-5 w-5 ${theme.text}`} />
                </div>
              </div>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-4xl font-semibold tracking-tight text-white">
                    {market.price}
                  </p>

                  <p
                    className={`mt-2 flex items-center gap-1 text-xs font-semibold ${
                      positive ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {positive ? (
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowDownRight className="h-3.5 w-3.5" />
                    )}

                    {market.change}
                  </p>
                </div>

                <span
                  className={`rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider ${theme.border} ${theme.bg} ${theme.text}`}
                >
                  {market.bias}
                </span>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
                  <p className="text-[9px] uppercase tracking-wider text-slate-700">
                    Bias
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-slate-300">
                    {market.bias}
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
                  <p className="text-[9px] uppercase tracking-wider text-slate-700">
                    Volatility
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-amber-300">
                    {market.volatility}
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
                  <p className="text-[9px] uppercase tracking-wider text-slate-700">
                    Session
                  </p>

                  <p className="mt-1 truncate text-[11px] font-semibold text-slate-300">
                    {market.session}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          MARKET ANALYSIS
      ================================================================= */}
      <section id="market-analysis" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">
            {/* Chart */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0C1119]">
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] p-5 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-sm font-semibold text-white">
                      {market.symbol} Price Structure
                    </h2>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold ${theme.border} ${theme.bg} ${theme.text}`}
                    >
                      {market.bias}
                    </span>
                  </div>

                  <p className="mt-1 text-[10px] text-slate-600">
                    Illustrative chart for frontend demonstration
                  </p>
                </div>

                <div className="flex gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1">
                  {["1H", "4H", "1D", "1W"].map((timeframe, index) => (
                    <button
                      key={timeframe}
                      type="button"
                      className={`rounded-lg px-3 py-1.5 text-[9px] font-semibold ${
                        index === 2
                          ? `${theme.bg} ${theme.text}`
                          : "text-slate-600 hover:text-slate-300"
                      }`}
                    >
                      {timeframe}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <div className="relative h-[330px] overflow-hidden rounded-xl border border-white/[0.05] bg-[#080D14]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]"
                  />

                  <div className="absolute right-3 top-5 space-y-[52px] text-[9px] text-slate-700">
                    <span className="block">High</span>
                    <span className="block">Resistance</span>
                    <span className="block">Mid</span>
                    <span className="block">Support</span>
                    <span className="block">Low</span>
                  </div>

                  <svg
                    viewBox="0 0 1000 330"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                    aria-label={`${market.name} illustrative market chart`}
                  >
                    <defs>
                      <linearGradient
                        id={`chart-${market.slug}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop
                          offset="0%"
                          stopColor={
                            market.color === "amber"
                              ? "#FBBF24"
                              : market.color === "violet"
                                ? "#A78BFA"
                                : market.color === "emerald"
                                  ? "#6EE7B7"
                                  : "#62E6FF"
                          }
                        />

                        <stop offset="100%" stopColor="#8B7CFF" />
                      </linearGradient>

                      <linearGradient
                        id={`area-${market.slug}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#62E6FF"
                          stopOpacity="0.15"
                        />

                        <stop
                          offset="100%"
                          stopColor="#62E6FF"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 245 C35 240 45 210 80 225 C115 240 130 190 165 205 C200 220 220 180 250 194 C280 208 305 160 340 178 C375 196 390 150 425 162 C460 174 480 130 515 145 C550 160 575 115 610 130 C645 145 670 98 705 114 C740 130 760 86 800 100 C840 114 855 73 890 85 C925 97 950 56 1000 38 L1000 330 L0 330 Z"
                      fill={`url(#area-${market.slug})`}
                    />

                    <path
                      d="M0 245 C35 240 45 210 80 225 C115 240 130 190 165 205 C200 220 220 180 250 194 C280 208 305 160 340 178 C375 196 390 150 425 162 C460 174 480 130 515 145 C550 160 575 115 610 130 C645 145 670 98 705 114 C740 130 760 86 800 100 C840 114 855 73 890 85 C925 97 950 56 1000 38"
                      fill="none"
                      stroke={`url(#chart-${market.slug})`}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="950"
                      cy="56"
                      r="5"
                      fill="#62E6FF"
                    />

                    <circle
                      cx="950"
                      cy="56"
                      r="14"
                      fill="#62E6FF"
                      opacity="0.08"
                    />
                  </svg>

                  <div className="absolute bottom-3 left-4 right-16 flex justify-between text-[9px] text-slate-700">
                    <span>09:00</span>
                    <span>11:00</span>
                    <span>13:00</span>
                    <span>15:00</span>
                    <span>17:00</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ["Trend", market.bias],
                    ["Momentum", "Strong"],
                    ["Volatility", market.volatility],
                    ["Liquidity", "Healthy"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3"
                    >
                      <p className="text-[9px] uppercase tracking-wider text-slate-700">
                        {label}
                      </p>

                      <p className={`mt-1.5 text-xs font-semibold ${theme.text}`}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Intelligence */}
            <div className="space-y-5">
              <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
                <div className="flex items-center gap-2">
                  <Gauge className={`h-4 w-4 ${theme.text}`} />

                  <h3 className="text-sm font-semibold text-white">
                    Market Condition
                  </h3>
                </div>

                <div className="mt-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-semibold text-white">
                        72
                      </p>

                      <p className="mt-1 text-[10px] text-slate-600">
                        Intelligence score
                      </p>
                    </div>

                    <span className={`text-xs font-semibold ${theme.text}`}>
                      Favorable
                    </span>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                    <div
                      className={`h-full w-[72%] rounded-full bg-gradient-to-r ${theme.gradient}`}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-300" />

                  <h3 className="text-sm font-semibold text-white">
                    Risk Context
                  </h3>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ["Volatility", market.volatility],
                    ["Liquidity", "Healthy"],
                    ["Macro Risk", "Moderate"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-white/[0.04] pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-[10px] text-slate-600">
                        {label}
                      </span>

                      <span className="text-[10px] font-semibold text-slate-300">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-2xl border p-5 ${theme.border} ${theme.bg}`}>
                <div className="flex items-center gap-2">
                  <Sparkles className={`h-4 w-4 ${theme.text}`} />

                  <h3 className="text-sm font-semibold text-white">
                    Analyst Context
                  </h3>
                </div>

                <p className="mt-4 text-xs leading-6 text-slate-500">
                  Current market conditions suggest that price structure,
                  momentum and volatility should be evaluated together rather
                  than relying on a single indicator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          MARKET OVERVIEW
      ================================================================= */}
      <section className="border-y border-white/[0.06] bg-[#090E15] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${theme.text}`}>
              Market Overview
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              What moves the {market.shortName.toLowerCase()} market?
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Understanding the forces behind price movement can provide more
              useful context than looking at price alone.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {market.overview.map((paragraph: string, index: number) => (
              <article
                key={`${paragraph}-${index}`}
                className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5"
              >
                <span className={`text-xs font-semibold ${theme.text}`}>
                  0{index + 1}
                </span>

                <p className="mt-6 text-sm leading-7 text-slate-500">
                  {paragraph}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          MARKET DRIVERS
      ================================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${theme.text}`}>
                Key Drivers
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Factors worth watching.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Markets rarely move because of one isolated factor. Use these
                areas as a framework for understanding the broader environment.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {market.factors.map((factor, index) => (
                <div
                  key={factor}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#0C1119] p-4"
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${theme.border} ${theme.bg}`}
                  >
                    <CheckCircle2 className={`h-4 w-4 ${theme.text}`} />
                  </span>

                  <div>
                    <span className="text-[9px] text-slate-700">
                      0{index + 1}
                    </span>

                    <p className="mt-0.5 text-xs font-medium text-slate-300">
                      {factor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          EDUCATION
      ================================================================= */}
      <section className="border-y border-white/[0.06] bg-[#090E15] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${theme.text}`}>
                Learn
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Build your {market.shortName.toLowerCase()} knowledge.
              </h2>
            </div>

            <BookOpen className={`h-6 w-6 ${theme.text}`} />
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {market.education.map((topic) => (
              <Link
                key={topic}
                href="/#education"
                className="group rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5 transition-all hover:border-white/[0.13] hover:bg-[#0E141D]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border ${theme.border} ${theme.bg}`}
                  >
                    <BookOpen className={`h-4 w-4 ${theme.text}`} />
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                </div>

                <h3 className="mt-6 text-sm font-semibold text-white">
                  {topic}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Explore this topic as part of the Orvix trading education
                  framework.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          RELATED MARKETS
      ================================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                Explore More
              </span>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Related markets
              </h2>
            </div>

            <Link
              href="/markets"
              className="hidden items-center gap-2 text-xs font-semibold text-cyan-300 sm:flex"
            >
              All markets
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/markets/forex",
                title: "Forex",
                symbol: "EUR/USD",
              },
              {
                href: "/markets/gold",
                title: "Gold",
                symbol: "XAU/USD",
              },
              {
                href: "/markets/crypto",
                title: "Crypto",
                symbol: "BTC/USD",
              },
              {
                href: "/markets/indices",
                title: "Indices",
                symbol: "NASDAQ",
              },
            ]
              .filter((item) => item.href !== `/markets/${market.slug}`)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-xl border border-white/[0.07] bg-[#0C1119] p-4 transition-all hover:border-cyan-300/15"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-300">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[9px] text-slate-700">
                        {item.symbol}
                      </p>
                    </div>

                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          RISK DISCLOSURE
      ================================================================= */}
      <section className="border-t border-white/[0.06] bg-[#06090E] py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 rounded-2xl border border-amber-300/10 bg-amber-300/[0.025] p-5">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-200">
                Risk Disclosure
              </h2>

              <p className="mt-3 text-xs leading-6 text-slate-600">
                Orvix provides educational and informational market content.
                The information presented on this page is not personalized
                financial or investment advice. Financial markets involve
                significant risk, and past performance does not guarantee
                future results. Market values shown on this frontend are
                illustrative and are not intended to represent live prices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}