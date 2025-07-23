import { ScrollTransition } from '@/components/animation/scroll/ScrollTransition';
import Footer from '@/components/shared/footer/Footer';
import HeroSection from './components/HeroSection';
import JobsSection from './components/JobsSection';

export default function JobsPage() {
  return (
    <ScrollTransition
      section1ClassName="sticky top-0 h-screen"
      section2ClassName="relative h-screen bg-white"
      // scaleRange={[1, 0.8]}
      yOffset={0}
    >
      <HeroSection />
      <div>
        <JobsSection />
        <Footer />
      </div>
    </ScrollTransition>
  );
}
