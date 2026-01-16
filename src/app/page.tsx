import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { OUR_PROCESS, PORTFOLIO_PROJECTS, SERVICES, TESTIMONIALS } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Check, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

export default function Home() {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Abstract background"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="container relative flex h-full items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Building the Future of Your Business, Today.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Apex Digital delivers premium web development, automation, and
              digital transformation services designed for SMEs, founders, and
              enterprises.
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg" asChild>
                <Link href="/estimate">Get a Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline">Our Services</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              A-to-Z Tech Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From concept to launch and beyond, we provide the technical
              expertise you need to succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <Link href={service.href} key={service.title}>
                <Card className="group flex h-full transform flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {service.description.substring(0, 100)}...
                    </p>
                  </CardContent>
                  <CardFooter>
                    <span className="flex items-center text-sm font-medium text-primary">
                      Learn More
                      <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="bg-card py-16 md:py-24">
        <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <Badge variant="default">About Apex Digital</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              A Partner in Your Growth, Not Just a Vendor
            </h2>
            <p className="mt-4 text-muted-foreground">
              We believe in building long-term relationships. Our team integrates
              with yours to understand your vision and deliver solutions that
              truly make an impact.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong className="block">Corporate & Trustworthy:</strong>{' '}
                  Professionalism and transparency at every step.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong className="block">Tech-Forward Solutions:</strong>{' '}
                  Leveraging the latest technology for optimal results.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong className="block">Premium but Affordable:</strong>{' '}
                  High-quality service that respects your budget.
                </span>
              </li>
            </ul>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <Image
              src="https://picsum.photos/seed/301/800/600"
              alt="Team working together"
              fill
              className="object-cover"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline">Our Process</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              A Clear Path to Success
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We follow a structured, collaborative process to ensure your project is a success from start to finish.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible defaultValue="item-0">
              {OUR_PROCESS.map((item, index) => (
                <AccordionItem key={item.step} value={`item-${index}`}>
                  <AccordionTrigger className="text-2xl font-semibold">
                    <div className="flex items-center gap-4">
                      <span className="text-primary">{item.step}</span>
                      <span>{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pl-12 text-base text-muted-foreground">
                    <p>{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="portfolio" className="bg-card py-16 md:py-24">
        <div className="container">
           <div className="mb-12 text-center">
             <Badge variant="default">Our Work</Badge>
             <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
               Featured Case Studies
             </h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Explore a selection of our projects that demonstrate our commitment to quality and innovation.
             </p>
           </div>
           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
             {featuredProjects.map((project) => (
               <Card
                 key={project.title}
                 className="flex transform flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
               >
                 <CardHeader>
                   {project.image && (
                     <Image
                       src={project.image.imageUrl}
                       alt={project.title}
                       width={600}
                       height={400}
                       className="h-48 w-full rounded-t-lg object-cover"
                       data-ai-hint={project.image.imageHint}
                     />
                   )}
                 </CardHeader>
                 <CardContent className="flex-grow">
                   <CardTitle>{project.title}</CardTitle>
                   <div className="mt-2 flex flex-wrap gap-2">
                     {project.tags.map((tag) => (
                       <Badge key={tag} variant="secondary">
                         {tag}
                       </Badge>
                     ))}
                   </div>
                 </CardContent>
                 <CardFooter>
                   <Button asChild variant="link" className="px-0">
                     <Link href={project.href}>
                       View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                     </Link>
                   </Button>
                 </CardFooter>
               </Card>
             ))}
           </div>
           <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">View All Projects</Link>
              </Button>
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Hear what our clients have to say about their experience with Apex
              Digital.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.author} className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <p className="italic text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
                <CardFooter className="mt-4 flex items-center">
                  {testimonial.avatar && (
                    <Image
                      src={testimonial.avatar.imageUrl}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="mr-4 rounded-full"
                      data-ai-hint={testimonial.avatar.imageHint}
                    />
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Let's turn your idea into a reality. Get a free, no-obligation
            estimate for your project today and discover how we can help you
            grow.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link href="/estimate">
                Get an AI-Powered Estimate <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
