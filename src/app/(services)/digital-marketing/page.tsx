import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
  'Search Engine Optimization (SEO) to rank higher on Google.',
  'Pay-Per-Click (PPC) advertising on Google and social media.',
  'Social Media Management to build your brand and engage your audience.',
  'Content marketing to attract and convert customers.',
  'Email marketing campaigns to nurture leads.',
  'Detailed analytics and performance reporting.',
];

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
              Digital Marketing
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Grow your business with data-driven digital marketing strategies. We help you reach your target audience, generate qualified leads, and increase your online sales through a mix of SEO, PPC, and social media marketing.
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
            {/* Glow effect - Orange/Red */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-20 blur-3xl animate-image-glow" />

            <div className="relative animate-fade-in-up">
              <Image
                src="/digimarketing.jpg"
                alt="Digital Marketing"
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
