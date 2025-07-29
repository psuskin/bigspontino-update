import { ScrollTransition } from '@/components/animation/scroll/ScrollTransition';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';

export default function Impressions() {
  return (
    <ScrollTransition
      section1ClassName="sticky top-0"
      section2ClassName="relative bg-white"
      // scaleRange={[1, 0.8]}
      yOffset={0}
    >
      <HeroSection />
      <div>
        <GallerySection />
      </div>
    </ScrollTransition>
  );
}
