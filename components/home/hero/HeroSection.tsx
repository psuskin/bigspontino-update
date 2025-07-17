'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  //   {
  //     id: 1,
  //     image: '/assets/00-Paris-Bambini.jpg',
  //     title: 'Paris Bambini',
  //     description: 'Elegant Parisian dining experience with sophisticated ambiance',
  //   },
  {
    id: 2,
    image: '/assets/01-Il-Bambini-Club.jpg',
    title: 'Il Bambini Club',
    description: 'Intimate Italian dining with authentic culinary traditions',
  },
  {
    id: 3,
    image: '/assets/02-Il-Bambini-Club.jpg',
    title: 'Private Dining Room',
    description: 'Exclusive setting perfect for special occasions and celebrations',
  },
  {
    id: 4,
    image: '/assets/08-Il-Bambini-Club.jpg',
    title: "Chef's Table Experience",
    description: 'Experience culinary artistry up close with our master chefs',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

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
    <div className="relative w-[97.2%] mx-auto h-[93.5vh] overflow-hidden bg-black">
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
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />

              {/* Simple dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content Overlay */}
              <div className="absolute top-8 left-8">
                <motion.div
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="text-start text-white max-w-2xl"
                >
                  <h2 className="text-4xl md:text-lg font-semibold italic ">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-lg md:text-xs opacity-90 font-narrow -mt-1.5">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-8 left-10 z-10">
          <button
            onClick={prevSlide}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200"
          >
            <ChevronLeft className="w-3 h-3 text-white mx-auto" />
          </button>
        </div>

        <div className="absolute bottom-8 left-20 z-10">
          <button
            onClick={nextSlide}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200"
          >
            <ChevronRight className="w-3 h-3 text-white mx-auto" />
          </button>
        </div>

        {/* Pagination Dots */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"> */}
        <div className="absolute bottom-8 right-10 z-10 flex items-center space-x-2">
          {/* Play/Pause Button */}
          <div className=" z-10 h-auto pt-1.5">
            <button
              onClick={togglePlayPause}
              className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200"
            >
              {isPlaying ? (
                <Pause className="w-3 h-3 text-white mx-auto" />
              ) : (
                <Play className="w-3 h-3 text-white mx-auto " />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <button className="text-lg font-semibold text-white rounded-full transition-all duration-200">
            EXPLORE
          </button>
          <motion.svg
            fill="#fff"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="20px"
            height="20px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
            animate={{ y: [0, -6, 0] }} // Animate Y position: start, up 10px, back to start
            transition={{
              duration: 1.5, // Animation duration
              ease: 'easeInOut', // Easing function
              repeat: Number.POSITIVE_INFINITY, // Repeat indefinitely
              repeatType: 'loop', // Loop the animation
            }}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M78.466,35.559L50.15,63.633L22.078,35.317c-0.777-0.785-2.044-0.789-2.828-0.012s-0.789,2.044-0.012,2.827L48.432,67.58 c0.365,0.368,0.835,0.563,1.312,0.589c0.139,0.008,0.278-0.001,0.415-0.021c0.054,0.008,0.106,0.021,0.16,0.022 c0.544,0.029,1.099-0.162,1.515-0.576l29.447-29.196c0.785-0.777,0.79-2.043,0.012-2.828S79.249,34.781,78.466,35.559z"></path>
              </g>
            </g>
          </motion.svg>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-10 font-narrow">
        <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400' : 'bg-red-400'}`} />
          <span className="text-white/90 text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-10">
        <motion.div
          className="h-full bg-white/60"
          initial={{ width: '0%' }}
          animate={{ width: isPlaying ? '100%' : '0%' }}
          transition={{
            duration: 5,
            ease: 'linear',
            repeat: isPlaying ? Infinity : 0,
          }}
        />
      </div> */}
    </div>
  );
}
