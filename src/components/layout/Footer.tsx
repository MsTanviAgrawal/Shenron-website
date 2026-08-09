// import Link from "next/link";
// import {
//   ArrowUpRight,
//   BarChart3,
//   BookOpen,
//   ChevronUp,
//   CircleAlert,
//   LayoutDashboard,
//   Mail,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// const marketLinks = [
//   {
//     label: "Forex Trading",
//     href: "/#forex",
//   },
//   {
//     label: "Gold & Metals",
//     href: "/#gold",
//   },
//   {
//     label: "Crypto Markets",
//     href: "/#crypto",
//   },
//   {
//     label: "Global Indices",
//     href: "/#indices",
//   },
// ];

// const platformLinks = [
//   {
//     label: "Market Intelligence",
//     href: "/#analysis",
//   },
//   {
//     label: "Trading Dashboard",
//     href: "/dashboard",
//   },
//   {
//     label: "Education",
//     href: "/#education",
//   },
//   {
//     label: "How It Works",
//     href: "/#how-it-works",
//   },
// ];

// const educationLinks = [
//   {
//     label: "Forex Trading",
//     href: "/#forex-education",
//   },
//   {
//     label: "Technical Analysis",
//     href: "/#technical-analysis",
//   },
//   {
//     label: "Risk Management",
//     href: "/#risk-management",
//   },
// ];

// const companyLinks = [
//   {
//     label: "About Shenron",
//     href: "/#about",
//   },
//   {
//     label: "Frequently Asked Questions",
//     href: "/#faq",
//   },
//   {
//     label: "Contact & Support",
//     href: "/#contact",
//   },
// ];

// const legalLinks = [
//   {
//     label: "Privacy",
//     href: "/#privacy",
//   },
//   {
//     label: "Terms",
//     href: "/#terms",
//   },
//   {
//     label: "Risk Disclosure",
//     href: "/#risk-disclosure",
//   },
// ];

// function FooterLink({
//   href,
//   children,
// }: {
//   href: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <li>
//       <Link
//         href={href}
//         className="
//           group
//           inline-flex
//           items-center
//           gap-1.5
//           text-sm
//           text-slate-500
//           transition-colors
//           duration-200
//           hover:text-white
//         "
//       >
//         <span>{children}</span>

//         <ArrowUpRight
//           className="
//             h-3
//             w-3
//             opacity-0
//             transition-all
//             duration-200
//             group-hover:-translate-y-0.5
//             group-hover:translate-x-0.5
//             group-hover:opacity-100
//           "
//         />
//       </Link>
//     </li>
//   );
// }

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#06090e]">
//       {/* ================================================================
//           BACKGROUND EFFECTS
//       ================================================================= */}
//       <div
//         aria-hidden="true"
//         className="
//           pointer-events-none
//           absolute
//           -left-32
//           top-0
//           h-80
//           w-80
//           rounded-full
//           bg-cyan-400/[0.035]
//           blur-[120px]
//         "
//       />

//       <div
//         aria-hidden="true"
//         className="
//           pointer-events-none
//           absolute
//           -right-32
//           top-40
//           h-96
//           w-96
//           rounded-full
//           bg-violet-500/[0.035]
//           blur-[140px]
//         "
//       />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* ==============================================================
//             TOP CTA / BRAND AREA
//         ================================================================= */}
//         <div className="border-b border-white/[0.07] py-14 lg:py-16">
//           <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
//             {/* Brand */}
//             <div>
//               <Link
//                 href="/"
//                 className="group inline-flex items-center gap-3"
//                 aria-label="Shenron home"
//               >
//                 {/* Logo mark */}
//                 <span
//                   className="
//                     relative
//                     flex
//                     h-12
//                     w-12
//                     items-center
//                     justify-center
//                     overflow-hidden
//                     rounded-2xl
//                     border
//                     border-cyan-300/20
//                     bg-cyan-300/[0.055]
//                     shadow-[0_0_35px_rgba(98,230,255,0.07)]
//                   "
//                 >
//                   <span
//                     aria-hidden="true"
//                     className="
//                       absolute
//                       inset-0
//                       bg-[radial-gradient(circle_at_50%_25%,rgba(98,230,255,0.18),transparent_65%)]
//                     "
//                   />

//                   <svg
//                     viewBox="0 0 40 40"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="
//                       relative
//                       h-8
//                       w-8
//                       transition-transform
//                       duration-500
//                       group-hover:rotate-6
//                       group-hover:scale-110
//                     "
//                     aria-hidden="true"
//                   >
//                     <path
//                       d="M29.5 8.5C26.6 6.1 22.8 5 18.9 5.5C14.3 6.1 10.8 8.6 10.8 12.1C10.8 15.6 14.1 17.1 19.8 18.1C25.2 19 28.8 20.5 28.8 24.3C28.8 28.5 24.8 31.5 19.2 31.5C15.1 31.5 11.7 30.1 9.1 27.6"
//                       stroke="url(#footer-shenron-gradient)"
//                       strokeWidth="2.8"
//                       strokeLinecap="round"
//                     />

