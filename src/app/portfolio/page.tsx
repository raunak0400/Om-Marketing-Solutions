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
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="container py-12 md:py-16">
      <section>
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Our Work
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We specialize in creating bespoke digital experiences that drive
            growth and engagement. Explore a selection of our projects that
            demonstrate our commitment to quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
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
                    className="rounded-t-lg object-cover"
                    data-ai-hint={project.image.imageHint}
                  />
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
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
      </section>
    </div>
  );
}
