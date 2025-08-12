// Analytics and Monitoring Utilities for Big Spuntino
// Comprehensive tracking for performance, user behavior, and business metrics

// Google Analytics 4 configuration
export const googleAnalytics = {
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  
  // Initialize GA4
  initialize: () => {
    if (typeof window !== 'undefined' && googleAnalytics.measurementId) {
      // Load gtag script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalytics.measurementId}`;
      document.head.appendChild(script);
      
      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(...args: unknown[]) {
        window.dataLayer.push(args);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', googleAnalytics.measurementId, {
        page_title: document.title,
        page_location: window.location.href,
        anonymize_ip: true,
        cookie_flags: 'SameSite=Strict;Secure'
      });
    }
  },
  
  // Track page views
  trackPageView: (url: string, title: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', googleAnalytics.measurementId, {
        page_path: url,
        page_title: title
      });
    }
  },
  
  // Track custom events
  trackEvent: (eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  },
  
  // Track conversions
  trackConversion: (conversionId: string, value?: number, currency: string = 'EUR') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency
      });
    }
  }
};

// Business-specific event tracking
export const businessEvents = {
  // Menu interactions
  menuView: (menuCategory: string) => {
    googleAnalytics.trackEvent('menu_view', {
      menu_category: menuCategory,
      event_category: 'engagement',
      event_label: 'menu_interaction'
    });
  },
  
  menuItemClick: (itemName: string, category: string, price?: number) => {
    googleAnalytics.trackEvent('menu_item_click', {
      item_name: itemName,
      item_category: category,
      value: price,
      currency: 'EUR',
      event_category: 'engagement'
    });
  },
  
  // Reservation tracking
  reservationStart: () => {
    googleAnalytics.trackEvent('reservation_start', {
      event_category: 'conversion',
      event_label: 'reservation_funnel'
    });
  },
  
  reservationComplete: (partySize: number, date: string, time: string) => {
    googleAnalytics.trackEvent('reservation_complete', {
      event_category: 'conversion',
      event_label: 'reservation_success',
      party_size: partySize,
      reservation_date: date,
      reservation_time: time
    });
    
    // Track as conversion
    googleAnalytics.trackConversion('reservation_conversion');
  },
  
  // Contact form tracking
  contactFormStart: () => {
    googleAnalytics.trackEvent('contact_form_start', {
      event_category: 'engagement',
      event_label: 'contact_funnel'
    });
  },
  
  contactFormSubmit: (formType: string) => {
    googleAnalytics.trackEvent('contact_form_submit', {
      event_category: 'conversion',
      event_label: 'contact_success',
      form_type: formType
    });
  },
  
  // Social media interactions
  socialClick: (platform: string, action: string) => {
    googleAnalytics.trackEvent('social_interaction', {
      social_network: platform,
      social_action: action,
      event_category: 'social'
    });
  },
  
  // Location and directions
  directionsClick: () => {
    googleAnalytics.trackEvent('directions_click', {
      event_category: 'engagement',
      event_label: 'location_interaction'
    });
  },
  
  // Phone call tracking
  phoneClick: () => {
    googleAnalytics.trackEvent('phone_click', {
      event_category: 'conversion',
      event_label: 'phone_call'
    });
  },
  
  // Newsletter signup
  newsletterSignup: (source: string) => {
    googleAnalytics.trackEvent('newsletter_signup', {
      event_category: 'conversion',
      event_label: 'newsletter_subscription',
      signup_source: source
    });
  },
  
  // Event page interactions
  eventView: (eventName: string, eventDate: string) => {
    googleAnalytics.trackEvent('event_view', {
      event_name: eventName,
      event_date: eventDate,
      event_category: 'engagement'
    });
  },
  
  // Gallery interactions
  imageView: (imageName: string, gallery: string) => {
    googleAnalytics.trackEvent('image_view', {
      image_name: imageName,
      gallery_name: gallery,
      event_category: 'engagement'
    });
  }
};

