import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Testimonials | OM Marketing Solutions, Ahmedabad',
  description:
    'Real 5-star Google reviews for OM Marketing Solutions — see what business owners across Ahmedabad and Gujarat say about our web development, digital marketing, and automation work.',
};

type Testimonial = {
  name: string;
  title: string;
  company?: string;
  rating: number;
  avatar: string;
  avatarColor: string;
  tag: string;
  quote: string;
  google?: boolean;
};

const TESTIMONIALS: Testimonial[] = [
    // ── Real 5-star Google reviews ──────────────────────────────
    {
        name: '48K Film',
        title: 'Client — KBC Global',
        rating: 5,
        avatar: '48',
        avatarColor: 'from-rose-500 to-pink-400',
        tag: 'Web Development',
        google: true,
        quote:
            'Worked with Het for our company website (KBC). Honestly, the best part was the response — I message and he replies within minutes. Fast, professional, and the final website looks absolutely stunning.',
    },
    {
        name: 'Eklavya Jha',
        title: 'Local Guide',
        rating: 5,
        avatar: 'EJ',
        avatarColor: 'from-blue-500 to-cyan-400',
        tag: 'Web Development',
        google: true,
        quote:
            'OM Marketing Solutions provided a very professional and smooth experience. The team was responsive, understood exactly what we needed, and delivered a website that genuinely represents our brand. Highly recommended.',
    },
    {
        name: 'Sahil Chaudhari',
        title: 'Verified Client',
        rating: 5,
        avatar: 'SC',
        avatarColor: 'from-emerald-500 to-teal-400',
        tag: 'Digital Marketing',
        google: true,
        quote:
            "Had a great experience with this team. They truly understand digital growth and deliver smart, data-driven results. You can tell they're genuinely invested in your success.",
    },
    {
        name: 'Patel Harsh',
        title: 'Verified Client',
        rating: 5,
        avatar: 'PH',
        avatarColor: 'from-amber-500 to-orange-400',
        tag: 'Web Development',
        google: true,
        quote:
            "They build the best and most stunning websites, and the service is excellent from start to finish. Couldn't have asked for a more reliable team.",
    },
    {
        name: 'Ayan Musani',
        title: 'Verified Client',
        rating: 5,
        avatar: 'AM',
        avatarColor: 'from-sky-500 to-blue-400',
        tag: 'Web Development',
        google: true,
        quote:
            'Great support straight from the founders. They stayed hands-on through the entire project and made sure every single detail was exactly right.',
    },
    {
        name: 'Harsh Patel',
        title: 'Verified Client',
        rating: 5,
        avatar: 'HP',
        avatarColor: 'from-violet-500 to-purple-400',
        tag: 'Web Development',
        google: true,
        quote:
            'Excellent service by OM Marketing — professional, prompt, and a real pleasure to work with throughout the entire project.',
    },
    {
        name: 'Anuj Bhadoriya',
        title: 'Verified Client',
        rating: 5,
        avatar: 'AB',
        avatarColor: 'from-teal-500 to-cyan-400',
        tag: 'Web Development',
        google: true,
        quote:
            'Amazing work! They turned our idea into a beautiful, high-performing website. Absolutely thrilled with how it turned out.',
    },
    {
        name: 'Rudra Patel',
        title: 'Verified Client',
        rating: 5,
        avatar: 'RP',
        avatarColor: 'from-indigo-500 to-blue-400',
        tag: 'UI/UX Design',
        google: true,
        quote:
            'Such great work — clean, modern, and delivered right on time. Really happy with how the whole thing turned out.',
    },
    {
        name: 'Harshil Panchal',
        title: 'Verified Client',
        rating: 5,
        avatar: 'HP',
        avatarColor: 'from-green-500 to-emerald-400',
        tag: 'Web Development',
        google: true,
        quote:
            'Great experience overall — professional team, quick turnaround, and a final website that genuinely impressed us.',
    },
    {
        name: 'Kirtan Kachhadiya',
        title: 'Verified Client',
        rating: 5,
        avatar: 'KK',
        avatarColor: 'from-fuchsia-500 to-pink-400',
        tag: 'Web Development',
        google: true,
        quote:
            'Good work and a smooth process from beginning to end. The team kept me in the loop at every step of the way.',
    },
    {
        name: 'Palak Viroja',
        title: 'Verified Client',
        rating: 5,
        avatar: 'PV',
        avatarColor: 'from-purple-500 to-violet-400',
        tag: 'Web Development',
        google: true,
        quote:
            'A smooth and professional experience from the very first call right through to launch. The team made the whole process effortless.',
    },
    {
        name: 'ZenthosX',
        title: 'Verified Client',
        rating: 5,
        avatar: 'ZX',
        avatarColor: 'from-red-500 to-rose-400',
        tag: 'Web Development',
        google: true,
        quote:
            'Good, reliable service and a polished final product. Would happily recommend them to anyone looking for a quality website.',
    },

    // ── Service highlights ──────────────────────────────────────
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

function GoogleG({ className = 'h-3.5 w-3.5' }: { className?: string }) {
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        </svg>
    );
}

function GoogleBadge() {
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
            <GoogleG /> Google review
        </span>
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
                    Real, verified 5-star Google reviews from business owners across Ahmedabad and
                    Gujarat — alongside results from our web, marketing, and automation projects.
                </p>

                {/* Stats strip */}
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                    {[
                        { value: '100+', label: 'Happy Clients' },
                        { value: '4.9★', label: 'Google Rating' },
                        { value: '2+', label: 'Years Experience' },
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

                            {/* Stars + Google badge */}
                            <div className="flex items-center justify-between gap-2">
                                <StarRating count={t.rating} />
                                {t.google && <GoogleBadge />}
                            </div>

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
                                        {t.company ? `${t.title} · ${t.company}` : t.title}
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
