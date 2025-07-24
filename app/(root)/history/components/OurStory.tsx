'use client';
import Newsletter from '@/components/home/Newsletter';
import { motion, useInView, type Variants } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const OurStory = () => {
  const { t } = useTranslation();
  const history = t('history', { returnObjects: true }) as {
    title: string;
    subtitle: string;
    paragraphs: string[];
  };

  // Refs for intersection observers
  const headerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  // Intersection observers for animations
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const imagesInView = useInView(imagesRef, { once: true, margin: '-50px' });
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });
  const newsletterInView = useInView(newsletterRef, { once: true, margin: '-100px' });

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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
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
    <section className="py-12 md:py-20 lg:py-32 px-4 sm:px-6">
      <motion.div
        ref={headerRef}
        className=""
        variants={staggerContainer}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase font-bold w-full md:w-4/5 lg:w-3/5 mx-auto text-center leading-tight sm:leading-snug lg:leading-16"
          variants={fadeInUp}
        >
          {history.title}
        </motion.h2>
        <motion.p
          className="text-center font-narrow pt-4 sm:pt-6 text-sm sm:text-base w-full md:w-4/5 lg:w-3/5 mx-auto"
          variants={fadeInUp}
        >
          {history.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        ref={imagesRef}
        className="pt-12 sm:pt-20 lg:pt-28"
        variants={staggerContainer}
        initial="hidden"
        animate={imagesInView ? 'visible' : 'hidden'}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <motion.div variants={imageRevealVariants}>
            <Image
              src="/assets/history/1.jpg"
              width={400}
              height={300}
              className="w-full aspect-3/2 object-cover"
              alt="Pizza"
              priority
            />
          </motion.div>
          <motion.div variants={imageRevealVariants}>
            <Image
              src="/assets/history/h2image.jpg"
              width={400}
              className="w-full aspect-3/2 object-cover"
              height={300}
              alt="Pizza"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={storyRef}
        className="py-12 sm:py-20 lg:py-28"
        variants={textStaggerVariants}
        initial="hidden"
        animate={storyInView ? 'visible' : 'hidden'}
      >
        {history.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-sm sm:text-base lg:text-3xl text-gray-700 text-center mb-4 sm:mb-6 lg:mb-8 w-full md:w-4/5 lg:w-3/5 mx-auto"
            variants={fadeInUp}
          >
            {index === 0 && <i className="font-bold"> Siamo aperti </i>}
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        ref={newsletterRef}
        variants={fadeInUp}
        initial="hidden"
        animate={newsletterInView ? 'visible' : 'hidden'}
      >
        <Newsletter />
      </motion.div>
    </section>
  );
};

export default OurStory;