//                     <path
//                       d="M8.5 27.5L12.1 27.1L10.2 30.7"
//                       stroke="url(#footer-shenron-gradient)"
//                       strokeWidth="2.3"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />

//                     <path
//                       d="M12.2 22.7L16.1 19.5L19.4 21.8L24 16.5L28.7 18.7"
//                       stroke="rgba(139,124,255,0.9)"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />

//                     <circle
//                       cx="28.7"
//                       cy="18.7"
//                       r="1.8"
//                       fill="#62E6FF"
//                     />

//                     <defs>
//                       <linearGradient
//                         id="footer-shenron-gradient"
//                         x1="7"
//                         y1="7"
//                         x2="32"
//                         y2="33"
//                         gradientUnits="userSpaceOnUse"
//                       >
//                         <stop stopColor="#62E6FF" />
//                         <stop offset="1" stopColor="#8B7CFF" />
//                       </linearGradient>
//                     </defs>
//                   </svg>
//                 </span>

//                 <span className="flex flex-col">
//                   <span
//                     className="
//                       text-lg
//                       font-semibold
//                       tracking-[0.28em]
//                       text-white
//                     "
//                   >
//                     SHENRON
//                   </span>

//                   <span
//                     className="
//                       text-[9px]
//                       font-medium
//                       tracking-[0.25em]
//                       text-slate-500
//                     "
//                   >
//                     MARKET INTELLIGENCE
//                   </span>
//                 </span>
//               </Link>

//               <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
//                 Market intelligence, technical analysis and trading education
//                 designed to help modern traders understand forex, gold, crypto
//                 and global indices with greater clarity.
//               </p>

//               <div className="mt-6 flex flex-wrap items-center gap-3">
//                 <span
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-emerald-400/15
//                     bg-emerald-400/[0.05]
//                     px-3
//                     py-1.5
//                     text-[10px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.14em]
//                     text-emerald-300
//                   "
//                 >
//                   <span
//                     className="
//                       h-1.5
//                       w-1.5
//                       rounded-full
//                       bg-emerald-300
//                       shadow-[0_0_10px_rgba(52,211,153,0.8)]
//                     "
//                   />

//                   Research-led
//                 </span>

//                 <span
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-white/[0.08]
//                     bg-white/[0.025]
//                     px-3
//                     py-1.5
//                     text-[10px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.14em]
//                     text-slate-500
//                   "
//                 >
//                   <ShieldCheck className="h-3 w-3" />
//                   Risk-aware
//                 </span>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="lg:justify-self-end">
//               <div
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-white/[0.08]
//                   bg-white/[0.025]
//                   p-5
//                   sm:p-6
//                 "
//               >
//                 <div
//                   aria-hidden="true"
//                   className="
//                     absolute
//                     right-0
//                     top-0
//                     h-32
//                     w-32
//                     rounded-full
//                     bg-cyan-400/[0.07]
//                     blur-3xl
//                   "
//                 />

//                 <div className="relative">
//                   <div className="flex items-center gap-2">
//                     <Sparkles className="h-4 w-4 text-cyan-300" />

//                     <span
//                       className="
//                         text-[10px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.18em]
//                         text-slate-500
//                       "
//                     >
//                       Your trading workspace
//                     </span>
//                   </div>

//                   <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
//                     See the market with more context.
//                   </h2>

//                   <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
//                     Explore the Shenron dashboard for market overview,
//                     watchlists, analysis and risk-focused insights.
//                   </p>

//                   <Link
//                     href="/dashboard"
//                     className="
//                       group
//                       mt-5
//                       inline-flex
//                       items-center
//                       gap-2
//                       rounded-xl
//                       border
//                       border-cyan-300/20
//                       bg-cyan-300/[0.08]
//                       px-4
//                       py-2.5
//                       text-sm
//                       font-semibold
//                       text-cyan-100
//                       transition-all
//                       duration-300
//                       hover:border-cyan-300/35
//                       hover:bg-cyan-300/[0.13]
//                       hover:shadow-[0_0_30px_rgba(98,230,255,0.1)]
//                     "
//                   >
//                     Open Dashboard

//                     <ArrowUpRight
//                       className="
//                         h-4
//                         w-4
//                         transition-transform
//                         duration-200
//                         group-hover:-translate-y-0.5
//                         group-hover:translate-x-0.5
//                       "
//                     />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ==============================================================
//             NAVIGATION COLUMNS
//         ================================================================= */}
//         <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
//           {/* Markets */}
//           <div>
//             <div className="flex items-center gap-2">
//               <BarChart3 className="h-4 w-4 text-cyan-300" />

