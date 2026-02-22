'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Logo } from '../logo';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Tracks which nav-group labels are expanded in the mobile drawer
  const [mobileOpenSections, setMobileOpenSections] = useState<Set<string>>(new Set());

  const toggleMobileSection = (label: string) => {
    setMobileOpenSections((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-20 items-center">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* ── Desktop nav (unchanged) ───────────────────────── */}
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center space-x-4 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Link
                    href={link.href}
                    className="flex items-center text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.children.map((child) => (
                    <DropdownMenuItem key={child.label} asChild>
                      <Link href={child.href}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="ml-auto flex items-center justify-end space-x-4">
          <Button asChild className="hidden sm:inline-flex" variant="outline">
            <Link href="/contact-us">Get Started</Link>
          </Button>

          {/* ── Mobile drawer ─────────────────────────────────── */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <Logo />
              </SheetHeader>
              <div className="grid gap-2 py-4">
                {NAV_LINKS.map((link) => {
                  const isOpen = mobileOpenSections.has(link.label);
                  return (
                    <div key={link.label}>
                      {link.children ? (
                        /* ── Collapsible accordion row (mobile only) ── */
                        <>
                          <button
                            onClick={() => toggleMobileSection(link.label)}
                            className="flex w-full items-center justify-between py-1 text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                          >
                            <span>{link.label}</span>
                            <ChevronDown
                              className={cn(
                                'h-5 w-5 shrink-0 transition-transform duration-200 text-foreground/60',
                                isOpen && 'rotate-180'
                              )}
                            />
                          </button>
                          {/* Sub-links — shown only when expanded */}
                          {isOpen && (
                            <div className="mt-1 grid gap-1 border-l-2 border-primary/30 pl-4">
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="py-1 text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        /* ── Regular link row ─────────────────────── */
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
