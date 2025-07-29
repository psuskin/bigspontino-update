'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ItalianDaytimeBar = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const textInView = useInView(textRef, {
    once: true,
    margin: isMobile ? '-30px' : '-100px',
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: isMobile ? 30 : 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
      },
    },
  };

  return (
    <section id="italian-daytime-bar" ref={containerRef} className="relative overflow-hidden">
      {/* Text Section */}
      <div className="widget-container widget-container--bleed line-divider-widget line-divider-widget--pattern">
        <hr className="line-divider" />
      </div>
      <motion.div
        ref={textRef}
        className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-16 lg:py-16 pb-0 xl:px-20
                   min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[29rem]
                   flex flex-col justify-center text-secondary  mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={textInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl pt-10 md:pt-14 lg:text-5xl xl:text-6xl
                     uppercase  leading-tight
                     sm:leading-tight md:leading-tight lg:leading-tight xl:leading-16
                     max-w-full break-words lg:w-4/6 mx-auto"
          variants={fadeInUp}
        >
          {t('architecture.title')}
        </motion.h2>
        <motion.p
          className="font-narrow pt-6 sm:pt-10 text-sm sm:text-base md:text-lg
                     leading-relaxed lg:w-4/6 mx-auto"
          variants={fadeInUp}
        >
          {t('architecture.description')}
        </motion.p>
      </motion.div>

      {/* Image Section with Parallax */}
      <div
        ref={imageRef}
        className="relative mt-16 sm:mx-6 lg:mt-16 xl:mt-16
                   h-[400px] lg:h-[500px] xl:h-[600px]
                   overflow-hidden"
      >
        {/* Parallax Image Container */}
        <motion.div
          style={{ y: isMobile ? undefined : y }}
          className="relative w-full h-[120%] -top-[10%]"
        >
          <Image
            src="/assets/italian.jpeg"
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

export default ItalianDaytimeBar;
