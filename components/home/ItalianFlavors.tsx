'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { AnimatedText } from '../animation/text/AnimatedText';

const ItalianFlavors = () => {
  const containerRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const secondImageRef = useRef<HTMLDivElement>(null);

  // Update the parallax setup
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  // Intersection observers for animations
  const textInView = useInView(textRef, { once: true, margin: '-100px' });

  const secondImageInView = useInView(secondImageRef, { once: true, margin: '-50px' });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const imageRevealVariants = {
    hidden: {
      clipPath: 'inset(100% 0% 0% 0%)',
      y: 100,
    },
    visible: {
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
    <section ref={containerRef} className="px-3 sm:px-4 md:px-6 pb-20 sm:pb-28 md:pb-32 lg:pb-40">
      {/* Top Images Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        <div className="relative overflow-hidden">
          <motion.div
            ref={secondImageRef}
            variants={imageRevealVariants}
            initial="hidden"
            animate={secondImageInView ? 'visible' : 'hidden'}
            className="w-full h-full"
          >
            <Image
              src="/assets/italian-flavors/06-Il-Bambini-Club.jpg"
              width={400}
              className="w-full aspect-[4/3] sm:aspect-[3/2] object-cover"
              height={300}
              alt="Authentic Italian dishes"
            />
          </motion.div>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            ref={secondImageRef}
            variants={imageRevealVariants}
            initial="hidden"
            animate={secondImageInView ? 'visible' : 'hidden'}
            className="w-full h-full"
          >
            <Image
              src="/assets/italian-flavors/07-Il-Bambini-Club.jpg"
              width={400}
              className="w-full aspect-[4/3] sm:aspect-[3/2] object-cover"
              height={300}
              alt="Authentic Italian dishes"
            />
          </motion.div>
        </div>
      </div>

      {/* Text Content */}
      <motion.div
        ref={textRef}
        className="mt-12 sm:mt-16 md:mt-20 lg:mt-28"
        variants={staggerContainer}
        initial="hidden"
        animate={textInView ? 'visible' : 'hidden'}
      >
        <h2 className="">
          <AnimatedText
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase font-bold w-full sm:w-4/5 md:w-3/4 lg:w-3/5 mx-auto text-center leading-tight sm:leading-snug md:leading-normal lg:leading-16"
            text={['Italian Finest Flavors']}
          ></AnimatedText>
        </h2>
        <motion.p
          className="text-center font-narrow pt-4 sm:pt-5 md:pt-6 w-full sm:w-4/5 md:w-3/4 lg:w-3/5 mx-auto text-sm sm:text-base md:text-lg"
          variants={fadeInUp}
        >
          The cuisine at BigSpontino restaurants tells a narrative of flavors, with each plate
          representing a chapter from the heart of Italy&apos;s culinary traditions. Classic dishes
          such as Tagliatelle Al Tartufo, Pistachio Pesto Trofie, and the iconic Milanese Cutlet are
          adorned with the finest harvests from Italian soils. Meanwhile, the theatrics of our
          artisanal pizza oven unveil crusts that combine the ethereal fluff of Naples with the
          crisp whisper of Rome. The dining experience is then completed with a selection of
          generous Italian desserts.
        </motion.p>
      </motion.div>

      {/* Bottom Image with Parallax */}
      <div
        ref={parallaxRef}
        className="mt-12 sm:mt-16 md:mt-20 lg:mt-28 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-[120%] will-change-transform"
        >
          <Image
            src="/assets/bambini_club8.jpg"
            className="w-full h-full object-cover"
            alt="Italian restaurant ambiance"
            fill
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ItalianFlavors;
