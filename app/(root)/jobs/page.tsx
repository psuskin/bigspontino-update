import { ScrollTransition } from '@/components/animation/scroll/ScrollTransition';
import HeroSection from './components/HeroSection';
import JobsSection from './components/JobsSection';
import { generateMetadata as generateSEOMetadata, pageMetadata } from '@/lib/metadata';

export const metadata = generateSEOMetadata({
  title: pageMetadata.jobs.title,
  description: pageMetadata.jobs.description,
  path: '/jobs',
});

export default function JobsPage() {
  return (
    <ScrollTransition
      section1ClassName="sticky top-0"
      section2ClassName="relative bg-background"
      // scaleRange={[1, 0.8]}
      yOffset={0}
    >
      <HeroSection />
      <div>
        <JobsSection />
      </div>
    </ScrollTransition>
  );
}
