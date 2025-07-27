import ImageMouseTrail from '@/components/animation/corsor/ImageMouseTrail';
import RevealTextOnView from '@/components/animation/text/RevealTextOnView';

import Image from 'next/image';

const HeroSection = () => {
  // Define images for the mouse trail - you can customize these
  const trailImages = [
    '/assets/bambiniclub.jpg',
    '/assets/photos/1.jpg',
    '/assets/bambini_club8.jpg',
    '/assets/photos/3.jpg',
    '/assets/photos/4.jpg',
    '/assets/photos/5.jpeg',
    '/assets/photos/6.jpeg',
    '/assets/photos/7.jpg',
    '/assets/bambiniclub02.jpg',
    '/assets/photos/8.jpg',
    '/assets/photos/9.jpg',
    '/assets/photos/10.jpeg',
  ];

  return (
    <section className="relative  h-dvh md:h-[93.5vh]  overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        width={1920}
        height={1080}
        src={'/assets/impressions/hero-image.jpg'}
        alt={'Antipasti dish'}
        className="w-full h-full object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/35" />

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
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-xl md:max-w-2xl lg:max-w-5xl h-32 px-4 md:px-8">
              <RevealTextOnView
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase tracking-[.45em] pt-8 text-white text-center"
                staggerDelay={0.08}
                animationDuration={0.8}
                triggerOnce={true}
              >
                Impressioni
              </RevealTextOnView>
            </div>
          </div>
        </ImageMouseTrail>
      </div>
    </section>
  );
};

export default HeroSection;
