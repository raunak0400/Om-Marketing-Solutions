import type { Metadata } from 'next';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ServicePageLayout } from '@/components/service-page-layout';
import { VideoDemos } from './video-demos';

export const metadata: Metadata = {
  title: 'AI Automation Solutions in Ahmedabad',
  description:
    'AI chatbots, WhatsApp automation, and voice agents in Ahmedabad — 24/7 lead qualification and customer support. Multi-language Hindi, Gujarati & English support.',
};

const aiImage = PlaceHolderImages.find((img) => img.id === 'service-integrations');

const features = [
  {
    icon: '🤖',
    title: 'AI Chatbot',
    description:
      '24/7 customer support bot that answers questions and captures leads automatically.',
  },
  {
    icon: '💬',
    title: 'WhatsApp Automation',
    description:
      'Automated follow-ups, order updates, and lead nurturing on WhatsApp.',
  },
  {
    icon: '📧',
    title: 'Email Sequences',
    description:
      'Scheduled email campaigns that run without any manual effort.',
  },
  {
    icon: '🎯',
    title: 'Lead Qualification',
    description:
      'AI filters serious buyers from time-wasters automatically — 24/7.',
  },
  {
    icon: '📞',
    title: 'AI Voice Agent',
    description:
      'Handles inbound calls, books appointments, and answers FAQs by voice.',
  },
  {
    icon: '📊',
    title: 'Automation Dashboard',
    description:
      'Track every conversation, lead, and conversion in real time from one place.',
  },
];

const stats = [
  { value: '24/7 Active', label: 'No Human Intervention Needed' },
  { value: '3 AI Products', label: 'Live-Demo Available' },
  { value: 'Multi-Language', label: 'Hindi, Gujarati & English' },
];

const whyPoints = [
  {
    title: 'Multi-Language Support',
    description:
      'Bots handle Hindi, Gujarati, and English conversations — critical for reaching Indian customers in their preferred language.',
  },
  {
    title: 'All-Channel Coverage',
    description:
      'WhatsApp, website chat, Instagram DMs, and email — we cover every channel your customers use.',
  },
  {
    title: 'Human Escalation Built-In',
    description:
      "When the bot can't help, it automatically hands off to your team via WhatsApp or email — no frustrated customers.",
  },
];

const faqs = [
  {
    question: 'Do I need technical knowledge to use the automation?',
    answer:
      'No. We build and set up everything from scratch. You get a simple dashboard to monitor performance — no coding or technical skills required.',
  },
  {
    question: 'Which platforms do the bots work on?',
    answer:
      'WhatsApp, website chat, Instagram DMs, and email. We can cover all the channels your customers use.',
  },
  {
    question: 'Will the chatbot understand Hindi or Gujarati?',
    answer:
      'Yes, we can configure the bot to handle multiple languages including Hindi and Gujarati alongside English.',
  },
  {
    question: "What happens if the bot can't answer a question?",
    answer:
      'It automatically escalates to a human agent via WhatsApp or email — so no customer inquiry falls through the cracks.',
  },
  {
    question: 'How quickly can automation be set up?',
    answer:
      'A basic chatbot and WhatsApp automation can be live in 1–2 weeks. More complex multi-channel setups take 3–4 weeks.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function AIAutomationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageLayout
        title="AI Automation Solutions"
        subtitle="Still replying to every message manually? We build AI-powered automation systems that handle customer support, qualify leads, and automate repetitive tasks — 24/7 without increasing headcount."
        heroImage={aiImage?.imageUrl ?? '/Web-Development.jpg'}
        heroImageAlt="AI Automations"
        glowGradient="from-violet-500 to-purple-600"
        features={features}
        stats={stats}
        whyPoints={whyPoints}
        faqs={faqs}
        extraSection={<VideoDemos />}
      />
    </>
  );
}
