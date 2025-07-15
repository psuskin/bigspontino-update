import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-[97.2%] mx-auto h-[93.5vh] overflow-hidden bg-black">
      <Image
        width={1920}
        height={1080}
        src={'/assets/architectural-inspirations/Antipasti_credit_Joann.jpg'}
        alt={'/assets/architectural-inspirations/Antipasti_credit_Joann.jpg'}
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;
