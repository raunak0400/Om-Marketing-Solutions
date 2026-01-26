import { APP_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
    <Link href="/" className="flex items-center space-x-2">
      <Image 
        src="/logomkc.jpeg" 
        alt="OM Marketing Solutions Logo" 
        width={40} 
        height={40}
        className="rounded-md"
      />
      <span className="hidden font-bold sm:inline-block">
        OM Marketing Solutions
      </span>
    </Link>
  );
}
