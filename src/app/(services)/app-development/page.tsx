import { ServicePageLayout } from '@/components/service-page-layout';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const appDevImage = PlaceHolderImages.find((img) => img.id === 'service-web-dev');

const features = [
  {
    icon: '⚙️',
    title: 'Custom Web Application',
    description:
      'Built specifically for your business workflow — not off-the-shelf software.',
  },
  {
    icon: '👤',
    title: 'User Authentication',
    description:
      'Secure login and role-based access for staff, admins, and customers.',
  },
  {
    icon: '📊',
    title: 'Admin Dashboard',
    description:
      'Full control panel to manage users, data, orders, or bookings in real time.',
  },
  {
    icon: '🔗',
    title: 'Third-party Integrations',
    description:
      'Connect with WhatsApp, payment gateways, SMS APIs, and more.',
  },
  {
    icon: '☁️',
    title: 'Cloud Deployment',
    description:
      'Hosted on reliable cloud infrastructure with 99.9% uptime guarantee.',
  },
  {
    icon: '📈',
    title: 'Scalable Architecture',
    description:
      'Built to handle growth from your first 100 users to 100,000+.',
  },
];

const stats = [
  { value: '30+ Apps', label: 'Built & Delivered' },
  { value: '6–10 Weeks', label: 'Typical Timeline' },
  { value: '100%', label: 'Source Code Ownership' },
];

const whyPoints = [
  {
    title: 'You Own the Code',
    description:
      'Full source code handover on project completion — no vendor lock-in, no ongoing licence fees.',
  },
  {
    title: 'MERN Stack Experts',
    description:
      'We use MongoDB, Express, React, and Node.js — the modern stack used by India\'s top startups.',
  },
  {
    title: 'Scalable from Day One',
    description:
      'Architecture built to grow with you. Add new modules or features any time without rebuilding from scratch.',
  },
];

const faqs = [
  {
    question: 'What kind of web apps do you build?',
    answer:
      'CRM systems, booking platforms, order management tools, customer portals, employee management systems, and more — tailored to your exact workflow.',
  },
  {
    question: 'How long does development take?',
    answer:
      'Simple apps take 3–4 weeks. Complex multi-role systems typically take 6–10 weeks. We give a clear timeline before starting.',
  },
  {
    question: 'Will I own the source code?',
    answer:
      'Yes, full source code ownership is handed over on project completion. You can host it anywhere and modify it freely.',
  },
  {
    question: 'Can you add features later after launch?',
    answer:
      'Absolutely. We build apps with scalability in mind and can add new modules or features at any time post-launch.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We use the MERN stack — MongoDB, Express, React, and Node.js — for fast, modern, and scalable web applications.',
  },
];

export default function AppDevelopmentPage() {
  return (
    <ServicePageLayout
      title="Custom Application Development"
      subtitle="Still managing your business on Excel, WhatsApp, or outdated software? We build custom applications that automate operations, reduce manual errors, and save you hours every week."
      heroImage={appDevImage?.imageUrl ?? '/Web-Development.jpg'}
      heroImageAlt="App Development"
      glowGradient="from-purple-500 to-indigo-500"
      features={features}
      stats={stats}
      whyPoints={whyPoints}
      faqs={faqs}
    />
  );
}
