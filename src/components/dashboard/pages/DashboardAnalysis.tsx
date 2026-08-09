"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

import {
  DashboardFooterNote,
  SectionHeading,
  StatusBadge,
} from "@/components/dashboard/DashboardUI";

const path =
  "M0 245 C35 235 45 215 70 226 C95 237 105 200 135 210 C165 220 175 180 205 191 C235 202 250 170 275 182 C300 194 320 150 350 164 C380 178 395 142 425 153 C455 164 475 130 500 143 C525 156 545 115 575 128 C605 141 620 100 650 112 C680 124 700 88 730 100 C760 112 775 78 805 91 C835 104 855 66 880 77 C910 90 930 52 955 62 C975 70 990 42 1000 35";

export default function DashboardAnalysis() {
  const [timeframe, setTimeframe] = useState("1D");

  return (
    <>
      <SectionHeading
        eyebrow="Workspace / Analysis"
        title="Market Analysis"
        description="Technical and contextual analysis stays inside the dashboard shell."
      />

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0C1119]">
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
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-semibold text-white">
                2,438.21
              </p>

              <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-400">
                <ArrowUpRight className="h-3.5 w-3.5" />
                +43.54 (+1.82%)
              </p>
            </div>

            <StatusBadge variant="info">
              {timeframe} view
            </StatusBadge>
          </div>

          <div className="relative mt-6 h-[380px] overflow-hidden rounded-xl border border-white/[0.05] bg-[#080D14]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <svg
              viewBox="0 0 1000 320"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-label="Illustrative market analysis chart"
            >
              <defs>
                <linearGradient
                  id="analysis-line"
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
              </defs>

              <path
                d={path}
                fill="none"
                stroke="url(#analysis-line)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {[
              ["Trend", "Bullish"],
              ["Momentum", "Strong"],
              ["Volatility", "Medium"],
              ["Risk", "Moderate"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4"
              >
                <p className="text-[9px] uppercase tracking-[0.12em] text-slate-700">
                  {label}
                </p>

                <p className="mt-1.5 text-xs font-semibold text-cyan-300">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
          <BarChart3 className="h-4 w-4 text-cyan-300" />

          <h2 className="mt-4 text-sm font-semibold text-white">
            Technical Context
          </h2>

          <p className="mt-2 text-[10px] leading-5 text-slate-600">
            Trend structure remains positive in this
            illustrative view. Confirm market conditions
            before making a trading decision.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
          <ShieldCheck className="h-4 w-4 text-emerald-300" />

          <h2 className="mt-4 text-sm font-semibold text-white">
            Risk Context
          </h2>

          <p className="mt-2 text-[10px] leading-5 text-slate-600">
            Volatility is moderate. Keep position sizing
            and predefined risk limits consistent.
          </p>
        </div>
      </section>

      <DashboardFooterNote />
    </>
  );
}