"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  ChevronDown,
  CircleCheck,
  LineChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
  Zap,
} from "lucide-react";

const tickerItems = [
  { symbol: "XAU/USD", price: "2,438.21", change: "+1.82%", positive: true },
  { symbol: "EUR/USD", price: "1.1742", change: "+0.31%", positive: true },
  { symbol: "BTC/USD", price: "118,240", change: "+2.18%", positive: true },
  { symbol: "NASDAQ", price: "21,482", change: "+0.72%", positive: true },
  { symbol: "ETH/USD", price: "3,482.10", change: "+3.14%", positive: true },
  { symbol: "GBP/USD", price: "1.3125", change: "-0.18%", positive: false },
  { symbol: "S&P 500", price: "5,635.20", change: "+0.85%", positive: true },
  { symbol: "WTI CRUDE", price: "78.45", change: "-0.62%", positive: false },
];

const markets = [
  {
    id: "forex",
    name: "Forex",
    symbol: "EUR/USD",
    price: "1.1742",
    change: "+0.31%",
    description:
      "Understand currency market structure, momentum, volatility and major trading sessions.",
    icon: BarChart3,
  },
  {
    id: "gold",
    name: "Gold & Metals",
    symbol: "XAU/USD",
    price: "2,438.21",
    change: "+1.82%",
    description:
      "Explore gold market context, key levels, momentum and risk conditions.",
    icon: Sparkles,
  },
  {
    id: "crypto",
    name: "Crypto",
    symbol: "BTC/USD",
    price: "118,240",
    change: "+2.18%",
    description:
      "Follow digital asset momentum, volatility and broader crypto market conditions.",
    icon: Zap,
  },
  {
    id: "indices",
    name: "Global Indices",
    symbol: "NASDAQ",
    price: "21,482",
    change: "+0.72%",
    description:
      "Monitor major global indices and understand trends, momentum and market sentiment.",
    icon: TrendingUp,
  },
];

const intelligenceFeatures = [
  {
    title: "Market Structure",
    description:
      "Identify trends, support and resistance, liquidity zones and important price levels.",
    icon: LineChart,
  },
  {
    title: "Momentum Context",
    description:
      "Understand whether current market momentum is strengthening, weakening or consolidating.",
    icon: TrendingUp,
  },
  {
    title: "Risk Awareness",
    description:
      "Evaluate volatility and market conditions before making a trading decision.",
    icon: ShieldCheck,
  },
];

const educationItems = [
  {
    id: "forex-education",
    title: "Forex Trading",
    description:
      "Learn currency pairs, market sessions, price movements and the fundamentals of forex trading.",
    icon: BarChart3,
  },
  {
    id: "technical-analysis",
    title: "Technical Analysis",
    description:
      "Understand charts, trends, market structure, support, resistance and technical indicators.",
    icon: LineChart,
  },
  {
    id: "risk-management",
    title: "Risk Management",
    description:
      "Learn why position sizing, risk awareness and disciplined trading matter.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What is Orvix?",
    answer:
      "Orvix is a market intelligence and trading education platform designed to help users understand forex, gold, crypto and global indices through structured market context and analysis.",
  },
  {
    question: "What markets does Orvix cover?",
    answer:
      "The Orvix platform focuses on forex, gold and metals, cryptocurrencies and major global indices.",
  },
  {
    question: "Is Orvix a trading broker?",
    answer:
      "No. Orvix is designed as a market intelligence and educational experience. It does not act as a broker or execute trades.",
  },
  {
    question: "Does Orvix guarantee trading profits?",
    answer:
      "No. Market analysis and educational information cannot guarantee trading results. Financial markets involve significant risk, and users should make decisions based on their own circumstances and risk tolerance.",
  },
  {
    question: "Can beginners use Orvix?",
    answer:
      "Yes. Orvix is designed to present market concepts in a structured way, while the education section provides introductory material for people learning about forex, technical analysis and risk management.",
  },
];

const heroChartPoints = [
  { x: 0, y: 178, value: "2,421.84", change: "+0.42%" },
  { x: 60, y: 158, value: "2,425.16", change: "+0.56%" },
  { x: 120, y: 138, value: "2,428.73", change: "+0.71%" },
  { x: 180, y: 120, value: "2,431.28", change: "+0.83%" },
  { x: 240, y: 105, value: "2,433.91", change: "+0.94%" },
  { x: 300, y: 92, value: "2,435.44", change: "+1.07%" },
  { x: 360, y: 92, value: "2,436.18", change: "+1.21%" },
  { x: 420, y: 81, value: "2,437.02", change: "+1.36%" },
  { x: 480, y: 59, value: "2,437.68", change: "+1.52%" },
  { x: 540, y: 43, value: "2,438.04", change: "+1.69%" },
  { x: 600, y: 30, value: "2,438.21", change: "+1.82%" },
];

