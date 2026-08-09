import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  CircleDollarSign,
  Eye,
  Gauge,
  Globe2,
  LineChart,
  LockKeyhole,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Shenron | Market Intelligence for Modern Traders",
  description:
    "Learn how Shenron helps traders understand forex, gold, crypto and global indices through structured market intelligence, technical analysis, risk context and trading education.",
  keywords: [
    "about Shenron",
    "market intelligence platform",
    "trading analysis platform",
    "forex market intelligence",
    "gold market analysis",
    "crypto market intelligence",
    "indices analysis",
    "technical analysis platform",
    "trading education",
    "risk management",
    "market research",
    "financial market analysis",
  ],
  openGraph: {
    title: "About Shenron | Market Intelligence for Modern Traders",
    description:
      "Discover the thinking behind Shenron's market-intelligence experience for forex, gold, crypto and global indices.",
    type: "website",
  },
};

const principles = [
  {
    icon: Eye,
    title: "Clarity over noise",
    description:
      "Markets generate an enormous amount of information. Shenron organizes the most useful concepts into a cleaner experience so traders can focus on context instead of chasing every movement.",
  },
  {
    icon: BrainCircuit,
    title: "Context before conclusions",
    description:
      "A price move rarely exists in isolation. Market structure, momentum, volatility, session conditions and broader context should be considered together.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-aware by design",
    description:
      "Every market idea should have a risk perspective. Shenron puts responsible decision-making alongside technical and market analysis.",
  },
  {
    icon: BookOpen,
    title: "Education that compounds",
    description:
      "The goal is not simply to show a market view. Educational resources help users understand the concepts behind market structure, technical analysis and risk management.",
  },
];

const coverage = [
  {
    icon: CircleDollarSign,
    title: "Forex",
    description:
      "Currency pairs, session behavior, momentum and market structure across major FX markets.",
    href: "/markets/forex",
  },
  {
    icon: Sparkles,
    title: "Gold & Metals",
    description:
      "Precious-metal market context with a focus on gold, volatility and macro-sensitive price behavior.",
    href: "/markets/gold",
  },
  {
    icon: Activity,
    title: "Crypto",
    description:
      "Digital-asset market context with particular attention to momentum, volatility and 24/7 market conditions.",
    href: "/markets/crypto",
  },
  {
    icon: BarChart3,
    title: "Global Indices",
    description:
      "Major equity-index analysis covering trend structure, momentum and broader risk sentiment.",
    href: "/markets/indices",
  },
];

const platformLayers = [
  {
    number: "01",
    title: "Market Context",
    description:
      "Understand what is happening across the market before narrowing your attention to an individual asset.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Technical Structure",
    description:
      "Study trends, support and resistance, momentum and potential changes in market structure.",
    icon: LineChart,
  },
  {
    number: "03",
    title: "Volatility & Momentum",
    description:
      "Evaluate whether a market is expanding, consolidating or moving with meaningful directional strength.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Risk Framework",
    description:
      "Consider invalidation, volatility and position exposure before turning an analysis into a trading decision.",
    icon: ShieldCheck,
  },
];

const workflow = [
  {
    icon: Radar,
    title: "Discover",
    description:
      "Scan the major market categories and identify where meaningful movement or changing conditions deserve attention.",
  },
  {
    icon: TrendingUp,
    title: "Analyze",
    description:
      "Move from a broad market view into technical structure, momentum and volatility context.",
  },
  {
    icon: Target,
    title: "Plan",
    description:
      "Translate analysis into a clearly defined scenario with levels, invalidation and risk considerations.",
  },
  {
    icon: Activity,
    title: "Review",
    description:
      "Return to the market and compare what actually happened with the original analysis and assumptions.",
  },
];

