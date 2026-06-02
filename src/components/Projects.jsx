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
    <section
      id="projects"
      className="relative min-h-screen py-20 lg:py-28 px-5 sm:px-8 lg:px-12 bg-slate-900/50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            A collection of projects showcasing frontend engineering,
            full-stack development and modern web experiences.
          </p>

          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6" />
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => {
            const isReverse = index % 2 === 1;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Image */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={isReverse ? "lg:order-2" : ""}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-20 group-hover:opacity-40 transition duration-500" />

                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full aspect-video object-cover rounded-3xl border border-purple-500/20 shadow-xl"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className={isReverse ? "lg:order-1" : ""}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-purple-400 mb-5">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs sm:text-sm bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all duration-300"
                    >
                      <Github size={18} />
                      View Code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-24"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-medium text-base hover:scale-105 transition duration-300"
          >
            View All Projects

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
