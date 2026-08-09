import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import {
  DashboardFooterNote,
  SectionHeading,
  StatusBadge,
} from "../../../components/dashboard/DashboardUI";

export default function DashboardRisk() {
  return (
    <>
      <SectionHeading
        eyebrow="Workspace / Risk"
        title="Risk Monitor"
        description="Review risk conditions without leaving the dashboard workspace."
      />

      <section className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white">
                Current Environment
              </h2>

              <p className="mt-1 text-[10px] text-slate-600">
                Illustrative dashboard risk state
              </p>
            </div>

            <ShieldCheck className="h-5 w-5 text-emerald-300" />
          </div>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-amber-300/15 bg-amber-300/[0.04]">
              <span className="text-sm font-semibold text-amber-300">
                Moderate
              </span>
            </div>

            <div>
              <p className="text-lg font-semibold text-white">
                Maintain disciplined risk
              </p>

              <p className="mt-2 max-w-md text-xs leading-6 text-slate-600">
                Keep position sizing consistent and review
                volatility and scheduled events before taking
                action.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Volatility", "Medium", "warning"],
              ["Liquidity", "High", "success"],
              ["News Risk", "Moderate", "warning"],
            ].map(([label, value, variant]) => (
              <div
                key={label}
                className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4"
              >
                <p className="text-[9px] uppercase tracking-[0.12em] text-slate-700">
                  {label}
                </p>

                <div className="mt-2">
                  <StatusBadge
                    variant={
                      variant as "warning" | "success"
                    }
                  >
                    {value}
                  </StatusBadge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-cyan-300/[0.05] to-violet-300/[0.04] p-6">
          <ShieldCheck className="h-5 w-5 text-cyan-300" />

          <h2 className="mt-5 text-sm font-semibold text-white">
            Trading Discipline
          </h2>

          <p className="mt-2 text-xs leading-6 text-slate-600">
            Use this workspace to review your risk
            conditions before moving into analysis.
          </p>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/[0.05]">
            <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
          </div>

          <p className="mt-2 text-right text-[10px] font-semibold text-cyan-300">
            84 / 100
          </p>

          <Link
            href="/dashboard/analysis"
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-cyan-300"
          >
            Review analysis
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <DashboardFooterNote />
    </>
  );
}