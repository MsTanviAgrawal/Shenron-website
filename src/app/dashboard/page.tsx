// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import {
//   Activity,
//   ArrowDownRight,
//   ArrowUpRight,
//   ArrowRight,
//   BarChart3,
//   Bell,
//   BookOpen,
//   CalendarDays,
//   ChevronDown,
//   CircleHelp,
//   Clock3,
//   LayoutDashboard,
//   LineChart,
//   Menu,
//   MoreHorizontal,
//   PanelLeftClose,
//   PanelLeftOpen,
//   Search,
//   Settings,
//   ShieldCheck,
//   Sparkles,
//   Star,
//   TrendingDown,
//   TrendingUp,
//   WalletCards,
//   X,
// } from "lucide-react";

// /* ==========================================================================
//    MOCK MARKET DATA

//    Frontend-only data. Replace with an API later if the project evolves.
// ============================================================================ */

// const markets = [
//   {
//     symbol: "XAU/USD",
//     name: "Gold",
//     price: "2,438.21",
//     change: "+1.82%",
//     direction: "up",
//     bias: "Bullish",
//     volatility: "Medium",
//     session: "London / NY",
//   },
//   {
//     symbol: "EUR/USD",
//     name: "Euro / US Dollar",
//     price: "1.1742",
//     change: "+0.31%",
//     direction: "up",
//     bias: "Neutral",
//     volatility: "Low",
//     session: "London / NY",
//   },
//   {
//     symbol: "BTC/USD",
//     name: "Bitcoin",
//     price: "118,240",
//     change: "+2.18%",
//     direction: "up",
//     bias: "Bullish",
//     volatility: "High",
//     session: "24 / 7",
//   },
//   {
//     symbol: "NASDAQ",
//     name: "Nasdaq 100",
//     price: "21,482",
//     change: "+0.72%",
//     direction: "up",
//     bias: "Bullish",
//     volatility: "Medium",
//     session: "US Cash",
//   },
// ];

// const watchlist = [
//   {
//     symbol: "XAU/USD",
//     name: "Gold",
//     price: "2,438.21",
//     change: "+1.82%",
//     direction: "up",
//   },
//   {
//     symbol: "EUR/USD",
//     name: "Euro / US Dollar",
//     price: "1.1742",
//     change: "+0.31%",
//     direction: "up",
//   },
//   {
//     symbol: "GBP/USD",
//     name: "British Pound",
//     price: "1.3528",
//     change: "-0.18%",
//     direction: "down",
//   },
//   {
//     symbol: "BTC/USD",
//     name: "Bitcoin",
//     price: "118,240",
//     change: "+2.18%",
//     direction: "up",
//   },
//   {
//     symbol: "ETH/USD",
//     name: "Ethereum",
//     price: "4,282.60",
//     change: "+1.46%",
//     direction: "up",
//   },
// ];

// const sidebarItems = [
//   {
//     label: "Overview",
//     icon: LayoutDashboard,
//     href: "/dashboard",
//   },
//   {
//     label: "Markets",
//     icon: BarChart3,
//     href: "/markets",
//   },
//   {
//     label: "Analysis",
//     icon: LineChart,
//     href: "/analysis",
//   },
//   {
//     label: "Watchlist",
//     icon: Star,
//     href: "/dashboard#watchlist",
//   },
//   {
//     label: "Risk Monitor",
//     icon: ShieldCheck,
//     href: "/dashboard#risk",
//   },
// ];

// const chartPoints = [
//   42, 47, 44, 51, 49, 58, 55, 61, 59, 67, 63, 70, 68, 77, 74, 81, 79, 88,
//   84, 94,
// ];

// /* ==========================================================================
//    SMALL REUSABLE COMPONENTS
// ============================================================================ */

// function StatusBadge({
//   children,
//   variant = "default",
// }: {
//   children: React.ReactNode;
//   variant?: "default" | "success" | "warning" | "danger" | "info";
// }) {
//   const styles = {
//     default: "border-white/[0.08] bg-white/[0.03] text-slate-400",
//     success: "border-emerald-400/15 bg-emerald-400/[0.05] text-emerald-300",
//     warning: "border-amber-400/15 bg-amber-400/[0.05] text-amber-300",
//     danger: "border-red-400/15 bg-red-400/[0.05] text-red-300",
//     info: "border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300",
//   };

//   return (
//     <span
//       className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold ${styles[variant]}`}
//     >
//       {children}
//     </span>
//   );
// }

// function MiniSparkline({
//   direction = "up",
// }: {
//   direction?: "up" | "down";
// }) {
//   return (
//     <svg
//       viewBox="0 0 100 36"
//       preserveAspectRatio="none"
//       className="h-8 w-20"
//       aria-hidden="true"
//     >
//       <path
//         d={
//           direction === "up"
//             ? "M0 29 C10 27 12 20 20 23 C28 26 31 15 39 18 C47 21 52 10 60 14 C68 18 71 7 80 10 C88 13 92 4 100 5"
//             : "M0 7 C10 8 12 17 20 14 C28 11 31 23 39 20 C47 17 52 27 60 23 C68 20 71 30 80 26 C88 23 92 32 100 31"
//         }
//         fill="none"
//         stroke={direction === "up" ? "#62E6FF" : "#FF6577"}
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// /* ==========================================================================
//    SIDEBAR
// ============================================================================ */

