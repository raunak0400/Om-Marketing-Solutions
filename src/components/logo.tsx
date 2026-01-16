import { APP_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-foreground transition-colors hover:text-primary',
        className
      )}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 80"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
        fill="currentColor"
      >
        <path d="M26.3,71.3c-9.9,0-18-8.1-18-18s8.1-18,18-18s18,8.1,18,18S36.2,71.3,26.3,71.3z M26.3,41.3c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S33.5,41.3,26.3,41.3z" />
        <path d="M48.4,26.5h33.9v-5H48.4V26.5z" />
        <path d="M66.3,24v14.4h-5V24H66.3z" />
        <path d="M82.3,26.5l-6.5,8.8h12.9L82.3,26.5z" />
        <path d="M51,71.3V37.3h4.5l9.2,16.2l9.2-16.2H78v34h-4.5V47.5L64.3,62.8L55.5,47.5v23.8H51z" />
      </svg>

      <span className="text-xl font-semibold tracking-tighter">
        OM Marketing Solutions
      </span>
    </Link>
  );
}
