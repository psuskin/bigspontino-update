import LegalNoticePage from './components/LegalNoticePage';
import { generateMetadata as generateSEOMetadata } from '@/lib/metadata';

export const metadata = generateSEOMetadata({
  title: 'Legal Notice - Impressum',
  description: 'Legal notice and impressum for Big Spuntino restaurant. Contact information and legal details as required by German law.',
  path: '/legal-notice',
  noIndex: true,
});

const MainPage = () => {
  return (
    <main className="">
      <LegalNoticePage />
    </main>
  );
};

export default MainPage;
