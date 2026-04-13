import { ServicePageLayout } from '@/components/service-page-layout';

const features = [
  {
    icon: '🎯',
    title: 'Google Ads Management',
    description:
      'Search, display, and shopping campaigns optimised for maximum ROI.',
  },
  {
    icon: '📘',
    title: 'Meta Ads (Facebook/Instagram)',
    description:
      'Targeted campaigns to reach your ideal customers where they spend time.',
  },
  {
    icon: '🔄',
    title: 'Retargeting Campaigns',
    description:
      'Re-engage visitors who didn\'t convert the first time and bring them back.',
  },
  {
    icon: '📊',
    title: 'Weekly Performance Reports',
    description:
      'Clear reports showing spend, leads generated, and cost-per-acquisition.',
  },
  {
    icon: '🧪',
    title: 'A/B Testing',
    description:
      'Continuous testing of creatives and copy to reduce your cost per lead.',
  },
  {
    icon: '📍',
    title: 'Local & Regional Targeting',
    description:
      'Hyper-targeted campaigns for Ahmedabad, Gujarat, or all of India.',
  },
];

const stats = [
  { value: '₹15K+', label: 'Minimum Monthly Ad Budget' },
  { value: '7–14 Days', label: 'To First Leads' },
  { value: '100%', label: 'Account Transparency' },
];

const whyPoints = [
  {
    title: 'You Own Your Ad Accounts',
    description:
      'No lock-in, no black boxes. You own your Google and Meta ad accounts — we manage them on your behalf with full transparency.',
  },
  {
    title: 'Proven Local Results',
    description:
      'Strong track record with Ahmedabad businesses across real estate, education, manufacturing, and retail.',
  },
  {
    title: 'Continuous Optimisation',
    description:
      'Weekly adjustments based on real performance data — not set-and-forget campaigns that drain budget without results.',
  },
];

const faqs = [
  {
    question: 'What is the minimum ad budget you recommend?',
    answer:
      'We recommend a minimum of ₹15,000/month in ad spend for meaningful results. Our management fee is separate from the ad budget.',
  },
  {
    question: 'How soon will I see results?',
    answer:
      'Most campaigns start generating leads within the first 7–14 days. Optimal performance is typically reached after 30–60 days of data-driven optimisation.',
  },
  {
    question: 'Do you manage both Google and Meta ads?',
    answer:
      'Yes, we manage both platforms and recommend the best mix based on your business type, target audience, and budget.',
  },
  {
    question: 'Will I have access to my ad accounts?',
    answer:
      'Yes, you own your ad accounts. We manage them on your behalf with full access and transparency — you can see every rupee spent.',
  },
  {
    question: 'What kind of businesses do you get the best results for?',
    answer:
      'We have strong results with local service businesses, real estate, education, manufacturing, and retail. Contact us to discuss your specific industry.',
  },
];

export default function PerformanceMarketingPage() {
  return (
    <ServicePageLayout
      title="Performance Marketing"
      subtitle="Spending on ads but not seeing real profit? We run data-driven performance campaigns focused on one thing — measurable ROI and consistent revenue growth for your business."
      heroImage="/performance.jpg"
      heroImageAlt="Performance Marketing"
      glowGradient="from-red-500 to-orange-500"
      features={features}
      stats={stats}
      whyPoints={whyPoints}
      faqs={faqs}
    />
  );
}
