import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/data/projects';
import { ProjectPageClient } from './ProjectPageClient';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Not Found' };

  const BASE = 'https://www.ommarketingsolutions.in';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.tagline,
    url: project.liveUrl ?? `${BASE}/portfolio/${project.slug}`,
    creator: {
      '@type': 'Organization',
      name: 'OM Marketing Solutions',
      url: BASE,
    },
    dateCreated: project.year,
  };

  return {
    title: `${project.title} | Portfolio | OM Marketing Solutions`,
    description: `${project.tagline} — Built by OM Marketing Solutions, Ahmedabad.`,
    openGraph: {
      title: `${project.title} | Portfolio | OM Marketing Solutions`,
      description: `${project.tagline} — Built by OM Marketing Solutions, Ahmedabad.`,
      images: [{ url: project.heroImage }],
      type: 'article',
    },
    other: {
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <ProjectPageClient project={project} />;
}
