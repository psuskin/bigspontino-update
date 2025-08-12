// Security Optimization Utilities for Big Spuntino
// Comprehensive security measures and best practices

import { NextRequest, NextResponse } from 'next/server';

// Content Security Policy configuration
export const contentSecurityPolicy = {
  directives: {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'", // Only for development - remove in production
      "'unsafe-eval'", // Only for development - remove in production
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
      'https://connect.facebook.net',
      'https://www.instagram.com'
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'",
      'https://fonts.googleapis.com'
    ],
    'img-src': [
      "'self'",
      'data:',
      'blob:',
      'https:',
      'https://www.google-analytics.com',
      'https://www.facebook.com',
      'https://www.instagram.com'
    ],
    'font-src': [
      "'self'",
      'https://fonts.gstatic.com'
    ],
    'connect-src': [
      "'self'",
      'https://www.google-analytics.com',
      'https://api.bigspuntino.com'
    ],
    'frame-src': [
      "'self'",
      'https://www.google.com',
      'https://www.facebook.com',
      'https://www.instagram.com'
    ],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': []
  },
  
  // Generate CSP header string
  generateHeader: function() {
    return Object.entries(this.directives)
      .map(([directive, sources]) => {
        if (Array.isArray(sources) && sources.length > 0) {
          return `${directive} ${sources.join(' ')}`;
        } else if (sources.length === 0) {
          return directive;
        }
        return '';
      })
      .filter(Boolean)
      .join('; ');
  }
};

// Security headers configuration
export const securityHeaders = {
  // Prevent clickjacking
  'X-Frame-Options': 'DENY',
  
  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',
  
  // Enable XSS protection
  'X-XSS-Protection': '1; mode=block',
  
  // Referrer policy
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  
  // Permissions policy
  'Permissions-Policy': [
    'camera=()',
    'microphone=()',
    'geolocation=(self)',
    'interest-cohort=()'
  ].join(', '),
  
  // Strict Transport Security (HTTPS only)
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  
  // Content Security Policy
  'Content-Security-Policy': contentSecurityPolicy.generateHeader(),
  
  // Cross-Origin policies
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin'
};

// Input validation utilities
export const inputValidation = {
  // Sanitize HTML input
  sanitizeHtml: (input: string): string => {
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  },
  
  // Validate email format
  validateEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  },
  
  // Validate phone number
  validatePhone: (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },
  
  // Validate URL
  validateUrl: (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return ['http:', 'https:'].includes(urlObj.protocol);
    } catch {
      return false;
    }
  },
  
  // Remove potentially dangerous characters
  sanitizeInput: (input: string): string => {
    return input
      .replace(/[<>"'&]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .trim()
      .substring(0, 1000); // Limit length
  },
  
  // Validate file uploads
  validateFile: (file: File, allowedTypes: string[], maxSize: number): { valid: boolean; error?: string } => {
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'File type not allowed' };
    }
    
    if (file.size > maxSize) {
      return { valid: false, error: 'File size too large' };
    }
    
    // Check for potentially dangerous file extensions
    const dangerousExtensions = ['.exe', '.bat', '.cmd', '.scr', '.pif', '.com'];
    const fileName = file.name.toLowerCase();
    
    if (dangerousExtensions.some(ext => fileName.endsWith(ext))) {
      return { valid: false, error: 'File extension not allowed' };
    }
    
    return { valid: true };
  }
};

// Rate limiting utilities
export const rateLimiting = {
  // Simple in-memory rate limiter
  requests: new Map<string, { count: number; resetTime: number }>(),
  
  // Check if request is within rate limit
  checkRateLimit: (identifier: string, limit: number, windowMs: number): { allowed: boolean; remaining: number; resetTime: number } => {
    const now = Date.now();
    const record = rateLimiting.requests.get(identifier);
    
    if (!record || now > record.resetTime) {
      const resetTime = now + windowMs;
      rateLimiting.requests.set(identifier, { count: 1, resetTime });
      return { allowed: true, remaining: limit - 1, resetTime };
    }
    
    if (record.count >= limit) {
      return { allowed: false, remaining: 0, resetTime: record.resetTime };
    }
    
    record.count++;
    return { allowed: true, remaining: limit - record.count, resetTime: record.resetTime };
  },
  
  // Clean up expired entries
  cleanup: () => {
    const now = Date.now();
    for (const [key, record] of rateLimiting.requests.entries()) {
      if (now > record.resetTime) {
        rateLimiting.requests.delete(key);
      }
    }
  }
};

// CSRF protection utilities
export const csrfProtection = {
  // Generate CSRF token
  generateToken: (): string => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  },
  
  // Validate CSRF token
  validateToken: (token: string, sessionToken: string): boolean => {
    return token === sessionToken && token.length === 64;
  },
  
  // Create CSRF middleware
  middleware: (req: NextRequest) => {
    const method = req.method;
    
    // Skip CSRF check for safe methods
    if (['GET', 'HEAD', 'OPTIONS'].includes(method)) {
      return null;
    }
    
    const token = req.headers.get('x-csrf-token') || req.headers.get('csrf-token');
    const sessionToken = req.cookies.get('csrf-token')?.value;
    
    if (!token || !sessionToken || !csrfProtection.validateToken(token, sessionToken)) {
      return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 });
    }
    
    return null;
  }
};

