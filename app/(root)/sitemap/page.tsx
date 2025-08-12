import SitemapPage from './components/SitemapPage';
import { generateMetadata as generateSEOMetadata } from '@/lib/metadata';

export const metadata = generateSEOMetadata({
  title: 'Sitemap - Website Navigation',
  description: 'Navigate through all pages of Big Spuntino website. Find menus, contact information, events, and more.',
  path: '/sitemap',
  noIndex: true,
});

const MainPage = () => {
  return (
    <main className="">
      <SitemapPage />
    </main>
  );
};

export default MainPage;
