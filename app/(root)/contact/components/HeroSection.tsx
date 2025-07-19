import MotionPressureText from '@/components/animation/text/MotionPressureText';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full lg:w-[97.2%] mx-auto h-[70vh] md:h-[80vh] lg:h-[93.5vh] overflow-hidden bg-black">
      <Image
        width={1920}
        height={1080}
        src={'/assets/contact/1.jpg'}
        alt={'Antipasti dish'}
        className="w-full h-full object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl h-32 px-4 md:px-8">
          <MotionPressureText
            text="Contatto"
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold pt-8"
            staggerDelay={0.15}
            animationDuration={0.8}
            initialY={60}
            initialOpacity={0}
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={32} // Adjusted for smaller screens
            scale={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
