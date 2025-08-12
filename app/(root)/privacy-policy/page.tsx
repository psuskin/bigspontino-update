import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import { generateMetadata as generateSEOMetadata } from '@/lib/metadata';

export const metadata = generateSEOMetadata({
  title: 'Privacy Policy - Data Protection & Privacy',
  description: 'Read Big Spuntino\'s privacy policy to understand how we collect, use, and protect your personal information when you visit our restaurant website.',
  path: '/privacy-policy',
  noIndex: true,
});

const PrivacyPolicy = () => {
  return (
    <main className="">
      <PrivacyPolicyPage />
    </main>
  );
};

export default PrivacyPolicy;
