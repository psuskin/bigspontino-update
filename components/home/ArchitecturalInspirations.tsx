'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ArchitecturalInspirations = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const secondImageRef = useRef<HTMLDivElement>(null);
  const thirdImageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observers for animations - more lenient margins for mobile
  const textInView = useInView(textRef, {
    once: true,
    margin: isMobile ? '-50px' : '-100px',
  });

  const secondImageInView = useInView(secondImageRef, {
    once: true,
    margin: isMobile ? '-20px' : '-50px',
  });

  const thirdImageInView = useInView(thirdImageRef, {
    once: true,
    margin: isMobile ? '-20px' : '-50px',
  });

  // Animation variants - simplified for mobile
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  // Simplified animation for mobile to avoid clipPath issues
  const imageRevealVariants = {
    hidden: isMobile
      ? {
          opacity: 0,
          y: 30,
        }
      : {
          clipPath: 'inset(100% 0% 0% 0%)',
          y: 100,
        },
    visible: isMobile
      ? {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          },
        }
      : {
          clipPath: 'inset(0% 0% 0% 0%)',
          y: 0,
          transition: {
            clipPath: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1] as const,
            },
            y: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1] as const,
            },
          },
        },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="architectural-inspirations"
      className="px-4 mt-1 md:mt-6 sm:px-6 pt-3 md:pt-6 pb-16 md:pb-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        {/* First Column */}
        <div className="grid gap-1">
          <motion.div
            ref={textRef}
            className="p-6 md:p-10 lg:p-16 border-2 aspect-auto lg:aspect-[11/5]"
            variants={staggerContainer}
            initial="hidden"
            animate={textInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold leading-tight lg:leading-16"
              variants={fadeInUp}
            >
              {t('architecture.title')}
            </motion.h2>
            <motion.p className="font-narrow pt-4 text-sm sm:text-base" variants={fadeInUp}>
              {t('architecture.description')}
            </motion.p>
          </motion.div>
          <div className={`aspect-[3/2] relative ${isMobile ? '' : 'overflow-hidden'}`}>
            <motion.div
              ref={thirdImageRef}
              variants={imageRevealVariants}
              initial="visible"
              animate={thirdImageInView ? 'visible' : 'hidden'}
              className="w-full h-full"
            >
              <Image
                src="/assets/architecturalInspirations/1.jpg"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                alt="Bambini Paris Interior"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                quality={75}
              />
            </motion.div>
          </div>
        </div>

        {/* Second Column */}
        <div className="grid gap-1 mt-4 lg:mt-0">
          <div className={`aspect-[11/5] relative ${isMobile ? '' : 'overflow-hidden'}`}>
            <motion.div
              ref={secondImageRef}
              variants={imageRevealVariants}
              initial="visible"
              animate={secondImageInView ? 'visible' : 'hidden'}
              className="w-full h-full"
            >
              <Image
                src="/assets/architecturalInspirations/3.jpg"
                width={800}
                height={400}
                className="w-full h-full object-cover"
                alt="Cocktail Mr Lemon"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                quality={75}
              />
            </motion.div>
          </div>
          <div className={`aspect-[3/2] relative ${isMobile ? '' : 'overflow-hidden'}`}>
            <motion.div
              ref={thirdImageRef}
              variants={imageRevealVariants}
              initial="visible"
              animate={thirdImageInView ? 'visible' : 'hidden'}
              className="w-full h-full"
            >
              <Image
                src="/assets/architecturalInspirations/2.jpg"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                alt="Antipasti by Joann"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalInspirations;
