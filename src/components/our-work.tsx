import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const CLIENT_PROJECTS = [
  {
    id: 1,
    name: 'SilverLeaf Preschool',
    category: 'Education Website',
    description:
      'A vibrant, parent-friendly preschool website with animated sections, real photo integration, WhatsApp-connected contact form, and mobile-first responsive design. Built to increase admissions enquiries.',
    tags: ['React', 'Tailwind CSS', 'WhatsApp Integration', 'Animations'],
    liveUrl: 'https://silver-leaf-preschool.vercel.app/',
    color: '#4CAF50',
    icon: '🏫',
    result: 'Admission Enquiries ↑',
  },
  {
    id: 2,
    name: "Priya's Training Hub",
    category: 'Training & Coaching Website',
    description:
      'A professional training and coaching platform with course showcase, trainer profile, testimonials, and lead generation forms. Designed to convert visitors into enrolled students.',
    tags: ['React', 'Tailwind CSS', 'Lead Generation', 'Responsive'],
    liveUrl: 'https://priyas-training-hub.vercel.app/',
    color: '#9C27B0',
    icon: '🎓',
    result: 'Lead Conversion Focused',
  },
  {
    id: 3,
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
            From preschools to premium consultancy firms — every website we build is designed to
            generate results, not just look good.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
