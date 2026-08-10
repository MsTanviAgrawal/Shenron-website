"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

interface DashboardShellProps {
  children: ReactNode;
}

export default function DashboardShell({
  children,
}: DashboardShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070A0F] text-white">
     
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div
        className={`
          min-h-screen
          transition-[padding-left]
          duration-300
          ${collapsed ? "lg:pl-[88px]" : "lg:pl-[302px]"}
        `}
      >
  
        <DashboardHeader
          collapsed={collapsed}
          onOpenMobile={() => setMobileOpen(true)}
          onToggleSidebar={() =>
            setCollapsed((current) => !current)
          }
        />

        <main className="min-h-screen px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1480px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}