import Newsletter from '@/components/home/Newsletter';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 px-4 sm:px-6">
      <div className="">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase font-bold w-full md:w-4/5 lg:w-3/5 mx-auto text-center leading-tight sm:leading-snug lg:leading-16">
          Don&apos;t overthink it, if it&apos;s tasty and inexpensive, it&apos;ll already be
          phenomenal*
        </h2>
        <p className="text-center font-narrow pt-4 sm:pt-6 text-sm sm:text-base w-full md:w-4/5 lg:w-3/5 mx-auto">
          *A brilliant man at East Mamma, whose name we don&apos;t remember, just a few weeks before
          opening.
        </p>
      </div>
      <div className="pt-12 sm:pt-20 lg:pt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Image
            src="/assets/history/1.jpg"
            width={400}
            height={300}
            className="w-full aspect-3/2 object-cover"
            alt="Pizza"
            priority
          />
          <Image
            src="/assets/history/2.jpg"
            width={400}
            className="w-full aspect-3/2 object-cover"
            height={300}
            alt="Pizza"
          />
        </div>
      </div>
      <div className="py-12 sm:py-20 lg:py-28">
        <p className="text-sm sm:text-base lg:text-3xl text-gray-700 text-center mb-4 sm:mb-6 lg:mb-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
          Siamo aperti Since the summer of 2025, the Big Spuntino has been the second Italian
          centerpiece of host Dario Pittarello. Dario opened the &quot;Ristorante Pittarello&quot;
          at Mühlenkamp in Hamburg-Winterhude back in 2015 and has been serving his guests with
          fine, authentic Italian cuisine ever since. But that wasn&apos;t enough – Dario
          couldn&apos;t miss the chance to visit the neighboring shop and has been welcoming old and
          new guests in a warm and lively day bar with spettacoloso snacks and drinks from Italian
          cuisine.
        </p>
        <p className="text-sm sm:text-base lg:text-3xl text-gray-700 text-center mb-4 sm:mb-6 lg:mb-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
          The bright red interior combined with classic wood and brass elements that blend
          harmoniously with each other offers guests the ideal place to go for the &quot;big
          times&quot; and the alldry long: from boozy brunches on the weekends, to daily lunches to
          early aperitivo/dinner hour. Here, the Mediterranean joie de vivre of good enjoyment and
          good drinks as well as the celebration of being together can be perfectly lived.
          Here&apos;s to the &quot;big times&quot; with the small snacks!
        </p>
      </div>
      <Newsletter />
    </section>
  );
};

export default OurStory;
