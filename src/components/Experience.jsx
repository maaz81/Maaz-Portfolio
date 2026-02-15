import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import {
  EXPERIENCE_DATA,
  EDUCATION_DATA,
} from "../constants/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Experience &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EXPERIENCE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2 justify-center md:justify-start">
                <Briefcase className="text-purple-400" />
                Professional Experience
              </h3>

              {EXPERIENCE_DATA.map((exp) => (
                <div
                  key={`${exp.role}-${exp.company}`}
                  className="bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-purple-500/20 mb-4"
                >
                  <h4 className="text-xl font-bold text-purple-400 mb-2">
                    {exp.role}
                  </h4>

                  <p className="text-gray-300 mb-1">
                    {exp.company} • {exp.location}
                  </p>

                  <p className="text-sm text-gray-500 mb-4">
                    {exp.period}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-gray-400 text-sm sm:text-base flex items-start gap-2"
                      >
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* EDUCATION */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2 justify-center md:justify-start">
                <GraduationCap className="text-purple-400" />
                Education
              </h3>

              {EDUCATION_DATA.map((edu) => (
                <div
                  key={`${edu.degree}-${edu.institution}`}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 mb-4"
                >
                  <h4 className="text-xl font-bold text-purple-400 mb-2">
                    {edu.degree}
                  </h4>

                  <p className="text-gray-300 mb-1">
                    {edu.institution}
                  </p>

                  <p className="text-sm text-gray-500">
                    {edu.period}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
