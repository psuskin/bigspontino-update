// Domain Configuration for Big Spuntino
// Handles multiple domains and ensures proper SEO canonicalization

type DomainInfo = {
  isPrimary: boolean;
  language: string;
  region: string;
  hreflang?: string;
  redirectTo?: string;
};

export const domainConfig = {
  // Primary domain (canonical)
  primaryDomain: 'https://www.bigspuntino.com',
  
  // Alternative domains that should redirect to primary
  alternativeDomains: [
    'https://bigspuntino.com',
    'https://www.bigspuntino.de',
    'https://bigspuntino.de'
  ],
  
  // Domain-specific configurations
  domains: {
    'www.bigspuntino.com': {
      isPrimary: true,
      language: 'en',
      region: 'international',
      hreflang: 'en'
    },
    'bigspuntino.com': {
      isPrimary: false,
      redirectTo: 'https://www.bigspuntino.com',
      language: 'en',
      region: 'international'
    },
    'www.bigspuntino.de': {
      isPrimary: false,
      redirectTo: 'https://www.bigspuntino.com',
      language: 'de',
      region: 'germany',
      hreflang: 'de'
    },
    'bigspuntino.de': {
      isPrimary: false,
      redirectTo: 'https://www.bigspuntino.com',
      language: 'de',
      region: 'germany'
    }
  }
};

// Get canonical URL for any given path
export const getCanonicalUrl = (path: string = ''): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${domainConfig.primaryDomain}${cleanPath}`;
};

// Check if domain needs redirect
export const shouldRedirect = (hostname: string): string | null => {
  const domainInfo = domainConfig.domains[hostname as keyof typeof domainConfig.domains] as DomainInfo | undefined;
  return domainInfo?.redirectTo || null;
};

// Get hreflang alternatives for SEO
export const getHreflangAlternatives = (path: string = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return {
    'en': `https://www.bigspuntino.com${cleanPath}`,
    'de': `https://www.bigspuntino.com${cleanPath}`,
    'x-default': `https://www.bigspuntino.com${cleanPath}`
  };
};

// Generate redirect response for Next.js middleware
export const createRedirectResponse = (url: string, permanent: boolean = true) => {
  return Response.redirect(url, permanent ? 301 : 302);
};

// Domain validation utilities
export const isDomainValid = (hostname: string): boolean => {
  return Object.keys(domainConfig.domains).includes(hostname) || 
         domainConfig.alternativeDomains.some(domain => domain.includes(hostname));
};

// Get domain configuration
export const getDomainConfig = (hostname: string): DomainInfo | null => {
  return (domainConfig.domains[hostname as keyof typeof domainConfig.domains] as DomainInfo) || null;
};

// SEO-friendly domain handling
export const generateDomainMetadata = (hostname: string, path: string = '') => {
  const canonical = getCanonicalUrl(path);
  const hreflang = getHreflangAlternatives(path);
  const domainInfo = getDomainConfig(hostname);
  
  return {
    canonical,
    hreflang,
    shouldIndex: domainInfo?.isPrimary ?? false,
    language: domainInfo?.language || 'en',
    region: domainInfo?.region || 'international'
  };
};

// Middleware helper for domain handling
export const handleDomainRedirect = (request: Request) => {
  const url = new URL(request.url);
  const hostname = url.hostname;
  
  // Check if redirect is needed
  const redirectUrl = shouldRedirect(hostname);
  if (redirectUrl) {
    const newUrl = new URL(url.pathname + url.search, redirectUrl);
    return createRedirectResponse(newUrl.toString());
  }
  
  return null;
};

// Analytics and tracking configuration per domain
export const getDomainAnalytics = (hostname: string) => {
  const config = getDomainConfig(hostname);
  
  return {
    // Google Analytics tracking ID (same for all domains)
    gaTrackingId: 'G-XXXXXXXXXX', // Replace with actual GA4 ID
    
    // Domain-specific tracking parameters
    trackingParams: {
      domain: hostname,
      language: config?.language || 'en',
      region: config?.region || 'international',
      isPrimary: config?.isPrimary || false
    },
    
    // Custom dimensions for domain tracking
    customDimensions: {
      domain_type: config?.isPrimary ? 'primary' : 'redirect',
      domain_language: config?.language || 'en',
      domain_region: config?.region || 'international'
    }
  };
};

export default domainConfig;