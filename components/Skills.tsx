'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Skill } from '@/data/portfolio';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'frontend', name: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', name: 'Backend', color: 'from-green-500 to-emerald-500' },
    { id: 'database', name: 'Database', color: 'from-purple-500 to-pink-500' },
    { id: 'devops', name: 'DevOps', color: 'from-orange-500 to-red-500' },
    { id: 'other', name: 'Other', color: 'from-indigo-500 to-purple-500' },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

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
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've worked with a variety of technologies to create amazing web applications. 
            Here are the tools and technologies I use on a daily basis.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.id);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {skill.category === "other" ? (
                            <span>{skill.name}</span>
                          ) : (
                            <a 
                              href={skill.name === "React" ? "https://react.dev/" :
                                   skill.name === "TypeScript" ? "https://www.typescriptlang.org/docs/" :
                                   skill.name === "Next.js" ? "https://nextjs.org/docs" :
                                   skill.name === "Tailwind CSS" ? "https://tailwindcss.com/docs" :
                                   skill.name === "JavaScript" ? "https://developer.mozilla.org/en-US/docs/Web/JavaScript" :
                                   skill.name === "HTML/CSS" ? "https://developer.mozilla.org/en-US/docs/Web" :
                                   skill.name === "Node.js" ? "https://nodejs.org/en/docs/" :
                                   skill.name === "Express.js" ? "https://expressjs.com/" :
                                   skill.name === "MongoDB" ? "https://docs.mongodb.com/" :
                                   skill.name === "MySQL" ? "https://dev.mysql.com/doc/" :
                                   skill.name === "Git & GitHub" ? "https://docs.github.com/" :
                                   "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                            >
                              {skill.name}
                            </a>
                          )}
                        </h4>
                        {skill.icon ? (
                          <img
                            src={`/icons/${skill.icon}.svg`}
                            alt={skill.name}
                            className="w-8 h-8 object-contain rounded-full bg-gray-100 dark:bg-slate-700 p-1"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        ) : (
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.name}</span>
                        )}
                      </div>
                      
                      <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {skill.name === "React" && "Building interactive user interfaces with component-based architecture and state management."}
                        {skill.name === "TypeScript" && "Adding type safety and enhanced developer experience to JavaScript applications."}
                        {skill.name === "Next.js" && "Creating full-stack React applications with server-side rendering and routing."}
                        {skill.name === "Tailwind CSS" && "Rapidly building custom designs with utility-first CSS framework."}
                        {skill.name === "JavaScript" && "Core programming language for web development and dynamic functionality."}
                        {skill.name === "HTML/CSS" && "Foundation of web development for structure and styling."}
                        {skill.name === "Node.js" && "Server-side JavaScript runtime for building scalable backend applications."}
                        {skill.name === "Express.js" && "Minimal and flexible Node.js web application framework."}
                        {skill.name === "MongoDB" && "NoSQL database for flexible document storage and data management."}
                        {skill.name === "MySQL" && "Relational database management system for structured data storage."}
                        {skill.name === "Git & GitHub" && "Version control and collaboration platform for code management."}
                        {skill.name === "MS Word" && "Document creation and word processing for professional communication."}
                        {skill.name === "Excel" && "Data analysis and spreadsheet management for business applications."}
                        {skill.name === "Video Editing" && "Creating and editing multimedia content for various platforms."}
                        {skill.name === "Encoding" && "Converting and processing digital media files for different formats."}
                        {skill.name === "Computer Troubleshooting" && "Diagnosing and resolving hardware and software issues."}
                        {skill.name === "Ubuntu Linux" && "Open-source operating system administration and management."}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'VS Code', 'Laragon', 'XAMPP', 'Git', 'GitHub', 'Ubuntu Linux'
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Currently Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always expanding my skill set. Here's what I'm currently exploring:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['PHP', 'Laravel'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium shadow-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 