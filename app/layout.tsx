import { ThemeProvider } from '@/components/theme/theme-provider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { I18nProvider } from '@/components/lang/i18n-provider';
import './globals.css';

const dreamOrphans = localFont({
  src: [
    { path: './fonts/DreamOrphans/DreamOrphans.otf', weight: '400', style: 'normal' },
    { path: './fonts/DreamOrphans/DreamOrphansBd.otf', weight: '700', style: 'normal' },
    { path: './fonts/DreamOrphans/DreamOrphansBdIt.otf', weight: '700', style: 'italic' },
    { path: './fonts/DreamOrphans/DreamOrphansIt.otf', weight: '400', style: 'italic' },
  ],
  variable: '--font-dream-orphans',
  display: 'swap',
});

const futuraCyrillic = localFont({
  src: [
    { path: './fonts/FuturaCyrillic/FuturaCyrillicBook.ttf', weight: '400', style: 'normal' },
    { path: './fonts/FuturaCyrillic/FuturaCyrillicBold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/FuturaCyrillic/FuturaCyrillicDemi.ttf', weight: '500', style: 'normal' },
    { path: './fonts/FuturaCyrillic/FuturaCyrillicExtraBold.ttf', weight: '800', style: 'normal' },
    { path: './fonts/FuturaCyrillic/FuturaCyrillicHeavy.ttf', weight: '900', style: 'normal' },
    { path: './fonts/FuturaCyrillic/FuturaCyrillicLight.ttf', weight: '300', style: 'normal' },
    { path: './fonts/FuturaCyrillic/FuturaCyrillicMedium.ttf', weight: '500', style: 'normal' },
  ],
  variable: '--font-futura-cyrillic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Big Spuntino',
  description:
    'A restaurant website showcasing Italian cuisine and culture. Featuring elegant design, rich imagery, and a focus on the culinary arts, it invites visitors to explore the flavors of Italy through its menu, architectural inspirations, and cultural heritage. With sections dedicated to the restaurant’s story, job opportunities, and frequently asked questions, it provides a comprehensive view of the Big Spuntino experience. The site also includes a newsletter subscription form to keep guests updated on events and offers. The overall aesthetic combines modern web design with a touch of Italian elegance, making it a delightful online destination for food lovers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/logo-white.png" as="image" />
      </head>
      <body className={`${dreamOrphans.variable} ${futuraCyrillic.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
