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
    slug: 'angan-restaurant',
    title: 'Angan — Premium Fine Dining Restaurant Website',
    tagline:
      'A cinematic dark-luxury restaurant website for a premium fine dining brand in Ahmedabad. Features Cormorant Garamond editorial typography, full menu with tasting courses, reservation system, chef story, masonry gallery with lightbox, and Framer Motion cinematic scroll animations.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/angan.png',
    heroImage: '/angan.png',
    liveUrl: 'https://angan-restaurant.vercel.app/',
    client: 'Angan Restaurant (Demo)',
    duration: '3 weeks',
    year: '2025',
    techStack: ['React', 'Vite', 'Framer Motion', 'TypeScript', 'Lenis'],
    services: ['Web Development', 'UI/UX Design', 'Premium Branding'],
    overview:
      'Angan (આંગણ — "The Courtyard") is a premium fine dining restaurant demo website built for Ahmedabad\'s upscale dining market. Designed to compete with the best restaurant websites in India — Indian Accent, Masque, Olive Bar — it features a dark moody cinematic aesthetic with warm gold accents, editorial typography, and deliberate slow animations that feel like a restaurant door opening.',
    problem:
      'Most restaurant websites in Ahmedabad are either Zomato listing clones or generic templates. Premium restaurants deserve a digital presence that matches their physical experience — where the website itself feels like the first course. The goal was to build a demo that shows restaurant clients exactly what ₹8–12L agency-quality work looks like.',
    solution:
      '6-page React website — Home (cinematic hero, featured dishes, animated stats, staggered testimonials), full Menu page (editorial layout with featured dish strips, tasting menu CTA, category filter tabs), Reservations page (split layout, floating label form, success confirmation), Our Story (chef bio, philosophy sections), Gallery (masonry grid with lightbox and category filter), and Contact (private dining enquiry form, dark-tinted map). Grain texture overlay, candlelight glow gradients, and Lenis smooth scroll throughout.',
    results: [
      'Used as a live sales demo for restaurant and hospitality clients',
      'Candlelit aesthetic prompts "this looks like a real restaurant in Mumbai" reactions',
      'Zero Three.js — all depth from typography and photography',
      'Cinematic 0.8–1.2s ease animations separate fine dining from fast food in web design',
    ],
    features: [
      {
        title: 'Cinematic Dark-Luxury Aesthetic',
        description:
          'Dark moody palette with warm gold accents, 4% opacity SVG grain texture overlay, and candlelight glow gradients that remove the flat digital look.',
        icon: 'Palette',
      },
      {
        title: 'Editorial Menu Layout',
        description:
          'Full menu page with featured dish strips, tasting menu CTA, category filter tabs, and Cormorant Garamond typography at 80–120px.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Reservation System',
        description:
          'Split layout reservation page with floating label form, date/time picker, and animated success confirmation.',
        icon: 'MessageCircle',
      },
      {
        title: 'Masonry Gallery with Lightbox',
        description:
          'Category-filtered masonry grid gallery with smooth lightbox overlay for immersive food photography viewing.',
        icon: 'Star',
      },
      {
        title: 'Framer Motion Cinematic Animations',
        description:
          'Deliberate 0.8–1.2s ease animations (no bounce) throughout — pacing that separates fine dining from fast food in web design.',
        icon: 'Zap',
      },
      {
        title: 'Lenis Smooth Scroll',
        description:
          'Buttery smooth scrolling experience powered by Lenis, with grain texture and candlelight gradients visible throughout the journey.',
        icon: 'Globe',
      },
    ],
    testimonial: undefined,
    screenshots: ['/angan.png'],
    nextProject: 'vidyasetu-academy',
    prevProject: 'angan-architecture',
  },
  {
    slug: 'vidyasetu-academy',
    title: 'Vidyasetu Academy — Coaching & Tuition Institute Website',
    tagline:
      'A clean academic website for a mixed coaching institute serving Classes 6–12, JEE, and NEET students in Ahmedabad. Features Playfair Display editorial typography, results topper wall, course listings with filters, faculty section, contact form, and deliberately calm Framer Motion scroll animations.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/tution.png',
    heroImage: '/tution.png',
    liveUrl: 'https://vidyasetu-academy.vercel.app/',
    client: 'Vidyasetu Academy (Demo)',
    duration: '3 weeks',
    year: '2025',
    techStack: ['React', 'Vite', 'Framer Motion', 'TypeScript', 'Tailwind CSS'],
    services: ['Web Development', 'UI/UX Design', 'Education Platform'],
    overview:
      'Vidyasetu Academy (विद्यासेतु — "Bridge of Knowledge") is a professional coaching institute demo website built for the Ahmedabad education market. Designed to look nothing like an AI-generated template, it uses editorial typography, warm paper-toned backgrounds, and real academic content to build parent trust from the first scroll.',
    problem:
      'Coaching institute websites in Gujarat range from outdated WordPress templates to basic landing pages. Parents making decisions about their child\'s education need to immediately feel trust and credibility. The goal was to demonstrate what a premium coaching institute website looks like — one where the design itself signals academic seriousness.',
    solution:
      '6-page React website — Home (hero with split layout, results marquee, course overview, process steps, parent testimonials, admission CTA), Courses page (sidebar filters by class and exam type, horizontal course cards with seat availability), Course Detail page (sticky enquiry card, EMI info, faculty for course, syllabus), Results page (year-filter topper wall, JEE/NEET section, scholarship wall), About page (founder story, faculty grid with credentials, infrastructure, 4 centre locations), and Contact page (smart 7-field form, map embed, quick enquiry buttons).',
    results: [
      'Used as a sales demo for coaching institutes, tuition centres, and schools',
      'Warm academic aesthetic immediately relatable to local education clients',
      'Real Ahmedabad dummy data — Navrangpura, Satellite, Bopal localities',
      'Zero 3D, zero glassmorphism — sophistication from typography and layout',
    ],
    features: [
      {
        title: 'Editorial Academic Typography',
        description:
          'Playfair Display at large sizes paired with Plus Jakarta Sans body creates the editorial serif-vs-sans tension that human-designed academic sites use.',
        icon: 'Palette',
      },
      {
        title: 'Results Topper Wall',
        description:
          'Year-filtered topper wall showcasing JEE/NEET results and scholarship recipients to build immediate parent trust.',
        icon: 'TrendingUp',
      },
      {
        title: 'Course Listings with Filters',
        description:
          'Sidebar filters by class and exam type with horizontal course cards showing seat availability and EMI options.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Faculty Section',
        description:
          'Faculty grid with credentials, teaching experience, and subject expertise to demonstrate academic quality.',
        icon: 'Users',
      },
      {
        title: 'Calm Framer Motion Animations',
        description:
          'Deliberately calm ease-out animations with no spring overshoot — matching the serious academic tone of the institute.',
        icon: 'Zap',
      },
      {
        title: 'Warm Paper-Toned Design',
        description:
          'Off-white #F7F5F0 background like textbook paper instead of cold white, removing the clinical feel and adding warmth.',
        icon: 'Star',
      },
    ],
    testimonial: undefined,
    screenshots: ['/tution.png'],
    nextProject: 'tt-marketing',
    prevProject: 'angan-restaurant',
  },
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
    prevProject: 'vidyasetu-academy',
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
    nextProject: 'om-marketing-solutions',
    prevProject: 'het-portfolio',
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
    prevProject: 'raunak-portfolio',
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
    nextProject: 'sanjeevani-hospital',
    prevProject: 'findurtrip',
  },
  {
    slug: 'sanjeevani-hospital',
    title: 'Sanjeevani Hospital',
    tagline: 'A professional multi-specialty hospital website built to build patient trust and drive appointment bookings online.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/sanjeevani-hospital.png',
    heroImage: '/sanjeevani-hospital.png',
    liveUrl: 'https://sanjeevani-hospital-blush.vercel.app/',
    client: 'Sanjeevani Hospital (Demo)',
    duration: '3 weeks',
    year: '2025',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vercel'],
    services: ['Web Development', 'UI/UX Design', 'Lead Generation'],
    overview:
      'Sanjeevani Hospital is a demo multi-specialty hospital website showcasing what a modern healthcare digital presence can look like. Designed to build immediate patient trust, highlight medical departments, feature doctor profiles, and make appointment booking effortless — this demo is built for hospitals and clinics looking to establish a credible online presence.',
    problem:
      'Most hospital websites in India are either outdated, cluttered, or fail to build the trust that patients need before booking an appointment. Patients researching healthcare providers online expect a clean, professional site that communicates competence and accessibility — most hospitals fail to deliver this.',
    solution:
      'We built a clean, trust-first hospital website with department listings, doctor profiles, appointment booking forms, and emergency contact sections. The calm blue-and-white palette, structured layouts, and clear navigation are all designed around reducing patient anxiety and driving appointment conversions.',
    results: [
      'Used as a live sales demo for hospitals, clinics, and healthcare providers',
      'Trust-focused design reduces patient hesitation before booking',
      'Department and doctor sections answer key pre-visit questions',
      'Mobile-optimized for patients browsing on smartphones',
    ],
    features: [
      {
        title: 'Department Showcase',
        description:
          'Dedicated sections for each medical specialty with clear descriptions help patients quickly find the care they need.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Doctor Profiles',
        description:
          'Individual doctor cards with specialization, qualifications, and experience build patient confidence before the first appointment.',
        icon: 'Users',
      },
      {
        title: 'Appointment Booking',
        description:
          'Simple, low-friction appointment request forms reduce the barrier to booking and drive direct patient enquiries.',
        icon: 'MessageCircle',
      },
      {
        title: 'Emergency Contact Section',
        description:
          'Prominent emergency numbers and quick-dial CTAs ensure critical information is always one tap away.',
        icon: 'Zap',
      },
      {
        title: 'Trust-First Design',
        description:
          'Calm blue-and-white palette, structured layouts, and professional typography are chosen to reduce patient anxiety and signal medical credibility.',
        icon: 'Star',
      },
      {
        title: 'Mobile-First Responsive',
        description:
          'Fully optimized for smartphones — the primary device patients use to research and book healthcare providers.',
        icon: 'Smartphone',
      },
    ],
    testimonial: undefined,
    screenshots: ['/sanjeevani-hospital.png'],
    nextProject: 'aakash-international-school',
    prevProject: 'aavaas-realty',
  },
  {
    slug: 'aakash-international-school',
    title: 'Aakash International School',
    tagline: 'A premium K-12 school website built to drive admissions, showcase academic excellence, and build parent confidence.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/aakash-school.png',
    heroImage: '/aakash-school.png',
    liveUrl: 'https://aakash-international-school.vercel.app/',
    client: 'Aakash International School (Demo)',
    duration: '3 weeks',
    year: '2025',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vercel'],
    services: ['Web Development', 'UI/UX Design', 'Lead Generation'],
    overview:
      'Aakash International School is a demo K-12 school website built to show educational institutions what a premium digital presence looks like. Designed to immediately earn parent trust, highlight academic programs, showcase faculty, and make admissions enquiries effortless — this demo targets schools and educational institutions looking to stand out online.',
    problem:
      'Most school websites in India are outdated, difficult to navigate, and fail to communicate the quality of education offered. Parents evaluating schools for their children need a site that feels credible, organized, and welcoming from the first visit — and most institutions simply do not deliver that experience.',
    solution:
      'We built a structured, parent-friendly school website with program listings, faculty profiles, campus highlights, an events section, and a clear admissions enquiry flow. The design language — clean, trustworthy, and modern — is crafted to convert first-time visitors into serious admissions prospects.',
    results: [
      'Used as a live sales demo for schools and educational institutions',
      'Parent-first design reduces friction in the admissions enquiry process',
      'Faculty and program sections answer key parent decision-making questions',
      'Mobile-optimized for parents browsing on smartphones',
    ],
    features: [
      {
        title: 'Academic Programs Showcase',
        description:
          'Structured program listings for each grade level help parents quickly understand the curriculum and find the right fit for their child.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Faculty Profiles',
        description:
          'Dedicated teacher cards with qualifications and experience build parent confidence in the quality of education offered.',
        icon: 'Users',
      },
      {
        title: 'Admissions Enquiry Flow',
        description:
          'Simple, low-friction enquiry forms reduce the barrier to getting in touch and drive direct admissions leads.',
        icon: 'MessageCircle',
      },
      {
        title: 'Campus Highlights',
        description:
          'Visual showcase of facilities, infrastructure, and campus life helps parents visualise the school environment before visiting.',
        icon: 'Star',
      },
      {
        title: 'Events Section',
        description:
          'Upcoming events and school activities keep prospective and current parents engaged and informed throughout the year.',
        icon: 'Zap',
      },
      {
        title: 'Mobile-First Responsive',
        description:
          'Fully optimized for smartphones — the primary device parents use when researching schools for their children.',
        icon: 'Smartphone',
      },
    ],
    testimonial: undefined,
    screenshots: ['/aakash-school.png'],
    nextProject: 'shree-har-packaging',
    prevProject: 'sanjeevani-hospital',
  },
  {
    slug: 'shree-har-packaging',
    title: 'Shri Har Packaging — Industrial Machinery Website',
    tagline:
      'From business card to Google-ready website in 1 day — a custom dark industrial site for an Ahmedabad bag closing machine dealer, with a filterable 11-SKU catalogue, product detail pages, and full SEO.',
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/shree-har-packaging.jpg',
    heroImage: '/shree-har-packaging.jpg',
    liveUrl: 'https://shreeharpackaging.in',
    client: 'Shri Har Packaging',
    duration: '1 day',
    year: '2026',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Vercel'],
    services: ['Web Development', 'SEO', 'UI/UX Design'],
    overview:
      'Shri Har Packaging is an Ahmedabad-based industrial machinery dealer selling LPI, REVO and Smart Stitch bag closing machines, industrial threads and spare parts. Owner Bhavesh Parekh ran a 30+ year old business with no digital presence — only a physical shop in Isanpur and a business card. We built a complete professional website from scratch that now represents the business online.',
    problem:
      'The business had zero online presence in a market where buyers — flour mills, cement factories and grain processors across Gujarat — increasingly search Google before calling any supplier. Competitors with even basic websites were getting discovered first. The site had to feel as credible and industrial as the machines being sold, while staying simple enough for a non-technical owner to trust — all on a tight ₹5,000 budget.',
    solution:
      'We studied the actual products — visiting the shop, photographing real machines and reading catalogues — then designed a custom dark industrial theme with safety orange accents matched to the LPI and REVO machine palette. The result is a 9-section site with a filterable 11-SKU product catalogue, individual product detail pages, brand showcases, a WhatsApp enquiry flow, and full SEO, built mobile-first in vanilla HTML, CSS and JS with no frameworks or monthly fees.',
    results: [
      'Took a 30+ year old business online for the first time — discoverable on Google',
      '11 products across 4 categories listed, each with its own detail page',
      'Every product card opens a pre-filled WhatsApp enquiry, turning visits into leads',
      'Full SEO foundation: LocalBusiness, FAQPage and Product schema, sitemap and robots.txt',
      'Delivered in 1 day on a ₹5,000 budget with zero ongoing hosting costs',
    ],
    features: [
      {
        title: 'Filterable Product Catalogue',
        description:
          'An 11-SKU catalogue across 4 categories — bag closing machines, threads and spares — with a filter system that lets industrial buyers find the right machine fast.',
        icon: 'Package',
      },
      {
        title: 'Product Detail Pages',
        description:
          'Dedicated pages for all 11 products with full specifications, image galleries and related products, so buyers can evaluate before enquiring.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'WhatsApp Enquiry Flow',
        description:
          'Every product card has a direct WhatsApp button pre-filled with the product name, plus a contact form — the fastest path from interest to enquiry.',
        icon: 'MessageCircle',
      },
      {
        title: 'Custom Dark Industrial Theme',
        description:
          'A steel-dark design with safety orange accents and heavy Bebas Neue typography, matched directly to the LPI and REVO machine colour palette.',
        icon: 'Palette',
      },
      {
        title: 'Full SEO Implementation',
        description:
          'LocalBusiness, FAQPage and Product schema, sitemap.xml, robots.txt, geo targeting meta tags and Core Web Vitals optimization for Google visibility.',
        icon: 'Search',
      },
      {
        title: 'Mobile-First Build',
        description:
          'Built mobile-first in vanilla HTML, CSS and JS — fast and reliable on the Android phones most industrial buyers use, with no frameworks or monthly fees.',
        icon: 'Smartphone',
      },
    ],
    testimonial: undefined,
    screenshots: ['/shree-har-packaging.jpg'],
    nextProject: 'kbc-global',
    prevProject: 'aakash-international-school',
  },
  {
    slug: 'kbc-global',
    title: "KBC Global — Complete Brand Setup Solutions",
    tagline:
      "A premium dark-luxury website for a cosmetics manufacturer that turns machines, molds, and packaging into a complete brand-building story.",
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/kbc-global.jpg',
    heroImage: '/kbc-global.jpg',
    liveUrl: 'https://kbcglobal.in/',
    client: "KBC Global",
    duration: "3 weeks",
    year: "2026",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    services: ["Web Development", "UI/UX Design", "Premium Branding", "Lead Generation"],
    overview:
      "KBC Global (AK Krishiv Brand Creator) is an Ahmedabad-based, FSSAI and GMP certified cosmetics manufacturer that offers complete business setup — machines, molds, premium packaging, and full branding — under one roof. The website is built for aspiring brand owners and entrepreneurs who want to launch their own skincare, hair care, men's grooming, or baby care line without running their own factory.",
    problem:
      "KBC Global doesn't just sell manufacturing — it builds entire brands, but that full-service story is hard to convey on a generic supplier website. Entrepreneurs evaluating a private-label partner need to immediately trust the facility, the certifications, and the track record before they commit capital to a new brand. The site had to feel as premium as the brands KBC helps launch, while clearly explaining the end-to-end machine, mold, packaging, and branding offer.",
    solution:
      "We designed a dark purple and indigo premium theme with gold accents that signals manufacturing quality and brand prestige in equal measure. The site walks visitors through a 7-section journey — a \"We Create Your Brand\" hero, the Machine · Mold · Packaging · Branding pillars, an in-house manufacturing showcase, product categories across skin, hair, men's grooming and baby care, a launched-brands wall, trust stats, and a clear Get Started flow. Framer Motion scroll animations and a Sample Kits and Get Started call-to-action turn the certified facility credentials into a confident, conversion-focused pitch for new brand owners.",
    results: [
      "50+ brands showcased as real launch proof, including Riha Skincare and Plot 22",
      "4 product categories presented — skin care, hair care, men's grooming, and baby care",
      "1000+ SKUs and FSSAI · GMP certifications surfaced as trust signals",
      "Get Started and Sample Kits flows turn visitors into qualified brand-setup enquiries"
    ],
    features: [
      {
        title: "Dark-Luxury Premium Theme",
        description:
          "A dark purple and indigo palette with gold accents that positions KBC as a premium brand-builder, not a generic contract manufacturer.",
        icon: "Palette",
      },
      {
        title: "Machine Mold Packaging Pillars",
        description:
          "A four-pillar section that explains the complete machine, mold, packaging, and branding offer so visitors instantly grasp the end-to-end service.",
        icon: "Package",
      },
      {
        title: "Launched Brands Wall",
        description:
          "A showcase of real brands built with AK Krishiv — Riha Skincare, Plot 22, Bumble Baby and more — as immediate social proof for prospects.",
        icon: "Star",
      },
      {
        title: "Product Categories Grid",
        description:
          "Clear category breakdowns across skin care, hair care, men's grooming and baby care, so entrepreneurs see exactly what they can manufacture.",
        icon: "LayoutDashboard",
      },
      {
        title: "Trust & Certification Stats",
        description:
          "Animated counters for 50+ brands, 7 categories, 1000+ SKUs and FSSAI · GMP certified facilities that build confidence before contact.",
        icon: "Shield",
      },
      {
        title: "Get Started Lead Flow",
        description:
          "A dedicated Get Started and Sample Kits journey that converts browsing entrepreneurs into direct brand-setup enquiries.",
        icon: "MessageCircle",
      }
    ],
    testimonial: undefined,
    screenshots: ['/kbc-global.jpg'],
    nextProject: 'forge-gym',
    prevProject: 'shree-har-packaging',
  },
  {
    slug: 'forge-gym',
    title: "Forge — Strength & Conditioning Gym",
    tagline:
      "A dark, high-impact website for a serious strength and conditioning gym built to convert intent into memberships.",
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/forge-gym.jpg',
    heroImage: '/forge-gym.jpg',
    liveUrl: 'https://forgegymdemo.netlify.app/',
    client: "Forge — Strength & Conditioning Gym (Demo)",
    duration: "3 weeks",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Three Fiber", "Netlify"],
    services: ["Web Development", "UI/UX Design", "Premium Branding", "Lead Generation"],
    overview:
      "Forge is a multi-page website concept for a premium strength and conditioning gym on SG Highway, Ahmedabad, built for serious lifters and athletes who train with intent. It presents coached barbell work, brutal conditioning, and real recovery across a dark, bold, and unapologetically intense brand experience. This is a demo build by OM Marketing Solutions to showcase what we can deliver for high-end gyms and fitness studios.",
    problem:
      "Premium gyms struggle to communicate a serious training culture online, often defaulting to generic templates that feel like every other fitness chain. The challenge was to translate Forge's \"we don't sell motivation, we build capacity\" ethos into a digital presence that filters for committed members and conveys the depth of its coaching, facilities, and programming.",
    solution:
      "OM designed a dark black theme with a bold orange accent, huge condensed display typography, and a 3D animated sphere over a starfield in the hero to set an immediate premium, high-intensity tone. We built dedicated Classes, Membership, Coaches, and Join pages, plus a weekly timetable with class filters for Strength Lab, Condition, The WOD, Power Hour, Combat, and Flow. The 6,000 sq ft floor is broken into clear zones — Strength Floor, Functional Rig & Turf, Combat Zone, Recovery Studio, InBody & Assessment Lab, and Fuel Bar — so prospects understand exactly what they are joining before they reach the conversion-focused Join flow.",
    results: [
      "6-page responsive build (Classes, Membership, Coaches, Join and more) showcasing premium gym design",
      "6,000 sq ft of facilities mapped into clear, scannable training zones",
      "Live sales demo OM uses to win premium gyms, fitness studios, and combat clubs",
      "Bold, intent-filtering brand experience that separates serious lifters from casual browsers"
    ],
    features: [
      {
        title: "3D Animated Hero",
        description:
          "A 3D animated sphere over a starfield creates an immediate premium, high-energy first impression that mirrors the gym's intensity.",
        icon: "Zap",
      },
      {
        title: "Class Timetable",
        description:
          "A weekly timetable with filters for Strength Lab, Condition, The WOD, Power Hour, Combat, and Flow lets members find the right session fast.",
        icon: "LayoutDashboard",
      },
      {
        title: "Facility Zones",
        description:
          "The 6,000 sq ft floor is mapped into distinct zones so prospects know exactly what equipment and recovery they're paying for.",
        icon: "Layers",
      },
      {
        title: "Coaches Showcase",
        description:
          "A dedicated Coaches page builds credibility around the coached, progressed, and tracked training the brand is built on.",
        icon: "Users",
      },
      {
        title: "Membership & Join",
        description:
          "Focused Membership and Join pages turn interest into a clear, low-friction path to signing up.",
        icon: "CheckCircle2",
      },
      {
        title: "Premium Dark Branding",
        description:
          "A black theme, bold orange accent, and huge condensed typography deliver a serious, high-end identity that stands apart from generic gym sites.",
        icon: "Palette",
      }
    ],
    testimonial: undefined,
    screenshots: ['/forge-gym.jpg'],
    nextProject: 'lumiere-salon',
    prevProject: 'kbc-global',
  },
  {
    slug: 'lumiere-salon',
    title: "Lumière — Salon & Spa Website",
    tagline:
      "A quiet-luxury salon and spa website where unhurried editorial design makes booking a beauty ritual feel like rest, not rush.",
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/lumiere-salon.jpg',
    heroImage: '/lumiere-salon.jpg',
    liveUrl: 'https://lumieresalondemo.netlify.app/',
    client: "Lumière — Salon & Spa (Demo)",
    duration: "2 weeks",
    year: "2026",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Three Fiber"],
    services: ["Web Development", "UI/UX Design", "Premium Branding"],
    overview:
      "Lumière is a demo website for a premium salon and spa on CG Road, Ahmedabad, positioned as an unhurried sanctuary for hair, skin and soul. Built for high-end beauty brands that want their website to feel as calm and considered as their treatment rooms, it pairs a warm cream editorial palette with elegant serif typography and a 3D pearl hero. The site spans Services, Rituals, The Space, Team, Pricing and Book Now.",
    problem:
      "Most salon and spa websites in Ahmedabad are booking-app clones or busy template grids that feel rushed and transactional — the opposite of the slow, premium experience these brands sell in person. A quiet-luxury salon needs a digital presence that signals calm and care from the first scroll, or it loses guests willing to pay for ritual to cheaper, louder competitors. This demo was built to show beauty clients exactly what that elevated standard looks like.",
    solution:
      "We designed a 6-page Next.js site around the House of Lumière idea — beauty as rest, every appointment a slow deliberate ritual — using a warm cream and beige editorial palette with elegant serif typography. The hero features a soft 3D pearl blob built in React Three Fiber alongside a service-category marquee for Hair, Skin, Nails, Spa, Bridal and Massage. A clear Menu and Pricing layout lays out treatments and starting prices, while The Space, Rituals and Team pages tell the atelier-meets-sanctuary story. Calm, refined Framer Motion animations keep the pacing unhurried, all leading to a low-friction Book Now flow.",
    results: [
      "6-page responsive salon and spa website used as a live sales demo for beauty clients",
      "10 years on CG Road and 4.9-star guest rating featured to build instant trust",
      "40k+ rituals stat and an editorial Menu communicate scale and pricing at a glance",
      "Quiet-luxury design proves OM can deliver premium spa-grade web experiences"
    ],
    features: [
      {
        title: "3D Pearl Hero",
        description:
          "A soft 3D pearl blob built in React Three Fiber anchors the hero, adding tactile depth that mirrors the sanctuary calm of the brand.",
        icon: "Palette",
      },
      {
        title: "Editorial Serif Identity",
        description:
          "Warm cream and beige tones paired with elegant serif typography create the unhurried, magazine-quality feel of a quiet-luxury salon.",
        icon: "Star",
      },
      {
        title: "Service Category Marquee",
        description:
          "A flowing marquee across Hair, Skin, Nails, Spa, Bridal and Massage lets guests grasp the full range of treatments in a single glance.",
        icon: "Layers",
      },
      {
        title: "Transparent Pricing Menu",
        description:
          "A clear Menu and Pricing layout presents treatments with starting prices, removing booking hesitation before a guest reaches Book Now.",
        icon: "LayoutDashboard",
      },
      {
        title: "Calm Booking Flow",
        description:
          "A low-friction Book Now page turns the slow, considered browsing experience into a direct appointment enquiry without breaking the calm.",
        icon: "MessageCircle",
      },
      {
        title: "Refined Scroll Animations",
        description:
          "Calm, deliberate Framer Motion animations keep the pacing slow and editorial, so the site itself feels like a space designed to let you exhale.",
        icon: "Zap",
      }
    ],
    testimonial: undefined,
    screenshots: ['/lumiere-salon.jpg'],
    nextProject: 'bls-packaging',
    prevProject: 'forge-gym',
  },
  {
    slug: 'bls-packaging',
    title: "BLS Packaging — Bottles, Caps & Closures",
    tagline:
      "A dark, premium landing site for a Vapi bottle and perfume-packaging manufacturer, built to turn enquiries into WhatsApp conversations.",
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/bls-packaging.jpg',
    heroImage: '/bls-packaging.jpg',
    liveUrl: 'https://blspackaging.vercel.app/',
    client: "BLS Packaging",
    duration: "2 weeks",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    services: ["Web Development", "UI/UX Design", "Premium Branding", "WhatsApp Integration"],
    overview:
      "A launch landing site for BLS Packaging, a Vapi, Gujarat manufacturer of plastic bottles, caps, closures, pumps and premium perfume packaging. It introduces the brand to cosmetics, personal care, home care, pharma and perfume buyers while the full website is in development, and routes serious enquiries straight to WhatsApp and phone.",
    problem:
      "As an in-house manufacturer spanning everyday HDPE and PET containers right through to luxury Zamac and metallised perfume caps, BLS Packaging needed a credible online presence that signalled premium quality, not commodity plastics. With the full website still in progress, they needed a launch page that captured buyer interest immediately and opened a direct line for enquiries rather than losing leads to a \"coming soon\" placeholder.",
    solution:
      "OM designed a dark premium theme with a warm amber and gold accent and a gold perfume-bottle hero image that frames the brand around its \"The Future of Packaging\" positioning. The page leads with a clear hero and dual Enquire on WhatsApp / Call Us calls to action, then a focused \"Who we are\" section and a \"What we make\" breakdown across three product pillars — Bottles and Containers, Caps and Closures, and Perfume and Premium Packaging. A streamlined WhatsApp enquiry flow plus visible phone, email and Vapi location details make it effortless for buyers to reach out, with a clear \"full website launching soon\" note setting expectations.",
    results: [
      "3 product pillars showcased: bottles, caps and closures, and premium packaging",
      "1-tap WhatsApp and call-to-enquire flow from the hero",
      "Premium dark theme positions HDPE-to-luxury Zamac range under one brand",
      "Mobile-optimized landing site ready while the full website launches"
    ],
    features: [
      {
        title: "Premium Dark Theme",
        description:
          "A dark, amber-and-gold visual system positions BLS Packaging as a premium manufacturer rather than a commodity plastics supplier.",
        icon: "Palette",
      },
      {
        title: "WhatsApp Enquiry Flow",
        description:
          "Hero and contact CTAs route buyers straight into a WhatsApp conversation for fast, low-friction enquiries.",
        icon: "MessageCircle",
      },
      {
        title: "Product Pillars",
        description:
          "Three clear sections cover bottles and containers, caps and closures, and perfume and premium packaging at a glance.",
        icon: "Package",
      },
      {
        title: "Gold Perfume Hero",
        description:
          "A gold perfume-bottle hero image anchors the luxury positioning and showcases the brand's premium-finish capability.",
        icon: "Star",
      },
      {
        title: "Direct Contact Details",
        description:
          "Phone, email and the Vapi, Gujarat location are presented up front so serious buyers can reach BLS instantly.",
        icon: "Smartphone",
      },
      {
        title: "Launch Landing Page",
        description:
          "A focused single-page launch site builds credibility and captures leads while the full website is in development.",
        icon: "Globe",
      }
    ],
    testimonial: undefined,
    screenshots: ['/bls-packaging.jpg'],
    nextProject: 'apna-bazar',
    prevProject: 'lumiere-salon',
  },
  {
    slug: 'apna-bazar',
    title: "Apna Bazaar — Neighbourhood Supermarket",
    tagline:
      "A warm, WhatsApp-first grocery storefront that turns a neighbourhood kirana into a doorstep delivery brand for Ahmedabad.",
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/apna-bazar.jpg',
    heroImage: '/apna-bazar.jpg',
    liveUrl: 'https://apna-bazar-rust.vercel.app/',
    client: "Apna Bazaar — Neighbourhood Supermarket (Demo)",
    duration: "2 weeks",
    year: "2026",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    services: ["Web Development", "UI/UX Design", "E-commerce", "WhatsApp Integration"],
    overview:
      "Apna Bazaar is a demo storefront for a neighbourhood supermarket and WhatsApp grocery concept, built to show local kirana stores and grocers what a modern doorstep-delivery brand can look like online. It presents a full monthly grocery experience — browse by category, see this week's basket, claim offers, and order over WhatsApp — with a warm, distinctly Gujarati personality throughout.",
    problem:
      "Neighbourhood grocers in Gujarat run on trust and WhatsApp orders, but rarely have a digital home that showcases their range or makes ordering effortless. Customers expect to browse products, check offers, and place a list from their phone — yet most local supermarkets force them to call, visit in person, or download a clunky app no one wants.",
    solution:
      "We designed a friendly, conversion-focused storefront across five pages — Home, Products, Offers, About, and Contact — built around frictionless WhatsApp ordering instead of app downloads. Shoppers browse six categories from Staples & Spices to Household & Personal Care, see the most-ordered weekly basket, and tap straight into a WhatsApp order with a floating cart always in reach. A warm green-and-cream palette, bold friendly serif, emoji product icons, and Gujarati-language flavour give the brand the local, neighbourhood warmth that big delivery apps lack.",
    results: [
      "5-page responsive storefront with WhatsApp-first ordering flow",
      "6 shoppable grocery categories from staples to household care",
      "Showcases 18+ years and 25,000+ families served as trust signals",
      "Built as a live sales demo for local supermarkets and kirana stores"
    ],
    features: [
      {
        title: "WhatsApp Ordering",
        description:
          "Shoppers place their full grocery list straight over WhatsApp with no app download — the lowest-friction path to a confirmed order.",
        icon: "MessageCircle",
      },
      {
        title: "Shop by Category",
        description:
          "Six clear categories from Staples & Spices to Fresh Produce and Household care let customers find their monthly list in seconds.",
        icon: "Package",
      },
      {
        title: "Weekly Basket & Offers",
        description:
          "A most-ordered weekly basket and offers of up to 25% OFF surface the best deals and nudge repeat orders.",
        icon: "TrendingUp",
      },
      {
        title: "Floating Cart",
        description:
          "An always-visible floating cart keeps the order in view as shoppers browse, reducing drop-off before checkout.",
        icon: "Zap",
      },
      {
        title: "Local Brand Warmth",
        description:
          "Warm green-and-cream palette, friendly bold serif, and Gujarati-language flavour give the storefront genuine neighbourhood character.",
        icon: "Palette",
      },
      {
        title: "Mobile-First Storefront",
        description:
          "Fully responsive and built for the smartphone, the device every grocery shopper uses to browse and order from home.",
        icon: "Smartphone",
      }
    ],
    testimonial: undefined,
    screenshots: ['/apna-bazar.jpg'],
    nextProject: 'law-firm',
    prevProject: 'bls-packaging',
  },
  {
    slug: 'law-firm',
    title: "Mehta & Kapadia — Advocates & Solicitors Website",
    tagline:
      "A premium, Bar Council-compliant law firm website built to convey judgment, discretion, and quiet authority.",
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/law-firm.jpg',
    heroImage: '/law-firm.jpg',
    liveUrl: 'https://lawdemowebsite.netlify.app/',
    client: "Mehta & Kapadia — Advocates & Solicitors (Demo)",
    duration: "3 weeks",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Three Fiber", "Netlify"],
    services: ["Web Development", "UI/UX Design", "Premium Branding"],
    overview:
      "A demo website for a full-service law firm advising businesses, institutions, and individuals on their most consequential matters. The build showcases the navy-and-cream editorial standard OM brings to advocates, solicitors, and chambers — refined serif typography, a 3D scales-of-justice sculpture, and a quiet, authoritative tone that reads like counsel you can build on.",
    problem:
      "Most law firm websites in India either over-design and breach Bar Council of India solicitation rules, or under-design into generic templates that undercut a firm's credibility. Established firms need a presence that signals judgment, discretion, and a deep track record — without ever appearing to advertise or solicit work. The goal was a demo that shows legal clients exactly what a compliant, premium firm website looks like.",
    solution:
      "OM built a six-section editorial site — 01 The Firm, 02 Practice Areas, 03 People, 04 Track Record, 05 Insights, 06 Contact — opening on a Bar Council of India disclaimer gate (I Agree / Decline) so the build is compliant by design. A navy-and-cream split-screen layout pairs refined serif typography with a 3D scales-of-justice and gavel sculpture for understated authority. Copy is positioned around corporate, commercial, and contentious work for listed companies, banks, promoters, and multinationals, with a single restrained \"Request a Consultation\" call to action.",
    results: [
      "6-section editorial site spanning Firm, Practice Areas, People, Track Record, Insights, and Contact",
      "Bar Council of India disclaimer gate keeps the build compliant by design",
      "Est. 1998 heritage framed to signal judgment, not volume",
      "Used as a live sales demo for law firms, advocates, and chambers"
    ],
    features: [
      {
        title: "Compliant Disclaimer Gate",
        description:
          "An entry overlay carrying the Bar Council of India disclaimer with I Agree and Decline actions, keeping the firm presence non-solicitous by design.",
        icon: "Shield",
      },
      {
        title: "3D Scales of Justice",
        description:
          "A subtle React Three Fiber scales-of-justice and gavel sculpture adds depth and authority without tipping into ornament.",
        icon: "Layers",
      },
      {
        title: "Navy & Cream Editorial Layout",
        description:
          "A split-screen navy-and-cream design with refined serif typography that reads like a printed brief rather than a brochure.",
        icon: "Palette",
      },
      {
        title: "Six-Section Architecture",
        description:
          "Numbered sections for The Firm, Practice Areas, People, Track Record, Insights, and Contact guide clients through the practice with clarity.",
        icon: "LayoutDashboard",
      },
      {
        title: "Restrained Consultation CTA",
        description:
          "A single quiet Request a Consultation call to action converts interest without aggressive marketing language.",
        icon: "MessageCircle",
      },
      {
        title: "Responsive & Refined",
        description:
          "Mobile-first layouts preserve the editorial precision and serif hierarchy across phones, tablets, and desktops.",
        icon: "Smartphone",
      }
    ],
    testimonial: undefined,
    screenshots: ['/law-firm.jpg'],
    nextProject: 'arha-clinic',
    prevProject: 'apna-bazar',
  },
  {
    slug: 'arha-clinic',
    title: "ARIA Dental Studio — Cosmetic & Implant Dentistry",
    tagline:
      "A calming, conversion-focused dental clinic website built to ease patient anxiety and drive painless appointment bookings.",
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/arha-clinic.jpg',
    heroImage: '/arha-clinic.jpg',
    liveUrl: 'https://arhaclinic.netlify.app/',
    client: "ARIA Dental Studio (Demo)",
    duration: "2 weeks",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Netlify"],
    services: ["Web Development", "UI/UX Design", "Lead Generation", "WhatsApp Integration"],
    overview:
      "ARIA Dental Studio is a demo website for a modern cosmetic and implant dentistry clinic in Satellite, Ahmedabad, showcasing how a dental practice can win patient trust online. Built around a calming soft mint-green and cream bento layout, it presents treatments, the doctor, reviews, and a frictionless booking flow. This demo targets dentists and clinics looking for a credible, anxiety-reducing digital presence that converts browsers into booked patients.",
    problem:
      "Most dental websites in India feel clinical and intimidating, amplifying the fear that already keeps nervous patients from booking. Prospective patients want to know who their dentist is, what treatments cost, and that the experience will be painless before they ever pick up the phone. Few clinic sites answer those questions clearly or make booking feel as easy and reassuring as it should.",
    solution:
      "We designed a calming, trust-first dental site anchored by a soft mint-green and cream bento layout, playful 3D blob shapes, and a \"Painless. Promise.\" message that speaks directly to patient anxiety. Dedicated Services, Doctor, Why ARIA, Reviews, FAQ, and Contact sections walk patients through transparent pricing — from a ₹500 check-up to ₹25,000 implants — alongside Dr. Aanya Shah's credentials and Google-style reviews. An embedded map, \"open now\" status, and one-tap Call and WhatsApp booking turn the site into a low-friction appointment engine.",
    results: [
      "10 treatments showcased with transparent from-pricing",
      "4.9 rating and 500+ patients surfaced as social proof",
      "1-tap Call and WhatsApp booking on every screen",
      "Used as a live sales demo for dental clinics and cosmetic dentists"
    ],
    features: [
      {
        title: "Painless-First Messaging",
        description:
          "A calming mint-green and cream bento design with a clear \"Painless. Promise.\" message is built to soften the dental anxiety that stops nervous patients from booking.",
        icon: "Shield",
      },
      {
        title: "Transparent Treatment Pricing",
        description:
          "Ten treatments from check-ups to implants are listed with clear from-pricing so patients understand cost before they ever enquire.",
        icon: "LayoutDashboard",
      },
      {
        title: "Doctor Trust Profile",
        description:
          "A dedicated section for Dr. Aanya Shah's BDS, MDS qualifications and 12 years of experience builds patient confidence before the first visit.",
        icon: "Users",
      },
      {
        title: "Social Proof Reviews",
        description:
          "A 4.9 rating, 500+ happy patients, and Google-style review cards with avatars reassure first-time visitors that they are in trusted hands.",
        icon: "Star",
      },
      {
        title: "One-Tap Booking",
        description:
          "Prominent Call and WhatsApp CTAs with an \"open now\" status make booking an appointment effortless from any device.",
        icon: "MessageCircle",
      },
      {
        title: "Playful 3D Bento Layout",
        description:
          "Soft 3D blob shapes and a modern bento grid with Framer Motion animation give the clinic a warm, premium feel that stands out from clinical competitors.",
        icon: "Palette",
      }
    ],
    testimonial: undefined,
    screenshots: ['/arha-clinic.jpg'],
    nextProject: 'sce-boiler-spares',
    prevProject: 'law-firm',
  },
  {
    slug: 'sce-boiler-spares',
    title: "Shree Chamunda Enterprise — Industrial Valves & Instrumentation",
    tagline:
      "A dark, technical B2B website that turns valve and instrumentation specs into quote requests from serious industrial buyers.",
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/sce-boiler-spares.jpg',
    heroImage: '/sce-boiler-spares.jpg',
    liveUrl: 'https://sceboilerspares.vercel.app/',
    client: "Shree Chamunda Enterprise",
    duration: "2 weeks",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    services: ["Web Development", "UI/UX Design", "Lead Generation", "WhatsApp Integration"],
    overview:
      "Shree Chamunda Enterprise is a B2B industrial supplier of valves, electro-pneumatic positioners and process instruments for upstream oil and gas and process industries. We built a 7-page technical website that presents their full product portfolio and international quality standards, and channels engineers and procurement teams straight to a quote request.",
    problem:
      "Industrial buyers evaluate suppliers on precision, compliance and product range before they ever pick up the phone — yet that credibility is hard to convey without a serious technical web presence. The site had to read as engineered and standards-driven as the hardware itself, while making it effortless for a process engineer to find the right valve or positioner and request pricing.",
    solution:
      "We designed a dark navy technical theme with a blue accent that signals precision and reliability, built around product photography cards and prominent spec callouts. The Products page covers the complete range — gate, ball, butterfly, check and solenoid valves, YT-1000 series electro-pneumatic positioners, RTDs and thermocouples, PID controllers and electromagnetic flow meters — each with technical specs like the YT-1000 (4-20mA, Ex d IIC) and Mag Flow Meter (±0.5%, DN10-1200). A dedicated Quality page foregrounds ISO 9001, CE, API 6D, API 600, API 609 and IBR compliance, while Get a Quote and WhatsApp CTAs give buyers a fast, low-friction path to enquire.",
    results: [
      "7-page B2B site spanning Home, Products, Industries, About, Quality, Contact and Get a Quote",
      "6 international standards showcased — ISO 9001, CE, API 6D, API 600, API 609 and IBR",
      "Every product card drives to a Get a Quote or WhatsApp enquiry, turning specs into leads",
      "Mobile-optimized dark technical theme built to earn trust from engineers and procurement teams"
    ],
    features: [
      {
        title: "Technical Product Portfolio",
        description:
          "A structured catalogue covering valves, electro-pneumatic positioners, RTDs, PID controllers and electromagnetic flow meters, each presented with clear spec callouts.",
        icon: "Package",
      },
      {
        title: "Get a Quote Flow",
        description:
          "Prominent Get a Quote CTAs across the site give procurement teams a direct, low-friction path from product interest to a pricing enquiry.",
        icon: "CheckCircle2",
      },
      {
        title: "WhatsApp Enquiry",
        description:
          "A WhatsApp CTA lets engineers send a quick enquiry from any page, matching how B2B industrial buyers actually prefer to reach suppliers.",
        icon: "MessageCircle",
      },
      {
        title: "Quality & Standards Page",
        description:
          "A dedicated Quality page foregrounds ISO 9001, CE, API 6D, API 600, API 609 and IBR compliance to establish credibility with critical-industry buyers.",
        icon: "Shield",
      },
      {
        title: "Spec Callout Cards",
        description:
          "Product photography cards surface key specs like the YT-1000 positioner (4-20mA, Ex d IIC) and Mag Flow Meter (±0.5%, DN10-1200) at a glance.",
        icon: "Zap",
      },
      {
        title: "Dark Technical Theme",
        description:
          "A dark navy theme with a blue accent gives the site the engineered, precision feel that signals reliability for upstream oil, gas and process industries.",
        icon: "Palette",
      }
    ],
    testimonial: undefined,
    screenshots: ['/sce-boiler-spares.jpg'],
    nextProject: 'angan-architecture',
    prevProject: 'arha-clinic',
  },
  {
    slug: 'angan-architecture',
    title: "Aangan — Architecture & Interior Studio",
    tagline:
      "A quiet-luxury portfolio website for an architecture and interior studio, where slow editorial design lets the spaces and the light speak.",
    category: 'Web Development',
    status: 'Live',
    thumbnail: '/angan-architecture.jpg',
    heroImage: '/angan-architecture.jpg',
    liveUrl: 'https://anganarechitecture.netlify.app/',
    client: "Aangan Architecture & Interiors (Demo)",
    duration: "2 weeks",
    year: "2026",
    techStack: ["React", "Vite", "Framer Motion", "Lenis", "TypeScript", "Netlify"],
    services: ["Web Development", "UI/UX Design", "Premium Branding"],
    overview:
      "Aangan is a demo portfolio website for an architecture and interior design studio that designs slowly, details obsessively, and builds spaces meant to age well. Built for design practices that want their website to feel as considered as their work, it leads with a full-bleed featured project and walks visitors through a curated selection of residential, hospitality and workplace spaces.",
    problem:
      "Architecture and interior studios live and die by the quality of their visual presentation, yet most portfolio sites bury the work behind clutter, slow galleries, or generic templates that flatten the craft. The challenge was to create a digital space restrained enough to let the photography breathe, while still guiding prospective clients through the studio's range, philosophy and contact path.",
    solution:
      "We designed a quiet-luxury, editorial experience built around restraint — generous whitespace, large-scale typography, and Lenis-powered smooth scrolling that turns browsing into a slow walk through the work. A full-bleed featured project (Villa Aranya) anchors the hero, followed by a Selected Works gallery of six projects tagged by type, city and year, a Studio section that states the practice's philosophy, and a minimal contact path. Framer Motion choreographs deliberate, unhurried transitions so the architecture, not the interface, stays in focus.",
    results: [
      "6 curated projects showcased across residential, hospitality and workplace",
      "6 cities represented — Alibaug, Ahmedabad, Udaipur, Bengaluru, Mumbai and Goa",
      "Immersive single-flow scroll experience that keeps the photography centre-stage",
      "Live demo OM uses to win architecture, interior design and studio clients"
    ],
    features: [
      {
        title: "Full-Bleed Featured Project",
        description:
          "An immersive full-screen hero built around a single featured project sets a gallery-grade tone from the first frame.",
        icon: "Star",
      },
      {
        title: "Selected Works Gallery",
        description:
          "A curated walk-through of six projects tagged by type, city and year lets prospects grasp the studio's range at a glance.",
        icon: "LayoutDashboard",
      },
      {
        title: "Quiet-Luxury Aesthetic",
        description:
          "Generous whitespace, editorial typography and restrained colour let the architecture and its light do the talking.",
        icon: "Palette",
      },
      {
        title: "Lenis Smooth Scroll",
        description:
          "Buttery Lenis-powered scrolling turns the page into a slow, deliberate walk through the studio's work.",
        icon: "Layers",
      },
      {
        title: "Studio Philosophy",
        description:
          "A dedicated Studio section articulates the practice's restraint-first ethos to build trust with discerning clients.",
        icon: "Users",
      },
      {
        title: "Cinematic Motion",
        description:
          "Framer Motion choreographs slow, unhurried transitions that keep the spaces — not the interface — in focus.",
        icon: "Zap",
      }
    ],
    testimonial: undefined,
    screenshots: ['/angan-architecture.jpg'],
    nextProject: 'angan-restaurant',
    prevProject: 'sce-boiler-spares',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