// function DashboardSidebar({
//   collapsed,
//   mobileOpen,
//   onCloseMobile,
// }: {
//   collapsed: boolean;
//   mobileOpen: boolean;
//   onCloseMobile: () => void;
// }) {
//   return (
//     <>
//       {/* Mobile backdrop */}
//       {mobileOpen && (
//         <button
//           type="button"
//           aria-label="Close dashboard navigation"
//           onClick={onCloseMobile}
//           className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
//         />
//       )}

//       <aside
//         className={`
//           fixed
//           inset-y-0
//           left-0
//           z-50
//           flex
//           flex-col
//           border-r
//           border-white/[0.07]
//           bg-[#080C12]
//           transition-all
//           duration-300
//           lg:z-30
//           ${collapsed ? "w-[76px]" : "w-[250px]"}
//           ${
//             mobileOpen
//               ? "translate-x-0"
//               : "-translate-x-full lg:translate-x-0"
//           }
//         `}
//       >
//         {/* Brand */}
//         <div
//           className={`
//             flex
//             h-[76px]
//             shrink-0
//             items-center
//             border-b
//             border-white/[0.07]
//             px-5
//             ${collapsed ? "justify-center" : "justify-between"}
//           `}
//         >
//           <Link
//             href="/"
//             className="group flex items-center gap-3"
//             onClick={onCloseMobile}
//           >
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
//                 border-cyan-300/20
//                 bg-cyan-300/[0.06]
//               "
//             >
//               <svg
//                 viewBox="0 0 40 40"
//                 fill="none"
//                 className="h-6 w-6"
//                 aria-hidden="true"
//               >
//                 <path
//                   d="M29.5 8.5C26.6 6.1 22.8 5 18.9 5.5C14.3 6.1 10.8 8.6 10.8 12.1C10.8 15.6 14.1 17.1 19.8 18.1C25.2 19 28.8 20.5 28.8 24.3C28.8 28.5 24.8 31.5 19.2 31.5C15.1 31.5 11.7 30.1 9.1 27.6"
//                   stroke="url(#sidebar-gradient)"
//                   strokeWidth="2.8"
//                   strokeLinecap="round"
//                 />

//                 <path
//                   d="M12.2 22.7L16.1 19.5L19.4 21.8L24 16.5L28.7 18.7"
//                   stroke="#8B7CFF"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />

//                 <circle
//                   cx="28.7"
//                   cy="18.7"
//                   r="1.8"
//                   fill="#62E6FF"
//                 />

//                 <defs>
//                   <linearGradient
//                     id="sidebar-gradient"
//                     x1="7"
//                     y1="7"
//                     x2="32"
//                     y2="33"
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop stopColor="#62E6FF" />
//                     <stop offset="1" stopColor="#8B7CFF" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </span>

//             {!collapsed && (
//               <span>
//                 <span className="block text-sm font-semibold tracking-[0.24em] text-white">
//                   Orvix
//                 </span>

//                 <span className="mt-0.5 block text-[8px] font-medium tracking-[0.2em] text-slate-600">
//                   MARKET INTELLIGENCE
//                 </span>
//               </span>
//             )}
//           </Link>

//           {/* Close mobile */}
//           <button
//             type="button"
//             onClick={onCloseMobile}
//             className="rounded-lg p-2 text-slate-500 hover:bg-white/[0.04] hover:text-white lg:hidden"
//             aria-label="Close navigation"
//           >
//             <X className="h-4 w-4" />
//           </button>
//         </div>

//         {/* Main navigation */}
//         <div className="flex-1 overflow-y-auto px-3 py-5">
//           {!collapsed && (
//             <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-700">
//               Workspace
//             </p>
//           )}

//           <nav className="space-y-1">
//             {sidebarItems.map((item, index) => {
//               const Icon = item.icon;
//               const active = index === 0;

//               return (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   onClick={onCloseMobile}
//                   title={collapsed ? item.label : undefined}
//                   className={`
//                     group
//                     relative
//                     flex
//                     items-center
//                     gap-3
//                     rounded-xl
//                     px-3
//                     py-2.5
//                     text-sm
//                     transition-all
//                     duration-200
//                     ${
//                       active
//                         ? "bg-cyan-300/[0.07] text-cyan-200"
//                         : "text-slate-500 hover:bg-white/[0.035] hover:text-slate-200"
//                     }
//                     ${collapsed ? "justify-center" : ""}
//                   `}
//                 >
//                   {active && (
//                     <span className="absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-cyan-300" />
//                   )}

//                   <Icon
//                     className={`
//                       h-[17px]
//                       w-[17px]
//                       shrink-0
//                       ${
//                         active
//                           ? "text-cyan-300"
//                           : "text-slate-600 group-hover:text-slate-300"
//                       }
//                     `}
//                   />

//                   {!collapsed && <span>{item.label}</span>}
//                 </Link>
//               );
//             })}
//           </nav>

