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
import { ArrowRight, Check, MoveRight, PlayCircle, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="container relative flex h-full items-center">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="px-4 py-1.5">
              <Zap className="mr-2 h-4 w-4 text-primary" />
              Specialized AI Marketing Solutions
            </Badge>
            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Transform Your Marketing with<br /> <span className="text-primary">AI Automations</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              We're a specialized agency that builds custom AI automation solutions for marketing teams. From intelligent campaigns to automated workflows, we create AI systems that solve your specific challenges and drive business growth.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/estimate">Get Free Consultation <ArrowRight/></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#services"><PlayCircle/> View AI Solutions</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => (
                 <Link href={service.href} key={service.title}>
                  <Button variant="secondary" className="w-full">
                    <service.icon className="mr-2"/>
                    {service.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="outline">Core Capabilities</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              End-to-End Technology Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From initial concept to enterprise-scale deployment, we provide the strategic technical expertise required for your success.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <Link href={service.href} key={service.title}>
                <Card className="group flex h-full transform flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-card">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {service.description}
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
            <Badge variant="default">Why Choose Us</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              Your Strategic Technology Partner
            </h2>
            <p className="mt-4 text-muted-foreground">
              We operate as an extension of your team, dedicated to building long-term relationships and delivering solutions that produce a measurable impact on your business objectives.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong className="block">Strategic Partnership:</strong> We focus on delivering measurable business value, not just technical features.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong className="block">Technology Excellence:</strong> We build robust, scalable, and secure solutions that provide a long-term competitive advantage.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong className="block">Transparent Value:</strong> We provide premium services with clear pricing, focused on delivering a quantifiable return on investment.
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
            <Badge variant="outline">Our Workflow</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              A Structured Path to Success
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our disciplined, collaborative process ensures your project is delivered on time, on budget, and to the highest standards.
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
              Explore a selection of our successful projects and the business impact they delivered.
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
                    <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
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
              Client success is our primary metric. We are proud to be a trusted partner for market leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.author} className="flex flex-col bg-card">
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
            Ready to Build Your Competitive Advantage?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Contact us for a strategic consultation. Discover how our technology solutions can drive tangible business results and get a preliminary estimate to inform your budget planning.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link href="/estimate">
                Get a Project Estimate <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
