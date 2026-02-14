import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, BookOpen } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Modal Container */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative bg-slate-900 max-w-4xl w-full rounded-2xl border border-purple-500/30 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/60 rounded-full hover:bg-black transition"
          >
            <X size={18} />
          </button>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-8 overflow-y-auto max-h-[85vh]">
            {/* ===== Project Summary ===== */}
            <div className="bg-slate-800/60 border border-purple-500/20 rounded-xl p-6">
              <span className="text-sm text-purple-400 font-semibold">
                {project.category} · {project.year}
              </span>

              <h2 className="text-3xl font-bold text-white mt-1">
                {project.title}
              </h2>

              <p className="text-gray-300 mt-4 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* ===== Problem → Solution → Impact ===== */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                <h3 className="text-purple-400 font-semibold mb-2">Problem</h3>
                <p className="text-sm text-gray-300">
                  {project.problem}
                </p>
              </div>

              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                <h3 className="text-purple-400 font-semibold mb-2">Solution</h3>
                <p className="text-sm text-gray-300">
                  {project.solution}
                </p>
              </div>

              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                <h3 className="text-purple-400 font-semibold mb-2">Impact</h3>
                <p className="text-sm text-gray-300">
                  {project.impact}
                </p>
              </div>
            </div>

            {/* ===== Key Features ===== */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-slate-800/60 p-4 rounded-lg border border-slate-700"
                  >
                    <p className="text-sm text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== Tech Stack ===== */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-slate-700/60 rounded-full border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ===== Architecture Overview ===== */}
            {project.architecture && (
              <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700">
                <h3 className="font-semibold mb-2">Architecture Overview</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* ===== GitHub Read More ===== */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
              <BookOpen size={20} className="text-purple-400 mt-1" />
              <p className="text-sm text-gray-300">
                For deeper technical details, architectural decisions, and
                future improvements, please refer to the
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 font-semibold hover:underline ml-1"
                >
                  GitHub README documentation
                </a>.
              </p>
            </div>

            {/* ===== Actions ===== */}
            <div className="flex gap-4 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
              >
                <Github size={18} /> View Code
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
