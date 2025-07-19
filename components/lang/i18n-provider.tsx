'use client';

import Loading from '@/app/loading';
import i18n from '@/lib/i18n';
import type React from 'react';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Wait for i18n to be initialized
    if (i18n.isInitialized) {
      setIsInitialized(true);
    } else {
      i18n.on('initialized', () => {
        setIsInitialized(true);
      });
    }

    return () => {
      i18n.off('initialized');
    };
  }, []);

  if (!isInitialized) {
    return <Loading></Loading>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