//               <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
//                 Markets
//               </h3>
//             </div>

//             <ul className="mt-5 space-y-3">
//               {marketLinks.map((link) => (
//                 <FooterLink key={link.label} href={link.href}>
//                   {link.label}
//                 </FooterLink>
//               ))}
//             </ul>
//           </div>

//           {/* Platform */}
//           <div>
//             <div className="flex items-center gap-2">
//               <LayoutDashboard className="h-4 w-4 text-cyan-300" />

//               <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
//                 Platform
//               </h3>
//             </div>

//             <ul className="mt-5 space-y-3">
//               {platformLinks.map((link) => (
//                 <FooterLink key={link.label} href={link.href}>
//                   {link.label}
//                 </FooterLink>
//               ))}
//             </ul>
//           </div>

//           {/* Education */}
//           <div>
//             <div className="flex items-center gap-2">
//               <BookOpen className="h-4 w-4 text-violet-300" />

//               <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
//                 Education
//               </h3>
//             </div>

//             <ul className="mt-5 space-y-3">
//               {educationLinks.map((link) => (
//                 <FooterLink key={link.label} href={link.href}>
//                   {link.label}
//                 </FooterLink>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <div className="flex items-center gap-2">
//               <Sparkles className="h-4 w-4 text-violet-300" />

//               <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
//                 Company
//               </h3>
//             </div>

//             <ul className="mt-5 space-y-3">
//               {companyLinks.map((link) => (
//                 <FooterLink key={link.label} href={link.href}>
//                   {link.label}
//                 </FooterLink>
//               ))}
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <div className="flex items-center gap-2">
//               <ShieldCheck className="h-4 w-4 text-emerald-300" />

//               <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
//                 Legal
//               </h3>
//             </div>

//             <ul className="mt-5 space-y-3">
//               {legalLinks.map((link) => (
//                 <FooterLink key={link.label} href={link.href}>
//                   {link.label}
//                 </FooterLink>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* ==============================================================
//             CONTACT / SUPPORT STRIP
//         ================================================================= */}
//         <div
//           className="
//             flex
//             flex-col
//             gap-4
//             rounded-2xl
//             border
//             border-white/[0.07]
//             bg-white/[0.02]
//             p-5
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//             sm:p-6
//           "
//         >
//           <div className="flex items-start gap-3">
//             <span
//               className="
//                 flex
//                 h-9
//                 w-9
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-xl
//                 border
//                 border-white/[0.08]
//                 bg-white/[0.03]
//               "
//             >
//               <Mail className="h-4 w-4 text-slate-400" />
//             </span>

//             <div>
//               <p className="text-sm font-medium text-slate-200">
//                 Need help understanding the platform?
//               </p>

//               <p className="mt-1 text-xs leading-5 text-slate-500">
//                 Explore the FAQ or contact the Shenron support team.
//               </p>
//             </div>
//           </div>

//           <Link
//             href="/#contact"
//             className="
//               group
//               inline-flex
//               shrink-0
//               items-center
//               gap-2
//               text-sm
//               font-semibold
//               text-cyan-300
//               transition-colors
//               hover:text-cyan-200
//             "
//           >
//             Contact Support

//             <ArrowUpRight
//               className="
//                 h-4
//                 w-4
//                 transition-transform
//                 duration-200
//                 group-hover:-translate-y-0.5
//                 group-hover:translate-x-0.5
//               "
//             />
//           </Link>
//         </div>

//         {/* ==============================================================
//             RISK DISCLOSURE
//         ================================================================= */}
//         <div
//           id="risk-disclosure"
//           className="
//             mt-8
//             rounded-2xl
//             border
//             border-amber-300/10
//             bg-amber-300/[0.025]
//             p-5
//             sm:p-6
//           "
//         >
//           <div className="flex items-start gap-3">
//             <span
//               className="
//                 flex
//                 h-9
//                 w-9
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-xl
//                 border
//                 border-amber-300/10
//                 bg-amber-300/[0.05]
//               "
//             >
//               <CircleAlert className="h-4 w-4 text-amber-300" />
//             </span>

//             <div>
//               <h3 className="text-sm font-semibold text-amber-100">
//                 Risk disclosure
//               </h3>

//               <p className="mt-2 max-w-5xl text-xs leading-6 text-slate-500">
//                 Shenron provides market commentary, educational resources,
//                 technical analysis and informational trading content. Nothing
//                 on this website should be considered personalized financial,
//                 investment, legal or tax advice. Trading forex, precious
//                 metals, cryptocurrencies, indices and other leveraged
//                 financial instruments involves significant risk and may result
//                 in partial or total loss of capital. Past performance and
//                 hypothetical examples do not guarantee future results. Always
//                 consider your own financial circumstances and risk tolerance
//                 before making trading decisions.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ==============================================================
//             BOTTOM BAR
//         ================================================================= */}
//         <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <p className="text-xs text-slate-600">
//               © {currentYear} Shenron. All rights reserved.
//             </p>

