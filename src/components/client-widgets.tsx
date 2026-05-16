'use client';

import dynamic from 'next/dynamic';

const WhatsAppFAB = dynamic(
  () => import('@/components/whatsapp-fab').then((m) => ({ default: m.WhatsAppFAB })),
  { ssr: false }
);

const AIChatbot = dynamic(
  () => import('@/components/ai-chatbot').then((m) => ({ default: m.AIChatbot })),
  { ssr: false }
);

export function ClientWidgets() {
  return (
    <>
      <WhatsAppFAB />
      <AIChatbot />
    </>
  );
}
