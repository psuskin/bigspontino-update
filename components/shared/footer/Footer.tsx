'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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

  const formElementVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
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
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal"
              variants={titleVariants}
            >
              {t('footer.brand')}
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base pt-6 sm:pt-8 md:pt-10 max-w-full sm:max-w-md lg:max-w-lg text-gray-300 font-narrow"
              variants={fadeInUp}
            >
              {t('footer.description')}
            </motion.p>
            <motion.div
              className="space-y-4 max-w-full sm:max-w-sm md:max-w-md mt-8 sm:mt-10"
              variants={staggerContainer}
            >
              <motion.div
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100"
                variants={formElementVariants}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-none font-narrow placeholder:text-center bg-white/15 border-none focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>
              <motion.div
                className="flex items-start gap-2 sm:gap-3"
                variants={formElementVariants}
              >
                <input
                  type="checkbox"
                  id="OPT_IN"
                  name="OPT_IN"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="w-4 h-4 text-primary mt-1 flex-shrink-0 !rounded-none"
                  required
                />
                <label
                  htmlFor="OPT_IN"
                  className="text-xs sm:text-sm font-narrow pt-0.5 leading-tight"
                >
                  I accept the privacy policy and the terms of use
                </label>
              </motion.div>
            </motion.div>
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
                  href="/portfolio"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.portfolio')}
                </Link>
              </motion.li>
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
                  href="/press"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.press')}
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
              <motion.li variants={linkVariants}>
                <Link
                  href="/consulting"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.consulting')}
                </Link>
              </motion.li>
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
              <motion.li variants={linkVariants}>
                <Link
                  href="/sitemap"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {t('footer.sitemap')}
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
