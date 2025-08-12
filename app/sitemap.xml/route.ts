import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrls = ['https://www.bigspuntino.com', 'https://www.bigspuntino.de'];
  const currentDate = new Date();

  // Define all route paths (without base)
  const routePaths = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/menus', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/events', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/history', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/impressions', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/jobs', changeFrequency: 'weekly', priority: 0.6 },
    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/legal-notice', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/sitemap', changeFrequency: 'monthly', priority: 0.2 },
  ];

  // Generate all routes for both domains
  const routes = baseUrls.flatMap(baseUrl =>
    routePaths.map(route => ({
      url: `${baseUrl}${route.path}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
      .map(
        (route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified.toISOString()}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
      )
      .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
