// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import {
//   ArrowUpRight,
//   BarChart3,
//   ChevronDown,
//   CircleHelp,
//   Menu,
//   ShieldCheck,
//   Sparkles,
//   X,
// } from "lucide-react";

// import { mainNavigation } from "@/data/navigation";

// export default function Navbar() {
//   const pathname = usePathname();

//   const [mobileOpen, setMobileOpen] =
//     useState(false);

//   const [openDropdown, setOpenDropdown] =
//     useState<string | null>(null);

//   const navRef = useRef<HTMLElement | null>(null);

//   const closeTimerRef =
//     useRef<ReturnType<typeof setTimeout> | null>(null);

//   /*
//    * ============================================================
//    * DROPDOWN HELPERS
//    * ============================================================
//    */

//   const clearCloseTimer = () => {
//     if (closeTimerRef.current !== null) {
//       clearTimeout(closeTimerRef.current);
//       closeTimerRef.current = null;
//     }
//   };

//   const closeDropdown = () => {
//     clearCloseTimer();
//     setOpenDropdown(null);
//   };

//   const scheduleCloseDropdown = () => {
//     clearCloseTimer();

//     closeTimerRef.current = setTimeout(() => {
//       setOpenDropdown(null);
//       closeTimerRef.current = null;
//     }, 180);
//   };

//   const openDropdownMenu = (label: string) => {
//     clearCloseTimer();
//     setOpenDropdown(label);
//   };

//   const toggleDropdown = (label: string) => {
//     clearCloseTimer();

//     setOpenDropdown((current) => {
//       if (current === label) {
//         return null;
//       }

//       return label;
//     });
//   };

//   const closeNavigation = () => {
//     clearCloseTimer();
//     setMobileOpen(false);
//     setOpenDropdown(null);
//   };

//   /*
//    * ============================================================
//    * ROUTE CHANGE
//    * ============================================================
//    */

//   useEffect(() => {
//     setMobileOpen(false);
//     setOpenDropdown(null);
//     clearCloseTimer();
//   }, [pathname]);

//   /*
//    * ============================================================
//    * CLEANUP
//    * ============================================================
//    */

//   useEffect(() => {
//     return () => {
//       clearCloseTimer();
//     };
//   }, []);

//   /*
//    * ============================================================
//    * MOBILE BODY SCROLL
//    * ============================================================
//    */

//   useEffect(() => {
//     if (mobileOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   /*
//    * ============================================================
//    * CLICK OUTSIDE
//    * ============================================================
//    */

//   useEffect(() => {
//     const handlePointerDown = (
//       event: PointerEvent,
//     ) => {
//       if (
//         navRef.current &&
//         !navRef.current.contains(
//           event.target as Node,
//         )
//       ) {
//         closeDropdown();
//       }
//     };

//     document.addEventListener(
//       "pointerdown",
//       handlePointerDown,
//     );

//     return () => {
//       document.removeEventListener(
//         "pointerdown",
//         handlePointerDown,
//       );
//     };
//   }, []);

//   /*
//    * ============================================================
//    * ESCAPE
//    * ============================================================
//    */

//   useEffect(() => {
//     const handleKeyDown = (
//       event: KeyboardEvent,
//     ) => {
//       if (event.key === "Escape") {
//         closeNavigation();
//       }
//     };

//     document.addEventListener(
//       "keydown",
//       handleKeyDown,
//     );

//     return () => {
//       document.removeEventListener(
//         "keydown",
//         handleKeyDown,
//       );
//     };
//   }, []);

//   /*
//    * ============================================================
//    * ACTIVE ROUTES
//    * ============================================================
//    */

//   const isActive = (href: string) => {
//     if (href === "/") {
//       return pathname === "/";
//     }

//     return (
//       pathname === href ||
//       pathname.startsWith(`${href}/`)
//     );
//   };

//   const isDropdownItemActive = (
//     href: string,
//   ) => {
//     return (
//       pathname === href ||
//       pathname.startsWith(`${href}/`)
//     );
//   };

//   /*
//    * ============================================================
//    * DROPDOWN ICON
//    * ============================================================
//    */

//   const getItemIcon = (label: string) => {
//     if (label === "Forex") {
//       return (
//         <BarChart3 className="h-4 w-4" />
//       );
//     }

//     if (label === "Gold & Metals") {
//       return (
//         <Sparkles className="h-4 w-4" />
//       );
//     }

//     if (label === "Crypto") {
//       return (
//         <span className="text-sm font-bold">
//           ₿
//         </span>
//       );
//     }

//     if (label === "Indices") {
//       return (
//         <BarChart3 className="h-4 w-4" />
//       );
//     }

//     if (label === "Technical Analysis") {
//       return (
//         <BarChart3 className="h-4 w-4" />
//       );
//     }

//     if (label === "Risk Management") {
//       return (
//         <ShieldCheck className="h-4 w-4" />
//       );
//     }

//     return (
//       <Sparkles className="h-4 w-4" />
//     );
//   };

