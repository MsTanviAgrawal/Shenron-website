import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CandlestickChart,
  LineChart,
} from "lucide-react";

import {
  technicalAnalysisEducation,
} from "@/data/education";

export default function TechnicalAnalysisPage() {
  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute left-1/2 top-0 h-[400px] w-[650px] -translate-x-1/2 rounded-full bg-violet-400/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-8">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Education
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-300/[0.06] text-violet-300">
              <BarChart3 className="h-5 w-5" />
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Technical Analysis
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Learn how traders study price charts, market
              structure, trends, support and resistance, momentum
              and technical indicators.
            </p>
          </div>
        </div>
      </section>

      {/* Concepts */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
            <CandlestickChart className="h-5 w-5 text-cyan-300" />

            <h2 className="mt-4 text-sm font-semibold text-white">
              Price Action
            </h2>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Learn how candlesticks and price movement can be
              interpreted within a broader market context.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
            <LineChart className="h-5 w-5 text-violet-300" />

            <h2 className="mt-4 text-sm font-semibold text-white">
              Market Structure
            </h2>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Study trends, swing points and changing market
              structure.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
            <Activity className="h-5 w-5 text-emerald-300" />

            <h2 className="mt-4 text-sm font-semibold text-white">
              Momentum
            </h2>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Understand how momentum and indicators can support
              a structured analytical process.
            </p>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Technical Curriculum
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white">
            Learn how to read the market
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Build your technical analysis knowledge from chart
            basics toward a more structured understanding of
            market behavior.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {technicalAnalysisEducation.lessons.map(
            (lesson, index) => (
              <article
                key={lesson.title}
                className="group rounded-2xl border border-white/[0.07] bg-[#0C1119] p-6 transition-all hover:-translate-y-0.5 hover:border-violet-300/20"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-300/[0.07] text-xs font-semibold text-violet-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowRight className="h-4 w-4 text-slate-700 transition-transform group-hover:translate-x-1 group-hover:text-violet-300" />
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

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs leading-6 text-slate-600">
            Technical analysis is an educational framework and
            does not guarantee future market outcomes. Always
            consider broader market conditions and risk.
          </p>
        </div>
      </section>
    </main>
  );
}