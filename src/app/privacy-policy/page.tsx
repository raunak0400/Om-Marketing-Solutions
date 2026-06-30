import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — OM Marketing Solutions, Ahmedabad',
  description:
    'How OM Marketing Solutions collects, uses, and protects your personal information when you use our website and services.',
  alternates: { canonical: '/privacy-policy' },
};

const LAST_UPDATED = '30 June 2026';

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* ── Header ─────────────────────────────────────────────── */}
      <section className="border-b border-border/40 bg-card py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              Legal
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Your privacy matters to us. This policy explains what information we collect, how we
              use it, and the choices you have.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>
      </section>

      {/* ── Content ────────────────────────────────────────────── */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-10">
            <Section id="intro" title="1. Introduction">
              <p>
                OM Marketing Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a
                digital agency based in Ahmedabad, Gujarat, India. This Privacy Policy describes how we
                collect, use, and safeguard your information when you visit{' '}
                <span className="text-foreground">ommarketingsolutions.in</span> (the
                &ldquo;Website&rdquo;) or engage our services. By using the Website, you agree to the
                practices described here.
              </p>
            </Section>

            <Section id="info-we-collect" title="2. Information We Collect">
              <p>We collect information in the following ways:</p>
              <p className="font-medium text-foreground">Information you provide to us</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Contact &amp; enquiry details — your name, email address, phone number, and any message you send through our contact form, estimate form, or WhatsApp.</li>
                <li>Project details — information you share about your business so we can prepare a proposal or quote.</li>
                <li>Chat messages — anything you type into our AI assistant on the Website.</li>
              </ul>
              <p className="font-medium text-foreground">Information collected automatically</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Usage &amp; device data — pages visited, time on site, referring URLs, browser type, device type, and approximate location.</li>
                <li>Cookies &amp; similar technologies — used for analytics and to improve your experience (see Section 5).</li>
              </ul>
            </Section>

            <Section id="how-we-use" title="3. How We Use Your Information">
              <ul className="ml-5 list-disc space-y-1">
                <li>To respond to your enquiries and provide quotes, consultations, and services.</li>
                <li>To deliver, maintain, and improve our Website and offerings.</li>
                <li>To send you relevant updates or marketing communications — only where you have opted in, and you can unsubscribe at any time.</li>
                <li>To analyse Website usage and performance so we can improve it.</li>
                <li>To comply with legal obligations and protect against fraud or misuse.</li>
              </ul>
              <p>We do not sell your personal information to anyone.</p>
            </Section>

            <Section id="ai-assistant" title="4. AI Assistant">
              <p>
                Our Website features an AI chat assistant powered by Google Gemini. Messages you send
                to the assistant are processed to generate helpful responses about our services.
                Please do not share sensitive personal, financial, or confidential information in the
                chat. Your conversations help us understand common questions and improve our support.
              </p>
            </Section>

            <Section id="cookies" title="5. Cookies & Analytics">
              <p>
                We use cookies and analytics tools — including Google Analytics and Zoho PageSense — to
                understand how visitors use the Website and to improve it. These tools may set cookies
                that collect anonymised usage data.
              </p>
              <p>
                You can control or disable cookies through your browser settings. Disabling cookies may
                affect some Website features. You can also opt out of Google Analytics using
                Google&apos;s browser add-on.
              </p>
            </Section>

            <Section id="sharing" title="6. How We Share Information">
              <p>
                We share information only with trusted service providers who help us run our business,
                and only as needed. These include:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Hosting &amp; infrastructure (e.g. Vercel).</li>
                <li>Analytics providers (e.g. Google Analytics, Zoho PageSense).</li>
                <li>The AI provider that powers our assistant (Google Gemini).</li>
                <li>Messaging platforms you choose to contact us through (e.g. WhatsApp / Meta).</li>
              </ul>
              <p>
                We may also disclose information if required by law, or to protect our rights, safety,
                or property.
              </p>
            </Section>

            <Section id="security" title="7. Data Security">
              <p>
                We use industry-standard measures — including HTTPS/SSL encryption — to protect your
                information. However, no method of transmission or storage over the internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section id="retention" title="8. Data Retention">
              <p>
                We retain your information only for as long as necessary to fulfil the purposes outlined
                in this policy, to provide our services, and to comply with our legal obligations. When
                no longer needed, we securely delete or anonymise it.
              </p>
            </Section>

            <Section id="your-rights" title="9. Your Rights & Choices">
              <p>You have the right to:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Request access to the personal information we hold about you.</li>
                <li>Request correction or deletion of your information.</li>
                <li>Withdraw consent or opt out of marketing communications at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{' '}
                <a href="mailto:support@ommarketingsolutions.in" className="text-primary hover:underline">
                  support@ommarketingsolutions.in
                </a>
                . We will respond within a reasonable timeframe.
              </p>
            </Section>

            <Section id="third-party" title="10. Third-Party Links">
              <p>
                Our Website may contain links to third-party websites. We are not responsible for the
                privacy practices or content of those sites — we encourage you to review their privacy
                policies.
              </p>
            </Section>

            <Section id="children" title="11. Children's Privacy">
              <p>
                Our Website and services are intended for businesses and individuals aged 18 and over.
                We do not knowingly collect personal information from children. If you believe a child
                has provided us information, please contact us and we will delete it.
              </p>
            </Section>

            <Section id="changes" title="12. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with a revised &ldquo;Last updated&rdquo; date. We encourage you to review it
                periodically.
              </p>
            </Section>

            <Section id="contact" title="13. Contact Us">
              <p>
                If you have any questions about this Privacy Policy or how we handle your information,
                please reach out:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <a href="mailto:support@ommarketingsolutions.in" className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="break-all text-sm text-foreground">support@ommarketingsolutions.in</span>
                </a>
                <a href="tel:+919825247312" className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground">+91 98252 47312</span>
                </a>
                <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-4">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground">Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </Section>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <h2 className="text-2xl font-bold">Questions about your data?</h2>
              <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
                We&apos;re happy to help. Get in touch and we&apos;ll get back to you.
              </p>
              <div className="mt-6">
                <Button asChild className="btn-glow-hover">
                  <Link href="/contact-us">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