//   return (
//     <header
//       ref={navRef}
//       className="
//         fixed
//         inset-x-0
//         top-0
//         z-[100]
//       "
//     >
//       {/* Ambient glow */}
//       <div
//         aria-hidden="true"
//         className="
//           pointer-events-none
//           absolute
//           inset-x-0
//           top-0
//           h-28
//           bg-cyan-400/[0.035]
//           blur-3xl
//         "
//       />

//       <div
//         className="
//           mx-auto
//           max-w-7xl
//           px-4
//           pt-4
//           sm:px-6
//           lg:px-8
//         "
//       >
//         <nav
//           aria-label="Main navigation"
//           className="
//             relative
//             rounded-2xl
//             border
//             border-white/[0.08]
//             bg-[#080c12]/95
//             shadow-[0_20px_60px_rgba(0,0,0,0.28)]
//             backdrop-blur-2xl
//           "
//         >
//           {/* ========================================================
//               NAVBAR TOP
//           ========================================================= */}

//           <div
//             className="
//               flex
//               h-[72px]
//               items-center
//               justify-between
//               px-4
//               sm:px-6
//             "
//           >
//             {/* ======================================================
//                 BRAND
//             ======================================================= */}

//             <Link
//               href="/"
//               onClick={closeNavigation}
//               aria-label="Orvix home"
//               className="
//                 group
//                 flex
//                 shrink-0
//                 items-center
//                 gap-3
//               "
//             >
//               <span
//                 className="
//                   relative
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   overflow-hidden
//                   rounded-xl
//                   border
//                   border-cyan-300/20
//                   bg-cyan-300/[0.06]
//                   shadow-[0_0_30px_rgba(98,230,255,0.08)]
//                 "
//               >
//                 <span
//                   className="
//                     absolute
//                     inset-0
//                     bg-[radial-gradient(circle_at_50%_30%,rgba(98,230,255,0.18),transparent_65%)]
//                   "
//                 />

//                 <svg
//                   viewBox="0 0 40 40"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="
//                     relative
//                     h-7
//                     w-7
//                     transition-transform
//                     duration-500
//                     group-hover:rotate-6
//                     group-hover:scale-110
//                   "
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="M29.5 8.5C26.6 6.1 22.8 5 18.9 5.5C14.3 6.1 10.8 8.6 10.8 12.1C10.8 15.6 14.1 17.1 19.8 18.1C25.2 19 28.8 20.5 28.8 24.3C28.8 28.5 24.8 31.5 19.2 31.5C15.1 31.5 11.7 30.1 9.1 27.6"
//                     stroke="url(#Orvix-gradient)"
//                     strokeWidth="2.8"
//                     strokeLinecap="round"
//                   />

//                   <path
//                     d="M8.5 27.5L12.1 27.1L10.2 30.7"
//                     stroke="url(#Orvix-gradient)"
//                     strokeWidth="2.3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />

//                   <path
//                     d="M12.2 22.7L16.1 19.5L19.4 21.8L24 16.5L28.7 18.7"
//                     stroke="rgba(139,124,255,0.9)"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />

//                   <circle
//                     cx="28.7"
//                     cy="18.7"
//                     r="1.8"
//                     fill="#62E6FF"
//                   />

//                   <defs>
//                     <linearGradient
//                       id="Orvix-gradient"
//                       x1="7"
//                       y1="7"
//                       x2="32"
//                       y2="33"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop
//                         stopColor="#62E6FF"
//                       />
//                       <stop
//                         offset="1"
//                         stopColor="#8B7CFF"
//                       />
//                     </linearGradient>
//                   </defs>
//                 </svg>
//               </span>

//               <span className="flex flex-col">
//                 <span
//                   className="
//                     text-[15px]
//                     font-semibold
//                     tracking-[0.28em]
//                     text-white
//                   "
//                 >
//                   Orvix
//                 </span>

//                 <span
//                   className="
//                     hidden
//                     text-[8px]
//                     font-medium
//                     tracking-[0.24em]
//                     text-slate-500
//                     sm:block
//                   "
//                 >
//                   MARKET INTELLIGENCE
//                 </span>
//               </span>
//             </Link>

//             {/* ======================================================
//                 DESKTOP NAVIGATION
//             ======================================================= */}

//             <div
//               className="
//                 hidden
//                 flex-1
//                 items-center
//                 justify-center
//                 lg:flex
//               "
//             >
//               <div className="flex items-center gap-1">
//                 {mainNavigation.map((item) => {
//                   const hasDropdown =
//                     Boolean(
//                       item.dropdown &&
//                         item.dropdown.length,
//                     );

//                   const dropdownOpen =
//                     openDropdown === item.label;

//                   const active =
//                     isActive(item.href);

//                   return (
//                     <div
//                       key={item.label}
//                       className="relative"
//                       onMouseEnter={() => {
//                         if (hasDropdown) {
//                           openDropdownMenu(
//                             item.label,
//                           );
//                         }
//                       }}
//                       onMouseLeave={() => {
//                         if (hasDropdown) {
//                           scheduleCloseDropdown();
//                         }
//                       }}
//                     >
//                       <div className="flex items-center">
//                         {/* Main route */}
//                         <Link
//                           href={item.href}
//                           onClick={() => {
//                             clearCloseTimer();
//                             setOpenDropdown(null);
//                           }}
//                           className={`
//                             relative
//                             rounded-xl
//                             px-3.5
//                             py-2.5
//                             text-sm
//                             font-medium
//                             transition-colors
//                             ${
//                               active
//                                 ? "text-white"
//                                 : "text-slate-400 hover:text-white"
//                             }
//                           `}
//                         >
//                           {item.label}

