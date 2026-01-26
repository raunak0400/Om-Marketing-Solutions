import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
    'Native iOS and Android app development.',
    'Cross-platform solutions using React Native and Flutter.',
    'Intuitive and responsive mobile UI/UX design.',
    'Push notifications and real-time updates.',
    'Offline functionality and data synchronization.',
    'App Store and Google Play deployment support.',
];

export default function MobileDevelopmentPage() {
    return (
        <>
            <section className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="animate-fade-in">
                        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                            Mobile App Development
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                            Reach your customers on the go with beautifully designed mobile applications. We build native and cross-platform mobile apps for iOS and Android that engage users and drive business growth.
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
                        {/* Glow effect - Pink/Purple */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur-3xl animate-image-glow" />

                        <div className="relative animate-fade-in-up">
                            <Image
                                src="/mobiledev.jpg"
                                alt="Mobile Development"
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
