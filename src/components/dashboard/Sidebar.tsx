"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  ChevronRight,
  CircleHelp,
  Eye,
  LayoutDashboard,
  LineChart,
  ShieldCheck,
  X,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const workspaceItems = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Markets",
    href: "/dashboard/dashboardmarkets",
    icon: BarChart3,
  },
  {
    label: "Analysis",
    href: "/dashboard/analysis",
    icon: LineChart,
  },
  {
    label: "Watchlist",
    href: "/dashboard/watchlist",
    icon: Eye,
  },
  {
    label: "Risk Monitor",
    href: "/dashboard/risk",
    icon: ShieldCheck,
  },
];

const resourceItems = [
  {
    label: "Education",
    href: "/education",
    icon: BookOpen,
  },
  {
    label: "How It Works",
    href: "/#how-it-works",
    icon: CircleHelp,
  },
];

function isItemActive(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === "/dashboard";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar({
  collapsed,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* =========================================================
          MOBILE OVERLAY
      ========================================================= */}

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close dashboard navigation"
          onClick={onCloseMobile}
          className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* =========================================================
          SIDEBAR
      ========================================================= */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-[60]
          flex
          w-[302px]
          flex-col
          border-r
          border-white/[0.07]
          bg-[#080D14]
          transition-all
          duration-300

          ${collapsed ? "lg:w-[88px]" : "lg:w-[302px]"}

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* =======================================================
            BRAND
        ======================================================= */}

        <div className="flex h-[86px] shrink-0 items-center border-b border-white/[0.07] px-5">
          <Link
            href="/"
            onClick={onCloseMobile}
            className="group flex items-center gap-3"
          >
            <span
              className="
                relative
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-cyan-300/20
                bg-cyan-300/[0.06]
              "
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(98,230,255,0.18),transparent_65%)]" />

              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative h-7 w-7 transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              >
                <path
                  d="M29.5 8.5C26.6 6.1 22.8 5 18.9 5.5C14.3 6.1 10.8 8.6 10.8 12.1C10.8 15.6 14.1 17.1 19.8 18.1C25.2 19 28.8 20.5 28.8 24.3C28.8 28.5 24.8 31.5 19.2 31.5C15.1 31.5 11.7 30.1 9.1 27.6"
                  stroke="url(#sidebar-shenron-gradient)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                <path
                  d="M8.5 27.5L12.1 27.1L10.2 30.7"
                  stroke="url(#sidebar-shenron-gradient)"
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
                    id="sidebar-shenron-gradient"
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

            {!collapsed && (
              <span className="min-w-0">
                <span className="block text-[15px] font-semibold tracking-[0.28em] text-white">
                  SHENRON
                </span>

                <span className="mt-1 block text-[8px] font-medium tracking-[0.22em] text-slate-600">
                  MARKET INTELLIGENCE
                </span>
              </span>
            )}
          </Link>

          {/* Mobile close button */}

          <button
            type="button"
            onClick={onCloseMobile}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] text-slate-500 hover:text-white lg:hidden"
            aria-label="Close dashboard navigation"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* =======================================================
            NAVIGATION
        ======================================================= */}

        <div className="flex-1 overflow-y-auto px-3 py-6">
          {/* Workspace */}

          <div>
            {!collapsed && (
              <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-700">
                Workspace
              </p>
            )}

            <nav className="space-y-1">
              {workspaceItems.map((item) => {
                const Icon = item.icon;
                const active = isItemActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onCloseMobile}
                    title={collapsed ? item.label : undefined}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-3
                      transition-all
                      duration-200

                      ${
                        active
                          ? "bg-cyan-300/[0.08] text-cyan-300"
                          : "text-slate-500 hover:bg-white/[0.035] hover:text-white"
                      }

                      ${collapsed ? "justify-center" : ""}
                    `}
                  >
                    {active && (
                      <span className="absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(98,230,255,0.8)]" />
                    )}

                    <Icon
                      className={`
                        h-[18px]
                        w-[18px]
                        shrink-0
                        ${
                          active
                            ? "text-cyan-300"
                            : "text-slate-600 group-hover:text-slate-300"
                        }
                      `}
                    />

                    {!collapsed && (
                      <>
                        <span className="flex-1 text-sm font-medium">
                          {item.label}
                        </span>

                        {active && (
                          <ChevronRight className="h-3.5 w-3.5 text-cyan-300/60" />
                        )}
                      </>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Resources */}

          <div className="mt-8">
            {!collapsed && (
              <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-700">
                Resources
              </p>
            )}

            <nav className="space-y-1">
              {resourceItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onCloseMobile}
                    title={collapsed ? item.label : undefined}
                    className={`
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-3
                      text-slate-500
                      transition-colors
                      hover:bg-white/[0.035]
                      hover:text-white

                      ${collapsed ? "justify-center" : ""}
                    `}
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0 text-slate-600 group-hover:text-slate-300" />

                    {!collapsed && (
                      <span className="text-sm font-medium">
                        {item.label}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* =======================================================
            SIDEBAR FOOTER
        ======================================================= */}

        <div className="shrink-0 border-t border-white/[0.07] p-3">
          <Link
            href="/contact"
            onClick={onCloseMobile}
            title={collapsed ? "Support" : undefined}
            className={`
              flex
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-slate-500
              transition-colors
              hover:bg-white/[0.035]
              hover:text-white

              ${collapsed ? "justify-center" : ""}
            `}
          >
            <CircleHelp className="h-[18px] w-[18px] shrink-0" />

            {!collapsed && (
              <span className="text-sm font-medium">
                Support
              </span>
            )}
          </Link>

          <Link
            href="/"
            onClick={onCloseMobile}
            title={collapsed ? "Back to Home" : undefined}
            className={`
              mt-1
              flex
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-slate-500
              transition-colors
              hover:bg-white/[0.035]
              hover:text-white

              ${collapsed ? "justify-center" : ""}
            `}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-black text-xs font-semibold text-white">
              N
            </span>

            {!collapsed && (
              <span className="text-sm font-medium">
                Back to Home
              </span>
            )}
          </Link>
        </div>
      </aside>
    </>
  );
}