//           {!collapsed && (
//             <>
//               <p className="mb-3 mt-9 px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-700">
//                 Resources
//               </p>

//               <nav className="space-y-1">
//                 <Link
//                   href="/#education"
//                   onClick={onCloseMobile}
//                   className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500 transition-colors hover:bg-white/[0.035] hover:text-slate-200"
//                 >
//                   <BookOpen className="h-[17px] w-[17px] text-slate-600" />
//                   Education
//                 </Link>

//                 <Link
//                   href="/#how-it-works"
//                   onClick={onCloseMobile}
//                   className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500 transition-colors hover:bg-white/[0.035] hover:text-slate-200"
//                 >
//                   <CircleHelp className="h-[17px] w-[17px] text-slate-600" />
//                   How It Works
//                 </Link>
//               </nav>
//             </>
//           )}
//         </div>

       
//         <div className="border-t border-white/[0.07] p-3">
//           <Link
//             href="/#contact"
//             onClick={onCloseMobile}
//             title={collapsed ? "Support" : undefined}
//             className={`
//               flex
//               items-center
//               gap-3
//               rounded-xl
//               px-3
//               py-2.5
//               text-sm
//               text-slate-500
//               transition-colors
//               hover:bg-white/[0.035]
//               hover:text-slate-200
//               ${collapsed ? "justify-center" : ""}
//             `}
//           >
//             <CircleHelp className="h-[17px] w-[17px] text-slate-600" />

//             {!collapsed && <span>Support</span>}
//           </Link>

//           <Link
//             href="/"
//             onClick={onCloseMobile}
//             title={collapsed ? "Back to website" : undefined}
//             className={`
//               mt-1
//               flex
//               items-center
//               gap-3
//               rounded-xl
//               px-3
//               py-2.5
//               text-sm
//               text-slate-500
//               transition-colors
//               hover:bg-white/[0.035]
//               hover:text-slate-200
//               ${collapsed ? "justify-center" : ""}
//             `}
//           >
//             <ArrowUpRight className="h-[17px] w-[17px] text-slate-600" />

//             {!collapsed && <span>Back to website</span>}
//           </Link>
//         </div>
//       </aside>
//     </>
//   );
// }

// /* ==========================================================================
//    TOPBAR
// ============================================================================ */

// function DashboardTopbar({
//   onOpenMobile,
//   onToggleSidebar,
//   collapsed,
// }: {
//   onOpenMobile: () => void;
//   onToggleSidebar: () => void;
//   collapsed: boolean;
// }) {
//   return (
//     <header className="sticky top-0 z-20 border-b border-white/[0.07] bg-[#070A0F]/85 backdrop-blur-xl">
//       <div className="flex h-[76px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
//         <div className="flex min-w-0 items-center gap-3">
//           {/* Mobile menu */}
//           <button
//             type="button"
//             onClick={onOpenMobile}
//             className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-400 hover:text-white lg:hidden"
//             aria-label="Open dashboard navigation"
//           >
//             <Menu className="h-4 w-4" />
//           </button>

//           {/* Desktop collapse */}
//           <button
//             type="button"
//             onClick={onToggleSidebar}
//             className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-500 transition-colors hover:text-white lg:flex"
//             aria-label={
//               collapsed ? "Expand dashboard sidebar" : "Collapse dashboard sidebar"
//             }
//           >
//             {collapsed ? (
//               <PanelLeftOpen className="h-4 w-4" />
//             ) : (
//               <PanelLeftClose className="h-4 w-4" />
//             )}
//           </button>

//           <div className="hidden min-w-0 sm:block">
//             <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">
//               Orvix Workspace
//             </p>

//             <h1 className="mt-0.5 truncate text-sm font-semibold text-white">
//               Market Overview
//             </h1>
//           </div>
//         </div>

//         {/* Search */}
//         <div className="hidden max-w-md flex-1 md:block">
//           <div className="relative">
//             <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

//             <input
//               type="search"
//               placeholder="Search markets, symbols..."
//               className="
//                 h-10
//                 w-full
//                 rounded-xl
//                 border
//                 border-white/[0.07]
//                 bg-white/[0.025]
//                 pl-10
//                 pr-16
//                 text-xs
//                 text-white
//                 outline-none
//                 placeholder:text-slate-700
//                 focus:border-cyan-300/20
//                 focus:bg-white/[0.035]
//               "
//             />

//             <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/[0.06] px-1.5 py-0.5 text-[9px] text-slate-700 lg:block">
//               /
//             </span>
//           </div>
//         </div>

//         <div className="flex items-center gap-2">
//           <button
//             type="button"
//             className="hidden h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-500 transition-colors hover:text-white sm:flex"
//             aria-label="Economic calendar"
//           >
//             <CalendarDays className="h-4 w-4" />
//           </button>

//           <button
//             type="button"
//             className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-500 transition-colors hover:text-white"
//             aria-label="Notifications"
//           >
//             <Bell className="h-4 w-4" />

//             <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(98,230,255,0.8)]" />
//           </button>

