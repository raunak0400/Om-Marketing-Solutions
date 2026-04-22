import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/service-page-layout';

export const metadata: Metadata = {
  title: 'Web Development Company in Ahmedabad',
  description:
    'Professional website and e-commerce development in Ahmedabad. Mobile-first, SEO-ready websites delivered in 7–14 days. Razorpay/UPI payment integration included.',
};

const features = [
  {
    icon: '🖥️',
    title: 'Custom Website Design',
    description:
      'Unique design tailored to your brand, not a generic template.',
  },
  {
    icon: '🛒',
    title: 'E-commerce & Payments',
    description:
      'Sell online with Razorpay/UPI payment integration built right in.',
  },
  {
    icon: '📱',
    title: 'Mobile-First Responsive',
    description:
      'Looks perfect on phones, tablets, and desktops — every screen size.',
  },
  {
    icon: '⚡',
    title: 'Fast Load Speed',
    description:
      'Optimised for Google Core Web Vitals and low-bandwidth users.',
  },
  {
    icon: '🔍',
    title: 'SEO-Ready Structure',
    description: 'Built to rank on Google from day one — no retrofitting needed.',
  },
  {
    icon: '🔒',
    title: 'Secure & Maintained',
    description:
      'SSL, daily backups, and ongoing support included after launch.',
  },
];

const stats = [
  { value: '50+ Websites', label: 'Built & Delivered' },
  { value: '7–14 Days', label: 'Average Delivery Time' },
  { value: '100%', label: 'Mobile Responsive' },
];

const whyPoints = [
  {
    title: 'Fast Delivery, No Delays',
    description:
      'Most websites are delivered in 7–14 days. E-commerce stores in 14–21 days — with clear milestones throughout.',
  },
  {
    title: 'SEO-First Approach',
    description:
      'Every site is structured so Google can crawl, index, and rank it from day one. No SEO retrofitting later.',
  },
  {
    title: 'Ongoing Support Included',
    description:
      'We don\'t disappear after launch. Monthly maintenance packages cover updates, security patches, and content changes.',
  },
];

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most websites are delivered in 7–14 days. E-commerce stores typically take 14–21 days depending on the number of products and integrations required.',
  },
  {
    question: 'Will my website work on mobile phones?',
    answer:
      'Yes, every website we build is fully responsive and tested on Android and iOS devices across multiple screen sizes before delivery.',
  },
  {
    question: 'Can you migrate my existing website?',
    answer:
      'Yes, we can migrate content, SEO settings, and design from your old website to the new one without losing your Google rankings.',
  },
  {
    question: 'Do you provide website maintenance after delivery?',
    answer:
      'Yes, we offer monthly maintenance packages that include updates, security patches, performance checks, and content changes.',
  },
  {
    question: 'What information do I need to provide to get started?',
    answer:
      'We need your logo, brand colors, content (text and photos), and a list of pages you want. Don\'t worry — we guide you through everything step by step.',
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

export default function WebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageLayout
        title="Website & E-commerce Development"
        subtitle="Stop losing customers to competitors with better websites. We build conversion-focused websites and online stores designed to generate leads, increase sales, and grow your revenue."
        heroImage="/Web-Development.jpg"
        heroImageAlt="Web Development"
        glowGradient="from-blue-500 to-cyan-500"
        features={features}
        stats={stats}
        whyPoints={whyPoints}
        faqs={faqs}
      />
    </>
  );
}
