'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no consent decision has been made
    if (typeof window !== 'undefined' && !localStorage.getItem('cookieConsent')) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg z-50 rounded-none"
        >
          <div className="max-w-6xl mx-auto p-3 xs:p-4 sm:px-6 sm:py-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 xs:gap-4 sm:gap-6">
              <div className="flex-1 min-w-0">
                <h3 className="text-base xs:text-lg sm:text-2xl lg:text-3xl uppercase font-bold mb-1 leading-tight">
                  {t('cookieConsent.title')}
                </h3>
                <p className="text-xs xs:text-sm font-narrow sm:text-base text-gray-700 leading-relaxed">
                  {t('cookieConsent.description')}{' '}
                  <Link
                    href="/cookie-policy"
                    className="underline hover:text-amber-500 break-words"
                  >
                    {t('cookieConsent.learnMore')}
                  </Link>
                </p>
              </div>
              <div className="flex flex-col xs:flex-row sm:flex-row gap-2 xs:gap-3 sm:gap-4 shrink-0">
                <motion.button
                  onClick={handleDecline}
                  whileHover={{ backgroundColor: '#f3f4f6' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-3 xs:px-4 sm:px-8 lg:px-10 py-2 xs:py-2.5 sm:py-3 border border-black text-xs xs:text-sm sm:text-base font-medium rounded-none whitespace-nowrap"
                >
                  {t('cookieConsent.decline')}
                </motion.button>
                <motion.button
                  onClick={handleAccept}
                  whileHover={{ backgroundColor: '#000000' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-3 xs:px-4 sm:px-10 lg:px-12 py-2 xs:py-2.5 sm:py-3 bg-black text-white text-xs xs:text-sm sm:text-base font-medium rounded-none whitespace-nowrap"
                >
                  {t('cookieConsent.accept')}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
