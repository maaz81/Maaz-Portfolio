import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ isMenuOpen, setIsMenuOpen, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/#about' },
    { id: 'skills', label: 'Skills', path: '/#skills' },
    { id: 'experience', label: 'Experience', path: '/#experience' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (item) => {
    if (item.id === 'projects') {
      // Navigate to projects page
      return;
    }

    if (isHomePage && item.path.startsWith('/#')) {
      // Smooth scroll on home page
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="text-xl sm:text-2xl  font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              MAK
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex lg:space-x-8 md:space-x-5">

            {navItems.map((item) => (
              item.id === 'projects' ? (
                <Link
                  key={item.id}
                  to={item.path}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={() => handleNavClick(item)}
                  className={`transition-colors duration-300 ${activeSection === item.id && isHomePage
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
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
          className="md:hidden fixed inset-0 top-16 bg-slate-900/98 backdrop-blur-md"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              item.id === 'projects' ? (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-lg text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={() => handleNavClick(item)}
                  className="block py-4 text-lg text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}