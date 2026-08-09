import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Clock3,
  Globe2,
  Layers3,
} from "lucide-react";

import { forexEducation } from "@/data/education";

export default function ForexEducationPage() {
  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute right-0 top-0 h-[420px] w-[520px] rounded-full bg-cyan-400/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-8">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Education
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300">
              <BarChart3 className="h-5 w-5" />
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Forex Trading
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Learn the fundamentals of the foreign exchange
              market, currency pairs, market sessions, price
              movement and essential forex terminology.
            </p>
          </div>
        </div>
      </section>

      {/* Quick concepts */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
            <Globe2 className="h-5 w-5 text-cyan-300" />

            <h2 className="mt-4 text-sm font-semibold text-white">
              Global Currency Market
            </h2>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Explore how currencies are traded against one
              another across a global market.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
            <Clock3 className="h-5 w-5 text-violet-300" />

            <h2 className="mt-4 text-sm font-semibold text-white">
              Market Sessions
            </h2>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Understand how market activity changes across
              major global trading sessions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
            <Layers3 className="h-5 w-5 text-emerald-300" />

            <h2 className="mt-4 text-sm font-semibold text-white">
              Trading Fundamentals
            </h2>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Build familiarity with currency pairs, pips,
              lots and position sizing concepts.
            </p>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Forex Curriculum
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white">
            Build your forex foundation
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {forexEducation.lessons.map((lesson, index) => (
            <article
              key={lesson.title}
              className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-6 transition-colors hover:border-cyan-300/15"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/[0.07] text-xs font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <ArrowRight className="h-4 w-4 text-slate-700" />
              </div>

              <h3 className="mt-6 text-base font-semibold text-white">
                {lesson.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {lesson.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs leading-6 text-slate-600">
            Forex education is informational only and does not
            constitute financial advice or a recommendation to
            trade any currency pair.
          </p>
        </div>
      </section>
    </main>
  );
}