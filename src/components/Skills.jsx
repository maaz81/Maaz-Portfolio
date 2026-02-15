import React from "react";
import { motion } from "framer-motion";
import { Code, Layers, Database, Briefcase } from "lucide-react";
import { SKILL_CATEGORIES } from "../constants/skills";

// Map icon string → actual component
const ICON_MAP = {
  code: Code,
  layers: Layers,
  database: Database,
  briefcase: Briefcase,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category, index) => {
              const IconComponent = ICON_MAP[category.icon];

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div
                    className={`inline-block p-2 sm:p-3 rounded-lg bg-gradient-to-r ${category.gradient} mb-4`}
                  >
                    {IconComponent && <IconComponent size={32} />}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-xs sm:text-sm text-gray-300 border border-slate-600 hover:border-purple-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
