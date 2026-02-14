import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectModal from './ProjectModal';

export default function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
    {
      title: "Thoughtly - AI Thought Sharing Webapp",
      year: "2025",
      category: "Full Stack",
      image: '/projects/Ai-thought.png',
      longDescription:
        "AI – Thought Sharing is a full-stack AI-native social publishing platform that enables users to co-author content with AI, discover personalized feeds through an interest-graph recommendation engine, and interact in real-time. The system combines intelligent content generation, scalable backend architecture, and real-time communication to create a modern knowledge-sharing ecosystem.",

      problem:
        "Modern content platforms lack intelligent assistance and personalized discovery. Users struggle with content creation, idea structuring, and finding relevant discussions in large-scale social environments.",

      solution:
        "Built an AI-powered co-authoring system using OpenAI for title generation, rewriting, and auto-tagging, combined with a weighted interest-graph recommendation engine and real-time WebSocket notifications to deliver intelligent and engaging content experiences.",

      impact:
        "Reduced content creation time by approximately 40%, achieved sub-100ms real-time updates using Socket.io, and designed scalable feed retrieval logic optimized for high-volume personalized content delivery.",

      features: [
        "AI Smart Co-Authoring (title generation, rewriting, auto-tagging)",
        "Interest Graph Recommendation Engine using weighted engagement signals",
        "Real-time notifications and live interactions via Socket.io",
        "Secure JWT-based authentication with protected routes",
        "Optimized MongoDB aggregation pipelines for feed ranking",
        "Human-in-the-loop AI suggestion system with optimistic UI updates"
      ],

      tech: [
        "React (Vite)",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenAI API",
        "Socket.io",
        "JWT Authentication",
        "Tailwind CSS"
      ],

      architecture:
        "Designed with a modular MVC backend architecture using Express.js and MongoDB. REST APIs handle core business logic, while a WebSocket layer (Socket.io) enables real-time communication. The frontend is built with React (Vite) using component-driven architecture and optimized state management for performance and scalability.",

      github: "https://github.com/maaz81/AI-Thought-Sharing-Webapp",
      demo: "https://thoughtly.vercel.app/"
    },
    {
      title: 'Ochi. Design Clone',
      description: 'A pixel-perfect, responsive frontend clone of the Ochi Design agency website with smooth UI animations using Framer Motion.',
      longDescription: 'Developed a pixel-perfect, responsive frontend clone of the Ochi Design agency website using React.js and modern design principles. Implemented smooth UI animations (Cards, Marquee, About sections) using Framer Motion to mimic production-grade aesthetics. Practiced component reusability and clean code structure for scalable frontend development.',
      features: [
        'Pixel-perfect responsive design',
        'Smooth Framer Motion animations',
        'Component reusability',
        'Production-grade aesthetics',
        'Clean code structure'
      ],
      tech: ['React.js', 'Framer Motion', 'Tailwind CSS', 'JavaScript'],
      category: 'Frontend',
      github: 'https://github.com/maaz81/Ochi-Clone-Project',
      demo: 'https://ochi-clone-project.vercel.app/',
      image: '/projects/ochi-design.png',
      year: '2025'
    },
    {
      title: "Career AI – Resume Intelligence Platform",
      year: "2025",
      category: "Full Stack",
      image: '/projects/Resume-Analytics.png',

      longDescription:
        "Career AI is an AI-powered resume intelligence platform designed to analyze resumes, calculate ATS compatibility, and provide personalized career recommendations. The system combines a high-performance React dashboard, a scalable Node/Express backend, Redis caching, and a Python-based NLP engine to deliver accurate resume parsing and intelligent job matching insights.",

      problem:
        "Many candidates submit resumes that fail ATS filters due to poor keyword alignment, formatting issues, or lack of clarity on skill gaps. There is limited visibility into how resumes perform against real job descriptions.",

      solution:
        "Built a full-stack AI platform that parses resumes using Python NLP, extracts structured skills and experience data, calculates semantic similarity scores against job descriptions, and generates ATS compatibility and job match scores with actionable improvement suggestions.",

      impact:
        "Achieved 85%+ skill extraction accuracy using NLP models, reduced API response latency by 60% with Redis caching, and improved application performance by 40% through frontend optimization techniques like code-splitting and lazy loading.",

      features: [
        "AI-powered resume parsing with skill and experience extraction",
        "ATS compatibility and Job Match scoring using semantic similarity analysis",
        "Personalized skill gap detection and learning path recommendations",
        "Secure JWT & Google OAuth authentication with RBAC",
        "Redis caching layer for optimized API performance",
        "Interactive analytics dashboard with real-time career insights"
      ],

      tech: [
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "Redis",
        "Python",
        "NLP",
        "JWT",
        "Google OAuth"
      ],

      architecture:
        "Designed as a modular full-stack system with a React + Redux frontend and a RESTful Node.js/Express backend. PostgreSQL with Prisma ORM manages relational resume and user data, while Redis provides a high-speed caching layer. A separate Python NLP service handles resume parsing, skill extraction, and semantic similarity scoring, enabling scalable and maintainable AI processing.",

      github: "https://github.com/maaz81/Resume-Analytics-and-Career-Recommender",
      demo: "https://career-ai-demo.app"
    },
    {
      title: 'RememberMe - Task Manager',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking.',
      longDescription: 'Developed a modern task management application that enables teams to collaborate in real-time. Features include drag-and-drop task boards, deadline tracking, team member assignments, and progress visualization.',
      features: [
        'Real-time collaboration',
        'Drag-and-drop interface',
        'Team member assignments',
        'Progress tracking',
        'Deadline notifications'
      ],
      tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      category: 'Full Stack',
      github: '#',
      demo: 'https://mern-todos-task-manager.vercel.app/',
      image: '/projects/Task-Manager.png',
      year: '2025'
    },
    {
      title: 'Portfolio Website Template',
      description: 'A modern, responsive portfolio template with smooth animations and dark mode support.',
      longDescription: 'Created a beautiful portfolio website template that developers and designers can use to showcase their work. Features smooth scroll animations, dark mode toggle, and fully customizable sections.',
      features: [
        'Responsive design',
        'Dark mode support',
        'Smooth animations',
        'SEO optimized',
        'Easy customization'
      ],
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      github: '#',
      demo: 'https://maaz-portfolio-xi.vercel.app/',
      image: '/projects/Portfolio.png',
      year: '2026'
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection="projects" />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              All <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              A collection of my work showcasing web development, design, and problem-solving skills.
              Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Filter size={20} />
              <span className="font-semibold">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${activeFilter === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/1e293b/${index % 2 === 0 ? 'a78bfa' : 'ec4899'}?text=${project.title}`;
                    }}
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-sm">
                    {project.year}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs border border-purple-500/30 text-purple-300">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-purple-400 group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-purple-600 transition-all duration-300"
                    >
                      <Github size={18} />
                      <span className="text-sm font-semibold">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-purple-500 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-semibold">Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-12 rounded-3xl border border-purple-500/30"
          >
            <h2 className="text-4xl font-bold mb-4">
              Like what you see?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's collaborate and build something amazing together!
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Get In Touch
              <ArrowLeft className="rotate-180" size={20} />
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