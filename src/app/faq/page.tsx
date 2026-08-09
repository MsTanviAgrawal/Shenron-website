"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  CircleDollarSign,
  GraduationCap,
  HelpCircle,
  LifeBuoy,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from "lucide-react";

type FAQCategory =
  | "All"
  | "Platform"
  | "Markets"
  | "Analysis"
  | "Education"
  | "Risk";

type FAQItem = {
  question: string;
  answer: string;
  category: Exclude<FAQCategory, "All">;
  popular?: boolean;
};

const categories: {
  label: FAQCategory;
  description: string;
  icon: typeof CircleHelp;
}[] = [
  {
    label: "All",
    description: "Browse all frequently asked questions",
    icon: CircleHelp,
  },
  {
    label: "Platform",
    description: "Using the Shenron experience",
    icon: Sparkles,
  },
  {
    label: "Markets",
    description: "Forex, gold, crypto and indices",
    icon: BarChart3,
  },
  {
    label: "Analysis",
    description: "Charts, trends and market context",
    icon: Activity,
  },
  {
    label: "Education",
    description: "Learning and trading concepts",
    icon: GraduationCap,
  },
  {
    label: "Risk",
    description: "Risk awareness and responsible trading",
    icon: ShieldCheck,
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is Shenron?",
    answer:
      "Shenron is a market-intelligence and trading-education experience designed to help users explore forex, gold and metals, crypto and global indices. The platform brings market context, technical analysis concepts, educational resources and risk-aware thinking into one focused interface.",
    category: "Platform",
    popular: true,
  },
  {
    question: "Is Shenron a trading or brokerage platform?",
    answer:
      "No. Shenron is designed primarily as a frontend market-intelligence and educational experience. It does not replace your broker, exchange or other execution platform. Users should independently verify prices, spreads, order details and account conditions with their chosen provider before making any transaction.",
    category: "Platform",
    popular: true,
  },
  {
    question: "What markets can I explore on Shenron?",
    answer:
      "The platform is organized around four major market areas: forex, gold and metals, crypto and global indices. Each category is designed to provide a focused way to explore market structure, momentum, volatility and educational context.",
    category: "Markets",
    popular: true,
  },
  {
    question: "Does Shenron provide real-time market data?",
    answer:
      "The frontend architecture can display market-context information and illustrative market examples. Actual execution prices, spreads, liquidity and order conditions should always be confirmed through an appropriate broker or market-data provider. Demonstration values shown in the interface should not be treated as guaranteed live execution prices.",
    category: "Markets",
  },
  {
    question: "What is forex market analysis?",
    answer:
      "Forex market analysis is the process of evaluating currency markets using factors such as price structure, momentum, volatility, market sessions and broader economic context. Shenron's forex section is designed to help users organize those concepts into a clearer research workflow.",
    category: "Markets",
  },
  {
    question: "What can I learn from the Gold & Metals section?",
    answer:
      "The Gold & Metals area focuses on precious-metal market context, including gold-related price behavior, volatility, market structure and factors that can influence the trading environment. It is intended as an educational and research resource rather than a guaranteed directional signal.",
    category: "Markets",
  },
  {
    question: "Why is crypto analysis different from traditional markets?",
    answer:
      "Crypto markets operate continuously and can experience substantial volatility and liquidity changes. Shenron's crypto section therefore emphasizes momentum, volatility, market structure and the importance of validating conditions before making a trading decision.",
    category: "Markets",
  },
  {
    question: "What are global indices?",
    answer:
      "Global indices represent baskets or benchmarks of securities and are commonly used to understand broader equity-market performance. Shenron's indices area focuses on market structure, momentum, volatility and broader risk context around major index markets.",
    category: "Markets",
  },
  {
    question: "What does technical analysis mean?",
    answer:
      "Technical analysis is a method of studying market behavior through price, volume where available, trends, support and resistance, momentum and other chart-based information. It can help structure scenarios, but it cannot guarantee the future direction of a market.",
    category: "Analysis",
    popular: true,
  },
  {
    question: "What is market structure?",
    answer:
      "Market structure describes how price is behaving through sequences of highs, lows, ranges, breakouts and other price relationships. Understanding structure can help traders distinguish between trending, consolidating and potentially changing market conditions.",
    category: "Analysis",
  },
  {
    question: "What are support and resistance levels?",
    answer:
      "Support and resistance are areas where price has historically encountered increased buying or selling interest. They are better treated as zones or areas of attention rather than guaranteed reversal points. Market conditions can change, so these levels should be evaluated alongside broader context.",
    category: "Analysis",
  },
  {
    question: "What is momentum in technical analysis?",
    answer:
      "Momentum describes the strength and persistence of price movement. Strong momentum can support an existing trend, while weakening momentum can indicate that a move deserves closer review. Momentum should be evaluated with market structure and volatility rather than in isolation.",
    category: "Analysis",
  },
  {
    question: "Why does volatility matter?",
    answer:
      "Volatility describes how significantly market prices are moving over a given period. Higher volatility can create larger price swings and wider uncertainty, while lower volatility can accompany consolidation. Understanding volatility can help with planning and risk awareness.",
    category: "Analysis",
  },
  {
    question: "Does Shenron provide buy and sell signals?",
    answer:
      "The platform is designed around market context, analysis and education rather than presenting guaranteed buy or sell outcomes. Any example analysis should be treated as informational and independently evaluated before a user makes a financial decision.",
    category: "Analysis",
  },
  {
    question: "Is Shenron suitable for beginners?",
    answer:
      "Yes. The platform is intentionally structured so beginners can start with market fundamentals and educational material before progressing toward technical analysis, market structure and risk-management concepts.",
    category: "Education",
    popular: true,
  },
  {
    question: "Where should I start if I am new to trading?",
    answer:
      "Start with the education section and build a foundation in market terminology, forex basics, technical analysis and risk management. After that, use the market pages to connect those concepts with real market structures and examples.",
    category: "Education",
  },
  {
    question: "What is risk management in trading?",
    answer:
      "Risk management is the process of controlling how much capital is exposed to an individual trading idea or portfolio decision. It can include position sizing, predefined invalidation levels, diversification considerations and maintaining a consistent risk framework.",
    category: "Risk",
    popular: true,
  },
  {
    question: "Can technical analysis guarantee profitable trades?",
    answer:
      "No. Technical analysis is a framework for interpreting market information, not a guarantee of future results. Markets can behave unexpectedly because of economic releases, liquidity changes, geopolitical developments and many other factors.",
    category: "Risk",
  },
  {
    question: "Why should I use predefined risk limits?",
    answer:
      "Predefined risk limits can help reduce emotional decision-making and prevent one market idea from creating disproportionate portfolio exposure. The appropriate limits depend on the individual and should be determined responsibly rather than copied from a generic example.",
    category: "Risk",
  },
  {
    question: "Does Shenron provide personalized financial advice?",
    answer:
      "No. Shenron's market information, analysis concepts and educational material are intended for general informational and educational purposes. They should not be treated as personalized investment, financial or trading advice.",
    category: "Risk",
  },
  {
    question: "Can I use Shenron's market analysis to place trades?",
    answer:
      "You can use the educational material and market context as part of your own research process, but you should independently evaluate every decision. Verify current prices, spreads, liquidity, market conditions and execution details through your broker or relevant market-data source before placing an order.",
    category: "Risk",
  },
  {
    question: "Why does Shenron emphasize education instead of predictions?",
    answer:
      "Markets are uncertain. A strong educational experience should help users understand how markets work and how to evaluate scenarios instead of encouraging blind dependence on predictions. Shenron is therefore designed around context, research and disciplined decision-making.",
    category: "Education",
  },
  {
    question: "How can I contact Shenron for support?",
    answer:
      "Use the Contact & Support section of the website for general questions, feedback or assistance. The FAQ is intended to answer common questions quickly, while the contact page provides a dedicated route for questions that need further attention.",
    category: "Platform",
  },
];

