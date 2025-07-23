'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects({ projects }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'other', name: 'Other' },
  ];

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of my best work. Each project showcases my ability to deliver high-quality, 
            performant, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center text-lg text-gray-500 dark:text-gray-400 py-12">
                No project existing
              </div>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative group overflow-hidden rounded-2xl shadow-lg flex flex-col ${project.featured ? 'bg-white dark:bg-[#181c2a] border border-gray-200 dark:border-0' : 'bg-white border border-gray-200 dark:bg-slate-800 dark:border-none'} ${project.featured ? 'p-0' : 'p-0'}`}
                  style={project.featured ? { minHeight: '370px', maxWidth: 400, margin: '0 auto' } : {}}
                >
                  {project.featured ? (
                    <>
                      <div className="relative h-40 rounded-t-2xl flex items-center justify-center bg-gradient-to-tr from-[#7f5af0] via-[#5eead4] to-[#ff80b5]">
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md">Featured</span>
                        <span className="text-6xl font-bold text-white dark:text-white text-gray-900 drop-shadow-lg select-none">{project.title.charAt(0)}</span>
                      </div>
                      <div className="flex-1 flex flex-col justify-between bg-[#181c2a] rounded-b-2xl p-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                          <p className="text-sm text-gray-800 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full dark:bg-[#232946] dark:text-white border border-blue-200 dark:border-none">{tech}</span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-full dark:bg-[#232946] dark:text-white border border-gray-200 dark:border-none">+ {project.technologies.length - 3} more</span>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-3 mt-auto">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#232946] text-white font-semibold rounded-lg shadow hover:bg-[#313866] transition-all duration-200 text-sm">Code</a>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-all duration-200 text-sm">Live</a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-800 dark:text-gray-400 mb-4 h-16 overflow-hidden">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full dark:bg-blue-900/50 dark:text-blue-300 border border-blue-200 dark:border-none">{tech}</span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-full dark:bg-slate-700 dark:text-gray-300 border border-gray-200 dark:border-none">+ {project.technologies.length - 3} more</span>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h2>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full dark:bg-purple-900/50 dark:text-purple-300">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button onClick={closeProjectModal} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                    <span className="text-2xl">&times;</span>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      About this project
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedProject.description}
                    </p>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full dark:bg-slate-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 