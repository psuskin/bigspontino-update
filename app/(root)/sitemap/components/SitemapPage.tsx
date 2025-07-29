'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SitemapPage = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
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

  const linkVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const sitemapSections = [
    {
      title: t('sitemap.mainPages'),
      links: [
        { href: '/', label: t('navigation.home') },
        { href: '/menus', label: t('navigation.menu') },
        { href: '/events', label: t('navigation.events') },
        { href: '/history', label: t('navigation.history') },
        { href: '/impressions', label: t('navigation.impressions') },
        { href: '/contact', label: t('navigation.contact') },
        { href: '/jobs', label: t('navigation.jobs') },
      ],
    },
    {
      title: t('sitemap.legalPages'),
      links: [
        { href: '/privacy-policy', label: t('footer.privacy') },
        { href: '/cookie-policy', label: t('footer.cookies') },
        { href: '/terms-and-conditions', label: t('footer.terms') },
        { href: '/legal-notice', label: t('footer.legal') },
      ],
    },
    {
      title: t('sitemap.companyInfo'),
      links: [
        { href: '/about', label: t('footer.about') },
        { href: '/careers', label: t('footer.careers') },
        { href: '/press', label: t('footer.press') },
        { href: '/consulting', label: t('footer.consulting') },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <motion.section
        className="relative h-[40vh] overflow-hidden border-b border-gray-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-secondary">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 to-secondary/30" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {t('sitemap.title')}
            </motion.h1>
            <motion.div
              className="w-16 h-0.5 bg-amber-500 mx-auto mb-4"
              initial={{ width: 0 }}
              animate={{ width: '4rem' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.p
              className="text-sm uppercase tracking-widest opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {t('sitemap.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 uppercase">
          {sitemapSections.map((section, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              className="group cursor-pointer"
              onMouseEnter={() => setActiveSection(`section-${index}`)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <motion.h3
                className="text-xl sm:text-2xl font-semibold text-secondary mb-6 tracking-tight"
                animate={{
                  color: activeSection === `section-${index}` ? '#f59e0b' : '#000',
                }}
                transition={{ duration: 0.3 }}
              >
                {section.title}
              </motion.h3>
              <motion.ul className="space-y-4" initial="hidden" animate="visible">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    variants={linkVariants}
                    transition={{ delay: linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="relative text-gray-700 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-500 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="border-t border-gray-200 pt-8 sm:pt-12 mt-12 sm:mt-16"
          variants={sectionVariants}
        >
          <div className="text-center space-y-6">
            <motion.p
              className="text-gray-500 text-sm tracking-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {t('sitemap.lastUpdated')}
            </motion.p>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center bg-secondary text-white font-medium px-8 tracking-tight uppercase"
              >
                {t('sitemap.backToHome')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default SitemapPage;
