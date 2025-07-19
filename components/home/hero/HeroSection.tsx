'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Slide {
  id: number;
  image: string;
  titleKey: string;
  descriptionKey: string;
}

const slides: Slide[] = [
  {
    id: 2,
    image: '/assets/bambiniclub01.jpg',
    titleKey: 'hero.slide1.title',
    descriptionKey: 'hero.slide1.description',
  },
  {
    id: 3,
    image: '/assets/bambiniclub02.jpg',
    titleKey: 'hero.slide2.title',
    descriptionKey: 'hero.slide2.description',
  },
  {
    id: 4,
    image: '/assets/bambini_club8.jpg',
    titleKey: 'hero.slide3.title',
    descriptionKey: 'hero.slide3.description',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { t } = useTranslation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const slideVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <div className="relative w-full mx-auto h-[80vh] sm:h-[85vh] lg:h-[93.5vh] lg:w-[97.2%] overflow-hidden bg-black">
      {/* Main Slider Container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                width={1920}
                height={1080}
                src={slides[currentSlide].image}
                alt={t(slides[currentSlide].titleKey)}
                className="w-full h-full object-cover"
                priority
              />

              {/* Simple dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content Overlay */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8">
                <motion.div
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="text-start text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl"
                >
                  <h2 className="text-xl sm:text-2xl  italic">
                    {t(slides[currentSlide].titleKey)}
                  </h2>
                  <p className="text-xs sm:text-sm  opacity-90 font-narrow mt-1 sm:mt-0.5 lg:-mt-1.5">
                    {t(slides[currentSlide].descriptionKey)}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-10 z-10">
          <button
            onClick={prevSlide}
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center justify-center"
          >
            <ChevronLeft className="w-3 h-3 text-white" />
          </button>
        </div>

        <div className="absolute bottom-4 left-12 sm:bottom-6 sm:left-14 lg:bottom-8 lg:left-20 z-10">
          <button
            onClick={nextSlide}
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center justify-center"
          >
            <ChevronRight className="w-3 h-3 text-white" />
          </button>
        </div>

        {/* Pagination Dots and Play/Pause */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-10 z-10 flex items-center space-x-2">
          {/* Play/Pause Button */}
          <div className="z-10">
            <button
              onClick={togglePlayPause}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center justify-center"
            >
              {isPlaying ? (
                <Pause className="w-3 h-3 text-white" />
              ) : (
                <Play className="w-3 h-3 text-white" />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1.5 sm:px-3 sm:py-2 border border-white/20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <button className="text-sm sm:text-base lg:text-lg font-semibold text-white rounded-full transition-all duration-200">
            {t('hero.explore')}
          </button>
          <motion.svg
            fill="#fff"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="16px"
            height="16px"
            className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'loop',
            }}
          >
            <g>
              <path d="M78.466,35.559L50.15,63.633L22.078,35.317c-0.777-0.785-2.044-0.789-2.828-0.012s-0.789,2.044-0.012,2.827L48.432,67.58 c0.365,0.368,0.835,0.563,1.312,0.589c0.139,0.008,0.278-0.001,0.415-0.021c0.054,0.008,0.106,0.021,0.16,0.022 c0.544,0.029,1.099-0.162,1.515-0.576l29.447-29.196c0.785-0.777,0.79-2.043,0.012-2.828S79.249,34.781,78.466,35.559z"></path>
            </g>
          </motion.svg>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-10 font-narrow">
        <div className="flex items-center space-x-2 sm:space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-2 py-0.5 sm:px-3 sm:py-1 border border-white/20">
          <div
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
              isPlaying ? 'bg-green-400' : 'bg-red-400'
            }`}
          />
          <span className="text-white/90 text-xs sm:text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}
