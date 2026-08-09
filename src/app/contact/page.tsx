"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

type InquiryType =
  | "General inquiry"
  | "Platform support"
  | "Market & analysis"
  | "Education"
  | "Business & partnership";

const inquiryOptions: {
  value: InquiryType;
  label: string;
  description: string;
  icon: typeof MessageSquare;
}[] = [
  {
    value: "General inquiry",
    label: "General inquiry",
    description: "Questions about Shenron or the website",
    icon: MessageSquare,
  },
  {
    value: "Platform support",
    label: "Platform support",
    description: "Technical issues and navigation help",
    icon: Sparkles,
  },
  {
    value: "Market & analysis",
    label: "Market & analysis",
    description: "Questions about market content",
    icon: BarChart3,
  },
  {
    value: "Education",
    label: "Education",
    description: "Learning resources and trading concepts",
    icon: CircleHelp,
  },
  {
    value: "Business & partnership",
    label: "Business & partnership",
    description: "Collaboration and business inquiries",
    icon: ArrowUpRight,
  },
];

const contactChannels = [
  {
    icon: Mail,
    eyebrow: "Email support",
    title: "Send us an email",
    description:
      "For general questions, feedback, platform issues and content-related inquiries.",
    value: "support@shenron.com",
    href: "mailto:support@shenron.com",
  },
  {
    icon: Clock3,
    eyebrow: "Response window",
    title: "Support availability",
    description:
      "Messages can be submitted anytime. Response times may vary depending on inquiry volume.",
    value: "24–48 business hours",
  },
  {
    icon: MapPin,
    eyebrow: "Digital platform",
    title: "Shenron online",
    description:
      "Shenron is designed as a digital market-intelligence and trading-education experience.",
    value: "Online",
  },
];

