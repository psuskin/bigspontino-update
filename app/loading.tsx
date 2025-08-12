'use client';

import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface LoadingProps {
  onComplete?: () => void;
}

export default function Loading({ onComplete }: LoadingProps = {}) {
  const [scope, animate] = useAnimate();
  const [isComplete, setIsComplete] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Memoized image handlers to prevent re-renders
  const handleImageLoad = useCallback(() => {
    console.log('Image loaded successfully');
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    console.warn('Logo image failed to load');
    setImageLoaded(true); // Still proceed with loading completion
  }, []);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout | null = null;
    let isCleanedUp = false;

    // Simulate loading progress
    const startProgress = () => {
      progressInterval = setInterval(() => {
        if (isCleanedUp) return;

        setLoadingProgress((prev) => {
          if (prev >= 90) {
            if (progressInterval) {
              clearInterval(progressInterval);
              progressInterval = null;
            }
            return prev;
          }
          return Math.min(prev + Math.random() * 10 + 2, 90);
        });
      }, 150);
    };

    // Start progress immediately
    startProgress();

    // Simulate loading tasks with more realistic timing
    const loadingTasks = [
      () => new Promise<void>((resolve) => setTimeout(resolve, 800)),
      () => new Promise<void>((resolve) => setTimeout(resolve, 600)),
      () => new Promise<void>((resolve) => setTimeout(resolve, 400)),
    ];

    // Execute loading tasks
    Promise.all(loadingTasks.map((task) => task()))
      .then(() => {
        if (isCleanedUp) return;

        // Ensure we reach 100% progress
        setLoadingProgress(100);

        // Wait for image to load before completing
        const checkComplete = () => {
          if (isCleanedUp) return;

          if (imageLoaded) {
            setTimeout(() => {
              if (!isCleanedUp) {
                setIsComplete(true);
              }
            }, 500); // Give a moment to show 100%
          } else {
            setTimeout(checkComplete, 100);
          }
        };

        // Start checking after a short delay
        setTimeout(checkComplete, 200);
      })
      .catch((error) => {
        console.error('Loading error:', error);
        if (!isCleanedUp) {
          setLoadingProgress(100);
          setTimeout(() => {
            if (!isCleanedUp) {
              setIsComplete(true);
            }
          }, 500);
        }
      });

    return () => {
      isCleanedUp = true;
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  }, [imageLoaded]);

  // Handle slide-up animation when loading is complete
  useEffect(() => {
    if (isComplete && scope.current) {
      const timer = setTimeout(() => {
        if (scope.current) {
          animate(
            scope.current,
            { y: '-100%' },
            {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          ).then(() => {
            // Call onComplete callback if provided
            if (onComplete) {
              onComplete();
            }
          });
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isComplete, animate, scope, onComplete]);

  return (
    <motion.div
      ref={scope}
      className="fixed inset-0 z-50"
      initial={{ y: 0 }}
      style={{ backgroundColor: '#ce2d19' }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Main Content */}
        <div className="text-center z-10 space-y-8">
          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto">
                <Image
                  src="/assets/logo-white.png"
                  alt="Big Spuntino - Authentic Italian Restaurant Hamburg"
                  fill
                  className="object-contain"
                  priority={true}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Loading Spinner */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 1 }}
          animate={{
            opacity: isComplete ? 0 : 1,
          }}
          transition={{
            opacity: { duration: 0.3 },
          }}
        >
          <motion.div
            className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: isComplete ? 0 : Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>

        {/* Loading Progress */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: !isComplete ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white/80 text-sm font-medium mb-2">
            Loading... {Math.round(loadingProgress)}%
          </div>
          <div className="w-48 h-1 bg-background/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-background rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
