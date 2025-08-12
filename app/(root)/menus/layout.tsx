import { generateMetadata as generateSEOMetadata, pageMetadata } from '@/lib/metadata';

export const metadata = generateSEOMetadata({
  title: pageMetadata.menus.title,
  description: pageMetadata.menus.description,
  path: '/menus',
});

export default function MenusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}