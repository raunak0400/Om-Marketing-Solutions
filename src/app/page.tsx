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
import { ArrowRight, Check, MoveRight, PlayCircle, Zap, Mail, MapPin, Phone as PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ConstellationBackground } from '@/components/constellation-background';

export default function Home() {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh]">
        <ConstellationBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="container relative flex h-full items-center">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="px-4 py-1.5">
              <Zap className="mr-2 h-4 w-4 text-primary" />
              Digital Solutions for Growing Businesses
            </Badge>
            <h1 className="mt-6 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              Grow Your Vyavsay with <br /> <span className="text-primary">Digital Solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Is your business ready for the digital age? We help traditional Indian businesses like yours—retailers, manufacturers, and service providers—modernize with practical technology. Get a professional website, automate your operations, and reach more customers with our simple, result-oriented solutions.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild className="btn-glow-hover">
                <Link href="/contact-us">Get Started <ArrowRight /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="btn-glow-hover">
                <Link href="/#services"><PlayCircle /> View Our Solutions</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => (
                <Link href={service.href} key={service.title}>
                  <Button variant="secondary" className="w-full h-auto min-h-[60px] py-3 px-4 text-sm whitespace-normal flex items-center justify-center">
                    <service.icon className="mr-2 flex-shrink-0 h-5 w-5" />
                    <span className="text-center leading-tight">{service.title}</span>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Core Services
            </h2>
            <p className="mt-4 text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
              Simple, Powerful Solutions to Modernize Your Business
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From initial concept to enterprise-scale deployment, we provide the strategic technical expertise required for your success.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <Link href={service.href} key={service.title}>
                <Card className="group flex h-full transform flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-card btn-glow-hover">
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

      {/* Why Choose Us Section */}
      <section id="about" className="bg-card py-16 md:py-24">
        <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose OM Marketing Solutions?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We are not another faceless tech company. We are your dedicated partner, focused on making technology accessible and profitable for your business. We succeed when you succeed.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong className="block">Focus on ROI:</strong> Every solution we build is designed to provide a measurable return on your investment.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong className="block">Simple & Affordable:</strong> We deliver powerful technology without the high costs and complexity of typical enterprise software.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong className="block">We Understand Your Business:</strong> Our team has deep experience working with traditional Indian businesses. We speak your language.
                </span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/randi.jpeg"
              alt="Why Choose OM Marketing Solutions"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Workflow
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Work
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
            <Button asChild size="lg" variant="outline" className="btn-glow-hover">
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
              Trusted by Indian Businesses
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Client success is our primary metric. We are proud to be a trusted partner for local market leaders.
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

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Let's discuss how our digital solutions can reduce your costs, increase your sales,
              and prepare your business for the future. Get started today.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+919825247312"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9825247312
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:contact@ommarketing.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@ommarketing.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ahmedabad, Gujarat
                    <br />
                    India
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild className="btn-glow-hover">
                <Link href="/contact-us">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="btn-glow-hover">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
