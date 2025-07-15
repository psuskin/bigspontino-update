import ArchitecturalInspirations from '@/components/home/ArchitecturalInspirations';
import HeroSection from '@/components/home/hero/HeroSection';
import ItalianFlavors from '@/components/home/ItalianFlavors';
import Location from '@/components/home/Location';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Location />
      <ItalianFlavors />
      <ArchitecturalInspirations />
      <Newsletter />
    </main>
  );
}
