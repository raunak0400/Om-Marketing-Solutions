import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
  'Real-time stock tracking across multiple locations.',
  'Automated low-stock alerts and reorder suggestions.',
  'Barcode scanning for quick and accurate data entry.',
  'Integration with e-commerce and accounting software.',
  'Detailed reports on stock movement and valuation.',
  'Reduce manual errors and save administrative time.',
];

const imsImage = PlaceHolderImages.find(
  (img) => img.id === 'service-automation' // reusing image
);

export default function InventoryManagementPage() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
              Inventory Management Systems (IMS)
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Take control of your stock with a powerful, custom-built Inventory Management System. Stop relying on spreadsheets and manual counts. Our IMS solutions help you automate tracking, reduce errors, and make smarter purchasing decisions.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {imsImage && (
            <div className="flex items-center justify-center">
              <Image
                src={imsImage.imageUrl}
                alt="Inventory Management System"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="inventory management"
              />
            </div>
          )}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