//           <div className="ml-1 hidden h-9 items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-2.5 sm:flex">
//             <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300/20 to-violet-300/20 text-[9px] font-bold text-cyan-200">
//               S
//             </span>

//             <span className="text-xs font-medium text-slate-400">
//               Trader
//             </span>

//             <ChevronDown className="h-3 w-3 text-slate-700" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// /* ==========================================================================
//    MARKET CARD
// ============================================================================ */

// function MarketOverviewCard({
//   market,
// }: {
//   market: (typeof markets)[number];
// }) {
//   const isPositive = market.direction === "up";

//   return (
//     <Link
//       href={
//         market.symbol === "XAU/USD"
//           ? "/#gold"
//           : market.symbol === "BTC/USD"
//             ? "/#crypto"
//             : market.symbol === "NASDAQ"
//               ? "/#indices"
//               : "/#forex"
//       }
//       className="
//         group
//         rounded-2xl
//         border
//         border-white/[0.07]
//         bg-[#0C1119]
//         p-4
//         transition-all
//         duration-300
//         hover:-translate-y-0.5
//         hover:border-cyan-300/15
//         hover:bg-[#0E141D]
//       "
//     >
//       <div className="flex items-start justify-between gap-3">
//         <div>
//           <p className="text-xs font-semibold text-slate-300">
//             {market.symbol}
//           </p>

//           <p className="mt-1 text-[10px] text-slate-600">{market.name}</p>
//         </div>

//         <MiniSparkline direction={isPositive ? "up" : "down"} />
//       </div>

//       <div className="mt-5 flex items-end justify-between">
//         <div>
//           <p className="text-xl font-semibold tracking-tight text-white">
//             {market.price}
//           </p>

//           <p
//             className={`mt-1 flex items-center gap-1 text-[10px] font-semibold ${
//               isPositive ? "text-emerald-400" : "text-red-400"
//             }`}
//           >
//             {isPositive ? (
//               <ArrowUpRight className="h-3 w-3" />
//             ) : (
//               <ArrowDownRight className="h-3 w-3" />
//             )}

//             {market.change}
//           </p>
//         </div>

//         <StatusBadge variant={market.bias === "Bullish" ? "success" : "default"}>
//           {market.bias}
//         </StatusBadge>
//       </div>

//       <div className="mt-4 flex items-center justify-between border-t border-white/[0.05] pt-3 text-[9px] text-slate-700">
//         <span>{market.session}</span>
//         <span>{market.volatility} volatility</span>
//       </div>
//     </Link>
//   );
// }

// /* ==========================================================================
//    MAIN DASHBOARD
// ============================================================================ */

// export default function DashboardPage() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
//   const [activeTimeframe, setActiveTimeframe] = useState("1D");

//   const sidebarWidth = sidebarCollapsed ? "lg:pl-[76px]" : "lg:pl-[250px]";

//   return (
//     <div className="min-h-screen bg-[#070A0F] text-white">
//       <DashboardSidebar
//         collapsed={sidebarCollapsed}
//         mobileOpen={mobileSidebarOpen}
//         onCloseMobile={() => setMobileSidebarOpen(false)}
//       />

//       <div className={`transition-[padding] duration-300 ${sidebarWidth}`}>
//         <DashboardTopbar
//           collapsed={sidebarCollapsed}
//           onOpenMobile={() => setMobileSidebarOpen(true)}
//           onToggleSidebar={() => setSidebarCollapsed((current) => !current)}
//         />

//         <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
//           {/* ============================================================
//               PAGE HEADER
//           ============================================================ */}
//           <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
//             <div>
//               <div className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

//                 <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
//                   Market session active
//                 </span>
//               </div>

//               <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
//                 Good afternoon, Trader.
//               </h2>

//               <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
//                 Review market context, momentum and risk conditions before
//                 building your trading plan.
//               </p>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="hidden items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 text-xs text-slate-500 sm:flex">
//                 <Clock3 className="h-3.5 w-3.5" />
//                 Sunday, Aug 9
//               </div>

//               <Link
//                 href="/#markets"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-xl
//                   border
//                   border-cyan-300/15
//                   bg-cyan-300/[0.06]
//                   px-3.5
//                   py-2.5
//                   text-xs
//                   font-semibold
//                   text-cyan-200
//                   transition-all
//                   hover:border-cyan-300/30
//                   hover:bg-cyan-300/[0.1]
//                 "
//               >
//                 Explore Markets
//                 <ArrowUpRight className="h-3.5 w-3.5" />
//               </Link>
//             </div>
//           </section>

//           {/* ============================================================
//               MARKET OVERVIEW
//           ============================================================ */}
//           <section className="mt-8">
//             <div className="mb-4 flex items-center justify-between">
//               <div>
//                 <h3 className="text-sm font-semibold text-white">
//                   Market Overview
//                 </h3>

//                 <p className="mt-1 text-xs text-slate-600">
//                   Illustrative market data for the frontend experience.
//                 </p>
//               </div>

//               <StatusBadge variant="info">
//                 <Activity className="mr-1 h-3 w-3" />
//                 Monitoring
//               </StatusBadge>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
//               {markets.map((market) => (
//                 <MarketOverviewCard
//                   key={market.symbol}
//                   market={market}
//                 />
//               ))}
//             </div>
//           </section>

