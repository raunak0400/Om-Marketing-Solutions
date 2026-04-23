'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap } from 'lucide-react';

const H1_WORDS = ['Grow', 'Your', 'Business', 'in', 'Ahmedabad', 'with', 'Digital', 'Solutions'];

const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

export function HeroSection() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  });

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">

          {/* Top badge */}
          <motion.div {...fadeUp(0)}>
            <Badge variant="outline" className="px-4 py-1.5 mb-6 inline-flex">
              <Zap className="mr-2 h-4 w-4 text-primary" />
              Digital Solutions for Growing Businesses
            </Badge>
          </motion.div>

          {/* H1 — word-by-word reveal */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            {H1_WORDS.map((word, i) => (
              <motion.span
                key={i}
                initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className={`inline-block mr-[0.25em] ${word === 'Ahmedabad' ? 'text-primary' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.4)}
            className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            We help Indian SMEs modernise with professional websites, automation, and performance
            marketing — fast, affordable, and built for real growth.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.6)}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" asChild className="btn-glow-hover w-full sm:w-auto">
                <Link href="/contact-us">
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" variant="outline" asChild className="btn-glow-hover w-full sm:w-auto">
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Price trust badge */}
          <motion.div {...fadeUp(0.7)} className="mt-4 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/50 px-3 py-1 text-sm text-muted-foreground">
              <BadgeCheck className="h-4 w-4 text-primary" />
              Websites starting from ₹4,999
            </span>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            {...fadeUp(0.8)}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {STATS.map((stat, i) => (
              <span key={stat.label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                {i > 0 && <span className="text-border/60 hidden sm:inline">·</span>}
                <strong className="text-foreground font-semibold">{stat.value}</strong>
                {stat.label}
              </span>
            ))}
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <span className="text-border/60 hidden sm:inline">·</span>
              <strong className="text-foreground font-semibold">Ahmedabad-based</strong>
              Team
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
