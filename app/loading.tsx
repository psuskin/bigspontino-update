'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Chef Hat Icon
const ChefHatIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
    <line x1="6" x2="18" y1="17" y2="17" />
  </svg>
);

// Cooking Pot Icon
const CookingPotIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12h20" />
    <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
    <path d="M4 8h16a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2Z" />
    <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
  </svg>
);

// Steam particles
const SteamParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-white rounded-full opacity-60"
    initial={{ y: 0, x: 0, opacity: 0 }}
    animate={{
      y: [-20, -60, -100],
      x: [0, Math.random() * 20 - 10, Math.random() * 30 - 15],
      opacity: [0, 0.6, 0],
      scale: [0.5, 1, 0.3],
    }}
    transition={{
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      delay: delay,
      ease: 'easeOut',
    }}
  />
);

// Loading messages in Italian
const loadingMessages = [
  'Preparando la cucina...',
  'Scaldando il forno...',
  'Mescolando gli ingredienti...',
  'Cucinando con amore...',
  'Quasi pronto...',
];

export default function Loading() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cycle through loading messages
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 1000);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1)_0%,transparent_50%)] pointer-events-none"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-200 rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Loading Container */}
      <motion.div
        className="text-center z-10 p-8 rounded-3xl bg-white/90 backdrop-blur-sm shadow-2xl border border-amber-200/50 max-w-md w-full mx-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo/Brand */}
        <motion.div
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl font-serif font-bold text-amber-700 mb-2">Big Spuntino</h1>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto"></div>
        </motion.div>

        {/* Animated Cooking Scene */}
        <div className="relative mb-8 flex justify-center">
          {/* Chef Hat */}
          <motion.div
            className="relative"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChefHatIcon className="w-16 h-16 text-amber-600" />

            {/* Steam particles from chef hat */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              {[...Array(5)].map((_, i) => (
                <SteamParticle key={i} delay={i * 0.5} />
              ))}
            </div>
          </motion.div>

          {/* Cooking Pot */}
          <motion.div
            className="relative ml-8"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <CookingPotIcon className="w-16 h-16 text-gray-600" />

            {/* Steam particles from pot */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              {[...Array(6)].map((_, i) => (
                <SteamParticle key={`pot-${i}`} delay={i * 0.3} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Loading Message */}
        <motion.div
          className="mb-6 h-8 flex items-center justify-center"
          key={currentMessage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-700 font-medium italic">
            {loadingMessages[currentMessage]}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p
            className="text-sm text-gray-500 mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {Math.round(Math.min(progress, 100))}%
          </motion.p>
        </div>

        {/* Spinning Loader */}
        <motion.div
          className="flex justify-center mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
        >
          <div className="w-8 h-8 border-3 border-amber-200 border-t-amber-600 rounded-full"></div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Authentic Italian Experience Loading...
        </motion.p>
      </motion.div>

      {/* Bottom Decorative Elements */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-amber-500 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
