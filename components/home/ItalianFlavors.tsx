import Image from 'next/image';

const ItalianFlavors = () => {
  return (
    <section className="px-6 pb-40">
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
      <div className="mt-28">
        <h2 className="text-7xl uppercase font-bold w-3/5 mx-auto text-center leading-16">
          Italian Finest Flavors
        </h2>
        <p className="text-center font-narrow pt-6  w-3/5 mx-auto">
          The cuisine at BigSpontino restaurants tells a narrative of flavors, with each plate
          representing a chapter from the heart of Italy’s culinary traditions. Classic dishes such
          as Tagliatelle Al Tartufo, Pistachio Pesto Trofie, and the iconic Milanese Cutlet are
          adorned with the finest harvests from Italian soils. Meanwhile, the theatrics of our
          artisanal pizza oven unveil crusts that combine the ethereal fluff of Naples with the
          crisp whisper of Rome. The dining experience is then completed with a selection of
          generous Italian desserts.
        </p>
      </div>
      <div className="mt-28">
        <Image
          src="/assets/08-Il-Bambini-Club.jpg"
          width={800}
          className="w-full aspect-16/6 object-cover"
          height={300}
          alt="Pizza"
        />
      </div>
    </section>
  );
};

export default ItalianFlavors;
