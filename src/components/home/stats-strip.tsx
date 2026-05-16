'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

const STATS = [
  { end: 50, suffix: '+', label: 'Projects Delivered' },
  { end: 30, suffix: '+', label: 'Apps Built' },
  { end: 3, suffix: '+', label: 'Years Experience' },
  { end: 100, suffix: '%', label: 'Client Satisfaction' },
];

function CountUp({ end, suffix, duration = 1.5 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduce) { setCount(end); return; }
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration, shouldReduce]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsStrip() {
  return (
    <section className="border-y border-border/40 bg-card/50 py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary md:text-4xl">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
