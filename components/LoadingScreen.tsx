'use client';

import { motion } from 'framer-motion';
import { Code, Coffee, Heart } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
            <Code className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Loading Portfolio
        </motion.h1>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-2 mb-8"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-blue-500 rounded-full"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Fun Loading Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-2"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-400 text-sm"
          >
            <Coffee className="w-4 h-4 inline mr-2" />
            Brewing some code...
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="text-gray-400 text-sm"
          >
            <Heart className="w-4 h-4 inline mr-2 text-red-500" />
            Crafting with love...
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="w-64 h-1 bg-slate-700 rounded-full mx-auto mt-8 overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-blue-400 rounded-full opacity-20"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-12 h-12 bg-purple-400 rounded-full opacity-20"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-10 h-10 bg-pink-400 rounded-full opacity-20"
        animate={{
          y: [-15, 15, -15],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
} 