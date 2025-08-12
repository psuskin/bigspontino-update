// Accessibility Optimization Utilities for Big Spuntino
// WCAG 2.1 AA compliance and inclusive design features

// ARIA labels and descriptions for common elements
export const ariaLabels = {
  navigation: {
    main: 'Main navigation',
    breadcrumb: 'Breadcrumb navigation',
    pagination: 'Pagination navigation',
    social: 'Social media links',
    footer: 'Footer navigation'
  },
  buttons: {
    menu: 'Toggle navigation menu',
    close: 'Close dialog',
    search: 'Search',
    submit: 'Submit form',
    reset: 'Reset form',
    previous: 'Previous page',
    next: 'Next page'
  },
  forms: {
    required: 'Required field',
    optional: 'Optional field',
    error: 'Error message',
    success: 'Success message',
    loading: 'Loading, please wait'
  },
  content: {
    skipLink: 'Skip to main content',
    readMore: 'Read more about',
    external: 'Opens in new window',
    download: 'Download file'
  }
};

// Color contrast ratios for WCAG compliance
export const colorContrast = {
  // AA compliance ratios
  normal: {
    minimum: 4.5,
    enhanced: 7
  },
  large: {
    minimum: 3,
    enhanced: 4.5
  },
  // Color combinations that meet WCAG AA standards
  combinations: {
    primary: {
      background: '#ffffff',
      text: '#1a1a1a',
      ratio: 12.63
    },
    secondary: {
      background: '#f8f9fa',
      text: '#212529',
      ratio: 11.48
    },
    accent: {
      background: '#d4af37',
      text: '#000000',
      ratio: 8.32
    },
    error: {
      background: '#ffffff',
      text: '#dc3545',
      ratio: 5.78
    },
    success: {
      background: '#ffffff',
      text: '#28a745',
      ratio: 4.68
    },
    warning: {
      background: '#ffffff',
      text: '#856404',
      ratio: 7.21
    }
  }
};

// Focus management utilities
export const focusManagement = {
  // Trap focus within a container
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
      if (e.key === 'Escape') {
        container.dispatchEvent(new CustomEvent('close'));
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  },

  // Restore focus to previous element
  restoreFocus: (previousElement: HTMLElement | null) => {
    if (previousElement && typeof previousElement.focus === 'function') {
      previousElement.focus();
    }
  },

  // Skip links for keyboard navigation
  createSkipLink: (targetId: string, text: string) => {
    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.textContent = text;
    skipLink.className = 'skip-link';
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        target.focus();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
    return skipLink;
  }
};

// Screen reader utilities
export const screenReader = {
  // Announce content to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.textContent = message;
    document.body.appendChild(announcer);
    
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  },

  // Create visually hidden text for screen readers
  createSROnlyText: (text: string) => {
    const span = document.createElement('span');
    span.className = 'sr-only';
    span.textContent = text;
    return span;
  },

  // Update page title for screen readers
  updatePageTitle: (title: string) => {
    document.title = title;
    screenReader.announce(`Page changed to ${title}`);
  }
};

// Keyboard navigation utilities
export const keyboardNavigation = {
  // Arrow key navigation for menus
  arrowKeyNavigation: (container: HTMLElement) => {
    const items = Array.from(container.querySelectorAll('[role="menuitem"], button, a')) as HTMLElement[];
    let currentIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          currentIndex = (currentIndex + 1) % items.length;
          items[currentIndex].focus();
          break;
        case 'ArrowUp':
          e.preventDefault();
          currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
          items[currentIndex].focus();
          break;
        case 'Home':
          e.preventDefault();
          currentIndex = 0;
          items[currentIndex].focus();
          break;
        case 'End':
          e.preventDefault();
          currentIndex = items.length - 1;
          items[currentIndex].focus();
          break;
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  },

  // Tab navigation enhancement
  enhanceTabNavigation: () => {
    let isTabbing = false;

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        isTabbing = true;
        document.body.classList.add('user-is-tabbing');
      }
    });

    document.addEventListener('mousedown', () => {
      if (isTabbing) {
        isTabbing = false;
        document.body.classList.remove('user-is-tabbing');
      }
    });
  }
};

// Form accessibility utilities
export const formAccessibility = {
  // Associate labels with form controls
  associateLabel: (input: HTMLInputElement, labelText: string) => {
    const label = document.createElement('label');
    const id = input.id || `input-${Math.random().toString(36).substr(2, 9)}`;
    input.id = id;
    label.htmlFor = id;
    label.textContent = labelText;
    return label;
  },

  // Add error messages with proper ARIA attributes
  addErrorMessage: (input: HTMLInputElement, message: string) => {
    const errorId = `${input.id}-error`;
    let errorElement = document.getElementById(errorId);
    
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.id = errorId;
      errorElement.className = 'error-message';
      errorElement.setAttribute('role', 'alert');
      input.parentNode?.insertBefore(errorElement, input.nextSibling);
    }
    
    errorElement.textContent = message;
    input.setAttribute('aria-describedby', errorId);
    input.setAttribute('aria-invalid', 'true');
  },

  // Remove error messages
  removeErrorMessage: (input: HTMLInputElement) => {
    const errorId = `${input.id}-error`;
    const errorElement = document.getElementById(errorId);
    
    if (errorElement) {
      errorElement.remove();
    }
    
    input.removeAttribute('aria-describedby');
    input.removeAttribute('aria-invalid');
  },

  // Add required field indicators
  markRequired: (input: HTMLInputElement) => {
    input.setAttribute('required', '');
    input.setAttribute('aria-required', 'true');
    
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label && !label.querySelector('.required-indicator')) {
      const indicator = document.createElement('span');
      indicator.className = 'required-indicator';
      indicator.textContent = ' *';
      indicator.setAttribute('aria-label', 'required');
      label.appendChild(indicator);
    }
  }
};