//           {/* ============================================================
//               MAIN ANALYSIS AREA
//           ============================================================ */}
//           <section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.45fr)]">
//             {/* Chart */}
//             <div
//               id="analysis"
//               className="
//                 overflow-hidden
//                 rounded-2xl
//                 border
//                 border-white/[0.07]
//                 bg-[#0C1119]
//               "
//             >
//               <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] p-5 sm:flex-row sm:items-center">
//                 <div>
//                   <div className="flex items-center gap-3">
//                     <h3 className="text-sm font-semibold text-white">
//                       XAU/USD Market Analysis
//                     </h3>

//                     <StatusBadge variant="success">Bullish</StatusBadge>
//                   </div>

//                   <p className="mt-1 text-xs text-slate-600">
//                     Gold • London / New York session context
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1">
//                   {["1H", "4H", "1D", "1W"].map((timeframe) => (
//                     <button
//                       key={timeframe}
//                       type="button"
//                       onClick={() => setActiveTimeframe(timeframe)}
//                       className={`
//                         rounded-lg
//                         px-3
//                         py-1.5
//                         text-[10px]
//                         font-semibold
//                         transition-colors
//                         ${
//                           activeTimeframe === timeframe
//                             ? "bg-white/[0.08] text-white"
//                             : "text-slate-600 hover:text-slate-300"
//                         }
//                       `}
//                     >
//                       {timeframe}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="p-5">
//                 <div className="flex flex-wrap items-end justify-between gap-4">
//                   <div>
//                     <p className="text-3xl font-semibold tracking-tight text-white">
//                       2,438.21
//                     </p>

//                     <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-400">
//                       <ArrowUpRight className="h-3.5 w-3.5" />
//                       +43.54 (+1.82%)
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-4 text-[10px] text-slate-600">
//                     <span>
//                       Support{" "}
//                       <strong className="ml-1 font-semibold text-slate-400">
//                         2,410
//                       </strong>
//                     </span>

//                     <span>
//                       Resistance{" "}
//                       <strong className="ml-1 font-semibold text-slate-400">
//                         2,455
//                       </strong>
//                     </span>
//                   </div>
//                 </div>

//                 {/* Chart area */}
//                 <div className="relative mt-6 h-[310px] overflow-hidden rounded-xl border border-white/[0.05] bg-[#080D14]">
//                   {/* Grid */}
//                   <div
//                     aria-hidden="true"
//                     className="
//                       absolute
//                       inset-0
//                       bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
//                       bg-[size:50px_50px]
//                     "
//                   />

//                   {/* Price labels */}
//                   <div className="absolute right-3 top-4 z-10 space-y-[45px] text-[9px] text-slate-700">
//                     <span className="block">2,460</span>
//                     <span className="block">2,450</span>
//                     <span className="block">2,440</span>
//                     <span className="block">2,430</span>
//                     <span className="block">2,420</span>
//                   </div>

//                   {/* Support line */}
//                   <div className="absolute left-0 right-0 top-[65%] border-t border-dashed border-emerald-400/15">
//                     <span className="absolute left-3 -top-4 rounded bg-emerald-400/[0.05] px-2 py-1 text-[8px] font-medium text-emerald-400/70">
//                       SUPPORT 2,410
//                     </span>
//                   </div>

//                   {/* Resistance line */}
//                   <div className="absolute left-0 right-0 top-[20%] border-t border-dashed border-red-400/10">
//                     <span className="absolute left-3 -top-4 rounded bg-red-400/[0.04] px-2 py-1 text-[8px] font-medium text-red-400/60">
//                       RESISTANCE 2,455
//                     </span>
//                   </div>

//                   {/* Chart SVG */}
//                   <svg
//                     viewBox="0 0 1000 320"
//                     preserveAspectRatio="none"
//                     className="absolute inset-0 h-full w-full"
//                     aria-label="Illustrative XAU/USD market chart"
//                   >
//                     <defs>
//                       <linearGradient
//                         id="dashboard-chart-line"
//                         x1="0"
//                         y1="0"
//                         x2="1"
//                         y2="0"
//                       >
//                         <stop offset="0%" stopColor="#62E6FF" />
//                         <stop offset="100%" stopColor="#8B7CFF" />
//                       </linearGradient>

//                       <linearGradient
//                         id="dashboard-chart-area"
//                         x1="0"
//                         y1="0"
//                         x2="0"
//                         y2="1"
//                       >
//                         <stop
//                           offset="0%"
//                           stopColor="#62E6FF"
//                           stopOpacity="0.15"
//                         />
//                         <stop
//                           offset="100%"
//                           stopColor="#62E6FF"
//                           stopOpacity="0"
//                         />
//                       </linearGradient>
//                     </defs>