const experiencePoints = [
  "Multi-market coverage",
  "Structured technical context",
  "Market structure education",
  "Momentum and volatility analysis",
  "Risk-aware decision framework",
  "Responsive research experience",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070A0F] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[-220px] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.055] blur-[140px]" />

          <div className="absolute right-[-160px] top-[80px] h-[520px] w-[520px] rounded-full bg-violet-500/[0.055] blur-[140px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(98,230,255,0.9)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                  About Shenron
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                A clearer way to
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
                  understand markets.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Shenron is a market-intelligence experience designed to bring
                market context, technical analysis, risk awareness and trading
                education into one focused workspace.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
                Instead of treating market analysis as a stream of disconnected
                signals, the platform is structured around the questions that
                matter: What is happening? Why might it matter? What should be
                watched next? And what could invalidate the idea?
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/markets"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-cyan-300/25
                    bg-cyan-300/[0.09]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-cyan-100
                    transition-all
                    hover:border-cyan-300/40
                    hover:bg-cyan-300/[0.14]
                  "
                >
                  Explore Markets

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/education"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-slate-300
                    transition-colors
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  Explore Education

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Hero intelligence panel */}

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-cyan-300/[0.025] blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B1017]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                      Shenron Intelligence
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Market Context
                    </p>
                  </div>

                  <span className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-2.5 py-1 text-[9px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Structured
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    ["Market Structure", "Bullish", "Strong"],
                    ["Momentum", "Positive", "Elevated"],
                    ["Volatility", "Moderate", "Controlled"],
                    ["Risk Context", "Defined", "Active"],
                  ].map(([label, state, strength]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-medium text-slate-400">
                          {label}
                        </span>

                        <span className="text-[9px] text-slate-700">
                          {strength}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

                        <span className="text-xs font-semibold text-cyan-200">
                          {state}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    ["FX", "Forex"],
                    ["XAU", "Gold"],
                    ["BTC", "Crypto"],
                  ].map(([symbol, name]) => (
                    <div
                      key={symbol}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                    >
                      <p className="text-[10px] font-semibold text-white">
                        {symbol}
                      </p>

                      <p className="mt-1 text-[8px] text-slate-700">
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POSITIONING
      ========================================================= */}

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                Why Shenron
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built around better questions, not more noise.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-7 text-slate-500">
              <p>
                Modern traders can access more market information than ever.
                Charts, headlines, indicators, economic releases and social
                commentary are available almost instantly.
              </p>

              <p>
                The challenge is often not access to information. It is
                knowing which information matters, how different pieces of
                context connect, and how to turn an observation into a
                disciplined plan.
              </p>

              <p>
                Shenron is designed around that problem. The experience brings
                markets, analysis, education and risk context together so the
                user can move from discovery to understanding without losing
                the bigger picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================= */}

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300/70">
              Our Principles
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The thinking behind the experience.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Every part of the product should make market research easier to
              understand without pretending that markets are predictable.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[#0C1119]
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-300/15
                  "
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MARKET COVERAGE
      ========================================================= */}

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                Market Coverage
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                One workspace across major markets.
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Shenron's information architecture is built around the asset
                classes traders commonly monitor throughout the trading week.
              </p>
            </div>

            <Link
              href="/markets"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
            >
              Browse market intelligence
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {coverage.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[#0C1119]
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-300/15
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-cyan-300">
                      <Icon className="h-4 w-4" />
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                  </div>

                  <h3 className="mt-6 text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PLATFORM MODEL
      ========================================================= */}

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                The Shenron Model
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Four layers of market understanding.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                The platform is organized so that a user can move naturally
                from broad market conditions into increasingly specific
                analysis and risk considerations.
              </p>

              <Link
                href="/analysis"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  px-4
                  py-2.5
                  text-xs
                  font-medium
                  text-slate-300
                  transition-colors
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                See our analysis approach
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {platformLayers.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="
                      grid
                      gap-5
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      p-5
                      transition-colors
                      hover:border-cyan-300/15
                      sm:grid-cols-[55px_45px_1fr]
                      sm:items-start
                    "
                  >
                    <span className="text-xs font-semibold text-cyan-300/60">
                      {item.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-slate-400">
                      <Icon className="h-4 w-4" />
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          USER WORKFLOW
      ========================================================= */}

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300/70">
              Designed for the Workflow
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              From the first market scan to the final review.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
              A useful trading workspace should support the entire research
              process, not just the moment a chart is opened.
            </p>
          </div>

          <div className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.04] text-cyan-300">
                      <Icon className="h-4 w-4" />
                    </span>

                    <span className="text-[9px] font-semibold text-slate-700">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE
      ========================================================= */}

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0B1017]">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative overflow-hidden border-b border-white/[0.06] p-7 sm:p-10 lg:border-b-0 lg:border-r">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/[0.05] blur-[90px]" />

                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-300">
                    <Sparkles className="h-5 w-5" />
                  </span>

                  <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    A modern market workspace.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    Designed to feel focused enough for daily research while
                    remaining approachable for traders who are still building
                    their market-analysis skills.
                  </p>

                  <Link
                    href="/dashboard"
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-cyan-300/20
                      bg-cyan-300/[0.07]
                      px-4
                      py-2.5
                      text-xs
                      font-semibold
                      text-cyan-100
                      transition-colors
                      hover:bg-cyan-300/[0.12]
                    "
                  >
                    Enter Dashboard
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="p-7 sm:p-10">
                <div className="grid gap-3 sm:grid-cols-2">
                  {experiencePoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />

                      <span className="text-xs font-medium text-slate-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5">
                  <div className="flex items-center gap-3">
                    <LockKeyhole className="h-4 w-4 text-slate-500" />

                    <p className="text-xs font-semibold text-slate-300">
                      Information-first experience
                    </p>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Shenron is designed as a frontend market-intelligence and
                    education experience. Market examples and interface data
                    should not be interpreted as personalized financial advice
                    or guaranteed trading outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-cyan-300/[0.025] px-6 py-12 text-center sm:px-10">
            <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-300/[0.045] blur-[120px]" />

            <div className="relative">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-300">
                <Users className="h-5 w-5" />
              </span>

              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Build a better understanding of the market.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
                Explore market intelligence, study technical concepts and
                develop a more structured approach to your trading research.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/markets"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-cyan-300/25
                    bg-cyan-300/[0.09]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-cyan-100
                    transition-colors
                    hover:bg-cyan-300/[0.14]
                  "
                >
                  Explore Markets
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/education"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-slate-300
                    transition-colors
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  Start Learning
                  <BookOpen className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom disclaimer */}

          <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[10px] leading-5 text-slate-700 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Shenron provides market information and educational content for
              informational purposes.
            </p>

            <Link
              href="/risk-disclosure"
              className="inline-flex items-center gap-1 text-slate-600 transition-colors hover:text-slate-400"
            >
              Risk disclosure
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}