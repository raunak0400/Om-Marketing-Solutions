import {
  Code,
  Warehouse,
  Phone,
  TrendingUp,
  Bot,
  BrainCircuit,
  Zap,
  Smartphone,
  Palette,
  Target,
  Search,
  Share2,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const APP_NAME = 'OM Marketing Solutions';

export const NAV_LINKS = [
  {
    label: 'Services',
    href: '/#services',
    children: [
      {
        label: 'Web Development',
        href: '/web-development',
        description: 'Professional websites and e-commerce stores.',
      },
      {
        label: 'App Development',
        href: '/app-development',
        description: 'Custom web applications for your business.',
      },
      {
        label: 'Mobile Development',
        href: '/mobile-development',
        description: 'iOS and Android mobile apps.',
      },
      {
        label: 'UI/UX Design',
        href: '/ui-ux-design',
        description: 'Beautiful and intuitive user interfaces.',
      },
      {
        label: 'Inventory Management',
        href: '/inventory-management',
        description: 'Automate and track your stock.',
      },
      {
        label: 'AI Automations',
        href: '/ai-automations',
        description: 'Intelligent automation solutions.',
      },
      {
        label: 'Performance Marketing',
        href: '/performance-marketing',
        description: 'Data-driven ROI-focused campaigns.',
      },
      {
        label: 'Digital Marketing',
        href: '/digital-marketing',
        description: 'Grow your online presence.',
      },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
];

export const SERVICES = [
  {
    title: 'Web Development',
    description:
      'We build professional, affordable websites and online stores to bring your traditional business into the digital world.',
    icon: Code,
    href: '/web-development',
    image: PlaceHolderImages.find((img) => img.id === 'service-web-dev'),
  },
  {
    title: 'App Development',
    description:
      'Custom web applications tailored to your business needs with powerful features and seamless user experience.',
    icon: Code,
    href: '/app-development',
    image: PlaceHolderImages.find((img) => img.id === 'service-web-dev'),
  },
  {
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android that engage your customers on the go.',
    icon: Smartphone,
    href: '/mobile-development',
    image: PlaceHolderImages.find((img) => img.id === 'service-automation'),
  },
  {
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive interfaces that provide exceptional user experiences and drive conversions.',
    icon: Palette,
    href: '/ui-ux-design',
    image: PlaceHolderImages.find((img) => img.id === 'service-digital'),
  },
  {
    title: 'Inventory Management',
    description:
      'Automate your stock control with a custom Inventory Management System (IMS) to reduce costs and prevent stockouts.',
    icon: Warehouse,
    href: '/inventory-management',
    image: PlaceHolderImages.find((img) => img.id === 'service-automation'),
  },
  {
    title: 'AI Automations',
    description:
      'Intelligent automation solutions powered by AI to streamline operations, enhance customer engagement, and boost productivity.',
    icon: Bot,
    href: '/ai-automations',
    image: PlaceHolderImages.find((img) => img.id === 'service-integrations'),
  },
  {
    title: 'Performance Marketing',
    description:
      'Data-driven marketing campaigns optimized for maximum ROI with measurable results and continuous improvement.',
    icon: Target,
    href: '/performance-marketing',
    image: PlaceHolderImages.find((img) => img.id === 'service-digital'),
  },
  {
    title: 'Digital Marketing',
    description:
      'Reach more customers online with result-oriented digital marketing strategies including SEO, SEM, and social media management.',
    icon: TrendingUp,
    href: '/digital-marketing',
    image: PlaceHolderImages.find((img) => img.id === 'service-digital'),
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    title: 'TT Marketing Solutions',
    description:
      'A professional digital marketing agency website built for TT Marketing Solutions. Features a modern, responsive design with service showcases, portfolio sections, and lead generation forms to help businesses grow their online presence.',
    tags: ['Next.js', 'Tailwind CSS', 'Digital Marketing', 'Responsive', 'SEO'],
    image: { imageUrl: '/ttmarketing.png', imageHint: 'TT Marketing Solutions website' },
    href: 'https://www.ttmarketing.co.in/',
    github: 'https://github.com/OM-Marketing-Solutions/TT-MARKETING',
  },
  {
    title: 'Aurora-Air (NULL POINT)',
    description:
      'A cutting-edge air quality intelligence system combining NASA\'s TEMPO satellite observations with ground sensor networks. Built for NASA Space Apps Challenge 2024, featuring multi-source data fusion and machine learning for unprecedented accuracy in air pollution monitoring.',
    tags: ['NASA TEMPO', 'AI/ML', 'Data Fusion', 'Python', 'React', 'Docker'],
    image: PlaceHolderImages.find((img) => img.id === 'project-quantumleap'),
    href: 'https://nullpoint-x-itnu.vercel.app/',
    github: 'https://github.com/raunak0400/Nullpoint-x-ITNU',
  },
  {
    title: 'Het Patel - Portfolio Website',
    description:
      'A modern backend developer portfolio showcasing scalable REST APIs and microservices projects. Features SmartWork 360 productivity platform, NASA Space Apps weather forecasting, and Campus Life social platform. Built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'Portfolio', 'FastAPI', 'Python'],
    image: { imageUrl: '/hetmkc.png', imageHint: 'Het Patel portfolio website' },
    href: 'https://buildbyhet.vercel.app/',
    github: 'https://github.com/Het161/buildbyhet',
  },
  {
    title: 'Hospital Medical Information System',
    description:
      'Healthcare patient management system with JWT authentication, role-based access control, advanced patient records management, search with pagination, and admin analytics dashboard. Built with React and Node.js.',
    tags: ['Healthcare', 'React', 'Node.js', 'MongoDB', 'JWT', 'RBAC'],
    image: PlaceHolderImages.find((img) => img.id === 'project-connectwell'),
    href: '#',
    github: 'https://github.com/raunak0400/Hospital-Medical-Information-System',
  },
  {
    title: 'OM Marketing - Business Website',
    description:
      'Professional business website for Gujarat\'s leading weighing scale & note counting machine supplier. Full-stack solution with Next.js 15, FastAPI, PostgreSQL, featuring real-time inventory management, admin dashboard, and automated email notifications.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'E-commerce', 'Admin Dashboard'],
    image: PlaceHolderImages.find((img) => img.id === 'project-artisan'),
    href: 'https://om-marketing.vercel.app/',
    github: 'https://github.com/Het161/OM-Marketing',
  },
  {
    title: 'GitHub Readme Generator',
    description:
      'A simple and powerful tool to create professional GitHub profile README files. Features interactive form, live preview, badge support, markdown formatting, animated typing SVG, GitHub stats cards, social media integration, and 100+ technology icons.',
    tags: ['React', 'Tailwind CSS', 'Markdown', 'GitHub API', 'UI/UX'],
    image: { imageUrl: '/readme-generator-ss.png', imageHint: 'GitHub README Generator interface' },
    href: 'https://readme-generator-github-abhijeetbhale.netlify.app/',
    github: 'https://github.com/abhijeetBhale/Readme-Generator',
  },
  {
    title: 'ATS Resume Checker',
    description:
      'An intelligent resume analyzer that evaluates resumes against ATS systems. Features AI-powered analysis, keyword matching, compatibility scoring, and actionable feedback to help job seekers optimize their resumes for applicant tracking systems.',
    tags: ['React', 'AI/ML', 'NLP', 'Node.js', 'Career Tools'],
    image: { imageUrl: '/ATS-Resume-SS.png', imageHint: 'ATS Resume Checker dashboard' },
    href: 'https://ats-resume-checker-frontend.onrender.com/',
    github: 'https://github.com/abhijeetBhale/ATS-Resume-Checker',
  },
  {
    title: 'Boost AI',
    description:
      'A smart chat assistant with user authentication, image upload via ImageKit, markdown support, and per-user chat history. Built using React, Node.js, and MongoDB with secure Clerk authentication for seamless and responsive conversations.',
    tags: ['React', 'Node.js', 'MongoDB', 'Clerk', 'ImageKit', 'Markdown'],
    image: { imageUrl: '/Boost_AI SS.png', imageHint: 'Boost AI chat interface' },
    href: 'https://boost-ai-chat.vercel.app/',
    github: 'https://github.com/abhijeetBhale/chatgpt-clone',
  },
  {
    title: 'Pinterest Clone',
    description:
      'A Pinterest-inspired image sharing platform with masonry-style responsive grid layout, infinite scrolling, user authentication, and full-stack MERN architecture. Features client-side routing and dynamic image loading for seamless browsing.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Masonry Layout'],
    image: { imageUrl: '/pinterest-clone .png', imageHint: 'Pinterest clone masonry layout' },
    href: '#',
    github: 'https://github.com/abhijeetBhale/Pinterest-Clone',
  },
  {
    title: 'Finger Fiasco',
    description:
      'A fast-paced typing game that tests speed and accuracy with randomly generated words. Features real-time typing challenges, countdown timer, scoring system, accuracy tracking, and fully responsive design for desktop and mobile.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Game', 'Typing Speed'],
    image: { imageUrl: '/finger-fiasco.png', imageHint: 'Finger Fiasco typing game' },
    href: 'https://abhijeetbhale.github.io/FingerFiasco/home.html',
    github: 'https://github.com/abhijeetBhale/FingerFiasco',
  },
  {
    title: 'Cheese Oven',
    description:
      'A modern, responsive landing page for a pizza restaurant showcasing menu, best sellers with ratings, customer testimonials, and location details. Features responsive navigation, hero section, add-to-cart functionality, and embedded Google Maps.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Landing Page', 'Responsive'],
    image: { imageUrl: '/Pizza-Store-Landing-Page.png', imageHint: 'Cheese Oven pizza restaurant landing page' },
    href: 'https://abhijeetbhale.github.io/Landing-Page-Project-Cheese-Oven/',
    github: 'https://github.com/abhijeetBhale/Landing-Page-Project-Cheese-Oven',
  },
  {
    title: 'Smart City Management Platform',
    description:
      'A comprehensive IoT-enabled city management platform with real-time monitoring and analytics. Features traffic management, environmental monitoring with AQI tracking, waste management with smart bins, energy grid monitoring, emergency response system, and predictive analytics powered by AI/ML.',
    tags: ['React', 'Flask', 'MongoDB', 'WebSocket', 'IoT', 'AI/ML', 'Docker'],
    image: { imageUrl: '/smarty.png', imageHint: 'Smart City Management Platform dashboard' },
    href: '#',
    github: 'https://github.com/raunak0400/Smart-city',
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

export const DIGITAL_TRANSFORMATION_ROADMAP = [
  {
    step: '01',
    title: 'Digital Readiness Assessment',
    description: 'We evaluate your current processes, systems, and digital capabilities to identify key areas for improvement and opportunity. This foundational step ensures our strategy is tailored to your unique business context.',
    templateUrl: '#',
  },
  {
    step: '02',
    title: 'Technology & Platform Selection',
    description: 'Based on the assessment, we recommend the right technology stack—from ERP and CRM systems to e-commerce platforms and cloud infrastructure. Our goal is to select scalable, cost-effective solutions that align with your long-term vision.',
    templateUrl: '#',
  },
  {
    step: '03',
    title: 'Implementation Roadmap',
    description: 'We create a phased implementation plan with clear timelines, milestones, and budget allocations. This roadmap minimizes disruption and ensures a smooth transition, allowing for incremental adoption and quick wins.',
    templateUrl: '#',
  },
  {
    step: '04',
    title: 'Data Migration & Integration',
    description: 'Our team securely migrates your existing data to the new systems and ensures seamless integration between all platforms. This creates a single source of truth and enables unified data analytics across your organization.',
    templateUrl: '#',
  },
  {
    step: '05',
    title: 'Training & Change Management',
    description: 'We provide comprehensive training for your team to ensure they are proficient with the new tools and workflows. Our change management support helps foster a culture of digital adoption and continuous improvement.',
    templateUrl: '#',
  },
];

export const CUSTOMER_TOOLS = [
  { name: 'AI Chatbots', icon: Bot, description: '24/7 automated customer support' },
  { name: 'CRM Systems', icon: BrainCircuit, description: 'Manage customer relationships' },
  { name: 'Email Marketing', icon: TrendingUp, description: 'Nurture leads and drive sales' },
  { name: 'Analytics Dashboards', icon: Zap, description: 'Track performance and KPIs' },
  { name: 'Booking Systems', icon: Code, description: 'Automate appointments and scheduling' },
  { name: 'Feedback Forms', icon: Code, description: 'Gather customer insights' },
];
