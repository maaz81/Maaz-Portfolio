import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../constants/nav";

export default function Navbar({ isMenuOpen, setIsMenuOpen, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionNavigation = (item) => {
    if (isHomePage) {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
            >
              MAK
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex lg:space-x-8 md:space-x-5">
            {NAV_ITEMS.map((item) =>
              item.type === "page" ? (
                <Link
                  key={item.id}
                  to={item.path}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleSectionNavigation(item)}
                  className={`transition-colors duration-300 ${activeSection === item.id && isHomePage
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed inset-0 top-16 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 z-40"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {NAV_ITEMS.map((item) =>
              item.type === "page" ? (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-lg text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleSectionNavigation(item)}
                  className="block py-4 text-lg text-gray-300 hover:text-purple-400 transition-colors text-left w-full"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