//                           {active && (
//                             <span
//                               className="
//                                 absolute
//                                 inset-x-3
//                                 -bottom-[1px]
//                                 h-px
//                                 bg-gradient-to-r
//                                 from-transparent
//                                 via-cyan-300
//                                 to-transparent
//                               "
//                             />
//                           )}
//                         </Link>

//                         {/* ONLY ONE dropdown button */}
//                         {hasDropdown && (
//                           <button
//                             type="button"
//                             aria-label={`Toggle ${item.label} menu`}
//                             aria-haspopup="menu"
//                             aria-expanded={
//                               dropdownOpen
//                             }
//                             onClick={(event) => {
//                               event.preventDefault();
//                               event.stopPropagation();

//                               toggleDropdown(
//                                 item.label,
//                               );
//                             }}
//                             className="
//                               flex
//                               h-9
//                               w-8
//                               items-center
//                               justify-center
//                               rounded-lg
//                               text-slate-500
//                               transition-colors
//                               hover:bg-white/[0.05]
//                               hover:text-white
//                             "
//                           >
//                             <ChevronDown
//                               className={`
//                                 h-4
//                                 w-4
//                                 transition-transform
//                                 duration-200
//                                 ${
//                                   dropdownOpen
//                                     ? "rotate-180 text-cyan-300"
//                                     : ""
//                                 }
//                               `}
//                             />
//                           </button>
//                         )}
//                       </div>

//                       {/* =================================================
//                           DESKTOP DROPDOWN
//                       ================================================== */}

//                       {hasDropdown &&
//                         dropdownOpen &&
//                         item.dropdown && (
//                           <div
//                             className="
//                               absolute
//                               left-1/2
//                               top-full
//                               z-[200]
//                               w-[380px]
//                               -translate-x-1/2
//                               pt-3
//                             "
//                             onMouseEnter={() => {
//                               clearCloseTimer();
//                               openDropdownMenu(
//                                 item.label,
//                               );
//                             }}
//                             onMouseLeave={() => {
//                               scheduleCloseDropdown();
//                             }}
//                           >
//                             <div
//                               role="menu"
//                               className="
//                                 overflow-hidden
//                                 rounded-2xl
//                                 border
//                                 border-white/[0.10]
//                                 bg-[#0A0F17]
//                                 p-2
//                                 shadow-[0_30px_90px_rgba(0,0,0,0.70)]
//                                 backdrop-blur-2xl
//                               "
//                             >
//                               <div className="px-3 pb-2 pt-2">
//                                 <div className="flex items-center gap-2">
//                                   <Sparkles className="h-3.5 w-3.5 text-cyan-300" />

//                                   <span
//                                     className="
//                                       text-[10px]
//                                       font-semibold
//                                       uppercase
//                                       tracking-[0.2em]
//                                       text-slate-500
//                                     "
//                                   >
//                                     Explore{" "}
//                                     {item.label}
//                                   </span>
//                                 </div>
//                               </div>

//                               <div className="space-y-1">
//                                 {item.dropdown.map(
//                                   (
//                                     dropdownItem,
//                                   ) => {
//                                     const itemActive =
//                                       isDropdownItemActive(
//                                         dropdownItem.href,
//                                       );

//                                     return (
//                                       <Link
//                                         key={
//                                           dropdownItem.href
//                                         }
//                                         href={
//                                           dropdownItem.href
//                                         }
//                                         role="menuitem"
//                                         onClick={
//                                           closeNavigation
//                                         }
//                                         className={`
//                                           group
//                                           flex
//                                           w-full
//                                           items-start
//                                           gap-3
//                                           rounded-xl
//                                           p-3
//                                           text-left
//                                           transition-colors
//                                           ${
//                                             itemActive
//                                               ? "bg-cyan-300/[0.09]"
//                                               : "hover:bg-white/[0.055]"
//                                           }
//                                         `}
//                                       >
//                                         <span
//                                           className={`
//                                             mt-0.5
//                                             flex
//                                             h-9
//                                             w-9
//                                             shrink-0
//                                             items-center
//                                             justify-center
//                                             rounded-lg
//                                             border
//                                             ${
//                                               itemActive
//                                                 ? "border-cyan-300/30 bg-cyan-300/[0.08] text-cyan-300"
//                                                 : "border-white/[0.08] bg-white/[0.02] text-slate-400 group-hover:border-cyan-300/25 group-hover:text-cyan-300"
//                                             }
//                                           `}
//                                         >
//                                           {getItemIcon(
//                                             dropdownItem.label,
//                                           )}
//                                         </span>

