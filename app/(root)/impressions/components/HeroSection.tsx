import ImageMouseTrail from '@/components/animation/corsor/ImageMouseTrail';
import MotionPressureText from '@/components/animation/text/MotionPressureText';

import Image from 'next/image';

const HeroSection = () => {
  // Define images for the mouse trail - you can customize these
  const trailImages = [
    '/assets/bambiniclub.jpg',
    '/assets/bambiniclub01.jpg',
    '/assets/bambiniclub02.jpg',
    '/assets/bambini_club8.jpg',
    '/assets/menus/brunch/1.jpg',
    '/assets/menus/brunch/2.jpg',
    '/assets/menus/brunch/1.jpg',
    '/assets/menus/lunch/1.jpg',
    '/assets/menus/lunch/2.jpg',
    '/assets/menus/lunch/1.jpg',
  ];

  return (
    <section className="relative w-[97.2%] mx-auto h-[93.5vh] overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        width={1920}
        height={1080}
        src={'/assets/impressions/hero-image.jpg'}
        alt={'Antipasti dish'}
        className="w-full h-full object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gray-200/25" />

      {/* Mouse Trail Container */}
      <div className="absolute inset-0">
        <ImageMouseTrail
          items={trailImages}
          maxNumberOfImages={5}
          distance={25}
          imgClass="sm:w-32 w-24 sm:h-40 h-32 rounded-none shadow-lg"
          fadeAnimation={true}
          className="w-full h-full bg-transparent"
        >
          {/* Text overlay with pressure animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-4xl h-32 px-8">
              <MotionPressureText
                text="Impressions"
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
                textColor="#000000"
                strokeColor="#ff0000"
                minFontSize={48}
                scale={true}
              />
            </div>
          </div>
        </ImageMouseTrail>
      </div>
    </section>
  );
};

export default HeroSection;
