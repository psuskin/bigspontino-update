import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import type * as React from 'react';
import { useCallback, useState } from 'react'; // Import useCallback for memoized functions

const images = [
  '/assets/00-Paris-Bambini.jpg',
  '/assets/menus/brunch/1.jpg',
  '/assets/08-Il-Bambini-Club.jpg',
  '/assets/menus/bar/3.jpg',
  '/assets/menus/brunch/2.jpg',
  '/assets/menus/bar/1.jpg',
  '/assets/menus/bar/2.jpg',
  '/assets/menus/brunch/1.jpg',
  '/assets/02-Il-Bambini-Club.jpg',
  '/assets/menus/lunch/1.jpg',
  '/assets/menus/lunch/2.jpg',
  '/assets/01-Il-Bambini-Club.jpg',
  '/assets/menus/lunch/1.jpg',
  '/assets/menus/bar/4.jpg',
];

const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // Store the index of the current image, not just the src
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Responsive aspect ratios - smaller for mobile, medium for tablet, original for lg+
  const aspectRatios = {
    mobile: [
      { width: 200, height: 200 }, // Square
      { width: 160, height: 240 }, // Portrait (2:3)
      { width: 160, height: 220 }, // Slightly taller portrait
      { width: 240, height: 160 }, // Landscape (3:2)
      { width: 220, height: 160 }, // Slightly wider landscape
      { width: 280, height: 180 }, // Wider landscape
      { width: 180, height: 280 }, // Taller portrait
    ],
    tablet: [
      { width: 300, height: 300 }, // Square
      { width: 240, height: 360 }, // Portrait (2:3)
      { width: 240, height: 330 }, // Slightly taller portrait
      { width: 360, height: 240 }, // Landscape (3:2)
      { width: 330, height: 240 }, // Slightly wider landscape
      { width: 420, height: 270 }, // Wider landscape
      { width: 270, height: 420 }, // Taller portrait
    ],
    desktop: [
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
    // Reset index after closing if desired, or keep it for next open
    // setCurrentImageIndex(0);
  }, []);

  const goToNextImage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent closing lightbox
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    },
    [images.length],
  );

  const goToPrevImage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent closing lightbox
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    },
    [images.length],
  );

  // Animation variants for individual gallery items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Animation variants for the lightbox overlay
  const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  // Animation variants for the image inside the lightbox (with a key prop change)
  const lightboxImageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.8,
      opacity: 0,
    },
  };

  return (
    <section className="py-12 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold uppercase text-center  tracking-tight leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Moments Captured, <br className="sm:hidden" /> Stories Unfold.
        </motion.h2>
        <p className="text-center font-narrow w-3/5 mx-auto mb-8 md:mb-20 ">
          immerse yourself in the vibrant atmosphere and culinary delights of Big Spuntino through
          our visual journey.
        </p>

        <motion.div
          className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-4"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.07,
          }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
        >
          {images.map((src, index) => {
            const randomIndex = Math.floor(Math.random() * aspectRatios.mobile.length);

            return (
              <motion.div
                key={index}
                className="mb-2 md:mb-4 overflow-hidden rounded-none shadow-lg break-inside-avoid cursor-pointer relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.03, zIndex: 1, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => openLightbox(index)}
              >
                {/* Mobile (default) - 2 columns */}
                <div className="block md:hidden">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={aspectRatios.mobile[randomIndex].width}
                    height={aspectRatios.mobile[randomIndex].height}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:brightness-90"
                  />
                </div>

                {/* Tablet - 3 columns */}
                <div className="hidden md:block lg:hidden">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={aspectRatios.tablet[randomIndex].width}
                    height={aspectRatios.tablet[randomIndex].height}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:brightness-90"
                  />
                </div>

                {/* Desktop - 4 columns (original design) */}
                <div className="hidden lg:block">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={aspectRatios.desktop[randomIndex].width}
                    height={aspectRatios.desktop[randomIndex].height}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:brightness-90"
                  />
                </div>

                <div className="absolute inset-0 bg-black/10 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-lg"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox Overlay with Framer Motion */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 bg-opacity-90 p-4 backdrop-blur-sm"
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeLightbox}
          >
            <motion.div
              key={images[currentImageIndex]} // IMPORTANT: Change key to force re-render/animation
              className="relative max-w-full max-h-full flex items-center justify-center"
              variants={lightboxImageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image container
            >
              <Image
                src={images[currentImageIndex]} // Use the currentImageIndex to get the src
                alt={`Full view of gallery image ${currentImageIndex + 1}`}
                width={1600}
                height={1000}
                className="max-w-full max-h-[93.5vh] object-contain rounded-none shadow-2xl border-2 border-white/20"
                placeholder="empty"
              />

              {/* Navigation Buttons (Left/Right Arrows) */}
              {images.length > 1 && ( // Only show buttons if there's more than one image
                <>
                  <motion.button
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20 pb-1 md:pb-2"
                    onClick={goToPrevImage}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 }}
                  >
                    &#8249; {/* Unicode for left arrow */}
                  </motion.button>
                  <motion.button
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20 pb-1 md:pb-2"
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

              {/* Close button */}
              <motion.button
                className="absolute top-2 md:top-4 right-2 md:right-4 text-white text-2xl md:text-4xl font-light px-1 md:px-2 py-1 rounded-none bg-red-800/80 hover:bg-red-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20"
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