//                                         <span className="min-w-0 flex-1">
//                                           <span
//                                             className={`
//                                               flex
//                                               items-center
//                                               gap-1
//                                               text-sm
//                                               font-semibold
//                                               ${
//                                                 itemActive
//                                                   ? "text-white"
//                                                   : "text-slate-200 group-hover:text-white"
//                                               }
//                                             `}
//                                           >
//                                             {
//                                               dropdownItem.label
//                                             }

//                                             <ArrowUpRight
//                                               className="
//                                                 h-3.5
//                                                 w-3.5
//                                                 opacity-0
//                                                 transition-all
//                                                 group-hover:translate-x-0.5
//                                                 group-hover:-translate-y-0.5
//                                                 group-hover:opacity-100
//                                               "
//                                             />
//                                           </span>

//                                           <span
//                                             className="
//                                               mt-1
//                                               block
//                                               text-xs
//                                               leading-5
//                                               text-slate-500
//                                             "
//                                           >
//                                             {
//                                               dropdownItem.description
//                                             }
//                                           </span>
//                                         </span>
//                                       </Link>
//                                     );
//                                   },
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* ======================================================
//                 DESKTOP ACTIONS
//             ======================================================= */}

//             <div
//               className="
//                 hidden
//                 items-center
//                 gap-2
//                 lg:flex
//               "
//             >
//               <Link
//                 href="/contact"
//                 onClick={closeNavigation}
//                 className="
//                   rounded-xl
//                   px-3.5
//                   py-2.5
//                   text-sm
//                   font-medium
//                   text-slate-400
//                   transition-colors
//                   hover:text-white
//                 "
//               >
//                 Contact
//               </Link>

//               <Link
//                 href="/dashboard"
//                 onClick={closeNavigation}
//                 className="
//                   group
//                   relative
//                   inline-flex
//                   items-center
//                   gap-2
//                   overflow-hidden
//                   rounded-xl
//                   border
//                   border-cyan-300/20
//                   bg-cyan-300/[0.08]
//                   px-4
//                   py-2.5
//                   text-sm
//                   font-semibold
//                   text-cyan-100
//                   transition-all
//                   hover:border-cyan-300/35
//                   hover:bg-cyan-300/[0.13]
//                 "
//               >
//                 <span
//                   className="
//                     absolute
//                     inset-0
//                     -translate-x-full
//                     bg-gradient-to-r
//                     from-transparent
//                     via-white/[0.08]
//                     to-transparent
//                     transition-transform
//                     duration-700
//                     group-hover:translate-x-full
//                   "
//                 />

//                 <span className="relative">
//                   Open Dashboard
//                 </span>

//                 <ArrowUpRight className="relative h-4 w-4" />
//               </Link>
//             </div>

//             {/* ======================================================
//                 MOBILE BUTTON
//             ======================================================= */}

//             <button
//               type="button"
//               onClick={() => {
//                 setMobileOpen(
//                   (current) => !current,
//                 );
//                 setOpenDropdown(null);
//               }}
//               aria-label={
//                 mobileOpen
//                   ? "Close navigation"
//                   : "Open navigation"
//               }
//               aria-expanded={mobileOpen}
//               aria-controls="mobile-navigation"
//               className="
//                 flex
//                 h-10
//                 w-10
//                 items-center
//                 justify-center
//                 rounded-xl
//                 border
//                 border-white/[0.08]
//                 bg-white/[0.03]
//                 text-slate-300
//                 transition-colors
//                 hover:bg-white/[0.06]
//                 hover:text-white
//                 lg:hidden
//               "
//             >
//               {mobileOpen ? (
//                 <X className="h-5 w-5" />
//               ) : (
//                 <Menu className="h-5 w-5" />
//               )}
//             </button>
//           </div>

//           {/* ========================================================
//               MOBILE NAVIGATION
//           ========================================================= */}

//           {mobileOpen && (
//             <div
//               id="mobile-navigation"
//               className="
//                 border-t
//                 border-white/[0.07]
//                 lg:hidden
//               "
//             >
//               <div
//                 className="
//                   max-h-[calc(100vh-110px)]
//                   overflow-y-auto
//                   p-3
//                 "
//               >
//                 <div className="space-y-1">
//                   {mainNavigation.map(
//                     (item) => {
//                       const hasDropdown =
//                         Boolean(
//                           item.dropdown &&
//                             item.dropdown.length,
//                         );

//                       const dropdownOpen =
//                         openDropdown ===
//                         item.label;

//                       return (
//                         <div
//                           key={item.label}
//                         >
//                           <div className="flex items-center">
//                             <Link
//                               href={item.href}
//                               onClick={
//                                 closeNavigation
//                               }
//                               className={`
//                                 flex-1
//                                 rounded-xl
//                                 px-3
//                                 py-3
//                                 text-sm
//                                 font-medium
//                                 transition-colors
//                                 ${
//                                   isActive(
//                                     item.href,
//                                   )
//                                     ? "bg-white/[0.05] text-white"
//                                     : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
//                                 }
//                               `}
//                             >
//                               {item.label}
//                             </Link>

