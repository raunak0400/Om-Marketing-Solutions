import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';
import Link from 'next/link';

const TESTIMONIALS = [
    {
        name: 'Rajesh Mehta',
        title: 'CEO',
        company: 'Mehta Textiles, Surat',
        rating: 5,
        avatar: 'RM',
        avatarColor: 'from-blue-500 to-cyan-400',
        tag: 'Web Development',
        quote:
            'The new website helped us reach customers outside our city, increasing sales by 30%. Their team made the process simple and delivered great value. Highly recommend OM Marketing Solutions to any business owner.',
    },
    {
        name: 'Amit Patel',
        title: 'Director',
        company: 'Patel Manufacturing, Ahmedabad',
        rating: 5,
        avatar: 'AP',
        avatarColor: 'from-violet-500 to-purple-400',
        tag: 'Inventory Management',
        quote:
            'Automating our inventory has saved us countless hours and reduced errors significantly. The system they built is rock-solid and our staff learned it in a day. A must-have for any manufacturing business.',
    },
    {
        name: 'Priya Sharma',
        title: 'Founder',
        company: 'Sharma Handicrafts, Jaipur',
        rating: 5,
        avatar: 'PS',
        avatarColor: 'from-rose-500 to-pink-400',
        tag: 'WhatsApp Automation',
        quote:
            'The WhatsApp automation is brilliant. Our customers get instant answers and we can focus on more important tasks. Our response time went from hours to seconds. Highly recommended!',
    },
    {
        name: 'Deepak Verma',
        title: 'Managing Partner',
        company: 'Verma Real Estate, Pune',
        rating: 5,
        avatar: 'DV',
        avatarColor: 'from-emerald-500 to-teal-400',
        tag: 'Digital Marketing',
        quote:
            'Our leads tripled in three months after OM Marketing took over our digital campaigns. The team is proactive, transparent, and genuinely invested in our growth. Best investment we made this year.',
    },
    {
        name: 'Sunita Agarwal',
        title: 'Owner',
        company: 'Agarwal Sweet House, Indore',
        rating: 5,
        avatar: 'SA',
        avatarColor: 'from-amber-500 to-orange-400',
        tag: 'E-Commerce Website',
        quote:
            'During festival season our online orders went up by 200%. The website they built is fast, beautiful, and so easy to manage. Our customers love ordering from us online now.',
    },
    {
        name: 'Kiran Nair',
        title: 'Director',
        company: 'Nair Logistics, Kochi',
        rating: 5,
        avatar: 'KN',
        avatarColor: 'from-sky-500 to-blue-400',
        tag: 'App Development',
        quote:
            'The mobile app they built for our drivers and dispatchers saved us enormous coordination time. Real-time tracking and instant notifications changed how we run operations. Exceptional quality.',
    },
    {
        name: 'Mohit Joshi',
        title: 'Co-Founder',
        company: 'JoshiTech Solutions, Bangalore',
        rating: 5,
        avatar: 'MJ',
        avatarColor: 'from-indigo-500 to-blue-400',
        tag: 'Performance Marketing',
        quote:
            'Our cost-per-lead dropped by 45% in the first month. They know exactly how to target the right audience and optimise campaigns in real time. Data-driven results, every single time.',
    },
    {
        name: 'Anita Desai',
        title: 'Principal',
        company: 'Desai Academy, Vadodara',
        rating: 5,
        avatar: 'AD',
        avatarColor: 'from-fuchsia-500 to-pink-400',
        tag: 'AI Automations',
        quote:
            'Our AI chatbot now handles student enquiries 24/7 without any manual effort. Admissions became much smoother and parents love the instant responses. OM Marketing truly delivered beyond expectations.',
    },
    {
        name: 'Ramesh Kulkarni',
        title: 'Owner',
        company: 'Kulkarni Electronics, Nagpur',
        rating: 5,
        avatar: 'RK',
        avatarColor: 'from-green-500 to-emerald-400',
        tag: 'UI/UX Design',
        quote:
            "The redesign of our product catalogue website was stunning. Customers now spend twice as long browsing, and our conversion rate has gone up significantly. Professional team, on-time delivery.",
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
        </div>
    );
}

export default function TestimonialsPage() {
    return (
        <div className="container py-12 md:py-20">
            {/* ── Header ───────────────────────────────────────── */}
            <section className="mb-16 text-center">
                <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
                    Client Stories
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                    What Our{' '}
                    <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                        Clients Say
                    </span>
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Over 100+ businesses across India trust OM Marketing Solutions to drive their digital
                    growth. Here&apos;s what a few of them have to say.
                </p>

                {/* Stats strip */}
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                    {[
                        { value: '100+', label: 'Happy Clients' },
                        { value: '4.9★', label: 'Average Rating' },
                        { value: '5+', label: 'Years Experience' },
                        { value: '98%', label: 'Client Retention' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="text-3xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Testimonials Grid ────────────────────────────── */}
            <section className="columns-1 gap-6 sm:columns-2 lg:columns-3">
                {TESTIMONIALS.map((t) => (
                    <Card
                        key={t.name}
                        className="mb-6 break-inside-avoid overflow-hidden border border-border/60 bg-card/60 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                    >
                        <CardContent className="p-6">
                            {/* Quote icon */}
                            <Quote className="mb-3 h-8 w-8 text-primary/30" />

                            {/* Stars */}
                            <StarRating count={t.rating} />

                            {/* Text */}
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Tag */}
                            <Badge variant="secondary" className="mt-4 text-xs">
                                {t.tag}
                            </Badge>

                            {/* Author */}
                            <div className="mt-5 flex items-center gap-3">
                                <div
                                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarColor} text-sm font-bold text-white shadow-md`}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {t.title} · {t.company}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </section>

            {/* ── CTA ──────────────────────────────────────────── */}
            <section className="mt-20 rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
                <h2 className="text-3xl font-bold">Ready to Join Them?</h2>
                <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                    Let&apos;s build something great for your business. Book a free consultation and see the
                    difference OM Marketing Solutions can make.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/contact-us">Get a Free Consultation</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/portfolio">View Our Work</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
