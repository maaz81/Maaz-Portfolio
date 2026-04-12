// import React from 'react';
// // eslint-disable-next-line no-unused-vars
// import { motion } from 'framer-motion';
// import { Download, MapPin, Mail, GraduationCap, Briefcase } from 'lucide-react';
// import { ABOUT_DATA } from "../constants";


// export default function About() {
//   return (
//     <section id="about" className="py-16 sm:py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
//             About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="hidden md:block"
//             >
//               <div className="relative">                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
//                 <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 ">
//                   <img
//                     src="/Maaz_profile.jpg"
//                     alt="About Maaz"
//                     className="w-full rounded-xl"
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/500x600/1e293b/a78bfa?text=Professional+Photo';
//                     }}
//                   />
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               className="text-center md:text-left max-w-xl mx-auto md:max-w-none"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >

//               <h3 className="text-3xl font-bold mb-4 text-purple-400">{ABOUT_DATA.role}</h3>
//               <p className="text-gray-400 text-base sm:text-lg mb-6 leading-relaxed">
//                 {ABOUT_DATA.description[0]}
//               </p>
//               <p className="text-gray-400 text-base sm:text-lg mb-6 leading-relaxed">
//                 {ABOUT_DATA.description[1]}
//               </p>
//               <p className="text-gray-400 text-lg mb-8 leading-relaxed">
//                 {ABOUT_DATA.description[2]}
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">

//                 <div className="flex items-center gap-2">
//                   <MapPin className="text-purple-400" size={20} />
//                   <span className="text-gray-300">{ABOUT_DATA.details[0].label}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Mail className="text-purple-400" size={20} />
//                   <span className="text-gray-300">{ABOUT_DATA.details[1].label}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <GraduationCap className="text-purple-400" size={20} />
//                   <span className="text-gray-300">{ABOUT_DATA.details[2].label}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Briefcase className="text-purple-400" size={20} />
//                   <span className="text-gray-300">{ABOUT_DATA.details[3].label}</span>
//                 </div>
//               </div>

//               <a
//                 href={ABOUT_DATA.resumeLink}
//                 download
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
//               >
//                 <Download size={20} />
//                 Download Resume
//               </a>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, GraduationCap, Briefcase, Star } from 'lucide-react';
import { ABOUT_DATA } from "../constants";

const DETAIL_ICONS = {
  location: <MapPin className="text-purple-400" size={18} />,
  availability: <Mail className="text-purple-400" size={18} />,
  education: <GraduationCap className="text-purple-400" size={18} />,
  experience: <Briefcase className="text-purple-400" size={18} />,
};

const STAT_STYLES = {
  purple: {
    wrapper: "bg-purple-500/10 border-purple-500/20",
    value: "text-purple-400",
    icon: <Briefcase size={18} className="text-purple-400" />,
  },
  green: {
    wrapper: "bg-emerald-500/10 border-emerald-500/20",
    value: "text-emerald-400",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" className="text-emerald-400">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  amber: {
    wrapper: "bg-amber-500/10 border-amber-500/20",
    value: "text-amber-400",
    icon: <Star size={18} className="text-amber-400" />,
  },
};

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* ── LEFT COLUMN ── */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* What I Build card */}
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                  What I build
                </p>
                <ul className="space-y-3">
                  {ABOUT_DATA.whatIBuild.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-4">
                {ABOUT_DATA.stats.map((stat, i) => {
                  const style = STAT_STYLES[stat.color] || STAT_STYLES.purple;
                  const isLast = i === ABOUT_DATA.stats.length - 1;
                  return (
                    <div
                      key={stat.label}
                      className={`
                                                bg-slate-800/50 backdrop-blur-sm p-5 rounded-2xl border
                                                flex flex-col gap-2
                                                ${style.wrapper}
                                                ${isLast && ABOUT_DATA.stats.length % 2 !== 0
                          ? "col-span-2"
                          : ""}
                                            `}
                    >
                      <div className={`${style.value}`}>{style.icon}</div>
                      <p className={`text-2xl font-bold ${style.value}`}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN ── */}
            <motion.div
              className="text-center md:text-left max-w-xl mx-auto md:max-w-none"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Role badge */}
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 mb-4">
                {ABOUT_DATA.role}
              </span>

              <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-white leading-snug">
                {ABOUT_DATA.tagline}
              </h3>

              {ABOUT_DATA.description.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-400 text-base sm:text-lg mb-4 leading-relaxed"
                >
                  {para}
                </p>
              ))}

              {/* Details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 mt-6 text-left">
                {ABOUT_DATA.details.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-2">
                    {DETAIL_ICONS[detail.icon]}
                    <span className="text-gray-300 text-sm">{detail.label}</span>
                  </div>
                ))}
              </div>

              <a
                href={ABOUT_DATA.resumeLink}
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