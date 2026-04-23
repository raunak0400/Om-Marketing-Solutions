'use client';

import { useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion';
import {
  X, MapPin,
  Globe, AppWindow, Smartphone, Palette, Package, Bot, TrendingUp, Megaphone,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  { title: 'Web Development',       icon: Globe,       featured: true  },
  { title: 'App Development',       icon: AppWindow,   featured: false },
  { title: 'Mobile Development',    icon: Smartphone,  featured: false },
  { title: 'UI/UX Design',          icon: Palette,     featured: false },
  { title: 'Inventory Management',  icon: Package,     featured: false },
  { title: 'AI Automations',        icon: Bot,         featured: true  },
  { title: 'Performance Marketing', icon: TrendingUp,  featured: false },
  { title: 'Digital Marketing',     icon: Megaphone,   featured: true  },
];

const STATS = [
  { value: 20, suffix: '+', label: 'Projects Delivered'  },
  { value: 3,  suffix: '+', label: 'Years in Ahmedabad'  },
  { value: 8,  suffix: '',  label: 'Services Offered'    },
];

function CountUp({ target, suffix, delay }: { target: number; suffix: string; delay: number }) {
  const mv = useMotionValue(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      const controls = animate(mv, target, {
        duration: 1.5,
        ease: 'easeOut',
        onUpdate: (v) => {
          if (ref.current) ref.current.textContent = Math.round(v) + suffix;
        },
      });
      return controls.stop;
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [mv, target, suffix, delay]);

  return <span ref={ref}>0{suffix}</span>;
}

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Focus trap — focus X on open
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => closeButtonRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Deterministic constellation dots (avoids hydration mismatch)
  const dots = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${(i * 37 + 11) % 97}%`,
      top:  `${(i * 53 + 7)  % 90}%`,
      duration: 2 + (i % 5) * 0.4,
    })),
  []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="welcome-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Centering shell — NOT the dialog, so backdrop click still fires */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4">
            <motion.div
              key="welcome-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Welcome to OM Marketing Solutions"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[560px] overflow-hidden max-sm:rounded-2xl"
              style={{
                background: '#0F172A',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
              }}
            >
              {/* ── X button ─────────────────────────────────────── */}
              <motion.button
                ref={closeButtonRef}
                onClick={onClose}
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-label="Close welcome modal"
              >
                <X className="h-4 w-4" />
              </motion.button>

              {/* ══ SECTION 1 — HEADER ══════════════════════════════ */}
              <div className="relative overflow-hidden px-6 pb-5 pt-6">
                {/* Constellation dots */}
                {dots.map((dot) => (
                  <motion.div
                    key={dot.id}
                    className="pointer-events-none absolute rounded-full bg-white"
                    style={{ left: dot.left, top: dot.top, width: 2, height: 2 }}
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{
                      duration: dot.duration,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                  />
                ))}

                {/* Ambient glow blobs */}
                <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

                {/* Logo row */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="relative flex items-center gap-3"
                >
                  <Image
                    src="/logomkc.jpeg"
                    alt="OM Marketing Solutions logo"
                    width={40}
                    height={40}
                    className="rounded-[10px] object-cover"
                  />
                  <div>
                    <p className="text-[15px] font-medium text-white">OM Marketing Solutions</p>
                    <p className="flex items-center gap-1 text-[12px] text-gray-400">
                      <MapPin className="h-3 w-3 flex-shrink-0" />
                      Ahmedabad, Gujarat
                    </p>
                  </div>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="relative mt-4 text-[26px] font-semibold leading-[1.25] text-white max-sm:text-[20px]"
                >
                  Grow Your Business in Ahmedabad
                  <br />
                  <span style={{ color: '#818CF8' }}>with Digital Solutions</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="relative mt-2 text-[13px] text-gray-400"
                >
                  Websites · Apps · AI Automations · Digital Marketing
                </motion.p>

                {/* Accepting clients badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  className="relative mt-3 inline-flex items-center gap-2"
                >
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  <span className="text-[12px] text-gray-300">Now accepting new clients</span>
                </motion.div>
              </div>

              {/* ══ SECTION 2 — STATS ═══════════════════════════════ */}
              <div
                className="flex"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="flex flex-1 flex-col items-center py-4 max-sm:py-3"
                    style={i > 0 ? { borderLeft: '1px solid rgba(255,255,255,0.06)' } : {}}
                  >
                    <span className="text-[24px] font-bold text-white">
                      <CountUp target={stat.value} suffix={stat.suffix} delay={0.5 + i * 0.1} />
                    </span>
                    <span className="mt-0.5 text-[11px] text-gray-400">{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* ══ SECTION 3 — BODY ════════════════════════════════ */}
              <div className="px-6 pb-6 pt-5">
                {/* Services grid */}
                <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-2">
                  {SERVICES.map((service, i) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
                      className="flex flex-col items-center gap-1.5 rounded-[8px] px-[10px] py-[8px] text-center"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: service.featured
                          ? '0.5px solid rgba(99,102,241,0.4)'
                          : '0.5px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <service.icon className="h-4 w-4 text-gray-300" />
                      <span className="text-[11px] leading-tight text-gray-300">{service.title}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Trust line */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.85 }}
                  className="mt-4 text-center text-[12px] italic text-gray-500"
                >
                  Trusted by retailers, manufacturers &amp; service businesses across Gujarat
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="mt-4 flex gap-3 max-sm:flex-col"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1"
                  >
                    <Link
                      href="/contact-us"
                      onClick={onClose}
                      className="flex w-full items-center justify-center rounded-[10px] px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
                      style={{ background: '#6366F1' }}
                    >
                      Get a Free Quote
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1"
                  >
                    <Link
                      href="/#services"
                      onClick={onClose}
                      className="flex w-full items-center justify-center rounded-[10px] border border-white/20 px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-white/5"
                    >
                      Explore Services
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Dismiss line */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                  className="mt-3 text-center text-[12px] text-gray-600"
                >
                  Already know us?&nbsp;—&nbsp;
                  <button
                    onClick={onClose}
                    className="text-gray-500 underline-offset-2 hover:text-gray-400 hover:underline"
                  >
                    Skip for now
                  </button>
                </motion.p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
