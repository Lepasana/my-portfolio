'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Code, Coffee, BookOpen } from 'lucide-react';

interface AboutProps {
  data: {
    name: string;
    title: string;
    subtitle: string;
    about: string;
    avatar: string;
    resume: string;
  };
}

export default function About({ data }: AboutProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '0' },
    { icon: Coffee, label: 'Cups of Coffee', value: '9999+' },
    { icon: BookOpen, label: 'Hours Learning', value: '100+' },
    { icon: User, label: 'Happy Clients', value: '0' },
  ];

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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Image */}
              <motion.div
                className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-9xl font-bold text-white">
                    {data.name.charAt(0)}
                  </span>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Coffee className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {data.name}
              </h3>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                {data.title}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {data.about}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Preview */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                What I Do
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Frontend Development', 'UI/UX Design', 'DevOps'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 