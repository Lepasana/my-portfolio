'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

export default function Experience({ experience }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center text-white dark:text-white text-gray-900 mb-2 mt-8"
      >
        Experience & Education
      </motion.h2>
      <p className="text-center text-lg text-gray-300 dark:text-gray-300 text-gray-700 mb-12">My professional journey and educational background that has shaped my career in web development.</p>
      <div className="flex flex-col md:flex-row justify-center mb-12 md:-mx-2">
        {/* Left Column: Work Experience + Certifications */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center md:px-2">
          {/* Work Experience */}
          <h3 className="text-3xl font-extrabold text-white dark:text-white text-gray-900 mb-1 flex items-center">Work Experience</h3>
          <div className="w-32 h-1 bg-blue-400 rounded mb-8"></div>
          {experience.work.map((item) => (
            <div key={item.id} className="w-full max-w-md rounded-2xl shadow-lg p-8 mb-8 bg-white dark:bg-[#1a2236] border border-gray-200 dark:border-none">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-white dark:text-white text-gray-900">{item.position}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{item.duration}</span>
              </div>
              <div className="text-sm text-slate-300 dark:text-slate-300 text-gray-700 mb-1 flex items-center"><Briefcase className="w-4 h-4 mr-1 inline" /> <span className="text-slate-400 dark:text-slate-400 text-gray-500">{item.company}</span></div>
              <div className="text-gray-700 dark:text-slate-100 text-base mb-3">{item.description}</div>
              <div className="flex flex-wrap gap-2 mb-3">
                {item.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-[#223366] text-blue-800 dark:text-blue-100 text-xs font-medium rounded-md border border-blue-200 dark:border-none">
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <span className="font-bold text-white dark:text-white text-gray-900">Key Achievements:</span>
                  <ul className="list-disc list-inside text-blue-700 dark:text-blue-200 text-sm mt-1">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* Certifications & Training Card */}
          <h3 className="text-3xl font-extrabold text-white dark:text-white text-gray-900 mb-1 flex items-center mt-8">Certifications & Training</h3>
          <div className="w-32 h-1 bg-green-400 rounded mb-8"></div>
          {experience.certifications.map((cert) => (
            <div key={cert.id} className="w-full max-w-md mb-8 p-8 rounded-2xl shadow-lg bg-white dark:bg-[#10291a] border border-green-200 dark:border-green-600">
              <div className="flex items-center mb-2">
                <Award className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-lg font-bold text-white dark:text-white text-gray-900">{cert.title}</span>
              </div>
              <div className="flex flex-wrap items-center text-base text-green-200 dark:text-green-200 text-green-800 mb-2">
                <MapPin className="w-4 h-4 mr-1 text-green-400" />
                  <span className="mr-4 text-green-700 dark:text-green-200">{cert.organization}</span>
                <Calendar className="w-4 h-4 mr-1 text-green-400" />
                  <span className="text-green-700 dark:text-green-200">{cert.date}</span>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-300 dark:text-green-300 text-green-700 hover:underline mb-2 font-semibold">
                <ExternalLink className="w-4 h-4 mr-1" />
                {cert.linkLabel}
              </a>
              <p className="text-base text-green-700 dark:text-green-100 mt-2">{cert.description}</p>
            </div>
          ))}
        </div>
        {/* Right Column: Education */}
        <div className="flex-1 flex flex-col items-center md:px-2">
          <h3 className="text-3xl font-extrabold text-white dark:text-white text-gray-900 mb-1 flex items-center">Education</h3>
          <div className="w-32 h-1 bg-purple-400 rounded mb-8"></div>
          {experience.education.map((item) => (
            <div key={item.id} className="w-full max-w-md rounded-2xl shadow-lg p-8 mb-8 bg-white dark:bg-[#1a2236] border border-gray-200 dark:border-none">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-white dark:text-white text-gray-900">{item.degree}</span>
                  <span className="text-purple-700 dark:text-purple-400 font-semibold">{item.duration}</span>
              </div>
              <div className="text-sm text-slate-300 dark:text-slate-300 text-gray-700 mb-1 flex items-center"><GraduationCap className="w-4 h-4 mr-1 inline" /> <span className="text-slate-400 dark:text-slate-400 text-gray-500">{item.institution}</span></div>
              <div className="text-purple-700 dark:text-purple-300 text-base mb-1 font-semibold">{item.field}</div>
              <div className="text-gray-700 dark:text-slate-100 text-base">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 