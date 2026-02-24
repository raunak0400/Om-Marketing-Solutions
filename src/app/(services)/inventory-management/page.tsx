import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
  'Real-time stock tracking across multiple warehouses or locations.',
  'Automated low-stock alerts to prevent lost sales.',
  'Barcode & QR-based tracking for faster and accurate inventory updates.',
  'Integration with billing, accounting, and e-commerce platforms.',
  'Live dashboards with detailed reports for smarter purchasing decisions.',
  'Reduced manual errors, shrinkage, and operational inefficiencies.',
];

export default function InventoryManagementPage() {
  return (
    <>
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
              Inventory Management Systems (IMS)
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Still managing stock on Excel or manual registers?
              We build custom inventory systems that eliminate stock errors, prevent losses, and give you real-time control over your business.
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
            {/* Glow effect - Green/Teal */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 opacity-20 blur-3xl animate-image-glow" />

            <div className="relative animate-fade-in-up">
              <Image
                src="/inventorymgmt.jpg"
                alt="Inventory Management System"
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
