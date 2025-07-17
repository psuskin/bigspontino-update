import MotionPressureText from '@/components/animation/text/MotionPressureText';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-[97.2%] mx-auto h-[93.5vh] overflow-hidden bg-black">
      <Image
        width={1920}
        height={1080}
        src={'/assets/architectural-inspirations/Antipasti_credit_Joann.jpg'}
        alt={'Antipasti dish'}
        className="w-full h-full object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl h-32 px-8">
          <MotionPressureText
            text="IL MENU"
            className="text-6xl md:text-8xl font-bold"
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
            minFontSize={48}
            scale={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
