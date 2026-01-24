import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';

const features = [
    'User research and persona development.',
    'Wireframing and interactive prototyping.',
    'Visual design with modern aesthetics.',
    'Responsive design for all devices.',
    'Accessibility standards compliance (WCAG).',
    'Usability testing and iterative improvements.',
];

const uiuxImage = PlaceHolderImages.find(
    (img) => img.id === 'service-digital'
);

export default function UIUXDesignPage() {
    return (
        <>
            <section>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                            UI/UX Design Services
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                            Create exceptional user experiences that delight your customers and drive conversions. Our UI/UX design services combine aesthetics with functionality to build interfaces that are both beautiful and intuitive.
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
                    {uiuxImage && (
                        <div className="flex items-center justify-center">
                            <Image
                                src={uiuxImage.imageUrl}
                                alt="UI/UX Design"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                                data-ai-hint="ui ux design"
                            />
                        </div>
                    )}
                </div>
            </section>
            <ContactSection />
        </>
    );
}
