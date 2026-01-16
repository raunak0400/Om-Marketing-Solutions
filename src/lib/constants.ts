import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  BrainCircuit,
  Bot,
  Cpu,
  Briefcase,
  Code,
  Combine,
  HeartHandshake,
  Rocket,
  TrendingUp,
  Zap,
  Users,
  Calendar,
  Mail,
  MessageSquare,
} from 'lucide-react';

export const APP_NAME = 'Om Marketing Solutions';

export const NAV_LINKS = [
  {
    label: 'Solutions',
    href: '/#services',
    children: [
      {
        label: 'Website & E-commerce Development',
        href: '/services/web-development',
        description: 'Get your business online.',
      },
      {
        label: 'Business Automation',
        href: '/services/automation',
        description: 'Streamline your operations.',
      },
      {
        label: 'Smart Customer Tools',
        href: '/services/integrations',
        description: 'Engage your customers effectively.',
      },
      {
        label: 'Digital Modernization Strategy',
        href: '/services/digital-transformation',
        description: 'Plan for future growth.',
      },
    ],
  },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Case Studies', href: '/portfolio' },
  { label: 'Consultation', href: '/estimate' },
  { label: 'Contact', href: '/#contact' },
];

export const SERVICES = [
  {
    title: 'Website & E-commerce Development',
    description:
      'We build professional, affordable websites and online stores to bring your traditional business into the digital world.',
    icon: Code,
    href: '/services/web-development',
    image: PlaceHolderImages.find((img) => img.id === 'service-web-dev'),
  },
  {
    title: 'Business Automation',
    description:
      'Save time and reduce costs by automating repetitive tasks in your sales, inventory, and daily operations.',
    icon: Zap,
    href: '/services/automation',
    image: PlaceHolderImages.find((img) => img.id === 'service-automation'),
  },
  {
    title: 'Smart Customer Tools',
    description:
      'Engage your customers 24/7 with tools like AI-powered chatbots and simple CRM systems to improve service and build loyalty.',
    icon: Bot,
    href: '/services/integrations',
    image: PlaceHolderImages.find(
      (img) => img.id === 'service-integrations'
    ),
  },
  {
    title: 'Digital Modernization Strategy',
    description:
      'Get a clear roadmap to digitize your business processes, improve efficiency, and prepare for future growth.',
    icon: BrainCircuit,
    href: '/services/digital-transformation',
    image: PlaceHolderImages.find((img) => img.id === 'service-digital'),
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    title: 'Mehta Textiles',
    description:
      'Launched a new e-commerce website, expanding their customer base beyond their local city and increasing sales by 30%.',
    tags: ['E-commerce', 'Web Development', 'Payment Gateway'],
    image: PlaceHolderImages.find((img) => img.id === 'project-innovate-corp'),
    href: '#',
  },
  {
    title: 'Patel Manufacturing',
    description:
      'Implemented an automated inventory management system, reducing manual work by 10 hours per week and minimizing stock errors.',
    tags: ['Automation', 'Inventory', 'Operational Efficiency'],
    image: PlaceHolderImages.find((img) => img.id === 'project-marketsphere'),
    href: '#',
  },
  {
    title: 'Sharma Handicrafts',
    description:
      'Developed a custom CRM to manage customer orders and communication, resulting in a 40% improvement in customer retention.',
    tags: ['CRM', 'Custom Software', 'Customer Relations'],
    image: PlaceHolderImages.find((img) => img.id === 'project-quantumleap'),
    href: '#',
  },
  {
    title: 'Gupta Real Estate',
    description:
      'Built a property listing portal with advanced search, leading to a 50% increase in qualified leads for their agents.',
    tags: ['Real Estate', 'Web App', 'Lead Generation'],
    image: PlaceHolderImages.find((img) => img.id === 'project-connectwell'),
    href: '#',
  },
  {
    title: 'Jaipur Blue Pottery',
    description:
      'Designed a visually-rich portfolio and online store, resulting in a 30% increase in online sales for a collective of artisans.',
    tags: ['Portfolio', 'Shopify', 'Branding'],
    image: PlaceHolderImages.find((img) => img.id === 'project-artisan'),
    href: '#',
  },
  {
    title: 'FinanceWala',
    description:
      'Engineered a secure web application for a financial advisory firm, ensuring compliance and enhancing client data management.',
    tags: ['FinTech', 'Security', 'Web App'],
    image: PlaceHolderImages.find((img) => img.id === 'project-nextgen'),
    href: '#',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'The new website helped us reach customers outside our city, increasing sales by 30%. Their team made the process simple and delivered great value.',
    author: 'Rajesh Mehta',
    title: 'CEO, Mehta Textiles',
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-david-chen'),
  },
  {
    quote:
      'Automating our inventory management has saved us 10 hours every week. It\'s simple, effective, and the team provided excellent support.',
    author: 'Amit Patel',
    title: 'Director, Patel Manufacturing',
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-sarah-johnson'),
  },
  {
    quote:
      'OM Marketing Solutions understood our traditional business and gave us a practical digital plan. Our efficiency has improved significantly.',
    author: 'Priya Sharma',
    title: 'Founder, Sharma Handicrafts',
    avatar: PlaceHolderImages.find(
      (img) => img.id === 'avatar-maria-rodriguez'
    ),
  },
];

export const OUR_PROCESS = [
  {
    step: '01',
    title: 'Understand Your Business (Vyavsay)',
    description:
      'We start by listening. We learn about your specific business challenges and goals to ensure our solution is a perfect fit.',
  },
  {
    step: '02',
    title: 'Create a Simple Plan',
    description:
      'We develop a clear, step-by-step plan with a fixed budget. No complex jargon, just a practical roadmap to get you results.',
  },
  {
    step: '03',
    title: 'Build & Deliver',
    description:
      'Our expert team builds your digital solution efficiently. We handle all the technical work so you can focus on your business.',
  },
  {
    step: '04',
    title: 'Measure Results & Support',
    description:
      'We ensure the solution delivers a real return on your investment. We provide ongoing support to help your business grow.',
  },
];

export const DIGITAL_TRANSFORMATION_ROADMAP = [
  {
    step: '01',
    title: 'Understand Your Business (Vyavsay)',
    description:
      'We start by listening. We learn about your specific business challenges and goals to ensure our solution is a perfect fit.',
  },
  {
    step: '02',
    title: 'Create a Simple Plan',
    description:
      'We develop a clear, step-by-step plan with a fixed budget. No complex jargon, just a practical roadmap to get you results.',
  },
  {
    step: '03',
    title: 'Build & Deliver',
    description:
      'Our expert team builds your digital solution efficiently. We handle all the technical work so you can focus on your business.',
  },
  {
    step: '04',
    title: 'Measure Results & Support',
    description:
      'We ensure the solution delivers a real return on your investment. We provide ongoing support to help your business grow.',
  },
];

export const CUSTOMER_TOOLS = [
  { name: '24/7 AI Chatbots', icon: Bot },
  { name: 'Contact Management (CRM)', icon: Users },
  { name: 'Email Marketing', icon: Mail },
  { name: 'Appointment Booking', icon: Calendar },
  { name: 'WhatsApp Integration', icon: MessageSquare },
  { name: 'Sales Tracking', icon: TrendingUp },
];
