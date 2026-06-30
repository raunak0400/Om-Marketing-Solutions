import { ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────
   UI/UX design-process showcase — a premium, visually-rich section that
   demonstrates HOW we design (process, systems, transformations) rather than
   just showing final screens.
   ───────────────────────────────────────────────────────────────────────── */

const DELIVERABLES = [
  { icon: '🎨', title: 'Design Systems', desc: 'Reusable tokens, components & guidelines for a consistent product.' },
  { icon: '📐', title: 'Wireframes', desc: 'Low-fidelity blueprints that lock structure before visuals.' },
  { icon: '🔀', title: 'User Flows', desc: 'Mapped journeys that remove friction and dead ends.' },
  { icon: '✨', title: 'High-Fidelity Mockups', desc: 'Pixel-perfect screens that look like the final product.' },
  { icon: '📲', title: 'Interactive Prototypes', desc: 'Clickable demos you can test before a line of code.' },
  { icon: '📱', title: 'Mobile & Web UI', desc: 'Concepts crafted for every breakpoint and platform.' },
  { icon: '📊', title: 'Dashboard Designs', desc: 'Dense data made clear, scannable, and actionable.' },
  { icon: '🔄', title: 'Before / After', desc: 'Transformations that lift clarity, trust & conversions.' },
  { icon: '📋', title: 'Design Case Studies', desc: 'Problem, process, and solution — fully documented.' },
];

const PROCESS = [
  { n: '01', title: 'Discover', desc: 'Stakeholder interviews, competitor teardown & user research.' },
  { n: '02', title: 'Define', desc: 'Information architecture, user flows & success metrics.' },
  { n: '03', title: 'Wireframe', desc: 'Low-fidelity layouts to validate structure fast.' },
  { n: '04', title: 'Design System', desc: 'Tokens, type scale & components for consistency at scale.' },
  { n: '05', title: 'Hi-Fi & Prototype', desc: 'Pixel-perfect screens wired into a clickable prototype.' },
  { n: '06', title: 'Test & Handoff', desc: 'Usability testing, then developer-ready Figma handoff.' },
];

const SWATCHES = [
  { name: 'Primary', cls: 'bg-indigo-500' },
  { name: 'Accent', cls: 'bg-cyan-400' },
  { name: 'Success', cls: 'bg-emerald-500' },
  { name: 'Warning', cls: 'bg-amber-500' },
  { name: 'Danger', cls: 'bg-rose-500' },
  { name: 'Surface', cls: 'bg-slate-700' },
];

const FLOW = ['Landing', 'Browse', 'Product', 'Cart', 'Checkout', 'Success'];

export function UIUXShowcase() {
  return (
    <>
      {/* ── 1. WHAT WE DESIGN & DELIVER ─────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              Design Capabilities
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              What We Design &amp; Deliver
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We design the whole experience — not just the final screen. Here&apos;s everything
              that goes into a product people love to use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((d) => (
              <div
                key={d.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="mb-3 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {d.icon}
                </div>
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. DESIGN PROCESS ───────────────────────────────────────────── */}
      <section className="border-y border-border/40 bg-card py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Design Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A repeatable, research-driven process that turns a fuzzy idea into a tested,
              ship-ready experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p) => (
              <div
                key={p.n}
                className="relative overflow-hidden rounded-xl border border-border bg-background p-6"
              >
                <span className="absolute -right-2 -top-3 text-6xl font-black text-primary/5">
                  {p.n}
                </span>
                <div className="relative">
                  <span className="text-sm font-bold text-primary">{p.n}</span>
                  <h3 className="mt-1 font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. A LIVING DESIGN SYSTEM ───────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                A Living Design System
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every project ships with a system — colour tokens, a type scale, and reusable
                components — so your product stays consistent as it grows, and developers build
                faster with zero guesswork.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {['Colour & spacing tokens', 'Modular type scale', 'Reusable component library', 'Light & dark themes'].map(
                  (x) => (
                    <li key={x} className="flex items-center gap-2">
                      <span className="text-primary">✓</span> {x}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* System panel */}
            <div className="rounded-2xl border border-border bg-card p-6">
              {/* swatches */}
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Colour tokens
              </p>
              <div className="mb-6 grid grid-cols-6 gap-2">
                {SWATCHES.map((s) => (
                  <div key={s.name} className="text-center">
                    <div className={`mx-auto h-10 w-full rounded-lg ${s.cls}`} />
                    <span className="mt-1 block text-[9px] text-muted-foreground">{s.name}</span>
                  </div>
                ))}
              </div>

              {/* type scale */}
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Type scale
              </p>
              <div className="mb-6 space-y-1 border-b border-border pb-5">
                <p className="text-2xl font-bold leading-none">Heading</p>
                <p className="text-base font-medium">Subheading</p>
                <p className="text-sm text-muted-foreground">Body text — readable and balanced.</p>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Caption</p>
              </div>

              {/* components */}
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Components
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                  Button
                </span>
                <span className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium">
                  Outline
                </span>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                  Badge
                </span>
                <span className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted-foreground">
                  Input field
                </span>
                <span className="flex h-6 w-10 items-center rounded-full bg-primary/30 px-0.5">
                  <span className="ml-auto h-5 w-5 rounded-full bg-primary" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WIREFRAME → HIGH-FIDELITY ────────────────────────────────── */}
      <section className="border-y border-border/40 bg-card py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              From Wireframe to Reality
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We validate structure with low-fidelity wireframes first, then layer on the visual
              system — so the final UI is both usable and beautiful.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            {/* Wireframe (low-fi) */}
            <div className="rounded-2xl border border-dashed border-border bg-background p-5">
              <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Wireframe
              </p>
              <div className="space-y-3 opacity-70">
                <div className="h-8 rounded bg-muted" />
                <div className="h-24 rounded bg-muted" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-14 rounded bg-muted" />
                  <div className="h-14 rounded bg-muted" />
                  <div className="h-14 rounded bg-muted" />
                </div>
                <div className="h-3 w-2/3 rounded bg-muted" />
                <div className="h-3 w-1/2 rounded bg-muted" />
              </div>
            </div>

            {/* arrow */}
            <div className="flex justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>

            {/* Hi-Fi */}
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-indigo-950/40 to-background p-5 shadow-xl">
              <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-primary">
                High-Fidelity
              </p>
              <div className="space-y-3">
                <div className="flex h-8 items-center justify-between rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-3">
                  <span className="h-2 w-12 rounded-full bg-white/70" />
                  <span className="h-3 w-3 rounded-full bg-white/70" />
                </div>
                <div className="h-24 rounded-lg bg-gradient-to-br from-indigo-500/30 to-cyan-500/20" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-14 rounded-lg border border-border bg-card" />
                  <div className="h-14 rounded-lg border border-border bg-card" />
                  <div className="h-14 rounded-lg border border-border bg-card" />
                </div>
                <div className="h-3 w-2/3 rounded-full bg-foreground/30" />
                <div className="h-7 w-28 rounded-lg bg-primary" />
              </div>
            </div>
          </div>

          {/* user flow */}
          <div className="mt-14">
            <p className="mb-5 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
              And every screen is mapped to a user flow
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {FLOW.map((node, i) => (
                <div key={node} className="flex items-center gap-2">
                  <span className="rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium">
                    {node}
                  </span>
                  {i < FLOW.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DESIGN CASE STUDY ────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              A Design Case Study
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              How a focused redesign turned a confusing checkout into a smooth, high-converting
              flow.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                tag: 'The Problem',
                tone: 'text-rose-400 border-rose-500/30 bg-rose-500/5',
                points: [
                  'A 5-step checkout with no progress indicator',
                  'Users abandoned carts at the payment step',
                  'Inconsistent buttons and unclear errors',
                ],
              },
              {
                tag: 'Our Process',
                tone: 'text-amber-400 border-amber-500/30 bg-amber-500/5',
                points: [
                  'Mapped the real flow and found 3 dead ends',
                  'Wireframed a 2-step checkout with a progress bar',
                  'Built a design system & tested the prototype with users',
                ],
              },
              {
                tag: 'The Result',
                tone: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5',
                points: [
                  'Checkout reduced from 5 steps to 2',
                  'Clearer errors and a consistent component set',
                  'A calmer, faster, more trustworthy experience',
                ],
              },
            ].map((col) => (
              <div key={col.tag} className="rounded-2xl border border-border bg-card p-6">
                <span
                  className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${col.tone}`}
                >
                  {col.tag}
                </span>
                <ul className="mt-4 space-y-2.5">
                  {col.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
