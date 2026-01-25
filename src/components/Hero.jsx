import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 text-xl mb-2"
          >
            Hello, I'm
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            Maaz Ahmad Khan
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-6"
          >
            Full Stack Web Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg mb-8 max-w-xl"
          >
            MERN Stack Developer passionate about building responsive UIs and scalable backends.
            Specializing in React.js, Node.js, and creating SEO-friendly web solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 mt-8"
          >
            <a href="https://github.com/maaz81" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-purple-600 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/maaz-ahmad-khan-b052062b6/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-purple-600 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:khanmaazahmad7@gmail.com" className="p-3 bg-slate-800 rounded-lg hover:bg-purple-600 transition-all duration-300">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500/50">
              {/* Replace with your photo */}
              <img
                src="/Maaz_profile.jpg"
                alt="Maaz Ahmad Khan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400/1e293b/a78bfa?text=Your+Photo';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}