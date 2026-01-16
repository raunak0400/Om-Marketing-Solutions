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
} from 'lucide-react';

export const APP_NAME = 'Neno Technology';

export const NAV_LINKS = [
  {
    label: 'Solutions',
    href: '/#services',
    children: [
      {
        label: 'Custom AI Development',
        href: '/services/web-development',
        description: 'Bespoke AI solutions for your needs.',
      },
      {
        label: 'Business Process Automation',
        href: '/services/automation',
        description: 'Streamline your business processes.',
      },
      {
        label: 'AI-Powered Chatbots',
        href: '/services/integrations',
        description: 'Engage customers with intelligent chatbots.',
      },
      {
        label: 'Machine Learning Models',
        href: '/services/digital-transformation',
        description: 'Leverage data with custom ML models.',
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
    title: 'Custom AI Development',
    description:
      'We build high-performance, secure, and scalable web applications tailored to your specific business requirements, from corporate sites to complex platforms.',
    icon: Code,
    href: '/services/web-development',
    image: PlaceHolderImages.find((img) => img.id === 'service-web-dev'),
  },
  {
    title: 'Business Process Automation',
    description:
      'We identify and automate repetitive, manual tasks within your workflows to increase operational efficiency, reduce errors, and enable your team to focus on high-value work.',
    icon: Zap,
    href: '/services/automation',
    image: PlaceHolderImages.find((img) => img.id === 'service-automation'),
  },
  {
    title: 'AI-Powered Chatbots',
    description:
      'We connect your disparate software systems into a unified ecosystem. Streamline workflows, eliminate data silos, and unlock cross-platform productivity.',
    icon: Bot,
    href: '/services/integrations',
    image: PlaceHolderImages.find(
      (img) => img.id === 'service-integrations'
    ),
  },
  {
    title: 'Machine Learning Models',
    description:
      'We provide strategic guidance and technical implementation to modernize your business, from legacy system migration to the adoption of cloud-native infrastructure.',
    icon: BrainCircuit,
    href: '/services/digital-transformation',
    image: PlaceHolderImages.find((img) => img.id === 'service-digital'),
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    title: 'Innovate Corp.',
    description:
      'Executed a complete corporate website redesign, resulting in a 40% increase in qualified leads and enhanced brand authority.',
    tags: ['UI/UX', 'Web Development', 'Lead Gen'],
    image: PlaceHolderImages.find((img) => img.id === 'project-innovate-corp'),
    href: '#',
  },
  {
    title: 'MarketSphere',
    description:
      'Developed a scalable e-commerce platform with custom inventory management, leading to a 25% improvement in operational efficiency.',
    tags: ['E-commerce', 'React', 'Headless CMS'],
    image: PlaceHolderImages.find((img) => img.id === 'project-marketsphere'),
    href: '#',
  },
  {
    title: 'QuantumLeap SaaS',
    description:
      'Launched a high-converting marketing site for a B2B software product, achieving a 50% increase in trial sign-ups.',
    tags: ['SaaS', 'Next.js', 'Conversion Optimization'],
    image: PlaceHolderImages.find((img) => img.id === 'project-quantumleap'),
    href: '#',
  },
  {
    title: 'ConnectWell',
    description:
      'Built a community portal for a non-profit to increase member engagement by 60% through new interactive features.',
    tags: ['Community', 'Web App', 'CMS'],
    image: PlaceHolderImages.find((img) => img.id === 'project-connectwell'),
    href: '#',
  },
  {
    title: 'Artisan Goods',
    description:
      'Designed a visually-rich portfolio and online store, resulting in a 30% increase in online sales for a collective of artisans.',
    tags: ['Portfolio', 'Shopify', 'Branding'],
    image: PlaceHolderImages.find((img) => img.id === 'project-artisan'),
    href: '#',
  },
  {
    title: 'NextGen Finance',
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
      "Neno Technology was instrumental in our digital transformation. The new website exceeded our expectations and has directly resulted in a significant increase in lead generation.",
    author: 'Sarah Johnson',
    title: 'CEO, Innovate Corp.',
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-sarah-johnson'),
  },
  {
    quote:
      "The automation solution implemented by Neno Technology has been a game-changer for our operational efficiency. Their team is a reliable and technically proficient partner.",
    author: 'David Chen',
    title: 'Founder, QuantumLeap SaaS',
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-david-chen'),
  },
  {
    quote:
      "Neno Technology's strategic approach and flawless execution provided us with a clear path to modernization. We are now better positioned for future growth in the digital landscape.",
    author: 'Maria Rodriguez',
    title: 'COO, MarketSphere',
    avatar: PlaceHolderImages.find(
      (img) => img.id === 'avatar-maria-rodriguez'
    ),
  },
];

export const OUR_PROCESS = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description:
      "We analyze your systems, processes, and objectives to identify key opportunities for impact and growth. This phase ensures our solution is perfectly aligned with your business needs.",
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description:
      'We develop a detailed strategic roadmap, including technical architecture, project milestones, and KPIs, to ensure alignment with your long-term goals and a clear path to ROI.',
  },
  {
    step: '03',
    title: 'Implementation & Integration',
    description:
      'Our expert team executes the plan with precision, developing and integrating your solution with a focus on quality, security, and minimal disruption to your daily operations.',
  },
  {
    step: '04',
    title: 'Optimization & Growth',
    description:
      "Post-launch, we provide ongoing support and performance analysis to ensure the solution delivers on its promise and evolves with your business, driving continuous, sustainable growth.",
  },
];

export const DIGITAL_TRANSFORMATION_ROADMAP = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description:
      "We analyze your systems, processes, and objectives to identify key opportunities for impact and growth. This phase ensures our solution is perfectly aligned with your business needs.",
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description:
      'We develop a detailed strategic roadmap, including technical architecture, project milestones, and KPIs, to ensure alignment with your long-term goals and a clear path to ROI.',
  },
  {
    step: '03',
    title: 'Implementation & Integration',
    description:
      'Our expert team executes the plan with precision, developing and integrating your solution with a focus on quality, security, and minimal disruption to your daily operations.',
  },
  {
    step: '04',
    title: 'Optimization & Growth',
    description:
      "Post-launch, we provide ongoing support and performance analysis to ensure the solution delivers on its promise and evolves with your business, driving continuous, sustainable growth.",
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
