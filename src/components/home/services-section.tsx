'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { SERVICES } from '@/lib/constants';

const FEATURED = new Set(['Web Development', 'AI Automations', 'Digital Marketing']);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export function ServicesSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Core Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Simple, powerful solutions to modernise your business — from day one.
          </p>
        </div>

        <motion.div
          variants={shouldReduce ? {} : container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {SERVICES.map((service) => {
            const featured = FEATURED.has(service.title);
            return (
              <motion.div
                key={service.title}
                variants={shouldReduce ? {} : cardVariants}
                whileHover={shouldReduce ? {} : { y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                className="h-full"
              >
                <Link href={service.href} className="group relative flex h-full flex-col rounded-xl border bg-card p-5 transition-colors hover:border-primary/50">
                  {featured && (
                    <span className="absolute right-3 top-3 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                      Popular
                    </span>
                  )}
                  {featured && (
                    <span className="absolute inset-0 rounded-xl border border-primary/30 pointer-events-none" />
                  )}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold leading-snug md:text-base">{service.title}</h3>
                  <p className="mt-2 hidden text-xs text-muted-foreground leading-relaxed md:block flex-grow">
                    {service.description}
                  </p>
                  <span className="mt-3 flex items-center text-xs font-medium text-primary">
                    Learn more
                    <MoveRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
