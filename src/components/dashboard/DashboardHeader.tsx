"use client";

import {
  Bell,
  CalendarDays,
  ChevronDown,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
} from "lucide-react";

export default function DashboardHeader({
  collapsed,
  onOpenMobile,
  onToggleSidebar,
}: {
  collapsed: boolean;
  onOpenMobile: () => void;
  onToggleSidebar: () => void;
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.07] bg-[#070A0F]/85 backdrop-blur-xl">
      <div className="flex h-[76px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onOpenMobile}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-400 hover:text-white lg:hidden"
            aria-label="Open dashboard navigation"
          >
            <Menu className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={onToggleSidebar}
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-500 hover:text-white lg:flex"
            aria-label={
              collapsed
                ? "Expand dashboard sidebar"
                : "Collapse dashboard sidebar"
            }
          >
            {collapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </button>

          <div className="hidden min-w-0 sm:block">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">
              Orvix Workspace
            </p>

            <p className="mt-0.5 truncate text-sm font-semibold text-white">
              Market Intelligence
            </p>
          </div>
        </div>

        <div className="hidden max-w-md flex-1 md:block">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

            <input
              type="search"
              placeholder="Search markets, symbols..."
              className="h-10 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] pl-10 pr-16 text-xs text-white outline-none placeholder:text-slate-700 focus:border-cyan-300/20 focus:bg-white/[0.035]"
            />

            <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/[0.06] px-1.5 py-0.5 text-[9px] text-slate-700 lg:block">
              /
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-500 hover:text-white sm:flex"
            aria-label="Economic calendar"
          >
            <CalendarDays className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-500 hover:text-white"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />

            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
          </button>

          <div className="ml-1 hidden h-9 items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-2.5 sm:flex">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300/20 to-violet-300/20 text-[9px] font-bold text-cyan-200">
              S
            </span>

            <span className="text-xs font-medium text-slate-400">
              Trader
            </span>

            <ChevronDown className="h-3 w-3 text-slate-700" />
          </div>
        </div>
      </div>
    </header>
  );
}