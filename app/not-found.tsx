'use client';

import type React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Food SVG Components with new format
const PizzaIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
    <path d="M8.5 8.5v.01" />
    <path d="M16 15.5v.01" />
    <path d="M12 12v.01" />
  </svg>
);

const PastaIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M3 12h18" />
    <path d="M3 18h18" />
    <path d="M3 6h18" />
    <path d="M7 3v18" />
    <path d="M12 3v18" />
    <path d="M17 3v18" />
  </svg>
);

const WineIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 22h8" />
    <path d="M7 10h10" />
    <path d="M12 15v7" />
    <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
  </svg>
);

const CakeIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
    <path d="M2 21h20" />
    <path d="M7 8v3" />
    <path d="M12 8v3" />
    <path d="M17 8v3" />
  </svg>
);

const CheeseIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9s10.3-3.9 14.2 0 3.9 10.3 0 14.2-10.3 3.9-14.2 0Z" />
    <path d="M7.5 7.5h.01" />
    <path d="M10 10h.01" />
    <path d="M12.5 7.5h.01" />
    <path d="M15 15h.01" />
  </svg>
);

const BreadIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12a5 5 0 0 1 5-5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 1 5 5v7H2v-7Z" />
    <path d="M6 20v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
    <path d="M10 9v1" />
    <path d="M12 7v3" />
    <path d="M14 9v1" />
  </svg>
);

const SaladIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 21h10" />
    <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
    <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
    <path d="m13 12 4-4" />
    <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
  </svg>
);

const CoffeeIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 2v2" />
    <path d="M14 2v2" />
    <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
    <path d="M6 2v2" />
  </svg>
);

const IceCreamIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 11v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8" />
    <path d="M17 11v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-8" />
    <path d="M5 11a7 7 0 0 1 14 0" />
    <path d="M15.5 6.5a3.5 3.5 0 0 0-7 0" />
    <path d="M12 4v3" />
  </svg>
);

const FishIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
    <path d="M18 12v.5" />
    <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
    <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1.13-.18-1.73.96-1.73 1.84v9.32c0 .88.6 2.02 1.73 1.84C5.58 18.03 7 16 7 13.33" />
    <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
    <path d="M16.01 17.93c-.2 1.36-1.07 2.58-2.01 3.07H8" />
  </svg>
);

const MeatIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
  </svg>
);

const VegetableIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 22h20" />
    <path d="M7 22V12a5 5 0 0 1 10 0v10" />
    <path d="M12 12V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
    <path d="M12 7V2a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2" />
  </svg>
);

const BottleIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 24h14l-4-10V9a4 4 0 1 0-8 0v5L5 24Z" />
    <path d="M7.5 4.21l9 1.79" />
    <path d="M10 2v6" />
    <path d="M14 2v6" />
  </svg>
);

const SoupIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
    <path d="M7 21h10" />
    <path d="M19.5 12 22 6" />
    <path d="M16.25 7c.27-.2.8-.4 1.5-.65" />
    <path d="M6 6l2.5 6" />
    <path d="M9.75 7c-.27-.2-.8-.4-1.5-.65" />
  </svg>
);

// Navigation SVG Icons
const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

const AboutIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

const ContactIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EventsIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const HistoryIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" />
  </svg>
);

const ImpressionsIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M21 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4" />
  </svg>
);

const JobsIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const PrivacyIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const CookieIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
    <path d="M8.5 8.5v.01" />
    <path d="M16 15.5v.01" />
    <path d="M12 12v.01" />
  </svg>
);

const TermsIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

const LegalIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 3h5v5" />
    <path d="M8 3H3v5" />
    <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
    <path d="M21 3l-7.828 7.828A4 4 0 0 0 12 13.7V22" />
  </svg>
);

const CareersIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

const PressIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8" />
    <path d="M15 18h-5" />
    <path d="M10 6h8v4h-8V6Z" />
  </svg>
);

