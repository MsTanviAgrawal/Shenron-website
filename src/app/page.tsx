import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  ChevronDown,
  CircleCheck,
  LineChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
  Zap,
} from "lucide-react";

const markets = [
  {
    id: "forex",
    name: "Forex",
    symbol: "EUR/USD",
    price: "1.1742",
    change: "+0.31%",
    description:
      "Understand currency market structure, momentum, volatility and major trading sessions.",
    icon: BarChart3,
  },
  {
    id: "gold",
    name: "Gold & Metals",
    symbol: "XAU/USD",
    price: "2,438.21",
    change: "+1.82%",
    description:
      "Explore gold market context, key levels, momentum and risk conditions.",
    icon: Sparkles,
  },
  {
    id: "crypto",
    name: "Crypto",
    symbol: "BTC/USD",
    price: "118,240",
    change: "+2.18%",
    description:
      "Follow digital asset momentum, volatility and broader crypto market conditions.",
    icon: Zap,
  },
  {
    id: "indices",
    name: "Global Indices",
    symbol: "NASDAQ",
    price: "21,482",
    change: "+0.72%",
    description:
      "Monitor major global indices and understand trends, momentum and market sentiment.",
    icon: TrendingUp,
  },
];

const intelligenceFeatures = [
  {
    title: "Market Structure",
    description:
      "Identify trends, support and resistance, liquidity zones and important price levels.",
    icon: LineChart,
  },
  {
    title: "Momentum Context",
    description:
      "Understand whether current market momentum is strengthening, weakening or consolidating.",
    icon: TrendingUp,
  },
  {
    title: "Risk Awareness",
    description:
      "Evaluate volatility and market conditions before making a trading decision.",
    icon: ShieldCheck,
  },
];

