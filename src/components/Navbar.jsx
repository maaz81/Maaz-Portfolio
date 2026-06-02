import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../constants/nav";

export default function Navbar({ isMenuOpen, setIsMenuOpen, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const handleNav = (item) => {
    setIsMenuOpen(false);
    if (isHome) {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-md shadow-slate-900/60 border-b border-slate-800/60"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16">

            {/* Logo */}
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <motion.span
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight cursor-pointer select-none"
              >
                MAK
              </motion.span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id && isHome;
                return item.type === "page" ? (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="relative px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item)}
                    className={[
                      "relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200",
                      isActive
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    {item.label}
                    {/* Active underline dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-300 hover:text-white hover:bg-white/8 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer — full-screen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden fixed inset-0 top-14 sm:top-16 z-40 bg-slate-900/97 backdrop-blur-xl border-t border-slate-800/60 flex flex-col"
          >
            <nav className="flex flex-col px-6 pt-4 pb-8 gap-1">
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeSection === item.id && isHome;
                return item.type === "page" ? (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3.5 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                    onClick={() => handleNav(item)}
                    className={[
                      "flex items-center gap-3 px-3 py-3.5 rounded-xl text-base font-medium text-left w-full transition-all",
                      isActive
                        ? "text-purple-400 bg-purple-500/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    )}
                    {item.label}
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}