'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
  useInView,
} from 'framer-motion';
import {
  ExternalLink,
  Github,
  Download,
  Clock,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  X,
  Globe,
  Smartphone,
  Bot,
  Zap,
  Search,
  BarChart3,
  Shield,
  Users,
  Palette,
  TrendingUp,
  MessageCircle,
  Package,
  AppWindow,
  Megaphone,
  Star,
  Layers,
  LayoutDashboard,
  Code2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { projects } from '@/data/projects';

// ── Icon map ──────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Bot,
  Zap,
  Search,
  BarChart3,
  Shield,
  Users,
  Palette,
  TrendingUp,
  MessageCircle,
  Package,
  AppWindow,
  Megaphone,
  Star,
  Layers,
  LayoutDashboard,
  Code2,
  CheckCircle2,
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: Project['status'] }) {
  const color =
    status === 'Live'
      ? 'bg-green-500/20 text-green-400 border-green-500/30'
      : status === 'In Development'
      ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
      : 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  const dot =
    status === 'Live' ? 'bg-green-400' : status === 'In Development' ? 'bg-amber-400' : 'bg-blue-400';
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${color}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot} ${status === 'Live' ? 'animate-pulse' : ''}`} />
      {status}
    </span>
  );
}

function InitialsAvatar({ name }: { name: string }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">
      {initials}
    </div>
  );
}

// ── Count-up for results ──────────────────────────────────────────────────────
function AnimatedResult({ result }: { result: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  // Extract leading number for animation (e.g. "3×", "40+", "95+", "25%")
  const match = result.match(/^(\d+)([×+%]?)/);
  const numericEnd = match ? parseInt(match[1]) : null;
  const suffix = match ? match[2] : '';
  const rest = match ? result.slice(match[0].length) : result;

  const mv = useMotionValue(0);
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView || numericEnd === null) return;
    const controls = animate(mv, numericEnd, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (displayRef.current) displayRef.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, mv, numericEnd, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-5"
    >
      {numericEnd !== null ? (
        <p className="text-2xl font-bold text-indigo-400">
          <span ref={displayRef}>0{suffix}</span>
        </p>
      ) : (
        <CheckCircle2 className="mb-2 h-6 w-6 text-indigo-400" />
      )}
      <p className="mt-1 text-sm text-muted-foreground">{numericEnd !== null ? rest : result}</p>
    </motion.div>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] max-w-5xl w-full overflow-hidden rounded-xl"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          <X className="h-4 w-4" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="Screenshot" className="h-auto max-h-[90vh] w-full object-contain" />
      </motion.div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export function ProjectPageClient({ project }: { project: Project }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const prevProject = useMemo(
    () => projects.find((p) => p.slug === project.prevProject),
    [project.prevProject]
  );
  const nextProject = useMemo(
    () => projects.find((p) => p.slug === project.nextProject),
    [project.nextProject]
  );

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[70vh] flex-col justify-end pb-12">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
        </div>

        <div className="container relative z-10">
          {/* Breadcrumb */}
          <motion.div {...fadeUp(0.1)} className="mb-4 flex items-center gap-2 text-[12px] text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-gray-300">{project.title}</span>
          </motion.div>

          {/* Badges */}
          <motion.div {...fadeUp(0.2)} className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-[11px] font-medium text-indigo-300 border border-indigo-500/30">
              {project.category}
            </span>
            <StatusBadge status={project.status} />
          </motion.div>

          {/* Title */}
          <motion.h1
            {...fadeUp(0.3)}
            className="text-[28px] font-semibold leading-tight text-white md:text-[40px]"
          >
            {project.title}
          </motion.h1>

          {/* Tagline */}
          <motion.p {...fadeUp(0.4)} className="mt-2 max-w-2xl text-[16px] text-gray-300">
            {project.tagline}
          </motion.p>

          {/* Quick info chips */}
          <motion.div {...fadeUp(0.5)} className="mt-5 flex flex-wrap gap-3">
            {[
              { icon: Clock, label: project.duration },
              { icon: Calendar, label: project.year },
              { icon: Building2, label: project.client },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[12px] text-gray-300 backdrop-blur-sm"
              >
                <Icon className="h-3.5 w-3.5 text-indigo-400" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.6)} className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-[13px] font-medium text-white hover:bg-indigo-700 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            )}
            {project.caseStudyPdf && (
              <a
                href={project.caseStudyPdf}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <Download className="h-4 w-4" />
                Download Case Study
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ══ OVERVIEW ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Left col */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{project.overview}</p>
              </div>
              <div>
                <h2 className="mb-3 text-xl font-semibold">The Challenge</h2>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{project.problem}</p>
              </div>
              <div>
                <h2 className="mb-3 text-xl font-semibold">Our Approach</h2>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{project.solution}</p>
              </div>
            </motion.div>

            {/* Right col — sticky info card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2"
            >
              <div className="sticky top-24 rounded-2xl border border-border/60 bg-card p-6 space-y-6">
                {/* Tech stack */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-indigo-500/25 px-2.5 py-1 text-[12px] font-medium text-indigo-300"
                        style={{ background: 'rgba(99,102,241,0.08)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Services Delivered
                  </h3>
                  <ul className="space-y-2">
                    {project.services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-[13px] text-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-400" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration + year */}
                <div className="flex gap-6 text-[13px]">
                  <div>
                    <p className="text-muted-foreground">Duration</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Year</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/contact-us"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-[13px] font-medium text-white hover:bg-indigo-700 transition-colors"
                >
                  Start a Similar Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FEATURES ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/40 bg-card py-16 md:py-24">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-2xl font-bold tracking-tight md:text-3xl"
          >
            What We Built
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {project.features.map((feature) => {
              const Icon = ICON_MAP[feature.icon] ?? Zap;
              return (
                <motion.div
                  key={feature.title}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
                  }}
                  className="rounded-xl border border-border/60 bg-background p-5"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
                    <Icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <h3 className="text-[15px] font-medium">{feature.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══ RESULTS ════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-2xl font-bold tracking-tight md:text-3xl"
          >
            Results Delivered
          </motion.h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((result) => (
              <AnimatedResult key={result} result={result} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ SCREENSHOTS ════════════════════════════════════════════════════════ */}
      {project.screenshots.length > 0 && (
        <section className="border-t border-border/40 bg-card py-16 md:py-24">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 text-2xl font-bold tracking-tight md:text-3xl"
            >
              Project Screenshots
            </motion.h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {project.screenshots.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  onClick={() => setLightboxSrc(src)}
                  className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-border/60"
                >
                  <div className="relative h-56 w-full md:h-72">
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                      <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-black opacity-0 transition-opacity group-hover:opacity-100">
                        Click to expand
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ TESTIMONIAL ════════════════════════════════════════════════════════ */}
      {project.testimonial && (
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl rounded-2xl border border-indigo-500/20 bg-card p-8 text-center"
              style={{ borderLeft: '4px solid rgba(99,102,241,0.6)' }}
            >
              {/* Decorative quote mark */}
              <svg
                className="mx-auto mb-4 h-10 w-10 text-indigo-500/40"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8C5.582 8 2 11.582 2 16v8h8v-8H6c0-2.21 1.79-4 4-4V8zm14 0c-4.418 0-8 3.582-8 8v8h8v-8h-4c0-2.21 1.79-4 4-4V8z" />
              </svg>
              <p className="text-[18px] italic leading-relaxed text-foreground">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <InitialsAvatar name={project.testimonial.name} />
                <div className="text-left">
                  <p className="text-[14px] font-semibold">{project.testimonial.name}</p>
                  <p className="text-[12px] text-muted-foreground">{project.testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══ PREV / NEXT ════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/40 bg-card">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Previous */}
          {prevProject && (
            <Link href={`/portfolio/${prevProject.slug}`} className="group block">
              <div className="relative h-40 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full"
                >
                  <Image
                    src={prevProject.thumbnail}
                    alt={prevProject.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col items-start justify-center px-6">
                  <span className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-gray-400">
                    <ArrowLeft className="h-3.5 w-3.5" /> Previous Project
                  </span>
                  <p className="mt-1 text-[16px] font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Next */}
          {nextProject && (
            <Link href={`/portfolio/${nextProject.slug}`} className="group block">
              <div className="relative h-40 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full"
                >
                  <Image
                    src={nextProject.thumbnail}
                    alt={nextProject.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col items-end justify-center px-6 text-right">
                  <span className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-gray-400">
                    Next Project <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <p className="mt-1 text-[16px] font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {nextProject.title}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* ══ CTA BANNER ═════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-br from-indigo-900/40 to-violet-900/30 border border-indigo-500/20 p-10 text-center"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Want a project like this?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Let&apos;s talk about your idea. Free consultation, no obligations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-[14px] font-medium text-white hover:bg-indigo-700 transition-colors"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-[14px] font-medium text-white hover:bg-white/5 transition-colors"
              >
                See All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ LIGHTBOX ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
      </AnimatePresence>
    </>
  );
}
