import { ScrollTransition } from '@/components/animation/scroll/ScrollTransition';
// import ArchitecturalInspirations from '@/components/home/ArchitecturalInspirations';
import HeroSection from '@/components/home/hero/HeroSection';
import ItalianDaytimeBar from '@/components/home/ItalianDaytimeBar';
// import ItalianFlavors from '@/components/home/ItalianFlavors';
// import Location from '@/components/home/Location';
// import Newsletter from '@/components/home/Newsletter';
// import BookingPopup from '@/components/shared/popup/BookingPopup';

export default function Home() {
  return (
    <main className="">
      <ScrollTransition
        section1ClassName="h-dvh"
        section2ClassName="bg-white h-dvh"
        // scaleRange={[1, 0.8]}
        yOffset={50}
      >
        <HeroSection />
        <div>
          <ItalianDaytimeBar />
          {/* <Location /> */}
          {/* <ItalianFlavors /> */}
          {/* <ArchitecturalInspirations /> */}
          {/* <Newsletter /> */}
          {/* <BookingPopup /> */}
        </div>
      </ScrollTransition>
    </main>
  );
}
