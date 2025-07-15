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
    <section className="py-40">
      <div className="">
        <h2 className="text-7xl uppercase font-bold w-3/5 mx-auto text-center leading-16">
          Don’t overthink it, if it’s tasty and inexpensive, it’ll already be phenomenal*
        </h2>
        <p className="text-center font-narrow pt-6  w-3/5 mx-auto">
          BigSpontino, a world where the spirit of Italy is captured in every corner and each dish.
          Here, the sociable atmosphere is matched only by the authentic and wholesome Italian
          cuisine that brings family and friends together for an unfeigned and delightful
          experience. At BigSpontino, the traditional meets the contemporary and it is reflected in
          the lush fabrics and warm lighting that invite guests to a space of domestic comfort.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto px-4">
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
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <div className="text-center">
                <h3 className=" font-light tracking-widest mb-2 opacity-90">BigSpontino</h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
                  {location.name}
                </h2>
                <Link
                  href={location?.location}
                  className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full border-2 border-white font-narrow px-8 py-3"
                >
                  <div className="inline-flex h-10 translate-y-0 items-center justify-center bg-transparent text-sm font-medium tracking-widest uppercase text-white transition group-hover:-translate-y-[150%]">
                    Explore
                  </div>
                  <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center bg-white text-sm font-medium tracking-widest uppercase text-black transition duration-300 group-hover:translate-y-0">
                    Explore
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <h2 className="text-sm font-narrow w-2/5 mx-auto  text-center font-bold mt-10">
          Experience the Heart of Italy at BigSpontino*
        </h2>
      </div>
    </section>
  );
};

export default Location;
