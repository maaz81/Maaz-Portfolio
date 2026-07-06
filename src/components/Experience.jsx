import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BookOpen, ExternalLink } from "lucide-react";
import {
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  TRAINING_DATA,
} from "../constants/experience";

const fadeIn = (axis = "y", dir = 28, delay = 0) => ({
  initial: { opacity: 0, [axis]: dir },
  whileInView: { opacity: 1, [axis]: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
});

// ── Reusable card ──────────────────────────────────────────────────────────
function Card({ children }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 mb-4 last:mb-0">
      {children}
    </div>
  );
}

// ── Sub-section heading ────────────────────────────────────────────────────
function SubHeading({ icon: Icon, label }) {
  return (
    <h3
      className="font-bold text-white flex items-center gap-2 mb-5 justify-center md:justify-start"
      style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)" }}
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30">
        <Icon size={16} className="text-purple-400" />
      </span>
      {label}
    </h3>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <motion.div className="text-center mb-12" {...fadeIn("y", 28, 0)}>
          <h2
            className="font-extrabold tracking-tight mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Experience &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* ── LEFT: Experience ── */}
          <motion.div {...fadeIn("x", -32, 0.1)}>
            <SubHeading icon={Briefcase} label="Professional Experience" />

            {EXPERIENCE_DATA.map((exp) => (
              <Card key={`${exp.role}-${exp.company}`}>
                {/* Role */}
                <h4
                  className="font-bold text-purple-400 mb-1 leading-snug"
                  style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" }}
                >
                  {exp.role}
                </h4>

                {/* Company & location */}
                <p className="text-sm text-gray-300 mb-0.5">
                  {exp.company}
                  {exp.location && (
                    <span className="text-gray-500"> · {exp.location}</span>
                  )}
                </p>

                {/* Period badge */}
                <span className="inline-block text-xs text-purple-300/70 bg-purple-500/10 border border-purple-500/20 rounded-full px-2.5 py-0.5 mb-4">
                  {exp.period}
                </span>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-gray-400"
                      style={{ fontSize: "clamp(0.8rem, 1.3vw, 0.875rem)" }}
                    >
                      <span className="text-purple-400 mt-0.5 flex-shrink-0 text-xs">▸</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Credentials */}
                {exp.credentials && exp.credentials.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-700/40 flex flex-wrap gap-2">
                    {exp.credentials.map((cred) => (
                      <a
                        key={cred.label}
                        href={cred.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-400/40 rounded-lg px-2.5 py-1 transition-all duration-200 cursor-pointer"
                      >
                        <ExternalLink size={12} className="text-purple-400" />
                        <span>{cred.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </motion.div>

          {/* ── RIGHT: Education + Training ── */}
          <div className="flex flex-col gap-10">

            {/* Education */}
            <motion.div {...fadeIn("x", 32, 0.15)}>
              <SubHeading icon={GraduationCap} label="Education" />

              {EDUCATION_DATA.map((edu) => (
                <Card key={`${edu.degree}-${edu.institution}`}>
                  <h4
                    className="font-bold text-purple-400 mb-1 leading-snug"
                    style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" }}
                  >
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-gray-300 mb-0.5">{edu.institution}</p>
                  <span className="inline-block text-xs text-purple-300/70 bg-purple-500/10 border border-purple-500/20 rounded-full px-2.5 py-0.5">
                    {edu.period}
                  </span>
                  {edu.description && (
                    <p
                      className="text-gray-400 mt-3 leading-relaxed"
                      style={{ fontSize: "clamp(0.8rem, 1.3vw, 0.875rem)" }}
                    >
                      {edu.description}
                    </p>
                  )}
                </Card>
              ))}
            </motion.div>

            {/* Training */}
            <motion.div {...fadeIn("x", 32, 0.22)}>
              <SubHeading icon={BookOpen} label="Training" />

              {TRAINING_DATA.map((item) => (
                <Card key={`${item.title}-${item.institution}`}>
                  <h4
                    className="font-bold text-purple-400 mb-1 leading-snug"
                    style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-300 mb-0.5">{item.institution}</p>
                  <span className="inline-block text-xs text-purple-300/70 bg-purple-500/10 border border-purple-500/20 rounded-full px-2.5 py-0.5 mb-3">
                    {item.period}
                  </span>
                  {item.description && (
                    <p
                      className="text-gray-400 leading-relaxed"
                      style={{ fontSize: "clamp(0.8rem, 1.3vw, 0.875rem)" }}
                    >
                      {item.description}
                    </p>
                  )}

                  {/* Credentials */}
                  {item.credentials && item.credentials.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-700/40 flex flex-wrap gap-2">
                      {item.credentials.map((cred) => (
                        <a
                          key={cred.label}
                          href={cred.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-400/40 rounded-lg px-2.5 py-1 transition-all duration-200 cursor-pointer"
                        >
                          <ExternalLink size={12} className="text-purple-400" />
                          <span>{cred.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}