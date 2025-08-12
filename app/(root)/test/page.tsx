'use client';

import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [scope, animate] = useAnimate();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const animationFrame: number | null = null;

    // Simulate actual loading tasks
    const loadingTasks = [
      () => new Promise((resolve) => setTimeout(resolve, Math.random() * 800 + 200)), // Random 200-1000ms
      () => new Promise((resolve) => setTimeout(resolve, Math.random() * 600 + 300)), // Random 300-900ms
      () => new Promise((resolve) => setTimeout(resolve, Math.random() * 500 + 100)), // Random 100-600ms
    ];

    // Execute loading tasks
    Promise.all(loadingTasks.map((task) => task()))
      .then(() => {
        setIsComplete(true);
      })
      .catch(() => {
        // Even if tasks fail, complete the loading
        setIsComplete(true);
      });

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Trigger the slide-up animation when loading is complete
  useEffect(() => {
    if (isComplete) {
      setTimeout(() => {
        animate(
          scope.current,
          {
            y: '-100%',
          },
          {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          },
        );
      }, 500);
    }
  }, [isComplete, animate, scope]);

  return (
    <div ref={scope} className="fixed inset-0 z-50">
      <div
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: '#ce2d19' }}
      >
        {/* Main Content */}
        <div className="text-center z-10 space-y-8">
          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/assets/logo-white.png"
                alt="Big Spuntino - Authentic Italian Restaurant Hamburg"
                width={100}
                height={100}
                className="w-auto h-12 sm:h-14 md:h-20 lg:h-24 mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Loading Spinner */}
        {!isComplete && (
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
          >
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full" />
          </motion.div>
        )}
      </div>
    </div>
  );
}
