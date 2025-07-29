'use client';
import { motion, useInView, useScroll, useTransform, type Variants } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const OurStory = () => {
  const { t } = useTranslation();
  const history = t('history', { returnObjects: true }) as {
    title: string;
    subtitle: string;
    paragraphs: string[];
  };

  // Refs for intersection observers
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observers for animations
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });

  // Parallax scroll effect - fixed by properly setting up the container ref
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

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

  const textStaggerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="py-12 md:py-20 pb-0 lg:pb-0 md:pb-0 lg:py-32 px-4 sm:px-6"
    >
      <motion.div
        ref={headerRef}
        className=""
        variants={staggerContainer}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase  w-full md:w-4/5 lg:w-3/5 mx-auto text-center leading-tight sm:leading-snug lg:leading-16"
          variants={fadeInUp}
        >
          Siamo aperti
        </motion.h2>
      </motion.div>

      <motion.div
        ref={storyRef}
        className="py-12  sm:py-20 lg:pb-10 lg:py-28"
        variants={textStaggerVariants}
        initial="hidden"
        animate={storyInView ? 'visible' : 'hidden'}
      >
        {history.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-sm sm:text-base lg:text-3xl text-secondary text-center mb-4 sm:mb-6 lg:mb-8 w-full md:w-4/5 lg:w-3/5 mx-auto"
            variants={fadeInUp}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      {/* Image Section with Parallax - fixed by ensuring proper container ref */}
      <div
        ref={imageRef}
        className="relative mt-16  lg:mt-16 xl:mt-16
                   h-[400px] lg:h-[500px] xl:h-[600px]
                   overflow-hidden"
      >
        {/* Parallax Image Container */}
        <motion.div
          style={{ y: isMobile ? 0 : y }} // Fixed: Disable parallax on mobile
          className="relative w-full h-[120%] -top-[10%]"
        >
          <Image
            src="/assets/photos/3.jpg"
            fill
            style={{ objectFit: 'cover' }}
            alt="A lively restaurant scene"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
            quality={85}
          />

          {/* Optional overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>

      {/* Optional: Add some spacing after the image */}
      <div className="h-6" />
    </section>
  );
};

export default OurStory;
