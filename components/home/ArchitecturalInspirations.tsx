'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const ArchitecturalInspirations = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const secondImageRef = useRef<HTMLDivElement>(null);
  const thirdImageRef = useRef<HTMLDivElement>(null);

  // Intersection observers for animations
  const textInView = useInView(textRef, { once: true, margin: '-100px' });

  const secondImageInView = useInView(secondImageRef, { once: true, margin: '-50px' });
  const thirdImageInView = useInView(thirdImageRef, { once: true, margin: '-50px' });

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
          <div className="aspect-[3/2] relative overflow-hidden">
            <motion.div
              ref={thirdImageRef}
              variants={imageRevealVariants}
              initial="hidden"
              animate={thirdImageInView ? 'visible' : 'hidden'}
              className="w-full h-full"
            >
              <Image
                src="/assets/architectural-inspirations/11-Bambini-Paris.jpg"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                alt="Antipasti"
                onError={(e) => {
                  console.error('Image failed to load:', e.currentTarget.src);
                }}
                onLoad={() => {
                  console.log(
                    'Image loaded successfully:',
                    '/assets/architectural-inspirations/11-Bambini-Paris.jpg',
                  );
                }}
              />
            </motion.div>
          </div>
        </div>
        {/* Second Column */}
        <div className="grid gap-1 mt-4 lg:mt-0">
          <div className="aspect-[11/5] relative overflow-hidden">
            <motion.div
              ref={secondImageRef}
              variants={imageRevealVariants}
              initial="hidden"
              animate={secondImageInView ? 'visible' : 'hidden'}
              className="w-full h-full"
            >
              <Image
                src="/assets/architectural-inspirations/Cocktail_Mr_Lemon.jpg"
                width={800}
                height={400}
                className="w-full h-full object-cover"
                alt="Cocktail Mr Lemon"
                onError={(e) => {
                  console.error('Image failed to load:', e.currentTarget.src);
                }}
                onLoad={() => {
                  console.log(
                    'Image loaded successfully:',
                    '/assets/architectural-inspirations/Cocktail_Mr_Lemon.jpg',
                  );
                }}
              />
            </motion.div>
          </div>
          <div className="aspect-[3/2] relative overflow-hidden">
            <motion.div
              ref={thirdImageRef}
              variants={imageRevealVariants}
              initial="hidden"
              animate={thirdImageInView ? 'visible' : 'hidden'}
              className="w-full h-full"
            >
              <Image
                src="/assets/architectural-inspirations/Antipasti_credit_Joann.jpg"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                alt="Antipasti"
                onError={(e) => {
                  console.error('Image failed to load:', e.currentTarget.src);
                }}
                onLoad={() => {
                  console.log(
                    'Image loaded successfully:',
                    '/assets/architectural-inspirations/Antipasti_credit_Joann.jpg',
                  );
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalInspirations;
