'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const FEATURED = projects.slice(0, 3);

export function FeaturedPortfolio() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="portfolio" className="bg-card py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Our Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A selection of projects and the business impact they delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={shouldReduce ? {} : { opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-background"
            >
              {/* Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50"
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-black transition-transform hover:scale-105"
                    >
                      <ExternalLink className="h-3 w-3" /> Live
                    </a>
                  )}
                </motion.div>
              </div>

              <div className="flex flex-grow flex-col p-5">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-1.5 flex-grow text-sm text-muted-foreground line-clamp-2">
                  {project.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="mt-4 flex items-center gap-1.5 text-[12px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  View Case Study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="btn-glow-hover">
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
