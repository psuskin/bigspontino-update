'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <footer className="pb-1">
      <div className="bg-black text-white py-10 px-4 sm:py-16 sm:px-8 md:py-20 md:px-16 lg:py-24 lg:px-24 mx-2 sm:mx-4  md:mx-6 mb-2 sm:mb-4 md:mb-6 lg:mx-6 !lg:mb-6 rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
          {/* BigSpontino Brand and Description */}
          <div className="col-span-full md:col-span-2 lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal">
              BigSpontino
            </h1>
            <p className="text-sm sm:text-base pt-6 sm:pt-8 md:pt-10 max-w-full sm:max-w-md lg:max-w-lg text-gray-300 font-narrow">
              We are a team of passionate and creative individuals who are dedicated to providing
              the best possible experience for our guests.
            </p>
            <div className="space-y-4 max-w-full sm:max-w-sm md:max-w-md mt-8 sm:mt-10">
              <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-none font-narrow placeholder:text-center bg-white/15 border-none focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <input
                  type="checkbox"
                  id="OPT_IN"
                  name="OPT_IN"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="w-4 h-4 text-primary mt-1 flex-shrink-0 !rounded-none"
                  required
                />
                <label
                  htmlFor="OPT_IN"
                  className="text-xs sm:text-sm font-narrow pt-0.5 leading-tight"
                >
                  I accept the privacy policy and the terms of use
                </label>
              </div>
            </div>
          </div>

          {/* Navigation Links Column 1 */}
          <div className="text-left md:text-right font-narrow mt-8 md:mt-0">
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  href="/portfolio"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  CAREERS WITH US
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  PRESS
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href="/consulting"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  CONSULTING
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links Column 2 */}
          <div className="text-left  lg:text-right font-narrow mt-8 md:mt-0">
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  href="/privacy-policy"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  COOKIE POLICY
                </Link>
              </li>
              <li>
                <Link
                  href="/manage-cookies"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  MANAGE COOKIES
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  TERMS AND CONDITIONS
                </Link>
              </li>
              <li>
                <Link
                  href="/code-of-ethics"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  CODE OF ETHICS
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-notice"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  LEGAL NOTICE
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="relative text-xs sm:text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  SITEMAP
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
