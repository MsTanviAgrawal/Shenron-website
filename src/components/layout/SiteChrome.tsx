"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface SiteChromeProps {
  children: ReactNode;
}

export default function SiteChrome({
  children,
}: SiteChromeProps) {
  const pathname = usePathname();

  /*
   * Dashboard pages have their own completely separate
   * navigation system:
   *
   * - Dashboard Sidebar
   * - Dashboard Header
   *
   * Therefore the normal website Navbar and Footer
   * must not be rendered anywhere under /dashboard.
   */
  const isDashboardRoute =
    pathname === "/dashboard" ||
    pathname.startsWith("/dashboard/");

  /*
   * Dashboard route:
   *
   * Render ONLY the page content.
   *
   * The dashboard/layout.tsx file is responsible for
   * rendering DashboardShell, Sidebar and DashboardHeader.
   */
  if (isDashboardRoute) {
    return <>{children}</>;
  }

  /*
   * Normal website routes:
   *
   * Render the standard Navbar + page content + Footer.
   */
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}