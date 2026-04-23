'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { IndianRupee, Target, Users } from 'lucide-react';

const CARDS = [
  {
    icon: Target,
    title: 'ROI-Focused',
    body: 'Every solution we build is designed around a measurable return on your investment. We track what matters and optimise relentlessly.',
    animation: { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 } },
  },
  {
    icon: IndianRupee,
    title: 'Simple & Affordable',
    body: 'Enterprise-grade technology without the enterprise price tag. Transparent pricing, fixed budgets, no hidden surprises.',
    animation: { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 } },
  },
  {
    icon: Users,
    title: 'We Understand Your Business',
    body: 'Deep experience with traditional Indian SMEs — retailers, manufacturers, service providers. We speak your language, not tech jargon.',
    animation: { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 } },
  },
];

export function WhyUsSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="about" className="bg-card py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
            Why Choose OM Marketing Solutions?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We are your dedicated digital partner — not another faceless tech vendor.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              initial={shouldReduce ? {} : card.animation.initial}
              whileInView={shouldReduce ? {} : card.animation.whileInView}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col rounded-xl border border-border/60 bg-background p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold md:text-xl">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
