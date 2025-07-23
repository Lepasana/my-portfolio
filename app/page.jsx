'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header currentSection={currentSection} />
          
          <main>
            <section id="home" className="min-h-screen">
              <Hero data={portfolioData.personal} />
            </section>

            <section id="about" className="py-20">
              <About data={portfolioData.personal} />
            </section>

            <section id="skills" className="py-20 bg-white/50 dark:bg-slate-800/50">
              <Skills skills={portfolioData.skills} />
            </section>

            <section id="projects" className="py-20">
              <Projects projects={portfolioData.projects} />
            </section>

            <section id="experience" className="py-20 bg-white/50 dark:bg-slate-800/50">
              <Experience 
                experience={portfolioData.experience} 
                education={portfolioData.education} 
              />
            </section>

            <section id="contact" className="py-20">
              <Contact contact={portfolioData.contact} social={portfolioData.social} />
            </section>
          </main>

          <Footer social={portfolioData.social} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 