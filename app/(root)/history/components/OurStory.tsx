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
            src="/assets/italian-flavors/06-Il-Bambini-Club.jpg"
            width={400}
            height={300}
            className="w-full aspect-3/2 object-cover"
            alt="Pizza"
          />
          <Image
            src="/assets/italian-flavors/07-Il-Bambini-Club.jpg"
            width={400}
            className="w-full aspect-3/2 object-cover"
            height={300}
            alt="Pizza"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
