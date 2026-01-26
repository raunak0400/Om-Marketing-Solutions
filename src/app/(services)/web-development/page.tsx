import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
  'Custom website design that reflects your brand.',
  'Mobile-friendly design for all screen sizes.',
  'E-commerce stores with secure payment integration.',
  'Simple content management so you can make updates easily.',
  'Basic SEO to help customers find you on Google.',
  'Fast-loading and reliable performance.',
];

const webDevImage = PlaceHolderImages.find(
  (img) => img.id === 'service-web-dev'
);

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
              Get a professional, modern website that works on all devices. We build affordable websites and online stores that help you attract customers and sell your products online.
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
          {webDevImage && (
            <div className="flex items-center justify-center relative">
              {/* Glow effect - Blue/Cyan */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-3xl animate-image-glow" />

              <div className="relative animate-fade-in-up">
                <Image
                  src={webDevImage.imageUrl}
                  alt="Web Development"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  data-ai-hint={webDevImage.imageHint}
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
