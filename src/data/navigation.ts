export type NavigationDropdownItem = {
  label: string;
  description: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href: string;
  dropdown?: NavigationDropdownItem[];
};

export const mainNavigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Markets",
    href: "/markets" ,

    dropdown: [
      {
        label: "Forex",
        description:
          "Currency market intelligence and FX context",
        href: "/markets/forex",
      },
      {
        label: "Gold & Metals",
        description:
          "Gold, silver and commodity market insights",
        href: "/markets/gold",
      },
      {
        label: "Crypto",
        description:
          "Digital asset momentum and volatility context",
        href: "/markets/crypto",
      },
      {
        label: "Indices",
        description:
          "Global index and equity market analysis",
        href: "/markets/indices",
      },
    ],
  },

  {
    label: "Analysis",
    href: "/analysis",
  },

  {
    label: "Education",
    href: "/education",
    dropdown: [
      {
        label: "Forex Trading",
        description:
          "Learn currency markets and trading fundamentals",
        href: "/education/forex-trading",
      },
      {
        label: "Technical Analysis",
        description:
          "Understand charts, trends and market structure",
        href: "/education/technical-analysis",
      },
      {
        label: "Risk Management",
        description:
          "Build disciplined and responsible trading habits",
        href: "/education/risk-management",
      },
    ],
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "FAQ",
    href: "/faq",
  },
];