import { ServicePageLayout } from '@/components/service-page-layout';

const features = [
  {
    icon: '📦',
    title: 'Real-Time Stock Tracking',
    description:
      'Know exactly what\'s in stock, where it is, and how much — updated in real time.',
  },
  {
    icon: '⚠️',
    title: 'Low Stock Alerts',
    description:
      'Automatic notifications before you run out of critical items — no more stockouts.',
  },
  {
    icon: '🧾',
    title: 'Purchase Order Management',
    description:
      'Raise and track purchase orders directly from the system without spreadsheets.',
  },
  {
    icon: '📊',
    title: 'Sales & Stock Reports',
    description:
      'Daily, weekly, and monthly reports with visual charts for smarter decisions.',
  },
  {
    icon: '🏷️',
    title: 'Barcode & SKU Support',
    description:
      'Scan or search products instantly with barcode scanning and SKU management.',
  },
  {
    icon: '👥',
    title: 'Multi-User Access',
    description:
      'Give warehouse staff, managers, and owners separate login roles and permissions.',
  },
];

const stats = [
  { value: 'Fully Custom', label: 'Built for Your Workflow' },
  { value: 'Multi-Location', label: 'Warehouse & Branch Support' },
  { value: 'Real-Time', label: 'Stock Updates & Alerts' },
];

const whyPoints = [
  {
    title: 'Built Around Your Products',
    description:
      'No off-the-shelf compromise — the system is built specifically for your products, categories, and business processes.',
  },
  {
    title: 'Multi-Location & Multi-Branch',
    description:
      'Manage multiple warehouses, godowns, or branches from a single dashboard with per-location visibility.',
  },
  {
    title: 'Smooth Data Migration',
    description:
      'We handle migration from your existing Excel sheets or manual records — no data entry from scratch.',
  },
];

const faqs = [
  {
    question: 'Is this a custom system or an off-the-shelf product?',
    answer:
      'It\'s a fully custom system built for your specific business — your products, your workflow, your reports. Not a generic SaaS tool.',
  },
  {
    question: 'Can it handle multiple warehouses or locations?',
    answer:
      'Yes, we can build support for multiple locations, branches, or godowns with separate stock views and consolidated reporting.',
  },
  {
    question: 'Does it work on mobile?',
    answer:
      'Yes, the system is fully responsive and works on tablets and phones for warehouse staff doing stock counts or receiving goods.',
  },
  {
    question: 'Can it integrate with my billing or accounting software?',
    answer:
      'We can integrate with Tally, Zoho Books, or custom billing systems on request. API integrations are supported.',
  },
  {
    question: 'How long does it take to set up?',
    answer:
      'Initial setup, customisation, and data migration typically takes 2–4 weeks depending on the complexity of your product catalogue.',
  },
];

export default function InventoryManagementPage() {
  return (
    <ServicePageLayout
      title="Inventory Management Systems"
      subtitle="Still managing stock on Excel or manual registers? We build custom inventory systems that eliminate stock errors, prevent losses, and give you real-time control over your entire business."
      heroImage="/inventorymgmt.jpg"
      heroImageAlt="Inventory Management System"
      glowGradient="from-green-500 to-teal-500"
      features={features}
      stats={stats}
      whyPoints={whyPoints}
      faqs={faqs}
    />
  );
}
