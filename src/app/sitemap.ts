import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.ommarketingsolutions.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-04-22');

  const routes: Array<{ path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '',                     priority: 1.0, freq: 'weekly'  },
    { path: '/web-development',     priority: 0.9, freq: 'monthly' },
    { path: '/app-development',     priority: 0.9, freq: 'monthly' },
    { path: '/mobile-development',  priority: 0.9, freq: 'monthly' },
    { path: '/ui-ux-design',        priority: 0.9, freq: 'monthly' },
    { path: '/inventory-management',priority: 0.9, freq: 'monthly' },
    { path: '/ai-automations',      priority: 0.9, freq: 'monthly' },
    { path: '/performance-marketing',priority: 0.9, freq: 'monthly'},
    { path: '/digital-marketing',   priority: 0.9, freq: 'monthly' },
    { path: '/portfolio',           priority: 0.8, freq: 'monthly' },
    { path: '/testimonials',        priority: 0.7, freq: 'monthly' },
    { path: '/about-us',            priority: 0.8, freq: 'monthly' },
    { path: '/contact-us',          priority: 0.8, freq: 'monthly' },
  ];

  return routes.map(({ path, priority, freq }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: freq,
    priority,
  }));
}
