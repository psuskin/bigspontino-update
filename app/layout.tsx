import { ThemeProvider } from '@/components/theme/theme-provider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const appleGaramond = localFont({
  src: [
    {
      path: './fonts/AppleGaramond.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/AppleGaramond-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/AppleGaramond-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-apple-garamond',
  display: 'swap',
});

const arialNarrow = localFont({
  src: './fonts/ArialNarrow.woff2',
  variable: '--font-arial-narrow',
  weight: '400',
  style: 'normal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BigSpontino',
  description:
    'A restaurant website showcasing Italian cuisine and culture. Featuring elegant design, rich imagery, and a focus on the culinary arts, it invites visitors to explore the flavors of Italy through its menu, architectural inspirations, and cultural heritage. With sections dedicated to the restaurant’s story, job opportunities, and frequently asked questions, it provides a comprehensive view of the BigSpontino experience. The site also includes a newsletter subscription form to keep guests updated on events and offers. The overall aesthetic combines modern web design with a touch of Italian elegance, making it a delightful online destination for food lovers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${appleGaramond.variable} ${arialNarrow.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
