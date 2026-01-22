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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-20 items-center">
        <div className="flex items-center">
          <Logo />
        </div>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center space-x-6 text-sm font-medium md:flex">
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
                      <Link href="/contact-us">{child.label}</Link>
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
              <div className="grid gap-4 py-4">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        if (!link.children) setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        'text-lg font-medium text-foreground/80 transition-colors hover:text-foreground',
                        link.children && 'pointer-events-none'
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="grid gap-2 mt-2 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href="/contact-us"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