const heroChartPath = heroChartPoints
  .map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`)
  .join(" ");

const heroBackgroundParticles = [
  { x: 8, y: 24, size: 2, delay: "0s", duration: "9s", color: "cyan" },
  { x: 15, y: 68, size: 1, delay: "1.8s", duration: "11s", color: "violet" },
  { x: 23, y: 39, size: 1.5, delay: "3.2s", duration: "10s", color: "cyan" },
  { x: 31, y: 78, size: 2, delay: "0.9s", duration: "12s", color: "violet" },
  { x: 39, y: 18, size: 1.5, delay: "4.1s", duration: "10s", color: "cyan" },
  { x: 47, y: 58, size: 1, delay: "2.6s", duration: "13s", color: "cyan" },
  { x: 55, y: 31, size: 2, delay: "5s", duration: "11s", color: "violet" },
  { x: 64, y: 73, size: 1.5, delay: "1.2s", duration: "12s", color: "cyan" },
  { x: 72, y: 21, size: 1, delay: "3.8s", duration: "9s", color: "violet" },
  { x: 81, y: 63, size: 2, delay: "2.1s", duration: "13s", color: "cyan" },
  { x: 89, y: 35, size: 1.5, delay: "4.8s", duration: "10s", color: "violet" },
  { x: 94, y: 79, size: 1, delay: "0.4s", duration: "12s", color: "cyan" },
];

export default function Home() {
  const [activeChartIndex, setActiveChartIndex] = useState<number | null>(null);
  const activeChartPoint =
    activeChartIndex === null ? null : heroChartPoints[activeChartIndex];

  const marketsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Only apply animations on screens 640px and wider (Desktop/Tablet)
    mm.add("(min-width: 640px)", () => {
      const startFluctuation = () => {
        const cards = gsap.utils.toArray(".market-card") as HTMLElement[];

        cards.forEach((card, index) => {
          const isEven = index % 2 === 0;
          const targetY = isEven ? 15 : -15;
          gsap.set(card, { y: 0 });

          gsap.to(card, {
            y: targetY,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
        });
      };

      // Initial Reveal Scroll Trigger
      gsap.fromTo(
        ".market-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: marketsRef.current,
            start: "top 85%",
            once: true,
          },
          onComplete: () => {
            startFluctuation();
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  const handleHeroChartMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = Math.max(
      0,
      Math.min(rect.width, event.clientX - rect.left),
    );
    const chartX = (relativeX / rect.width) * 600;

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    heroChartPoints.forEach((point, index) => {
      const distance = Math.abs(point.x - chartX);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveChartIndex(nearestIndex);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#070A0F] text-white">
      <style>{`
        @keyframes heroChartDraw {
          0% { stroke-dashoffset: 1200; }
          45%, 72% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1200; }
        }
        @keyframes heroChartGlow {
          0%, 100% { opacity: 0.18; transform: scale(0.88); }
          50% { opacity: 0.42; transform: scale(1.18); }
        }
        @keyframes heroScan {
          0% { transform: translateX(-120%); opacity: 0; }
          12% { opacity: 0.55; }
          55% { opacity: 0.18; }
          100% { transform: translateX(520%); opacity: 0; }
        }
        @keyframes heroPulseDot {
          0%, 100% { opacity: 0.45; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.25); }
        }
        @keyframes heroFloatingDot {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          12% { opacity: 0.9; }
          50% { transform: translate3d(120px, -18px, 0); opacity: 0.7; }
          100% { transform: translate3d(250px, 8px, 0); opacity: 0; }
        }
        @keyframes buttonParticleOne {
          0% { transform: translate3d(-10px, 2px, 0) scale(0.55); opacity: 0; }
          15% { opacity: 0.85; }
          50% { transform: translate3d(55px, -1px, 0) scale(1); opacity: 0.9; }
          100% { transform: translate3d(125px, 3px, 0) scale(0.45); opacity: 0; }
        }
        @keyframes buttonParticleTwo {
          0% { transform: translate3d(35px, 9px, 0) scale(0.45); opacity: 0; }
          20% { opacity: 0.65; }
          55% { transform: translate3d(105px, -4px, 0) scale(0.9); opacity: 0.95; }
          100% { transform: translate3d(170px, 5px, 0) scale(0.4); opacity: 0; }
        }
        @keyframes buttonParticleThree {
          0% { transform: translate3d(95px, -4px, 0) scale(0.4); opacity: 0; }
          25% { opacity: 0.75; }
          60% { transform: translate3d(145px, 8px, 0) scale(1); opacity: 0.7; }
          100% { transform: translate3d(215px, -2px, 0) scale(0.35); opacity: 0; }
        }
        .hero-chart-line {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: heroChartDraw 5.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .hero-chart-area {
          transform-origin: center;
          animation: heroChartGlow 3.8s ease-in-out infinite;
        }
        .hero-chart-scan { animation: heroScan 4.5s linear infinite; }
        .hero-chart-dot {
          animation: heroPulseDot 1.8s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .hero-floating-dot { animation: heroFloatingDot 5s linear infinite; }
        .button-particle-one,
        .button-particle-two,
        .button-particle-three,
        .button-particle-four {
          opacity: 0;
          animation-play-state: paused;
        }

        .group:hover .button-particle-one {
          animation: buttonParticleOne 2.8s linear infinite;
        }
        .group:hover .button-particle-two {
          animation: buttonParticleTwo 3.3s linear infinite 0.25s;
        }
        .group:hover .button-particle-three {
          animation: buttonParticleThree 3s linear infinite 0.55s;
        }
        .group:hover .button-particle-four {
          animation: buttonParticleFour 3.6s linear infinite 0.8s;
        }

        @keyframes buttonParticleFour {
          0% {
            transform: translate3d(18px, 18px, 0) scale(0.45);
            opacity: 0;
          }
          18% { opacity: 0.7; }
          50% {
            transform: translate3d(105px, 17px, 0) scale(0.95);
            opacity: 0.95;
          }
          100% {
            transform: translate3d(190px, 19px, 0) scale(0.35);
            opacity: 0;
          }
        }
        @keyframes heroAuroraDrift {
          0%, 100% {
            transform: translate3d(-4%, -2%, 0) scale(1);
          }
          50% {
            transform: translate3d(5%, 4%, 0) scale(1.08);
          }
        }

        @keyframes heroAuroraDriftReverse {
          0%, 100% {
            transform: translate3d(5%, 3%, 0) scale(1.05);
          }
          50% {
            transform: translate3d(-6%, -4%, 0) scale(0.96);
          }
        }

        @keyframes heroGridFlow {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 72px 72px, -72px 72px; }
        }

        @keyframes heroOrbitSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes heroOrbitSpinReverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }

        @keyframes heroParticleFloat {
          0%, 100% {
            transform: translate3d(0, 12px, 0) scale(0.75);
            opacity: 0;
          }
          14% { opacity: 0.55; }
          50% {
            transform: translate3d(24px, -24px, 0) scale(1);
            opacity: 0.9;
          }
          86% { opacity: 0.45; }
        }

        @keyframes heroDataPulse {
          0%, 100% { opacity: 0.12; transform: scaleX(0.92); }
          50% { opacity: 0.45; transform: scaleX(1); }
        }

        @keyframes heroSignalTravel {
          0% {
            transform: translate3d(-20px, 0, 0);
            opacity: 0;
          }
          12% { opacity: 0.55; }
          48% { opacity: 0.25; }
          100% {
            transform: translate3d(120px, 0, 0);
            opacity: 0;
          }
        }

        @keyframes heroStarTwinkle {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.72; }
        }

        @keyframes heroGradientSweep {
          0%, 100% {
            transform: translate3d(-10%, -4%, 0) rotate(-8deg) scale(1);
          }
          50% {
            transform: translate3d(9%, 5%, 0) rotate(7deg) scale(1.12);
          }
        }

        @keyframes heroGradientSweepReverse {
          0%, 100% {
            transform: translate3d(8%, 4%, 0) rotate(10deg) scale(1.08);
          }
          50% {
            transform: translate3d(-10%, -5%, 0) rotate(-6deg) scale(0.98);
          }
        }

        @keyframes heroGradientPulse {
          0%, 100% {
            opacity: 0.18;
            transform: scale(0.94);
          }
          50% {
            opacity: 0.42;
            transform: scale(1.06);
          }
        }

        @keyframes marketTickerScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* Hide scrollbars while preserving scroll functionality */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hero-gradient-sweep {
          animation: heroGradientSweep 18s ease-in-out infinite;
          transform-origin: center;
        }

        .hero-gradient-sweep-reverse {
          animation: heroGradientSweepReverse 23s ease-in-out infinite;
          transform-origin: center;
        }

        .hero-gradient-pulse {
          animation: heroGradientPulse 8s ease-in-out infinite;
          transform-origin: center;
        }

        .market-ticker-track {
          width: max-content;
          min-width: max-content;
          animation: marketTickerScroll 30s linear infinite;
          will-change: transform;
        }

        .market-ticker-container:hover .market-ticker-track {
          animation-play-state: paused;
        }

        .hero-ambient-grid {
          animation: heroGridFlow 18s linear infinite;
        }

        .hero-aurora-one {
          animation: heroAuroraDrift 14s ease-in-out infinite;
        }

        .hero-aurora-two {
          animation: heroAuroraDriftReverse 18s ease-in-out infinite;
        }

        .hero-orbit-one {
          animation: heroOrbitSpin 26s linear infinite;
        }

        .hero-orbit-two {
          animation: heroOrbitSpinReverse 34s linear infinite;
        }

        .hero-orbit-three {
          animation: heroOrbitSpin 42s linear infinite;
        }

        .hero-bg-particle {
          animation: heroParticleFloat var(--particle-duration) ease-in-out infinite;
          animation-delay: var(--particle-delay);
        }

        .hero-data-pulse {
          animation: heroDataPulse 4s ease-in-out infinite;
          transform-origin: center;
        }

        .hero-signal {
          animation: heroSignalTravel 5s linear infinite;
        }

        .hero-star {
          animation: heroStarTwinkle 3.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-chart-line, .hero-chart-area, .hero-chart-scan, .hero-chart-dot,
          .hero-floating-dot, .button-particle-one, .button-particle-two,
          .button-particle-three, .button-particle-four, .hero-ambient-grid,
          .hero-aurora-one, .hero-aurora-two, .hero-orbit-one, .hero-orbit-two,
          .hero-orbit-three, .hero-bg-particle, .hero-data-pulse, .hero-signal,
          .hero-star, .hero-gradient-sweep, .hero-gradient-sweep-reverse,
          .hero-gradient-pulse, .market-ticker-track { animation: none !important; }
        }
      `}</style>

      {/* ================================================================
          HERO
      ================================================================= */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="hero-aurora-one absolute left-[4%] top-[-18%] h-[72%] w-[58%] rounded-full bg-cyan-400/[0.07] blur-[110px]" />
          <div className="hero-aurora-two absolute right-[-10%] top-[18%] h-[68%] w-[55%] rounded-full bg-violet-500/[0.065] blur-[120px]" />
          <div className="hero-aurora-one absolute bottom-[-30%] left-[28%] h-[55%] w-[45%] rounded-full bg-cyan-300/[0.035] blur-[120px]" />

          <div className="hero-gradient-sweep absolute left-[-18%] top-[4%] h-[72%] w-[68%] rounded-full bg-[conic-gradient(from_210deg_at_50%_50%,rgba(34,211,238,0)_0deg,rgba(34,211,238,0.13)_72deg,rgba(139,124,255,0.12)_148deg,rgba(34,211,238,0)_240deg,rgba(34,211,238,0)_360deg)] opacity-70 blur-[70px]" />
          <div className="hero-gradient-sweep-reverse absolute right-[-20%] top-[14%] h-[76%] w-[72%] rounded-full bg-[conic-gradient(from_30deg_at_50%_50%,rgba(139,124,255,0)_0deg,rgba(139,124,255,0.12)_82deg,rgba(34,211,238,0.10)_165deg,rgba(139,124,255,0)_252deg,rgba(139,124,255,0)_360deg)] opacity-65 blur-[82px]" />
          <div className="hero-gradient-pulse absolute left-[42%] top-[25%] h-[48%] w-[32%] rounded-full bg-cyan-300/[0.045] blur-[100px]" />

          <div
            className="hero-ambient-grid absolute inset-[-90px] opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(98,230,255,0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(139,124,255,0.045) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage:
                "radial-gradient(ellipse 78% 68% at 50% 42%, black 0%, rgba(0,0,0,0.72) 42%, transparent 82%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 78% 68% at 50% 42%, black 0%, rgba(0,0,0,0.72) 42%, transparent 82%)",
            }}
          />

          <div className="hero-orbit-one absolute left-[64%] top-[42%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.055]" />
          <div className="hero-orbit-two absolute left-[64%] top-[42%] h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/[0.06] [transform:translate(-50%,-50%)_rotate(18deg)]" />
          <div className="hero-orbit-three absolute left-[64%] top-[42%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.04] [transform:translate(-50%,-50%)_rotate(-22deg)]" />

          <span className="hero-star absolute left-[64%] top-[7%] h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_14px_rgba(98,230,255,0.8)]" />
          <span className="hero-star absolute left-[86%] top-[42%] h-1.5 w-1.5 rounded-full bg-violet-200 shadow-[0_0_16px_rgba(139,124,255,0.8)]" style={{ animationDelay: "1.1s" }} />
          <span className="hero-star absolute left-[42%] top-[62%] h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(98,230,255,0.75)]" style={{ animationDelay: "2.2s" }} />

          {heroBackgroundParticles.map((particle, index) => (
            <span
              key={`hero-particle-${index}`}
              className={`hero-bg-particle absolute rounded-full ${
                particle.color === "cyan"
                  ? "bg-cyan-200 shadow-[0_0_12px_rgba(98,230,255,0.85)]"
                  : "bg-violet-200 shadow-[0_0_12px_rgba(139,124,255,0.8)]"
              }`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                "--particle-delay": particle.delay,
                "--particle-duration": particle.duration,
              } as React.CSSProperties}
            />
          ))}

          <div className="absolute left-[8%] top-[31%] h-px w-[180px] overflow-hidden bg-cyan-300/[0.07]">
            <span className="hero-signal block h-full w-16 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
          </div>
          <div className="absolute right-[8%] top-[64%] h-px w-[220px] overflow-hidden bg-violet-300/[0.06]">
            <span
              className="hero-signal block h-full w-20 bg-gradient-to-r from-transparent via-violet-300/45 to-transparent"
              style={{ animationDelay: "1.7s" }}
            />
          </div>

          <div className="absolute left-[6%] top-[46%] hidden w-28 space-y-2 opacity-50 lg:block">
            <div className="hero-data-pulse h-px w-full bg-gradient-to-r from-cyan-300/0 via-cyan-300/30 to-cyan-300/0" />
            <div className="hero-data-pulse h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" style={{ animationDelay: "1.2s" }} />
            <div className="hero-data-pulse h-px w-1/2 bg-gradient-to-r from-transparent via-violet-300/25 to-transparent" style={{ animationDelay: "2.4s" }} />
          </div>

          <div className="absolute right-[5%] top-[23%] hidden w-32 space-y-2 opacity-40 lg:block">
            <div className="flex gap-1">
              <span className="h-1 w-1 rounded-full bg-cyan-300" />
              <span className="h-1 w-6 rounded-full bg-cyan-300/20" />
              <span className="h-1 w-3 rounded-full bg-cyan-300/30" />
              <span className="h-1 w-8 rounded-full bg-violet-300/20" />
            </div>
            <div className="flex gap-1">
              <span className="h-1 w-3 rounded-full bg-violet-300/20" />
              <span className="h-1 w-8 rounded-full bg-cyan-300/25" />
              <span className="h-1 w-5 rounded-full bg-cyan-300/15" />
            </div>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,10,15,0.14)_55%,rgba(7,10,15,0.82)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#070A0F] to-transparent" />
        </div>

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-20
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-cyan-400/[0.055]
            blur-[140px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-200px]
            top-1/3
            h-[400px]
            w-[400px]
            rounded-full
            bg-violet-500/[0.045]
            blur-[120px]
          "
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-10">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-300/10
                  bg-cyan-300/[0.04]
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-cyan-300
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_10px_rgba(98,230,255,0.8)]
                  "
                />

                Market Intelligence Platform
              </div>

              <h1
                className="
                  mt-7
                  max-w-4xl
                  text-5xl
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-white
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Trade with context.
                <span className="block bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                  Not noise.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Orvix brings market intelligence, technical analysis, risk
                awareness and trading education into one focused workspace for
                modern traders.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/dashboard"
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-cyan-300/20
                    bg-cyan-300/[0.09]
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    text-cyan-100
                    shadow-[0_0_35px_rgba(98,230,255,0.06)]
                    transition-all
                    duration-300
                    hover:border-cyan-300/35
                    hover:bg-cyan-300/[0.14]
                    hover:shadow-[0_0_40px_rgba(98,230,255,0.12)]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
                  >
                    <span className="button-particle-one absolute left-0 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(98,230,255,0.95)]" />
                    <span className="button-particle-two absolute left-0 top-1/2 h-1 w-1 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(139,124,255,0.9)]" />
                    <span className="button-particle-three absolute left-0 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(98,230,255,0.9)]" />
                    <span className="button-particle-four absolute left-0 top-1/2 h-1 w-1 rounded-full bg-violet-200 shadow-[0_0_10px_rgba(139,124,255,0.9)]" />
                  </span>

                  <span className="relative z-10">
                    Explore Dashboard
                  </span>

                  <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="#markets"
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-white/[0.14]
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
                  >
                    <span className="button-particle-one absolute left-0 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(98,230,255,0.9)]" />
                    <span className="button-particle-two absolute left-0 top-1/2 h-1 w-1 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(139,124,255,0.85)]" />
                    <span className="button-particle-three absolute left-0 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(98,230,255,0.9)]" />
                    <span className="button-particle-four absolute left-0 top-1/2 h-1 w-1 rounded-full bg-violet-200 shadow-[0_0_10px_rgba(139,124,255,0.9)]" />
                  </span>

                  <span className="relative z-10">
                    Explore Markets
                  </span>

                  <ArrowRight className="relative z-10 h-4 w-4" />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-600">
                <span className="flex items-center gap-2">
                  <CircleCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Market context
                </span>

                <span className="flex items-center gap-2">
                  <CircleCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Technical analysis
                </span>

                <span className="flex items-center gap-2">
                  <CircleCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Risk awareness
                </span>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="
                  absolute
                  -inset-10
                  rounded-[40px]
                  bg-cyan-300/[0.035]
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.09]
                  bg-[#0C1119]/90
                  shadow-[0_40px_100px_rgba(0,0,0,0.45)]
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/70" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                  </div>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Orvix Intelligence
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-slate-500">XAU/USD</p>

                      <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                        2,438.21
                      </p>

                      <p className="mt-1 text-xs font-medium text-emerald-400">
                        +1.82% today
                      </p>
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-emerald-400/15
                        bg-emerald-400/[0.05]
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-emerald-300
                      "
                    >
                      BULLISH
                    </span>
                  </div>

                  <div
                    className="relative mt-8 h-56 overflow-hidden rounded-2xl border border-white/[0.05] bg-[#080D14]"
                    onMouseMove={handleHeroChartMove}
                    onMouseEnter={handleHeroChartMove}
                    onMouseLeave={() => setActiveChartIndex(null)}
                    role="img"
                    aria-label="Interactive simulated XAU/USD market chart"
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                        bg-[size:40px_40px]
                      "
                    />

                    <svg
                      viewBox="0 0 600 220"
                      preserveAspectRatio="none"
                      className="absolute inset-0 h-full w-full"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="heroChart" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#22D3EE" />
                          <stop offset="58%" stopColor="#62E6FF" />
                          <stop offset="100%" stopColor="#8B7CFF" />
                        </linearGradient>

                        <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#62E6FF" stopOpacity="0.22" />
                          <stop offset="62%" stopColor="#62E6FF" stopOpacity="0.06" />
                          <stop offset="100%" stopColor="#62E6FF" stopOpacity="0" />
                        </linearGradient>

                        <linearGradient id="heroScanGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#62E6FF" stopOpacity="0" />
                          <stop offset="50%" stopColor="#62E6FF" stopOpacity="0.55" />
                          <stop offset="100%" stopColor="#8B7CFF" stopOpacity="0" />
                        </linearGradient>

                        <filter id="heroChartBlur">
                          <feGaussianBlur stdDeviation="7" />
                        </filter>
                      </defs>

                      <path
                        d={`${heroChartPath} L600 220 L0 220 Z`}
                        fill="url(#heroArea)"
                        className="hero-chart-area"
                      />

                      <path
                        d={heroChartPath}
                        fill="none"
                        stroke="#62E6FF"
                        strokeWidth="11"
                        strokeLinecap="round"
                        opacity="0.13"
                        filter="url(#heroChartBlur)"
                      />

                      <path
                        className="hero-chart-line"
                        d={heroChartPath}
                        fill="none"
                        stroke="url(#heroChart)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <rect
                        className="hero-chart-scan"
                        x="0"
                        y="0"
                        width="115"
                        height="220"
                        fill="url(#heroScanGradient)"
                        opacity="0.24"
                      />

                      <circle className="hero-floating-dot" cx="75" cy="85" r="1.8" fill="#62E6FF" />
                      <circle
                        className="hero-floating-dot"
                        cx="170"
                        cy="55"
                        r="1.5"
                        fill="#8B7CFF"
                        style={{ animationDelay: "1.6s" }}
                      />
                      <circle
                        className="hero-floating-dot"
                        cx="300"
                        cy="72"
                        r="1.7"
                        fill="#62E6FF"
                        style={{ animationDelay: "3s" }}
                      />

                      {activeChartPoint && (
                        <>
                          <line
                            x1={activeChartPoint.x}
                            x2={activeChartPoint.x}
                            y1="18"
                            y2="198"
                            stroke="#62E6FF"
                            strokeWidth="1"
                            strokeDasharray="3 5"
                            opacity="0.65"
                          />
                          <line
                            x1="0"
                            x2={activeChartPoint.x}
                            y1={activeChartPoint.y}
                            y2={activeChartPoint.y}
                            stroke="#62E6FF"
                            strokeWidth="1"
                            strokeDasharray="2 5"
                            opacity="0.18"
                          />
                          <circle
                            cx={activeChartPoint.x}
                            cy={activeChartPoint.y}
                            r="8"
                            fill="#62E6FF"
                            opacity="0.13"
                          />
                          <circle
                            cx={activeChartPoint.x}
                            cy={activeChartPoint.y}
                            r="4.5"
                            fill="#080D14"
                            stroke="#62E6FF"
                            strokeWidth="2"
                          />
                        </>
                      )}

                      <circle
                        className="hero-chart-dot"
                        cx="600"
                        cy="30"
                        r="5"
                        fill="#62E6FF"
                      />
                      <circle cx="600" cy="30" r="13" fill="#62E6FF" opacity="0.08" />
                      <circle
                        cx="600"
                        cy="30"
                        r="8"
                        fill="none"
                        stroke="#62E6FF"
                        strokeWidth="1"
                        opacity="0.25"
                      />
                    </svg>

                    {activeChartPoint && (
                      <div
                        className="pointer-events-none absolute z-20 w-32 -translate-x-1/2 rounded-lg border border-cyan-300/15 bg-[#0A1018]/95 px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.45)] backdrop-blur-md"
                        style={{
                          left: `${(activeChartPoint.x / 600) * 100}%`,
                          top: `${Math.max(8, (activeChartPoint.y / 220) * 100 - 20)}%`,
                        }}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[8px] uppercase tracking-[0.16em] text-slate-600">
                            XAU/USD
                          </span>
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(98,230,255,0.9)]" />
                        </div>
                        <p className="mt-1 text-xs font-semibold text-white">
                          {activeChartPoint.value}
                        </p>
                        <p className="mt-0.5 text-[9px] font-semibold text-emerald-400">
                          {activeChartPoint.change} today
                        </p>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[9px] text-slate-700">
                      <span>09:00</span>
                      <span>12:00</span>
                      <span>15:00</span>
                      <span>18:00</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                      <p className="text-[9px] uppercase tracking-wider text-slate-500">
                        Momentum
                      </p>
                      <p className="mt-1 text-xs font-semibold text-white">
                        Strong
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                      <p className="text-[9px] uppercase tracking-wider text-slate-500">
                        Volatility
                      </p>
                      <p className="mt-1 text-xs font-semibold text-amber-300">
                        Medium
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                      <p className="text-[9px] uppercase tracking-wider text-slate-500">
                        Risk
                      </p>
                      <p className="mt-1 text-xs font-semibold text-cyan-300">
                        Moderate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-center lg:mt-20">
            <Link
              href="#markets"
              className="flex flex-col items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:text-slate-400"
            >
              Explore

              <ChevronDown className="h-4 w-4 animate-bounce" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          MARKET TICKER (HORIZONTALLY SCROLLABLE WITH HIDDEN SCROLLBAR)
      ================================================================= */}
      <div
        className="market-ticker-container border-y border-white/[0.06] bg-[#090E15]"
        aria-label="Market ticker"
      >
        <div className="no-scrollbar overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing">
          <div className="market-ticker-track flex min-w-max">
            {/* First Copy */}
            {tickerItems.map((item, idx) => (
              <div
                key={`ticker-a-${item.symbol}-${idx}`}
                className="
                  flex
                  w-[240px]
                  shrink-0
                  items-center
                  justify-between
                  border-r
                  border-white/[0.05]
                  px-5
                  py-4
                  first:border-l
                "
              >
                <span className="text-xs font-medium text-slate-500">
                  {item.symbol}
                </span>

                <span className="text-xs font-semibold text-slate-300">
                  {item.price}
                </span>

                <span
                  className={`text-[10px] font-semibold ${
                    item.positive ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {item.change}
                </span>
              </div>
            ))}

            {/* Second Duplicate Copy (For Infinite Scroll Loop) */}
            {tickerItems.map((item, idx) => (
              <div
                key={`ticker-b-${item.symbol}-${idx}`}
                aria-hidden="true"
                className="
                  flex
                  w-[240px]
                  shrink-0
                  items-center
                  justify-between
                  border-r
                  border-white/[0.05]
                  px-5
                  py-4
                "
              >
                <span className="text-xs font-medium text-slate-500">
                  {item.symbol}
                </span>

                <span className="text-xs font-semibold text-slate-300">
                  {item.price}
                </span>

                <span
                  className={`text-[10px] font-semibold ${
                    item.positive ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================
          MARKETS
      ================================================================= */}
      <section id="markets" className="relative py-24 sm:py-28" ref={marketsRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Markets
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              One platform.
              <span className="text-[#30c7f5]"> Four major markets.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Explore structured market context across forex, gold, crypto and
              global indices without unnecessary information overload.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {markets.map((market) => {
              const Icon = market.icon;

              return (
                <Link
                  key={market.id}
                  id={market.id}
                  href={`#${market.id}-market`}
                  className="
                    market-card
                    will-change-transform
                    group
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[#0C1119]
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-300/15
                    hover:bg-[#0E141D]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                  "
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        text-cyan-300
                        transition-colors
                        group-hover:border-cyan-300/20
                        group-hover:bg-cyan-300/[0.07]
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                  </div>

                  <p className="mt-6 text-xs text-slate-600">
                    {market.name}
                  </p>

                  <div className="mt-1 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-300">
                        {market.symbol}
                      </p>

                      <p className="mt-1 text-xl font-semibold tracking-tight text-white">
                        {market.price}
                      </p>
                    </div>

                    <span className="text-xs font-semibold text-emerald-400">
                      {market.change}
                    </span>
                  </div>

                  <p className="mt-5 text-xs leading-6 text-slate-600">
                    {market.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-cyan-300">
                    Explore market
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          MARKET INTELLIGENCE
      ================================================================= */}
      <section
        id="analysis"
        className="relative border-y border-white/[0.06] bg-[#090E15] py-18 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Market Intelligence
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                See the market
                <span className="block text-[#30c7f5]">
                  before you trade it.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Trading decisions become clearer when price, momentum,
                volatility and risk are viewed together. Orvix organizes
                these concepts into a focused market intelligence experience.
              </p>

              <Link
                href="/dashboard"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-cyan-300/15
                  bg-cyan-300/[0.06]
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-cyan-200
                  transition-all
                  hover:border-cyan-300/30
                  hover:bg-cyan-300/[0.1]
                "
              >
                Explore Dashboard

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid gap-4">
              {intelligenceFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="
                      group
                      flex
                      gap-5
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#0C1119]
                      p-5
                      transition-all
                      duration-300
                      hover:border-white/[0.12]
                    "
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.04] text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-semibold tracking-[0.18em] text-slate-700">
                          0{index + 1}
                        </span>

                        <h3 className="text-sm font-semibold text-white">
                          {feature.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHY Orvix / ABOUT
      ================================================================= */}
      <section id="about" className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                Why Orvix
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for clearer
                <span className="block text-[#30c7f5]">
                  trading decisions.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Markets move quickly. The challenge is not finding more
                information. It is understanding which information matters.
                Orvix is designed around clarity, context and disciplined
                market analysis.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Market Context",
                  text: "Understand broader conditions before focusing on individual setups.",
                  icon: BrainCircuit,
                },
                {
                  title: "Structured Analysis",
                  text: "Organize trends, momentum and key levels in one view.",
                  icon: LineChart,
                },
                {
                  title: "Risk Awareness",
                  text: "Consider volatility and market conditions before acting.",
                  icon: ShieldCheck,
                },
                {
                  title: "Focused Workflow",
                  text: "Reduce information overload and concentrate on what matters.",
                  icon: WalletCards,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5"
                  >
                    <Icon className="h-5 w-5 text-cyan-300" />

                    <h3 className="mt-5 text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          HOW IT WORKS
      ================================================================= */}
      <section
        id="how-it-works"
        className="border-y border-white/[0.06] bg-[#090E15] py-18 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              How It Works
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A simpler way to
              <span className="text-[#30c7f5]"> read the market.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose your market",
                text: "Select forex, gold, crypto or global indices and focus on the market that matters to you.",
              },
              {
                number: "02",
                title: "Understand the context",
                text: "Review market structure, momentum, volatility and key levels before forming a view.",
              },
              {
                number: "03",
                title: "Build your plan",
                text: "Use the information to create a disciplined trading process based on your own risk tolerance.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#6998a7] bg-[#0C1119] p-6"
              >
                <span className="text-2xl font-semibold tracking-[0.18em] text-cyan-300">
                  {step.number}
                </span>

                <h3 className="mt-4 text-base font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          DASHBOARD PREVIEW
      ================================================================= */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Your Trading Workspace
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Everything important.
              <span className="block text-[#30c7f5]">
                One focused dashboard.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Explore a cleaner way to view markets, price movement, market
              sentiment, risk and watchlists.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-6xl">
            <div className="absolute -inset-10 rounded-[50px] bg-cyan-400/[0.035] blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B1018] shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
              <div className="flex border-b border-white/[0.07]">
                <div className="hidden w-48 border-r border-white/[0.07] p-5 sm:block">
                  <div className="text-sm font-semibold tracking-[0.18em] text-white">
                    Orvix
                  </div>

                  <div className="mt-7 space-y-2">
                    {["Overview", "Markets", "Analysis", "Watchlist"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className={`rounded-lg px-3 py-2 text-xs ${
                            index === 0
                              ? "bg-cyan-300/[0.07] text-cyan-300"
                              : "text-slate-600"
                          }`}
                        >
                          {item}
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="flex-1 p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-600">Market Overview</p>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        Good afternoon, Trader
                      </h3>
                    </div>

                    <span className="hidden rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-xs text-slate-500 sm:block">
                      Today
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {markets.map((market) => (
                      <div
                        key={market.symbol}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                      >
                        <p className="text-[10px] text-slate-600">
                          {market.symbol}
                        </p>

                        <p className="mt-2 text-sm font-semibold text-white">
                          {market.price}
                        </p>

                        <p className="mt-1 text-[10px] font-semibold text-emerald-400">
                          {market.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_0.8fr]">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-slate-400">
                          Market Performance
                        </p>

                        <span className="text-[10px] text-slate-600">
                          XAU/USD
                        </span>
                      </div>

                      <div className="relative mt-5 h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />

                        <svg
                          viewBox="0 0 600 200"
                          preserveAspectRatio="none"
                          className="absolute inset-0 h-full w-full"
                          aria-hidden="true"
                        >
                          <path
                            d="M0 160 C45 152 60 140 95 148 C130 156 150 122 185 130 C220 138 240 112 275 120 C310 128 335 92 370 104 C405 116 420 70 455 82 C490 94 520 52 550 60 C570 66 585 45 600 35"
                            fill="none"
                            stroke="#62E6FF"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <p className="text-xs font-medium text-slate-400">
                        Market Bias
                      </p>

                      <div className="mt-6">
                        <p className="text-3xl font-semibold text-emerald-400">
                          72%
                        </p>

                        <p className="mt-1 text-xs text-slate-600">
                          Bullish conditions
                        </p>
                      </div>

                      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                      </div>

                      <div className="mt-4 flex justify-between text-[10px] text-slate-600">
                        <span>Low Risk</span>
                        <span>Moderate</span>
                        <span>High</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/[0.06] p-5 text-center sm:p-6">
                <Link
                  href="/dashboard"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-cyan-300/20
                    bg-cyan-300/[0.07]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-cyan-100
                    transition-all
                    hover:border-cyan-300/35
                    hover:bg-cyan-300/[0.12]
                  "
                >
                  Explore Full Dashboard

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          EDUCATION
      ================================================================= */}
      <section
        id="education"
        className="border-y border-white/[0.06] bg-[#090E15] py-18 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                Trading Education
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Learn the market.
                <span className="block text-[#30c7f5]">
                  Improve the process.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                Build a stronger foundation with practical educational
                content covering forex trading, technical analysis and risk
                management.
              </p>

              <Link
                href="#faq"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
              >
                Learn more about Orvix

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid gap-4">
              {educationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="group rounded-2xl border border-white/[0.07] bg-[#0C1119] p-5 transition-all hover:border-white/[0.12]"
                  >
                    <div className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/10 bg-violet-300/[0.04] text-violet-300">
                        <Icon className="h-4 w-4" />
                      </span>

                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ
      ================================================================= */}
      <section id="faq" className="py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Frequently asked questions.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Learn more about Orvix, its market intelligence approach and
              how the platform is designed to be used.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-[#0C1119]
                  px-5
                  transition-colors
                  hover:border-white/[0.12]
                "
              >
                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-4
                    py-5
                    text-sm
                    font-medium
                    text-slate-200
                  "
                >
                  <span>{faq.question}</span>

                  <ChevronDown className="h-4 w-4 shrink-0 text-slate-600 transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <div className="border-t border-white/[0.05] pb-5 pt-4">
                  <p className="text-sm leading-7 text-slate-500">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CONTACT / FINAL CTA
      ================================================================= */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#090E15] py-12 sm:py-14"
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[400px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.04]
            blur-[130px]
          "
        />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-300">
            <Sparkles className="h-5 w-5" />
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Build a better
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              trading process.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Explore market intelligence, technical analysis and educational
            resources designed to help you approach financial markets with
            greater context and discipline.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-cyan-300/20
                bg-cyan-300/[0.08]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-cyan-100
                transition-all
                hover:border-cyan-300/35
                hover:bg-cyan-300/[0.13]
              "
            >
              Open Dashboard
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="#faq"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-slate-300
                transition-all
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          LEGAL ANCHORS
      ================================================================= */}
      <section
        id="privacy"
        className="border-t border-white/[0.05] bg-[#06090E] py-14"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-slate-600" />

            <div>
              <h2 className="text-sm font-semibold text-slate-300">
                Privacy
              </h2>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                Orvix is currently presented as a frontend product
                experience. No user account, personal data database or
                backend service is connected in this frontend-only version.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="terms"
        className="border-t border-white/[0.05] bg-[#06090E] py-14"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <BookOpen className="mt-1 h-5 w-5 shrink-0 text-slate-600" />

            <div>
              <h2 className="text-sm font-semibold text-slate-300">
                Terms of Use
              </h2>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                Information displayed by this frontend prototype is for
                educational and informational purposes. Market data shown in
                the interface is illustrative mock data and should not be
                treated as real-time financial information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}