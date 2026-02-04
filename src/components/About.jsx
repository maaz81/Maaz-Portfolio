import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative max-[499px]:hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 ">
                  <img
                    src="/Maaz_profile.jpg"
                    alt="About Maaz"
                    className="w-full rounded-xl"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/500x600/1e293b/a78bfa?text=Professional+Photo';
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 text-purple-400">Full Stack Developer</h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with hands-on MERN Stack experience, specializing in
                building responsive user interfaces with React.js and scalable backends with Node.js.
              </p>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Currently pursuing my Bachelor's degree at Sant Gadge Baba Amravati University, I've gained
                practical experience through my internship at Manparth, where I worked on real-world projects
                and collaborated with cross-functional teams.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                I'm passionate about optimizing performance, creating seamless user experiences, and staying
                updated with the latest web technologies. When I'm not coding, I enjoy contributing to
                open-source projects and exploring new frameworks.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="text-purple-400" size={20} />
                  <span className="text-gray-300">Achalpur, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-purple-400" size={20} />
                  <span className="text-gray-300">Available for work</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-purple-400" size={20} />
                  <span className="text-gray-300">Bachelor's Pursuing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="text-purple-400" size={20} />
                  <span className="text-gray-300">3+ Month Experience</span>
                </div>
              </div>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}