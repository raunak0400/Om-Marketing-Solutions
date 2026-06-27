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
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-3.5 w-3.5" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function GoogleBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
      <GoogleG /> Google review
    </span>
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
              <div className="mb-3 flex items-center justify-between gap-2">
                <Stars />
                <GoogleBadge />
              </div>
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
              <div className="mb-3 flex items-center justify-between gap-2">
                <Stars />
                <GoogleBadge />
              </div>
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
