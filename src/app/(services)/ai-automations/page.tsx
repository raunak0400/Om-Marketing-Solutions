import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
    '24/7 AI-powered customer support chatbots.',
    'WhatsApp, email, and SMS automation.',
    'Intelligent lead qualification and routing.',
    'Automated data entry and processing.',
    'Natural language processing for better engagement.',
    'Integration with CRM and business tools.',
];

const aiImage = PlaceHolderImages.find(
    (img) => img.id === 'service-integrations'
);

export default function AIAutomationsPage() {
    return (
        <>
            <section className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="animate-fade-in">
                        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                            AI Automation Solutions
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                            Transform your business with intelligent automation powered by AI. Streamline operations, enhance customer engagement, and boost productivity with our cutting-edge automation solutions.
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
                    {aiImage && (
                        <div className="flex items-center justify-center relative">
                            {/* Glow effect - Violet/Purple */}
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 opacity-20 blur-3xl animate-image-glow" />

                            <div className="relative animate-fade-in-up">
                                <Image
                                    src={aiImage.imageUrl}
                                    alt="AI Automations"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                                    data-ai-hint="ai automation"
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
