import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';

export const metadata: Metadata = {
  title: 'OM Marketing Solutions | Digital Solutions for Modern Vyavsay',
  description:
    'We help Indian SMEs modernize their traditional businesses (Vyavsay) with affordable websites, automation, and result-oriented digital solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col relative')}>
        {/* Background Glow Effects */}
        <div className="glow-bg-center" aria-hidden="true" />
        <div className="glow-bg-corner glow-top-left" aria-hidden="true" />
        <div className="glow-bg-corner glow-top-right" aria-hidden="true" />
        <div className="glow-bg-corner glow-bottom-left" aria-hidden="true" />
        <div className="glow-bg-corner glow-bottom-right" aria-hidden="true" />

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <Toaster />
      </body>
    </html>
  );
}
