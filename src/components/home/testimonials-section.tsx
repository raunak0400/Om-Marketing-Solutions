'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence, animate } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const AVATAR_COLORS = [
  'from-blue-500 to-cyan-400',
  'from-violet-500 to-pink-400',
  'from-emerald-500 to-teal-400',
];

function InitialsAvatar({ name, colorClass }: { name: string; colorClass: string }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${colorClass} text-sm font-bold text-white`}>
      {initials}
    </div>
  );
}

function Stars() {
  return (
    <div className="mb-3 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const shouldReduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 4000);
  };

  useEffect(() => {
    if (!shouldReduce) startAutoplay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [shouldReduce]);

  const pause = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  const resume = () => startAutoplay();

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
            Trusted by Indian Businesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Client success is our primary metric.
          </p>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12, ease: 'easeOut' }}
              className="flex flex-col rounded-xl border border-border/60 bg-card p-6"
            >
              <Stars />
              <p className="flex-grow italic text-muted-foreground text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <InitialsAvatar name={t.author} colorClass={AVATAR_COLORS[i % AVATAR_COLORS.length]} />
                <div>
                  <p className="font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: auto-cycling carousel */}
        <div
          className="md:hidden relative overflow-hidden rounded-xl"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={shouldReduce ? {} : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduce ? {} : { opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="flex flex-col rounded-xl border border-border/60 bg-card p-6"
            >
              <Stars />
              <p className="flex-grow italic text-muted-foreground text-sm leading-relaxed">
                &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <InitialsAvatar
                  name={TESTIMONIALS[activeIndex].author}
                  colorClass={AVATAR_COLORS[activeIndex % AVATAR_COLORS.length]}
                />
                <div>
                  <p className="font-semibold text-sm">{TESTIMONIALS[activeIndex].author}</p>
                  <p className="text-xs text-muted-foreground">{TESTIMONIALS[activeIndex].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); pause(); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-border'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
