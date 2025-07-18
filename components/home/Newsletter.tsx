'use client';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('Please accept the privacy policy and terms of use');
      return;
    }
    // Handle newsletter subscription
    console.log('Subscribing:', email);
  };

  return (
    <section className="pb-28 px-6">
      <div className="w-6xl mx-auto border- py-16 px-16 grid grid-cols-9 items-start gap-6 bg-gray-100 relative overflow-hidden border">
        <div className="w-20 h-20 bg-white rounded-full absolute -bottom-12 border left-10"></div>
        <div className="w-20 h-20 bg-white rounded-full absolute -bottom-12 border left-36"></div>
        <div className="w-20 h-20 bg-white rounded-full absolute -bottom-12 border right-10"></div>
        <div className="w-20 h-20 bg-white rounded-full absolute -bottom-12 border right-36"></div>
        <div className="col-span-3">
          <h2 className="text-2xl uppercase font-bold mx-auto leading-6">
            Subscribe for news, recipes & love-letters
          </h2>
        </div>
        <div className="col-span-4">
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 rounded-none font-narrow placeholder:text-cente border-b-2 border-black bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              required
            />

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
        </div>
        <div className="col-span-2">
          <button
            onClick={handleSubmit}
            className="group relative inline-flex h-8 sm:h-9 md:h-[3.7rem] items-center cursor-pointer justify-center overflow-hidden rounded-none font-medium"
          >
            <div className="inline-flex h-8 sm:h-9 md:h-[3.7rem] translate-y-0 items-center justify-center bg-amber-300 text-sm sm:text-lg md:text-xl lg:text-2xl px-3 sm:px-4 md:px-10 text-black transition group-hover:-translate-y-[150%] rounded-none">
              <span className="hidden sm:inline">Subscribe</span>
            </div>
            <div className="absolute inline-flex h-8 sm:h-9 md:h-[3.7rem] w-full translate-y-[100%] items-center justify-center text-sm sm:text-lg md:text-xl lg:text-2xl bg-black px-3 sm:px-4 md:px-10 text-neutral-50 transition duration-300 group-hover:translate-y-0 rounded-none">
              <span className="hidden sm:inline">Subscribe</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
