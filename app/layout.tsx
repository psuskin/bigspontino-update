import { ThemeProvider } from '@/components/theme/theme-provider';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import { I18nProvider } from '@/components/lang/i18n-provider';
import { generateMetadata as generateSEOMetadata, generateRestaurantStructuredData } from '@/lib/metadata';
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

export const metadata: Metadata = generateSEOMetadata({
  title: 'Authentic Italian Restaurant in Hamburg-Winterhude',
  description: 'Experience authentic Italian cuisine at Big Spuntino in Hamburg-Winterhude. Traditional spuntini, artisanal cocktails, and warm Italian hospitality. Book your table today.',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/assets/logo-white.png" as="image" />
        <link rel="preload" href="/assets/hero-bg.jpg" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Structured Data for Restaurant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateRestaurantStructuredData()),
          }}
        />
        
        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Big Spuntino" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${dreamOrphans.variable} ${futuraCyrillic.variable} antialiased `}>
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
