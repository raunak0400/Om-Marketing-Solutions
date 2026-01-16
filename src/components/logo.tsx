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
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M416 96.0001C433.673 96.0001 448 110.327 448 128.001V416.001C448 433.674 433.673 448.001 416 448.001H128C110.327 448.001 96 433.674 96 416.001V320.001C96 302.327 110.327 288.001 128 288.001H320V128.001C320 110.327 334.327 96.0001 352 96.0001H416ZM608 928.001C590.327 928.001 576 913.674 576 896.001V608.001C576 590.327 590.327 576.001 608 576.001H896C913.673 576.001 928 590.327 928 608.001V704.001C928 721.674 913.673 736.001 896 736.001H704V896.001C704 913.674 689.673 928.001 672 928.001H608Z"
          fill="currentColor"
        />
        <path
          d="M96 704.001C96 686.327 110.327 672.001 128 672.001H416C433.673 672.001 448 686.327 448 704.001V896.001C448 913.674 433.673 928.001 416 928.001H128C110.327 928.001 96 913.674 96 896.001V704.001ZM576 128.001C576 110.327 590.327 96.0001 608 96.0001H896C913.673 96.0001 928 110.327 928 128.001V416.001C928 433.674 913.673 448.001 896 448.001H608C590.327 448.001 576 433.674 576 416.001V128.001Z"
          fill="currentColor"
        />
      </svg>

      <span className="text-xl font-semibold tracking-tighter">
        Neno Technology
      </span>
    </Link>
  );
}