const ConsultingIcon = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Food items with sitemap links
const foodItems = [
  { icon: PizzaIcon, name: 'Menu', link: '/menus', color: '#D2691E' },
  { icon: PastaIcon, name: 'Menu', link: '/menus', color: '#DAA520' },
  { icon: WineIcon, name: 'Events', link: '/events', color: '#8B0000' },
  { icon: CakeIcon, name: 'Menu', link: '/menus', color: '#FF69B4' },
  { icon: CheeseIcon, name: 'Menu', link: '/menus', color: '#FFD700' },
  { icon: BreadIcon, name: 'Menu', link: '/menus', color: '#DEB887' },
  { icon: SaladIcon, name: 'Menu', link: '/menus', color: '#228B22' },
  { icon: CoffeeIcon, name: 'Contact', link: '/contact', color: '#8B4513' },
  { icon: IceCreamIcon, name: 'Menu', link: '/menus', color: '#FFB6C1' },
  { icon: FishIcon, name: 'Menu', link: '/menus', color: '#4682B4' },
  { icon: MeatIcon, name: 'Menu', link: '/menus', color: '#A0522D' },
  { icon: VegetableIcon, name: 'Menu', link: '/menus', color: '#32CD32' },
  { icon: BottleIcon, name: 'Events', link: '/events', color: '#6B8E23' },
  { icon: SoupIcon, name: 'Menu', link: '/menus', color: '#FF6347' },
  { icon: HomeIcon, name: 'Home', link: '/', color: '#4A5568' },
  { icon: AboutIcon, name: 'About', link: '/about', color: '#2D3748' },
  { icon: ContactIcon, name: 'Contact', link: '/contact', color: '#1A202C' },
  { icon: EventsIcon, name: 'Events', link: '/events', color: '#2B6CB0' },
  { icon: HistoryIcon, name: 'History', link: '/history', color: '#8B4513' },
  { icon: ImpressionsIcon, name: 'Impressions', link: '/impressions', color: '#6B46C1' },
  { icon: JobsIcon, name: 'Jobs', link: '/jobs', color: '#059669' },
  { icon: PrivacyIcon, name: 'Privacy Policy', link: '/privacy-policy', color: '#DC2626' },
  { icon: CookieIcon, name: 'Cookie Policy', link: '/cookie-policy', color: '#F59E0B' },
  { icon: TermsIcon, name: 'Terms & Conditions', link: '/terms-and-conditions', color: '#7C3AED' },
  { icon: LegalIcon, name: 'Legal Notice', link: '/legal-notice', color: '#1F2937' },
  { icon: CareersIcon, name: 'Careers', link: '/careers', color: '#10B981' },
  { icon: PressIcon, name: 'Press', link: '/press', color: '#3B82F6' },
  { icon: ConsultingIcon, name: 'Consulting', link: '/consulting', color: '#8B5CF6' },
];

// Split items into two conveyor belts
const topBeltItems = foodItems.slice(0, 14);
const bottomBeltItems = foodItems.slice(14);

interface FoodItemProps {
  item: (typeof foodItems)[0];
  index: number;
  isHovered: boolean;
}

const FoodItem = ({ item }: FoodItemProps) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    if (isMounted) {
      router.push(item.link);
    }
  };

  return (
    <motion.div
      className="relative flex-shrink-0 mx-8"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative p-4 rounded-full bg-background shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
        style={{ borderColor: item.color }}
        whileHover={{
          backgroundColor: item.color + '10',
          borderColor: item.color,
          y: -5,
        }}
        onClick={handleClick}
      >
        <item.icon className="w-12 h-12" style={{ color: item.color }} />
        {/* Overlay with same size as plate */}
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 rounded-full bg-secondary/70 bg-opacity-80 flex items-center justify-center text-white text-xs font-medium text-center px-2"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="leading-tight">{item.name}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

interface ConveyorBeltProps {
  items: typeof foodItems;
  direction: 'left' | 'right';
  speed: number;
}

const ConveyorBelt = ({ items, direction, speed }: ConveyorBeltProps) => {
  const [isHovered, setIsHovered] = useState(false);
  // Create multiple copies for seamless loop
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      className="relative bg-gradient-to-r from-amber-50 via-white to-amber-50 border-y-4 border-amber-600 py-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', zIndex: 1, overflow: 'visible' }}
    >
      {/* Conveyor belt texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-amber-200/50"></div>
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_11px)]"></div>

      <div className="overflow-hidden">
        <motion.div
          className="flex items-center"
          animate={{
            x: direction === 'left' ? [0, -100 * items.length] : [0, 100 * items.length],
          }}
          transition={{
            duration: speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
            ...(isHovered && { duration: speed * 10 }),
          }}
          style={{ width: `${repeatedItems.length * 120}px` }}
        >
          {repeatedItems.map((item, index) => (
            <FoodItem
              key={`${item.name}-${index}`}
              item={item}
              index={index}
              isHovered={isHovered}
            />
          ))}
        </motion.div>
      </div>

      {/* Belt edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-600 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-amber-600 to-transparent"></div>
    </div>
  );
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50 flex flex-col">
      {/* Header */}
      <motion.header
        className="text-start py-12 px-4 md:px-10 md:flex items-center gap-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-gray-800"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        >
          404
        </motion.h1>
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-serif text-amber-700 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Big Spuntino
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {'Oops! This page got lost in our kitchen...'}
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center space-y-16">
        {/* Top Conveyor Belt */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <ConveyorBelt items={topBeltItems} direction="right" speed={20} />
        </motion.div>

        {/* 404 Message */}
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif text-secondary mb-1">
            {"But don't worry, our delicious Italian cuisine is still here!"}
          </h3>
          <p className="text-gray-600 text-xs mb-6 max-w-3xl mx-auto font-narrow">
            Hover over our moving trays to explore our menu, or click on any dish to discover more
            about our authentic Italian offerings.
          </p>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 transition-colors duration-300 shadow-lg"
            >
              Return to Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Conveyor Belt */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <ConveyorBelt items={bottomBeltItems} direction="left" speed={25} />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="text-center py-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p className="text-gray-500 text-sm">Experience authentic Italian dining at Big Spuntino</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/contact" className="text-amber-600 hover:text-amber-700 transition-colors">
            Contact Us
          </Link>
          <Link href="/menus" className="text-amber-600 hover:text-amber-700 transition-colors">
            View Menu
          </Link>
          <Link href="/events" className="text-amber-600 hover:text-amber-700 transition-colors">
            Events
          </Link>
        </div>
      </motion.footer>
    </div>
  );
}