//             <p className="mt-1 text-[11px] text-slate-700">
//               Market intelligence for modern traders.
//             </p>
//           </div>

//           <div className="flex items-center gap-2 text-xs text-slate-600">
//             <span
//               className="
//                 h-1.5
//                 w-1.5
//                 rounded-full
//                 bg-cyan-300/70
//                 shadow-[0_0_8px_rgba(98,230,255,0.5)]
//               "
//             />

//             <span>Educational & informational use</span>
//           </div>
//         </div>

//         {/* ==============================================================
//             BACK TO TOP
//         ================================================================= */}
//         <div className="pb-8 text-center">
//           <Link
//             href="/"
//             className="
//               group
//               inline-flex
//               items-center
//               gap-2
//               text-[11px]
//               font-medium
//               uppercase
//               tracking-[0.16em]
//               text-slate-600
//               transition-colors
//               hover:text-slate-300
//             "
//           >
//             Back to top

//             <ChevronUp
//               className="
//                 h-3.5
//                 w-3.5
//                 transition-transform
//                 duration-200
//                 group-hover:-translate-y-0.5
//               "
//             />
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#05080D]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* ======================================================
              BRAND
          ======================================================= */}

          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-cyan-300/20
                  bg-cyan-300/[0.06]
                  text-cyan-300
                "
              >
                <Sparkles className="h-5 w-5" />
              </span>

              <span>
                <span className="block text-sm font-semibold tracking-[0.28em] text-white">
                  SHENRON
                </span>

                <span className="block text-[8px] font-medium tracking-[0.22em] text-slate-600">
                  MARKET INTELLIGENCE
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Market intelligence, structured analysis,
              risk awareness and trading education for
              modern traders.
            </p>

            <Link
              href="/dashboard"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-cyan-300/20
                bg-cyan-300/[0.07]
                px-4
                py-2.5
                text-sm
                font-semibold
                text-cyan-100
                transition-colors
                hover:border-cyan-300/35
                hover:bg-cyan-300/[0.12]
              "
            >
              Open Dashboard

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* ======================================================
              MARKETS
          ======================================================= */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Markets
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                href="/markets/forex"
                className="block text-sm text-slate-500 transition-colors hover:text-white"
              >
                Forex
              </Link>

              <Link
                href="/markets/gold"
                className="block text-sm text-slate-500 transition-colors hover:text-white"
              >
                Gold & Metals
              </Link>

              <Link
                href="/markets/crypto"
                className="block text-sm text-slate-500 transition-colors hover:text-white"
              >
                Crypto
              </Link>

              <Link
                href="/markets/indices"
                className="block text-sm text-slate-500 transition-colors hover:text-white"
              >
                Global Indices
              </Link>
            </div>
          </div>

          {/* ======================================================
              PLATFORM
          ======================================================= */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Platform
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                href="/analysis"
                className="block text-sm text-slate-500 transition-colors hover:text-white"
              >
                Analysis
              </Link>

              <Link
                href="/education"
                className="block text-sm text-slate-500 transition-colors hover:text-white"
              >
                Education
              </Link>

              <Link
                href="/about"
                className="block text-sm text-slate-500 transition-colors hover:text-white"
              >
                About Shenron
              </Link>

              <Link
                href="/faq"
                className="block text-sm text-slate-500 transition-colors hover:text-white"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* ======================================================
              EDUCATION
          ======================================================= */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Education
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                href="/education/forex-trading"
                className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white"
              >
                <BarChart3 className="h-3.5 w-3.5" />
                Forex Trading
              </Link>

              <Link
                href="/education/technical-analysis"
                className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white"
              >
                <BarChart3 className="h-3.5 w-3.5" />
                Technical Analysis
              </Link>

              <Link
                href="/education/risk-management"
                className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Risk Management
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white"
              >
                <BookOpen className="h-3.5 w-3.5" />
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================
            DISCLAIMER
        ========================================================= */}

        <div className="mt-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />

            <p className="text-xs leading-6 text-slate-600">
              Shenron is a market intelligence and
              educational experience. Market data shown
              in this frontend is illustrative and should
              not be treated as real-time financial
              information or financial advice.
            </p>
          </div>
        </div>

        {/* ========================================================
            BOTTOM BAR
        ========================================================= */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.06]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} Shenron. All
            rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/#privacy"
              className="text-xs text-slate-600 transition-colors hover:text-slate-300"
            >
              Privacy
            </Link>

            <Link
              href="/#terms"
              className="text-xs text-slate-600 transition-colors hover:text-slate-300"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="text-xs text-slate-600 transition-colors hover:text-slate-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}