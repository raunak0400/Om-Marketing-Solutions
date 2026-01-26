import { APP_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-foreground transition-colors hover:text-primary',
        className
      )}
    >
      <Image
        src="/logomkc.jpeg"
        alt="OM Marketing Solutions Logo"
        width={40}
        height={40}
        className="rounded-md"
      />

      <span className="text-xl font-semibold tracking-tighter">
        OM Marketing Solutions
      </span>
    </Link>
  );
}
