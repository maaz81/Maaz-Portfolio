import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants/projects";

const GREEN = "#01c16a";

const reveal = (delay = 0, y = 35) => ({
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
    amount: 0.15,
  },

  transition: {
    duration: 0.75,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

export default function Projects() {
  const featuredProjects = PROJECTS.filter(
    (project) => project.featured
  ).slice(0, 2);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#111827]
        px-5
        py-24
        text-white
        sm:px-8
        lg:px-12
        lg:py-32
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-64
          top-0
          h-[650px]
          w-[650px]
          rounded-full
          blur-[150px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(1,193,106,0.09) 0%, rgba(1,193,106,0.025) 42%, transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="
    pointer-events-none
    absolute
    -right-64
    bottom-0
    h-[600px]
    w-[600px]
    rounded-full
    blur-[150px]
  "
        style={{
          background:
            "radial-gradient(circle, rgba(1,193,106,0.065) 0%, transparent 70%)",
        }}
      />
      {/* =====================================================
          ENGINEERING GRID
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 78%)",
        }}
      />

      {/* Top accent line */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-px
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(1,193,106,0.45), transparent)",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          {...reveal(0)}
          className="
            mb-20
            flex
            flex-col
            items-center
            text-center
            lg:mb-24
          "
        >
          {/* Section label */}

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#01c16a]/70" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
              "
              style={{
                color: "#5ee6a2",
              }}
            >
              Selected Work
            </span>

            <span className="h-px w-9 bg-gradient-to-l from-transparent to-[#01c16a]/70" />
          </div>

          {/* Heading */}

          <h2
            className="
              text-[clamp(2.5rem,5vw,4rem)]
              font-bold
              leading-none
              tracking-[-0.055em]
              text-white
            "
          >
            Featured Projects
            <span style={{ color: GREEN }}>.</span>
          </h2>

          {/* Description */}
          {/* 
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/35
              sm:text-base
            "
          >
            A selection of projects where ideas become thoughtful,
            scalable, and production-ready digital experiences.
          </p> */}

          {/* Decorative accent */}

          <div className="mt-7 flex items-center gap-2">
            <span className="h-px w-8 bg-white/[0.08]" />

            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: GREEN,
                boxShadow: `0 0 12px ${GREEN}`,
              }}
            />

            <span className="h-px w-8 bg-white/[0.08]" />
          </div>
        </motion.div>

        {/* ===================================================
            PROJECTS
        =================================================== */}

        <div className="space-y-28 lg:space-y-36">
          {featuredProjects.map((project, index) => {
            const isReverse = index % 2 === 1;

            return (
              <motion.article
                key={project.title}
                {...reveal(index * 0.12, 45)}
                className="
                  grid
                  items-center
                  gap-10
                  lg:grid-cols-2
                  lg:gap-16
                "
              >
                {/* =================================================
                    PROJECT VISUAL
                ================================================= */}

                <motion.div
                  whileHover={{
                    y: -7,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    isReverse
                      ? "lg:order-2"
                      : "lg:order-1"
                  }
                >
                  <div className="group relative">

                    {/* Atmospheric glow */}

                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        -inset-5
                        rounded-[30px]
                        opacity-30
                        blur-3xl
                        transition-all
                        duration-700
                        group-hover:opacity-60
                      "
                      style={{
                        background:
                          "radial-gradient(circle, rgba(1,193,106,0.20) 0%, transparent 70%)",
                      }}
                    />

                    {/* Browser-style frame */}

                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[1.35rem]
                        border
                        border-white/[0.08]
                        bg-[#0d1420]
                        shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                        transition-all
                        duration-500
                        group-hover:border-[#01c16a]/20
                      "
                    >
                      {/* Window header */}

                      <div
                        className="
                          flex
                          h-10
                          items-center
                          justify-between
                          border-b
                          border-white/[0.05]
                          bg-white/[0.018]
                          px-4
                        "
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-white/10" />
                          <span className="h-2 w-2 rounded-full bg-white/10" />
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{
                              backgroundColor:
                                "rgba(1,193,106,0.45)",
                            }}
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="h-1 w-12 rounded-full bg-white/[0.05]" />
                          <span className="h-1 w-5 rounded-full bg-white/[0.04]" />
                        </div>
                      </div>

                      {/* Image */}

                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="
                            aspect-video
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.035]
                          "
                        />

                        {/* Green cinematic overlay */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            opacity-0
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                          "
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(1,193,106,0.10), transparent 48%, rgba(1,193,106,0.06))",
                          }}
                        />

                        {/* Bottom gradient */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-x-0
                            bottom-0
                            h-24
                          "
                          style={{
                            background:
                              "linear-gradient(to top, rgba(13,20,32,0.45), transparent)",
                          }}
                        />

                        {/* Project index */}

                        <div
                          className="
                            absolute
                            bottom-4
                            left-4
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-white/[0.08]
                            bg-[#111827]/80
                            px-3
                            py-2
                            backdrop-blur-xl
                          "
                        >
                          <Layers3
                            size={13}
                            style={{
                              color: GREEN,
                            }}
                          />

                          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
                            Project{" "}
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Top green accent */}

                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          left-8
                          right-8
                          top-0
                          h-px
                          opacity-50
                        "
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, #01c16a, transparent)",
                        }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    PROJECT CONTENT
                ================================================= */}

                <div
                  className={
                    isReverse
                      ? "lg:order-1"
                      : "lg:order-2"
                  }
                >
                  {/* Project metadata */}

                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        tracking-[0.25em]
                      "
                      style={{
                        color: GREEN,
                      }}
                    >
                      0{index + 1}
                    </span>

                    <span className="h-px w-8 bg-white/[0.08]" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/20">
                      Featured Project
                    </span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mb-5
                      text-2xl
                      font-bold
                      tracking-[-0.035em]
                      text-white
                      transition-colors
                      duration-300
                      sm:text-3xl
                      lg:text-[2.1rem]
                    "
                  >
                    {project.title}
                    <span
                      style={{
                        color: GREEN,
                      }}
                    >
                      .
                    </span>
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mb-7
                      max-w-xl
                      text-sm
                      leading-7
                      text-white/38
                      sm:text-[15px]
                      sm:leading-8
                    "
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}

                  <div className="mb-8">
                    <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-white/20">
                      Built With
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-lg
                            border
                            px-3
                            py-1.5
                            text-[10px]
                            font-medium
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                          "
                          style={{
                            borderColor:
                              "rgba(1,193,106,0.10)",
                            background:
                              "rgba(1,193,106,0.035)",
                            color:
                              "rgba(141,240,187,0.55)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}

                  <div className="mb-7 h-px w-full bg-white/[0.05]" />

                  {/* Buttons */}

                  <div className="flex flex-wrap gap-3">

                    {/* GitHub */}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2.5
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white/60
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-white/[0.15]
                        hover:bg-white/[0.05]
                        hover:text-white
                      "
                    >
                      <Github
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />

                      View Code
                    </a>

                    {/* Live Demo */}

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2.5
                        rounded-xl
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-[#06150d]
                        shadow-[0_10px_30px_rgba(1,193,106,0.12)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-[0_15px_40px_rgba(1,193,106,0.20)]
                      "
                      style={{
                        backgroundColor: GREEN,
                      }}
                    >
                      <ExternalLink
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />

                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ===================================================
            EMPTY STATE
        =================================================== */}

        {featuredProjects.length === 0 && (
          <motion.div
            {...reveal()}
            className="
              rounded-3xl
              border
              border-white/[0.06]
              bg-white/[0.02]
              px-6
              py-16
              text-center
            "
          >
            <Sparkles
              size={24}
              className="mx-auto mb-4"
              style={{
                color: GREEN,
              }}
            />

            <p className="text-sm text-white/30">
              More projects are coming soon.
            </p>
          </motion.div>
        )}

        {/* ===================================================
            VIEW ALL CTA
        =================================================== */}

        <motion.div
          {...reveal(0.15, 20)}
          className="
            mt-24
            flex
            justify-center
            lg:mt-28
          "
        >
          <Link
            to="/projects"
            className="
              group
              relative
              inline-flex
              items-center
              gap-3
              overflow-hidden
              rounded-xl
              border
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white/70
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-white
            "
            style={{
              borderColor: "rgba(1,193,106,0.16)",
              background: "rgba(1,193,106,0.045)",
              boxShadow:
                "0 10px 35px rgba(1,193,106,0.06)",
            }}
          >
            {/* Hover fill */}

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                transition-transform
                duration-500
                group-hover:translate-x-0
              "
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(1,193,106,0.10), transparent)",
              }}
            />

            <span className="relative z-10">
              View All Projects
            </span>

            <ArrowRight
              size={17}
              className="
                relative
                z-10
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              style={{
                color: GREEN,
              }}
            />
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#111827]
          to-transparent
        "
      />
    </section>
  );
}