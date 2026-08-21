import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";

import {
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  TRAINING_DATA,
} from "../constants/experience";

const GREEN = "#01c16a";

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
    amount: 0.12,
  },

  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#111827] px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-64 top-20 h-[650px] w-[650px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(1,193,106,0.10) 0%, rgba(1,193,106,0.025) 45%, transparent 70%)",
          }}
        />

        <div
          className="absolute -left-64 bottom-0 h-[550px] w-[550px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(1,193,106,0.065) 0%, transparent 70%)",
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

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          {...reveal(0)}
          className="mb-12 flex flex-col items-center text-center"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#01c16a]/70" />

            <span
              className="text-[10px] font-bold uppercase tracking-[0.32em]"
              style={{ color: "#5ee6a2" }}
            >
              Career Journey
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#01c16a]/70" />
          </div>

          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-none tracking-[-0.055em]">
            Experience
            <span style={{ color: GREEN }}>.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35 sm:text-[15px]">
            A timeline of the experience I have gained.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div
            className="absolute bottom-8 left-[17px] top-8 w-px sm:left-[21px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(1,193,106,0.6), rgba(1,193,106,0.08), transparent)",
            }}
          />

          <div className="space-y-6">

            {EXPERIENCE_DATA.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${index}`}
                {...reveal(index * 0.1, 35)}
                className="relative pl-12 sm:pl-16"
              >

                {/* Timeline node */}
                <div className="absolute left-0 top-7 flex h-9 w-9 items-center justify-center sm:h-11 sm:w-11">
                  <div
                    className="absolute inset-0 rounded-full opacity-20 blur-md"
                    style={{
                      backgroundColor: GREEN,
                    }}
                  />

                  <div
                    className="relative flex h-9 w-9 items-center justify-center rounded-full border bg-[#111827] sm:h-11 sm:w-11"
                    style={{
                      borderColor: "rgba(1,193,106,0.35)",
                    }}
                  >
                    <div
                      className="h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"
                      style={{
                        backgroundColor: GREEN,
                        boxShadow: `0 0 12px ${GREEN}`,
                      }}
                    />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="group relative overflow-hidden rounded-[1.7rem] border border-white/[0.07] bg-white/[0.018] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#01c16a]/20 hover:bg-[#01c16a]/[0.018] sm:p-7 lg:p-8">

                  {/* Top accent */}
                  <div
                    className="absolute left-8 right-8 top-0 h-px opacity-20 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #01c16a, transparent)",
                    }}
                  />

                  {/* Glow */}
                  <div
                    className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background: "rgba(1,193,106,0.09)",
                    }}
                  />

                  <div className="relative">

                    {/* Header */}
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                      <div className="flex gap-4">

                        <div
                          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border"
                          style={{
                            borderColor: "rgba(1,193,106,0.14)",
                            background: "rgba(1,193,106,0.055)",
                          }}
                        >
                          <BriefcaseBusiness
                            size={19}
                            style={{ color: GREEN }}
                            strokeWidth={1.7}
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-bold tracking-[-0.025em] text-white/90 sm:text-xl">
                            {experience.role}
                          </h3>

                          <p
                            className="mt-1 text-sm font-medium"
                            style={{ color: "#5ee6a2" }}
                          >
                            {experience.company}
                          </p>
                        </div>

                      </div>

                      {/* Period */}
                      <div
                        className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-2"
                        style={{
                          borderColor: "rgba(255,255,255,0.06)",
                          background: "rgba(255,255,255,0.02)",
                        }}
                      >
                        <CalendarDays
                          size={13}
                          className="text-white/25"
                        />

                        <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/35">
                          {experience.period}
                        </span>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="mt-5 flex flex-wrap gap-4">

                      {experience.location && (
                        <div className="flex items-center gap-2 text-[12px] text-white/25">
                          <MapPin
                            size={13}
                            className="text-white/20"
                          />

                          {experience.location}
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-[12px] text-white/25">
                        <Sparkles
                          size={13}
                          style={{ color: "rgba(1,193,106,0.55)" }}
                        />

                        Professional Experience
                      </div>

                    </div>

                    <div className="my-6 h-px bg-white/[0.05]" />

                    {/* Highlights */}
                    {experience.highlights?.length > 0 && (
                      <div>
                        <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-white/20">
                          Key Contributions
                        </p>

                        <div className="grid gap-3 md:grid-cols-2">

                          {experience.highlights.map((item, itemIndex) => (
                            <motion.div
                              key={item}
                              initial={{
                                opacity: 0,
                                x: -10,
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 0.35,
                                delay: 0.15 + itemIndex * 0.05,
                              }}
                              className="group/item flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all duration-300 hover:border-white/[0.05] hover:bg-white/[0.02]"
                            >
                              <CheckCircle2
                                size={14}
                                className="mt-0.5 flex-shrink-0"
                                style={{
                                  color: "rgba(1,193,106,0.7)",
                                }}
                              />

                              <span className="text-xs leading-5 text-white/38 transition-colors duration-300 group-hover/item:text-white/65">
                                {item}
                              </span>
                            </motion.div>
                          ))}

                        </div>
                      </div>
                    )}

                    {/* Credentials */}
                    {experience.credentials?.length > 0 && (
                      <div className="mt-7 border-t border-white/[0.05] pt-5">

                        <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-white/20">
                          Credentials
                        </p>

                        <div className="flex flex-wrap gap-3">

                          {experience.credentials.map((credential) => (
                            <a
                              key={credential.url}
                              href={credential.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2 text-[12px] font-medium text-white/45 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#01c16a]/30 hover:bg-[#01c16a]/[0.05] hover:text-[#5ee6a2]"
                            >
                              {credential.label}
                              <ExternalLink size={12} />
                            </a>
                          ))}

                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="mt-7 flex items-center justify-between border-t border-white/[0.05] pt-5">

                      <span className="text-[9px] uppercase tracking-[0.2em] text-white/15">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(EXPERIENCE_DATA.length).padStart(2, "0")}
                      </span>

                      <ArrowUpRight
                        size={15}
                        style={{ color: GREEN }}
                        className="opacity-25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />

                    </div>

                  </div>
                </div>

              </motion.article>
            ))}

          </div>
        </div>

        {/* Journey footer */}
        <motion.div
          {...reveal(0.35)}
          className="mt-10 flex flex-col items-center justify-center text-center"
        >
          <div
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border"
            style={{
              borderColor: "rgba(1,193,106,0.14)",
              background: "rgba(1,193,106,0.05)",
            }}
          >
            <Sparkles
              size={18}
              style={{ color: GREEN }}
            />
          </div>

          {/* <p className="max-w-xl text-sm leading-7 text-white/30">
            Every role has been another opportunity to learn, build,
            solve difficult problems, and become a better engineer.
          </p> */}

          {/* <div className="mt-5 flex items-center gap-2">
            <span className="h-px w-8 bg-white/[0.08]" />

            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: GREEN,
                boxShadow: `0 0 10px ${GREEN}`,
              }}
            />

            <span className="h-px w-8 bg-white/[0.08]" />
          </div> */}
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111827] to-transparent" />
    </section>
  );
};

export default Experience;