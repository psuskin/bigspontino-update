import { ScrollTransition } from '@/components/animation/scroll/ScrollTransition';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import OpeningHours from './components/OpeningHours';
import { generateMetadata as generateSEOMetadata, pageMetadata } from '@/lib/metadata';

export const metadata = generateSEOMetadata({
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <ScrollTransition
      section1ClassName="sticky top-0"
      section2ClassName="relative bg-background"
      // scaleRange={[1, 0.8]}
      yOffset={0} // Adjust this if you want some upward movement
    >
      <HeroSection />
      <div>
        <OpeningHours />
        <ContactSection />
      </div>
    </ScrollTransition>
  );
}
