import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/service-page-layout';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Ahmedabad',
  description:
    'SEO, social media management, and content creation in Ahmedabad. 12 posts/month, Google My Business optimisation, monthly performance reports. Long-term digital growth.',
};

const features = [
  {
    icon: '🔍',
    title: 'SEO (Search Engine Optimisation)',
    description:
      'Rank on Google for keywords your customers search — organic, long-term traffic.',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    description:
      'Regular posts, reels, and stories on Instagram and Facebook that build your audience.',
  },
  {
    icon: '✍️',
    title: 'Content Creation',
    description:
      'Captions, graphics, and blog posts that build brand authority and trust.',
  },
  {
    icon: '📧',
    title: 'Email Marketing',
    description:
      'Newsletters and promotional emails to your existing customer base — zero effort from you.',
  },
  {
    icon: '⭐',
    title: 'Google My Business',
    description:
      'Optimised listing to drive local footfall, calls, and direction requests.',
  },
  {
    icon: '📈',
    title: 'Monthly Analytics Report',
    description:
      'Full breakdown of traffic, reach, engagement, and leads every month.',
  },
];

const stats = [
  { value: '12 Posts', label: 'Created Per Month' },
  { value: '3–6 Months', label: 'For Meaningful SEO Results' },
  { value: 'Monthly', label: 'Detailed Performance Reports' },
];

const whyPoints = [
  {
    title: 'We Create Everything For You',
    description:
      'Graphics, captions, hashtags, and scheduling — you just approve before publishing. Zero effort on your end.',
  },
  {
    title: 'Google My Business Included',
    description:
      'Optimising your GMB listing is often the fastest way to get local leads and is included in every package.',
  },
  {
    title: 'Real Results, Clearly Reported',
    description:
      'Monthly reports show SEO rankings, social reach, engagement trends, and lead quality — not vanity metrics.',
  },
];

const faqs = [
  {
    question: 'How long does SEO take to show results?',
    answer:
      'SEO is a long-term strategy. Most businesses see meaningful ranking improvements in 3–6 months. We set realistic expectations and track progress every month.',
  },
  {
    question: 'How many posts per week do you create for social media?',
    answer:
      'Our standard package includes 12 posts per month (3 per week) across Instagram and Facebook. Higher-frequency packages are available.',
  },
  {
    question: 'Do you create the graphics and content, or do I need to provide them?',
    answer:
      'We create everything — graphics, captions, hashtags, and post scheduling. You review and approve before anything goes live.',
  },
  {
    question: 'Can you manage my Google My Business listing?',
    answer:
      'Yes, optimising your GMB listing is included and is often the fastest way to start getting local leads and phone calls.',
  },
  {
    question: 'Do you provide reports?',
    answer:
      'Yes, you receive a detailed monthly report covering SEO keyword rankings, social media reach, engagement, and overall campaign performance.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function DigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageLayout
        title="Digital Marketing"
        subtitle="Struggling to generate consistent leads online? We build long-term digital growth strategies that increase visibility, attract qualified traffic, and turn your brand into a revenue-generating asset."
        heroImage="/digimarketing.jpg"
        heroImageAlt="Digital Marketing"
        glowGradient="from-orange-500 to-red-500"
        features={features}
        stats={stats}
        whyPoints={whyPoints}
        faqs={faqs}
      />
    </>
  );
}
