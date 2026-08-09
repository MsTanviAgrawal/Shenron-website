"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { mainNavigation } from "@/data/navigation";

export function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  /*
   * Close mobile navigation whenever the route changes.
   */
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  /*
   * Prevent body scrolling when the mobile navigation is open.
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

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  const closeNavigation = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Ambient navigation glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-cyan-400/[0.035] blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main navigation"
          className="
            relative
            rounded-2xl
            border border-white/[0.08]
            bg-[#080c12]/80
            shadow-[0_20px_60px_rgba(0,0,0,0.28)]
            backdrop-blur-2xl
          "
        >
          <div className="flex h-[72px] items-center justify-between px-4 sm:px-6">
            {/* =========================================================
                BRAND
            ========================================================= */}
            <Link
              href="/"
              onClick={closeNavigation}
              className="group flex shrink-0 items-center gap-3"
              aria-label="Shenron home"
            >
              {/* Custom Shenron logo mark */}
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
                  border border-cyan-300/20
                  bg-cyan-300/[0.06]
                  shadow-[0_0_30px_rgba(98,230,255,0.08)]
                "
              >
                {/* Outer glow */}
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(98,230,255,0.18),transparent_65%)]" />

                {/* Abstract S / Dragon / Market mark */}
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    relative
                    h-7
                    w-7
                    transition-transform
                    duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                >
                  <path
                    d="M29.5 8.5C26.6 6.1 22.8 5 18.9 5.5C14.3 6.1 10.8 8.6 10.8 12.1C10.8 15.6 14.1 17.1 19.8 18.1C25.2 19 28.8 20.5 28.8 24.3C28.8 28.5 24.8 31.5 19.2 31.5C15.1 31.5 11.7 30.1 9.1 27.6"
                    stroke="url(#shenron-gradient)"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M8.5 27.5L12.1 27.1L10.2 30.7"
                    stroke="url(#shenron-gradient)"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M12.2 22.7L16.1 19.5L19.4 21.8L24 16.5L28.7 18.7"
                    stroke="rgba(139,124,255,0.9)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="28.7"
                    cy="18.7"
                    r="1.8"
                    fill="#62E6FF"
                  />

                  <defs>
                    <linearGradient
                      id="shenron-gradient"
                      x1="7"
                      y1="7"
                      x2="32"
                      y2="33"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#62E6FF" />
                      <stop offset="1" stopColor="#8B7CFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>

              <span className="flex flex-col">
                <span
                  className="
                    text-[15px]
                    font-semibold
                    tracking-[0.28em]
                    text-white
                  "
                >
                  SHENRON
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

            {/* =========================================================
                DESKTOP NAVIGATION
            ========================================================= */}
            <div className="hidden items-center lg:flex">
              <div className="ml-8 flex items-center gap-1">
                {mainNavigation.map((item) => {
                  const hasDropdown =
                    item.dropdown && item.dropdown.length > 0;

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => {
                        if (hasDropdown) {
                          setOpenDropdown(item.label);
                        }
                      }}
                      onMouseLeave={() => {
                        if (hasDropdown) {
                          setOpenDropdown(null);
                        }
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`
                          group
                          relative
                          flex
                          items-center
                          gap-1.5
                          rounded-xl
                          px-3.5
                          py-2.5
                          text-sm
                          font-medium
                          transition-all
                          duration-200
                          ${
                            isActive(item.href)
                              ? "text-white"
                              : "text-slate-400 hover:text-white"
                          }
                        `}
                      >
                        {item.label}

                        {hasDropdown && (
                          <ChevronDown
                            className={`
                              h-3.5
                              w-3.5
                              transition-transform
                              duration-200
                              ${
                                openDropdown === item.label
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
                          />
                        )}

                        {isActive(item.href) && (
                          <span
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

                      {/* =================================================
                          DESKTOP DROPDOWN
                      ================================================= */}
                      {hasDropdown &&
                        openDropdown === item.label &&
                        item.dropdown && (
                          <div
                            className="
                              absolute
                              left-1/2
                              top-full
                              w-[360px]
                              -translate-x-1/2
                              pt-3
                            "
                          >
                            <div
                              className="
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/[0.08]
                                bg-[#0b1018]/95
                                p-2
                                shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                                backdrop-blur-2xl
                              "
                            >
                              <div className="px-3 pb-2 pt-2">
                                <div className="flex items-center gap-2">
                                  <Sparkles className="h-3.5 w-3.5 text-cyan-300" />

                                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Explore
                                  </span>
                                </div>
                              </div>

                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  onClick={closeNavigation}
                                  className="
                                    group
                                    flex
                                    items-start
                                    gap-3
                                    rounded-xl
                                    p-3
                                    transition-colors
                                    duration-200
                                    hover:bg-white/[0.045]
                                  "
                                >
                                  <span
                                    className="
                                      mt-0.5
                                      flex
                                      h-9
                                      w-9
                                      shrink-0
                                      items-center
                                      justify-center
                                      rounded-lg
                                      border
                                      border-white/[0.07]
                                      bg-white/[0.025]
                                      text-slate-400
                                      transition-all
                                      duration-200
                                      group-hover:border-cyan-300/20
                                      group-hover:bg-cyan-300/[0.07]
                                      group-hover:text-cyan-300
                                    "
                                  >
                                    {dropdownItem.label.includes("Forex") && (
                                      <BarChart3 className="h-4 w-4" />
                                    )}

                                    {dropdownItem.label.includes("Gold") && (
                                      <Sparkles className="h-4 w-4" />
                                    )}

                                    {dropdownItem.label.includes("Crypto") && (
                                      <span className="text-xs font-bold">
                                        ₿
                                      </span>
                                    )}

                                    {dropdownItem.label.includes("Indices") && (
                                      <BarChart3 className="h-4 w-4" />
                                    )}

                                    {dropdownItem.label.includes(
                                      "Technical",
                                    ) && <BarChart3 className="h-4 w-4" />}

                                    {dropdownItem.label.includes("Risk") && (
                                      <ShieldCheck className="h-4 w-4" />
                                    )}
                                  </span>

                                  <span className="min-w-0">
                                    <span className="flex items-center gap-1 text-sm font-medium text-slate-200 group-hover:text-white">
                                      {dropdownItem.label}

                                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                    </span>

                                    <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                                      {dropdownItem.description}
                                    </span>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =========================================================
                DESKTOP ACTIONS
            ========================================================= */}
            <div className="hidden items-center gap-2 lg:flex">
              <Link
                href="/#contact"
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
                  shadow-[0_0_30px_rgba(98,230,255,0.06)]
                  transition-all
                  duration-300
                  hover:border-cyan-300/35
                  hover:bg-cyan-300/[0.13]
                  hover:shadow-[0_0_35px_rgba(98,230,255,0.12)]
                "
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Open Dashboard</span>

                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* =========================================================
                MOBILE MENU BUTTON
            ========================================================= */}
            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
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
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* =============================================================
              MOBILE NAVIGATION
          ============================================================= */}
          {mobileOpen && (
            <div
              id="mobile-navigation"
              className="
                border-t
                border-white/[0.07]
                lg:hidden
              "
            >
              <div className="max-h-[calc(100vh-110px)] overflow-y-auto p-3">
                <div className="space-y-1">
                  {mainNavigation.map((item) => {
                    const hasDropdown =
                      item.dropdown && item.dropdown.length > 0;

                    return (
                      <div key={item.label}>
                        <div className="flex items-center">
                          <Link
                            href={item.href}
                            onClick={closeNavigation}
                            className="
                              flex-1
                              rounded-xl
                              px-3
                              py-3
                              text-sm
                              font-medium
                              text-slate-300
                              transition-colors
                              hover:bg-white/[0.04]
                              hover:text-white
                            "
                          >
                            {item.label}
                          </Link>

                          {hasDropdown && (
                            <button
                              type="button"
                              onClick={() => toggleDropdown(item.label)}
                              className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                text-slate-500
                                hover:bg-white/[0.04]
                                hover:text-white
                              "
                              aria-label={`Toggle ${item.label} menu`}
                              aria-expanded={openDropdown === item.label}
                            >
                              <ChevronDown
                                className={`
                                  h-4
                                  w-4
                                  transition-transform
                                  duration-200
                                  ${
                                    openDropdown === item.label
                                      ? "rotate-180"
                                      : ""
                                  }
                                `}
                              />
                            </button>
                          )}
                        </div>

                        {hasDropdown &&
                          openDropdown === item.label &&
                          item.dropdown && (
                            <div className="ml-3 border-l border-white/[0.07] pl-3">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  onClick={closeNavigation}
                                  className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-xl
                                    px-3
                                    py-2.5
                                    text-sm
                                    text-slate-500
                                    transition-colors
                                    hover:bg-white/[0.035]
                                    hover:text-white
                                  "
                                >
                                  <span>{dropdownItem.label}</span>

                                  <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                              ))}
                            </div>
                          )}
                      </div>
                    );
                  })}
                </div>

                {/* Mobile utility links */}
                <div className="mt-3 border-t border-white/[0.07] pt-3">
                  <Link
                    href="/#contact"
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
                <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(98,230,255,0.8)]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Market Intelligence
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Clear market context, structured analysis and risk-aware
                    trading education in one focused workspace.
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

export default Navbar;
