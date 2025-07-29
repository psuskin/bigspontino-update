'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LegalNoticePage = () => {
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
              {t('legal.title')}
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
              {t('legal.subtitle')}
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
        {/* Legal Information */}
        <motion.section className="mb-16" variants={sectionVariants}>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-secondary mb-8 tracking-tight"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {t('legal.legalTitle')}
          </motion.h2>

          <div className="space-y-8">
            {['provider', 'contact', 'vat', 'disclaimer'].map((section) => (
              <motion.div
                key={section}
                className="group cursor-pointer"
                variants={sectionVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setActiveSection(section)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <motion.h3
                  className="text-lg sm:text-xl font-semibold text-secondary mb-4 tracking-tight"
                  animate={{
                    color: activeSection === section ? '#f59e0b' : '#000',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {t(`legal.sections.${section}.title`)}
                </motion.h3>
                <motion.div
                  className="bg-gray-50 border-l-4 border-amber-500 p-6"
                  initial={{ opacity: 0.9 }}
                  animate={{
                    opacity: activeSection === section ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-secondary leading-relaxed">
                    {t(`legal.sections.${section}.content`)}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Copyright */}
        <motion.section className="mb-16" variants={sectionVariants}>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-secondary mb-8 tracking-tight"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {t('legal.copyrightTitle')}
          </motion.h2>

          <motion.div
            className="bg-gray-50 border-l-4 border-amber-500 p-6"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-secondary leading-relaxed">{t('legal.copyrightContent')}</p>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.div className="border-t border-gray-200 pt-8 sm:pt-12" variants={sectionVariants}>
          <div className="text-center space-y-6">
            <motion.p
              className="text-gray-500 text-sm tracking-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {t('legal.lastUpdated')}
            </motion.p>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center bg-secondary text-white font-medium px-8 tracking-tight uppercase"
              >
                {t('legal.backToHome')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default LegalNoticePage;
