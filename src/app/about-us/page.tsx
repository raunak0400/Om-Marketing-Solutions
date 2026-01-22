import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Check, Target, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-card">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            About OM Marketing Solutions
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                            Your trusted partner in digital transformation, helping traditional Indian
                            businesses modernize with practical technology solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Target className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-2xl">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    To empower traditional Indian businesses with accessible, affordable,
                                    and result-oriented digital solutions that drive real growth and success
                                    in the modern marketplace.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-2xl">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    To be the leading digital transformation partner for Indian businesses,
                                    bridging the gap between traditional commerce and modern technology.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="bg-card py-16 md:py-24">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Our Core Values
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Users className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Client-Centric</h3>
                            <p className="mt-2 text-muted-foreground">
                                Your success is our success. We prioritize understanding your unique
                                needs and delivering solutions that truly make a difference.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Check className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Quality First</h3>
                            <p className="mt-2 text-muted-foreground">
                                We never compromise on quality. Every solution we deliver meets
                                the highest standards of excellence and reliability.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Zap className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Innovation</h3>
                            <p className="mt-2 text-muted-foreground">
                                We stay ahead of technology trends to bring you cutting-edge
                                solutions that give you a competitive advantage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Why Choose Us?
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                We are not another faceless tech company. We are your dedicated partner,
                                focused on making technology accessible and profitable for your business.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>
                                        <strong>Local Expertise:</strong> We understand the unique challenges
                                        of Indian businesses and deliver solutions that work in your market.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>
                                        <strong>Proven Results:</strong> Our clients see measurable improvements
                                        in efficiency, sales, and customer satisfaction.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>
                                        <strong>Dedicated Support:</strong> We're with you every step of the way,
                                        from planning to implementation and beyond.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[400px] md:h-[500px]">
                            <Image
                                src="/randi.jpeg"
                                alt="Why Choose OM Marketing Solutions"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-card py-16 md:py-24">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                        Let's discuss how we can help you achieve your digital goals.
                    </p>
                    <div className="mt-8">
                        <Button size="lg" asChild className="btn-glow-hover">
                            <Link href="/contact-us">Get Started Today</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
