'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { OUR_PROCESS } from '@/lib/constants';

export function ProcessStepper() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Our Workflow</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A disciplined process that delivers on time, on budget, every time.
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between gap-4">
            {/* Connecting line */}
            <div className="absolute top-6 left-0 right-0 h-px bg-border/40 mx-[3.5rem]">
              <motion.div
                initial={shouldReduce ? {} : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                style={{ transformOrigin: 'left' }}
                className="h-full bg-primary/40"
              />
            </div>

            {OUR_PROCESS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.15, ease: 'easeOut' }}
                className="relative flex flex-1 flex-col items-center text-center px-4"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background text-primary font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="mt-4 text-base font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stepper */}
        <div className="flex flex-col gap-0 md:hidden">
          {OUR_PROCESS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={shouldReduce ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12, ease: 'easeOut' }}
              className="flex gap-5"
            >
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-primary font-bold text-xs">
                  {item.step}
                </div>
                {index < OUR_PROCESS.length - 1 && (
                  <motion.div
                    initial={shouldReduce ? {} : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.12 + 0.2 }}
                    style={{ transformOrigin: 'top' }}
                    className="mt-1 w-px flex-grow bg-primary/30 min-h-[2rem]"
                  />
                )}
              </div>
              {/* Right: content */}
              <div className="pb-8">
                <h3 className="font-semibold leading-snug">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
