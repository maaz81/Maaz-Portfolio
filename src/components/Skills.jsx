import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Layers3,
  Server,
  Sparkles,
} from "lucide-react";

import { SKILL_CATEGORIES } from "../constants/skills";

const GREEN = "#01c16a";

const ICON_MAP = {
  code: Code2,
  layers: Layers3,
  database: Database,
  briefcase: BriefcaseBusiness,
};

const CATEGORY_CONFIG = {
  Frontend: {
    description: "Interfaces & experiences",
    icon: Code2,
  },

  Backend: {
    description: "APIs & business logic",
    icon: Server,
  },

  "Database & Tools": {
    description: "Data & developer tooling",
    icon: Database,
  },

  DevOps: {
    description: "Deployment & infrastructure",
    icon: BriefcaseBusiness,
  },
};

const reveal = (delay = 0, direction = 30) => ({
  initial: {
    opacity: 0,
    y: direction,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.15,
  },

  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

const Skills = () => {
  return (
    <section
      id="skills"
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
              "radial-gradient(circle, rgba(1,193,106,0.11) 0%, rgba(1,193,106,0.025) 45%, transparent 70%)",
          }}
        />

        {/* Right glow */}
        <div
          className="absolute -right-56 top-[35%] h-[550px] w-[550px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(1,193,106,0.075) 0%, transparent 70%)",
          }}
        />

        {/* Bottom glow */}
        <div
          className="absolute bottom-[-20%] left-[35%] h-[450px] w-[450px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(1,193,106,0.06) 0%, transparent 70%)",
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
            "linear-gradient(90deg, transparent, rgba(1,193,106,0.4), transparent)",
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
          {...reveal(0)}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#01c16a]/70" />

            <span
              className="text-[10px] font-bold uppercase tracking-[0.32em]"
              style={{ color: "#5ee6a2" }}
            >
              My Toolkit
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#01c16a]/70" />
          </div>

          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-none tracking-[-0.055em]">
            Skills &{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ffffff 0%, #01c16a 100%)",
              }}
            >
              Technologies
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/35 sm:text-[15px]">
            The technologies I use to build scalable applications,
            reliable backend systems, and polished user experiences.
          </p>
        </motion.div>

        {/* =====================================================
            STACK OVERVIEW
        ===================================================== */}

        <motion.div
          {...reveal(0.08)}
          className="mb-8 overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.018] backdrop-blur-xl"
        >
          <div className="flex flex-col justify-between gap-5 px-6 py-5 sm:flex-row sm:items-center sm:px-7">
            <div className="flex items-center gap-4">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl border"
                style={{
                  borderColor: "rgba(1,193,106,0.16)",
                  background: "rgba(1,193,106,0.07)",
                }}
              >
                <Sparkles
                  size={18}
                  style={{ color: GREEN }}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white/80">
                  Engineering Stack
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Full Stack • Backend • Database • DevOps
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: GREEN,
                  boxShadow: `0 0 10px ${GREEN}`,
                }}
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Always learning
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SKILL CARDS
        ===================================================== */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((category, index) => {
            const config =
              CATEGORY_CONFIG[category.title] || {
                description: "Technologies I work with",
                icon: Code2,
              };

            const Icon =
              ICON_MAP[category.icon] || config.icon || Code2;

            return (
              <motion.article
                key={category.title}
                {...reveal(index * 0.08 + 0.12)}
                whileHover={{
                  y: -7,
                }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/[0.07] bg-white/[0.018] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#01c16a]/25 hover:bg-[#01c16a]/[0.025]"
              >
                {/* Top accent */}
                <div
                  className="absolute left-6 right-6 top-0 h-px opacity-25 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${GREEN}, transparent)`,
                  }}
                />

                {/* Corner glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background: "rgba(1,193,106,0.12)",
                  }}
                />

                {/* Header */}
                <div className="relative mb-7 flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border"
                    style={{
                      background: "rgba(1,193,106,0.06)",
                      borderColor: "rgba(1,193,106,0.15)",
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      style={{ color: GREEN }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <span
                    className="text-[10px] font-bold tracking-[0.2em] opacity-30 transition-all duration-300 group-hover:opacity-80"
                    style={{ color: GREEN }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div className="relative">
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-white/90">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/25">
                    {config.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-white/[0.05]" />

                {/* Skills */}
                <div className="relative flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.3,
                        delay:
                          0.15 +
                          index * 0.08 +
                          skillIndex * 0.035,
                      }}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-medium text-white/45 transition-all duration-300 hover:border-[#01c16a]/20 hover:bg-[#01c16a]/[0.07] hover:text-[#8df0bb]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.05] pt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/20 transition-colors duration-300 group-hover:text-[#01c16a]/70">
                    Core Stack
                  </span>

                  <ArrowUpRight
                    size={13}
                    style={{ color: GREEN }}
                    className="opacity-30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            BACKEND FOCUS
        ===================================================== */}

        <motion.div
          {...reveal(0.35)}
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/[0.07] bg-gradient-to-r from-[#01c16a]/[0.055] via-transparent to-[#01c16a]/[0.025] p-6 backdrop-blur-xl sm:p-7"
        >
          {/* Decorative glow */}
          <div
            className="pointer-events-none absolute right-[-5%] top-[-100%] h-[300px] w-[300px] rounded-full blur-[100px]"
            style={{
              background: "rgba(1,193,106,0.08)",
            }}
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: GREEN,
                    boxShadow: `0 0 10px ${GREEN}`,
                  }}
                />

                <span
                  className="text-[9px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: "#5ee6a2" }}
                >
                  Primary Focus
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-[-0.025em] text-white/85 sm:text-2xl">
                Backend Engineering
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/35">
                Designing APIs, authentication systems, database
                workflows, caching strategies, and reliable backend
                architectures.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express",
                "PostgreSQL",
                "Redis",
                "JWT",
                "RBAC",
                "REST APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-3 py-1.5 text-[10px] font-medium"
                  style={{
                    borderColor: "rgba(1,193,106,0.14)",
                    background: "rgba(1,193,106,0.05)",
                    color: "rgba(141,240,187,0.65)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.p
          {...reveal(0.4)}
          className="mt-10 text-center text-[11px] uppercase tracking-[0.2em] text-white/20"
        >
          Always learning • Always building • Always improving
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111827] to-transparent" />
    </section>
  );
};

export default Skills;

