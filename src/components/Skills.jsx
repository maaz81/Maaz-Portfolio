import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Code, Layers, Database, Briefcase } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code size={32} />,
      skills: ['React.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Framer Motion'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: <Layers size={32} />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Bcrypt'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Database',
      icon: <Database size={32} />,
      skills: ['MongoDB', 'MySQL'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Tools & Design',
      icon: <Briefcase size={32} />,
      skills: ['Git', 'Figma', 'Canva', 'Photoshop', 'WordPress'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.gradient} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-slate-600 hover:border-purple-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}