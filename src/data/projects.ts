export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: 'Live' | 'In Development' | 'Completed';
  thumbnail: string;
  heroImage: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyPdf?: string;
  client: string;
  duration: string;
  year: string;
  techStack: string[];
  services: string[];
  overview: string;
  problem: string;
  solution: string;
  results: string[];
  features: { title: string; description: string; icon: string }[];
  testimonial?: { quote: string; name: string; role: string };
  screenshots: string[];
  nextProject: string;
  prevProject: string;
};

export const projects: Project[] = [
  {
    slug: 'tt-marketing',
    title: 'TT Marketing Solutions',
    tagline: 'A conversion-focused digital marketing agency website built to generate B2B leads.',
    category: 'Digital Marketing',
    status: 'Live',
    thumbnail: '/ttmarketing.png',
    heroImage: '/ttmarketing.png',
    liveUrl: 'https://www.ttmarketing.co.in/',
    githubUrl: 'https://github.com/OM-Marketing-Solutions/TT-MARKETING',
    client: 'TT Marketing Solutions',
    duration: '3 weeks',
    year: '2024',
    techStack: ['Next.js 14', 'Tailwind CSS', 'TypeScript', 'Vercel', 'Framer Motion'],
    services: ['Web Development', 'UI/UX Design', 'Digital Marketing', 'SEO Optimization'],
    overview:
      'TT Marketing Solutions needed a professional web presence to establish credibility in the competitive digital marketing landscape. We designed and built a modern, fast, and conversion-optimized website that positions them as a trusted agency for businesses across Ahmedabad and Gujarat.',
    problem:
      'TT Marketing Solutions was operating without a proper website, relying entirely on word-of-mouth referrals. This made it difficult for potential B2B clients to verify their credibility, understand the scope of their services, or reach them easily online.',
    solution:
      'We built a clean, performance-optimized Next.js website with dedicated service pages, a portfolio showcase, a client results section, and a streamlined lead generation form — all centered around converting visitors into qualified B2B leads.',
    results: [
      '3× increase in organic enquiries within 60 days',
      '40+ qualified leads generated in the first quarter post-launch',
      'Google PageSpeed score of 95+ on both mobile and desktop',
      'Top 5 Google ranking for local digital marketing keywords',
    ],
    features: [
      {
        title: 'Conversion-First Design',
        description:
          'Every section is structured around moving visitors toward the contact form, with strategic CTAs and trust signals placed throughout.',
        icon: 'TrendingUp',
      },
      {
        title: 'SEO-Optimized Architecture',
        description:
          'Semantic HTML, meta tags, JSON-LD schema, and optimized page structure for maximum search engine visibility.',
        icon: 'Search',
      },
      {
        title: 'Service Showcase Pages',
        description:
          'Dedicated landing pages for each core service with clear value propositions and relevant proof points.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'WhatsApp Lead Capture',
        description:
          'Integrated contact forms with WhatsApp redirect for instant client communication and follow-up.',
        icon: 'MessageCircle',
      },
      {
        title: 'Mobile-First Responsive',
        description:
          'Pixel-perfect layout across all devices, with performance budgets enforced at the component level.',
        icon: 'Smartphone',
      },
      {
        title: 'Performance Optimized',
        description:
          'Next.js Image optimization, font subsetting, and lazy loading ensure sub-2s load times on all connections.',
        icon: 'Zap',
      },
    ],
    testimonial: {
      quote:
        'OM Marketing Solutions delivered exactly what we needed — a professional website that actually brings in clients. The quality and turnaround time were both excellent.',
      name: 'TT Marketing Team',
      role: 'Director, TT Marketing Solutions',
    },
    screenshots: ['/ttmarketing.png'],
    nextProject: 'het-portfolio',
    prevProject: 'om-marketing-solutions',
  },
  {
    slug: 'het-portfolio',
    title: 'Het Patel — Developer Portfolio',
    tagline: 'A personal brand website for a backend developer showcasing real projects and engineering depth.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/hetmkc.png',
    heroImage: '/hetmkc.png',
    liveUrl: 'https://buildbyhet.vercel.app/',
    githubUrl: 'https://github.com/Het161/buildbyhet',
    client: 'Het Patel',
    duration: '2 weeks',
    year: '2024',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vercel'],
    services: ['Web Development', 'UI/UX Design', 'Personal Branding'],
    overview:
      'A modern developer portfolio built to showcase backend engineering expertise, highlight key projects with live demos, and create a compelling personal brand for Het Patel — a full-stack developer specializing in scalable REST APIs, microservices, and Python-based systems.',
    problem:
      'As a developer seeking better career and freelance opportunities, Het needed a personal brand that could stand out in a competitive market. Generic LinkedIn profiles and GitHub pages were not enough to communicate the depth of his backend engineering skills.',
    solution:
      'We designed a clean, dark-themed portfolio with animated sections, project case studies, a skills visualization, and direct links to live demos and GitHub repositories. Built with Next.js for SEO visibility and lightning-fast performance.',
    results: [
      'Personal brand established with a memorable online presence',
      'Showcases 5+ major engineering projects with live demos',
      'Sub-1.5s load time with 98 Lighthouse performance score',
      'Consistent recruiter outreach generated from the portfolio',
    ],
    features: [
      {
        title: 'Project Deep Dives',
        description:
          'Each project has a detailed case study section covering problem, solution, architecture decisions, and key outcomes.',
        icon: 'Code2',
      },
      {
        title: 'Animated Entrance Transitions',
        description:
          'Framer Motion animations create a memorable first impression with smooth, coordinated entrance animations.',
        icon: 'Zap',
      },
      {
        title: 'Skills Visualization',
        description:
          'Interactive tech stack display showing proficiency across backend, frontend, and DevOps tools.',
        icon: 'BarChart3',
      },
      {
        title: 'Developer-Aesthetic Dark Theme',
        description:
          'Dark mode by default — a deliberate design choice that resonates with the target technical audience.',
        icon: 'Palette',
      },
      {
        title: 'GitHub Integration',
        description:
          'Direct links to live repositories with pinned projects and contribution highlights displayed prominently.',
        icon: 'Globe',
      },
      {
        title: 'Recruiter-Friendly Contact',
        description:
          'Simple, distraction-free contact section with email and social links optimized for recruiter outreach.',
        icon: 'MessageCircle',
      },
    ],
    screenshots: ['/hetmkc.png'],
    nextProject: 'silverleaf-preschool',
    prevProject: 'tt-marketing',
  },
  {
    slug: 'silverleaf-preschool',
    title: 'SilverLeaf Preschool',
    tagline: 'A vibrant, parent-friendly preschool website built to drive admissions enquiries.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/pre-school.png',
    heroImage: '/pre-school.png',
    liveUrl: 'https://silver-leaf-preschool.vercel.app/',
    client: 'SilverLeaf Preschool',
    duration: '3 weeks',
    year: '2024',
    techStack: ['React', 'Tailwind CSS', 'Vercel', 'WhatsApp Business API'],
    services: ['Web Development', 'UI/UX Design', 'WhatsApp Integration'],
    overview:
      'SilverLeaf Preschool needed a modern website that would appeal to parents, communicate warmth and trust, and make it effortless for families to get in touch. We built a bright, animated, mobile-first website optimized for the parents who browse primarily on smartphones.',
    problem:
      'The preschool had no online presence, relying entirely on word-of-mouth and physical pamphlets. Parents in their area expected to research schools online before making any enquiry, and the school was invisibly losing potential admissions to competitors who had websites.',
    solution:
      'We built a cheerful, mobile-first website with an animated photo gallery, a clear admissions process section, teacher profiles, and a WhatsApp-connected contact form. The design prioritizes warmth and immediate trust — key factors for parents choosing an early education institution.',
    results: [
      'Admissions enquiries increased significantly post-launch',
      '78% of all website traffic comes from mobile devices',
      'WhatsApp button generates direct parent conversations daily',
      'Parents cite the website as their primary source of information',
    ],
    features: [
      {
        title: 'WhatsApp-Connected Contact',
        description:
          "Contact forms route directly to the school's WhatsApp, enabling instant conversation with prospective parents.",
        icon: 'MessageCircle',
      },
      {
        title: 'Animated Photo Gallery',
        description:
          'Smooth auto-playing gallery showcasing campus facilities, activities, and daily school life to build parent confidence.',
        icon: 'Palette',
      },
      {
        title: 'Admissions Flow Section',
        description:
          'Step-by-step admissions process makes it easy for parents to understand how to enroll their child.',
        icon: 'Users',
      },
      {
        title: 'Mobile-First Design',
        description:
          'Designed for the smartphone — the primary device parents use — with thumb-friendly navigation and fast loading.',
        icon: 'Smartphone',
      },
      {
        title: 'Teacher Profile Cards',
        description:
          'Individual teacher cards with photos, qualifications, and experience to build confidence in the faculty.',
        icon: 'Star',
      },
      {
        title: 'Google Maps Integration',
        description:
          'Embedded location map and directions section helps parents easily find and plan visits to the campus.',
        icon: 'Globe',
      },
    ],
    testimonial: {
      quote:
        'The website completely changed how parents discover our school. We now receive enquiries every week from families who found us online. Highly recommend OM Marketing Solutions.',
      name: 'School Administrator',
      role: 'SilverLeaf Preschool, Ahmedabad',
    },
    screenshots: ['/pre-school.png'],
    nextProject: 'priyas-training-hub',
    prevProject: 'het-portfolio',
  },
  {
    slug: 'priyas-training-hub',
    title: "Priya's Training Hub",
    tagline: 'A professional coaching platform designed to convert website visitors into enrolled students.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/priyas-training-hub.png',
    heroImage: '/priyas-training-hub.png',
    liveUrl: 'https://priyas-training-hub.vercel.app/',
    client: "Priya's Training Hub",
    duration: '2 weeks',
    year: '2024',
    techStack: ['React', 'Tailwind CSS', 'Vercel'],
    services: ['Web Development', 'UI/UX Design', 'Lead Generation'],
    overview:
      "Priya's Training Hub is a coaching and professional development institute offering skill-building courses. They needed a website that could professionally showcase their courses, build trainer credibility, and most importantly — convert interested visitors into enrolled students.",
    problem:
      'The training institute had no digital presence despite offering high-quality programs. Students were sourced entirely through referrals, which capped growth potential. Without a website, it was hard to reach a wider audience or build trust with new prospects.',
    solution:
      'We designed a confidence-inspiring website with a prominent course catalog, trainer profiles with credentials, student testimonials, and strategically placed enrollment CTAs. The lead generation focus is embedded throughout — every section nudges visitors toward inquiry.',
    results: [
      '25% increase in course enrollment inquiries within 30 days',
      'Professional credibility established with an online presence',
      'Mobile-responsive design reaching the 70% mobile audience',
      'Sub-2s load time on mobile data connections',
    ],
    features: [
      {
        title: 'Course Showcase',
        description:
          'Visually rich course cards with duration, curriculum highlights, and enrollment CTA for each program.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Trainer Profiles',
        description:
          'Dedicated trainer sections with photos, qualifications, and experience to build immediate credibility.',
        icon: 'Users',
      },
      {
        title: 'Student Testimonials',
        description:
          'Real student success stories displayed prominently to provide social proof for prospective enrollees.',
        icon: 'Star',
      },
      {
        title: 'Low-Friction Lead Forms',
        description:
          'Strategically placed inquiry forms asking only name, phone, and course interest — maximizing conversions.',
        icon: 'MessageCircle',
      },
      {
        title: 'Responsive Layout',
        description:
          'Perfectly adapted for mobile, tablet, and desktop — essential for reaching students on any device.',
        icon: 'Smartphone',
      },
      {
        title: 'Performance Optimized',
        description:
          'Optimized images and lean code ensure fast loading even on mobile data connections in Tier 2 cities.',
        icon: 'Zap',
      },
    ],
    screenshots: ['/priyas-training-hub.png'],
    nextProject: 'om-marketing-solutions',
    prevProject: 'silverleaf-preschool',
  },
  {
    slug: 'om-marketing-solutions',
    title: 'OM Marketing Solutions Website',
    tagline: 'Our own agency website — built with Next.js 15, Framer Motion animations, and a Gemini AI chatbot.',
    category: 'AI & Automation',
    status: 'Live',
    thumbnail: '/logomkc.jpeg',
    heroImage: '/logomkc.jpeg',
    liveUrl: 'https://www.ommarketingsolutions.in',
    client: 'OM Marketing Solutions (Internal)',
    duration: '6 weeks',
    year: '2025',
    techStack: [
      'Next.js 15',
      'Tailwind CSS',
      'TypeScript',
      'Framer Motion',
      'Gemini AI',
      'Google Analytics',
      'Vercel',
    ],
    services: ['Web Development', 'UI/UX Design', 'AI Integration', 'SEO', 'Digital Marketing'],
    overview:
      'Our own website is our most ambitious internal project — built to serve as a lead generation engine, demonstrate our technical capabilities, and set the standard for what clients can expect. It features a full Framer Motion animation system, an AI-powered chatbot, structured SEO data, and a conversion-focused welcome modal.',
    problem:
      'As a digital marketing agency, our website needed to do more than look good — it had to actively generate leads, rank on Google, and demonstrate technical excellence to potential clients who would be evaluating our capabilities before contacting us.',
    solution:
      'We built a performance-optimized Next.js 15 site with a complete animation system using Framer Motion, a custom AI chatbot powered by Google Gemini, JSON-LD structured data for local SEO, and a first-visit welcome modal system for conversion optimization.',
    results: [
      'Sub-2s load time with 95+ Lighthouse scores on all metrics',
      'AI chatbot handles 200+ visitor queries per month automatically',
      'Welcome modal drives measurable increase in contact page visits',
      'Structured data boosts local search visibility in Ahmedabad',
    ],
    features: [
      {
        title: 'Framer Motion Animation System',
        description:
          'Every page transition, scroll animation, and micro-interaction is orchestrated with Framer Motion for a premium app-like feel.',
        icon: 'Zap',
      },
      {
        title: 'Gemini AI Chatbot',
        description:
          'A fully custom AI assistant trained on our services, pricing, and FAQs — available 24/7 to answer visitor questions instantly.',
        icon: 'Bot',
      },
      {
        title: 'Local SEO Foundation',
        description:
          'JSON-LD schema for LocalBusiness, Organization, and WebSite entities, plus optimized meta tags and a dynamic XML sitemap.',
        icon: 'Search',
      },
      {
        title: 'Welcome Modal System',
        description:
          'A first-visit modal with localStorage persistence that introduces our agency and drives visitors toward key conversion actions.',
        icon: 'Users',
      },
      {
        title: 'Scroll Progress Indicator',
        description:
          'A spring-physics scroll progress bar at the top of every page adds a polished, app-like reading experience.',
        icon: 'BarChart3',
      },
      {
        title: 'Animated Page Transitions',
        description:
          'AnimatePresence-powered transitions between routes keep the browsing experience fluid and professional throughout.',
        icon: 'Layers',
      },
    ],
    screenshots: ['/logomkc.jpeg'],
    nextProject: 'tt-marketing',
    prevProject: 'priyas-training-hub',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
