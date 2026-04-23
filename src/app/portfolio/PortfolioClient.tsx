'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

const FILTERS = ['All', 'Web Development', 'Digital Marketing', 'AI & Automation'];

const STATS = [
  { value: '20+', label: 'Projects Delivered' },
  { value: '3+',  label: 'Years in Ahmedabad' },
  { value: '8',   label: 'Services Offered' },
];

function StatusBadge({ status }: { status: string }) {
  const color =
    status === 'Live'
      ? 'bg-green-500/20 text-green-400 border-green-500/30'
      : status === 'In Development'
      ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
      : 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  const dot =
    status === 'Live' ? 'bg-green-400 animate-pulse' : status === 'In Development' ? 'bg-amber-400' : 'bg-blue-400';
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${color}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {status}
    </span>
  );
}

export function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Web Development') return p.category === 'Web Development';
    if (activeFilter === 'Digital Marketing') return p.services.includes('Digital Marketing');
    if (activeFilter === 'AI & Automation') return p.services.includes('AI Integration');
    return true;
  });

  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border/40 py-16 md:py-24">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tighter md:text-5xl"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            Real projects delivered for real businesses across Gujarat.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-10 flex max-w-sm justify-between divide-x divide-border/60 rounded-2xl border border-border/60 bg-card px-6 py-4"
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-1 flex-col items-center px-4">
                <span className="text-2xl font-bold text-white">{s.value}</span>
                <span className="mt-0.5 text-[11px] text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filter bar + Grid ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container">
          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-indigo-600 text-white'
                    : 'border border-border/60 bg-card text-muted-foreground hover:border-indigo-500/40 hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Cards grid */}
          <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "50px" }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[10px] font-medium text-indigo-300 border border-indigo-500/30">
                        {project.category}
                      </span>
                      <StatusBadge status={project.status} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-grow flex-col p-5">
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="mt-1.5 flex-grow text-sm text-muted-foreground line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border/60 px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex gap-2">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-indigo-600/10 px-3 py-2 text-[12px] font-medium text-indigo-400 hover:bg-indigo-600/20 transition-colors border border-indigo-500/20"
                      >
                        Case Study <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 rounded-lg border border-border/60 px-3 py-2 text-[12px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No projects match this filter yet.
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="border-t border-border/40 py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Want us to build yours?</h2>
          <p className="mt-3 text-muted-foreground">
            Free consultation, no obligations. We&apos;d love to hear about your project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-[14px] font-medium text-white hover:bg-indigo-700 transition-colors"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
