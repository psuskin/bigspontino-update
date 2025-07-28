'use client';

import type React from 'react';

import { AnimatedText } from '@/components/animation/text/AnimatedText';
import { AnimatePresence, motion, useInView, type Variants } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Event {
  src: string;
  dateKey: string;
  timeKey: string;
  titleKey: string;
  descriptionKey: string;
  aspectRatio: string;
}

const EventSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Refs for intersection observers
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  // const footerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  // Intersection observers for animations
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const galleryInView = useInView(galleryRef, { once: true, margin: '-50px' });
  // const footerInView = useInView(footerRef, { once: true, margin: '-100px' });

  // const handleContactClick = () => {
  //   window.location.href = 'mailto:mail@bigspuntino.de?subject=Event Inquiry';
  // };

  const events: Event[] = [
    {
      src: '/assets/events/1.jpg',
      dateKey: 'events.eventList.0.date',
      timeKey: 'events.eventList.0.time',
      titleKey: 'events.eventList.0.title',
      descriptionKey: 'events.eventList.0.description',
      aspectRatio: 'aspect-4/3',
    },
    {
      src: '/assets/events/2.jpg',
      dateKey: 'events.eventList.1.date',
      timeKey: 'events.eventList.1.time',
      titleKey: 'events.eventList.1.title',
      descriptionKey: 'events.eventList.1.description',
      aspectRatio: 'aspect-square',
    },
    {
      src: '/assets/events/3.jpg',
      dateKey: 'events.eventList.2.date',
      timeKey: 'events.eventList.2.time',
      titleKey: 'events.eventList.2.title',
      descriptionKey: 'events.eventList.2.description',
      aspectRatio: 'aspect-5/3',
    },
    {
      src: '/assets/events/4.jpg',
      dateKey: 'events.eventList.3.date',
      timeKey: 'events.eventList.3.time',
      titleKey: 'events.eventList.3.title',
      descriptionKey: 'events.eventList.3.description',
      aspectRatio: 'aspect-6/5',
    },
  ];

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToNextImage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % events.length);
    },
    [events.length],
  );

  const goToPrevImage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    },
    [events.length],
  );

  // Animation variants
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageRevealVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // const buttonVariants: Variants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 30,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: [0.25, 0.46, 0.45, 0.94] as const,
  //     },
  //   },
  // };

  // Animation variants for the lightbox
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-40 px-4 sm:px-6 lg:px-6">
      <motion.div
        ref={headerRef}
        className=""
        variants={staggerContainer}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={fadeInUp}>
          <AnimatedText
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase font-bold w-full md:w-4/5 lg:w-3/5 mx-auto text-center leading-snug sm:leading-tight lg:leading-16"
            text={['La Vita è Bella']}
          ></AnimatedText>
        </motion.h2>
        <motion.p
          className="text-center font-narrow py-4 lg:py-6 w-full md:w-4/5 lg:w-3/5 mx-auto text-sm md:text-xl"
          variants={fadeInUp}
        >
          {t('events.heroDescription')}
        </motion.p>
        {/* Contatto Button */}
        {/* <div className="flex items-center justify-center mt-2 sm:mt-4">
          <motion.button
            onClick={handleContactClick}
            className="group relative inline-flex h-10 sm:h-12 md:h-14 lg:h-16 items-center cursor-pointer justify-center overflow-hidden rounded-none font-medium"
            variants={buttonVariants}
          >
            <div className="inline-flex h-10 sm:h-12 md:h-14 lg:h-16 translate-y-0 items-center justify-center bg-[#ce2d19] text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase px-6 sm:px-8 md:px-12 lg:px-16 text-white transition group-hover:-translate-y-[150%] rounded-none">
              {t('events.contactButton')}
            </div>
            <div className="absolute inline-flex h-10 sm:h-12 md:h-14 lg:h-16 w-full translate-y-[100%] items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase bg-black px-6 sm:px-8 md:px-12 lg:px-16 text-neutral-50 transition duration-300 group-hover:translate-y-0 rounded-none">
              {t('events.contactButton')}
            </div>
          </motion.button>
        </div> */}
      </motion.div>
      <motion.div
        ref={galleryRef}
        className="pt-10 sm:pt-12 md:pt-14 lg:pt-28"
        variants={staggerContainer}
        initial="hidden"
        animate={galleryInView ? 'visible' : 'hidden'}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 lg:gap-1">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
              variants={imageRevealVariants}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={event.src || '/placeholder.svg'}
                  width={400}
                  height={300}
                  className={`w-full ${event.aspectRatio} object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90`}
                  alt={t(event.titleKey)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white uppercase px-3 py-1 text-xs sm:text-sm font-medium rounded">
                    Big Spuntino
                  </div>
                </div>
              </div>
              {/* <div className="pt-2 sm:pt-3 lg:pt-2 ps-2 sm:ps-3 font-narrow font-semibold opacity-65">
                <code className="text-xs lg:text-sm text-gray-600">
                  {t(event.dateKey)} • {t(event.timeKey)}
                </code>
              </div> */}
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Relevant text added below the image gallery */}
      {/* <motion.div
        ref={footerRef}
        className="pt-8 sm:pt-10 md:pt-12 lg:pt-16 text-center"
        variants={fadeInUp}
        initial="hidden"
        animate={footerInView ? 'visible' : 'hidden'}
      >
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 lg:mb-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
          {t('events.footerText')}
        </p>
      </motion.div> */}
      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 bg-opacity-90 p-2 sm:p-4 backdrop-blur-sm"
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeLightbox}
          >
            <motion.div
              key={events[currentImageIndex].src}
              className="relative max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-full flex flex-col items-center justify-center"
              variants={lightboxImageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={events[currentImageIndex].src || '/placeholder.svg'}
                alt={t(events[currentImageIndex].titleKey)}
                width={800}
                height={600}
                className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-none shadow-2xl border-2 border-white/20"
                placeholder="empty"
              />
              {/* Event Details */}

              {/* Navigation Buttons */}
              {events.length > 1 && (
                <>
                  <motion.button
                    className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-5xl w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20 pb-1 md:pb-2"
                    onClick={goToPrevImage}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 }}
                  >
                    &#8249;
                  </motion.button>
                  <motion.button
                    className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-5xl w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20 pb-1 md:pb-2"
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
                className="absolute top-1 sm:top-2 md:top-4 right-1 sm:right-2 md:right-4 text-white text-xl sm:text-2xl md:text-4xl font-light px-1 md:px-2 py-1 rounded-none bg-red-800/80 hover:bg-red-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20"
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

export default EventSection;
