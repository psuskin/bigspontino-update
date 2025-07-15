'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  //   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     if (!acceptedTerms) {
  //       alert('Please accept the privacy policy and terms of use');
  //       return;
  //     }
  //     // Handle newsletter subscription
  //     console.log('Subscribing:', email);
  //   };
  return (
    <footer className="bg-black text-white py-24 px-24 mx-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* BigSpontino Brand and Description */}
        <div className="col-span-full lg:col-span-2">
          {' '}
          {/* Adjusted span for better layout */}
          <h1 className="text-7xl font-normal">BigSpontino</h1> {/* Kept original font size */}
          <p className="text-base pt-10 max-w-lg text-gray-300  font-narrow ">
            We are a team of passionate and creative individuals who are dedicated to providing the
            best possible experience for our guests.
          </p>
          {/* <div className="flex items-center gap-2 pe-3  pt-10 font-narrow text-white">
            <Link href={'www.google.com'} className="">
              Instagram
            </Link>
            <Link href={'www.google.com'} className="">
              Facebook
            </Link>
          </div> */}
          <div className="space-y-4 max-w-md mt-10">
            <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 rounded-none font-narrow placeholder:text-center bg-white/15 border-none focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="OPT_IN"
                name="OPT_IN"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="w-4 h-4 text-primary mt-1 flex-shrink-0 !rounded-none"
                required
              />
              <label htmlFor="OPT_IN" className="text-sm font-narrow pt-0.5 leading-tight">
                I accept the privacy policy and the terms of use
              </label>
            </div>
          </div>
          {/* <button
            onClick={handleSubmit}
            className="px-6 py-2 w-full max-w-md border border-amber-300 bg-amber-300 text-2xl hover:bg-amber-400 transition-colors"
          >
            Subscribe
          </button> */}
        </div>

        {/* Navigation Links Column 1 (right-aligned) */}
        <div className="text-left sm:text-right  font-narrow ">
          {' '}
          {/* Align text right on small screens and up */}
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                CAREERS WITH US
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                PRESS
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                CONSULTING
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Links Column 2 (right-aligned) */}
        <div className="text-left sm:text-right  font-narrow ">
          {' '}
          {/* Align text right on small screens and up */}
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                PRIVACY POLICY
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                COOKIE POLICY
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                MANAGE COOKIES
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                TERMS AND CONDITIONS
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                CODE OF ETHICS
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                LEGAL NOTICE
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-sm text-gray-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                SITEMAP
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Information */}
      {/* <div className="mt-16 text-center text-sm text-gray-500 font-narrow ">
        <p>&copy; {new Date().getFullYear()} BigSpontino. All rights reserved.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
