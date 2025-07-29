import { ScrollTransition } from '@/components/animation/scroll/ScrollTransition';
import EventSection from './components/EventSection';
import HeroSection from './components/HeroSection';

export default function EventsPage() {
  return (
    <ScrollTransition
      section1ClassName="sticky top-0 "
      section2ClassName="relative  bg-white"
      // scaleRange={[1, 0.8]}
      yOffset={0}
    >
      <HeroSection />
      <div>
        <EventSection />
      </div>
    </ScrollTransition>
  );
}
