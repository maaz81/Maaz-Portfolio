import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";

import { ABOUT_DATA } from "../constants";

const GREEN = "#01c16a";

const reveal = (direction = "up", delay = 0) => {
  const axis =
    direction === "left"
      ? { x: -35 }
      : direction === "right"
        ? { x: 35 }
        : { y: 30 };

  return {
    initial: {
      opacity: 0,
      ...axis,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  };
};

const DETAIL_ICONS = {
  location: MapPin,
  availability: Mail,
  education: GraduationCap,
  experience: BriefcaseBusiness,
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#111827] px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main green glow */}
        <div
          className="absolute -left-56 top-20 h-[600px] w-[600px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(1,193,106,0.12) 0%, rgba(1,193,106,0.035) 42%, transparent 70%)",
          }}
        />

        {/* Bottom green glow */}
        <div
          className="absolute -bottom-64 -right-48 h-[600px] w-[600px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(1,193,106,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

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
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 78%)",
        }}
      />

      {/* Top accent */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(1,193,106,0.45), transparent)",
        }}
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          {...reveal("up", 0)}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#01c16a]/70" />

            <span
              className="text-[10px] font-bold uppercase tracking-[0.32em]"
              style={{ color: "#5ee6a2" }}
            >
              Get to know me
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#01c16a]/70" />
          </div>

          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-none tracking-[-0.055em]">
            About{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ffffff 0%, #01c16a 100%)",
              }}
            >
              Me
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/40 sm:text-[15px]">
            A little about my background, engineering mindset, and the
            systems I enjoy building.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          {/* ===================================================
              LEFT — ENGINEERING CARD
          =================================================== */}

          <motion.div {...reveal("left", 0.1)}>
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl backdrop-blur-xl sm:p-7">
              {/* Top accent */}
              <div
                className="absolute left-0 right-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(1,193,106,0.7), transparent)",
                }}
              />

              {/* Corner glow */}
              <div
                className="absolute -right-24 -top-24 h-52 w-52 rounded-full blur-3xl transition-all duration-700 group-hover:opacity-100"
                style={{
                  background: "rgba(1,193,106,0.07)",
                }}
              />

              {/* Header */}
              <div className="relative mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border"
                    style={{
                      borderColor: "rgba(1,193,106,0.18)",
                      background: "rgba(1,193,106,0.07)",
                    }}
                  >
                    <Layers3
                      size={19}
                      style={{ color: GREEN }}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white/85">
                      What I Build
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/25">
                      Engineering Focus
                    </p>
                  </div>
                </div>

                <Sparkles
                  size={17}
                  className="text-[#01c16a]/60"
                />
              </div>

              {/* Build list */}
              <div className="relative space-y-2">
                {ABOUT_DATA.whatIBuild.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.15 + index * 0.07,
                    }}
                    className="group/item flex items-start gap-3 rounded-xl px-2 py-3 transition-all duration-300 hover:bg-white/[0.025]"
                  >
                    <div
                      className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border"
                      style={{
                        borderColor: "rgba(1,193,106,0.18)",
                        background: "rgba(1,193,106,0.06)",
                      }}
                    >
                      <Check
                        size={11}
                        style={{ color: GREEN }}
                      />
                    </div>

                    <span className="text-sm leading-6 text-white/45 transition-colors duration-300 group-hover/item:text-white/75">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom line */}
              <div className="mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: GREEN,
                    boxShadow: `0 0 10px ${GREEN}`,
                  }}
                />

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Backend • APIs • Databases • Performance
                </span>
              </div>
            </div>

            {/* =================================================
                STATS
            ================================================= */}

            <div className="mt-4 grid grid-cols-2 gap-3">
              {ABOUT_DATA.stats.map((stat, index) => {
                const icons = [
                  BriefcaseBusiness,
                  Rocket,
                  GraduationCap,
                  Sparkles,
                ];

                const Icon = icons[index % icons.length];

                const isLast =
                  index === ABOUT_DATA.stats.length - 1;

                return (
                  <motion.div
                    key={stat.label}
                    {...reveal("up", 0.18 + index * 0.08)}
                    whileHover={{
                      y: -5,
                    }}
                    className={[
                      "group relative overflow-hidden rounded-2xl border",
                      "bg-gradient-to-br from-[#01c16a]/[0.08] via-[#01c16a]/[0.02] to-transparent",
                      "p-5 backdrop-blur-xl",
                      isLast &&
                        ABOUT_DATA.stats.length % 2 !== 0
                        ? "col-span-2"
                        : "",
                    ].join(" ")}
                    style={{
                      borderColor: "rgba(1,193,106,0.12)",
                    }}
                  >
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#01c16a]/[0.04] blur-2xl transition-all duration-500 group-hover:bg-[#01c16a]/[0.08]" />

                    <div className="relative">
                      <Icon
                        size={17}
                        style={{ color: GREEN }}
                        className="opacity-80"
                      />

                      <p
                        className="mt-5 text-2xl font-bold tracking-[-0.04em]"
                        style={{ color: "#5ee6a2" }}
                      >
                        {stat.value}
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-white/30">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT — STORY
          =================================================== */}

          <motion.div {...reveal("right", 0.15)}>
            {/* Role */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-2"
              style={{
                borderColor: "rgba(1,193,106,0.18)",
                background: "rgba(1,193,106,0.06)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: GREEN,
                  boxShadow: `0 0 10px ${GREEN}`,
                }}
              />

              <span
                className="text-[10px] font-semibold tracking-wide"
                style={{ color: "#8df0bb" }}
              >
                {ABOUT_DATA.role}
              </span>
            </div>

            {/* Main tagline */}
            <h3 className="max-w-3xl text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.04em]">
              {ABOUT_DATA.tagline}
              <span style={{ color: GREEN }}>.</span>
            </h3>

            {/* Accent */}
            <div className="my-7 flex items-center gap-2">
              <div
                className="h-[2px] w-12 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #01c16a, rgba(1,193,106,0.15))",
                }}
              />

              <div
                className="h-[2px] w-2 rounded-full"
                style={{ backgroundColor: GREEN }}
              />
            </div>

            {/* Description */}
            <div className="max-w-3xl space-y-5">
              {ABOUT_DATA.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  {...reveal("up", 0.22 + index * 0.08)}
                  className="text-sm leading-7 text-white/42 sm:text-[15px] sm:leading-8"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Details */}
            <div className="my-9 grid grid-cols-1 gap-x-8 gap-y-3 border-y border-white/[0.06] py-6 sm:grid-cols-2">
              {ABOUT_DATA.details.map((detail, index) => {
                const Icon =
                  DETAIL_ICONS[detail.icon] || MapPin;

                return (
                  <motion.div
                    key={detail.label}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25 + index * 0.06,
                    }}
                    className="group flex items-center gap-3 rounded-xl py-2"
                  >
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border transition-all duration-300"
                      style={{
                        borderColor: "rgba(255,255,255,0.07)",
                        background: "rgba(255,255,255,0.025)",
                      }}
                    >
                      <Icon
                        size={15}
                        className="text-white/30 transition-colors duration-300 group-hover:text-[#01c16a]"
                      />
                    </div>

                    <span className="text-xs font-medium text-white/40 transition-colors duration-300 group-hover:text-white/70">
                      {detail.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Resume */}
            <motion.a
              href={ABOUT_DATA.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group inline-flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-semibold text-[#06150e]"
              style={{
                backgroundColor: GREEN,
                boxShadow: "0 15px 40px rgba(1,193,106,0.15)",
              }}
            >
              <Download
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              Download Resume

              <ArrowUpRight
                size={15}
                className="opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111827] to-transparent" />
    </section>
  );
};

export default About;

