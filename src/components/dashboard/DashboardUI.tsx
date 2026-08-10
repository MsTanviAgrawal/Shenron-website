import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import type { Market } from "@/data/dashboard";

export function StatusBadge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?:
    | "default"
    | "success"
    | "warning"
    | "danger"
    | "info";
}) {
  const styles = {
    default:
      "border-white/[0.08] bg-white/[0.03] text-slate-400",

    success:
      "border-emerald-400/15 bg-emerald-400/[0.05] text-emerald-300",

    warning:
      "border-amber-400/15 bg-amber-400/[0.05] text-amber-300",

    danger:
      "border-red-400/15 bg-red-400/[0.05] text-red-300",

    info:
      "border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export function MiniSparkline({
  direction = "up",
}: {
  direction?: "up" | "down";
}) {
  return (
    <svg
      viewBox="0 0 100 36"
      preserveAspectRatio="none"
      className="h-8 w-20"
      aria-hidden="true"
    >
      <path
        d={
          direction === "up"
            ? "M0 29 C10 27 12 20 20 23 C28 26 31 15 39 18 C47 21 52 10 60 14 C68 18 71 7 80 10 C88 13 92 4 100 5"
            : "M0 7 C10 8 12 17 20 14 C28 11 31 23 39 20 C47 17 52 27 60 23 C68 20 71 30 80 26 C88 23 92 32 100 31"
        }
        fill="none"
        stroke={
          direction === "up"
            ? "#62E6FF"
            : "#FF6577"
        }
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MarketOverviewCard({
  market,
}: {
  market: Market;
}) {
  const positive = market.direction === "up";

  return (
    <Link
      href={`/dashboard/markets?symbol=${encodeURIComponent(
        market.symbol,
      )}`}
      className="group rounded-2xl border border-white/[0.07] bg-[#0C1119] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/15 hover:bg-[#0E141D]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-slate-300">
            {market.symbol}
          </p>

          <p className="mt-1 text-[10px] text-slate-600">
            {market.name}
          </p>
        </div>

        <MiniSparkline
          direction={market.direction}
        />
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="text-xl font-semibold tracking-tight text-white">
            {market.price}
          </p>

          <p
            className={`mt-1 flex items-center gap-1 text-[10px] font-semibold ${
              positive
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {positive ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}

            {market.change}
          </p>
        </div>

        <StatusBadge
          variant={
            market.bias === "Bullish"
              ? "success"
              : "default"
          }
        >
          {market.bias}
        </StatusBadge>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/[0.05] pt-3 text-[9px] text-slate-700">
        <span>{market.session}</span>

        <span>
          {market.volatility} volatility
        </span>
      </div>
    </Link>
  );
}

/*
|--------------------------------------------------------------------------
| SectionHeading
|--------------------------------------------------------------------------
|
| This was missing from your DashboardUI.tsx.
|
| DashboardAnalysis.tsx, DashboardMarkets.tsx,
| DashboardWatchlist.tsx and DashboardRisk.tsx
| import this component from DashboardUI.
|
*/

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      {eyebrow && (
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {eyebrow}
        </p>
      )}

      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h1>

      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}

export function DashboardFooterNote() {
  return (
    <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.05] pt-6 text-[9px] leading-5 text-slate-700 sm:flex-row sm:items-center sm:justify-between">
      <p>
        Orvix dashboard • Frontend demonstration
        with illustrative market data.
      </p>

      <p>
        Educational and informational use only.
      </p>
    </div>
  );
}