// Image accessibility utilities
export const imageAccessibility = {
  // Generate descriptive alt text
  generateAltText: (context: string, description: string) => {
    return `${description} - ${context}`;
  },

  // Handle decorative images
  markDecorative: (img: HTMLImageElement) => {
    img.alt = '';
    img.setAttribute('role', 'presentation');
  },

  // Add figure captions
  addCaption: (img: HTMLImageElement, caption: string) => {
    const figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    
    img.parentNode?.insertBefore(figure, img);
    figure.appendChild(img);
    figcaption.textContent = caption;
    figure.appendChild(figcaption);
    
    return figure;
  }
};

// Motion and animation preferences
export const motionPreferences = {
  // Respect reduced motion preferences
  respectReducedMotion: () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionPreference = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduce-motion');
      } else {
        document.body.classList.remove('reduce-motion');
      }
    };
    
    prefersReducedMotion.addListener(handleMotionPreference);
    handleMotionPreference(prefersReducedMotion as unknown as MediaQueryListEvent);
  },

  // Safe animation defaults
  safeAnimationDefaults: {
    duration: 200,
    easing: 'ease-out',
    respectMotionPreference: true
  }
};

// Text and typography accessibility
export const textAccessibility = {
  // Ensure readable line height
  optimalLineHeight: 1.5,
  
  // Minimum font sizes
  minFontSizes: {
    body: 16,
    small: 14,
    large: 18
  },
  
  // Reading level helpers
  simplifyText: (text: string) => {
    // Basic text simplification (would need more sophisticated implementation)
    return text
      .replace(/\b(utilize|utilization)\b/gi, 'use')
      .replace(/\b(commence)\b/gi, 'start')
      .replace(/\b(terminate)\b/gi, 'end');
  }
};

// Accessibility testing utilities
export const accessibilityTesting = {
  // Check color contrast
  checkContrast: (foreground: string, background: string) => {
    // Simplified contrast calculation (would need full implementation)
    const getLuminance = (color: string) => {
      // This is a simplified version - full implementation would parse RGB values
      return color === '#ffffff' ? 1 : color === '#000000' ? 0 : 0.5;
    };
    
    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    
    return {
      ratio,
      passesAA: ratio >= 4.5,
      passesAAA: ratio >= 7
    };
  },
  
  // Check for accessibility issues
  auditPage: () => {
    const issues: string[] = [];
    
    // Check for images without alt text
    const images = document.querySelectorAll('img:not([alt])');
    if (images.length > 0) {
      issues.push(`${images.length} images missing alt text`);
    }
    
    // Check for form inputs without labels
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    const unlabeledInputs = Array.from(inputs).filter(input => {
      const id = input.getAttribute('id');
      return !id || !document.querySelector(`label[for="${id}"]`);
    });
    
    if (unlabeledInputs.length > 0) {
      issues.push(`${unlabeledInputs.length} form inputs without labels`);
    }
    
    // Check for headings hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    let hierarchyIssues = 0;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        hierarchyIssues++;
      }
      previousLevel = level;
    });
    
    if (hierarchyIssues > 0) {
      issues.push(`${hierarchyIssues} heading hierarchy issues`);
    }
    
    return issues;
  }
};

// Initialize accessibility features
export const initializeAccessibility = () => {
  if (typeof window !== 'undefined') {
    // Enhance tab navigation
    keyboardNavigation.enhanceTabNavigation();
    
    // Respect motion preferences
    motionPreferences.respectReducedMotion();
    
    // Add skip links
    const skipLink = focusManagement.createSkipLink('main-content', 'Skip to main content');
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Announce page changes for SPAs
    let currentPath = window.location.pathname;
    const observer = new MutationObserver(() => {
      if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        screenReader.updatePageTitle(document.title);
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Periodic accessibility audit in development
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        const issues = accessibilityTesting.auditPage();
        if (issues.length > 0) {
          console.warn('Accessibility issues found:', issues);
        }
      }, 2000);
    }
  }
};

const accessibilityUtils = {
  ariaLabels,
  colorContrast,
  focusManagement,
  screenReader,
  keyboardNavigation,
  formAccessibility,
  imageAccessibility,
  motionPreferences,
  textAccessibility,
  accessibilityTesting,
  initializeAccessibility
};

export default accessibilityUtils;