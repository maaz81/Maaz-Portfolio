import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { FOOTER_DATA } from "../constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      href: FOOTER_DATA.socialLinks.github,
      label: "GitHub",
      icon: Github,
    },
    {
      href: FOOTER_DATA.socialLinks.linkedin,
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: `mailto:${FOOTER_DATA.socialLinks.email}`,
      label: "Email",
      icon: Mail,
    },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.07]
        bg-[#111827]
        text-white
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-1/2
          h-[420px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          blur-[120px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(1,193,106,0.10) 0%, transparent 68%)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-10
          h-[280px]
          w-[280px]
          rounded-full
          blur-[100px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(1,193,106,0.055) 0%, transparent 70%)",
        }}
      />

      {/* Engineering grid */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        {/* ===================================================
            TOP FOOTER
        =================================================== */}

        <div
          className="
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="max-w-xl">
            {/* Logo */}

            <div className="mb-5 flex items-center gap-3">
              <div
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
                  border-[#01c16a]/20
                  bg-[#01c16a]/[0.07]
                "
              >
                {/* Glow */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-[#01c16a]/10
                    blur-md
                  "
                />

                <span
                  className="
                    relative
                    text-xs
                    font-black
                    tracking-tight
                    text-[#01c16a]
                  "
                >
                  M
                </span>
              </div>

              <div>
                <h3
                  className="
                    text-xl
                    font-extrabold
                    tracking-[-0.045em]
                    text-white
                  "
                >
                  {FOOTER_DATA.name}
                </h3>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#01c16a] shadow-[0_0_10px_rgba(1,193,106,0.7)]" />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-slate-500
                    "
                  >
                    Software Engineer
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}

            <p
              className="
                max-w-lg
                text-md
                leading-7
                text-slate-400
              "
            >
              Building high-performance backend architectures
              and scalable full-stack web applications with a
              focus on clean engineering and meaningful user
              experiences.
            </p>

            {/* Small status */}

            <div className="mt-6 inline-flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#01c16a]
                    opacity-40
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-[#01c16a]
                    shadow-[0_0_10px_rgba(1,193,106,0.7)]
                  "
                />
              </span>

              <span className="text-xs font-medium text-slate-400">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex flex-col items-start gap-5 lg:items-end">
            {/* Social label */}

            <div className="flex items-center gap-3">
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-slate-600
                "
              >
                Connect
              </span>

              <span className="h-px w-8 bg-white/[0.08]" />
            </div>

            {/* Social links */}

            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={
                    label !== "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={label}
                  className="
                    group
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    text-slate-500
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#01c16a]/25
                    hover:bg-[#01c16a]/[0.07]
                    hover:text-[#01c16a]
                  "
                >
                  <Icon
                    size={17}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </a>
              ))}

              {/* Back to top */}

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="
                  group
                  ml-1
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#01c16a]/20
                  bg-[#01c16a]/[0.07]
                  text-[#01c16a]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#01c16a]/40
                  hover:bg-[#01c16a]/[0.12]
                "
              >
                <ArrowUp
                  size={17}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div
          className="
            my-10
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
            to-transparent
          "
        />

        {/* ===================================================
            BOTTOM FOOTER
        =================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}

          <p className="text-xs text-slate-600">
            © {FOOTER_DATA.year}{" "}
            <span className="text-slate-500">
              {FOOTER_DATA.name}
            </span>
            . All rights reserved.
          </p>

          {/* Built with */}

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Sparkles
              size={12}
              className="text-[#01c16a]/60"
            />

            <span>Built with</span>

            <span className="font-medium text-slate-500">
              React
            </span>

            <span className="text-slate-700">•</span>

            <span className="font-medium text-slate-500">
              Tailwind
            </span>

            <span className="text-slate-700">•</span>

            <span className="font-medium text-slate-500">
              Framer Motion
            </span>
          </div>

          {/* Engineering label */}

          <div
            className="
              hidden
              items-center
              gap-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-slate-600
              lg:flex
            "
          >
            <span className="h-1 w-1 rounded-full bg-[#01c16a]" />

            Build. Scale. Ship.
          </div>
        </div>

        {/* ===================================================
            BOTTOM ACCENT
        =================================================== */}

        <div
          aria-hidden="true"
          className="
            mx-auto
            mt-10
            h-px
            w-24
            bg-gradient-to-r
            from-transparent
            via-[#01c16a]/40
            to-transparent
          "
        />
      </div>
    </footer>
  );
}