import Link from "next/link";
import {
  ArrowUpRight,
  Star,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { watchlist } from "@/data/dashboard";

import {
  DashboardFooterNote,
  SectionHeading,
} from "@/components/dashboard/DashboardUI";

export default function DashboardWatchlist() {
  return (
    <>
      <SectionHeading
        eyebrow="Workspace / Watchlist"
        title="Your Watchlist"
        description="Your saved markets stay inside the dashboard workspace."
      />

      <section className="mt-8 overflow-x-auto rounded-2xl border border-white/[0.07] bg-[#0C1119]">
        <table className="w-full min-w-[700px]">
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
                  className="px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-700"
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
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-slate-600" />

                      <div>
                        <p className="text-xs font-semibold text-white">
                          {item.symbol}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-700">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-5 text-xs font-semibold text-white">
                    {item.price}
                  </td>

                  <td
                    className={`px-5 py-5 text-xs font-semibold ${
                      positive
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.change}
                  </td>

                  <td className="px-5 py-5">
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

                      {positive ? "Bullish" : "Bearish"}
                    </span>
                  </td>

                  <td className="px-5 py-5 text-right">
                    <Link
                      href={`/dashboard/markets?symbol=${encodeURIComponent(
                        item.symbol,
                      )}`}
                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-300"
                    >
                      Analyze
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <DashboardFooterNote />
    </>
  );
}