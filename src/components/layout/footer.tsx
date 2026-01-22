'use client';
import { APP_NAME, NAV_LINKS, SERVICES } from '@/lib/constants';
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../logo';

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card" id="footer">
      <div className="container grid grid-cols-1 gap-12 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 text-muted-foreground">
            Empowering Indian businesses with practical digital solutions for growth and success.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Solutions</h4>
          <ul className="space-y-2">
            {SERVICES.map((service) => (
              <li key={service.title}>
                <Link
                  href={service.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Company</h4>
          <ul className="space-y-2">
            {NAV_LINKS.filter(
              (l) => !l.children && !['Solutions', 'Services'].includes(l.label)
            ).map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
