'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { Experience as ExperienceType, Education } from '@/data/portfolio';

interface ExperienceProps {
  experience: ExperienceType[];
  education: Education[];
}

export default function Experience({ experience, education }: ExperienceProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background that has shaped my career in web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Work Experience
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h4>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {exp.duration}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {exp.company}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Achievements */}
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Certifications & Training
                </h4>
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
              </div>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-green-800"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Understanding the Innovators Role in Digital Transformation
                      </h5>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span>Vista Venice Resort, Morong Bataan, Philippines</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span>April 24-26, 2023</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ExternalLink className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-green-600 dark:text-green-400 font-medium">Digital Innovation & Leadership</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-white dark:bg-slate-800 rounded-lg">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Completed intensive training on digital transformation strategies, innovation leadership, 
                          and the role of technology in modern business development.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Education
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {edu.duration}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  {edu.institution}
                </div>
                
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                  {edu.field}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 