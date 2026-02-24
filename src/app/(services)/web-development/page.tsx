import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
  'Conversion-focused design built to turn visitors into inquiries and sales.',
  'Mobile-first design optimized for buyer behavior.',
  'Secure payment & checkout systems built for seamless transactions.',
  'High-speed performance to reduce bounce rate and increase trust.',
  'SEO-structured architecture built to rank on Google.',
  'Clear call-to-action strategy to maximize leads and revenue.',
];

export default function WebDevelopmentPage() {
  return (
    <>
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
              Website & E-commerce Development
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Stop losing customers to competitors with better websites.
              We build conversion-focused websites and online stores designed to generate leads, increase sales, and grow your revenue.
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
          <div className="flex items-center justify-center relative">
            {/* Glow effect - Blue/Cyan */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-3xl animate-image-glow" />

            <div className="relative animate-fade-in-up">
              <Image
                src="/Web-Development.jpg"
                alt="Web Development"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}













