// import type { Metadata } from "next";
// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   BarChart3,
//   Bitcoin,
//   CircleDollarSign,
//   LineChart,
//   ShieldCheck,
//   Sparkles,
//   TrendingUp,
// } from "lucide-react";

// import { markets, type MarketData } from "@/data/market";

// export const metadata: Metadata = {
//   title: "Markets | Forex, Gold, Crypto & Global Indices",
//   description:
//     "Explore Orvix market intelligence across forex, gold, crypto and global indices with structured analysis, market context and trading education.",
//   keywords: [
//     "markets",
//     "forex market",
//     "gold market",
//     "crypto market",
//     "global indices",
//     "market analysis",
//     "trading markets",
//     "financial market intelligence",
//   ],
// };

// const marketIcons = {
//   forex: CircleDollarSign,
//   gold: Sparkles,
//   crypto: Bitcoin,
//   indices: TrendingUp,
// };

// export default function MarketsPage() {
//   return (
//     <div className="min-h-screen overflow-hidden bg-[#070A0F] text-white">
//       {/* ================================================================
//           HERO
//       ================================================================= */}
//       <section className="relative border-b border-white/[0.06] pt-28">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[140px]"
//         />

//         <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
//           <div className="max-w-3xl">
//             <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/10 bg-cyan-300/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
//               <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(98,230,255,0.8)]" />
//               Global Markets
//             </span>

//             <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
//               Understand the markets.
//               <span className="block bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
//                 Not just the price.
//               </span>
//             </h1>

//             <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
//               Explore forex, gold, crypto and global indices through a cleaner
//               market-intelligence experience built around price structure,
//               momentum, volatility, market context and risk awareness.
//             </p>

//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 href="/dashboard"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] px-5 py-3.5 text-sm font-semibold text-cyan-100 transition-all hover:border-cyan-300/35 hover:bg-cyan-300/[0.13]"
//               >
//                 Open Dashboard
//                 <ArrowUpRight className="h-4 w-4" />
//               </Link>

//               <Link
//                 href="#market-grid"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-3.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
//               >
//                 Explore Markets
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================================================================
//           MARKET GRID
//       ================================================================= */}
//       <section id="market-grid" className="py-20 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//             <div>
//               <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
//                 Explore Markets
//               </span>

//               <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
//                 Four markets.
//                 <span className="text-slate-500">
//                   {" "}
//                   One intelligence layer.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-md text-xs leading-6 text-slate-600">
//               Select a market to explore its structure, key drivers, educational
//               topics and illustrative analysis.
//             </p>
//           </div>

//           <div className="mt-10 grid gap-4 md:grid-cols-2">
//             {markets.map((market: MarketData) => {
//               const Icon = marketIcons[market.slug as keyof typeof marketIcons];

//               return (
//                 <Link
//                   key={market.slug}
//                   href={`/markets/${market.slug}`}
//                   className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0C1119] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/15 hover:bg-[#0E141D] sm:p-7"
//                 >
//                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/[0.025] blur-3xl transition-opacity group-hover:opacity-100" />

//                   <div className="relative">
//                     <div className="flex items-start justify-between">
//                       <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] text-cyan-300">
//                         <Icon className="h-5 w-5" />
//                       </span>

//                       <ArrowUpRight className="h-5 w-5 text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
//                     </div>

//                     <div className="mt-8">
//                       <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
//                         {market.category}
//                       </p>

//                       <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
//                         {market.name}
//                       </h3>

//                       <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
//                         {market.description}
//                       </p>
//                     </div>

//                     <div className="mt-8 grid grid-cols-3 gap-2">
//                       <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
//                         <p className="text-[9px] uppercase tracking-wider text-slate-700">
//                           Symbol
//                         </p>

//                         <p className="mt-1 text-xs font-semibold text-slate-300">
//                           {market.symbol}
//                         </p>
//                       </div>

//                       <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
//                         <p className="text-[9px] uppercase tracking-wider text-slate-700">
//                           Bias
//                         </p>

//                         <p className="mt-1 text-xs font-semibold text-emerald-400">
//                           {market.bias}
//                         </p>
//                       </div>

//                       <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
//                         <p className="text-[9px] uppercase tracking-wider text-slate-700">
//                           Volatility
//                         </p>

