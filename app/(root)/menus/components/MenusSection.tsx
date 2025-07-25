'use client';

import { AnimatedText } from '@/components/animation/text/AnimatedText';
import { motion, useInView, type Variants } from 'framer-motion';
import type React from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface Category {
  id: number;
  nameKey: string;
  // descriptionKey: string;
  images: string[];
  link: string;
}

interface CardLayoutProps {
  category: Category;
  index: number;
}

const MenusSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  const menuCategories: Category[] = [
    {
      id: 1,
      nameKey: 'menus.categories.brunch.name',
      // descriptionKey: 'menus.categories.brunch.description',
      images: [
        '/assets/menus/brunch/1.jpg',
        '/assets/menus/brunch/2.jpg',
        '/assets/menus/brunch/1.jpg',
      ],
      link: '/menu/brunch',
    },
    {
      id: 2,
      nameKey: 'menus.categories.lunch.name',
      // descriptionKey: 'menus.categories.lunch.description',
      images: [
        '/assets/menus/lunch/1.jpg',
        '/assets/menus/lunch/2.jpg',
        '/assets/menus/lunch/1.jpg',
      ],
      link: '/menu/lunch',
    },
    {
      id: 3,
      nameKey: 'menus.categories.dinner.name',
      // descriptionKey: 'menus.categories.dinner.description',
      images: [
        '/assets/menus/dinner/1.jpg',
        '/assets/menus/dinner/2.jpg',
        '/assets/menus/dinner/3.jpg',
      ],
      link: '/menu/dinner',
    },
    {
      id: 4,
      nameKey: 'menus.categories.bar.name',
      // descriptionKey: 'menus.categories.bar.description',
      images: [
        '/assets/menus/bar/1.jpg',
        '/assets/menus/bar/2.jpg',
        '/assets/menus/bar/3.jpg',
        '/assets/menus/bar/4.jpg',
        '/assets/menus/bar/5.jpg',
      ],
      link: '/menu/bar',
    },
  ];

  const handleMenuClick = () => {
    window.open(
      'https://www.ujamaaresort.org/wp-content/uploads/2018/01/Ujamaa-restaurant-menu.pdf',
      '_blank',
    );
  };

  // Animation variants with proper typing
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

  const imageRevealVariants: Variants = {
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

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
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

  // Card 1: 1:1 image + text + 9:16 image (3 columns)
  const Card1Layout: React.FC<CardLayoutProps> = ({ category }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();
    const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

    return (
      <motion.div
        ref={cardRef}
        className="w-full bg-amber-50 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1 overflow-hidden group"
        variants={cardVariants}
        initial="hidden"
        animate={cardInView ? 'visible' : 'hidden'}
      >
        {/* Left 1:1 Image - Full width on mobile, then responsive */}
        <div className="aspect-square h-full overflow-hidden relative md:col-span-1 lg:col-span-2">
          <motion.div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${category.images[0]})`,
            }}
            variants={imageRevealVariants}
            initial="hidden"
            animate={cardInView ? 'visible' : 'hidden'}
          />
        </div>
        {/* Middle Text Section - Full width on mobile, then responsive */}
        <motion.div
          className="bg-amber-50 z-10 w-full flex flex-col justify-center items-center text-black p-6 md:p-6 lg:p-8 md:col-span-1 lg:col-span-3 aspect-square md:aspect-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={cardInView ? 'visible' : 'hidden'}
        >
          <motion.h3
            className="text-sm md:text-base lg:text-lg font-light tracking-widest mb-2 opacity-90"
            variants={fadeInUp}
          >
            Big Spuntino
          </motion.h3>
          <motion.h2
            className="uppercase text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-wide text-center"
            variants={fadeInUp}
          >
            {t(category.nameKey)}
          </motion.h2>
          <motion.p
            className="text-center font-narrow text-sm md:text-base opacity-80 mb-4 md:mb-6 max-w-md px-2"
            variants={fadeInUp}
          >
            {/* {t(category.descriptionKey)} */}
          </motion.p>
          <motion.button
            onClick={handleMenuClick}
            className="group relative inline-flex cursor-pointer h-10 items-center justify-center overflow-hidden rounded-full border border-black font-narrow px-6 md:px-8 py-2"
            variants={fadeInUp}
          >
            <div className="inline-flex h-10 translate-y-0 items-center justify-center bg-transparent text-xs md:text-sm font-medium tracking-widest uppercase text-black transition group-hover:-translate-y-[150%]">
              {t('menus.viewMenu')}
            </div>
            <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-black text-xs md:text-sm font-medium tracking-widest uppercase text-white transition duration-300 group-hover:translate-y-0">
              {t('menus.viewMenu')}
            </div>
          </motion.button>
        </motion.div>
        {/* Right 9:16 Image - Hidden on mobile, then responsive */}
        <div className="hidden h-full md:block overflow-hidden relative md:col-span-1 lg:col-span-1 aspect-square md:aspect-[9/16]">
          <motion.div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${category.images[1]})`,
            }}
            variants={imageRevealVariants}
            initial="hidden"
            animate={cardInView ? 'visible' : 'hidden'}
          />
        </div>
      </motion.div>
    );
  };

  // Card 2: Two 9/16 images + one 1/1 text (3 columns)
  const Card2Layout: React.FC<CardLayoutProps> = ({ category }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

    return (
      <motion.div
        ref={cardRef}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-1 bg-amber-50 overflow-hidden group"
        variants={cardVariants}
        initial="hidden"
        animate={cardInView ? 'visible' : 'hidden'}
      >
        {/* First 9/16 Image - Full width on mobile */}
        <div className="aspect-square h-full overflow-hidden relative">
          <motion.div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${category.images[0]})`,
            }}
            variants={imageRevealVariants}
            initial="hidden"
            animate={cardInView ? 'visible' : 'hidden'}
          />
        </div>
        {/* Second 9/16 Image - Hidden on mobile */}
        <div className="hidden md:block h-full aspect-square overflow-hidden relative">
          <motion.div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${category.images[1]})`,
            }}
            variants={imageRevealVariants}
            initial="hidden"
            animate={cardInView ? 'visible' : 'hidden'}
          />
        </div>
        {/* Text Section (1/1) - Full width on mobile */}
        <motion.div
          className="bg-amber-50 z-10 w-full flex flex-col justify-center items-center text-black p-6 md:p-6 lg:p-8 aspect-square"
          variants={staggerContainer}
          initial="hidden"
          animate={cardInView ? 'visible' : 'hidden'}
        >
          <motion.h3
            className="text-sm md:text-base lg:text-lg font-light tracking-widest mb-2 opacity-90"
            variants={fadeInUp}
          >
            Big Spuntino
          </motion.h3>
          <motion.h2
            className="uppercase text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-wide text-center"
            variants={fadeInUp}
          >
            {t(category.nameKey)}
          </motion.h2>
          <motion.p
            className="text-center font-narrow text-sm md:text-base opacity-80 mb-4 md:mb-6 max-w-md px-2"
            variants={fadeInUp}
          >
            {/* {t(category.descriptionKey)} */}
          </motion.p>
          <motion.button
            onClick={handleMenuClick}
            className="group relative inline-flex cursor-pointer h-10 items-center justify-center overflow-hidden rounded-full border border-black font-narrow px-6 md:px-8 py-2"
            variants={fadeInUp}
          >
            <div className="inline-flex h-10 translate-y-0 items-center justify-center bg-transparent text-xs md:text-sm font-medium tracking-widest uppercase text-black transition group-hover:-translate-y-[150%]">
              {t('menus.viewMenu')}
            </div>
            <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-black text-xs md:text-sm font-medium tracking-widest uppercase text-white transition duration-300 group-hover:translate-y-0">
              {t('menus.viewMenu')}
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    );
  };

  // Card 3: Image + Text + Image (3 columns)
  const Card3Layout: React.FC<CardLayoutProps> = ({ category }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

    return (
      <motion.div
        ref={cardRef}
        className="w-full grid grid-cols-1 md:grid-cols-3 bg-amber-50 gap-1 overflow-hidden group"
        variants={cardVariants}
        initial="hidden"
        animate={cardInView ? 'visible' : 'hidden'}
      >
        {/* Left Image - Full width on mobile */}
        <div className="aspect-square h-full overflow-hidden relative">
          <motion.div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${category.images[0]})`,
            }}
            variants={imageRevealVariants}
            initial="hidden"
            animate={cardInView ? 'visible' : 'hidden'}
          />
        </div>
        {/* Middle Text Section - Full width on mobile */}
        <motion.div
          className="bg-amber-50 z-10 w-full flex flex-col justify-center items-center text-black p-6 md:p-6 lg:p-8 aspect-square"
          variants={staggerContainer}
          initial="hidden"
          animate={cardInView ? 'visible' : 'hidden'}
        >
          <motion.h3
            className="text-sm md:text-base lg:text-lg font-light tracking-widest mb-2 opacity-90"
            variants={fadeInUp}
          >
            Big Spuntino
          </motion.h3>
          <motion.h2
            className="uppercase text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-wide text-center"
            variants={fadeInUp}
          >
            {t(category.nameKey)}
          </motion.h2>
          <motion.p
            className="text-center font-narrow text-sm md:text-base opacity-80 mb-4 md:mb-6 max-w-md px-2"
            variants={fadeInUp}
          >
            {/* {t(category.descriptionKey)} */}
          </motion.p>
          <motion.button
            onClick={handleMenuClick}
            className="group relative inline-flex cursor-pointer h-10 items-center justify-center overflow-hidden rounded-full border border-black font-narrow px-6 md:px-8 py-2"
            variants={fadeInUp}
          >
            <div className="inline-flex h-10 translate-y-0 items-center justify-center bg-transparent text-xs md:text-sm font-medium tracking-widest uppercase text-black transition group-hover:-translate-y-[150%]">
              {t('menus.viewMenu')}
            </div>
            <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-black text-xs md:text-sm font-medium tracking-widest uppercase text-white transition duration-300 group-hover:translate-y-0">
              {t('menus.viewMenu')}
            </div>
          </motion.button>
        </motion.div>
        {/* Right Image - Hidden on mobile */}
        <div className="hidden md:block h-full aspect-square overflow-hidden relative">
          <motion.div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${category.images[1]})`,
            }}
            variants={imageRevealVariants}
            initial="hidden"
            animate={cardInView ? 'visible' : 'hidden'}
          />
        </div>
      </motion.div>
    );
  };

  // const Card4Layout: React.FC<CardLayoutProps> = ({ category }) => {
  //   const cardRef = useRef<HTMLDivElement>(null);
  //   const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

  //   return (
  //     <motion.div
  //       ref={cardRef}
  //       className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-1 bg-amber-50 overflow-hidden group"
  //       variants={cardVariants}
  //       initial="hidden"
  //       animate={cardInView ? 'visible' : 'hidden'}
  //     >
  //       {/* First Image - Full width on mobile */}
  //       <div className="md:aspect-[9/16] aspect-square h-full overflow-hidden relative md:col-span-1">
  //         <motion.div
  //           className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
  //           style={{
  //             backgroundImage: `url(${category.images[0]})`,
  //           }}
  //           variants={imageRevealVariants}
  //           initial="hidden"
  //           animate={cardInView ? 'visible' : 'hidden'}
  //         />
  //       </div>
  //       {/* Text Section - Full width on mobile */}
  //       <motion.div
  //         className="bg-amber-50 flex flex-col justify-center items-center text-black p-6 md:p-6 lg:p-8 aspect-square md:col-span-2 lg:col-span-2"
  //         variants={staggerContainer}
  //         initial="hidden"
  //         animate={cardInView ? 'visible' : 'hidden'}
  //       >
  //         <motion.h3
  //           className="text-sm md:text-base lg:text-lg font-light tracking-widest mb-2 opacity-90"
  //           variants={fadeInUp}
  //         >
  //           Big Spuntino
  //         </motion.h3>
  //         <motion.h2
  //           className="text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-wide text-center"
  //           variants={fadeInUp}
  //         >
  //           {t(category.nameKey)}
  //         </motion.h2>
  //         <motion.p
  //           className="text-center font-narrow text-sm md:text-base opacity-80 mb-4 md:mb-6 max-w-md px-2"
  //           variants={fadeInUp}
  //         >
  // {t(category.descriptionKey)}
  //         </motion.p>
  //         <motion.button
  //           onClick={handleMenuClick}
  //           className="group relative inline-flex cursor-pointer h-10 items-center justify-center overflow-hidden rounded-full border border-black font-narrow px-6 md:px-8 py-2"
  //           variants={fadeInUp}
  //         >
  //           <div className="inline-flex h-10 translate-y-0 items-center justify-center bg-transparent text-xs md:text-sm font-medium tracking-widest uppercase text-black transition group-hover:-translate-y-[150%]">
  //             {t('menus.viewMenu')}
  //           </div>
  //           <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-black text-xs md:text-sm font-medium tracking-widest uppercase text-white transition duration-300 group-hover:translate-y-0">
  //             {t('menus.viewMenu')}
  //           </div>
  //         </motion.button>
  //       </motion.div>
  //       {/* Remaining Images - Hidden on mobile, shown on larger screens */}
  //       <div className="hidden md:block overflow-hidden relative h-full aspect-[9/16]">
  //         <motion.div
  //           className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
  //           style={{
  //             backgroundImage: `url(${category.images[1]})`,
  //           }}
  //           variants={imageRevealVariants}
  //           initial="hidden"
  //           animate={cardInView ? 'visible' : 'hidden'}
  //         />
  //       </div>
  //       <div className="hidden lg:block overflow-hidden relative h-full aspect-[9/16]">
  //         <motion.div
  //           className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
  //           style={{
  //             backgroundImage: `url(${category.images[2]})`,
  //           }}
  //           variants={imageRevealVariants}
  //           initial="hidden"
  //           animate={cardInView ? 'visible' : 'hidden'}
  //         />
  //       </div>
  //       <div className="hidden lg:block overflow-hidden relative h-full aspect-[9/16]">
  //         <motion.div
  //           className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
  //           style={{
  //             backgroundImage: `url(${category.images[3]})`,
  //           }}
  //           variants={imageRevealVariants}
  //           initial="hidden"
  //           animate={cardInView ? 'visible' : 'hidden'}
  //         />
  //       </div>
  //     </motion.div>
  //   );
  // };

  return (
    <section className="py-12 md:py-24 lg:pt-32 px-4 md:px-6">
      <motion.div
        ref={headerRef}
        className="mb-12 md:mb-24 lg:mb-32"
        variants={staggerContainer}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={fadeInUp}>
          <AnimatedText
            className="text-3xl md:text-6xl lg:text-7xl uppercase font-bold w-full md:w-4/5 lg:w-3/5 mx-auto text-center leading-tight"
            text={['A Tavola']}
          ></AnimatedText>
        </motion.h2>
        <motion.p
          className="text-center font-narrow pt-4 md:pt-6 w-full md:w-4/5 lg:w-3/5 mx-auto text-sm md:text-lg leading-relaxed px-4"
          variants={fadeInUp}
        >
          {t('menus.sectionDescription')}
        </motion.p>
      </motion.div>
      <div className="pt-8 md:pt-12 lg:pt-16 mx-auto space-y-2 md:space-y-4 lg:space-y-6">
        <Card1Layout category={menuCategories[0]} index={0} />
        <Card2Layout category={menuCategories[1]} index={1} />
        <Card3Layout category={menuCategories[2]} index={2} />
        {/* <Card4Layout category={menuCategories[3]} index={3} /> */}
      </div>
    </section>
  );
};

export default MenusSection;
