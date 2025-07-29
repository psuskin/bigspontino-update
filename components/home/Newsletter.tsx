'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedText } from '../animation/text/AnimatedText';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const { t } = useTranslation();
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
    <section className="pb-20 lg:pb-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto py-8 lg:py-16 px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 items-start gap-6 bg-gray-100 relative overflow-hidden border">
        {/* Circles - hidden on mobile, shown on lg+ */}
        <div className="hidden lg:block w-12 lg:w-20 h-12 lg:h-20 bg-background rounded-full absolute -bottom-6 lg:-bottom-12 border left-4 lg:left-10"></div>
        <div className="hidden lg:block w-12 lg:w-20 h-12 lg:h-20 bg-background rounded-full absolute -bottom-6 lg:-bottom-12 border left-16 lg:left-36"></div>
        <div className="hidden lg:block w-12 lg:w-20 h-12 lg:h-20 bg-background rounded-full absolute -bottom-6 lg:-bottom-12 border right-4 lg:right-10"></div>
        <div className="hidden lg:block w-12 lg:w-20 h-12 lg:h-20 bg-background rounded-full absolute -bottom-6 lg:-bottom-12 border right-16 lg:right-36"></div>

        {/* Title - spans full width on mobile, 3 cols on lg */}
        <div className="md:col-span-2 lg:col-span-3">
          <AnimatedText
            className="text-xl sm:text-2xl uppercase font-bold leading-6 text-center lg:text-left"
            text={[t('newsletter.title')]}
          ></AnimatedText>
        </div>

        {/* Form - spans full width on mobile, 4 cols on lg */}
        <div className="md:col-span-1 lg:col-span-4 w-full">
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 sm:py-4 rounded-none font-narrow placeholder:text-center lg:placeholder:text-left border-b-2 border-secondary bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={t('newsletter.placeholder')}
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
              <label
                htmlFor="OPT_IN"
                className="text-xs sm:text-sm font-narrow pt-0.5 leading-tight"
              >
                {t('newsletter.terms')}
              </label>
            </div>
          </div>
        </div>

        {/* Button - spans full width on mobile, 2 cols on lg */}
        <div className="md:col-span-1 lg:col-span-2 w-full flex justify-center lg:justify-end">
          <button
            onClick={handleSubmit}
            className="group relative inline-flex h-10 sm:h-12 lg:h-[3.7rem] w-full md:w-auto items-center cursor-pointer justify-center overflow-hidden rounded-none font-medium"
          >
            <div className="inline-flex h-10 sm:h-12 lg:h-[3.7rem] translate-y-0 items-center justify-center bg-amber-300 text-sm sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 lg:px-10 text-secondary transition group-hover:-translate-y-[150%] rounded-none w-full">
              <span>{t('newsletter.submit')}</span>
            </div>
            <div className="absolute inline-flex h-10 sm:h-12 lg:h-[3.7rem] w-full translate-y-[100%] items-center justify-center text-sm sm:text-lg md:text-xl lg:text-2xl bg-secondary px-4 sm:px-6 lg:px-10 text-neutral-50 transition duration-300 group-hover:translate-y-0 rounded-none">
              <span>{t('newsletter.submit')}</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
