import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const features = [
  'Custom UI/UX Design that is both beautiful and functional.',
  'Responsive, mobile-first development for a seamless experience on all devices.',
  'Robust e-commerce solutions to sell your products online.',
  'Powerful Content Management Systems (CMS) for easy content updates.',
  'SEO optimization to improve your search engine rankings.',
  'High-performance websites with fast loading speeds.',
];

const webDevImage = PlaceHolderImages.find(
  (img) => img.id === 'service-web-dev'
);

export default function WebDevelopmentPage() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Custom AI Development
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We build high-performance websites that are not just visually
            stunning but also optimized for conversion and growth. From
            corporate sites to complex e-commerce platforms, we deliver digital
            excellence.
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
        {webDevImage && (
          <div className="flex items-center justify-center">
            <Image
              src={webDevImage.imageUrl}
              alt="Web Development"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint={webDevImage.imageHint}
            />
          </div>
        )}
      </div>
    </section>
  );
}
