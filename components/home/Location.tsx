'use client';

import Link from 'next/link';
import { useState } from 'react';

const Location = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const locations = [
    {
      id: 1,
      name: 'PARIS',
      image: '/assets/location/paris.jpg',
      location: '/paris',
    },
    {
      id: 2,
      name: 'MEGÈVE',
      image: '/assets/location/megeve.jpg',
      location: '/megeve',
    },
    {
      id: 3,
      name: 'RIYADH',
      image: '/assets/location/riyad.jpg',
      location: '/riyadh',
    },
    {
      id: 4,
      name: 'LONDON',
      image: '/assets/location/london.jpg',
      location: '/london',
    },
  ] as const;

  return (
    <section className="py-20 lg:py-40 px-4 sm:px-6">
      <div className="w-full lg:w-3/5 mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-5xl lg:text-7xl uppercase font-bold text-center leading-tight lg:leading-16">
          Don&apos;t overthink it, if it&apos;s tasty and inexpensive, it&apos;ll already be
          phenomenal*
        </h2>
        <p className="text-center font-narrow pt-4 sm:pt-6 text-sm sm:text-base w-full md:w-4/5 lg:w-3/5 mx-auto">
          BigSpontino, a world where the spirit of Italy is captured in every corner and each dish.
          Here, the sociable atmosphere is matched only by the authentic and wholesome Italian
          cuisine that brings family and friends together for an unfeigned and delightful
          experience. At BigSpontino, the traditional meets the contemporary and it is reflected in
          the lush fabrics and warm lighting that invite guests to a space of domestic comfort.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16 max-w-7xl mx-auto">
        {locations.map((location) => (
          <div
            key={location.id}
            className="relative overflow-hidden rounded-none shadow-lg cursor-pointer group"
            style={{ aspectRatio: '9/16' }}
            onMouseEnter={() => setHoveredCard(location.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
              style={{
                backgroundImage: `url(${location.image})`,
                transform: hoveredCard === location.id ? 'scale(1.1)' : 'scale(1)',
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-opacity-50" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-6">
              <div className="text-center">
                <h3 className="font-light tracking-widest mb-1 sm:mb-2 opacity-90 text-xs sm:text-sm">
                  BigSpontino
                </h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-wide">
                  {location.name}
                </h2>
                <Link
                  href={location?.location}
                  className="group relative inline-flex h-8 sm:h-10 items-center justify-center overflow-hidden rounded-full border-2 border-white font-narrow px-6 sm:px-8 py-2 sm:py-3"
                >
                  <div className="inline-flex h-8 sm:h-10 translate-y-0 items-center justify-center bg-transparent text-xs sm:text-sm font-medium tracking-widest uppercase text-white transition group-hover:-translate-y-[150%]">
                    Explore
                  </div>
                  <div className="absolute inline-flex h-8 sm:h-10 w-full translate-y-[100%] items-center justify-center bg-white text-xs sm:text-sm font-medium tracking-widest uppercase text-black transition duration-300 group-hover:translate-y-0">
                    Explore
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-2/5 mx-auto">
        <h2 className="text-xs sm:text-sm font-narrow text-center font-bold mt-6 sm:mt-8 lg:mt-10">
          Experience the Heart of Italy at BigSpontino*
        </h2>
      </div>
    </section>
  );
};

export default Location;
