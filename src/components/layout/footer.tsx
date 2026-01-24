'use client';
import { APP_NAME, NAV_LINKS, SERVICES } from '@/lib/constants';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
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
            <Link
              href="https://www.instagram.com/ommarketing_scales"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hetkumar-sanjaykumar-patel-54730933b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link
              href="https://www.facebook.com/people/Hetkumar-Sanjaykumar-Patel/pfbid02ovTPGF4fPBSGtwoivdEypqLP6jfMtU91PAo7G2EgkCnKNBw7BxbNmyHFKEgMqkTSl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
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
