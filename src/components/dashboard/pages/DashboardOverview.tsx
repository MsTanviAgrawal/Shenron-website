"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  Clock3,
  MoreHorizontal,
  ShieldCheck,
  Star,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import {
  marketEvents,
  markets,
  watchlist,
} from "@/data/dashboard";

import {
  DashboardFooterNote,
  MarketOverviewCard,
  SectionHeading,
  StatusBadge,
} from "@/components/dashboard/DashboardUI";

const chartPath =
  "M0 245 C35 235 45 215 70 226 C95 237 105 200 135 210 C165 220 175 180 205 191 C235 202 250 170 275 182 C300 194 320 150 350 164 C380 178 395 142 425 153 C455 164 475 130 500 143 C525 156 545 115 575 128 C605 141 620 100 650 112 C680 124 700 88 730 100 C760 112 775 78 805 91 C835 104 855 66 880 77 C910 90 930 52 955 62 C975 70 990 42 1000 35";

export default function DashboardOverview() {
  const [timeframe, setTimeframe] = useState("1D");

  return (
    <>
      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Market session active
            </span>
          </div>

          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Good afternoon, Trader.
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Review market context, momentum and risk conditions
            before building your trading plan.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 text-xs text-slate-500 sm:flex">
            <Clock3 className="h-3.5 w-3.5" />
            Sunday, Aug 9
          </div>

          <Link
            href="/dashboard/markets"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] px-3.5 py-2.5 text-xs font-semibold text-cyan-200 hover:bg-cyan-300/[0.1]"
          >
            Explore Markets
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <SectionHeading
            title="Market Overview"
            description="Illustrative market data for the frontend experience."
          />

          <StatusBadge variant="info">
            <Activity className="mr-1 h-3 w-3" />
            Monitoring
          </StatusBadge>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {markets.map((market) => (
            <MarketOverviewCard
              key={market.symbol}
              market={market}
            />
          ))}
        </div>
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.45fr)]">
        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0C1119]">
          <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] p-5 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-sm font-semibold text-white">
                  XAU/USD Market Analysis
                </h2>

                <StatusBadge variant="success">
                  Bullish
                </StatusBadge>
              </div>

              <p className="mt-1 text-xs text-slate-600">
                Gold • London / New York session context
              </p>
            </div>

            <div className="flex items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1">
              {["1H", "4H", "1D", "1W"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTimeframe(item)}
                  className={`rounded-lg px-3 py-1.5 text-[10px] font-semibold ${
                    timeframe === item
                      ? "bg-white/[0.08] text-white"
                      : "text-slate-600 hover:text-slate-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-3xl font-semibold text-white">
                  2,438.21
                </p>

                <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-400">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  +43.54 (+1.82%)
                </p>
              </div>

              <div className="text-[10px] text-slate-600">
                {timeframe} • Support{" "}
                <strong className="text-slate-400">
                  2,410
                </strong>{" "}
                • Resistance{" "}
                <strong className="text-slate-400">
                  2,455
                </strong>
              </div>
            </div>

            <div className="relative mt-6 h-[310px] overflow-hidden rounded-xl border border-white/[0.05] bg-[#080D14]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />

              <div className="absolute right-3 top-4 z-10 space-y-[45px] text-[9px] text-slate-700">
                <span className="block">2,460</span>
                <span className="block">2,450</span>
                <span className="block">2,440</span>
                <span className="block">2,430</span>
                <span className="block">2,420</span>
              </div>

              <div className="absolute left-0 right-0 top-[65%] border-t border-dashed border-emerald-400/15">
                <span className="absolute left-3 -top-4 rounded bg-emerald-400/[0.05] px-2 py-1 text-[8px] text-emerald-400/70">
                  SUPPORT 2,410
                </span>
              </div>

              <div className="absolute left-0 right-0 top-[20%] border-t border-dashed border-red-400/10">
                <span className="absolute left-3 -top-4 rounded bg-red-400/[0.04] px-2 py-1 text-[8px] text-red-400/60">
                  RESISTANCE 2,455
                </span>
              </div>

              <svg
                viewBox="0 0 1000 320"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-label="Illustrative XAU/USD market chart"
              >
                <defs>
                  <linearGradient
                    id="overview-chart"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop
                      offset="0%"
                      stopColor="#62E6FF"
                    />
                    <stop
                      offset="100%"
                      stopColor="#8B7CFF"
                    />
                  </linearGradient>

                  <linearGradient
                    id="overview-area"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#62E6FF"
                      stopOpacity="0.14"
                    />
                    <stop
                      offset="100%"
                      stopColor="#62E6FF"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d={`${chartPath} L1000 320 L0 320 Z`}
                  fill="url(#overview-area)"
                />

                <path
                  d={chartPath}
                  fill="none"
                  stroke="url(#overview-chart)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                <circle
                  cx="955"
                  cy="62"
                  r="5"
                  fill="#62E6FF"
                />
              </svg>

              <div className="absolute bottom-3 left-4 right-20 flex justify-between text-[9px] text-slate-700">
                <span>09:00</span>
                <span>11:00</span>
                <span>13:00</span>
                <span>15:00</span>
                <span>17:00</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["Trend", "Bullish", "text-emerald-400"],
                ["Momentum", "Strong", "text-cyan-300"],
                ["Volatility", "Medium", "text-amber-300"],
                ["Risk", "Moderate", "text-violet-300"],
              ].map(([label, value, color]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3"
                >
                  <p className="text-[9px] uppercase tracking-[0.12em] text-slate-700">
                    {label}
                  </p>

                  <p
                    className={`mt-1.5 text-xs font-semibold ${color}`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-white">
                  Market Sentiment
                </h2>

                <p className="mt-1 text-[10px] text-slate-600">
                  Current illustrative bias
                </p>
              </div>

              <Activity className="h-4 w-4 text-cyan-300" />
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-4xl font-semibold text-emerald-400">
                  72%
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  Bullish conditions
                </p>
              </div>

              <StatusBadge variant="success">
                Bullish
              </StatusBadge>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.05]">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-white">
                  Risk Monitor
                </h2>

                <p className="mt-1 text-[10px] text-slate-600">
                  Market environment
                </p>
              </div>

              <ShieldCheck className="h-4 w-4 text-emerald-300" />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-amber-300">
                  Moderate
                </p>

                <p className="mt-1 text-[10px] text-slate-600">
                  Maintain disciplined risk
                </p>
              </div>

              <ShieldCheck className="h-5 w-5 text-amber-300" />
            </div>

            <div className="mt-5 space-y-3">
              {[
                ["Volatility", "Medium", "warning"],
                ["Liquidity", "High", "success"],
                ["News Risk", "Moderate", "warning"],
              ].map(([label, value, variant]) => (
                <div
                  key={label}
                  className="flex items-center justify-between"
                >
                  <span className="text-[10px] text-slate-600">
                    {label}
                  </span>

                  <StatusBadge
                    variant={
                      variant as "warning" | "success"
                    }
                  >
                    {value}
                  </StatusBadge>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-cyan-300/[0.055] to-violet-300/[0.035] p-5">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-cyan-300" />

              <span className="text-xs font-semibold text-white">
                Trading Session
              </span>
            </div>

            <p className="mt-4 text-lg font-semibold text-cyan-100">
              London / New York
            </p>

            <p className="mt-1 text-[10px] leading-5 text-slate-600">
              Review liquidity, volatility and scheduled
              economic events before taking action.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold text-white">
                Your Watchlist
              </h2>

              <p className="mt-1 text-[10px] text-slate-600">
                Markets you are keeping an eye on
              </p>
            </div>

            <MoreHorizontal className="h-4 w-4 text-slate-600" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-white/[0.05] text-left">
                  {[
                    "Market",
                    "Price",
                    "Change",
                    "Trend",
                    "Action",
                  ].map((head) => (
                    <th
                      key={head}
                      className="px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-700"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {watchlist.map((item) => {
                  const positive =
                    item.direction === "up";

                  return (
                    <tr
                      key={item.symbol}
                      className="border-b border-white/[0.04] last:border-0"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <Star className="h-3.5 w-3.5 text-slate-600" />

                          <div>
                            <p className="text-xs font-semibold text-slate-300">
                              {item.symbol}
                            </p>

                            <p className="mt-0.5 text-[9px] text-slate-700">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-xs font-semibold text-white">
                        {item.price}
                      </td>

                      <td
                        className={`px-5 py-4 text-xs font-semibold ${
                          positive
                            ? "text-emerald-400"
                            : "text-red-400"
                        }`}
                      >
                        {item.change}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-2 text-[10px] ${
                            positive
                              ? "text-emerald-400"
                              : "text-red-400"
                          }`}
                        >
                          {positive ? (
                            <TrendingUp className="h-3.5 w-3.5" />
                          ) : (
                            <TrendingDown className="h-3.5 w-3.5" />
                          )}

                          {positive
                            ? "Bullish"
                            : "Bearish"}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-right">
                        <Link
                          href={`/dashboard/markets?symbol=${encodeURIComponent(
                            item.symbol,
                          )}`}
                          className="text-[10px] font-semibold text-cyan-300"
                        >
                          Analyze
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119]">
          <div className="border-b border-white/[0.07] px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-white">
                  Market Events
                </h2>

                <p className="mt-1 text-[10px] text-slate-600">
                  Upcoming catalysts
                </p>
              </div>

              <CalendarDays className="h-4 w-4 text-cyan-300" />
            </div>
          </div>

          <div className="divide-y divide-white/[0.05]">
            {marketEvents.map((event) => (
              <div
                key={event.time}
                className="flex items-center gap-3 px-5 py-4"
              >
                <span className="w-11 shrink-0 text-[10px] text-slate-600">
                  {event.time}
                </span>

                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-700" />

                <span className="min-w-0 flex-1 text-xs text-slate-400">
                  {event.event}
                </span>

                <StatusBadge
                  variant={
                    event.impact === "High"
                      ? "danger"
                      : "warning"
                  }
                >
                  {event.impact}
                </StatusBadge>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.05] p-4">
            <Link
              href="/dashboard/analysis"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-2.5 text-[10px] font-semibold text-slate-400 hover:bg-white/[0.05] hover:text-white"
            >
              Review Market Context
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white">
                Market Breadth
              </h2>

              <p className="mt-1 text-[10px] text-slate-600">
                Illustrative cross-market view
              </p>
            </div>

            <BarChart3 className="h-4 w-4 text-cyan-300" />
          </div>

          <div className="mt-6 space-y-4">
            {[
              ["Forex", 68],
              ["Gold", 76],
              ["Crypto", 82],
              ["Indices", 71],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">
                    {label}
                  </span>

                  <span className="text-[10px] font-semibold text-slate-300">
                    {value}%
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                    style={{
                      width: `${value}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white">
                Trading Discipline
              </h2>

              <p className="mt-1 text-[10px] text-slate-600">
                Workspace reminder
              </p>
            </div>

            <ShieldCheck className="h-4 w-4 text-emerald-300" />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/15 bg-emerald-400/[0.04]">
              <span className="text-lg font-semibold text-emerald-300">
                84
              </span>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Good structure
              </p>

              <p className="mt-1 text-[10px] leading-5 text-slate-600">
                Keep position sizing and risk limits
                consistent.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#0C1119] to-[#10101B] p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white">
                Continue Learning
              </h2>

              <p className="mt-1 text-[10px] text-slate-600">
                Build market knowledge
              </p>
            </div>

            <BookOpen className="h-4 w-4 text-violet-300" />
          </div>

          <p className="mt-6 text-sm font-semibold text-slate-200">
            Understanding Market Structure
          </p>

          <p className="mt-2 text-[10px] leading-5 text-slate-600">
            Learn how trends, liquidity, support and
            resistance interact across different market
            conditions.
          </p>

          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
            <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-violet-300 to-cyan-300" />
          </div>

          <div className="mt-2 flex justify-between text-[9px] text-slate-700">
            <span>62% complete</span>
            <span>12 min remaining</span>
          </div>
        </div>
      </section>

      <DashboardFooterNote />
    </>
  );
}