import Newsletter from '@/components/home/Newsletter';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="py-32 px-6">
      <div className="">
        <h2 className="text-7xl uppercase font-bold w-3/5 mx-auto text-center leading-16">
          Don’t overthink it, if it’s tasty and inexpensive, it’ll already be phenomenal*
        </h2>
        <p className="text-center font-narrow pt-6  w-3/5 mx-auto">
          *A brilliant man at East Mamma, whose name we don’t remember, just a few weeks before
          opening.
        </p>
      </div>
      <div className="pt-28">
        <div className="grid grid-cols-2 gap-6 ">
          <Image
            src="/assets/history/1.jpg"
            width={400}
            height={300}
            className="w-full aspect-3/2 object-cover"
            alt="Pizza"
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
      <div className="py-28">
        <p className="text-base lg:text-3xl text-gray-700  text-center mb-6 lg:mb-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
          Siamo aperti Since the summer of 2025, the Big Spuntino has been the second Italian
          centerpiece of host Dario Pittarello. Dario opened the “Ristorante Pittarello” at
          Mühlenkamp in Hamburg-Winterhude back in 2015 and has been serving his guests with fine,
          authentic Italian cuisine ever since. But that wasn’t enough – Dario couldn’t miss the
          chance to visit the neighboring shop and has been welcoming old and new guests in a warm
          and lively day bar with spettacoloso snacks and drinks from Italian cuisine.
        </p>
        <p className="text-base lg:text-3xl text-gray-700  text-center mb-6 lg:mb-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
          The bright red interior combined with classic wood and brass elements that blend
          harmoniously with each other offers guests the ideal place to go for the “big times” and
          the alldry long: from boozy brunches on the weekends, to daily lunches to early
          aperitivo/dinner hour. Here, the Mediterranean joie de vivre of good enjoyment and good
          drinks as well as the celebration of being together can be perfectly lived. Here’s to the
          “big times” with the small snacks!
        </p>
      </div>
      <Newsletter />
    </section>
  );
};

export default OurStory;
