import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ArrowDown,
  Code2,
  Server,
  Database,
  Sparkles,
} from "lucide-react";
import { HERO_DATA } from "../constants";
import { ABOUT_DATA } from "../constants/about"


const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0, y = 24) => ({
  initial: {
    opacity: 0,
    y,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.7,
    delay,
    ease,
  },
});

const GREEN = "#01c16a";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#111827] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Green ambient glow — top left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(1,193,106,0.16) 0%, rgba(1,193,106,0.05) 35%, transparent 70%)",
        }}
      />

      {/* Green ambient glow — bottom right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -right-48 h-[650px] w-[650px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(1,193,106,0.12) 0%, transparent 68%)",
        }}
      />

      {/* Center glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(1,193,106,0.045) 0%, transparent 70%)",
        }}
      />

      {/* Engineering grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top gradient line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(1,193,106,0.5), transparent)",
        }}
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-20 pt-28 sm:px-8 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Availability badge */}
            <motion.div {...fadeUp(0.1)} className="mb-7">
              <div
                className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 backdrop-blur-md"
                style={{
                  borderColor: "rgba(1,193,106,0.25)",
                  background: "rgba(1,193,106,0.07)",
                  boxShadow: "0 0 30px rgba(1,193,106,0.05)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ backgroundColor: GREEN }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: GREEN,
                      boxShadow: `0 0 12px ${GREEN}`,
                    }}
                  />
                </span>

                <span
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: "#5ee6a2" }}
                >
                  {HERO_DATA.greeting}
                </span>
              </div>
            </motion.div>

            {/* Intro */}
            {/* <motion.p
              {...fadeUp(0.17)}
              className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-slate-500"
            >
              Hello, I'm
            </motion.p> */}

            {/* Name */}
            <motion.h1
              {...fadeUp(0.24)}
              className="mb-5 max-w-4xl font-black leading-[0.9] tracking-[-0.06em]"
              style={{
                fontSize: "clamp(3.4rem, 7vw, 6.4rem)",
              }}
            >
              {HERO_DATA.name}
            </motion.h1>

            {/* Green accent underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 62, opacity: 1 }}
              transition={{
                delay: 0.65,
                duration: 0.6,
                ease,
              }}
              className="mb-6 h-[3px] rounded-full"
              style={{
                backgroundColor: GREEN,
                boxShadow: `0 0 18px rgba(1,193,106,0.55)`,
              }}
            />

            {/* Role */}
            <motion.div
              {...fadeUp(0.32)}
              className="mb-6 flex items-center gap-3"
            >
              <Sparkles
                size={17}
                strokeWidth={1.8}
                style={{ color: GREEN }}
              />

              <h2 className="text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">
                {HERO_DATA.role}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.4)}
              className="mb-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
            >
              {HERO_DATA.description}
            </motion.p>

            {/* =====================================================
                TECH STACK
            ===================================================== */}

            <motion.div
              {...fadeUp(0.47)}
              className="mb-9 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {[
                {
                  icon: <Server size={14} />,
                  label: "Node.js",
                },
                {
                  icon: <Database size={14} />,
                  label: "PostgreSQL",
                },
                {
                  icon: <Code2 size={14} />,
                  label: "React",
                },
                {
                  icon: <Server size={14} />,
                  label: "Redis",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3 }}
                  className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-xs font-medium text-slate-400 backdrop-blur-sm transition-all duration-300"
                  style={{
                    boxShadow: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(1,193,106,0.25)";
                    e.currentTarget.style.background =
                      "rgba(1,193,106,0.06)";
                    e.currentTarget.style.color = "#d1fae5";
                    e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(1,193,106,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)";
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.025)";
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span style={{ color: GREEN }}>{item.icon}</span>
                  {item.label}
                </motion.div>
              ))}
            </motion.div>

            {/* =====================================================
                CTA
            ===================================================== */}

            <motion.div
              {...fadeUp(0.54)}
              className="mb-9 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-bold text-[#06150e] transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                style={{
                  backgroundColor: GREEN,
                  boxShadow: "0 12px 35px rgba(1,193,106,0.18)",
                }}
              >
                <span className="relative z-10">View My Work</span>

                <ArrowUpRight
                  size={17}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

                {/* Shine */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-full"
                />
              </a>

              {/* Secondary CTA */}
              <a
                href={ABOUT_DATA.resumeLink}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#01c16a]/30 hover:bg-[#01c16a]/[0.05] hover:text-white active:translate-y-0"
              >

                Download Resume

                <ArrowUpRight
                  size={16}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </a>
            </motion.div>

            {/* =====================================================
                SOCIALS
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.75,
                duration: 0.5,
              }}
              className="flex items-center gap-2"
            >
              {[
                {
                  href: HERO_DATA.socialLinks.github,
                  icon: <Github size={17} />,
                  label: "GitHub",
                },
                {
                  href: HERO_DATA.socialLinks.linkedin,
                  icon: <Linkedin size={17} />,
                  label: "LinkedIn",
                },
                {
                  href: `mailto:${HERO_DATA.socialLinks.email}`,
                  icon: <Mail size={17} />,
                  label: "Email",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5 text-xs font-medium text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#01c16a]/25 hover:bg-[#01c16a]/[0.05] hover:text-slate-200"
                >
                  <span
                    className="transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: "currentColor",
                    }}
                  >
                    {icon}
                  </span>

                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE — PROFILE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
            className="order-first flex justify-center lg:order-last"
          >
            <div className="relative">
              {/* Atmospheric green glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-16 rounded-full blur-[70px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(1,193,106,0.18) 0%, rgba(1,193,106,0.05) 40%, transparent 70%)",
                }}
              />

              {/* Rotating accent ring */}
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-[6px] rounded-full"
                style={{
                  background: `conic-gradient(
                    from 0deg,
                    transparent 0deg,
                    rgba(1,193,106,0.8) 65deg,
                    transparent 130deg,
                    transparent 190deg,
                    rgba(1,193,106,0.35) 245deg,
                    transparent 310deg
                  )`,
                }}
              />

              {/* Outer frame */}
              <div
                className="relative rounded-full p-[2px]"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(1,193,106,0.7), rgba(255,255,255,0.08) 40%, rgba(1,193,106,0.2))",
                }}
              >
                {/* Main profile frame */}
                <div className="rounded-full bg-[#111827] p-2">
                  <div
                    className="relative overflow-hidden rounded-full border border-white/[0.08]"
                    style={{
                      width: "clamp(240px, 31vw, 370px)",
                      height: "clamp(240px, 31vw, 370px)",
                    }}
                  >
                    <img
                      src="/Maaz_profile.jpg"
                      alt="Maaz Ahmad Khan"
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/400x400/111827/01c16a?text=MAK";
                      }}
                    />

                    {/* Cinematic overlay */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(1,193,106,0.06), transparent 40%, rgba(17,24,39,0.28))",
                      }}
                    />

                    {/* Bottom gradient */}
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(17,24,39,0.28), transparent)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* =====================================================
                  OPEN TO WORK
              ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.9,
                  type: "spring",
                  stiffness: 180,
                  damping: 15,
                }}
                className="absolute -bottom-3 -right-3 flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-[#151e2d]/95 px-4 py-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:-right-6"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50"
                    style={{ backgroundColor: GREEN }}
                  />

                  <span
                    className="relative inline-flex h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: GREEN,
                      boxShadow: `0 0 12px ${GREEN}`,
                    }}
                  />
                </span>

                <span className="whitespace-nowrap text-xs font-medium text-slate-300">
                  Open to Work
                </span>
              </motion.div>

              {/* =====================================================
                  ENGINEERING LABEL
              ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 1,
                  duration: 0.6,
                }}
                className="absolute -left-8 top-8 hidden items-center gap-2 rounded-lg border border-white/[0.07] bg-[#151e2d]/90 px-3 py-2 shadow-[0_15px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:flex"
              >
                <Code2
                  size={14}
                  style={{ color: GREEN }}
                />

                <span className="text-[11px] font-medium text-slate-400">
                  Build. Scale. Ship.
                </span>
              </motion.div>

              {/* Floating green dot */}
              <motion.div
                aria-hidden="true"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 top-16 h-2 w-2 rounded-full sm:-right-7"
                style={{
                  backgroundColor: GREEN,
                  boxShadow: `0 0 18px rgba(1,193,106,0.9)`,
                }}
              />

              {/* Small orbit dot */}
              <motion.div
                aria-hidden="true"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-25px] rounded-full border border-dashed border-[#01c16a]/10"
              />
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            SCROLL INDICATOR
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 md:flex"
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.3em]">
            Scroll
          </span>

          <ArrowDown
            size={14}
            strokeWidth={1.5}
            style={{ color: GREEN }}
            className="animate-bounce"
          />
        </motion.div>
      </div>
    </section>
  );
}