//                     <path
//                       d="
//                         M0 245
//                         C35 235 45 215 70 226
//                         C95 237 105 200 135 210
//                         C165 220 175 180 205 191
//                         C235 202 250 170 275 182
//                         C300 194 320 150 350 164
//                         C380 178 395 142 425 153
//                         C455 164 475 130 500 143
//                         C525 156 545 115 575 128
//                         C605 141 620 100 650 112
//                         C680 124 700 88 730 100
//                         C760 112 775 78 805 91
//                         C835 104 855 66 880 77
//                         C910 90 930 52 955 62
//                         C975 70 990 42 1000 35
//                         L1000 320
//                         L0 320
//                         Z
//                       "
//                       fill="url(#dashboard-chart-area)"
//                     />

//                     <path
//                       d="
//                         M0 245
//                         C35 235 45 215 70 226
//                         C95 237 105 200 135 210
//                         C165 220 175 180 205 191
//                         C235 202 250 170 275 182
//                         C300 194 320 150 350 164
//                         C380 178 395 142 425 153
//                         C455 164 475 130 500 143
//                         C525 156 545 115 575 128
//                         C605 141 620 100 650 112
//                         C680 124 700 88 730 100
//                         C760 112 775 78 805 91
//                         C835 104 855 66 880 77
//                         C910 90 930 52 955 62
//                         C975 70 990 42 1000 35
//                       "
//                       fill="none"
//                       stroke="url(#dashboard-chart-line)"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                     />

//                     <circle
//                       cx="955"
//                       cy="62"
//                       r="5"
//                       fill="#62E6FF"
//                     />

//                     <circle
//                       cx="955"
//                       cy="62"
//                       r="13"
//                       fill="#62E6FF"
//                       opacity="0.08"
//                     />
//                   </svg>

//                   {/* Time labels */}
//                   <div className="absolute bottom-3 left-4 right-20 flex justify-between text-[9px] text-slate-700">
//                     <span>09:00</span>
//                     <span>11:00</span>
//                     <span>13:00</span>
//                     <span>15:00</span>
//                     <span>17:00</span>
//                   </div>
//                 </div>

//                 {/* Analysis metrics */}
//                 <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
//                   {[
//                     {
//                       label: "Trend",
//                       value: "Bullish",
//                       color: "text-emerald-400",
//                     },
//                     {
//                       label: "Momentum",
//                       value: "Strong",
//                       color: "text-cyan-300",
//                     },
//                     {
//                       label: "Volatility",
//                       value: "Medium",
//                       color: "text-amber-300",
//                     },
//                     {
//                       label: "Risk",
//                       value: "Moderate",
//                       color: "text-violet-300",
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.label}
//                       className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3"
//                     >
//                       <p className="text-[9px] uppercase tracking-[0.12em] text-slate-700">
//                         {item.label}
//                       </p>

//                       <p className={`mt-1.5 text-xs font-semibold ${item.color}`}>
//                         {item.value}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Intelligence sidebar */}
//             <div className="space-y-5">
//               {/* Market sentiment */}
//               <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-sm font-semibold text-white">
//                       Market Sentiment
//                     </h3>

//                     <p className="mt-1 text-[10px] text-slate-600">
//                       Current illustrative bias
//                     </p>
//                   </div>

//                   <Activity className="h-4 w-4 text-cyan-300" />
//                 </div>

//                 <div className="mt-6 flex items-end justify-between">
//                   <div>
//                     <p className="text-4xl font-semibold tracking-tight text-emerald-400">
//                       72%
//                     </p>

//                     <p className="mt-1 text-xs text-slate-600">
//                       Bullish conditions
//                     </p>
//                   </div>

//                   <StatusBadge variant="success">Bullish</StatusBadge>
//                 </div>

//                 <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.05]">
//                   <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
//                 </div>

//                 <div className="mt-3 flex justify-between text-[9px] text-slate-700">
//                   <span>Bearish</span>
//                   <span>Neutral</span>
//                   <span>Bullish</span>
//                 </div>
//               </div>

//               {/* Risk monitor */}
//               <div
//                 id="risk"
//                 className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-sm font-semibold text-white">
//                       Risk Monitor
//                     </h3>

//                     <p className="mt-1 text-[10px] text-slate-600">
//                       Market environment
//                     </p>
//                   </div>

//                   <ShieldCheck className="h-4 w-4 text-emerald-300" />
//                 </div>

//                 <div className="mt-5 flex items-center justify-between">
//                   <div>
//                     <p className="text-lg font-semibold text-amber-300">
//                       Moderate
//                     </p>

//                     <p className="mt-1 text-[10px] text-slate-600">
//                       Maintain disciplined risk
//                     </p>
//                   </div>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/15 bg-amber-300/[0.04]">
//                     <ShieldCheck className="h-4 w-4 text-amber-300" />
//                   </div>
//                 </div>

//                 <div className="mt-5 space-y-3">
//                   {[
//                     ["Volatility", "Medium", "warning"],
//                     ["Liquidity", "High", "success"],
//                     ["News Risk", "Moderate", "warning"],
//                   ].map(([label, value, variant]) => (
//                     <div
//                       key={label}
//                       className="flex items-center justify-between"
//                     >
//                       <span className="text-[10px] text-slate-600">
//                         {label}
//                       </span>

