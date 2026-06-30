import type { Metadata } from 'next';
import { AboutPageClient } from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us — OM Marketing Solutions, Ahmedabad',
  description:
    'Meet the team behind OM Marketing Solutions — a digital agency in Ahmedabad helping Indian businesses grow with web development, mobile apps, AI automation, and immersive 3D web experiences.',
};

export default function AboutUsPage() {
  return <AboutPageClient />;
}
