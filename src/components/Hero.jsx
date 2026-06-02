import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { HERO_DATA } from "../constants";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 'clamp(80px, 10vh, 120px)' }}
    >
      {/* Subtle ambient glow blobs — purely decorative, no overflow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.13) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT CONTENT ── */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Greeting pill */}
            <motion.div {...fadeUp(0.15)}>
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-purple-400 mb-4">
                <span className="block w-6 h-px bg-purple-400" />
                {HERO_DATA.greeting}
              </span>
            </motion.div>

            {/* Name — tightened scale */}
            <motion.h1
              {...fadeUp(0.25)}
              className="font-extrabold leading-[1.05] tracking-tight mb-3"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                background: 'linear-gradient(135deg, #c084fc 0%, #f472b6 55%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {HERO_DATA.name}
            </motion.h1>

            {/* Role — clear hierarchy, not competing with name */}
            <motion.h2
              {...fadeUp(0.35)}
              className="text-gray-200 font-semibold mb-4 tracking-tight"
              style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.45rem)' }}
            >
              {HERO_DATA.role}
            </motion.h2>

            {/* Divider accent */}
            <motion.div
              {...fadeUp(0.4)}
              className="w-14 h-0.5 mb-5 rounded-full mx-auto md:mx-0"
              style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}
            />

            {/* Description — comfortable reading width */}
            <motion.p
              {...fadeUp(0.45)}
              className="text-gray-400 leading-relaxed mb-8 max-w-md"
              style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
            >
              {HERO_DATA.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.55)}
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-8"
            >
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #9333ea, #ec4899)',
                  boxShadow: '0 0 0 0 rgba(147,51,234,0)',
                }}
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-lg font-semibold text-sm border border-purple-500/60 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 justify-center md:justify-start"
            >
              {[
                { href: HERO_DATA.socialLinks.github, icon: <Github size={18} />, label: 'GitHub' },
                { href: HERO_DATA.socialLinks.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { href: `mailto:${HERO_DATA.socialLinks.email}`, icon: <Mail size={18} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700/50 text-gray-400 hover:text-white hover:bg-purple-600/80 hover:border-purple-500/60 transition-all duration-250 text-xs font-medium"
                >
                  {icon}
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT IMAGE ── */}
          <motion.div
            className="flex justify-center order-first md:order-last"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex-shrink-0">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #9333ea, #ec4899, #9333ea)',
                  padding: '3px',
                  borderRadius: '50%',
                  animation: 'spin 8s linear infinite',
                }}
              />

              {/* Glow */}
              <div
                className="absolute inset-[-8px] rounded-full opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)',
                  filter: 'blur(16px)',
                }}
              />

              {/* Avatar */}
              <div
                className="relative rounded-full overflow-hidden border-[3px] border-purple-500/50"
                style={{
                  width: 'clamp(200px, 28vw, 320px)',
                  height: 'clamp(200px, 28vw, 320px)',
                }}
              >
                <img
                  src="/Maaz_profile.jpg"
                  alt="Maaz Ahmad Khan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      'https://via.placeholder.com/400x400/1e293b/a78bfa?text=MAK';
                  }}
                />

                {/* Subtle inner shadow for depth */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: 'inset 0 -40px 60px rgba(15,10,40,0.5)',
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-purple-500/40 shadow-lg shadow-purple-900/40"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-xs text-gray-300 font-medium whitespace-nowrap">
                  Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div> */}
      </div>

      {/* Spin animation keyframe */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}