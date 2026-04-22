import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FAQAccordion, type FAQ } from '@/components/faq-accordion';

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface WhyPoint {
  title: string;
  description: string;
}

export interface ServicePageLayoutProps {
  // Hero
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  glowGradient: string;

  // What's Included
  features: FeatureCard[];

  // Why Choose Us
  stats: Stat[];
  whyPoints: WhyPoint[];

  // FAQ
  faqs: FAQ[];

  // Optional slot inserted between "Why Choose Us" and "FAQ" (e.g. Live Demos)
  extraSection?: React.ReactNode;
}

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We learn about your business, goals, and requirements through a free consultation call.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We create wireframes and mockups for your review and approval before development begins.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Our team builds your solution with regular updates and feedback checkpoints throughout.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'We deploy, test thoroughly, and provide ongoing support after going live.',
  },
];

export function ServicePageLayout({
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  glowGradient,
  features,
  stats,
  whyPoints,
  faqs,
  extraSection,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            {/* Text */}
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl leading-tight">
                {title}
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed">
                {subtitle}
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  asChild
                  className="btn-glow-hover min-h-[44px]"
                >
                  <Link href="/contact-us">
                    Get Free Consultation{' '}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="min-h-[44px]"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>

              {/* Trust bar */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {['Free Consultation', 'Fast Turnaround', '100% Satisfaction'].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <span className="font-bold text-primary">✓</span> {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Image */}
            <div className="relative flex items-center justify-center animate-fade-in-up">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${glowGradient} opacity-20 blur-3xl animate-image-glow`}
              />
              <div className="relative">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT'S INCLUDED ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What&apos;s Included
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Everything you need — delivered as a complete, end-to-end
              solution with no hidden extras.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`rounded-xl border border-border bg-background p-6 animate-fade-in-up stagger-${
                  (index % 6) + 1
                }`}
              >
                <div className="mb-3 text-3xl">{feature.icon}</div>
                <h3 className="mb-1.5 font-semibold text-sm sm:text-base">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. HOW WE WORK ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              How We Work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A clear, proven process — from first conversation to final
              delivery.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Horizontal connector — desktop only */}
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 md:flex-col md:items-center md:gap-0 md:text-center"
                >
                  {/* Number circle */}
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm md:mb-4">
                    {step.number}
                  </div>
                  {/* Content */}
                  <div className="pb-4 md:pb-0">
                    <h3 className="font-semibold text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Choose Us
            </h2>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-xl border border-primary/30 bg-background p-8 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1.5">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Why points */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base mb-0.5">
                    {point.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPTIONAL EXTRA SECTION (e.g. Live Demos) ─────────────────────── */}
      {extraSection}

      {/* ── 5. FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Have questions? We have answers. If you don&apos;t find what
              you&apos;re looking for, just reach out directly.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Get Started? Let&apos;s Talk.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Book a free 30-minute consultation and we&apos;ll map out exactly
              how we can help your business grow.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="btn-glow-hover min-h-[44px]"
              >
                <Link href="/contact-us">
                  Book Free Consultation{' '}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="min-h-[44px] border-green-500 text-green-400 hover:bg-green-500/10 hover:text-green-300"
              >
                <a
                  href="https://wa.me/919825247312"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* WhatsApp icon */}
                  <svg
                    className="mr-2 h-5 w-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Contact info */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a
                href="tel:+919825247312"
                className="hover:text-primary transition-colors"
              >
                📞 +91 9825247312
              </a>
              <a
                href="mailto:support@ommarketingsolutions.in"
                className="hover:text-primary transition-colors break-all"
              >
                ✉️ support@ommarketingsolutions.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
