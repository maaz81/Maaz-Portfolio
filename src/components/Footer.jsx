import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { FOOTER_DATA } from "../constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-purple-500/20 bg-slate-900/80 backdrop-blur-xl">

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10">

        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left Side */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {FOOTER_DATA.name}
              </span>
            </h3>

            <p className="text-gray-400 text-sm mt-2 max-w-md">
              Building high-performance backend architectures and scalable full-stack web applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            <a
              href={FOOTER_DATA.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300"
            >
              <Github
                size={20}
                className="text-gray-400 group-hover:text-purple-400 transition-colors"
              />
            </a>

            <a
              href={FOOTER_DATA.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300"
            >
              <Linkedin
                size={20}
                className="text-gray-400 group-hover:text-purple-400 transition-colors"
              />
            </a>

            <a
              href={`mailto:${FOOTER_DATA.socialLinks.email}`}
              className="group p-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300"
            >
              <Mail
                size={20}
                className="text-gray-400 group-hover:text-purple-400 transition-colors"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {FOOTER_DATA.year} {FOOTER_DATA.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">

            <p className="text-sm text-gray-500">
              Built with React • Tailwind • Framer Motion
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
