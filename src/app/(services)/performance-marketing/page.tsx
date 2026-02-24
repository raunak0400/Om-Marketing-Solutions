import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
    'ROI-focused ad campaigns designed to generate profitable leads and sales.',
    'Strategic Google, Meta & LinkedIn advertising for high-intent audiences.',
    'Conversion optimization to turn traffic into paying customers.',
    'Continuous A/B testing to lower cost-per-lead and improve results.',
    'Advanced tracking setup (Pixel, GA4, CRM integration).',
    'Custom performance dashboards with full transparency.',
];

export default function PerformanceMarketingPage() {
    return (
        <>
            <section className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="animate-fade-in">
                        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                            Performance Marketing
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                            Spending on ads but not seeing real profit?
                            We run data-driven performance campaigns focused on one thing — measurable ROI and consistent revenue growth.
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
                        {/* Glow effect - Red/Orange */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-20 blur-3xl animate-image-glow" />

                        <div className="relative animate-fade-in-up">
                            <Image
                                src="/performance.jpg"
                                alt="Performance Marketing"
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