// Session security utilities
export const sessionSecurity = {
  // Generate secure session ID
  generateSessionId: (): string => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  },
  
  // Session configuration
  config: {
    name: 'sessionId',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    path: '/'
  },
  
  // Validate session
  validateSession: (sessionId: string): boolean => {
    return sessionId.length === 64 && /^[a-f0-9]+$/.test(sessionId);
  }
};

// Password security utilities
export const passwordSecurity = {
  // Password strength validation
  validateStrength: (password: string): { valid: boolean; score: number; feedback: string[] } => {
    const feedback: string[] = [];
    let score = 0;
    
    if (password.length < 8) {
      feedback.push('Password must be at least 8 characters long');
    } else {
      score += 1;
    }
    
    if (!/[a-z]/.test(password)) {
      feedback.push('Password must contain lowercase letters');
    } else {
      score += 1;
    }
    
    if (!/[A-Z]/.test(password)) {
      feedback.push('Password must contain uppercase letters');
    } else {
      score += 1;
    }
    
    if (!/\d/.test(password)) {
      feedback.push('Password must contain numbers');
    } else {
      score += 1;
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      feedback.push('Password must contain special characters');
    } else {
      score += 1;
    }
    
    if (password.length > 12) {
      score += 1;
    }
    
    return {
      valid: score >= 4,
      score,
      feedback
    };
  },
  
  // Common password check
  isCommonPassword: (password: string): boolean => {
    const commonPasswords = [
      'password', '123456', '123456789', 'qwerty', 'abc123',
      'password123', 'admin', 'letmein', 'welcome', 'monkey'
    ];
    return commonPasswords.includes(password.toLowerCase());
  }
};

// API security utilities
export const apiSecurity = {
  // Validate API key
  validateApiKey: (apiKey: string): boolean => {
    const validApiKeys = process.env.VALID_API_KEYS?.split(',') || [];
    return validApiKeys.includes(apiKey);
  },
  
  // Generate API response with security headers
  secureResponse: (data: unknown, status: number = 200) => {
    return NextResponse.json(data, {
      status,
      headers: {
        ...securityHeaders,
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  },
  
  // Log security events
  logSecurityEvent: (event: string, details: Record<string, unknown>) => {
    const logEntry = {
      timestamp: new Date().toISOString(),
      event,
      details,
      userAgent: details.userAgent || 'unknown',
      ip: details.ip || 'unknown'
    };
    
    // In production, this would send to a security monitoring service
    console.warn('Security Event:', logEntry);
  }
};

// Data encryption utilities
export const encryption = {
  // Simple encryption for sensitive data (use proper encryption in production)
  encrypt: async (text: string, key: string): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const keyData = encoder.encode(key);
    
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'AES-GCM' },
      false,
      ['encrypt']
    );
    
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      cryptoKey,
      data
    );
    
    const result = new Uint8Array(iv.length + encrypted.byteLength);
    result.set(iv);
    result.set(new Uint8Array(encrypted), iv.length);
    
    return btoa(String.fromCharCode(...result));
  },
  
  // Hash sensitive data
  hash: async (text: string): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
};

// Security middleware
export const securityMiddleware = (req: NextRequest) => {
  const response = NextResponse.next();
  
  // Add security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  // Rate limiting
  const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  const rateLimit = rateLimiting.checkRateLimit(clientIp, 100, 60000); // 100 requests per minute
  
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { 
        status: 429,
        headers: {
          'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
          'X-RateLimit-Limit': '100',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': rateLimit.resetTime.toString()
        }
      }
    );
  }
  
  // Add rate limit headers
  response.headers.set('X-RateLimit-Limit', '100');
  response.headers.set('X-RateLimit-Remaining', rateLimit.remaining.toString());
  response.headers.set('X-RateLimit-Reset', rateLimit.resetTime.toString());
  
  // CSRF protection
  const csrfError = csrfProtection.middleware(req);
  if (csrfError) {
    return csrfError;
  }
  
  return response;
};

// Initialize security features
export const initializeSecurity = () => {
  if (typeof window !== 'undefined') {
    // Disable right-click context menu in production
    if (process.env.NODE_ENV === 'production') {
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
      
      // Disable F12 and other developer tools shortcuts
      document.addEventListener('keydown', (e) => {
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.shiftKey && e.key === 'C') ||
          (e.ctrlKey && e.shiftKey && e.key === 'J') ||
          (e.ctrlKey && e.key === 'U')
        ) {
          e.preventDefault();
        }
      });
    }
    
    // Clean up rate limiting cache periodically
    setInterval(() => {
      rateLimiting.cleanup();
    }, 60000); // Every minute
    
    // Monitor for suspicious activity
    let rapidClicks = 0;
    document.addEventListener('click', () => {
      rapidClicks++;
      setTimeout(() => rapidClicks--, 1000);
      
      if (rapidClicks > 10) {
        apiSecurity.logSecurityEvent('suspicious_activity', {
          type: 'rapid_clicking',
          count: rapidClicks,
          timestamp: Date.now()
        });
      }
    });
  }
};

const securityUtils = {
  contentSecurityPolicy,
  securityHeaders,
  inputValidation,
  rateLimiting,
  csrfProtection,
  sessionSecurity,
  passwordSecurity,
  apiSecurity,
  encryption,
  securityMiddleware,
  initializeSecurity
};

export default securityUtils;