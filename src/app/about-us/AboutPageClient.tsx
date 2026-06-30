'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
  animate as fmAnimate,
} from 'framer-motion';
import {
  Check, Target, Users, Zap, Code, Lightbulb, Rocket, Heart, Award,
  TrendingUp, Clock, Mail, Phone, Github, Linkedin, Instagram, ArrowRight, ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// WebGL hero — client-only (no SSR for the canvas)
const Hero3D = dynamic(() => import('@/components/about/hero-3d'), { ssr: false });

const EASE = [0.16, 1, 0.3, 1] as const;

/* ── Scroll reveal ─────────────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ── 3D tilt-on-hover card ─────────────────────────────────────────────── */
function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(my, { stiffness: 150, damping: 16 });
  const ry = useSpring(mx, { stiffness: 150, damping: 16 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    mx.set(px * 9);
    my.set(-py * 9);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Animated counter ──────────────────────────────────────────────────── */
function CountUp({ to, suffix = '', plainText }: { to?: number; suffix?: string; plainText?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (plainText || to == null) return;
    if (!inView || reduce) { setVal(to); return; }
    const controls = fmAnimate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce, plainText]);

  return <span ref={ref}>{plainText ?? `${val}${suffix}`}</span>;
}

/* ── Decorative blurred gradient orb ───────────────────────────────────── */
function GlowOrb({ className }: { className: string }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />;
}

/* ── Reusable section heading ──────────────────────────────────────────── */
function Heading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

const STATS = [
  { icon: Award, to: 50, suffix: '+', label: 'Projects Delivered' },
  { icon: Users, to: 100, suffix: '%', label: 'Client Satisfaction' },
  { icon: Clock, plainText: '24/7', label: 'Support Available' },
  { icon: TrendingUp, to: 2, suffix: '+', label: 'Years Experience' },
];

const BUILD = [
  { icon: Lightbulb, title: '1. Discovery', text: 'We listen to your challenges, understand your business goals, and identify the technology solutions that will create the most impact.' },
  { icon: Target, title: '2. Planning', text: 'We create a clear roadmap with transparent pricing, timelines, and deliverables. No surprises, just a practical plan.' },
  { icon: Code, title: '3. Development', text: 'Using modern technologies like Next.js, React, Node.js, and AI, we build robust, scalable solutions with clean code and best practices.' },
  { icon: Rocket, title: '4. Launch & Support', text: 'We deploy your solution with proper testing, provide training, and offer ongoing support to ensure your success.' },
];

const STACK = [
  { title: 'Frontend Development', items: ['Next.js 15 & React 19', 'TypeScript for type safety', 'Tailwind CSS for styling', 'shadcn/ui components'] },
  { title: 'Backend & Database', items: ['Node.js & Express', 'MongoDB & PostgreSQL', 'Prisma ORM', 'RESTful & GraphQL APIs'] },
  { title: 'AI & Automation', items: ['OpenAI GPT Integration', 'WhatsApp Business API', 'Zapier & Make.com', 'Custom AI Chatbots'] },
  { title: 'Cloud & DevOps', items: ['Vercel & AWS Hosting', 'Docker Containers', 'CI/CD Pipelines', 'Git Version Control'] },
  { title: 'Mobile Development', items: ['React Native', 'Flutter', 'iOS & Android Native', 'Progressive Web Apps'] },
  { title: '3D & Interactive', items: ['Three.js & React Three Fiber', 'WebGL & GLSL Shaders', 'Framer Motion', 'Immersive Web Experiences'] },
];

const VALUES = [
  { icon: Users, title: 'Client-Centric', text: 'Your success is our success. We prioritize understanding your unique needs and delivering solutions that truly make a difference.' },
  { icon: Check, title: 'Quality First', text: 'We never compromise on quality. Every solution we deliver meets the highest standards of excellence and reliability.' },
  { icon: Zap, title: 'Innovation', text: 'We stay ahead of technology trends to bring you cutting-edge solutions that give you a competitive advantage.' },
  { icon: Heart, title: 'Integrity', text: 'Honest communication, transparent pricing, and ethical practices are the foundation of our long-term client relationships.' },
];

const cardBase =
  'h-full rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur transition-colors hover:border-primary/40';

export function AboutPageClient() {
  return (
    <div className="flex flex-col overflow-x-clip">
      {/* ══ HERO with WebGL 3D ═══════════════════════════════════════════════ */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070711] via-background to-background" />
        <GlowOrb className="left-[-10%] top-[10%] h-72 w-72 bg-indigo-600/25" />
        <GlowOrb className="right-[-8%] bottom-[8%] h-80 w-80 bg-cyan-500/20" />

        {/* 3D canvas */}
        <div className="absolute inset-0">
          <Hero3D />
        </div>
        {/* readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

        {/* content */}
        <div className="container relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur"
          >
            Ahmedabad · Gujarat · Since 2023
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We Build the{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Future
            </span>{' '}
            for Indian Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Founded by Het Kumar Patel, OM Marketing Solutions is a passionate team helping
            traditional Indian businesses thrive in the digital age through practical,
            beautifully-built technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" asChild className="btn-glow-hover">
              <Link href="/contact-us">Work With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══ OUR STORY ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                OM Marketing Solutions was born from a simple observation: many traditional Indian
                businesses struggle to adapt to the digital world — not because they lack potential,
                but because technology often feels overwhelming and expensive.
              </p>
              <p className="mt-4 text-muted-foreground">
                Founded by Het Kumar Patel with a vision to bridge this gap, we started with a
                mission — to make digital transformation accessible, affordable, and result-oriented
                for businesses of all sizes.
              </p>
              <p className="mt-4 text-muted-foreground">
                Today, we&apos;re proud to serve businesses across Ahmedabad and Gujarat, helping
                them modernise operations, reach more customers, and grow sustainably.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <TiltCard className="relative h-[400px] overflow-hidden rounded-2xl border border-border/60 md:h-[480px]">
                <Image
                  src="/founders-team.jpg"
                  alt="OM Marketing Solutions founding team, Ahmedabad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ FOUNDER ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-card py-16 md:py-24">
        <GlowOrb className="left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-primary/15" />
        <div className="container relative">
          <Heading title="Meet Our Founder" subtitle="Led by visionary leadership and powered by technical excellence" />
          <Reveal className="mx-auto max-w-xl">
            <TiltCard className={`${cardBase} text-center`}>
              <div className="mb-6 flex justify-center">
                <div className="relative h-44 w-44">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 blur-md opacity-50" />
                  <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-primary/40">
                    <Image src="/hetvi.jpeg" alt="Het Kumar Sanjaykumar Patel" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold">HetKumar Sanjaykumar Patel</h3>
              <p className="font-semibold text-primary">Founder &amp; Business Director</p>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                Het is the business visionary behind OM Marketing Solutions. With a keen understanding
                of client needs and market dynamics, he specialises in client onboarding, relationship
                management, and business development — ensuring every client receives personalised
                solutions aligned with their goals.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                {[
                  { href: 'https://www.linkedin.com/in/hetkumar-sanjaykumar-patel-54730933b', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://www.instagram.com/ommarketing_scales', icon: Instagram, label: 'Instagram' },
                  { href: 'https://github.com/Het161', icon: Github, label: 'GitHub' },
                  { href: 'tel:+919825247312', icon: Phone, label: 'Call' },
                  { href: 'mailto:support@ommarketingsolutions.in', icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <Link key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Icon className="h-4 w-4" /> {label}
                    </Button>
                  </Link>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ══ STATS ════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <TiltCard className={`${cardBase} text-center`}>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold sm:text-4xl">
                    <CountUp to={s.to} suffix={s.suffix} plainText={s.plainText} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW WE BUILD ═════════════════════════════════════════════════════ */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <Heading title="How We Build" subtitle="A collaborative, transparent process focused on delivering real value to your business." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {BUILD.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <TiltCard className={cardBase}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{b.title}</h3>
                  <p className="mt-2 text-muted-foreground">{b.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECH STACK ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Heading title="Our Technology Stack" subtitle="Modern, proven technologies to build scalable, maintainable, and beautiful solutions." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STACK.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <TiltCard className={cardBase}>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 flex-shrink-0 text-primary" /> {it}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ═════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-card py-16 md:py-24">
        <GlowOrb className="right-[-6%] top-1/4 h-72 w-72 bg-violet-600/15" />
        <div className="container relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { icon: Target, title: 'Our Mission', text: 'To empower traditional Indian businesses with accessible, affordable, and result-oriented digital solutions that drive real growth. We measure our success by the success of our clients.' },
              { icon: Zap, title: 'Our Vision', text: 'To be the leading digital transformation partner for Indian businesses — bridging traditional commerce and modern technology, so every business, regardless of size, can leverage tech for growth.' },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 0.12}>
                <TiltCard className={cardBase}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <m.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">{m.title}</h3>
                  <p className="mt-3 text-muted-foreground">{m.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Heading title="Our Core Values" subtitle="The principles that guide everything we do." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <TiltCard className={`${cardBase} text-center`}>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <v.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-muted-foreground">{v.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ════════════════════════════════════════════════════ */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal>
              <TiltCard className="relative h-[400px] overflow-hidden rounded-2xl border border-border/60 md:h-[500px]">
                <Image
                  src="/founders-team.jpg"
                  alt="OM Marketing Solutions team working together in Ahmedabad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </TiltCard>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us?</h2>
              <p className="mt-4 text-muted-foreground">
                We&apos;re not just another tech company. We&apos;re your partner in digital
                transformation, with a deep understanding of the challenges faced by Indian businesses.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  ['Local Expertise', 'Based in Ahmedabad, Gujarat, we understand the unique challenges of Indian businesses and deliver solutions that work in your market.'],
                  ['Proven Results', 'Our clients see measurable improvements in efficiency, sales, and customer satisfaction. We focus on ROI.'],
                  ['Modern Technology', 'We use cutting-edge tools like Next.js, React, AI, 3D/WebGL, and cloud infrastructure to build future-proof solutions.'],
                  ['Dedicated Support', "We're with you every step of the way, from planning to implementation and beyond. Your success is our priority."],
                ].map(([h, t]) => (
                  <li key={h} className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span><strong>{h}:</strong> {t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GlowOrb className="left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/20" />
        <div className="container relative text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Let&apos;s discuss how we can help you achieve your digital goals. Get in touch with
              Het Kumar Patel and the OM Marketing team today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="btn-glow-hover">
                <Link href="/contact-us">Get Started Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