//                       <StatusBadge
//                         variant={
//                           variant as "success" | "warning" | "default"
//                         }
//                       >
//                         {value}
//                       </StatusBadge>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Session card */}
//               <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-cyan-300/[0.055] to-violet-300/[0.035] p-5">
//                 <div className="flex items-center gap-2">
//                   <Clock3 className="h-4 w-4 text-cyan-300" />

//                   <span className="text-xs font-semibold text-white">
//                     Trading Session
//                   </span>
//                 </div>

//                 <p className="mt-4 text-lg font-semibold text-cyan-100">
//                   London / New York
//                 </p>

//                 <p className="mt-1 text-[10px] leading-5 text-slate-600">
//                   Review liquidity, volatility and scheduled economic events
//                   before taking action.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* ============================================================
//               WATCHLIST + MARKET EVENTS
//           ============================================================ */}
//           <section className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
//             {/* Watchlist */}
//             <div
//               id="watchlist"
//               className="rounded-2xl border border-white/[0.07] bg-[#0C1119]"
//             >
//               <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
//                 <div>
//                   <h3 className="text-sm font-semibold text-white">
//                     Your Watchlist
//                   </h3>

//                   <p className="mt-1 text-[10px] text-slate-600">
//                     Markets you are keeping an eye on
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-white/[0.04] hover:text-white"
//                   aria-label="Watchlist options"
//                 >
//                   <MoreHorizontal className="h-4 w-4" />
//                 </button>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-[560px]">
//                   <thead>
//                     <tr className="border-b border-white/[0.05] text-left">
//                       <th className="px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-700">
//                         Market
//                       </th>

//                       <th className="px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-700">
//                         Price
//                       </th>

//                       <th className="px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-700">
//                         Change
//                       </th>

//                       <th className="px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-700">
//                         Trend
//                       </th>

