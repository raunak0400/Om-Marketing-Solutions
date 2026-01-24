import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Check, Target, Users, Zap, Code, Lightbulb, Rocket, Heart, Award, TrendingUp, Clock, Shield } from 'lucide-react';
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
                            Founded by Het Kumar Patel, we're a passionate team dedicated to helping
                            traditional Indian businesses thrive in the digital age through practical
                            technology solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Our Story
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                OM Marketing Solutions was born from a simple observation: many traditional
                                Indian businesses struggle to adapt to the digital world, not because they
                                lack potential, but because technology often feels overwhelming and expensive.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                Founded by Het Kumar Patel with a vision to bridge this gap, we started
                                with a mission—to make digital transformation accessible, affordable, and
                                result-oriented for businesses of all sizes. We believe that every business
                                deserves the tools to succeed in today's competitive marketplace.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                Today, we're proud to serve businesses across Ahmedabad and Gujarat,
                                helping them modernize operations, reach more customers, and grow sustainably.
                            </p>
                        </div>
                        <div className="relative h-[400px] md:h-[500px]">
                            <Image
                                src="/randi.jpeg"
                                alt="Our Story"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-card py-16 md:py-24">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Meet Our Founder
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                            Led by visionary leadership and powered by technical excellence
                        </p>
                    </div>

                    <div className="mx-auto max-w-3xl">
                        <Card className="overflow-hidden btn-glow-hover">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                                <div className="md:col-span-1 flex items-center justify-center">
                                    <div className="relative h-48 w-48 rounded-full overflow-hidden">
                                        <Image
                                            src="/randi.jpeg"
                                            alt="Het Kumar Patel"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-2xl">Het Kumar Sanjaykumar Patel</CardTitle>
                                        <p className="text-primary font-semibold">Founder & Lead Developer</p>
                                    </CardHeader>
                                    <CardContent className="p-0 mt-4">
                                        <p className="text-muted-foreground mb-4">
                                            Het Kumar Patel is a passionate technologist and entrepreneur dedicated to
                                            empowering Indian businesses through digital transformation. With expertise
                                            in modern web technologies, AI, and business automation, he founded OM Marketing
                                            Solutions to make enterprise-grade technology accessible to businesses of all sizes.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <Link
                                                href="https://www.linkedin.com/in/hetkumar-sanjaykumar-patel-54730933b"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="outline" size="sm">
                                                    LinkedIn Profile
                                                </Button>
                                            </Link>
                                            <Link
                                                href="https://www.instagram.com/ommarketing_scales"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="outline" size="sm">
                                                    Instagram
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Award className="h-8 w-8" />
                            </div>
                            <div className="text-3xl font-bold">50+</div>
                            <div className="mt-2 text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Users className="h-8 w-8" />
                            </div>
                            <div className="text-3xl font-bold">100%</div>
                            <div className="mt-2 text-muted-foreground">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Clock className="h-8 w-8" />
                            </div>
                            <div className="text-3xl font-bold">24/7</div>
                            <div className="mt-2 text-muted-foreground">Support Available</div>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <TrendingUp className="h-8 w-8" />
                            </div>
                            <div className="text-3xl font-bold">2+</div>
                            <div className="mt-2 text-muted-foreground">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Build */}
            <section className="bg-card py-16 md:py-24">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            How We Build
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                            Our development process is collaborative, transparent, and focused on delivering
                            real value to your business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Lightbulb className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">1. Discovery</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We listen to your challenges, understand your business goals, and
                                    identify the technology solutions that will create the most impact.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Target className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">2. Planning</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We create a clear roadmap with transparent pricing, timelines, and
                                    deliverables. No surprises, just a practical plan.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Code className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">3. Development</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Using modern technologies like Next.js, React, Node.js, and AI, we
                                    build robust, scalable solutions with clean code and best practices.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Rocket className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">4. Launch & Support</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We deploy your solution with proper testing, provide training, and
                                    offer ongoing support to ensure your success.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Our Technology Stack
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                            We use modern, proven technologies to build scalable and maintainable solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <CardTitle className="text-xl">Frontend Development</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Next.js 14 & React 18
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        TypeScript for type safety
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Tailwind CSS for styling
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        shadcn/ui components
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <CardTitle className="text-xl">Backend & Database</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Node.js & Express
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        MongoDB & PostgreSQL
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Prisma ORM
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        RESTful & GraphQL APIs
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <CardTitle className="text-xl">AI & Automation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        OpenAI GPT Integration
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        WhatsApp Business API
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Zapier & Make.com
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Custom AI Chatbots
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <CardTitle className="text-xl">Cloud & DevOps</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Vercel & AWS Hosting
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Docker Containers
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        CI/CD Pipelines
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Git Version Control
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <CardTitle className="text-xl">Mobile Development</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        React Native
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Flutter
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        iOS & Android Native
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Progressive Web Apps
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="btn-glow-hover">
                            <CardHeader>
                                <CardTitle className="text-xl">Marketing & Analytics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Google Analytics 4
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Meta Ads Manager
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        SEO Optimization
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        Email Marketing Tools
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-card py-16 md:py-24">
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
                                    in the modern marketplace. We measure our success by the success of
                                    our clients.
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
                                    We envision a future where every business, regardless of size, can
                                    leverage technology for growth.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Our Core Values
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Heart className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Integrity</h3>
                            <p className="mt-2 text-muted-foreground">
                                Honest communication, transparent pricing, and ethical practices
                                are the foundation of our long-term client relationships.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div className="relative h-[400px] md:h-[500px]">
                            <Image
                                src="/randi.jpeg"
                                alt="Why Choose OM Marketing Solutions"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Why Choose Us?
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                We're not just another tech company. We're your partner in digital
                                transformation, with a deep understanding of the challenges faced by
                                Indian businesses.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>
                                        <strong>Local Expertise:</strong> Based in Ahmedabad, Gujarat,
                                        we understand the unique challenges of Indian businesses and
                                        deliver solutions that work in your market.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>
                                        <strong>Proven Results:</strong> Our clients see measurable improvements
                                        in efficiency, sales, and customer satisfaction. We focus on ROI.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>
                                        <strong>Modern Technology:</strong> We use cutting-edge tools like
                                        Next.js, React, AI, and cloud infrastructure to build future-proof solutions.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>
                                        <strong>Dedicated Support:</strong> We're with you every step of the way,
                                        from planning to implementation and beyond. Your success is our priority.
                                    </span>
                                </li>
                            </ul>
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
                        Get in touch with Het Kumar Patel and the OM Marketing team today.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button size="lg" asChild className="btn-glow-hover">
                            <Link href="/contact-us">Get Started Today</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="btn-glow-hover">
                            <Link href="/portfolio">View Our Work</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
