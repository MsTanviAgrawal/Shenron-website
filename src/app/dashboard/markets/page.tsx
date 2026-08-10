// import DashboardMarkets from "../../../components/dashboard/pages/DashboardMarkets";

// import DashboardMarkets from "@/components/dashboard/pages/DashboardMarkets";

// export default function DashboardMarketsPage() {
//   return <DashboardMarkets />;
// }

import { Suspense } from "react";

import DashboardMarkets from "@/components/dashboard/pages/DashboardMarkets";

function DashboardMarketsLoading() {
  return (
    <section className="space-y-6">
      <div>
        <div className="h-3 w-32 animate-pulse rounded bg-white/[0.06]" />

        <div className="mt-3 h-8 w-48 animate-pulse rounded-lg bg-white/[0.06]" />

        <div className="mt-2 h-4 w-full max-w-xl animate-pulse rounded bg-white/[0.04]" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-40 animate-pulse rounded-2xl border border-white/[0.07] bg-[#0C1119]"
          />
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
        <div className="h-[420px] animate-pulse rounded-2xl border border-white/[0.07] bg-[#0C1119]" />

        <div className="h-[260px] animate-pulse rounded-2xl border border-white/[0.07] bg-[#0C1119]" />
      </div>
    </section>
  );
}

export default function DashboardMarketsPage() {
  return (
    <Suspense fallback={<DashboardMarketsLoading />}>
      <DashboardMarkets />
    </Suspense>
  );
}
