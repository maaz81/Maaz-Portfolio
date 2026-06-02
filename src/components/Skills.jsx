import React from "react";
import { motion } from "framer-motion";
import { Code, Layers, Database, Briefcase } from "lucide-react";
import { SKILL_CATEGORIES } from "../constants/skills";

const ICON_MAP = {
  code: Code,
  layers: Layers,
  database: Database,
  briefcase: Briefcase,
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
});

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <motion.div className="text-center mb-12" {...fadeUp(0)}>
          <h2
            className="font-extrabold tracking-tight mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = ICON_MAP[category.icon];

            return (
              <motion.div
                key={category.title}
                {...fadeUp(index * 0.08)}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                className="group bg-slate-800/50 backdrop-blur-sm p-5 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-colors duration-300 flex flex-col gap-4"
              >
                {/* Icon badge */}
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} shadow-md`}
                >
                  {Icon && <Icon size={20} className="text-white" strokeWidth={2} />}
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-white leading-tight"
                  style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}
                >
                  {category.title}
                </h3>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-slate-700/60 rounded-full text-xs text-gray-300 border border-slate-600/60 group-hover:border-purple-500/40 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}