//                         <p className="mt-1 text-xs font-semibold text-amber-300">
//                           {market.volatility}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="mt-6 flex items-center justify-between border-t border-white/[0.05] pt-5">
//                       <span className="text-xs font-semibold text-cyan-300">
//                         Explore {market.shortName}
//                       </span>

//                       <span className="flex items-center gap-1 text-[10px] text-slate-700">
//                         Market analysis
//                         <ArrowRight className="h-3 w-3" />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ================================================================
//           INTELLIGENCE FRAMEWORK
//       ================================================================= */}
//       <section className="border-y border-white/[0.06] bg-[#090E15] py-20 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
//             <div>
//               <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
//                 Market Intelligence
//               </span>

//               <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
//                 More context.
//                 <span className="block text-slate-500">
//                   Less information overload.
//                 </span>
//               </h2>

//               <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500">
//                 Orvix organizes market research around the information
//                 traders commonly need to understand before making a decision.
//               </p>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2">
//               {[
//                 {
//                   icon: LineChart,
//                   title: "Price Structure",
//                   text: "Understand trends, support, resistance and important market levels.",
//                 },
//                 {
//                   icon: TrendingUp,
//                   title: "Momentum",
//                   text: "Evaluate whether market momentum is strengthening or weakening.",
//                 },
//                 {
//                   icon: BarChart3,
//                   title: "Volatility",
//                   text: "Recognize changing market conditions and potential risk.",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "Risk Awareness",
//                   text: "Keep risk management central to the trading process.",
//                 },
//               ].map((feature) => {
//                 const Icon = feature.icon;

//                 return (
//                   <div
//                     key={feature.title}
//                     className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5"
//                   >
//                     <Icon className="h-5 w-5 text-cyan-300" />

//                     <h3 className="mt-5 text-sm font-semibold text-white">
//                       {feature.title}
//                     </h3>

//                     <p className="mt-2 text-xs leading-6 text-slate-600">
//                       {feature.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================================================================
//           SEO CONTENT
//       ================================================================= */}
//       <section className="py-20 sm:py-24">
//         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Market Education
//             </span>

//             <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
//               A practical approach to financial markets.
//             </h2>
//           </div>

//           <div className="mt-10 space-y-5 text-sm leading-8 text-slate-500">
//             <p>
//               Understanding financial markets requires more than watching price
//               charts. Forex trading, gold markets, cryptocurrencies and global
//               indices can all respond to different economic, technical and
//               sentiment-driven factors.
//             </p>

//             <p>
//               Orvix's market intelligence experience is designed to help
//               traders organize that information. From forex market analysis
//               and XAU/USD price structure to Bitcoin market trends and global
//               index analysis, each market page provides a focused framework for
//               understanding what may influence price movement.
//             </p>

//             <p>
//               Technical analysis can help identify market structure, trends,
//               support and resistance, momentum and volatility. However,
//               technical analysis should be considered alongside broader market
//               context and appropriate risk management rather than used as a
//               guarantee of future performance.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================================================================
//           CTA
//       ================================================================= */}
//       <section className="border-t border-white/[0.06] bg-[#090E15] py-20 sm:py-24">
//         <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
//           <Sparkles className="mx-auto h-6 w-6 text-cyan-300" />

//           <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
//             Ready to explore the market?
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
//             Open the Orvix dashboard and bring market context, watchlists,
//             analysis and risk awareness into one workspace.
//           </p>

//           <Link
//             href="/dashboard"
//             className="mt-8 inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] px-5 py-3.5 text-sm font-semibold text-cyan-100 transition-all hover:border-cyan-300/35 hover:bg-cyan-300/[0.13]"
//           >
//             Open Dashboard
//             <ArrowUpRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }



import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markets | Orvix Market Intelligence",
  description:
    "Explore forex, gold, crypto and global indices with structured market intelligence, trends and risk-aware analysis.",
};

export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-[#05080d] px-6 pb-20 pt-32 text-white">
      <div className="mx-auto max-w-7xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Markets
        </span>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Global Market Intelligence
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
          Explore structured market insights across forex,
          precious metals, crypto assets and global indices.
        </p>
      </div>
    </main>
  );
}