const popularQuestions = faqItems.filter((item) => item.popular);

export default function FAQPage() {
  const [activeCategory, setActiveCategory] =
    useState<FAQCategory>("All");

  const [searchQuery, setSearchQuery] = useState("");

  const [openQuestion, setOpenQuestion] = useState<string | null>(
    popularQuestions[0]?.question ?? null,
  );

  const filteredFAQs = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return faqItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      if (!normalizedQuery) {
        return matchesCategory;
      }

      const searchableText = [
        item.question,
        item.answer,
        item.category,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        searchableText.includes(normalizedQuery)
      );
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (category: FAQCategory) => {
    setActiveCategory(category);
    setOpenQuestion(null);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setOpenQuestion(null);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#070A0F] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-[-220px] h-[620px] w-[620px] rounded-full bg-cyan-400/[0.055] blur-[150px]" />

          <div className="absolute right-[-180px] top-[60px] h-[540px] w-[540px] rounded-full bg-violet-500/[0.05] blur-[150px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-8 lg:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-1.5">
              <CircleHelp className="h-3.5 w-3.5 text-cyan-300" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                Help Center
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Answers before you
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
                enter the market.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Find answers about Shenron, market analysis, forex, gold,
              crypto, global indices, trading education and responsible
              risk management.
            </p>
          </div>

          {/* Search */}

          <div className="mx-auto mt-9 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search questions, markets, analysis..."
                aria-label="Search frequently asked questions"
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#0C1119]/90
                  pl-11
                  pr-12
                  text-sm
                  text-white
                  outline-none
                  shadow-[0_20px_70px_rgba(0,0,0,0.25)]
                  placeholder:text-slate-700
                  focus:border-cyan-300/25
                  focus:bg-[#0E141D]
                "
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Clear FAQ search"
                  className="
                    absolute
                    right-3
                    top-1/2
                    flex
                    h-8
                    w-8
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-lg
                    text-slate-600
                    transition-colors
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-slate-700">
              <span>Try:</span>

              {["Forex", "Technical analysis", "Risk management"].map(
                (query) => (
                  <button
                    key={query}
                    type="button"
                    onClick={() => setSearchQuery(query)}
                    className="transition-colors hover:text-cyan-300"
                  >
                    {query}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK CATEGORY NAVIGATION
      ========================================================= */}

      <section className="border-b border-white/[0.06] bg-[#080C12]">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.label;

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(category.label)
                  }
                  className={`
                    group
                    flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-xl
                    border
                    px-3.5
                    py-2.5
                    text-xs
                    font-medium
                    transition-all
                    ${
                      active
                        ? "border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-200"
                        : "border-white/[0.06] bg-white/[0.02] text-slate-500 hover:border-white/[0.1] hover:bg-white/[0.04] hover:text-white"
                    }
                  `}
                  aria-pressed={active}
                >
                  <Icon
                    className={`
                      h-3.5
                      w-3.5
                      ${
                        active
                          ? "text-cyan-300"
                          : "text-slate-600 group-hover:text-slate-400"
                      }
                    `}
                  />

                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          POPULAR QUESTIONS
      ========================================================= */}

      {activeCategory === "All" && !searchQuery && (
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                  Start Here
                </span>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Popular questions
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  The answers visitors look for first.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300/70" />
                {faqItems.length} answers available
              </div>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {popularQuestions.map((item) => {
                const open = openQuestion === item.question;

                return (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() =>
                      setOpenQuestion(
                        open ? null : item.question,
                      )
                    }
                    className={`
                      group
                      rounded-2xl
                      border
                      p-5
                      text-left
                      transition-all
                      ${
                        open
                          ? "border-cyan-300/15 bg-cyan-300/[0.035]"
                          : "border-white/[0.07] bg-[#0C1119] hover:border-white/[0.11] hover:bg-white/[0.025]"
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300/60">
                          {item.category}
                        </span>

                        <h3 className="mt-2 text-sm font-semibold leading-6 text-white">
                          {item.question}
                        </h3>
                      </div>

                      <ChevronDown
                        className={`
                          mt-1
                          h-4
                          w-4
                          shrink-0
                          text-slate-600
                          transition-transform
                          duration-200
                          ${
                            open
                              ? "rotate-180 text-cyan-300"
                              : "group-hover:text-slate-400"
                          }
                        `}
                      />
                    </div>

                    {open && (
                      <p className="mt-4 border-t border-white/[0.06] pt-4 text-xs leading-6 text-slate-500">
                        {item.answer}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          FAQ CONTENT
      ========================================================= */}

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[250px_1fr]">
            {/* Sidebar */}

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-4">
                <p className="px-2 pb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                  FAQ Categories
                </p>

                <div className="space-y-1">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const active =
                      activeCategory === category.label;

                    return (
                      <button
                        key={category.label}
                        type="button"
                        onClick={() =>
                          handleCategoryChange(
                            category.label,
                          )
                        }
                        className={`
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          px-3
                          py-2.5
                          text-left
                          transition-colors
                          ${
                            active
                              ? "bg-cyan-300/[0.07] text-cyan-200"
                              : "text-slate-500 hover:bg-white/[0.035] hover:text-white"
                          }
                        `}
                      >
                        <Icon className="h-4 w-4 shrink-0" />

                        <span className="min-w-0">
                          <span className="block text-xs font-medium">
                            {category.label}
                          </span>

                          <span className="mt-0.5 hidden text-[9px] leading-4 text-slate-700 xl:block">
                            {category.description}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Support card */}

              <div className="mt-4 rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.04] text-cyan-300">
                  <LifeBuoy className="h-4 w-4" />
                </span>

                <h3 className="mt-5 text-sm font-semibold text-white">
                  Still need help?
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Can't find what you're looking for? Send us your
                  question through the support page.
                </p>

                <Link
                  href="/contact"
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-1.5
                    text-xs
                    font-semibold
                    text-cyan-300
                    hover:text-cyan-200
                  "
                >
                  Contact support
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>

            {/* Questions */}

            <div>
              <div className="flex items-end justify-between gap-4 border-b border-white/[0.06] pb-5">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                    {activeCategory === "All"
                      ? "Knowledge Base"
                      : `${activeCategory} Questions`}
                  </span>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    Frequently asked questions
                  </h2>
                </div>

                <span className="hidden rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[9px] font-medium text-slate-600 sm:block">
                  {filteredFAQs.length}{" "}
                  {filteredFAQs.length === 1
                    ? "question"
                    : "questions"}
                </span>
              </div>

              {filteredFAQs.length > 0 ? (
                <div className="mt-5 space-y-2">
                  {filteredFAQs.map((item, index) => {
                    const open = openQuestion === item.question;

                    return (
                      <div
                        key={item.question}
                        className={`
                          overflow-hidden
                          rounded-2xl
                          border
                          transition-all
                          duration-200
                          ${
                            open
                              ? "border-cyan-300/15 bg-[#0C1119]"
                              : "border-white/[0.06] bg-[#0B1017] hover:border-white/[0.1]"
                          }
                        `}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenQuestion(
                              open
                                ? null
                                : item.question,
                            )
                          }
                          className="flex w-full items-center gap-4 px-5 py-5 text-left"
                          aria-expanded={open}
                        >
                          <span
                            className={`
                              flex
                              h-7
                              w-7
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              border
                              text-[9px]
                              font-semibold
                              ${
                                open
                                  ? "border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-300"
                                  : "border-white/[0.06] bg-white/[0.02] text-slate-700"
                              }
                            `}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium leading-6 text-slate-200">
                              {item.question}
                            </span>

                            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.12em] text-slate-700">
                              {item.category}
                            </span>
                          </span>

                          <span
                            className={`
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              transition-colors
                              ${
                                open
                                  ? "bg-cyan-300/[0.07] text-cyan-300"
                                  : "text-slate-700"
                              }
                            `}
                          >
                            <ChevronDown
                              className={`
                                h-4
                                w-4
                                transition-transform
                                duration-200
                                ${
                                  open
                                    ? "rotate-180"
                                    : ""
                                }
                              `}
                            />
                          </span>
                        </button>

                        {open && (
                          <div className="px-5 pb-5">
                            <div className="ml-11 border-l border-cyan-300/10 pl-5">
                              <p className="max-w-3xl text-sm leading-7 text-slate-500">
                                {item.answer}
                              </p>

                              {item.category === "Risk" && (
                                <div className="mt-4 flex max-w-3xl gap-3 rounded-xl border border-amber-300/10 bg-amber-300/[0.025] p-4">
                                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-300/70" />

                                  <p className="text-[10px] leading-5 text-slate-600">
                                    Market information is
                                    educational in nature. Trading
                                    involves risk, and past
                                    performance does not guarantee
                                    future results.
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-5 rounded-2xl border border-white/[0.07] bg-[#0C1119] px-6 py-16 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] text-slate-600">
                    <Search className="h-5 w-5" />
                  </span>

                  <h3 className="mt-5 text-sm font-semibold text-white">
                    No matching questions
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-600">
                    Try another search term or browse one of the
                    FAQ categories.
                  </p>

                  <button
                    type="button"
                    onClick={clearSearch}
                    className="
                      mt-5
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
                      text-slate-400
                      hover:bg-white/[0.05]
                      hover:text-white
                    "
                  >
                    Clear search
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEARNING CTA
      ========================================================= */}

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/education"
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.07]
                bg-[#0C1119]
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-300/15
              "
            >
              <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full bg-cyan-300/[0.045] blur-[90px]" />

              <div className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.04] text-cyan-300">
                  <BookOpen className="h-5 w-5" />
                </span>

                <h2 className="mt-6 text-xl font-semibold text-white">
                  Want to understand markets better?
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Explore structured educational content covering forex
                  trading, technical analysis and risk management.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-cyan-300">
                  Explore Education
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <Link
              href="/markets"
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.07]
                bg-[#0C1119]
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-300/15
              "
            >
              <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full bg-violet-300/[0.04] blur-[90px]" />

              <div className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/10 bg-violet-300/[0.04] text-violet-300">
                  <BarChart3 className="h-5 w-5" />
                </span>

                <h2 className="mt-6 text-xl font-semibold text-white">
                  Ready to explore the markets?
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Browse forex, gold, crypto and global indices with
                  structured market context.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-violet-300">
                  Explore Markets
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL DISCLAIMER
      ========================================================= */}

      <section>
        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-5">
            <div className="flex items-start gap-3">
              <Target className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600">
                  Important Information
                </p>

                <p className="mt-2 max-w-5xl text-[10px] leading-5 text-slate-700">
                  Shenron provides market information and educational
                  material for general informational purposes. Nothing
                  on this website should be interpreted as personalized
                  financial, investment or trading advice. Trading
                  financial markets involves risk, and users should
                  conduct independent research and consider their own
                  circumstances before making financial decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}