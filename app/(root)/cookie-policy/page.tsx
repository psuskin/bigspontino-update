import CookiePolicyPage from './components/CookiePolicyPage';
import { generateMetadata as generateSEOMetadata } from '@/lib/metadata';

export const metadata = generateSEOMetadata({
  title: 'Cookie Policy - How We Use Cookies',
  description: 'Learn about Big Spuntino\'s cookie policy and how we use cookies to enhance your browsing experience on our restaurant website.',
  path: '/cookie-policy',
  noIndex: true,
});

const MainPage = () => {
  return (
    <main className="">
      <CookiePolicyPage />
    </main>
  );
};

export default MainPage;
