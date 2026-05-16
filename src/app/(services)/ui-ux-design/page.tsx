import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/service-page-layout';

export const metadata: Metadata = {
  title: 'UI/UX Design Services in Ahmedabad',
  description:
    'Professional UI/UX design in Ahmedabad — user research, Figma wireframes, high-fidelity mockups, and interactive prototypes. Full source file handover.',
};

const features = [
  {
    icon: '🔍',
    title: 'User Research',
    description:
      'Understanding your customers before drawing a single screen — decisions backed by data.',
  },
  {
    icon: '🗺️',
    title: 'Wireframing',
    description:
      'Low-fidelity blueprints to map out user flows and layout before any visual design.',
  },
  {
    icon: '🎨',
    title: 'High-Fidelity Mockups',
    description:
      'Pixel-perfect visual designs in Figma that look exactly like the final product.',
  },
  {
    icon: '📲',
    title: 'Interactive Prototypes',
    description:
      'Clickable demos you can test and share with stakeholders before development begins.',
  },
  {
    icon: '🧪',
    title: 'Usability Testing',
    description:
      'Real user feedback to identify friction points and refine the experience.',
  },
  {
    icon: '📁',
    title: 'Design Handoff',
    description:
      'Developer-ready Figma files with all assets, specs, and component notes included.',
  },
];

const stats = [
  { value: '40+ Designs', label: 'Delivered in Figma' },
  { value: '2–4 Weeks', label: 'Typical Project Duration' },
  { value: '100%', label: 'Source Files Handed Over' },
];

const whyPoints = [
  {
    title: 'Research-Driven, Not Guesswork',
    description:
      'Every design decision is grounded in user behaviour research — not assumptions or personal preferences.',
  },
  {
    title: 'Full Figma Source Files',
    description:
      'You receive complete ownership of all design assets, components, and source files on project completion.',
  },
  {
    title: 'Developer-Ready Handoff',
    description:
      'Clean specifications and component libraries that reduce misunderstandings and speed up development.',
  },
];

const faqs = [
  {
    question: 'Do I need UI/UX design before development?',
    answer:
      'Yes — good design catches problems early, aligns the team, and reduces development cost. Starting with design saves significant time and money compared to redesigning after coding.',
  },
  {
    question: 'What tools do you use for design?',
    answer:
      'We use Figma for all UI/UX work — it\'s the industry standard, supports real-time collaboration, and makes developer handoff seamless.',
  },
  {
    question: 'Can you redesign my existing app or website?',
    answer:
      'Yes, we specialise in redesigns that improve conversion rates, usability, and brand perception without losing what already works.',
  },
  {
    question: 'Will I receive the Figma source files?',
    answer:
      'Yes, all source files are handed over on project completion. You own every component, frame, and asset.',
  },
  {
    question: 'How long does a UI/UX project take?',
    answer:
      'A full design project for a web app or mobile app typically takes 2–4 weeks, depending on the number of screens and complexity.',
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

export default function UIUXDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageLayout
        title="UI/UX Design Services"
        subtitle="If users don't understand your product in seconds, they leave. We design user experiences that increase engagement, reduce drop-offs, and drive measurably more conversions."
        heroImage="/uiux.jpg"
        heroImageAlt="UI/UX Design"
        glowGradient="from-yellow-500 to-amber-500"
        features={features}
        stats={stats}
        whyPoints={whyPoints}
        faqs={faqs}
      />
    </>
  );
}