//                             {/* Exactly one mobile arrow */}
//                             {hasDropdown && (
//                               <button
//                                 type="button"
//                                 aria-label={`Toggle ${item.label} menu`}
//                                 aria-haspopup="menu"
//                                 aria-expanded={
//                                   dropdownOpen
//                                 }
//                                 onClick={() =>
//                                   toggleDropdown(
//                                     item.label,
//                                   )
//                                 }
//                                 className="
//                                   flex
//                                   h-10
//                                   w-10
//                                   items-center
//                                   justify-center
//                                   rounded-xl
//                                   text-slate-500
//                                   transition-colors
//                                   hover:bg-white/[0.04]
//                                   hover:text-white
//                                 "
//                               >
//                                 <ChevronDown
//                                   className={`
//                                     h-4
//                                     w-4
//                                     transition-transform
//                                     duration-200
//                                     ${
//                                       dropdownOpen
//                                         ? "rotate-180 text-cyan-300"
//                                         : ""
//                                     }
//                                   `}
//                                 />
//                               </button>
//                             )}
//                           </div>

//                           {hasDropdown &&
//                             dropdownOpen &&
//                             item.dropdown && (
//                               <div
//                                 role="menu"
//                                 className="
//                                   ml-3
//                                   mt-1
//                                   space-y-1
//                                   border-l
//                                   border-white/[0.08]
//                                   pl-3
//                                 "
//                               >
//                                 {item.dropdown.map(
//                                   (
//                                     dropdownItem,
//                                   ) => (
//                                     <Link
//                                       key={
//                                         dropdownItem.href
//                                       }
//                                       href={
//                                         dropdownItem.href
//                                       }
//                                       role="menuitem"
//                                       onClick={
//                                         closeNavigation
//                                       }
//                                       className={`
//                                         flex
//                                         items-center
//                                         justify-between
//                                         rounded-xl
//                                         px-3
//                                         py-3
//                                         text-sm
//                                         transition-colors
//                                         ${
//                                           isDropdownItemActive(
//                                             dropdownItem.href,
//                                           )
//                                             ? "bg-cyan-300/[0.07] text-cyan-300"
//                                             : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
//                                         }
//                                       `}
//                                     >
//                                       <span>
//                                         {
//                                           dropdownItem.label
//                                         }
//                                       </span>

//                                       <ArrowUpRight className="h-3.5 w-3.5" />
//                                     </Link>
//                                   ),
//                                 )}
//                               </div>
//                             )}
//                         </div>
//                       );
//                     },
//                   )}
//                 </div>

//                 <div className="mt-3 border-t border-white/[0.07] pt-3">
//                   <Link
//                     href="/contact"
//                     onClick={closeNavigation}
//                     className="
//                       flex
//                       items-center
//                       gap-2
//                       rounded-xl
//                       px-3
//                       py-3
//                       text-sm
//                       font-medium
//                       text-slate-400
//                       hover:bg-white/[0.04]
//                       hover:text-white
//                     "
//                   >
//                     <CircleHelp className="h-4 w-4" />
//                     Contact & Support
//                   </Link>