// Performance monitoring
export const performanceTracking = {
  // Core Web Vitals tracking
  trackCoreWebVitals: () => {
    if (typeof window === 'undefined') return;
    
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      googleAnalytics.trackEvent('core_web_vitals', {
        metric_name: 'LCP',
        metric_value: Math.round(lastEntry.startTime),
        event_category: 'performance'
      });
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        const fid = fidEntry.processingStart - fidEntry.startTime;
        
        googleAnalytics.trackEvent('core_web_vitals', {
          metric_name: 'FID',
          metric_value: Math.round(fid),
          event_category: 'performance'
        });
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
      
      googleAnalytics.trackEvent('core_web_vitals', {
        metric_name: 'CLS',
        metric_value: Math.round(clsValue * 1000) / 1000,
        event_category: 'performance'
      });
    }).observe({ entryTypes: ['layout-shift'] });
  },
  
  // Page load timing
  trackPageLoad: () => {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        googleAnalytics.trackEvent('page_timing', {
          dns_time: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
          connect_time: Math.round(navigation.connectEnd - navigation.connectStart),
          response_time: Math.round(navigation.responseEnd - navigation.requestStart),
          dom_load_time: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
          page_load_time: Math.round(navigation.loadEventEnd - navigation.fetchStart),
          event_category: 'performance'
        });
      }, 0);
    });
  },
  
  // Resource timing
  trackResourceTiming: () => {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        const slowResources = resources.filter(resource => resource.duration > 1000);
        
        if (slowResources.length > 0) {
          slowResources.forEach(resource => {
            googleAnalytics.trackEvent('slow_resource', {
              resource_name: resource.name,
              resource_duration: Math.round(resource.duration),
              resource_type: resource.initiatorType,
              event_category: 'performance'
            });
          });
        }
      }, 1000);
    });
  }
};

// User behavior tracking
export const userBehavior = {
  // Scroll depth tracking
  trackScrollDepth: () => {
    if (typeof window === 'undefined') return;
    
    const scrollDepths = [25, 50, 75, 100];
    const trackedDepths = new Set<number>();
    
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      scrollDepths.forEach(depth => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          googleAnalytics.trackEvent('scroll_depth', {
            scroll_depth: depth,
            page_path: window.location.pathname,
            event_category: 'engagement'
          });
        }
      });
    };
    
    window.addEventListener('scroll', trackScroll, { passive: true });
  },
  
  // Time on page tracking
  trackTimeOnPage: () => {
    if (typeof window === 'undefined') return;
    
    const startTime = Date.now();
    const timeThresholds = [30, 60, 120, 300]; // seconds
    const trackedTimes = new Set<number>();
    
    const checkTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      
      timeThresholds.forEach(threshold => {
        if (timeOnPage >= threshold && !trackedTimes.has(threshold)) {
          trackedTimes.add(threshold);
          googleAnalytics.trackEvent('time_on_page', {
            time_threshold: threshold,
            page_path: window.location.pathname,
            event_category: 'engagement'
          });
        }
      });
    };
    
    const interval = setInterval(checkTimeOnPage, 10000); // Check every 10 seconds
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
      clearInterval(interval);
      const finalTime = Math.round((Date.now() - startTime) / 1000);
      googleAnalytics.trackEvent('session_duration', {
        duration: finalTime,
        page_path: window.location.pathname,
        event_category: 'engagement'
      });
    });
  },
  
  // Click heatmap tracking
  trackClicks: () => {
    if (typeof window === 'undefined') return;
    
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const className = target.className;
      const id = target.id;
      
      // Track clicks on important elements
      if (['button', 'a', 'input'].includes(tagName) || className.includes('clickable')) {
        googleAnalytics.trackEvent('element_click', {
          element_type: tagName,
          element_class: className,
          element_id: id,
          page_path: window.location.pathname,
          event_category: 'interaction'
        });
      }
    });
  },
  
  // Form interaction tracking
  trackFormInteractions: () => {
    if (typeof window === 'undefined') return;
    
    // Track form starts
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        const form = target.closest('form');
        if (form && !form.dataset.tracked) {
          form.dataset.tracked = 'true';
          googleAnalytics.trackEvent('form_start', {
            form_id: form.id || 'unknown',
            form_name: form.getAttribute('name') || 'unknown',
            event_category: 'form_interaction'
          });
        }
      }
    });
    
    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      googleAnalytics.trackEvent('form_submit', {
        form_id: form.id || 'unknown',
        form_name: form.getAttribute('name') || 'unknown',
        event_category: 'form_interaction'
      });
    });
  }
};

