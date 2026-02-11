import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    // {
    //   title: 'AI-Thought-Sharing Webapp',
    //   description: 'An AI-powered web platform for users to share, filter, and explore thoughts and ideas with integrated Chatbot AI for content suggestions.',
    //   tech: ['React.js', 'Node.js', 'MongoDB', 'OpenAI API'],
    //   github: 'https://github.com/maaz81/AI-Thought-Sharing-Webapp',
    //   demo: '#',
    //   image: '/projects/ai-thought-sharing.png',
    // },
    {
      title: 'RememberMe - Task Manager App',
      description: 'An AI-powered web platform for users to share, filter, and explore thoughts and ideas with integrated Chatbot AI for content suggestions.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'OpenAI API'],
      github: 'https://github.com/maaz81/AI-Thought-Sharing-Webapp',
      demo: 'https://mern-todos-task-manager.vercel.app/',
      image: '/projects/Task-Manager.png',
    },
    {
      title: 'Ochi. Design Clone',
      description: 'A pixel-perfect, responsive frontend clone of the Ochi Design agency website with smooth UI animations using Framer Motion.',
      tech: ['React.js', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/maaz81/Ochi-Clone-Project',
      demo: 'https://ochi-clone-project.vercel.app/',
      image: '/projects/ochi-design.png',
    },
  ];

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
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`order-first md:${index % 2 === 1 ? 'order-2' : 'order-1'}`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full max-h-[320px] md:max-h-none object-cover rounded-2xl border border-purple-500/20"
                    // onError={(e) => {
                    //   e.target.src = `https://via.placeholder.com/600x400/1e293b/${index % 2 === 0 ? 'a78bfa' : 'ec4899'}?text=${project.title}`;
                    // }}
                    />
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className={`order-last md:${index % 2 === 1 ? 'order-1' : 'order-2'}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-400">
                    {project.title}</h3>
                  <p className="text-gray-400 text-base sm:text-lg mb-6">
                    {project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
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
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
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
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4  bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
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