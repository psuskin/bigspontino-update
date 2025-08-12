// Performance Optimization Utilities for Big Spuntino
// Advanced performance techniques for optimal loading and user experience

import { NextResponse } from 'next/server';

// TypeScript interfaces for performance APIs
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceWithMemory extends Performance {
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

// Image optimization configuration
export const imageOptimization = {
  formats: ['image/avif', 'image/webp', 'image/jpeg', 'image/jpg', 'image/png'],
  quality: 85,
  sizes: {
    mobile: '(max-width: 640px) 100vw',
    tablet: '(max-width: 1024px) 50vw',
    desktop: '33vw',
  },
  breakpoints: [320, 640, 768, 1024, 1280, 1536],
  placeholder: 'blur',
  loading: 'lazy' as const,
};

// Critical resource preloading
export const criticalResources = [
  {
    rel: 'preload',
    href: '/fonts/inter-var.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: '/fonts/playfair-display-var.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
  { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
];

// Service Worker registration
export const registerServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered: ', registration);
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError);
      }
    });
  }
};

// Lazy loading intersection observer
export const createLazyLoader = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  if (typeof window === 'undefined') return null;

  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
  });
};

// Resource hints generator
export const generateResourceHints = (urls: string[]) => {
  return urls.map((url) => ({
    rel: 'prefetch',
    href: url,
  }));
};

// Critical CSS extraction
export const criticalCSS = `
  /* Critical above-the-fold styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    scroll-behavior: smooth;
  }

  body {
    background-color: #ffffff;
    color: #1a1a1a;
    overflow-x: hidden;
  }

  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%);
  }

  .navigation {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }
`;

// Performance monitoring
export const performanceMonitor = {
  // Core Web Vitals measurement
  measureCoreWebVitals: () => {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const clsEntry = entry as LayoutShift;
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
        }
      });
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  },

  // Resource timing analysis
  analyzeResourceTiming: () => {
    if (typeof window === 'undefined') return;

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const slowResources = resources.filter((resource) => resource.duration > 1000);

    if (slowResources.length > 0) {
      console.warn('Slow loading resources:', slowResources);
    }
  },

  // Memory usage monitoring
  monitorMemoryUsage: () => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const memory = (performance as PerformanceWithMemory).memory;
    console.log('Memory usage:', {
      used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
    });
  },
};

// Cache strategies
export const cacheStrategies = {
  // Static assets cache
  staticCache: {
    name: 'static-cache-v1',
    urls: ['/', '/manifest.json', '/icon.svg', '/offline.html'],
  },

  // API cache with TTL
  apiCache: {
    name: 'api-cache-v1',
    ttl: 5 * 60 * 1000, // 5 minutes
    maxEntries: 50,
  },

  // Image cache
  imageCache: {
    name: 'image-cache-v1',
    ttl: 24 * 60 * 60 * 1000, // 24 hours
    maxEntries: 100,
  },
};

// Compression utilities
export const compressionConfig = {
  gzip: {
    level: 6,
    threshold: 1024,
    filter: (contentType: string) => {
      return /text|javascript|json|css|xml|svg/.test(contentType);
    },
  },
  brotli: {
    quality: 6,
    threshold: 1024,
  },
};

// Bundle optimization
export const bundleOptimization = {
  // Code splitting configuration
  codeSplitting: {
    chunks: 'all',
    minSize: 20000,
    maxSize: 244000,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
      common: {
        name: 'common',
        minChunks: 2,
        chunks: 'all',
        enforce: true,
      },
    },
  },

  // Tree shaking configuration
  treeShaking: {
    usedExports: true,
    sideEffects: false,
  },
};

// CDN configuration
export const cdnConfig = {
  domains: ['cdn.bigspuntino.com', 'images.bigspuntino.com', 'assets.bigspuntino.com'],
  headers: {
    'Cache-Control': 'public, max-age=31536000, immutable',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
  },
};

// Performance budget
export const performanceBudget = {
  // Size budgets (in KB)
  javascript: 200,
  css: 100,
  images: 500,
  fonts: 100,
  total: 1000,

  // Timing budgets (in ms)
  firstContentfulPaint: 1500,
  largestContentfulPaint: 2500,
  firstInputDelay: 100,
  cumulativeLayoutShift: 0.1,
  timeToInteractive: 3000,
};

// Preload critical routes
export const preloadCriticalRoutes = ['/', '/menus', '/contact', '/events'];

// Optimize third-party scripts
export const thirdPartyOptimization = {
  // Google Analytics with gtag
  googleAnalytics: {
    id: process.env.NEXT_PUBLIC_GA_ID,
    config: {
      page_title: document?.title,
      page_location: window?.location?.href,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    },
  },

  // Social media widgets
  socialWidgets: {
    facebook: {
      appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
      lazy: true,
    },
    instagram: {
      lazy: true,
      intersection: true,
    },
  },
};

// Database query optimization
export const dbOptimization = {
  // Connection pooling
  connectionPool: {
    min: 2,
    max: 10,
    idle: 10000,
    acquire: 60000,
  },

  // Query caching
  queryCache: {
    ttl: 300, // 5 minutes
    max: 100,
  },

  // Pagination
  pagination: {
    defaultLimit: 20,
    maxLimit: 100,
  },
};

// Error boundary for performance issues
export class PerformanceErrorBoundary extends Error {
  constructor(message: string, public metric: string, public value: number) {
    super(message);
    this.name = 'PerformanceError';
  }
}

// Performance optimization middleware
export const performanceMiddleware = () => {
  const start = Date.now();

  return NextResponse.next({
    headers: {
      'X-Response-Time': `${Date.now() - start}ms`,
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  });
};

// Initialize performance optimizations
export const initializePerformanceOptimizations = () => {
  if (typeof window !== 'undefined') {
    // Register service worker
    registerServiceWorker();

    // Start performance monitoring
    performanceMonitor.measureCoreWebVitals();

    // Analyze resource timing after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        performanceMonitor.analyzeResourceTiming();
        performanceMonitor.monitorMemoryUsage();
      }, 1000);
    });

    // Preload critical routes on hover
    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href) {
        const url = new URL(target.href);
        if (preloadCriticalRoutes.includes(url.pathname)) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = target.href;
          document.head.appendChild(link);
        }
      }
    });
  }
};

const performanceUtils = {
  imageOptimization,
  criticalResources,
  performanceMonitor,
  cacheStrategies,
  compressionConfig,
  bundleOptimization,
  cdnConfig,
  performanceBudget,
  thirdPartyOptimization,
  dbOptimization,
  initializePerformanceOptimizations,
};

export default performanceUtils;