//                   <Link
//                     href="/dashboard"
//                     onClick={closeNavigation}
//                     className="
//                       mt-2
//                       flex
//                       items-center
//                       justify-center
//                       gap-2
//                       rounded-xl
//                       border
//                       border-cyan-300/20
//                       bg-cyan-300/[0.08]
//                       px-4
//                       py-3
//                       text-sm
//                       font-semibold
//                       text-cyan-100
//                       hover:bg-cyan-300/[0.13]
//                     "
//                   >
//                     Open Dashboard
//                     <ArrowUpRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  CircleHelp,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { mainNavigation } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  const navRef =
    useRef<HTMLElement | null>(null);

  const closeTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );

  /*
   * ============================================================
   * DROPDOWN HELPERS
   * ============================================================
   */

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);

      closeTimerRef.current = null;
    }
  };

  const closeDropdown = () => {
    clearCloseTimer();

    setOpenDropdown(null);
  };

  const scheduleCloseDropdown = () => {
    clearCloseTimer();

    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);

      closeTimerRef.current = null;
    }, 180);
  };

  const openDropdownMenu = (label: string) => {
    clearCloseTimer();

    setOpenDropdown(label);
  };

  const toggleDropdown = (label: string) => {
    clearCloseTimer();

    setOpenDropdown((current) => {
      if (current === label) {
        return null;
      }

      return label;
    });
  };

  const closeNavigation = () => {
    clearCloseTimer();

    setMobileOpen(false);
    setOpenDropdown(null);
  };

  /*
   * ============================================================
   * ROUTE CHANGE
   * ============================================================
   */

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);

    clearCloseTimer();
  }, [pathname]);

  /*
   * ============================================================
   * CLEANUP
   * ============================================================
   */

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  /*
   * ============================================================
   * MOBILE BODY SCROLL
   * ============================================================
   */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /*
   * ============================================================
   * CLICK OUTSIDE
   * ============================================================
   */

  useEffect(() => {
    const handlePointerDown = (
      event: PointerEvent,
    ) => {
      if (
        navRef.current &&
        !navRef.current.contains(
          event.target as Node,
        )
      ) {
        closeDropdown();
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );
    };
  }, []);

  /*
   * ============================================================
   * ESCAPE
   * ============================================================
   */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        closeNavigation();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  /*
   * ============================================================
   * ACTIVE ROUTES
   * ============================================================
   */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  const isDropdownItemActive = (
    href: string,
  ) => {
    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  /*
   * ============================================================
   * DROPDOWN ICONS
   * ============================================================
   */

  const getItemIcon = (label: string) => {
    if (label === "Forex") {
      return (
        <BarChart3 className="h-4 w-4" />
      );
    }

    if (label === "Gold & Metals") {
      return (
        <Sparkles className="h-4 w-4" />
      );
    }

    if (label === "Crypto") {
      return (
        <span className="text-sm font-bold">
          ₿
        </span>
      );
    }

    if (label === "Indices") {
      return (
        <BarChart3 className="h-4 w-4" />
      );
    }

    if (label === "Technical Analysis") {
      return (
        <BarChart3 className="h-4 w-4" />
      );
    }

    if (label === "Risk Management") {
      return (
        <ShieldCheck className="h-4 w-4" />
      );
    }

    return (
      <Sparkles className="h-4 w-4" />
    );
  };

  return (
    <header
      ref={navRef}
      className="
        fixed
        inset-x-0
        top-0
        z-[100]
      "
    >
      {/* ========================================================
          AMBIENT BRAND GLOW
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-32
          bg-cyan-400/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          pt-4
          sm:px-6
          lg:px-8
        "
      >
        <nav
          aria-label="Main navigation"
          className="
            relative
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#070B12]/95
            shadow-[0_20px_60px_rgba(0,0,0,0.32)]
            backdrop-blur-2xl
          "
        >
          {/* ======================================================
              NAVBAR TOP
          ======================================================= */}

          <div
            className="
              flex
              h-[72px]
              items-center
              justify-between
              px-4
              sm:px-6
            "
          >
            {/* ==================================================
                BRAND
            =================================================== */}

            <Link
              href="/"
              onClick={closeNavigation}
              aria-label="ORVIX Market Intelligence home"
              className="
                group
                flex
                shrink-0
                items-center
                gap-3
              "
            >
              {/* Logo mark */}

              <span
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-cyan-300/20
                  bg-cyan-300/[0.045]
                  shadow-[0_0_32px_rgba(34,211,238,0.08)]
                  transition-all
                  duration-300
                  group-hover:border-cyan-300/35
                  group-hover:bg-cyan-300/[0.07]
                  group-hover:shadow-[0_0_38px_rgba(34,211,238,0.15)]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_50%_35%,rgba(103,232,249,0.16),transparent_68%)]
                  "
                />

                <Image
                  src="/logo/orvix-mark.png"
                  alt=""
                  width={34}
                  height={34}
                  priority
                  className="
                    relative
                    h-10
                    w-10
                    transition-transform
                    duration-500
                    group-hover:rotate-4
                    group-hover:scale-100
                  "
                />
              </span>

              {/* Brand text */}

              <span className="flex flex-col">
                <span
                  className="
                    text-[15px]
                    font-semibold
                    tracking-[0.28em]
                    text-white
                  "
                >
                  ORVIX
                </span>

                <span
                  className="
                    hidden
                    text-[8px]
                    font-medium
                    tracking-[0.24em]
                    text-slate-500
                    sm:block
                  "
                >
                  MARKET INTELLIGENCE
                </span>
              </span>
            </Link>

            {/* ==================================================
                DESKTOP NAVIGATION
            =================================================== */}

            <div
              className="
                hidden
                flex-1
                items-center
                justify-center
                lg:flex
              "
            >
              <div className="flex items-center gap-1">
                {mainNavigation.map((item) => {
                  const hasDropdown =
                    Boolean(
                      item.dropdown &&
                        item.dropdown.length,
                    );

                  const dropdownOpen =
                    openDropdown === item.label;

                  const active =
                    isActive(item.href);

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => {
                        if (hasDropdown) {
                          openDropdownMenu(
                            item.label,
                          );
                        }
                      }}
                      onMouseLeave={() => {
                        if (hasDropdown) {
                          scheduleCloseDropdown();
                        }
                      }}
                    >
                      <div className="flex items-center">
                        {/* Main route */}

                        <Link
                          href={item.href}
                          onClick={() => {
                            clearCloseTimer();
                            setOpenDropdown(null);
                          }}
                          className={`
                            relative
                            rounded-xl
                            px-3.5
                            py-2.5
                            text-sm
                            font-medium
                            transition-colors
                            ${
                              active
                                ? "text-white"
                                : "text-slate-400 hover:text-white"
                            }
                          `}
                        >
                          {item.label}

                          {active && (
                            <span
                              aria-hidden="true"
                              className="
                                absolute
                                inset-x-3
                                -bottom-[1px]
                                h-px
                                bg-gradient-to-r
                                from-transparent
                                via-cyan-300
                                to-transparent
                              "
                            />
                          )}
                        </Link>

                        {/* ONLY ONE DROPDOWN BUTTON */}

                        {hasDropdown && (
                          <button
                            type="button"
                            aria-label={`Toggle ${item.label} menu`}
                            aria-haspopup="menu"
                            aria-expanded={
                              dropdownOpen
                            }
                            onClick={(event) => {
                              event.preventDefault();
                              event.stopPropagation();

                              toggleDropdown(
                                item.label,
                              );
                            }}
                            className="
                              flex
                              h-9
                              w-8
                              items-center
                              justify-center
                              rounded-lg
                              text-slate-500
                              transition-colors
                              hover:bg-white/[0.05]
                              hover:text-white
                            "
                          >
                            <ChevronDown
                              className={`
                                h-4
                                w-4
                                transition-transform
                                duration-200
                                ${
                                  dropdownOpen
                                    ? "rotate-180 text-cyan-300"
                                    : ""
                                }
                              `}
                            />
                          </button>
                        )}
                      </div>

                      {/* =================================================
                          DESKTOP DROPDOWN
                      ================================================== */}

                      {hasDropdown &&
                        dropdownOpen &&
                        item.dropdown && (
                          <div
                            className="
                              absolute
                              left-1/2
                              top-full
                              z-[200]
                              w-[380px]
                              -translate-x-1/2
                              pt-3
                            "
                            onMouseEnter={() => {
                              clearCloseTimer();

                              openDropdownMenu(
                                item.label,
                              );
                            }}
                            onMouseLeave={() => {
                              scheduleCloseDropdown();
                            }}
                          >
                            <div
                              role="menu"
                              className="
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/[0.10]
                                bg-[#090E16]
                                p-2
                                shadow-[0_30px_90px_rgba(0,0,0,0.72)]
                                backdrop-blur-2xl
                              "
                            >
                              {/* Dropdown heading */}

                              <div className="px-3 pb-2 pt-2">
                                <div className="flex items-center gap-2">
                                  <Sparkles
                                    className="
                                      h-3.5
                                      w-3.5
                                      text-cyan-300
                                    "
                                  />

                                  <span
                                    className="
                                      text-[10px]
                                      font-semibold
                                      uppercase
                                      tracking-[0.2em]
                                      text-slate-500
                                    "
                                  >
                                    Explore{" "}
                                    {item.label}
                                  </span>
                                </div>
                              </div>

                              {/* Dropdown options */}

                              <div className="space-y-1">
                                {item.dropdown.map(
                                  (
                                    dropdownItem,
                                  ) => {
                                    const itemActive =
                                      isDropdownItemActive(
                                        dropdownItem.href,
                                      );

                                    return (
                                      <Link
                                        key={
                                          dropdownItem.href
                                        }
                                        href={
                                          dropdownItem.href
                                        }
                                        role="menuitem"
                                        onClick={
                                          closeNavigation
                                        }
                                        className={`
                                          group
                                          flex
                                          w-full
                                          items-start
                                          gap-3
                                          rounded-xl
                                          p-3
                                          text-left
                                          transition-all
                                          duration-200
                                          ${
                                            itemActive
                                              ? "bg-cyan-300/[0.09]"
                                              : "hover:bg-white/[0.055]"
                                          }
                                        `}
                                      >
                                        {/* Icon */}

                                        <span
                                          className={`
                                            mt-0.5
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            border
                                            ${
                                              itemActive
                                                ? "border-cyan-300/30 bg-cyan-300/[0.08] text-cyan-300"
                                                : "border-white/[0.08] bg-white/[0.02] text-slate-400 group-hover:border-cyan-300/25 group-hover:text-cyan-300"
                                            }
                                          `}
                                        >
                                          {getItemIcon(
                                            dropdownItem.label,
                                          )}
                                        </span>

                                        {/* Content */}

                                        <span className="min-w-0 flex-1">
                                          <span
                                            className={`
                                              flex
                                              items-center
                                              gap-1
                                              text-sm
                                              font-semibold
                                              ${
                                                itemActive
                                                  ? "text-white"
                                                  : "text-slate-200 group-hover:text-white"
                                              }
                                            `}
                                          >
                                            {
                                              dropdownItem.label
                                            }

                                            <ArrowUpRight
                                              className="
                                                h-3.5
                                                w-3.5
                                                opacity-0
                                                transition-all
                                                group-hover:translate-x-0.5
                                                group-hover:-translate-y-0.5
                                                group-hover:opacity-100
                                              "
                                            />
                                          </span>

                                          <span
                                            className="
                                              mt-1
                                              block
                                              text-xs
                                              leading-5
                                              text-slate-500
                                            "
                                          >
                                            {
                                              dropdownItem.description
                                            }
                                          </span>
                                        </span>
                                      </Link>
                                    );
                                  },
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ==================================================
                DESKTOP ACTIONS
            =================================================== */}

            <div
              className="
                hidden
                items-center
                gap-2
                lg:flex
              "
            >
              <Link
                href="/contact"
                onClick={closeNavigation}
                className="
                  rounded-xl
                  px-3.5
                  py-2.5
                  text-sm
                  font-medium
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                Contact
              </Link>

              <Link
                href="/dashboard"
                onClick={closeNavigation}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-xl
                  border
                  border-cyan-300/20
                  bg-cyan-300/[0.08]
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-cyan-100
                  shadow-[0_0_24px_rgba(34,211,238,0.04)]
                  transition-all
                  duration-300
                  hover:border-cyan-300/35
                  hover:bg-cyan-300/[0.13]
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.10)]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.08]
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative">
                  Open Dashboard
                </span>

                <ArrowUpRight className="relative h-4 w-4" />
              </Link>
            </div>

            {/* ==================================================
                MOBILE MENU BUTTON
            =================================================== */}

            <button
              type="button"
              onClick={() => {
                setMobileOpen(
                  (current) => !current,
                );

                setOpenDropdown(null);
              }}
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                text-slate-300
                transition-colors
                hover:bg-white/[0.06]
                hover:text-white
                lg:hidden
              "
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* ========================================================
              MOBILE NAVIGATION
          ========================================================= */}

          {mobileOpen && (
            <div
              id="mobile-navigation"
              className="
                border-t
                border-white/[0.07]
                lg:hidden
              "
            >
              <div
                className="
                  max-h-[calc(100vh-110px)]
                  overflow-y-auto
                  p-3
                "
              >
                <div className="space-y-1">
                  {mainNavigation.map(
                    (item) => {
                      const hasDropdown =
                        Boolean(
                          item.dropdown &&
                            item.dropdown.length,
                        );

                      const dropdownOpen =
                        openDropdown ===
                        item.label;

                      return (
                        <div
                          key={item.label}
                        >
                          <div className="flex items-center">
                            {/* Mobile parent link */}

                            <Link
                              href={item.href}
                              onClick={
                                closeNavigation
                              }
                              className={`
                                flex-1
                                rounded-xl
                                px-3
                                py-3
                                text-sm
                                font-medium
                                transition-colors
                                ${
                                  isActive(
                                    item.href,
                                  )
                                    ? "bg-white/[0.05] text-white"
                                    : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                                }
                              `}
                            >
                              {item.label}
                            </Link>

                            {/* ONE mobile dropdown arrow */}

                            {hasDropdown && (
                              <button
                                type="button"
                                aria-label={`Toggle ${item.label} menu`}
                                aria-haspopup="menu"
                                aria-expanded={
                                  dropdownOpen
                                }
                                onClick={() =>
                                  toggleDropdown(
                                    item.label,
                                  )
                                }
                                className="
                                  flex
                                  h-10
                                  w-10
                                  items-center
                                  justify-center
                                  rounded-xl
                                  text-slate-500
                                  transition-colors
                                  hover:bg-white/[0.04]
                                  hover:text-white
                                "
                              >
                                <ChevronDown
                                  className={`
                                    h-4
                                    w-4
                                    transition-transform
                                    duration-200
                                    ${
                                      dropdownOpen
                                        ? "rotate-180 text-cyan-300"
                                        : ""
                                    }
                                  `}
                                />
                              </button>
                            )}
                          </div>

                          {/* Mobile dropdown */}

                          {hasDropdown &&
                            dropdownOpen &&
                            item.dropdown && (
                              <div
                                role="menu"
                                className="
                                  ml-3
                                  mt-1
                                  space-y-1
                                  border-l
                                  border-white/[0.08]
                                  pl-3
                                "
                              >
                                {item.dropdown.map(
                                  (
                                    dropdownItem,
                                  ) => (
                                    <Link
                                      key={
                                        dropdownItem.href
                                      }
                                      href={
                                        dropdownItem.href
                                      }
                                      role="menuitem"
                                      onClick={
                                        closeNavigation
                                      }
                                      className={`
                                        flex
                                        items-center
                                        justify-between
                                        rounded-xl
                                        px-3
                                        py-3
                                        text-sm
                                        transition-colors
                                        ${
                                          isDropdownItemActive(
                                            dropdownItem.href,
                                          )
                                            ? "bg-cyan-300/[0.07] text-cyan-300"
                                            : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                                        }
                                      `}
                                    >
                                      <span>
                                        {
                                          dropdownItem.label
                                        }
                                      </span>

                                      <ArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                                  ),
                                )}
                              </div>
                            )}
                        </div>
                      );
                    },
                  )}
                </div>

                {/* Mobile utility links */}

                <div className="mt-3 border-t border-white/[0.07] pt-3">
                  <Link
                    href="/contact"
                    onClick={closeNavigation}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      px-3
                      py-3
                      text-sm
                      font-medium
                      text-slate-400
                      transition-colors
                      hover:bg-white/[0.04]
                      hover:text-white
                    "
                  >
                    <CircleHelp className="h-4 w-4" />

                    Contact & Support
                  </Link>

                  <Link
                    href="/dashboard"
                    onClick={closeNavigation}
                    className="
                      mt-2
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-cyan-300/20
                      bg-cyan-300/[0.08]
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-cyan-100
                      transition-all
                      hover:bg-cyan-300/[0.13]
                    "
                  >
                    Open Dashboard

                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Mobile brand statement */}

                <div
                  className="
                    mt-4
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    p-4
                  "
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-300
                        shadow-[0_0_10px_rgba(103,232,249,0.8)]
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-slate-500
                      "
                    >
                      Market Intelligence
                    </span>
                  </div>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    Clear market context,
                    multi-asset analysis,
                    technical insights and
                    risk-aware trading education
                    in one focused workspace.
                  </p>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
