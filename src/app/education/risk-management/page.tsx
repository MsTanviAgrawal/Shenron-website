import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Scale,
  ShieldCheck,
  Target,
} from "lucide-react";

import {
  riskManagementEducation,
} from "@/data/education";

export default function RiskManagementPage() {
  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute right-0 top-0 h-[420px] w-[600px] rounded-full bg-emerald-400/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-8">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Education
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] text-emerald-300">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Risk Management
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Learn practical concepts for controlling downside
              risk, planning positions, defining invalidation
              points and developing disciplined trading habits.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
            <Target className="h-5 w-5 text-cyan-300" />

            <h2 className="mt-4 text-sm font-semibold text-white">
              Define Risk
            </h2>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Establish clear risk parameters before making a
              market decision.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
            <Scale className="h-5 w-5 text-violet-300" />

            <h2 className="mt-4 text-sm font-semibold text-white">
              Size Positions Carefully
            </h2>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Position sizing connects trade exposure with the
              amount of capital being placed at risk.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
            <AlertTriangle className="h-5 w-5 text-amber-300" />

            <h2 className="mt-4 text-sm font-semibold text-white">
              Protect Against Excess Risk
            </h2>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Avoid allowing a single market decision to create
              disproportionate portfolio exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Risk Curriculum
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white">
            Build disciplined trading habits
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Good risk management is about creating a repeatable
            process rather than attempting to predict every
            market outcome.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {riskManagementEducation.lessons.map(
            (lesson, index) => (
              <article
                key={lesson.title}
                className="group rounded-2xl border border-white/[0.07] bg-[#0C1119] p-6 transition-all hover:-translate-y-0.5 hover:border-emerald-300/20"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-300/[0.07] text-xs font-semibold text-emerald-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowRight className="h-4 w-4 text-slate-700 transition-transform group-hover:translate-x-1 group-hover:text-emerald-300" />
                </div>

                <h3 className="mt-6 text-base font-semibold text-white">
                  {lesson.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {lesson.description}
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      {/* Risk warning */}
      <section className="border-t border-white/[0.06] bg-amber-300/[0.015]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />

            <p className="text-xs leading-6 text-slate-500">
              Trading financial markets involves significant
              risk. Educational material cannot eliminate the
              possibility of loss. Consider your financial
              circumstances and risk tolerance before making
              investment decisions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}