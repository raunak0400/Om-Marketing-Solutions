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
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M16 4L4 28H8.5L10.5 23H21.5L23.5 28H28L16 4ZM11.66 20L16 9.33L20.34 20H11.66Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-xl font-semibold tracking-tighter">{APP_NAME}</span>
    </Link>
  );
}