const educationItems = [
  {
    id: "forex-education",
    title: "Forex Trading",
    description:
      "Learn currency pairs, market sessions, price movements and the fundamentals of forex trading.",
    icon: BarChart3,
  },
  {
    id: "technical-analysis",
    title: "Technical Analysis",
    description:
      "Understand charts, trends, market structure, support, resistance and technical indicators.",
    icon: LineChart,
  },
  {
    id: "risk-management",
    title: "Risk Management",
    description:
      "Learn why position sizing, risk awareness and disciplined trading matter.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What is Shenron?",
    answer:
      "Shenron is a market intelligence and trading education platform designed to help users understand forex, gold, crypto and global indices through structured market context and analysis.",
  },
  {
    question: "What markets does Shenron cover?",
    answer:
      "The Shenron platform focuses on forex, gold and metals, cryptocurrencies and major global indices.",
  },
  {
    question: "Is Shenron a trading broker?",
    answer:
      "No. Shenron is designed as a market intelligence and educational experience. It does not act as a broker or execute trades.",
  },
  {
    question: "Does Shenron guarantee trading profits?",
    answer:
      "No. Market analysis and educational information cannot guarantee trading results. Financial markets involve significant risk, and users should make decisions based on their own circumstances and risk tolerance.",
  },
  {
    question: "Can beginners use Shenron?",
    answer:
      "Yes. Shenron is designed to present market concepts in a structured way, while the education section provides introductory material for people learning about forex, technical analysis and risk management.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#070A0F] text-white">
      {/* ================================================================
          HERO
      ================================================================= */}
      <section className="relative flex min-h-screen items-center pt-28">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-20
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-cyan-400/[0.055]
            blur-[140px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-200px]
            top-1/3
            h-[400px]
            w-[400px]
            rounded-full
            bg-violet-500/[0.045]
            blur-[120px]
          "
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Hero copy */}
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-300/10
                  bg-cyan-300/[0.04]
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-cyan-300
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_10px_rgba(98,230,255,0.8)]
                  "
                />

                Market Intelligence Platform
              </div>

              <h1
                className="
                  mt-7
                  max-w-4xl
                  text-5xl
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-white
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Trade with context.
                <span className="block bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                  Not noise.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Shenron brings market intelligence, technical analysis, risk
                awareness and trading education into one focused workspace for
                modern traders.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/dashboard"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-cyan-300/20
                    bg-cyan-300/[0.09]
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    text-cyan-100
                    shadow-[0_0_35px_rgba(98,230,255,0.06)]
                    transition-all
                    duration-300
                    hover:border-cyan-300/35
                    hover:bg-cyan-300/[0.14]
                    hover:shadow-[0_0_40px_rgba(98,230,255,0.12)]
                  "
                >
                  Explore Dashboard

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="#markets"
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
                    py-3.5
                    text-sm
                    font-semibold
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-white/[0.14]
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  Explore Markets

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-600">
                <span className="flex items-center gap-2">
                  <CircleCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Market context
                </span>

                <span className="flex items-center gap-2">
                  <CircleCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Technical analysis
                </span>

                <span className="flex items-center gap-2">
                  <CircleCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Risk awareness
                </span>
              </div>
            </div>

            {/* Hero dashboard visual */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="
                  absolute
                  -inset-10
                  rounded-[40px]
                  bg-cyan-300/[0.035]
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.09]
                  bg-[#0C1119]/90
                  shadow-[0_40px_100px_rgba(0,0,0,0.45)]
                  backdrop-blur-xl
                "
              >
                {/* Window top */}
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/70" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                  </div>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Shenron Intelligence
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-slate-500">XAU/USD</p>

                      <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                        2,438.21
                      </p>

                      <p className="mt-1 text-xs font-medium text-emerald-400">
                        +1.82% today
                      </p>
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-emerald-400/15
                        bg-emerald-400/[0.05]
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-emerald-300
                      "
                    >
                      BULLISH
                    </span>
                  </div>

                  {/* Chart */}
                  <div className="relative mt-8 h-56 overflow-hidden rounded-2xl border border-white/[0.05] bg-[#080D14]">
                    <div
                      className="
                        absolute
                        inset-0
                        bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                        bg-[size:40px_40px]
                      "
                    />

                    <svg
                      viewBox="0 0 600 220"
                      preserveAspectRatio="none"
                      className="absolute inset-0 h-full w-full"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient
                          id="heroChart"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#62E6FF" />
                          <stop offset="100%" stopColor="#8B7CFF" />
                        </linearGradient>

                        <linearGradient
                          id="heroArea"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#62E6FF"
                            stopOpacity="0.18"
                          />
                          <stop
                            offset="100%"
                            stopColor="#62E6FF"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 178 C30 170 35 151 65 158 C95 166 98 130 128 138 C158 146 170 110 198 120 C226 130 235 95 265 105 C295 115 312 85 342 92 C372 100 385 72 415 81 C445 90 460 48 490 59 C520 70 540 35 570 43 C582 46 592 38 600 30 L600 220 L0 220 Z"
                        fill="url(#heroArea)"
                      />

                      <path
                        d="M0 178 C30 170 35 151 65 158 C95 166 98 130 128 138 C158 146 170 110 198 120 C226 130 235 95 265 105 C295 115 312 85 342 92 C372 100 385 72 415 81 C445 90 460 48 490 59 C520 70 540 35 570 43 C582 46 592 38 600 30"
                        fill="none"
                        stroke="url(#heroChart)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      <circle
                        cx="570"
                        cy="43"
                        r="5"
                        fill="#62E6FF"
                      />

                      <circle
                        cx="570"
                        cy="43"
                        r="10"
                        fill="#62E6FF"
                        opacity="0.1"
                      />
                    </svg>

                    <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[9px] text-slate-700">
                      <span>09:00</span>
                      <span>12:00</span>
                      <span>15:00</span>
                      <span>18:00</span>
                    </div>
                  </div>

                  {/* Intelligence cards */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                      <p className="text-[9px] uppercase tracking-wider text-slate-600">
                        Momentum
                      </p>
                      <p className="mt-1 text-xs font-semibold text-white">
                        Strong
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                      <p className="text-[9px] uppercase tracking-wider text-slate-600">
                        Volatility
                      </p>
                      <p className="mt-1 text-xs font-semibold text-amber-300">
                        Medium
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                      <p className="text-[9px] uppercase tracking-wider text-slate-600">
                        Risk
                      </p>
                      <p className="mt-1 text-xs font-semibold text-cyan-300">
                        Moderate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-14 flex justify-center lg:mt-20">
            <Link
              href="#markets"
              className="flex flex-col items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:text-slate-400"
            >
              Explore

              <ChevronDown className="h-4 w-4 animate-bounce" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          MARKET TICKER
      ================================================================= */}
      <div className="border-y border-white/[0.06] bg-[#090E15]">
        <div className="mx-auto flex max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          {[
            ["XAU/USD", "2,438.21", "+1.82%"],
            ["EUR/USD", "1.1742", "+0.31%"],
            ["BTC/USD", "118,240", "+2.18%"],
            ["NASDAQ", "21,482", "+0.72%"],
          ].map(([symbol, price, change]) => (
            <div
              key={symbol}
              className="
                flex
                min-w-[180px]
                flex-1
                items-center
                justify-between
                border-r
                border-white/[0.05]
                px-5
                py-4
                first:border-l
              "
            >
              <span className="text-xs font-medium text-slate-500">
                {symbol}
              </span>

              <span className="text-xs font-semibold text-slate-300">
                {price}
              </span>

              <span className="text-[10px] font-semibold text-emerald-400">
                {change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================================
          MARKETS
      ================================================================= */}
      <section id="markets" className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Markets
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              One platform.
              <span className="text-slate-500"> Four major markets.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Explore structured market context across forex, gold, crypto and
              global indices without unnecessary information overload.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {markets.map((market) => {
              const Icon = market.icon;

              return (
                <Link
                  key={market.id}
                  id={market.id}
                  href={`#${market.id}-market`}
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
                    hover:bg-[#0E141D]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                  "
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        text-cyan-300
                        transition-colors
                        group-hover:border-cyan-300/20
                        group-hover:bg-cyan-300/[0.07]
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                  </div>

                  <p className="mt-6 text-xs text-slate-600">
                    {market.name}
                  </p>

                  <div className="mt-1 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-300">
                        {market.symbol}
                      </p>

                      <p className="mt-1 text-xl font-semibold tracking-tight text-white">
                        {market.price}
                      </p>
                    </div>

                    <span className="text-xs font-semibold text-emerald-400">
                      {market.change}
                    </span>
                  </div>

                  <p className="mt-5 text-xs leading-6 text-slate-600">
                    {market.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-cyan-300">
                    Explore market
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          MARKET INTELLIGENCE
      ================================================================= */}
      <section
        id="analysis"
        className="relative border-y border-white/[0.06] bg-[#090E15] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Market Intelligence
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                See the market
                <span className="block text-slate-500">
                  before you trade it.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Trading decisions become clearer when price, momentum,
                volatility and risk are viewed together. Shenron organizes
                these concepts into a focused market intelligence experience.
              </p>

              <Link
                href="/dashboard"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-cyan-300/15
                  bg-cyan-300/[0.06]
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-cyan-200
                  transition-all
                  hover:border-cyan-300/30
                  hover:bg-cyan-300/[0.1]
                "
              >
                Explore Dashboard

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid gap-4">
              {intelligenceFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="
                      group
                      flex
                      gap-5
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#0C1119]
                      p-5
                      transition-all
                      duration-300
                      hover:border-white/[0.12]
                    "
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.04] text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-semibold tracking-[0.18em] text-slate-700">
                          0{index + 1}
                        </span>

                        <h3 className="text-sm font-semibold text-white">
                          {feature.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHY SHENRON / ABOUT
      ================================================================= */}
      <section id="about" className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                Why Shenron
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for clearer
                <span className="block text-slate-500">
                  trading decisions.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Markets move quickly. The challenge is not finding more
                information. It is understanding which information matters.
                Shenron is designed around clarity, context and disciplined
                market analysis.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Market Context",
                  text: "Understand broader conditions before focusing on individual setups.",
                  icon: BrainCircuit,
                },
                {
                  title: "Structured Analysis",
                  text: "Organize trends, momentum and key levels in one view.",
                  icon: LineChart,
                },
                {
                  title: "Risk Awareness",
                  text: "Consider volatility and market conditions before acting.",
                  icon: ShieldCheck,
                },
                {
                  title: "Focused Workflow",
                  text: "Reduce information overload and concentrate on what matters.",
                  icon: WalletCards,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5"
                  >
                    <Icon className="h-5 w-5 text-cyan-300" />

                    <h3 className="mt-5 text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          HOW IT WORKS
      ================================================================= */}
      <section
        id="how-it-works"
        className="border-y border-white/[0.06] bg-[#090E15] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              How It Works
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A simpler way to
              <span className="text-slate-500"> read the market.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose your market",
                text: "Select forex, gold, crypto or global indices and focus on the market that matters to you.",
              },
              {
                number: "02",
                title: "Understand the context",
                text: "Review market structure, momentum, volatility and key levels before forming a view.",
              },
              {
                number: "03",
                title: "Build your plan",
                text: "Use the information to create a disciplined trading process based on your own risk tolerance.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-6"
              >
                <span className="text-xs font-semibold tracking-[0.18em] text-cyan-300">
                  {step.number}
                </span>

                <h3 className="mt-8 text-base font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          DASHBOARD PREVIEW
      ================================================================= */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Your Trading Workspace
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Everything important.
              <span className="block text-slate-500">
                One focused dashboard.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Explore a cleaner way to view markets, price movement, market
              sentiment, risk and watchlists.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-6xl">
            <div className="absolute -inset-10 rounded-[50px] bg-cyan-400/[0.035] blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B1018] shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
              <div className="flex border-b border-white/[0.07]">
                <div className="hidden w-48 border-r border-white/[0.07] p-5 sm:block">
                  <div className="text-sm font-semibold tracking-[0.18em] text-white">
                    SHENRON
                  </div>

                  <div className="mt-7 space-y-2">
                    {["Overview", "Markets", "Analysis", "Watchlist"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className={`rounded-lg px-3 py-2 text-xs ${
                            index === 0
                              ? "bg-cyan-300/[0.07] text-cyan-300"
                              : "text-slate-600"
                          }`}
                        >
                          {item}
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="flex-1 p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-600">Market Overview</p>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        Good afternoon, Trader
                      </h3>
                    </div>

                    <span className="hidden rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-xs text-slate-500 sm:block">
                      Today
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {markets.map((market) => (
                      <div
                        key={market.symbol}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                      >
                        <p className="text-[10px] text-slate-600">
                          {market.symbol}
                        </p>

                        <p className="mt-2 text-sm font-semibold text-white">
                          {market.price}
                        </p>

                        <p className="mt-1 text-[10px] font-semibold text-emerald-400">
                          {market.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_0.8fr]">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-slate-400">
                          Market Performance
                        </p>

                        <span className="text-[10px] text-slate-600">
                          XAU/USD
                        </span>
                      </div>

                      <div className="relative mt-5 h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />

                        <svg
                          viewBox="0 0 600 200"
                          preserveAspectRatio="none"
                          className="absolute inset-0 h-full w-full"
                          aria-hidden="true"
                        >
                          <path
                            d="M0 160 C45 152 60 140 95 148 C130 156 150 122 185 130 C220 138 240 112 275 120 C310 128 335 92 370 104 C405 116 420 70 455 82 C490 94 520 52 550 60 C570 66 585 45 600 35"
                            fill="none"
                            stroke="#62E6FF"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <p className="text-xs font-medium text-slate-400">
                        Market Bias
                      </p>

                      <div className="mt-6">
                        <p className="text-3xl font-semibold text-emerald-400">
                          72%
                        </p>

                        <p className="mt-1 text-xs text-slate-600">
                          Bullish conditions
                        </p>
                      </div>

                      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                      </div>

                      <div className="mt-4 flex justify-between text-[10px] text-slate-600">
                        <span>Low Risk</span>
                        <span>Moderate</span>
                        <span>High</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/[0.06] p-5 text-center sm:p-6">
                <Link
                  href="/dashboard"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-cyan-300/20
                    bg-cyan-300/[0.07]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-cyan-100
                    transition-all
                    hover:border-cyan-300/35
                    hover:bg-cyan-300/[0.12]
                  "
                >
                  Explore Full Dashboard

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          EDUCATION
      ================================================================= */}
      <section
        id="education"
        className="border-y border-white/[0.06] bg-[#090E15] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                Trading Education
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Learn the market.
                <span className="block text-slate-500">
                  Improve the process.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                Build a stronger foundation with practical educational
                content covering forex trading, technical analysis and risk
                management.
              </p>

              <Link
                href="#faq"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
              >
                Learn more about Shenron

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid gap-4">
              {educationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="group rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5 transition-all hover:border-white/[0.12]"
                  >
                    <div className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/10 bg-violet-300/[0.04] text-violet-300">
                        <Icon className="h-4 w-4" />
                      </span>

                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ
      ================================================================= */}
      <section id="faq" className="py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Frequently asked questions.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Learn more about Shenron, its market intelligence approach and
              how the platform is designed to be used.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-[#0C1119]
                  px-5
                  transition-colors
                  hover:border-white/[0.12]
                "
              >
                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-4
                    py-5
                    text-sm
                    font-medium
                    text-slate-200
                  "
                >
                  <span>{faq.question}</span>

                  <ChevronDown className="h-4 w-4 shrink-0 text-slate-600 transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <div className="border-t border-white/[0.05] pb-5 pt-4">
                  <p className="text-sm leading-7 text-slate-500">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CONTACT / FINAL CTA
      ================================================================= */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#090E15] py-24 sm:py-28"
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[400px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.04]
            blur-[130px]
          "
        />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-300">
            <Sparkles className="h-5 w-5" />
          </div>

          <h2 className="mt-7 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Build a better
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              trading process.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Explore market intelligence, technical analysis and educational
            resources designed to help you approach financial markets with
            greater context and discipline.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-cyan-300/20
                bg-cyan-300/[0.08]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-cyan-100
                transition-all
                hover:border-cyan-300/35
                hover:bg-cyan-300/[0.13]
              "
            >
              Open Dashboard
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="#faq"
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
                py-3.5
                text-sm
                font-semibold
                text-slate-300
                transition-all
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          LEGAL ANCHORS
          
          These are intentionally small placeholders because you asked
          for only landing + dashboard pages. They give the Footer's
          Privacy and Terms links a real destination without creating
          unnecessary routes.
      ================================================================= */}
      <section
        id="privacy"
        className="border-t border-white/[0.05] bg-[#06090E] py-14"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-slate-600" />

            <div>
              <h2 className="text-sm font-semibold text-slate-300">
                Privacy
              </h2>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                Shenron is currently presented as a frontend product
                experience. No user account, personal data database or
                backend service is connected in this frontend-only version.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="terms"
        className="border-t border-white/[0.05] bg-[#06090E] py-14"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <BookOpen className="mt-1 h-5 w-5 shrink-0 text-slate-600" />

            <div>
              <h2 className="text-sm font-semibold text-slate-300">
                Terms of Use
              </h2>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                Information displayed by this frontend prototype is for
                educational and informational purposes. Market data shown in
                the interface is illustrative mock data and should not be
                treated as real-time financial information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}