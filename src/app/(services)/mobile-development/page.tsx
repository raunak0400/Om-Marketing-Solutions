import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/service-page-layout';

export const metadata: Metadata = {
  title: 'Mobile App Development in Ahmedabad',
  description:
    'iOS and Android mobile app development in Ahmedabad using React Native. Single codebase, both platforms. App Store and Play Store submission included.',
};

const features = [
  {
    icon: '📱',
    title: 'iOS & Android Apps',
    description:
      'One codebase, two platforms — built with React Native for maximum efficiency.',
  },
  {
    icon: '🎨',
    title: 'Native-Feeling UI',
    description:
      'Smooth animations and platform-specific design patterns that feel at home.',
  },
  {
    icon: '🔔',
    title: 'Push Notifications',
    description:
      'Re-engage customers with targeted, personalised in-app notifications.',
  },
  {
    icon: '🛍️',
    title: 'In-App Purchases',
    description:
      'Sell products, subscriptions, or services directly inside the app.',
  },
  {
    icon: '📍',
    title: 'Location & Maps',
    description:
      'Delivery tracking, store locators, and geofencing support built in.',
  },
  {
    icon: '🔄',
    title: 'App Store Publishing',
    description:
      'We handle the full submission process for Google Play Store and Apple App Store.',
  },
];

const stats = [
  { value: '20+ Apps', label: 'Published on Both Stores' },
  { value: 'iOS & Android', label: 'Single Codebase' },
  { value: '6–12 Weeks', label: 'Typical Build Time' },
];

const whyPoints = [
  {
    title: 'One Codebase, Two Platforms',
    description:
      'React Native means faster development and lower cost — no need to build separate iOS and Android apps.',
  },
  {
    title: 'Full App Store Handling',
    description:
      'We manage the entire submission process including screenshots, metadata, and compliance for both stores.',
  },
  {
    title: 'Offline Capability',
    description:
      'Key features work without internet — critical for users on patchy connections across India.',
  },
];

const faqs = [
  {
    question: 'Do you build for both Android and iOS?',
    answer:
      'Yes, we use React Native to build one app that works natively on both platforms — saving time and cost compared to building two separate apps.',
  },
  {
    question: 'How long does a mobile app take to build?',
    answer:
      'Typically 6–12 weeks depending on complexity and the number of features. We provide a detailed timeline before starting.',
  },
  {
    question: 'Will you publish the app to the stores?',
    answer:
      'Yes, we handle the full submission process for both Google Play Store and Apple App Store, including compliance requirements.',
  },
  {
    question: 'Can the app work offline?',
    answer:
      'Yes, we can build offline functionality for key features so users can access the app without an internet connection.',
  },
  {
    question: 'How much does a mobile app cost?',
    answer:
      'Pricing depends on features and complexity. Contact us for a free estimate — we work within your budget and give a clear breakdown upfront.',
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

export default function MobileDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageLayout
        title="Mobile App Development"
        subtitle="Reach your customers on the go with beautifully designed mobile applications. We build cross-platform apps for iOS and Android that engage users and drive real business growth."
        heroImage="/mobiledev.jpg"
        heroImageAlt="Mobile App Development"
        glowGradient="from-pink-500 to-purple-500"
        features={features}
        stats={stats}
        whyPoints={whyPoints}
        faqs={faqs}
      />
    </>
  );
}
