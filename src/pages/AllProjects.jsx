import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  ArrowUpRight,
  FolderKanban,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectModal from "./ProjectModal";
import SEO from "../components/SEO";

import { PROJECTS } from "../constants/projects";

const ease = [0.22, 1, 0.36, 1];

const reveal = (delay = 0, y = 25) => ({
  initial: {
    opacity: 0,
    y,
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
    ease,
  },
});

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

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <SEO
        title="All Projects"
        description="Browse all my projects and technical explorations."
      />

      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection="projects"
      />

      {/* =====================================================
          PAGE BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -left-40
          top-40
          z-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#01c16a]/[0.035]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -right-40
          bottom-20
          z-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#01c16a]/[0.025]
          blur-[120px]
        "
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          z-10
          px-5
          pb-14
          pt-28
          sm:px-8
          lg:px-12
          lg:pb-20
          lg:pt-36
        "
      >
        <div className="mx-auto max-w-6xl">
          {/* Back button */}

          <motion.div {...reveal(0, 15)}>
            <Link
              to="/"
              className="
                group
                mb-10
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/[0.06]
                bg-white/[0.02]
                px-3.5
                py-2
                text-xs
                font-medium
                text-slate-500
                transition-all
                duration-300
                hover:border-[#01c16a]/20
                hover:bg-[#01c16a]/[0.04]
                hover:text-[#01c16a]
              "
            >
              <ArrowLeft
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

              Back Home
            </Link>
          </motion.div>

          <motion.div {...reveal(0.08)}>
            {/* Section label */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#01c16a]/50" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#01c16a]
                "
              >
                Selected Work
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                max-w-4xl
                text-4xl
                font-black
                leading-[0.98]
                tracking-[-0.055em]
                sm:text-5xl
                lg:text-7xl
              "
            >
              All{" "}
              <span className="text-[#01c16a]">
                Projects.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-slate-400
                sm:text-base
                sm:leading-8
                lg:text-lg
              "
            >
              A collection of production-ready applications,
              and technical explorations built
              with modern web technologies.
            </p>

            {/* Stats */}

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">
                  {PROJECTS.length}
                </span>

                <span className="text-xs text-slate-500">
                  Projects
                </span>
              </div>

              <span className="h-4 w-px bg-white/[0.08]" />

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#01c16a] shadow-[0_0_12px_rgba(1,193,106,0.7)]" />

                <span className="text-xs text-slate-500">
                  Building & shipping
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FILTERS
      ===================================================== */}

      <section
        className="
          relative
          z-10
          px-5
          pb-10
          sm:px-8
          lg:px-12
        "
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...reveal(0.12, 15)}
            className="
              flex
              flex-wrap
              gap-2
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.015]
              p-2
              backdrop-blur-xl
            "
          >
            {categories.map((category) => {
              const isActive = activeFilter === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`
                    relative
                    overflow-hidden
                    rounded-xl
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    transition-all
                    duration-300
                    sm:px-5
                    ${isActive
                      ? "bg-[#01c16a] text-[#07110c] shadow-[0_8px_25px_rgba(1,193,106,0.15)]"
                      : "text-slate-500 hover:bg-white/[0.04] hover:text-white"
                    }
                  `}
                >
                  {category}

                  {isActive && (
                    <motion.span
                      layoutId="activeFilter"
                      className="absolute inset-0 -z-10"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        className="
          relative
          z-10
          px-5
          pb-24
          sm:px-8
          lg:px-12
          lg:pb-32
        "
      >
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="
                grid
                grid-cols-1
                gap-5
                md:grid-cols-2
                xl:grid-cols-3
              "
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  layout
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                    ease,
                  }}
                  onClick={() => setSelectedProject(project)}
                  whileHover={{
                    y: -7,
                  }}
                  className="
                    group
                    relative
                    flex
                    cursor-pointer
                    flex-col
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-white/[0.07]
                    bg-[#151e2d]/70
                    backdrop-blur-xl
                    transition-colors
                    duration-300
                    hover:border-[#01c16a]/25
                  "
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div className="relative aspect-video overflow-hidden">
                    {/* Image */}

                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.045]
                      "
                      onError={(e) => {
                        e.currentTarget.src =
                          `https://via.placeholder.com/600x400/111827/01c16a?text=${encodeURIComponent(
                            project.title
                          )}`;
                      }}
                    />

                    {/* Dark overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#111827]
                        via-[#111827]/10
                        to-transparent
                        opacity-80
                      "
                    />

                    {/* Green hover overlay */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[#01c16a]/[0.04]
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* Year */}

                    <div
                      className="
                        absolute
                        right-4
                        top-4
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-[#111827]/80
                        px-2.5
                        py-1.5
                        text-[10px]
                        font-semibold
                        text-slate-400
                        backdrop-blur-md
                      "
                    >
                      {project.year}
                    </div>

                    {/* Project number */}

                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#01c16a]
                        "
                      >
                        Project
                      </span>

                      <span className="h-px w-5 bg-[#01c16a]/40" />
                    </div>

                    {/* Open indicator */}

                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-[#111827]/80
                        text-slate-400
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {/* Category */}

                    <div className="mb-4">
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-[#01c16a]/15
                          bg-[#01c16a]/[0.045]
                          px-2.5
                          py-1.5
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#01c16a]
                        "
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#01c16a]" />

                        {project.category}
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        mb-3
                        text-xl
                        font-bold
                        tracking-[-0.025em]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#01c16a]
                        lg:text-2xl
                      "
                    >
                      {project.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mb-6
                        line-clamp-3
                        text-sm
                        leading-6
                        text-slate-500
                        transition-colors
                        duration-300
                        group-hover:text-slate-400
                      "
                    >
                      {project.description}
                    </p>

                    {/* Tech */}

                    <div className="mb-7 flex flex-wrap gap-1.5">
                      {project.tech
                        .slice(0, 4)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="
                              rounded-md
                              border
                              border-white/[0.06]
                              bg-white/[0.025]
                              px-2.5
                              py-1.5
                              text-[10px]
                              font-medium
                              text-slate-500
                              transition-all
                              duration-200
                              group-hover:border-white/[0.09]
                              group-hover:text-slate-400
                            "
                          >
                            {tech}
                          </span>
                        ))}

                      {project.tech.length > 4 && (
                        <span
                          className="
                            rounded-md
                            border
                            border-white/[0.06]
                            bg-white/[0.025]
                            px-2.5
                            py-1.5
                            text-[10px]
                            font-medium
                            text-slate-600
                          "
                        >
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Divider */}

                    <div className="mb-5 h-px bg-white/[0.06]" />

                    {/* Actions */}

                    <div className="mt-auto flex gap-2.5">
                      {/* Code */}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="
                          group/code
                          flex
                          flex-1
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          border
                          border-white/[0.07]
                          bg-white/[0.025]
                          py-3
                          text-xs
                          font-semibold
                          text-slate-400
                          transition-all
                          duration-300
                          hover:border-white/[0.14]
                          hover:bg-white/[0.05]
                          hover:text-white
                        "
                      >
                        <Github
                          size={15}
                          className="
                            transition-transform
                            duration-300
                            group-hover/code:scale-110
                          "
                        />

                        Code
                      </a>

                      {/* Demo */}

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="
                          group/demo
                          flex
                          flex-1
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          border
                          border-[#01c16a]/20
                          bg-[#01c16a]/[0.055]
                          py-3
                          text-xs
                          font-semibold
                          text-[#01c16a]
                          transition-all
                          duration-300
                          hover:border-[#01c16a]/40
                          hover:bg-[#01c16a]/[0.10]
                        "
                      >
                        <ExternalLink
                          size={15}
                          className="
                            transition-transform
                            duration-300
                            group-hover/demo:translate-x-0.5
                            group-hover/demo:-translate-y-0.5
                          "
                        />

                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Bottom accent */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-[#01c16a]
                      opacity-0
                      shadow-[0_0_15px_rgba(1,193,106,0.7)]
                      transition-all
                      duration-500
                      group-hover:w-1/2
                      group-hover:opacity-100
                    "
                  />
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* =====================================================
              EMPTY STATE
          ===================================================== */}

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-white/[0.06]
                bg-white/[0.015]
                px-6
                py-24
                text-center
              "
            >
              <FolderKanban
                size={32}
                strokeWidth={1.3}
                className="mb-5 text-slate-600"
              />

              <p className="text-lg font-semibold text-white">
                No projects found
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Try selecting another category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="
          relative
          z-10
          px-5
          pb-24
          sm:px-8
          lg:px-12
          lg:pb-32
        "
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            {...reveal(0.1)}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-[#01c16a]/15
              bg-[#151e2d]/70
              px-6
              py-12
              text-center
              backdrop-blur-xl
              sm:px-10
              lg:px-16
              lg:py-16
            "
          >
            {/* Background glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[350px]
                w-[350px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#01c16a]/[0.05]
                blur-[100px]
              "
            />

            {/* Top accent */}

            <div
              className="
                absolute
                left-1/2
                top-0
                h-px
                w-32
                -translate-x-1/2
                bg-[#01c16a]
                shadow-[0_0_15px_rgba(1,193,106,0.5)]
              "
            />

            <div className="relative">
              {/* Icon */}

              <div
                className="
                  mx-auto
                  mb-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#01c16a]/15
                  bg-[#01c16a]/[0.06]
                "
              >
                <Sparkles
                  size={20}
                  className="text-[#01c16a]"
                  strokeWidth={1.5}
                />
              </div>

              {/* Heading */}

              <h2
                className="
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Let's build something{" "}
                <span className="text-[#01c16a]">
                  meaningful.
                </span>
              </h2>

              {/* Description */}

              <p
                className="
                  mx-auto
                  mb-8
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-base
                "
              >
                Looking for a developer who values
                performance, scalability, clean architecture,
                and exceptional user experiences?
              </p>

              {/* CTA */}

              <Link
                to="/#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-xl
                  bg-[#01c16a]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-[#07110c]
                  shadow-[0_12px_35px_rgba(1,193,106,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#18d77d]
                  hover:shadow-[0_18px_45px_rgba(1,193,106,0.25)]
                  active:translate-y-0
                "
              >
                Get In Touch

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MODAL
      ===================================================== */}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </div>
  );
}