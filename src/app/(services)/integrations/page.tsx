import { Card, CardContent } from '@/components/ui/card';
import { CUSTOMER_TOOLS } from '@/lib/constants';
import { Check } from 'lucide-react';
import { ContactSection } from '@/components/contact-section';

export default function IntegrationsPage() {
  return (
    <>
      <section className="container py-12 md:py-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Smart Customer Tools
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Engage with your customers more effectively. We provide smart tools like AI-powered chatbots and simple CRM systems to improve your customer service and build stronger relationships.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 relative">
          {/* Background glow - Green/Blue */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-10 blur-3xl animate-image-glow pointer-events-none -z-10" />

          {CUSTOMER_TOOLS.map((tool, index) => (
            <Card
              key={tool.name}
              className="flex transform flex-col items-center justify-center p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <tool.icon className="mb-3 h-10 w-10 text-primary transition-transform duration-300 hover:scale-110" />
                <p className="font-semibold">{tool.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl animate-fade-in-up">
          <h2 className="text-2xl font-bold tracking-tight">
            Need a Custom Solution?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Our expertise extends beyond this list. We can build custom tools and integrations for almost any business need. Contact us to discuss your specific requirements.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
