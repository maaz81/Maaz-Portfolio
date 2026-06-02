import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectModal from "./ProjectModal";
import SEO from "../components/SEO";

import { PROJECTS } from "../constants/projects";

export default function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter(
        (project) => project.category === activeFilter
      );

  useEffect(() => {
    document.body.style.overflow = selectedProject
      ? "hidden"
      : "auto";
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <SEO
        title="All Projects"
        description="Browse all my projects and technical explorations."
      />

      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection="projects"
      />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-12 lg:pb-16 px-5 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              All{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-gray-400 text-base sm:text-lg leading-relaxed">
              A collection of production-ready applications,
              experiments, and technical explorations built
              using modern web technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-10 px-5 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20"
                    : "bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="
                  group
                  cursor-pointer
                  overflow-hidden
                  rounded-3xl
                  bg-slate-800/40
                  backdrop-blur-xl
                  border
                  border-purple-500/10
                  hover:border-purple-500/40
                  transition-all
                  duration-500
                  h-full
                  flex
                  flex-col
                "
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/1e293b/a78bfa?text=${project.title}`;
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-xs">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 border border-purple-500/20 text-purple-300">
                      {project.category}
                    </span>
                  </div>

                  <h3
                    className="
                    text-xl
                    lg:text-2xl
                    font-bold
                    mb-3
                    text-purple-400
                    group-hover:text-pink-400
                    transition-colors
                  "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                    text-gray-400
                    text-sm
                    lg:text-base
                    leading-relaxed
                    line-clamp-3
                    mb-5
                  "
                  >
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech
                      .slice(0, 4)
                      .map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-slate-700/40 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}

                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 rounded-full bg-slate-700/40 text-xs text-gray-300">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        py-3
                        rounded-xl
                        bg-slate-700/50
                        hover:bg-slate-700
                        transition-all
                      "
                    >
                      <Github size={18} />
                      Code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        py-3
                        rounded-xl
                        border
                        border-purple-500
                        hover:bg-purple-500/10
                        transition-all
                      "
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">
                No projects found.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              text-center
              rounded-3xl
              p-10
              lg:p-16
              border
              border-purple-500/20
              bg-gradient-to-r
              from-purple-500/10
              to-pink-500/10
              backdrop-blur-xl
            "
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let's Build Something Amazing
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-base lg:text-lg">
              Looking for a developer who values
              performance, scalability, and exceptional
              user experiences?
            </p>

            <Link
              to="/#contact"
              className="
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-xl
                bg-gradient-to-r
                from-purple-500
                to-pink-500
                font-medium
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Footer />
    </div>
  );
}