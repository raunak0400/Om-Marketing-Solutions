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
            growth and engagement. Explore our portfolio of projects that
            demonstrate our commitment to quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="flex h-full transform flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {project.image && (
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.href && project.href !== '#' && (
                  <Button asChild variant="default" size="sm">
                    <Link href={project.href} target="_blank" rel="noopener noreferrer">
                      View Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {project.github && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
