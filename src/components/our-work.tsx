import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const CLIENT_PROJECTS = [
  {
    id: 1,
    name: 'Alpha Ventures',
    category: 'Business Consultancy Website',
    description:
      'A premium luxury black-and-gold business consultancy and wealth advisory website. Features cinematic hero design, 6 case study showcases, live investment opportunities section, and full multi-page architecture.',
    tags: ['React', 'Vite', 'Framer Motion', 'Multi-Page', 'Premium Design'],
    liveUrl: 'https://3-m-enterprises.vercel.app',
    color: '#D4AF37',
    icon: '💼',
    result: 'Premium Brand Positioning',
  },
  {
    id: 2,
    name: 'FindUrTrip',
    category: 'Travel Platform',
    description:
      'A full-featured travel discovery platform connecting adventurers with curated trips, treks, and experiences across India. Features cinematic hero, WhatsApp trip planning, Customise Trip flow, and dedicated Events & Stories sections — serving 10K+ happy travellers.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'WhatsApp API', 'Vercel'],
    liveUrl: 'https://findurtrip.org/',
    color: '#E8910C',
    icon: '✈️',
    result: '10K+ Happy Travellers',
  },
  {
    id: 3,
    name: 'KBC Global',
    category: 'Brand Setup & Manufacturing',
    description:
      'A premium dark-luxury website for an FSSAI & GMP certified cosmetics manufacturer offering complete business setup — machines, molds, packaging and branding under one roof. Features a launched-brands wall, animated trust stats, and a Get Started lead flow.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Premium Design'],
    liveUrl: 'https://kbcglobal.in/',
    color: '#6366F1',
    icon: '🏭',
    result: '50+ Brands Launched',
  },
  {
    id: 4,
    name: 'Shree Chamunda Enterprise',
    category: 'Industrial Valves & Instrumentation',
    description:
      'A professional B2B website for an industrial valves and process-instrumentation supplier, built to ISO/API-grade credibility. Features a full product portfolio, spec callouts, certification trust signals, and a Get-a-Quote enquiry flow.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'B2B', 'Vercel'],
    liveUrl: 'https://sceboilerspares.vercel.app/',
    color: '#2563EB',
    icon: '⚙️',
    result: 'Get-a-Quote Lead Flow',
  },
];

export function OurWork() {
  return (
    <section id="our-work" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs uppercase tracking-widest">
            Our Work
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Websites We&apos;ve Built for Real Businesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From travel platforms to industrial manufacturers — every website we build is designed to
            generate results, not just look good.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {CLIENT_PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-card"
            >
              {/* Colored top accent bar — unique per project */}
              <div className="h-1 w-full flex-shrink-0" style={{ backgroundColor: project.color }} />

              <CardHeader className="pb-3">
                <Badge variant="secondary" className="w-fit text-xs">
                  {project.icon} {project.category}
                </Badge>
                <h3 className="mt-2 text-xl font-bold tracking-tight">{project.name}</h3>
              </CardHeader>

              <CardContent className="flex flex-grow flex-col gap-4">
                <p className="flex-grow text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div
                  className="w-fit rounded-md px-2.5 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: `${project.color}22`,
                    color: project.color,
                    border: `1px solid ${project.color}44`,
                  }}
                >
                  {project.result}
                </div>
              </CardContent>

              <div className="mx-6 border-t border-border" />

              <CardFooter className="pt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-primary transition-all hover:text-primary/80"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Website
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild className="btn-glow-hover">
            <Link href="/contact-us">
              Want a website like this? Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
