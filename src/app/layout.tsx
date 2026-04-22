import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ConstellationBackground } from '@/components/constellation-background';
import { ClientWidgets } from '@/components/client-widgets';

// Self-hosted fonts via next/font — eliminates render-blocking Google Fonts CDN request
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const BASE_URL = 'https://www.ommarketingsolutions.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'OM Marketing Solutions | Digital Marketing Agency in Ahmedabad',
    template: '%s | OM Marketing Solutions',
  },
  description:
    'OM Marketing Solutions is a digital marketing agency in Ahmedabad, Gujarat. We help Indian SMEs with web development, app development, AI automation, and performance marketing.',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'OM Marketing Solutions',
    title: 'OM Marketing Solutions | Digital Marketing Agency in Ahmedabad',
    description:
      'We help Indian SMEs modernize with affordable websites, automation, and result-oriented digital solutions. Based in Ahmedabad, Gujarat.',
    images: [
      {
        url: '/logo.jpeg',
        width: 400,
        height: 400,
        alt: 'OM Marketing Solutions logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OM Marketing Solutions | Digital Marketing Agency in Ahmedabad',
    description:
      'We help Indian SMEs modernize with affordable websites, automation, and result-oriented digital solutions. Based in Ahmedabad, Gujarat.',
    images: ['/logo.jpeg'],
  },
};

// ── JSON-LD Structured Data ────────────────────────────────────────────────────

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/#business`,
  name: 'OM Marketing Solutions',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.jpeg`,
  image: `${BASE_URL}/logo.jpeg`,
  description:
    'Digital marketing agency in Ahmedabad helping Indian SMEs with web development, app development, AI automation, and performance marketing.',
  telephone: '+919825247312',
  email: 'contact@ommarketingsolutions.in',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '23.0225',
    longitude: '72.5714',
  },
  areaServed: [
    { '@type': 'State', name: 'Gujarat' },
    { '@type': 'Country', name: 'India' },
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'HetKumar Sanjaykumar Patel',
      jobTitle: 'Founder & Business Director',
      url: 'https://www.linkedin.com/in/hetkumar-sanjaykumar-patel-54730933b',
    },
    {
      '@type': 'Person',
      name: 'Raunak Kumar Jha',
      jobTitle: 'Co-Founder & Technical Director',
      url: 'https://www.linkedin.com/in/raunak0400',
    },
  ],
  sameAs: [
    'https://www.instagram.com/ommarketing_scales',
    'https://www.linkedin.com/in/hetkumar-sanjaykumar-patel-54730933b',
    'https://www.facebook.com/people/Hetkumar-Sanjaykumar-Patel/pfbid02ovTPGF4fPBSGtwoivdEypqLP6jfMtU91PAo7G2EgkCnKNBw7BxbNmyHFKEgMqkTSl/',
    'https://github.com/OM-Marketing-Solutions',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing & Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development',       url: `${BASE_URL}/web-development`      } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'App Development',       url: `${BASE_URL}/app-development`      } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Development',    url: `${BASE_URL}/mobile-development`   } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design',          url: `${BASE_URL}/ui-ux-design`         } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inventory Management',  url: `${BASE_URL}/inventory-management` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automations',        url: `${BASE_URL}/ai-automations`       } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Marketing', url: `${BASE_URL}/performance-marketing`} },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing',     url: `${BASE_URL}/digital-marketing`    } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '9',
    reviewCount: '9',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'OM Marketing Solutions',
  description:
    'Digital marketing agency in Ahmedabad — web development, app development, AI automation, and performance marketing for Indian businesses.',
  publisher: { '@id': `${BASE_URL}/#business` },
  inLanguage: 'en-IN',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'OM Marketing Solutions',
  alternateName: 'OM Marketing',
  url: BASE_URL,
  logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.jpeg` },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+919825247312',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
    {
      '@type': 'ContactPoint',
      email: 'contact@ommarketingsolutions.in',
      contactType: 'sales',
      areaServed: 'IN',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  founders: [
    {
      '@type': 'Person',
      name: 'HetKumar Sanjaykumar Patel',
      jobTitle: 'Founder & Business Director',
      sameAs: [
        'https://www.linkedin.com/in/hetkumar-sanjaykumar-patel-54730933b',
        'https://github.com/Het161',
        'https://www.instagram.com/ommarketing_scales',
      ],
    },
    {
      '@type': 'Person',
      name: 'Raunak Kumar Jha',
      jobTitle: 'Co-Founder & Technical Director',
      sameAs: ['https://www.linkedin.com/in/raunak0400', 'https://github.com/raunak0400'],
    },
  ],
  sameAs: [
    'https://www.instagram.com/ommarketing_scales',
    'https://www.linkedin.com/in/hetkumar-sanjaykumar-patel-54730933b',
    'https://www.facebook.com/people/Hetkumar-Sanjaykumar-Patel/pfbid02ovTPGF4fPBSGtwoivdEypqLP6jfMtU91PAo7G2EgkCnKNBw7BxbNmyHFKEgMqkTSl/',
  ],
};

// ── Root Layout ────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn('dark', inter.variable, lora.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="zoho-ma"
          strategy="afterInteractive"
          src="https://cdn-in.pagesense.io/js/60064918007/79e002c3141843c78790f2ab9878a8ff.js"
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col relative')}>
        <ConstellationBackground />

        <div className="glow-bg-center" aria-hidden="true" />
        <div className="glow-bg-corner glow-top-left" aria-hidden="true" />
        <div className="glow-bg-corner glow-top-right" aria-hidden="true" />
        <div className="glow-bg-corner glow-bottom-left" aria-hidden="true" />
        <div className="glow-bg-corner glow-bottom-right" aria-hidden="true" />

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ClientWidgets />
        <Toaster />
      </body>
    </html>
  );
}
