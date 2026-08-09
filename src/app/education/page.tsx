import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  educationTopics,
} from "@/data/education";

const topicIcons = [
  BookOpen,
  BarChart3,
  ShieldCheck,
];

const topicLinks = [
  "/education/forex-trading",
  "/education/technical-analysis",
  "/education/risk-management",
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Trading Education
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn the market.
              <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                Build better decisions.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore practical trading education covering forex,
              technical analysis and risk management. Build your
              market knowledge step by step with structured,
              easy-to-understand lessons.
            </p>
          </div>
        </div>
      </section>

      {/* Education Topics */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Learning Paths
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Choose your learning path
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Start with the subject that matches your current
            trading knowledge and gradually build a stronger
            foundation.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {educationTopics.map((topic, index) => {
            const Icon = topicIcons[index];

            return (
              <Link
                key={topic.title}
                href={topicLinks[index]}
                className="group rounded-2xl border border-white/[0.07] bg-[#0C1119] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#0E141D]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {topic.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-300">
                  Explore lessons
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Learning Principles */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-white">
                Start with fundamentals
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Understand market terminology and concepts before
                moving into more advanced analysis.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Think in probabilities
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Market analysis does not guarantee outcomes. Use
                structured reasoning rather than certainty.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Respect risk
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Risk management should remain central to every
                educational trading framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-amber-300/10 bg-amber-300/[0.025] p-5">
          <p className="text-xs leading-6 text-slate-500">
            Educational content is provided for informational
            purposes only and should not be considered financial,
            investment or trading advice. Market conditions can
            change rapidly, and past market behavior does not
            guarantee future results.
          </p>
        </div>
      </section>
    </main>
  );
}