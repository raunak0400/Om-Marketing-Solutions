import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Briefcase,
  Code,
  Combine,
  HeartHandshake,
  Rocket,
  TrendingUp,
  Zap,
} from 'lucide-react';

export const APP_NAME = 'Apex Digital';

export const NAV_LINKS = [
  {
    label: 'Services',
    href: '/#services',
    children: [
      {
        label: 'Web Development',
        href: '/services/web-development',
        description: 'Bespoke websites that drive results.',
      },
      {
        label: 'Automation Solutions',
        href: '/services/automation',
        description: 'Streamline your business processes.',
      },
      {
        label: 'Software Integrations',
        href: '/services/integrations',
        description: 'Connect your tools for seamless workflows.',
      },
      {
        label: 'Digital Transformation',
        href: '/services/digital-transformation',
        description: 'Future-proof your business with technology.',
      },
    ],
  },
  { label: 'Our Work', href: '/services/web-development' },
  { label: 'Estimate Cost', href: '/estimate' },
  { label: 'Contact', href: '/#contact' },
];

export const SERVICES = [
  {
    title: 'Web Development',
    description:
      'We build high-performance websites that are not just visually stunning but also optimized for conversion and growth. From corporate sites to complex e-commerce platforms, we deliver digital excellence.',
    icon: Code,
    href: '/services/web-development',
    image: PlaceHolderImages.find((img) => img.id === 'service-web-dev'),
  },
  {
    title: 'Automation Solutions',
    description:
      'Unlock efficiency and scale your operations by automating repetitive tasks. Our solutions reduce manual work, minimize errors, and free up your team to focus on strategic initiatives.',
    icon: Zap,
    href: '/services/automation',
    image: PlaceHolderImages.find((img) => img.id === 'service-automation'),
  },
  {
    title: 'Business Software',
    description:
      'Leverage our expertise in integrating and customizing leading business software. We ensure your technology stack works in harmony, from CRM and ERP systems to marketing automation platforms.',
    icon: Combine,
    href: '/services/integrations',
    image: PlaceHolderImages.find(
      (img) => img.id === 'service-integrations'
    ),
  },
  {
    title: 'Digital Transformation',
    description:
      "Navigate the complexities of modernization with a clear roadmap. We partner with you to implement digital strategies that enhance customer experience and create a sustainable competitive advantage.",
    icon: Rocket,
    href: '/services/digital-transformation',
    image: PlaceHolderImages.find((img) => img.id === 'service-digital'),
  },
];

export const WEB_PROJECTS = [
  {
    title: 'Innovate Corp.',
    description:
      'A complete corporate website redesign focused on lead generation and brand authority.',
    tags: ['UI/UX', 'Web Development', 'SEO'],
    image: PlaceHolderImages.find((img) => img.id === 'project-innovate-corp'),
    href: '#',
  },
  {
    title: 'MarketSphere',
    description:
      'An e-commerce platform with custom features for a seamless shopping experience.',
    tags: ['E-commerce', 'React', 'Headless CMS'],
    image: PlaceHolderImages.find((img) => img.id === 'project-marketsphere'),
    href: '#',
  },
  {
    title: 'QuantumLeap SaaS',
    description:
      'A marketing website for a B2B software product, designed to convert visitors into trial users.',
    tags: ['SaaS', 'Next.js', 'Lead Gen'],
    image: PlaceHolderImages.find((img) => img.id === 'project-quantumleap'),
    href: '#',
  },
  {
    title: 'ConnectWell',
    description:
      'A community portal for a non-profit organization to engage with its members.',
    tags: ['Community', 'Web App', 'CMS'],
    image: PlaceHolderImages.find((img) => img.id === 'project-connectwell'),
    href: '#',
  },
  {
    title: 'Artisan Goods',
    description:
      'A visually-rich portfolio and online store for a collective of artisans.',
    tags: ['Portfolio', 'Shopify', 'Branding'],
    image: PlaceHolderImages.find((img) => img.id === 'project-artisan'),
    href: '#',
  },
  {
    title: 'NextGen Finance',
    description:
      'A secure and informative web application for a modern financial advisory firm.',
    tags: ['FinTech', 'Security', 'Web App'],
    image: PlaceHolderImages.find((img) => img.id === 'project-nextgen'),
    href: '#',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Apex Digital transformed our online presence. Their team delivered a website that exceeded our expectations in both design and performance. Our lead generation has increased by over 200% since launch.",
    author: 'Sarah Johnson',
    title: 'CEO, Innovate Corp.',
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-sarah-johnson'),
  },
  {
    quote:
      "The automation solution they implemented has been a game-changer. We're saving 20+ hours of manual work every week, allowing us to focus on growing the business. Truly a trustworthy and tech-forward partner.",
    author: 'David Chen',
    title: 'Founder, QuantumLeap SaaS',
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-david-chen'),
  },
  {
    quote:
      "Their approach to digital transformation is both strategic and practical. Apex Digital provided a clear roadmap and executed it flawlessly. We feel confident about our company's future in the digital landscape.",
    author: 'Maria Rodriguez',
    title: 'COO, MarketSphere',
    avatar: PlaceHolderImages.find(
      (img) => img.id === 'avatar-maria-rodriguez'
    ),
  },
];

export const DIGITAL_TRANSFORMATION_ROADMAP = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description:
      "We begin by conducting a thorough analysis of your current business processes, technology stack, and market position. This phase is about understanding your unique challenges and identifying the most significant opportunities for digital intervention. We'll map out your existing workflows and pinpoint key areas for improvement.",
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description:
      'Based on our findings, we develop a comprehensive digital transformation strategy. This includes defining clear objectives, selecting the right technologies, and creating a detailed project plan with timelines and milestones. Our goal is to create a roadmap that aligns with your business goals and ensures a high return on investment.',
  },
  {
    step: '03',
    title: 'Implementation & Integration',
    description:
      'This is where the plan comes to life. Our team of experts develops, implements, and integrates the new digital solutions into your existing ecosystem. We focus on a seamless transition, minimizing disruption to your operations and ensuring your team is equipped to use the new tools effectively through training and support.',
  },
  {
    step: '04',
    title: 'Optimization & Growth',
    description:
      "Digital transformation is an ongoing journey, not a one-time project. After launch, we continuously monitor performance, gather data, and identify further opportunities for optimization. We work with you as a long-term partner to adapt to market changes and drive continuous growth.",
  },
];

export const INTEGRATIONS = [
  { name: 'Salesforce', icon: HeartHandshake },
  { name: 'HubSpot', icon: TrendingUp },
  { name: 'Shopify', icon: Briefcase },
  { name: 'SAP', icon: Combine },
  { name: 'Oracle', icon: Zap },
  { name: 'QuickBooks', icon: TrendingUp },
  { name: 'Microsoft Dynamics 365', icon: Briefcase },
  { name: 'Zendesk', icon: HeartHandshake },
  { name: 'Stripe', icon: Code },
  { name: 'PayPal', icon: Code },
  { name: 'Mailchimp', icon: Zap },
  { name: 'Slack', icon: Combine },
];
