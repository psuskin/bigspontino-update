import TermsAndConditionsPage from './components/TermsAndConditionsPage';
import { generateMetadata as generateSEOMetadata } from '@/lib/metadata';

export const metadata = generateSEOMetadata({
  title: 'Terms & Conditions - Legal Information',
  description: 'Read Big Spuntino\'s terms and conditions for using our website and services. Important legal information for our restaurant guests.',
  path: '/terms-and-conditions',
  noIndex: true,
});

const MainPage = () => {
  return (
    <main className="">
      <TermsAndConditionsPage />
    </main>
  );
};

export default MainPage;
