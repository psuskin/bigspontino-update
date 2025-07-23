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
          className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 rounded-none"
        >
          <div className="p-3 xs:p-4 sm:px-7 mx-auto sm:py-10 md:py-16 ">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 xs:gap-4 sm:gap-6">
              <div className="flex-1 min-w-0">
                <h3 className="text-base xs:text-lg sm:text-2xl lg:text-4xl uppercase font-bold leading-tight">
                  {t('cookieConsent.title')}
                </h3>
                <p className="text-xs xs:text-sm font-narrow sm:text-base ps-1 text-gray-700 leading-relaxed">
                  {t('cookieConsent.description')}{' '}
                  <Link
                    href="/cookie-policy"
                    className="underline hover:text-amber-500 break-words"
                  >
                    {t('cookieConsent.learnMore')}
                  </Link>
                </p>
              </div>
              <div className="flex flex-col w-full lg:w-auto xs:flex-row sm:flex-row gap-2 xs:gap-3 sm:gap-4 shrink-0">
                <motion.button
                  onClick={handleAccept}
                  className="group relative inline-flex w-full lg:w-auto h-8 sm:h-9 md:h-14 items-center cursor-pointer justify-center overflow-hidden rounded-none font-medium"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="inline-flex w-full h-8 sm:h-9 md:h-14 translate-y-0 items-center justify-center bg-amber-300 text-sm sm:text-lg md:text-xl lg:text-2xl px-3 xs:px-4 sm:px-8 lg:px-10 text-black transition group-hover:-translate-y-[150%] rounded-none">
                    <span>{t('cookieConsent.accept')}</span>
                  </div>
                  <div className="absolute inline-flex w-full h-8 sm:h-9 md:h-14 translate-y-[100%] items-center justify-center text-sm sm:text-lg md:text-xl lg:text-2xl bg-black px-3 xs:px-4 sm:px-8 lg:px-10 text-neutral-50 transition duration-300 group-hover:translate-y-0 rounded-none">
                    <span>{t('cookieConsent.accept')}</span>
                  </div>
                </motion.button>
                <motion.button
                  onClick={handleDecline}
                  className="group relative inline-flex w-full lg:w-auto h-8 sm:h-9 md:h-14 items-center cursor-pointer justify-center overflow-hidden rounded-none font-medium"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="inline-flex w-full h-8 sm:h-9 md:h-14 translate-y-0 items-center justify-center bg-gray-200 text-sm sm:text-lg md:text-xl lg:text-2xl px-3 xs:px-4 sm:px-8 lg:px-10 text-black transition group-hover:-translate-y-[150%] rounded-none">
                    <span>{t('cookieConsent.decline')}</span>
                  </div>
                  <div className="absolute inline-flex w-full h-8 sm:h-9 md:h-14 translate-y-[100%] items-center justify-center text-sm sm:text-lg md:text-xl lg:text-2xl bg-black px-3 xs:px-4 sm:px-8 lg:px-10 text-neutral-50 transition duration-300 group-hover:translate-y-0 rounded-none">
                    <span>{t('cookieConsent.decline')}</span>
                  </div>
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
