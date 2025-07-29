'use client';

import { AnimatePresence, motion, useInView, type Variants } from 'framer-motion';
import Image from 'next/image';
import type * as React from 'react';
import { useCallback, useRef, useState } from 'react';

const images = [
  '/assets/photos/1.jpg',
  '/assets/photos/2.jpg',
  '/assets/photos/3.jpg',
  '/assets/photos/4.jpg',
  '/assets/photos/5.jpeg',
  '/assets/photos/6.jpeg',
  '/assets/photos/7.jpeg',
  '/assets/photos/8.jpeg',
  '/assets/photos/9.jpg',
  '/assets/photos/10.jpg',
  '/assets/photos/11.jpg',
  '/assets/photos/12.jpeg',
  '/assets/photos/13.jpeg',
  '/assets/photos/14.jpeg',
  '/assets/photos/15.jpg',
  '/assets/photos/16.jpg',
  '/assets/photos/17.jpeg',
  '/assets/photos/18.jpg',
  '/assets/photos/19.jpg',
  '/assets/photos/20.jpg',
  '/assets/photos/21.jpg',
  '/assets/photos/22.jpg',
  '/assets/photos/23.jpg',
  '/assets/photos/24.jpg',
  '/assets/photos/25.jpg',
  '/assets/photos/26.jpg',
  '/assets/photos/27.jpeg',
  '/assets/photos/28.jpg',
  '/assets/photos/29.jpeg',
];

const GallerySection: React.FC = () => {
  // const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Refs for intersection observers
  // const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Intersection observers for animations
  // const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const galleryInView = useInView(galleryRef, { once: true, margin: '-50px' });

  // Responsive aspect ratios
  const aspectRatios = {
    sm: [
      { width: 160, height: 160 }, // Square
      { width: 120, height: 180 }, // Portrait (2:3)
      { width: 120, height: 165 }, // Slightly taller portrait
      { width: 180, height: 120 }, // Landscape (3:2)
      { width: 165, height: 120 }, // Slightly wider landscape
      { width: 210, height: 135 }, // Wider landscape
      { width: 135, height: 210 }, // Taller portrait
    ],
    md: [
      { width: 200, height: 200 }, // Square
      { width: 160, height: 240 }, // Portrait (2:3)
      { width: 160, height: 220 }, // Slightly taller portrait
      { width: 240, height: 160 }, // Landscape (3:2)
      { width: 220, height: 160 }, // Slightly wider landscape
      { width: 280, height: 180 }, // Wider landscape
      { width: 180, height: 280 }, // Taller portrait
    ],
    lg: [
      { width: 300, height: 300 }, // Square
      { width: 240, height: 360 }, // Portrait (2:3)
      { width: 240, height: 330 }, // Slightly taller portrait
      { width: 360, height: 240 }, // Landscape (3:2)
      { width: 330, height: 240 }, // Slightly wider landscape
      { width: 420, height: 270 }, // Wider landscape
      { width: 270, height: 420 }, // Taller portrait
    ],
    xl: [
      { width: 500, height: 500 }, // Square
      { width: 400, height: 600 }, // Portrait (2:3)
      { width: 400, height: 550 }, // Slightly taller portrait
      { width: 600, height: 400 }, // Landscape (3:2)
      { width: 550, height: 400 }, // Slightly wider landscape
      { width: 700, height: 450 }, // Wider landscape
      { width: 450, height: 700 }, // Taller portrait
    ],
  };

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToNextImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const goToPrevImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  // Animation variants
  // const fadeInUp: Variants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 60,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: [0.25, 0.46, 0.45, 0.94] as const,
  //     },
  //   },
  // };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const lightboxImageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  };

  return (
    <section className="py-6 md:px-6 px-3 relative overflow-hidden">
      <div className="relative z-10 ">
        {/* <motion.div
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-center tracking-tight leading-tight"
            variants={fadeInUp}
            dangerouslySetInnerHTML={{ __html: t('gallery.title') }}
          />
          <motion.p
            className="text-center font-narrow w-full sm:w-4/5 md:w-3/5 mx-auto my-4 sm:my-6 md:mb-12 lg:mb-20 text-sm sm:text-base"
            variants={fadeInUp}
          >
            {t('gallery.description')}
          </motion.p>
        </motion.div> */}
        <motion.div
          ref={galleryRef}
          className="columns-2 xs:columns-3 sm:columns-4 md:columns-3 lg:columns-4 gap-2 sm:gap-3 md:gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate={galleryInView ? 'visible' : 'hidden'}
        >
          {images.map((src, index) => {
            const randomIndex = Math.floor(Math.random() * aspectRatios.sm.length);
            return (
              <motion.div
                key={index}
                className="mb-2 sm:mb-3 md:mb-4 overflow-hidden rounded-none shadow-lg break-inside-avoid cursor-pointer relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.03, zIndex: 1, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => openLightbox(index)}
              >
                {/* Mobile (sm) */}
                <div className="block sm:hidden">
                  <Image
                    src={src || '/placeholder.svg'}
                    alt={`Galeriebild ${index + 1}`}
                    width={aspectRatios.sm[randomIndex].width}
                    height={aspectRatios.sm[randomIndex].height}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:brightness-90"
                  />
                </div>
                {/* Small tablet (md) */}
                <div className="hidden sm:block md:hidden">
                  <Image
                    src={src || '/placeholder.svg'}
                    alt={`Galeriebild ${index + 1}`}
                    width={aspectRatios.md[randomIndex].width}
                    height={aspectRatios.md[randomIndex].height}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:brightness-90"
                  />
                </div>
                {/* Tablet (lg) */}
                <div className="hidden md:block lg:hidden">
                  <Image
                    src={src || '/placeholder.svg'}
                    alt={`Galeriebild ${index + 1}`}
                    width={aspectRatios.lg[randomIndex].width}
                    height={aspectRatios.lg[randomIndex].height}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:brightness-90"
                  />
                </div>
                {/* Desktop (xl) - original design */}
                <div className="hidden lg:block">
                  <Image
                    src={src || '/placeholder.svg'}
                    alt={`Galeriebild ${index + 1}`}
                    width={aspectRatios.xl[randomIndex].width}
                    height={aspectRatios.xl[randomIndex].height}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:brightness-90"
                  />
                </div>
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-lg"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary/70 bg-opacity-90 p-2 sm:p-4 backdrop-blur-sm"
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeLightbox}
          >
            <motion.div
              key={images[currentImageIndex]}
              className="relative max-w-full max-h-full flex items-center justify-center"
              variants={lightboxImageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentImageIndex] || '/placeholder.svg'}
                alt={`Vollansicht von Galeriebild ${currentImageIndex + 1}`}
                width={1600}
                height={1000}
                className="max-w-full max-h-[90vh] sm:max-h-[93.5vh] object-contain rounded-none shadow-2xl border-2 border-white/20"
                placeholder="empty"
              />
              {images.length > 1 && (
                <>
                  <motion.button
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20 pb-1 sm:pb-2"
                    onClick={goToPrevImage}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 }}
                  >
                    &#8249;
                  </motion.button>
                  <motion.button
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20 pb-1 sm:pb-2"
                    onClick={goToNextImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.2 }}
                  >
                    &#8250;
                  </motion.button>
                </>
              )}
              <motion.button
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white text-xl sm:text-2xl md:text-3xl font-light px-1 sm:px-2 py-1 rounded-none bg-red-800/80 hover:bg-red-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20"
                onClick={closeLightbox}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 }}
              >
                &times;
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
