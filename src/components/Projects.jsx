import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants/projects";

export default function Projects() {
  const featuredProjects = PROJECTS.filter(
    (project) => project.featured
  ).slice(0, 2);

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => {
              const isReverse = index % 2 === 1;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  {/* Project Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={isReverse ? "md:order-2" : "md:order-1"}
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

                      <img
                        src={project.image}
                        alt={project.title}
                        className="relative w-full max-h-[320px] md:max-h-none object-cover rounded-2xl border border-purple-500/20"
                      />
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <div className={isReverse ? "md:order-1" : "md:order-2"}>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-400">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-base sm:text-lg mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-500/20 rounded-full text-xs sm:text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg font-semibold hover:bg-purple-600 transition-all duration-300"
                      >
                        <Github size={20} />
                        View Code
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
