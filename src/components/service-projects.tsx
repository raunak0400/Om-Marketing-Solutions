import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

/**
 * Renders a "Featured Work" grid of real portfolio projects (by slug) for a
 * specific service page. Each card links to its full case study.
 */
export function ServiceProjects({
  heading = 'Featured Work',
  subheading,
  slugs,
}: {
  heading?: string;
  subheading?: string;
  slugs: string[];
}) {
  const items = slugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  if (items.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{heading}</h2>
          {subheading && (
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subheading}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                  {p.category}
                </span>
              </div>

              <div className="flex flex-grow flex-col p-5">
                <h3 className="font-semibold leading-snug">{p.title}</h3>
                <p className="mt-1.5 flex-grow text-sm text-muted-foreground line-clamp-2">
                  {p.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.techStack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  View Case Study
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
