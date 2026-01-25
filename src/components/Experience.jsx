import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Frontend Intern',
      company: 'Manparth',
      location: 'Remote, India',
      period: 'Feb 2025 – Apr 2025',
      highlights: [
        'Worked in a MERN stack team to develop scalable applications',
        'Built 10+ reusable and responsive components using React.js and Tailwind CSS',
        'Integrated RESTful APIs and managed application state using Redux Toolkit',
        'Participated in Agile sprint planning and weekly code reviews',
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor's Degree",
      institution: 'Sant Gadge Baba Amravati University',
      period: '2023 – 2026 (Pursuing)',
    },
    {
      degree: 'Diploma',
      institution: 'Government Polytechnic, Achalpur',
      period: '2020 – 2023',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="text-purple-400" />
                Professional Experience
              </h3>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 mb-4"
                >
                  <h4 className="text-xl font-bold text-purple-400 mb-2">{exp.role}</h4>
                  <p className="text-gray-300 mb-1">{exp.company} • {exp.location}</p>
                  <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-purple-400" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 mb-4"
                >
                  <h4 className="text-xl font-bold text-purple-400 mb-2">{edu.degree}</h4>
                  <p className="text-gray-300 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}