import {
  Code,
  Warehouse,
  MessageSquare,
  TrendingUp,
  Bot,
  BrainCircuit,
  Zap,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const APP_NAME = 'Om Marketing Solutions';

export const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/#services',
    children: [
      {
        label: 'Web Development',
        href: '/services/web-development',
        description: 'Professional websites and e-commerce stores.',
      },
      {
        label: 'Inventory Management',
        href: '/services/inventory-management',
        description: 'Automate and track your stock.',
      },
      {
        label: 'WhatsApp Automation',
        href: '/services/whatsapp-automation',
        description: 'Engage customers on WhatsApp.',
      },
      {
        label: 'Digital Marketing',
        href: '/services/digital-marketing',
        description: 'Grow your online presence.',
      },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact Us', href: '/#contact' },
  { label: 'Careers', href: '/careers' },
];

export const SERVICES = [
  {
    title: 'Web Development',
    description:
      'We build professional, affordable websites and online stores to bring your traditional business into the digital world.',
    icon: Code,
    href: '/services/web-development',
    image: PlaceHolderImages.find((img) => img.id === 'service-web-dev'),
  },
  {
    title: 'Inventory Management',
    description:
      'Automate your stock control with a custom Inventory Management System (IMS) to reduce costs and prevent stockouts.',
    icon: Warehouse,
    href: '/services/inventory-management',
    image: PlaceHolderImages.find((img) => img.id === 'service-automation'),
  },
  {
    title: 'WhatsApp Automation',
    description:
      'Engage your customers 24/7 with automated WhatsApp chatbots for support, sales, and marketing.',
    icon: MessageSquare,
    href: '/services/whatsapp-automation',
    image: PlaceHolderImages.find((img) => img.id === 'service-integrations'),
  },
  {
    title: 'Digital Marketing',
    description:
      'Reach more customers online with result-oriented digital marketing strategies including SEO, SEM, and social media management.',
    icon: TrendingUp,
    href: '/services/digital-marketing',
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
      'Implemented an automated inventory management system, reducing manual work by 20 hours per week and minimizing stock errors by 95%.',
    tags: ['Automation', 'Inventory Management', 'IMS'],
    image: PlaceHolderImages.find((img) => img.id === 'project-marketsphere'),
    href: '#',
  },
  {
    title: 'Sharma Handicrafts',
    description:
      'Deployed a WhatsApp chatbot to handle customer inquiries, leading to a 50% reduction in response time and a 25% increase in sales.',
    tags: ['WhatsApp', 'Chatbot', 'Customer Engagement'],
    image: PlaceHolderImages.find((img) => img.id === 'project-quantumleap'),
    href: '#',
  },
  {
    title: 'Gupta Real Estate',
    description:
      'Executed a targeted digital marketing campaign, resulting in a 200% increase in qualified leads and a 50% reduction in cost-per-lead.',
    tags: ['Digital Marketing', 'Lead Generation', 'SEO'],
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
      "Automating our inventory has saved us countless hours and reduced errors significantly. It's a must-have for any manufacturing business.",
    author: 'Amit Patel',
    title: 'Director, Patel Manufacturing',
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-sarah-johnson'),
  },
  {
    quote:
      'The WhatsApp automation is brilliant. Our customers get instant answers and we can focus on more important tasks. Highly recommended.',
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
