import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, GraduationCap, Briefcase, Star } from 'lucide-react';
import { ABOUT_DATA } from "../constants";

const DETAIL_ICONS = {
  location: <MapPin className="text-purple-400 flex-shrink-0" size={15} />,
  availability: <Mail className="text-purple-400 flex-shrink-0" size={15} />,
  education: <GraduationCap className="text-purple-400 flex-shrink-0" size={15} />,
  experience: <Briefcase className="text-purple-400 flex-shrink-0" size={15} />,
};

const STAT_STYLES = {
  purple: {
    wrapper: "bg-purple-500/10 border-purple-500/20",
    value: "text-purple-400",
    icon: <Briefcase size={16} className="text-purple-400" />,
  },
  green: {
    wrapper: "bg-emerald-500/10 border-emerald-500/20",
    value: "text-emerald-400",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" className="text-emerald-400">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  amber: {
    wrapper: "bg-amber-500/10 border-amber-500/20",
    value: "text-amber-400",
    icon: <Star size={16} className="text-amber-400" />,
  },
};

const fadeIn = (axis = 'y', dir = 40, delay = 0) => ({
  initial: { opacity: 0, [axis]: dir },
  whileInView: { opacity: 1, [axis]: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
});

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <motion.div className="text-center mb-12" {...fadeIn('y', 32)}>
          <h2
            className="font-extrabold tracking-tight mb-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            About{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* ── LEFT: cards ── */}
          <motion.div
            className="flex flex-col gap-4"
            {...fadeIn('x', -36, 0.1)}
          >
            {/* What I Build */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-2xl border border-purple-500/20">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                What I build
              </p>
              <ul className="space-y-2.5">
                {ABOUT_DATA.whatIBuild.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3">
              {ABOUT_DATA.stats.map((stat, i) => {
                const style = STAT_STYLES[stat.color] || STAT_STYLES.purple;
                const isLast = i === ABOUT_DATA.stats.length - 1;
                return (
                  <div
                    key={stat.label}
                    className={[
                      'bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border flex flex-col gap-1.5',
                      style.wrapper,
                      isLast && ABOUT_DATA.stats.length % 2 !== 0 ? 'col-span-2' : '',
                    ].join(' ')}
                  >
                    <div className={style.value}>{style.icon}</div>
                    <p className={`text-xl font-bold ${style.value}`}>{stat.value}</p>
                    <p className="text-xs text-gray-400 leading-tight">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT: bio ── */}
          <motion.div
            className="flex flex-col text-center md:text-left"
            {...fadeIn('x', 36, 0.15)}
          >
            {/* Role badge */}
            <span className="inline-block self-center md:self-start text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 mb-4">
              {ABOUT_DATA.role}
            </span>

            <h3
              className="font-semibold text-white leading-snug mb-4"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
            >
              {ABOUT_DATA.tagline}
            </h3>

            {ABOUT_DATA.description.map((para, i) => (
              <p
                key={i}
                className="text-gray-400 leading-relaxed mb-3"
                style={{ fontSize: 'clamp(0.85rem, 1.4vw, 0.975rem)' }}
              >
                {para}
              </p>
            ))}

            {/* Details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5 mb-7 text-left">
              {ABOUT_DATA.details.map((detail) => (
                <div key={detail.label} className="flex items-center gap-2">
                  {DETAIL_ICONS[detail.icon]}
                  <span className="text-gray-300 text-sm truncate">{detail.label}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <a
                href={ABOUT_DATA.resumeLink}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #9333ea, #ec4899)' }}
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}