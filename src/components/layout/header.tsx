'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useReducedMotion } from 'framer-motion';
import { ChevronDown, Menu, MessageCircle, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Logo } from '../logo';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenSections, setMobileOpenSections] = useState<Set<string>>(new Set());
  const [scrolled, setScrolled] = useState(false);
  const shouldReduce = useReducedMotion();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80);
  });

  const toggleMobileSection = (label: string) => {
    setMobileOpenSections((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href.replace('/#', '/'));
  };

  return (
    <motion.header
      initial={shouldReduce ? false : { y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'border-border/60 bg-background/90 backdrop-blur-md'
          : 'border-transparent bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40'
      )}
    >
      <div className="container relative flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop nav */}
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center space-x-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      'flex items-center gap-1 transition-colors hover:text-foreground',
                      isActive(link.href) ? 'text-primary font-semibold' : 'text-foreground/75'
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.children.map((child) => (
                    <DropdownMenuItem key={child.label} asChild>
                      <Link
                        href={child.href}
                        className={cn(pathname === child.href && 'text-primary font-medium')}
                      >
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'relative transition-colors hover:text-foreground',
                  isActive(link.href) ? 'text-primary font-semibold' : 'text-foreground/75'
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-primary"
                  />
                )}
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-3">
          {/* WhatsApp icon — visible on mobile too */}
          <Link
            href="https://wa.me/919825247312"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" />
          </Link>

          <Button asChild className="hidden sm:inline-flex" variant="outline" size="sm">
            <Link href="/contact-us">Get Started</Link>
          </Button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-foreground/80 transition-colors hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="container grid gap-1 py-4">
              {NAV_LINKS.map((link) => {
                const isOpen = mobileOpenSections.has(link.label);
                return (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() => toggleMobileSection(link.label)}
                          className="flex w-full items-center justify-between py-2 text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform duration-200 text-foreground/60',
                              isOpen && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="grid gap-1 border-l-2 border-primary/30 pl-4 pb-2">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                      'py-1 text-sm transition-colors hover:text-foreground',
                                      pathname === child.href
                                        ? 'text-primary font-medium'
                                        : 'text-foreground/70'
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'block py-2 text-base font-medium transition-colors hover:text-foreground',
                          isActive(link.href) ? 'text-primary' : 'text-foreground/80'
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
              <div className="mt-2 pt-2 border-t border-border/40">
                <Button asChild className="w-full" size="sm">
                  <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
