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
    prevProject: 'stockpilot-ims',
  },
  {
    slug: 'het-portfolio',
    title: 'Het Patel — Developer Portfolio',
    tagline: 'A personal brand website for a backend developer showcasing real projects and engineering depth.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/het-portfolio.png',
    heroImage: '/het-portfolio.png',
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
    screenshots: ['/het-portfolio.png'],
    nextProject: 'raunak-portfolio',
    prevProject: 'tt-marketing',
  },
  {
    slug: 'raunak-portfolio',
    title: 'Raunak Jha — Developer Portfolio',
    tagline: 'A modern, interactive personal portfolio website showcasing full-stack engineering expertise.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/imraunak.png',
    heroImage: '/imraunak.png',
    liveUrl: 'https://imraunak.dev/',
    githubUrl: 'https://github.com/raunak0400',
    client: 'Raunak Kumar Jha',
    duration: '2 weeks',
    year: '2024',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vercel'],
    services: ['Web Development', 'UI/UX Design', 'Personal Branding'],
    overview:
      'A sleek, high-performance developer portfolio built to showcase technical proficiency across frontend and backend technologies. Designed to serve as a digital resume and project showcase for Raunak Kumar Jha, featuring smooth animations, structured case studies, and seamless navigation.',
    problem:
      'To stand out as a technical director and full-stack engineer, Raunak needed a digital presence that went beyond a simple resume. The goal was to build a site that not only listed projects but demonstrated engineering capabilities through its own performance, architecture, and design.',
    solution:
      'We developed a minimalist, highly responsive Next.js application leveraging Framer Motion for subtle, professional animations. The architecture ensures perfect SEO scores, sub-second load times, and a frictionless user experience across all devices.',
    results: [
      'Sub-second load times globally via Vercel Edge Network',
      'Perfect 100/100 Lighthouse scores for Performance, Accessibility, and SEO',
      'Increased professional inquiries and brand authority',
      'Dynamic project loading with zero layout shift',
    ],
    features: [
      {
        title: 'Performance-First Architecture',
        description:
          'Built with Next.js App Router and optimized for maximum speed, ensuring instant page transitions and asset delivery.',
        icon: 'Zap',
      },
      {
        title: 'Interactive Project Showcase',
        description:
          'A filterable, dynamic grid of high-impact engineering projects complete with source code links and live demos.',
        icon: 'Code2',
      },
      {
        title: 'Fluid Animations',
        description:
          'Subtle enter and exit animations powered by Framer Motion that add polish without compromising performance.',
        icon: 'Palette',
      },
      {
        title: 'Responsive & Accessible',
        description:
          'Meticulously tested across devices to ensure perfect typography scaling and full keyboard/screen-reader accessibility.',
        icon: 'Smartphone',
      },
      {
        title: 'Technical Blogging Integration',
        description:
          'Structured space for technical writing to demonstrate thought leadership and share engineering insights.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Direct Communication Channels',
        description:
          'Streamlined contact methods integrated directly into the layout for easy professional outreach.',
        icon: 'MessageCircle',
      },
    ],
    testimonial: undefined,
    screenshots: ['/imraunak.png'],
    nextProject: 'silverleaf-preschool',
    prevProject: 'het-portfolio',
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
    prevProject: 'raunak-portfolio',
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
    nextProject: 'alpha-ventures',
    prevProject: 'priyas-training-hub',
  },
  {
    slug: 'alpha-ventures',
    title: 'Alpha Ventures',
    tagline: 'A premium luxury black-and-gold business consultancy website with cinematic hero design and 6 case study showcases.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/alpha-ventures.png',
    heroImage: '/alpha-ventures.png',
    liveUrl: 'https://3-m-enterprises.vercel.app/',
    client: 'Alpha Ventures',
    duration: '4 weeks',
    year: '2024',
    techStack: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    services: ['Web Development', 'UI/UX Design', 'Premium Branding'],
    overview:
      'Alpha Ventures is a business consultancy and wealth advisory firm that needed a digital presence that matched their premium, high-trust brand. We built a luxury website with a cinematic hero, investment opportunities section, and 6 detailed case study showcases — designed to attract high-net-worth clientele.',
    problem:
      'The firm was operating with no website, losing potential high-value clients to competitors who had polished digital presences. Their brand positioning — premium, exclusive, results-driven — was impossible to communicate without a website that matched that identity.',
    solution:
      'We designed a dark, gold-accented luxury website using React and Framer Motion. Every section — from the full-screen hero to the case study cards — is built to signal prestige and competence. The multi-page architecture allows deep exploration of their services and track record.',
    results: [
      'Premium brand identity established online',
      'Cinematic hero creates a strong first impression',
      '6 case studies demonstrate depth of expertise',
      'High-trust design tailored for wealth advisory clientele',
    ],
    features: [
      {
        title: 'Cinematic Hero Design',
        description:
          'Full-screen hero with dramatic dark-gold color palette and animated entrance transitions that immediately signal premium positioning.',
        icon: 'Star',
      },
      {
        title: '6 Case Study Showcases',
        description:
          'Detailed case study cards highlight past client wins and outcomes — the key trust signal for a consultancy audience.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Investment Opportunities Section',
        description:
          'Live opportunities section allows the firm to surface current deals and attract accredited investors directly through the website.',
        icon: 'TrendingUp',
      },
      {
        title: 'Framer Motion Animations',
        description:
          'Smooth, physics-based animations throughout reinforce the premium brand feel without feeling flashy or distracting.',
        icon: 'Zap',
      },
      {
        title: 'Multi-Page Architecture',
        description:
          'Dedicated pages for services, team, case studies, and contact — giving visitors a complete picture of the firm.',
        icon: 'Layers',
      },
      {
        title: 'Mobile Responsive',
        description:
          'The luxury design translates perfectly to mobile, ensuring the premium experience is consistent across all devices.',
        icon: 'Smartphone',
      },
    ],
    screenshots: ['/alpha-ventures.png'],
    nextProject: 'findurtrip',
    prevProject: 'om-marketing-solutions',
  },
  {
    slug: 'findurtrip',
    title: 'FindUrTrip',
    tagline: 'A full-featured travel platform connecting adventurers with curated trips, treks, and experiences across India.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/finurtrip.png',
    heroImage: '/finurtrip.png',
    liveUrl: 'https://findurtrip.org/',
    client: 'FindUrTrip',
    duration: '5 weeks',
    year: '2025',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'WhatsApp API', 'Vercel'],
    services: ['Web Development', 'UI/UX Design', 'WhatsApp Integration'],
    overview:
      'FindUrTrip is a travel discovery platform helping adventure seekers find and book curated trips, treks, and experiences across India. With 10K+ happy travellers and 500+ trips organised, the platform needed a modern, conversion-focused website to match its growing reputation.',
    problem:
      'The existing online presence did not reflect the scale and quality of experiences FindUrTrip offered. Potential travellers were dropping off before enquiring because the site lacked trust signals, a smooth browsing experience, and a simple way to get in touch and plan their trip.',
    solution:
      'We built a visually immersive travel website with a cinematic hero, smooth page animations, a Customise Trip feature, WhatsApp-based trip planning flow, and dedicated sections for Events, Stories, and Destinations — all designed to inspire visitors and move them to book.',
    results: [
      '10K+ happy travellers served through the platform',
      '500+ trips organised and showcased on the site',
      '25+ destinations featured with rich content',
      'WhatsApp trip planning drives direct conversions daily',
    ],
    features: [
      {
        title: 'Cinematic Hero Section',
        description:
          'Full-screen mountain backdrop with bold typography and dual CTAs — "Explore Now" and "Plan on WhatsApp" — designed to inspire immediate action.',
        icon: 'Globe',
      },
      {
        title: 'Customise Trip Flow',
        description:
          'Interactive trip customisation feature lets travellers define their preferences and get a tailored itinerary suggestion.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'WhatsApp Trip Planning',
        description:
          'Direct WhatsApp integration routes trip enquiries instantly to the team, reducing friction and boosting conversion.',
        icon: 'MessageCircle',
      },
      {
        title: 'Events & Stories Sections',
        description:
          'Dedicated pages for upcoming events and traveller stories build community and provide ongoing content for returning visitors.',
        icon: 'Star',
      },
      {
        title: 'Framer Motion Animations',
        description:
          'Smooth entrance animations, scroll reveals, and hover effects make the browsing experience feel premium and engaging.',
        icon: 'Zap',
      },
      {
        title: 'Mobile-First Responsive',
        description:
          'Fully optimised for mobile — the primary device for travel inspiration — with fast load times and thumb-friendly navigation.',
        icon: 'Smartphone',
      },
    ],
    screenshots: ['/finurtrip.png'],
    nextProject: 'aavaas-realty',
    prevProject: 'alpha-ventures',
  },
  {
    slug: 'aavaas-realty',
    title: 'Aavaas Realty',
    tagline: 'A modern real estate website built to generate property enquiries and build developer credibility online.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/aavaas-realty.jpeg',
    heroImage: '/aavaas-realty.jpeg',
    liveUrl: 'https://aavas-realty.vercel.app/',
    client: 'Aavaas Realty',
    duration: '3 weeks',
    year: '2025',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vercel'],
    services: ['Web Development', 'UI/UX Design', 'Lead Generation'],
    overview:
      'Aavaas Realty is a property development company that needed a premium digital presence to showcase their residential and commercial projects. We built a modern, high-converting real estate website designed to attract serious buyers and generate qualified property enquiries.',
    problem:
      'Without a professional website, Aavaas Realty struggled to reach buyers beyond their local network. Potential customers could not browse available properties, verify the developer\'s credentials, or find contact details easily — causing them to lose leads to competitors with better online presence.',
    solution:
      'We built a visually polished real estate website with project showcases, amenity highlights, location maps, and low-friction lead capture forms. The design language conveys trust and premium positioning — critical for buyers making high-value property decisions.',
    results: [
      'Property enquiry rate increased significantly post-launch',
      'Premium brand identity established online',
      'Mobile-first design reaches buyers on every device',
      'Location and amenity sections reduce pre-sales queries',
    ],
    features: [
      {
        title: 'Property Showcase Section',
        description:
          'Rich visual project listings with floor plans, amenities, pricing tiers, and availability status to guide buyer decision-making.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Lead Capture Forms',
        description:
          'Strategically placed enquiry forms with minimal fields — name, phone, project interest — maximize conversion from interested visitors.',
        icon: 'MessageCircle',
      },
      {
        title: 'Location & Connectivity',
        description:
          'Embedded maps and surrounding infrastructure highlights help buyers evaluate location convenience before visiting the site.',
        icon: 'Globe',
      },
      {
        title: 'Amenities Grid',
        description:
          'Visual amenities showcase communicates lifestyle benefits and differentiates the project from competitors in the same market.',
        icon: 'Star',
      },
      {
        title: 'Mobile-First Design',
        description:
          'Designed for smartphones — the primary device used by property buyers on the go — with fast load times and intuitive navigation.',
        icon: 'Smartphone',
      },
      {
        title: 'Performance Optimized',
        description:
          'Next.js image optimization and lazy loading ensure fast load times even for image-heavy property listing pages.',
        icon: 'Zap',
      },
    ],
    screenshots: ['/aavaas-realty.jpeg'],
    nextProject: 'triggered-email-saas',
    prevProject: 'findurtrip',
  },
  {
    slug: 'triggered-email-saas',
    title: 'Triggered — Email Automation SaaS',
    tagline: 'A B2B SaaS platform that automates transactional and behavioural email workflows for modern businesses.',
    category: 'AI & Automation',
    status: 'Live',
    thumbnail: '/triggered-email-saas.png',
    heroImage: '/triggered-email-saas.png',
    liveUrl: 'https://triggered-ruddy.vercel.app/',
    client: 'Triggered',
    duration: '5 weeks',
    year: '2025',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Node.js'],
    services: ['Web Development', 'AI Integration', 'SaaS Development', 'UI/UX Design'],
    overview:
      'Triggered is an email automation SaaS platform that enables businesses to set up event-driven email workflows without writing code. We built the full product interface — from onboarding flow to the workflow builder and campaign analytics dashboard — as a modern, intuitive SaaS application.',
    problem:
      'Businesses needed a way to send the right email at the right time based on user behaviour, but existing tools were either too expensive, too complex, or required developer involvement for every new workflow. Triggered needed a product that non-technical teams could own end-to-end.',
    solution:
      'We designed and built a clean SaaS dashboard with a drag-and-drop workflow builder, template library, audience segmentation, and real-time delivery analytics. The product is built around simplicity — any marketing team member can create and launch automations in minutes.',
    results: [
      'Full SaaS product shipped from zero to live in 5 weeks',
      'No-code workflow builder reduces setup time to under 10 minutes',
      'Real-time delivery analytics help users optimise campaigns immediately',
      'Clean dashboard UI drives high user retention and ease of adoption',
    ],
    features: [
      {
        title: 'Event-Triggered Workflows',
        description:
          'Set up automations that fire on user events — signups, purchases, inactivity — so the right email reaches the right user at the right moment.',
        icon: 'Zap',
      },
      {
        title: 'Visual Workflow Builder',
        description:
          'A drag-and-drop canvas lets marketing teams design multi-step email sequences without any technical knowledge required.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Audience Segmentation',
        description:
          'Dynamic audience segments based on user attributes and behaviour ensure every send is targeted and relevant.',
        icon: 'Users',
      },
      {
        title: 'Template Library',
        description:
          'Pre-built, customisable email templates for common use cases — onboarding, re-engagement, transactional — speed up campaign creation.',
        icon: 'Palette',
      },
      {
        title: 'Delivery Analytics',
        description:
          'Real-time open rates, click rates, and delivery status dashboards give teams instant visibility into campaign performance.',
        icon: 'BarChart3',
      },
      {
        title: 'AI-Assisted Copywriting',
        description:
          'Integrated AI suggestions help users write more effective subject lines and email body copy — improving open and conversion rates.',
        icon: 'Bot',
      },
    ],
    screenshots: ['/triggered-email-saas.png'],
    nextProject: 'stockpilot-ims',
    prevProject: 'aavaas-realty',
  },
  {
    slug: 'stockpilot-ims',
    title: 'StockPilot — Inventory Management System',
    tagline: 'A smart, AI-powered inventory management platform built for SMEs to track stock, orders, and suppliers in real time.',
    category: 'AI & Automation',
    status: 'Live',
    thumbnail: '/stockpilot-ims.png',
    heroImage: '/stockpilot-ims.png',
    liveUrl: 'https://stockpilot-lake.vercel.app/login',
    client: 'StockPilot',
    duration: '6 weeks',
    year: '2025',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Vercel', 'AI Integration'],
    services: ['Web Development', 'AI Integration', 'SaaS Development', 'UI/UX Design'],
    overview:
      'StockPilot is an intelligent inventory management system designed for small and medium-sized enterprises. We built a full-stack SaaS application that gives business owners real-time visibility into stock levels, purchase orders, supplier management, and AI-powered demand forecasting.',
    problem:
      'SMEs managing inventory through spreadsheets or outdated software consistently faced stockouts, overstocking, and poor supplier coordination. Without real-time data and intelligent insights, businesses were making expensive stock decisions based on guesswork.',
    solution:
      'We built a comprehensive IMS with real-time stock tracking, automated low-stock alerts, purchase order management, supplier directories, and an AI-powered demand forecasting module. The clean dashboard design makes it accessible to non-technical business owners while being powerful enough for warehouse managers.',
    results: [
      'Full-stack IMS product delivered from zero in 6 weeks',
      'Real-time stock visibility eliminates manual spreadsheet tracking',
      'AI demand forecasting reduces overstock and stockout incidents',
      'Purchase order automation saves hours of manual supplier coordination weekly',
    ],
    features: [
      {
        title: 'Real-Time Stock Dashboard',
        description:
          'Live inventory levels across all locations with colour-coded alerts for low stock, overstock, and expiring items.',
        icon: 'BarChart3',
      },
      {
        title: 'AI Demand Forecasting',
        description:
          'Machine learning models analyse sales history and seasonal trends to predict future stock requirements and optimise reorder points.',
        icon: 'Bot',
      },
      {
        title: 'Purchase Order Management',
        description:
          'Create, track, and approve purchase orders end-to-end — from supplier request to goods receipt — all within the platform.',
        icon: 'Package',
      },
      {
        title: 'Supplier Directory',
        description:
          'Centralised supplier database with contact details, pricing history, lead times, and performance ratings for smarter procurement decisions.',
        icon: 'Users',
      },
      {
        title: 'Automated Low-Stock Alerts',
        description:
          'Configurable threshold alerts via email and in-app notifications ensure stockouts are caught before they impact sales.',
        icon: 'Zap',
      },
      {
        title: 'Multi-Location Support',
        description:
          'Manage inventory across multiple warehouses or store locations from a single dashboard with location-level drill-down reporting.',
        icon: 'Globe',
      },
    ],
    screenshots: ['/stockpilot-ims.png'],
    nextProject: 'tt-marketing',
    prevProject: 'triggered-email-saas',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
