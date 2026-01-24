import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Mail, MapPin, Phone as PhoneIcon } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
    return (
        <section className="py-16 md:py-24 bg-card mt-16">
            <div className="container">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Ready to Get Started?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Let's discuss how we can help transform your business with our digital solutions.
                        Get in touch today for a free consultation.
                    </p>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <PhoneIcon className="h-5 w-5 text-primary" />
                                    Phone
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a
                                    href="tel:+919825247312"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +91 9825247312
                                </a>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-primary" />
                                    Email
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a
                                    href="mailto:ommarketing.weighingscale1@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                                >
                                    ommarketing.weighingscale1@gmail.com
                                </a>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    Location
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Ahmedabad, Gujarat
                                    <br />
                                    India
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-8 flex justify-center gap-4">
                        <Button size="lg" asChild className="btn-glow-hover">
                            <Link href="/contact-us">
                                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="btn-glow-hover">
                            <Link href="/portfolio">View Our Work</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
