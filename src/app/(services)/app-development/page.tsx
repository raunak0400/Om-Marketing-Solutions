import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
    'Custom web applications tailored to your business needs.',
    'Scalable architecture that grows with your business.',
    'Modern tech stack with React, Node.js, and cloud infrastructure.',
    'API development and third-party integrations.',
    'User authentication and authorization systems.',
    'Real-time features and data synchronization.',
];

const appDevImage = PlaceHolderImages.find(
    (img) => img.id === 'service-web-dev'
);

export default function AppDevelopmentPage() {
    return (
        <>
            <section className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="animate-fade-in">
                        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                            Custom Application Development
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                            Build powerful web applications that streamline your business operations and provide exceptional user experiences. We create custom solutions designed specifically for your unique requirements.
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
                    {appDevImage && (
                        <div className="flex items-center justify-center relative">
                            {/* Glow effect - Purple/Indigo */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-20 blur-3xl animate-image-glow" />

                            <div className="relative animate-fade-in-up">
                                <Image
                                    src={appDevImage.imageUrl}
                                    alt="App Development"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                                    data-ai-hint={appDevImage.imageHint}
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
