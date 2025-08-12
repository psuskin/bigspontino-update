import { Metadata } from 'next';
import { getCanonicalUrl, getHreflangAlternatives } from './domain-config';

// Base URL for the website
export const baseUrl = 'https://www.bigspuntino.com';

// Common metadata for the restaurant
export const restaurantInfo = {
  name: 'Big Spuntino',
  description: 'Authentic Italian restaurant in Hamburg-Winterhude serving traditional Italian cuisine, spuntini, and artisanal cocktails in a warm, welcoming atmosphere.',
  address: 'Mühlenkamp 8, 22303 Hamburg, Germany',
  phone: '+49 40 / 69 45 68 28',
  email: 'mail@bigspuntino.de',
  website: 'https://www.bigspuntino.com',
  cuisine: 'Italian',
  priceRange: '€€',
  openingHours: {
    monday: 'Closed',
    tuesday: 'Closed',
    wednesday: '11:00-23:00',
    thursday: '11:00-23:00',
    friday: '11:00-23:00',
    saturday: '10:00-23:00',
    sunday: '10:00-17:00',
  },
};

// Keywords for SEO
export const keywords = [
  'Big Spuntino',
  'Italian restaurant Hamburg',
  'Winterhude restaurant',
  'authentic Italian cuisine',
  'Italian spuntini',
  'Hamburg dining',
  'Italian cocktails',
  'Mühlenkamp restaurant',
  'Italian aperitivo',
  'traditional Italian food',
  'Hamburg Italian',
  'Italian daytime bar',
  'Italian brunch Hamburg',
  'private dining Hamburg',
  'Italian wine Hamburg',
  'artisanal pizza Hamburg',
  'Italian desserts',
  'Hamburg Winterhude dining',
  'Italian hospitality',
  'Mediterranean cuisine Hamburg',
];

// Generate structured data for restaurant
export const generateRestaurantStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurantInfo.name,
    description: restaurantInfo.description,
    url: restaurantInfo.website,
    telephone: restaurantInfo.phone,
    email: restaurantInfo.email,
    servesCuisine: restaurantInfo.cuisine,
    priceRange: restaurantInfo.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mühlenkamp 8',
      addressLocality: 'Hamburg',
      addressRegion: 'Hamburg',
      postalCode: '22303',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.5844,
      longitude: 10.0281,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday', 'Thursday', 'Friday'],
        opens: '11:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/bigspuntino',
      'https://www.facebook.com/bigspuntino',
    ],
    hasMenu: `${baseUrl}/menus`,
    acceptsReservations: true,
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    currenciesAccepted: 'EUR',
  };
};

// Generate base metadata
export const generateMetadata = ({
  title,
  description,
  path = '',
  images = [],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  images?: string[];
  noIndex?: boolean;
}): Metadata => {
  const fullTitle = title ? `${title} | ${restaurantInfo.name}` : restaurantInfo.name;
  const fullDescription = description || restaurantInfo.description;
  const url = `${baseUrl}${path}`;
  
  const defaultImages = [
    {
      url: `${baseUrl}/assets/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: `${restaurantInfo.name} - Authentic Italian Restaurant in Hamburg`,
    },
  ];
  
  const metadataImages = images.length > 0 
    ? images.map(img => ({ url: `${baseUrl}${img}`, width: 1200, height: 630, alt: fullTitle }))
    : defaultImages;

  const canonicalUrl = getCanonicalUrl(path);
  const hreflangAlternatives = getHreflangAlternatives(path);

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords.join(', '),
    authors: [{ name: restaurantInfo.name }],
    creator: restaurantInfo.name,
    publisher: restaurantInfo.name,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: canonicalUrl,
      languages: hreflangAlternatives,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: ['de_DE'],
      url,
      title: fullTitle,
      description: fullDescription,
      siteName: restaurantInfo.name,
      images: metadataImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: metadataImages.map(img => img.url),
      creator: '@bigspuntino',
      site: '@bigspuntino',
    },
    other: {
      'business:contact_data:street_address': 'Mühlenkamp 8',
      'business:contact_data:locality': 'Hamburg',
      'business:contact_data:region': 'Hamburg',
      'business:contact_data:postal_code': '22303',
      'business:contact_data:country_name': 'Germany',
      'business:contact_data:phone_number': restaurantInfo.phone,
      'business:contact_data:email': restaurantInfo.email,
      'business:contact_data:website': restaurantInfo.website,
      'place:location:latitude': '53.5844',
      'place:location:longitude': '10.0281',
    },
  };
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: 'Authentic Italian Restaurant in Hamburg-Winterhude',
    description: 'Experience authentic Italian cuisine at Big Spuntino in Hamburg-Winterhude. Traditional spuntini, artisanal cocktails, and warm Italian hospitality. Book your table today.',
  },
  menus: {
    title: 'Italian Menu - Traditional Spuntini & Authentic Dishes',
    description: 'Discover our authentic Italian menu featuring traditional spuntini, fresh pasta, artisanal pizzas, and classic Italian desserts. From brunch to dinner, taste Italy in Hamburg.',
  },
  contact: {
    title: 'Contact & Reservations - Book Your Table',
    description: 'Contact Big Spuntino for reservations and inquiries. Located at Mühlenkamp 8, Hamburg-Winterhude. Call +49 40 / 69 45 68 28 or email mail@bigspuntino.de',
  },
  events: {
    title: 'Private Events & Special Occasions',
    description: 'Host your special events at Big Spuntino. Private dining, corporate events, and celebrations with authentic Italian cuisine and warm hospitality.',
  },
  history: {
    title: 'Our Story - Italian Heritage in Hamburg',
    description: 'Learn about Big Spuntino\'s story and our commitment to bringing authentic Italian culinary traditions to Hamburg-Winterhude since 2025.',
  },
  impressions: {
    title: 'Gallery - Atmosphere & Italian Ambiance',
    description: 'Explore the warm, inviting atmosphere of Big Spuntino through our gallery. See our Italian-inspired interior, delicious dishes, and vibrant dining experience.',
  },
  jobs: {
    title: 'Careers - Join Our Italian Famiglia',
    description: 'Join the Big Spuntino team! We\'re looking for passionate individuals to be part of our Italian famiglia. Explore career opportunities in Hamburg\'s favorite Italian restaurant.',
  },
};