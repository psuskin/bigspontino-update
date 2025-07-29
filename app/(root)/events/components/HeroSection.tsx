import RevealTextOnView from '@/components/animation/text/RevealTextOnView';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full   h-dvh md:h-[93.5vh]  overflow-hidden bg-secondary">
      <Image
        width={1920}
        height={1080}
        src={'/assets/events/eventiStartbild.jpg'}
        alt={'Antipasti dish'}
        className="w-full h-full object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl h-32 px-4 md:px-8">
          <RevealTextOnView
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase tracking-[.45em] pt-8 text-white text-center"
            staggerDelay={0.08}
            animationDuration={0.8}
            triggerOnce={true}
          >
            Eventi
          </RevealTextOnView>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
