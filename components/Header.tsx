'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

interface HeaderProps {
  currentSection: string;
}

export default function Header({ currentSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg dark:bg-slate-900/80'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {portfolioData.personal.name.charAt(0)}
              </span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {portfolioData.personal.name}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
                {currentSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors font-medium text-sm"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    currentSection === item.id
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Resume link removed from mobile menu for privacy */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 