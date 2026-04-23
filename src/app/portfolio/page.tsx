import type { Metadata } from 'next';
import { PortfolioClient } from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portfolio — Our Work | OM Marketing Solutions',
  description:
    'Real projects delivered for real businesses across Gujarat. Explore web development, AI automation, and digital marketing work by OM Marketing Solutions, Ahmedabad.',
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
