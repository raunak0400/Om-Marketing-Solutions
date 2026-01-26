import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
  '24/7 automated customer support via chatbots.',
  'Send order confirmations, shipping updates, and notifications.',
  'Run promotional campaigns and broadcast messages.',
  'Recover abandoned carts with timely reminders.',
  'Integrate with your CRM and e-commerce platform.',
  'Provide instant answers to frequently asked questions.',
];

const waImage = PlaceHolderImages.find(
  (img) => img.id === 'service-integrations'
);

export default function WhatsAppAutomationPage() {
  return (
    <>
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
              WhatsApp Automation
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Engage with your customers where they are most active. Our WhatsApp Automation solutions use AI-powered chatbots to handle customer service, send notifications, and drive sales—all automatically.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className={`flex items-start animate-slide-in-left stagger-${index + 1}`}>
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {waImage && (
            <div className="flex items-center justify-center relative">
              {/* Glow effect - Green */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-20 blur-3xl animate-image-glow" />

              <div className="relative animate-fade-in-up">
                <Image
                  src={waImage.imageUrl}
                  alt="WhatsApp Automation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  data-ai-hint="chatbot communication"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
