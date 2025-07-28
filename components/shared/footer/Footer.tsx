'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  // Refs for intersection observers
  const footerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const navColumn1Ref = useRef<HTMLDivElement>(null);
  const navColumn2Ref = useRef<HTMLDivElement>(null);

  // Intersection observers for animations
  const footerInView = useInView(footerRef, { once: true, margin: '-100px' });
  const brandInView = useInView(brandRef, { once: true, margin: '-50px' });
  const navColumn1InView = useInView(navColumn1Ref, { once: true, margin: '-50px' });
  const navColumn2InView = useInView(navColumn2Ref, { once: true, margin: '-50px' });
  const { t } = useTranslation();
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
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <footer className="">
      <motion.div
        ref={footerRef}
        className="bg-black text-white py-10 px-4 sm:py-16 sm:px-8 md:py-20 md:px-16 lg:py-24 lg:px-24  rounded-none"
        variants={fadeInUp}
        initial="hidden"
        animate={footerInView ? 'visible' : 'hidden'}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
          {/* Big Spuntino Brand and Description */}
          <motion.div
            ref={brandRef}
            className="col-span-full md:col-span-2 lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            animate={brandInView ? 'visible' : 'hidden'}
          >
            <Image
              src="/assets/logo-white.png"
              alt="BigSpuntino"
              width={100}
              height={100}
              className="w-auto mx-auto md:me-auto md:mx-0 h-14  md:h-16 lg:h-28"
            />
            <motion.p
              className="text-sm sm:text-base pt-6 sm:pt-8 md:pt-10 max-w-full sm:max-w-md lg:max-w-lg text-gray-300 font-narrow"
              variants={fadeInUp}
            >
              {t('footer.description')}
            </motion.p>
            <div className="space-y-0.5 font-narrow mt-6 text-white font-light text-">
              <a
                href="tel:040694568 28"
                className="block  decoration-1  hover:text-amber-300-600 transition-colors"
              >
                <span className="font-bold"> Phone:</span> 040 / 69 45 68 28
              </a>
              <a
                href="mailto:mail@bigspuntino.de"
                className="block  decoration-1  hover:text-amber-300-600 transition-colors"
              >
                <span className="font-bold">Email:</span> mail@bigspuntino.de
              </a>
            </div>
          </motion.div>
          {/* Navigation Links Column 1 */}
          <motion.div
            ref={navColumn1Ref}
            className="text-left md:text-right font-narrow mt-8 md:mt-0"
            variants={staggerContainer}
            initial="hidden"
            animate={navColumn1InView ? 'visible' : 'hidden'}
          >
            <ul className="space-y-3 sm:space-y-4">
              <motion.li variants={linkVariants}>
                <Link
                  href="/jobs"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.careers')}
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link
                  href="/sitemap"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.sitemap')}
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link
                  href="/contact"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.contact')}
                </Link>
              </motion.li>
              {/* <motion.li variants={linkVariants}>
                <Link
                  href="/consulting"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.consulting')}
                </Link>
              </motion.li> */}
              <motion.li variants={linkVariants}>
                <Link
                  href="/history"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.about')}
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          {/* Navigation Links Column 2 */}
          <motion.div
            ref={navColumn2Ref}
            className="text-left lg:text-right font-narrow mt-8 md:mt-0"
            variants={staggerContainer}
            initial="hidden"
            animate={navColumn2InView ? 'visible' : 'hidden'}
          >
            <ul className="space-y-3 sm:space-y-4">
              <motion.li variants={linkVariants}>
                <Link
                  href="/privacy-policy"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.privacy')}
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link
                  href="/cookie-policy"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.cookies')}
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link
                  href="/manage-cookies"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.manageCookies')}
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link
                  href="/terms-and-conditions"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.terms')}
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link
                  href="/code-of-ethics"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.ethics')}
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link
                  href="/legal-notice"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.legal')}
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
