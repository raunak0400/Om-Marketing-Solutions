import Link from 'next/link';
import { ExternalLink, ArrowRight, Check } from 'lucide-react';

const FEATURES = [
  {
    title: 'Real-Time Stock Dashboard',
    description:
      'Live inventory levels across every location with colour-coded alerts for low stock, overstock, and expiring items.',
  },
  {
    title: 'AI Demand Forecasting',
    description:
      'Machine-learning models read sales history and seasonality to predict demand and optimise reorder points.',
  },
  {
    title: 'Purchase Order Management',
    description:
      'Create, track, and approve POs end-to-end — from supplier request to goods receipt — in one place.',
  },
  {
    title: 'Supplier Directory',
    description:
      'Central supplier database with pricing history, lead times, and performance ratings for smarter procurement.',
  },
  {
    title: 'Automated Low-Stock Alerts',
    description:
      'Configurable thresholds trigger email and in-app alerts so stockouts are caught before they cost a sale.',
  },
  {
    title: 'Multi-Location Support',
    description:
      'Manage inventory across warehouses and stores from one dashboard with location-level drill-down reporting.',
  },
];

const RESULTS = ['6-week build', 'Real-time visibility', 'AI reorder points', 'Zero spreadsheets'];

/** Faux StockPilot dashboard, rendered in CSS (the live app is behind a login). */
function DashboardMock() {
  const kpis = [
    { label: 'Total SKUs', value: '1,248', accent: 'text-indigo-400' },
    { label: 'Low Stock', value: '17', accent: 'text-amber-400' },
    { label: 'Pending POs', value: '6', accent: 'text-sky-400' },
    { label: 'Suppliers', value: '34', accent: 'text-emerald-400' },
  ];
  const bars = [55, 80, 40, 95, 65, 72, 48, 88];
  const lowStock = [
    { name: 'HDPE Bottle 250ml', qty: '12 left', tone: 'bg-amber-500' },
    { name: 'Flip-Top Caps', qty: '4 left', tone: 'bg-rose-500' },
    { name: 'Pump Dispenser', qty: '21 left', tone: 'bg-amber-500' },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-[#0b0f1a] shadow-2xl">
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-3 text-xs font-medium text-muted-foreground">
          StockPilot · Inventory Dashboard
        </span>
      </div>

      <div className="p-4 sm:p-5">
        {/* KPI row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="text-[11px] text-muted-foreground">{k.label}</p>
              <p className={`mt-0.5 text-lg font-bold ${k.accent}`}>{k.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-5">
          {/* chart */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:col-span-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium text-foreground">Stock movement</p>
              <span className="rounded-full bg-indigo-500/15 px-2 py-0.5 text-[10px] text-indigo-300">
                Last 8 weeks
              </span>
            </div>
            <div className="flex h-28 items-end gap-2">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-indigo-600/40 to-indigo-400"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* low stock alerts */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:col-span-2">
            <p className="mb-3 text-xs font-medium text-foreground">Low-stock alerts</p>
            <div className="space-y-2.5">
              {lowStock.map((it) => (
                <div key={it.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${it.tone}`} />
                    <span className="text-[11px] text-muted-foreground">{it.name}</span>
                  </div>
                  <span className="text-[11px] font-medium text-foreground">{it.qty}</span>
                </div>
              ))}
            </div>
            <button className="mt-3 w-full rounded-lg bg-indigo-600/20 py-1.5 text-[11px] font-medium text-indigo-300">
              Reorder all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InventoryShowcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            Featured Build
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
            StockPilot — Inventory Management System
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A smart, AI-powered inventory platform we built for SMEs to track stock, orders, and
            suppliers in real time — replacing spreadsheets with a single source of truth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <DashboardMock />

          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {RESULTS.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300"
                >
                  <Check className="h-3 w-3" /> {r}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-card p-4">
                  <h3 className="text-sm font-semibold">{f.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'AI Forecasting', 'Vercel'].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-md border border-primary/25 bg-primary/5 px-2 py-0.5 text-[11px] font-medium text-primary"
                  >
                    {t}
                  </span>
                )
              )}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://stockpilot-lake.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" /> View Live
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50"
              >
                Build mine <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
