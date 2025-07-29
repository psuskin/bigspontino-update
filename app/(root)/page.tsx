import { ScrollTransition } from '@/components/animation/scroll/ScrollTransition';
import ArchitecturalInspirations from '@/components/home/ArchitecturalInspirations';
import HeroSection from '@/components/home/hero/HeroSection';
// import ItalianFlavors from '@/components/home/ItalianFlavors';
// import Location from '@/components/home/Location';
// import Newsletter from '@/components/home/Newsletter';
// import Footer from '@/components/shared/footer/Footer';
// import BookingPopup from '@/components/shared/popup/BookingPopup';

export default function Home() {
  return (
    <main className="">
      <ScrollTransition
        section1ClassName=""
        section2ClassName="bg-white"
        // scaleRange={[1, 0.8]}
        yOffset={50}
      >
        <HeroSection />
        <div>
          {/* <Location /> */}
          {/* <ItalianFlavors /> */}
          <ArchitecturalInspirations />
          {/* <Newsletter /> */}
          {/* <BookingPopup /> */}
          {/* <Footer /> */}
        </div>
      </ScrollTransition>
    </main>
  );
}
