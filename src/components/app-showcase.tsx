import { Check } from 'lucide-react';

type AppConcept = {
  name: string;
  category: string;
  emoji: string;
  gradient: string; // tailwind from-/to- classes
  tagline: string;
  features: string[];
  tech: string[];
  screens: string[]; // labels for the faux bottom-nav
};

const APPS: AppConcept[] = [
  {
    name: 'FreshCart',
    category: 'Grocery & Food Delivery',
    emoji: '🛒',
    gradient: 'from-emerald-500 to-teal-500',
    tagline:
      'On-demand grocery delivery with live order tracking, smart reorder, and UPI checkout.',
    features: ['Live order tracking', 'One-tap reorder', 'UPI & card payments', 'Push offers'],
    tech: ['React Native', 'Node.js', 'Razorpay'],
    screens: ['Home', 'Cart', 'Track', 'Profile'],
  },
  {
    name: 'SlotBook',
    category: 'Appointments & Booking',
    emoji: '📅',
    gradient: 'from-violet-500 to-fuchsia-500',
    tagline:
      'Booking app for salons, clinics & studios — real-time slots, reminders, and online payments.',
    features: ['Real-time availability', 'Auto reminders', 'In-app payments', 'Staff calendar'],
    tech: ['Flutter', 'Firebase', 'Stripe'],
    screens: ['Browse', 'Book', 'Wallet', 'Account'],
  },
  {
    name: 'FitForge',
    category: 'Fitness & Workout Tracker',
    emoji: '💪',
    gradient: 'from-orange-500 to-rose-500',
    tagline:
      'Personal training companion with guided workouts, progress charts, and wearable sync.',
    features: ['Guided workouts', 'Progress analytics', 'Wearable sync', 'Streaks & goals'],
    tech: ['React Native', 'GraphQL', 'HealthKit'],
    screens: ['Today', 'Plan', 'Stats', 'Me'],
  },
  {
    name: 'RoutePilot',
    category: 'Delivery & Logistics',
    emoji: '🚚',
    gradient: 'from-sky-500 to-blue-600',
    tagline:
      'Driver & dispatch app with route optimisation, proof-of-delivery, and earnings tracking.',
    features: ['Route optimisation', 'Proof of delivery', 'Live dispatch', 'Earnings dashboard'],
    tech: ['Flutter', 'FastAPI', 'Mapbox'],
    screens: ['Jobs', 'Map', 'POD', 'Earnings'],
  },
];

function PhoneMock({ app }: { app: AppConcept }) {
  return (
    <div className="relative mx-auto w-full max-w-[230px]">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0e1c] p-2 shadow-2xl">
        <div className={`relative overflow-hidden rounded-[22px] bg-gradient-to-br ${app.gradient}`}>
          {/* notch */}
          <div className="flex justify-center pt-2">
            <span className="h-1.5 w-16 rounded-full bg-black/25" />
          </div>
          {/* app identity */}
          <div className="px-4 pb-5 pt-6 text-center text-white">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl backdrop-blur-sm">
              {app.emoji}
            </div>
            <p className="text-base font-bold tracking-tight">{app.name}</p>
            <p className="text-[10px] uppercase tracking-widest text-white/70">{app.category}</p>
          </div>
          {/* faux content sheet */}
          <div className="rounded-t-2xl bg-[#0a0e1c]/95 px-3 pb-3 pt-4">
            <div className="mb-3 h-16 rounded-xl bg-white/10" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-12 rounded-lg bg-white/10" />
              <div className="h-12 rounded-lg bg-white/10" />
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-2 w-3/4 rounded-full bg-white/15" />
              <div className="h-2 w-1/2 rounded-full bg-white/10" />
            </div>
            {/* bottom nav */}
            <div className="mt-4 flex items-center justify-between rounded-full bg-white/10 px-3 py-2">
              {app.screens.map((s, i) => (
                <span
                  key={s}
                  className={`text-[8px] font-medium ${i === 0 ? 'text-white' : 'text-white/50'}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppShowcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            App Concepts
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
            Mobile Apps We Build
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A snapshot of the cross-platform apps we design and ship — from on-demand delivery to
            booking, fitness, and logistics. Each is built native-feeling, offline-ready, and
            store-ready for both iOS and Android.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {APPS.map((app) => (
            <div
              key={app.name}
              className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-card p-6 sm:grid-cols-[230px_1fr] sm:items-center"
            >
              <PhoneMock app={app} />

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {app.category}
                </span>
                <h3 className="mt-1 text-xl font-bold">{app.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{app.tagline}</p>

                <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {app.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 flex-shrink-0 text-green-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {app.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-primary/25 bg-primary/5 px-2 py-0.5 text-[11px] font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
          App concepts shown for illustration. Have an idea? We&apos;ll turn it into a polished,
          published app.
        </p>
      </div>
    </section>
  );
}
