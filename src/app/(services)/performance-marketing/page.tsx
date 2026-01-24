import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
    'ROI-focused campaigns with measurable results.',
    'Google Ads, Facebook Ads, and LinkedIn advertising.',
    'Conversion rate optimization (CRO).',
    'A/B testing and continuous improvement.',
    'Advanced analytics and performance tracking.',
    'Custom dashboards for real-time insights.',
];

const perfMarketingImage = PlaceHolderImages.find(
    (img) => img.id === 'service-digital'
);

export default function PerformanceMarketingPage() {
    return (
        <>
            <section>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                            Performance Marketing
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                            Drive measurable growth with data-driven performance marketing campaigns. We focus on maximizing your ROI through targeted advertising, continuous optimization, and detailed analytics.
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
                    {perfMarketingImage && (
                        <div className="flex items-center justify-center">
                            <Image
                                src={perfMarketingImage.imageUrl}
                                alt="Performance Marketing"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                                data-ai-hint="performance marketing"
                            />
                        </div>
                    )}
                </div>
            </section>
            <ContactSection />
        </>
    );
}