const quickLinks = [
  {
    title: "Frequently Asked Questions",
    description:
      "Find quick answers to common questions about Shenron and its market resources.",
    href: "/faq",
    icon: CircleHelp,
  },
  {
    title: "Explore Market Intelligence",
    description:
      "Browse forex, gold, crypto and global indices market sections.",
    href: "/markets",
    icon: BarChart3,
  },
  {
    title: "Start Learning",
    description:
      "Build your foundation with structured trading and technical-analysis education.",
    href: "/education",
    icon: Sparkles,
  },
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] =
    useState<InquiryType>("General inquiry");

  const [showInquiryMenu, setShowInquiryMenu] =
    useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});

  const updateField = (
    field: keyof typeof formData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const validateForm = () => {
    const nextErrors: Partial<
      Record<keyof typeof formData, string>
    > = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim(),
      )
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      nextErrors.message =
        "Please tell us how we can help.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message =
        "Please provide a little more detail.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    /*
     * Frontend-only success state.
     *
     * Connect this handler to your preferred API/email service
     * when the backend is added.
     */
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const selectedInquiry = inquiryOptions.find(
    (option) => option.value === inquiryType,
  );

  const SelectedIcon =
    selectedInquiry?.icon ?? MessageSquare;

  return (
    <main className="min-h-screen overflow-hidden bg-[#070A0F] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-[-180px] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.055] blur-[150px]" />

          <div className="absolute right-[-180px] top-[80px] h-[520px] w-[520px] rounded-full bg-violet-500/[0.055] blur-[150px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-36 sm:px-6 lg:px-8 lg:pb-18">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-1.5">
              <MessageSquare className="h-3.5 w-3.5 text-cyan-300" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                Contact & Support
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Let&apos;s make your
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
                market journey clearer.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Have a question about Shenron, market intelligence,
              technical analysis or trading education? Send us a
              message and we&apos;ll point you toward the right
              resource.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] text-slate-600">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300/70" />
                General platform support
              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-600">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300/70" />
                Market-content questions
              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-600">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300/70" />
                Education & partnerships
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CHANNELS
      ========================================================= */}

      <section className="border-b border-white/[0.06] bg-[#080C12]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-3 md:grid-cols-3">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;

              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-cyan-300">
                    <Icon className="h-4 w-4" />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                      {channel.eyebrow}
                    </p>

                    <h2 className="mt-1 text-sm font-semibold text-white">
                      {channel.title}
                    </h2>

                    <p className="mt-1 text-[10px] leading-5 text-slate-600">
                      {channel.description}
                    </p>

                    <span className="mt-2 block text-xs font-medium text-cyan-300">
                      {channel.value}
                    </span>
                  </div>
                </>
              );

              if (channel.href) {
                return (
                  <a
                    key={channel.title}
                    href={channel.href}
                    className="group flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4 transition-all hover:border-cyan-300/15 hover:bg-cyan-300/[0.025]"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={channel.title}
                  className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT AREA
      ========================================================= */}

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT INFORMATION */}

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                Send a message
              </span>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Tell us what you need.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                Choose the category that best describes your
                question. This helps keep your message focused and
                makes it easier to direct you to the appropriate
                resource.
              </p>

              {/* Inquiry information */}

              <div className="mt-8 space-y-3">
                {inquiryOptions.map((option) => {
                  const Icon = option.icon;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setInquiryType(option.value)
                      }
                      className={`
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        p-4
                        text-left
                        transition-all
                        ${
                          inquiryType === option.value
                            ? "border-cyan-300/15 bg-cyan-300/[0.045]"
                            : "border-white/[0.06] bg-[#0B1017] hover:border-white/[0.1] hover:bg-white/[0.02]"
                        }
                      `}
                    >
                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          ${
                            inquiryType === option.value
                              ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300"
                              : "border-white/[0.06] bg-white/[0.02] text-slate-600"
                          }
                        `}
                      >
                        <Icon className="h-4 w-4" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold text-white">
                          {option.label}
                        </span>

                        <span className="mt-1 block text-[10px] leading-5 text-slate-600">
                          {option.description}
                        </span>
                      </span>

                      {inquiryType === option.value && (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Important note */}

              <div className="mt-8 rounded-2xl border border-amber-300/10 bg-amber-300/[0.02] p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-300/70" />

                  <div>
                    <p className="text-xs font-semibold text-slate-300">
                      Keep sensitive information private
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-slate-600">
                      Never send passwords, API keys, wallet recovery
                      phrases, payment-card information, brokerage
                      credentials or other sensitive financial
                      information through this form.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}

            <div className="rounded-3xl border border-white/[0.07] bg-[#0C1119] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.2)] sm:p-7">
              {submitted ? (
                <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] text-emerald-300">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>

                  <span className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300/70">
                    Message ready
                  </span>

                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    Thanks for reaching out.
                  </h2>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
                    Your message has passed the frontend validation
                    successfully. Connect the submit handler to your
                    email or API service when you add the backend.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      px-4
                      py-2.5
                      text-xs
                      font-semibold
                      text-slate-300
                      transition-colors
                      hover:bg-white/[0.05]
                      hover:text-white
                    "
                  >
                    Send another message
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-5 border-b border-white/[0.06] pb-5">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                        Contact form
                      </p>

                      <h2 className="mt-2 text-lg font-semibold text-white">
                        How can we help?
                      </h2>
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.04] text-cyan-300">
                      <Send className="h-4 w-4" />
                    </span>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-5"
                  >
                    {/* Name + Email */}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                        >
                          Full name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={(event) =>
                            updateField(
                              "name",
                              event.target.value,
                            )
                          }
                          placeholder="Your name"
                          autoComplete="name"
                          className={`
                            h-11
                            w-full
                            rounded-xl
                            border
                            bg-white/[0.02]
                            px-3.5
                            text-xs
                            text-white
                            outline-none
                            transition-colors
                            placeholder:text-slate-700
                            ${
                              errors.name
                                ? "border-red-300/25"
                                : "border-white/[0.07] focus:border-cyan-300/20"
                            }
                          `}
                        />

                        {errors.name && (
                          <p className="mt-1.5 text-[10px] text-red-300/80">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                        >
                          Email address
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(event) =>
                            updateField(
                              "email",
                              event.target.value,
                            )
                          }
                          placeholder="you@example.com"
                          autoComplete="email"
                          className={`
                            h-11
                            w-full
                            rounded-xl
                            border
                            bg-white/[0.02]
                            px-3.5
                            text-xs
                            text-white
                            outline-none
                            transition-colors
                            placeholder:text-slate-700
                            ${
                              errors.email
                                ? "border-red-300/25"
                                : "border-white/[0.07] focus:border-cyan-300/20"
                            }
                          `}
                        />

                        {errors.email && (
                          <p className="mt-1.5 text-[10px] text-red-300/80">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Inquiry type */}

                    <div className="relative">
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Inquiry type
                      </label>

                      <button
                        type="button"
                        onClick={() =>
                          setShowInquiryMenu(
                            (current) => !current,
                          )
                        }
                        className="
                          flex
                          h-11
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          border
                          border-white/[0.07]
                          bg-white/[0.02]
                          px-3.5
                          text-left
                          transition-colors
                          hover:border-white/[0.1]
                        "
                        aria-expanded={showInquiryMenu}
                      >
                        <SelectedIcon className="h-4 w-4 text-cyan-300" />

                        <span className="flex-1 text-xs text-slate-300">
                          {inquiryType}
                        </span>

                        <ChevronDown
                          className={`
                            h-4
                            w-4
                            text-slate-700
                            transition-transform
                            ${
                              showInquiryMenu
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        />
                      </button>

                      {showInquiryMenu && (
                        <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-white/[0.08] bg-[#10161F] p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                          {inquiryOptions.map((option) => {
                            const Icon = option.icon;

                            return (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                  setInquiryType(
                                    option.value,
                                  );
                                  setShowInquiryMenu(false);
                                }}
                                className={`
                                  flex
                                  w-full
                                  items-center
                                  gap-3
                                  rounded-lg
                                  px-3
                                  py-2.5
                                  text-left
                                  transition-colors
                                  ${
                                    inquiryType ===
                                    option.value
                                      ? "bg-cyan-300/[0.06] text-cyan-200"
                                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                                  }
                                `}
                              >
                                <Icon className="h-4 w-4 shrink-0" />

                                <span>
                                  <span className="block text-xs font-medium">
                                    {option.label}
                                  </span>

                                  <span className="mt-0.5 block text-[9px] text-slate-700">
                                    {option.description}
                                  </span>
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Subject */}

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(event) =>
                          updateField(
                            "subject",
                            event.target.value,
                          )
                        }
                        placeholder="What would you like to discuss?"
                        className={`
                          h-11
                          w-full
                          rounded-xl
                          border
                          bg-white/[0.02]
                          px-3.5
                          text-xs
                          text-white
                          outline-none
                          transition-colors
                          placeholder:text-slate-700
                          ${
                            errors.subject
                              ? "border-red-300/25"
                              : "border-white/[0.07] focus:border-cyan-300/20"
                          }
                        `}
                      />

                      {errors.subject && (
                        <p className="mt-1.5 text-[10px] text-red-300/80">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={7}
                        value={formData.message}
                        onChange={(event) =>
                          updateField(
                            "message",
                            event.target.value,
                          )
                        }
                        placeholder="Tell us what you need help with..."
                        className={`
                          min-h-[170px]
                          w-full
                          resize-y
                          rounded-xl
                          border
                          bg-white/[0.02]
                          px-3.5
                          py-3
                          text-xs
                          leading-6
                          text-white
                          outline-none
                          transition-colors
                          placeholder:text-slate-700
                          ${
                            errors.message
                              ? "border-red-300/25"
                              : "border-white/[0.07] focus:border-cyan-300/20"
                          }
                        `}
                      />

                      {errors.message && (
                        <p className="mt-1.5 text-[10px] text-red-300/80">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}

                    <button
                      type="submit"
                      className="
                        group
                        relative
                        flex
                        h-12
                        w-full
                        items-center
                        justify-center
                        gap-2
                        overflow-hidden
                        rounded-xl
                        border
                        border-cyan-300/20
                        bg-cyan-300/[0.08]
                        text-xs
                        font-semibold
                        text-cyan-100
                        shadow-[0_0_30px_rgba(98,230,255,0.04)]
                        transition-all
                        duration-300
                        hover:border-cyan-300/35
                        hover:bg-cyan-300/[0.13]
                        hover:shadow-[0_0_35px_rgba(98,230,255,0.1)]
                      "
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                      <span className="relative">
                        Send message
                      </span>

                      <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>

                    <p className="text-center text-[9px] leading-5 text-slate-700">
                      By submitting this form, you are contacting
                      Shenron for general support or information.
                      This form is not intended for personalized
                      financial advice.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK HELP
      ========================================================= */}

      <section className="border-t border-white/[0.06] bg-[#080C12]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">
              Looking for something else?
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Find the right Shenron resource.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
              You may be able to find the answer faster through one
              of these dedicated sections.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="
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
                  "
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-cyan-300">
                    <Icon className="h-4 w-4" />
                  </span>

                  <h3 className="mt-5 text-sm font-semibold text-white">
                    {link.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {link.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-semibold text-cyan-300">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST / RISK NOTICE
      ========================================================= */}

      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600">
                  Important information
                </p>

                <p className="mt-2 max-w-5xl text-[10px] leading-5 text-slate-700">
                  Shenron&apos;s market information, analysis concepts
                  and educational resources are provided for general
                  informational and educational purposes. Support
                  representatives do not provide personalized
                  investment recommendations, trade signals or
                  guarantees of financial returns. Never share
                  passwords, private keys, recovery phrases or
                  brokerage credentials through the contact form.
                </p>

                <div className="mt-4 flex flex-wrap gap-4">
                  <Link
                    href="/risk-disclosure"
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 transition-colors hover:text-cyan-300"
                  >
                    Risk disclosure
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>

                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 transition-colors hover:text-cyan-300"
                  >
                    Privacy policy
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>

                  <Link
                    href="/terms"
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 transition-colors hover:text-cyan-300"
                  >
                    Terms
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close information notice"
                className="ml-auto hidden shrink-0 text-slate-800 transition-colors hover:text-slate-500 sm:block"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}