// Error tracking
export const errorTracking = {
  // JavaScript error tracking
  trackJavaScriptErrors: () => {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('error', (event) => {
      googleAnalytics.trackEvent('javascript_error', {
        error_message: event.message,
        error_filename: event.filename,
        error_line: event.lineno,
        error_column: event.colno,
        event_category: 'error'
      });
    });
    
    // Promise rejection tracking
    window.addEventListener('unhandledrejection', (event) => {
      googleAnalytics.trackEvent('promise_rejection', {
        error_message: event.reason?.toString() || 'Unknown promise rejection',
        event_category: 'error'
      });
    });
  },
  
  // Network error tracking
  trackNetworkErrors: () => {
    if (typeof window === 'undefined') return;
    
    // Override fetch to track network errors
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          googleAnalytics.trackEvent('network_error', {
            status_code: response.status,
            url: args[0]?.toString() || 'unknown',
            event_category: 'error'
          });
        }
        return response;
      } catch (error) {
        googleAnalytics.trackEvent('network_error', {
          error_message: error instanceof Error ? error.message : 'Unknown network error',
          url: args[0]?.toString() || 'unknown',
          event_category: 'error'
        });
        throw error;
      }
    };
  }
};

// A/B testing utilities
export const abTesting = {
  // Simple A/B test implementation
  getVariant: (testName: string, variants: string[]): string => {
    const userId = localStorage.getItem('user_id') || Math.random().toString(36);
    localStorage.setItem('user_id', userId);
    
    // Simple hash function for consistent variant assignment
    let hash = 0;
    const input = testName + userId;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    const variantIndex = Math.abs(hash) % variants.length;
    const variant = variants[variantIndex];
    
    // Track the variant assignment
    googleAnalytics.trackEvent('ab_test_assignment', {
      test_name: testName,
      variant: variant,
      event_category: 'experiment'
    });
    
    return variant;
  },
  
  // Track A/B test conversions
  trackConversion: (testName: string, variant: string, conversionType: string) => {
    googleAnalytics.trackEvent('ab_test_conversion', {
      test_name: testName,
      variant: variant,
      conversion_type: conversionType,
      event_category: 'experiment'
    });
  }
};

// Custom dimensions and metrics
export const customTracking = {
  // Set custom dimensions
  setCustomDimension: (index: number, value: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', googleAnalytics.measurementId, {
        [`custom_map.dimension${index}`]: value
      });
    }
  },
  
  // Track custom metrics
  trackCustomMetric: (metricName: string, value: number, unit?: string) => {
    googleAnalytics.trackEvent('custom_metric', {
      metric_name: metricName,
      metric_value: value,
      metric_unit: unit,
      event_category: 'custom'
    });
  }
};

// TypeScript interfaces
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Initialize all analytics
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Initialize Google Analytics
    googleAnalytics.initialize();
    
    // Start performance tracking
    performanceTracking.trackCoreWebVitals();
    performanceTracking.trackPageLoad();
    performanceTracking.trackResourceTiming();
    
    // Start user behavior tracking
    userBehavior.trackScrollDepth();
    userBehavior.trackTimeOnPage();
    userBehavior.trackClicks();
    userBehavior.trackFormInteractions();
    
    // Start error tracking
    errorTracking.trackJavaScriptErrors();
    errorTracking.trackNetworkErrors();
    
    // Set custom dimensions
    customTracking.setCustomDimension(1, 'restaurant_website');
    customTracking.setCustomDimension(2, window.location.hostname);
  }
};

const analyticsUtils = {
  googleAnalytics,
  businessEvents,
  performanceTracking,
  userBehavior,
  errorTracking,
  abTesting,
  customTracking,
  initializeAnalytics
};

export default analyticsUtils;