//                       <th className="px-5 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-700">
//                         Action
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {watchlist.map((item) => {
//                       const positive = item.direction === "up";

//                       return (
//                         <tr
//                           key={item.symbol}
//                           className="border-b border-white/[0.04] last:border-0"
//                         >
//                           <td className="px-5 py-4">
//                             <div className="flex items-center gap-3">
//                               <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025]">
//                                 <Star className="h-3.5 w-3.5 text-slate-600" />
//                               </span>

//                               <div>
//                                 <p className="text-xs font-semibold text-slate-300">
//                                   {item.symbol}
//                                 </p>

//                                 <p className="mt-0.5 text-[9px] text-slate-700">
//                                   {item.name}
//                                 </p>
//                               </div>
//                             </div>
//                           </td>

//                           <td className="px-5 py-4 text-xs font-semibold text-white">
//                             {item.price}
//                           </td>

//                           <td
//                             className={`px-5 py-4 text-xs font-semibold ${
//                               positive
//                                 ? "text-emerald-400"
//                                 : "text-red-400"
//                             }`}
//                           >
//                             {item.change}
//                           </td>

//                           <td className="px-5 py-4">
//                             <div className="flex items-center gap-2">
//                               {positive ? (
//                                 <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
//                               ) : (
//                                 <TrendingDown className="h-3.5 w-3.5 text-red-400" />
//                               )}

//                               <span
//                                 className={`text-[10px] font-medium ${
//                                   positive
//                                     ? "text-emerald-400"
//                                     : "text-red-400"
//                                 }`}
//                               >
//                                 {positive ? "Bullish" : "Bearish"}
//                               </span>
//                             </div>
//                           </td>

//                           <td className="px-5 py-4 text-right">
//                             <Link
//                               href={
//                                 item.symbol.includes("XAU")
//                                   ? "/#gold"
//                                   : item.symbol.includes("BTC") ||
//                                       item.symbol.includes("ETH")
//                                     ? "/#crypto"
//                                     : "/#forex"
//                               }
//                               className="inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-300 hover:text-cyan-200"
//                             >
//                               Analyze
//                               <ArrowUpRight className="h-3 w-3" />
//                             </Link>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Calendar / events */}
//             <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119]">
//               <div className="border-b border-white/[0.07] px-5 py-4">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-sm font-semibold text-white">
//                       Market Events
//                     </h3>

//                     <p className="mt-1 text-[10px] text-slate-600">
//                       Upcoming catalysts
//                     </p>
//                   </div>

//                   <CalendarDays className="h-4 w-4 text-cyan-300" />
//                 </div>
//               </div>

//               <div className="divide-y divide-white/[0.05]">
//                 {[
//                   {
//                     time: "10:30",
//                     event: "US CPI Preview",
//                     impact: "High",
//                     color: "danger",
//                   },
//                   {
//                     time: "12:00",
//                     event: "ECB Commentary",
//                     impact: "Medium",
//                     color: "warning",
//                   },
//                   {
//                     time: "14:00",
//                     event: "US Consumer Sentiment",
//                     impact: "Medium",
//                     color: "warning",
//                   },
//                   {
//                     time: "16:30",
//                     event: "Fed Member Speech",
//                     impact: "High",
//                     color: "danger",
//                   },
//                 ].map((event) => (
//                   <div
//                     key={event.time}
//                     className="flex items-center gap-3 px-5 py-4"
//                   >
//                     <span className="w-11 shrink-0 text-[10px] font-medium text-slate-600">
//                       {event.time}
//                     </span>

//                     <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-700" />

//                     <span className="min-w-0 flex-1 text-xs text-slate-400">
//                       {event.event}
//                     </span>

//                     <StatusBadge
//                       variant={
//                         event.color as "danger" | "warning" | "default"
//                       }
//                     >
//                       {event.impact}
//                     </StatusBadge>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-white/[0.05] p-4">
//                 <Link
//                   href="/#analysis"
//                   className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-2.5 text-[10px] font-semibold text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
//                 >
//                   Review Market Context
//                   <ArrowRight className="h-3 w-3" />
//                 </Link>
//               </div>
//             </div>
//           </section>

//           {/* ============================================================
//               LOWER INSIGHTS
//           ============================================================ */}
//           <section className="mt-5 grid gap-5 lg:grid-cols-3">
//             {/* Market breadth */}
//             <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-sm font-semibold text-white">
//                     Market Breadth
//                   </h3>

//                   <p className="mt-1 text-[10px] text-slate-600">
//                     Illustrative cross-market view
//                   </p>
//                 </div>

//                 <BarChart3 className="h-4 w-4 text-cyan-300" />
//               </div>

//               <div className="mt-6 space-y-4">
//                 {[
//                   ["Forex", 68],
//                   ["Gold", 76],
//                   ["Crypto", 82],
//                   ["Indices", 71],
//                 ].map(([label, value]) => (
//                   <div key={label}>
//                     <div className="mb-2 flex items-center justify-between">
//                       <span className="text-[10px] text-slate-500">
//                         {label}
//                       </span>

//                       <span className="text-[10px] font-semibold text-slate-300">
//                         {value}%
//                       </span>
//                     </div>

//                     <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
//                       <div
//                         className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
//                         style={{ width: `${value}%` }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Trading discipline */}
//             <div className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-sm font-semibold text-white">
//                     Trading Discipline
//                   </h3>

//                   <p className="mt-1 text-[10px] text-slate-600">
//                     Workspace reminder
//                   </p>
//                 </div>

//                 <ShieldCheck className="h-4 w-4 text-emerald-300" />
//               </div>

//               <div className="mt-6 flex items-center gap-4">
//                 <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/15 bg-emerald-400/[0.04]">
//                   <span className="text-lg font-semibold text-emerald-300">
//                     84
//                   </span>
//                 </div>

//                 <div>
//                   <p className="text-sm font-semibold text-white">
//                     Good structure
//                   </p>

//                   <p className="mt-1 text-[10px] leading-5 text-slate-600">
//                     Keep position sizing and risk limits consistent.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-5 grid grid-cols-3 gap-2">
//                 <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-2 text-center">
//                   <p className="text-[9px] text-slate-700">Plan</p>
//                   <p className="mt-1 text-[10px] font-semibold text-emerald-400">
//                     Ready
//                   </p>
//                 </div>

//                 <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-2 text-center">
//                   <p className="text-[9px] text-slate-700">Risk</p>
//                   <p className="mt-1 text-[10px] font-semibold text-emerald-400">
//                     Set
//                   </p>
//                 </div>

//                 <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-2 text-center">
//                   <p className="text-[9px] text-slate-700">Review</p>
//                   <p className="mt-1 text-[10px] font-semibold text-cyan-300">
//                     Active
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Education */}
//             <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#0C1119] to-[#10101B] p-5">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-sm font-semibold text-white">
//                     Continue Learning
//                   </h3>

//                   <p className="mt-1 text-[10px] text-slate-600">
//                     Build market knowledge
//                   </p>
//                 </div>

//                 <BookOpen className="h-4 w-4 text-violet-300" />
//               </div>

//               <p className="mt-6 text-sm font-semibold text-slate-200">
//                 Understanding Market Structure
//               </p>

//               <p className="mt-2 text-[10px] leading-5 text-slate-600">
//                 Learn how trends, liquidity, support and resistance interact
//                 across different market conditions.
//               </p>

//               <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
//                 <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-violet-300 to-cyan-300" />
//               </div>

//               <div className="mt-2 flex items-center justify-between text-[9px] text-slate-700">
//                 <span>62% complete</span>
//                 <span>12 min remaining</span>
//               </div>

//               <Link
//                 href="/#technical-analysis"
//                 className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold text-violet-300 hover:text-violet-200"
//               >
//                 Continue learning
//                 <ArrowRight className="h-3 w-3" />
//               </Link>
//             </div>
//           </section>

//           {/* ============================================================
//               FOOTER NOTE
//           ============================================================ */}
//           <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.05] pt-6 text-[9px] leading-5 text-slate-700 sm:flex-row sm:items-center sm:justify-between">
//             <p>
//               Orvix dashboard • Frontend demonstration with illustrative
//               market data.
//             </p>

//             <p className="flex items-center gap-2">
//               <ShieldCheck className="h-3 w-3" />
//               Educational and informational use only.
//             </p>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import DashboardOverview from "@/components/dashboard/pages/DashboardOverview";

export default function DashboardPage() {
  return <DashboardOverview />;
}