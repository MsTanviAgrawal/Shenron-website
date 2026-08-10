"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Search,
  ShieldCheck,
} from "lucide-react";

import { markets } from "@/data/dashboard";

import {
  DashboardFooterNote,
  MarketOverviewCard,
  SectionHeading,
  StatusBadge,
} from "@/components/dashboard/DashboardUI";

export default function DashboardMarkets() {
  const params = useSearchParams();

  const selected = params.get("symbol");

  return (
    <>
      <SectionHeading
        eyebrow="Workspace / Markets"
        title="Markets"
        description="Explore market conditions without leaving the dashboard workspace."
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {markets.map((market) => (
          <MarketOverviewCard
            key={market.symbol}
            market={market}
          />
        ))}
      </div>

      <section className="mt-6 grid gap-5 xl:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white">
                Market Search
              </h2>

              <p className="mt-1 text-[10px] text-slate-600">
                Select a market from the dashboard cards.
              </p>
            </div>

            <Search className="h-4 w-4 text-cyan-300" />
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px]">
              <thead>
                <tr className="border-b border-white/[0.05] text-left">
                  {[
                    "Symbol",
                    "Name",
                    "Price",
                    "Change",
                    "Bias",
                  ].map((head) => (
                    <th
                      key={head}
                      className="px-4 py-3 text-[9px] uppercase tracking-[0.14em] text-slate-700"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {markets.map((market) => {
                  const isSelected =
                    selected === market.symbol;

                  const marketHref =
                    `/dashboard/markets?symbol=${encodeURIComponent(
                      market.symbol,
                    )}`;

                  return (
                    <tr
                      key={market.symbol}
                      className={`border-b border-white/[0.04] last:border-0 ${
                        isSelected
                          ? "bg-cyan-300/[0.03]"
                          : ""
                      }`}
                    >
                      <td className="px-4 py-4">
                        <Link
                          href={marketHref}
                          className="text-xs font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                        >
                          {market.symbol}
                        </Link>
                      </td>

                      <td className="px-4 py-4 text-xs text-slate-400">
                        {market.name}
                      </td>

                      <td className="px-4 py-4 text-xs font-semibold text-white">
                        {market.price}
                      </td>

                      <td className="px-4 py-4 text-xs font-semibold text-emerald-400">
                        {market.change}
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge
                          variant={
                            market.bias === "Bullish"
                              ? "success"
                              : "default"
                          }
                        >
                          {market.bias}
                        </StatusBadge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
          <ShieldCheck className="h-5 w-5 text-emerald-300" />

          <h2 className="mt-4 text-sm font-semibold text-white">
            Dashboard-only market workspace
          </h2>

          <p className="mt-2 text-[10px] leading-5 text-slate-600">
            The links in this section stay under{" "}
            <code className="text-cyan-300">
              /dashboard
            </code>
            . They do not redirect to the public Markets
            page.
          </p>

          <Link
            href="/dashboard/analysis"
            className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
          >
            Open analysis

            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      <DashboardFooterNote />
    </>
  );
}