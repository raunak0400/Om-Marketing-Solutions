import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
    'Fully customized business systems built around your exact workflow.',
    'Scalable architecture designed to grow with your business.',
    'Automation of repetitive tasks to save time and reduce human errors.',
    'Secure login, role-based access, and data protection systems.',
    'Seamless API integrations with payment gateways, CRMs, and third-party tools.',
    'Real-time dashboards and reporting for smarter business decisions.',
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
                            Still managing your business on Excel, WhatsApp, or outdated software?
                            We build custom Applications that automate operations, reduce manual errors, and save you hours every week.
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
