import Image from 'next/image';

const ArchitecturalInspirations = () => {
  return (
    <section className="px-6 pt-3 pb-28">
      <div className="grid grid-cols-2 gap-1 ">
        <div className="grid gap-1">
          <div className="p-16 border-2 aspect-11/5">
            <h2 className="text-6xl uppercase font-bold mx-auto  leading-16">
              Italian Architectural Inspirations
            </h2>
            <p className=" font-narrow pt-4  mx-auto">
              Whether in the heart of the City of Light or at the summit of the mountains, guests
              are greeted by a vivid setting from the moment they step through the door – it’s
              contrasting, playful, and sophisticated, evoking the dolce vita. Architects have drawn
              inspiration from the beautiful, the wildest, and the most joyful aspects of Italy,
              blending noble materials with natural ones.
            </p>
          </div>
          <Image
            src="/assets/architectural-inspirations/11-Bambini-Paris.jpg"
            width={400}
            className="w-full aspect-3/2 object-cover "
            height={300}
            alt="Pizza"
          />
        </div>
        <div className="grid gap-1">
          <Image
            src="/assets/architectural-inspirations/Cocktail_Mr_Lemon.jpg"
            width={400}
            className="w-full aspect-11/5 object-cover"
            height={300}
            alt="Pizza"
          />
          <Image
            src="/assets/architectural-inspirations/Antipasti_credit_Joann.jpg"
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

export default ArchitecturalInspirations;
