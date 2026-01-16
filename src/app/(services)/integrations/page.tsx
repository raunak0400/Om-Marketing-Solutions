import { Card, CardContent } from '@/components/ui/card';
import { CUSTOMER_TOOLS } from '@/lib/constants';
import { Check } from 'lucide-react';

export default function IntegrationsPage() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
        Smart Customer Tools
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
        Engage with your customers more effectively. We provide smart tools like AI-powered chatbots and simple CRM systems to improve your customer service and build stronger relationships.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        {CUSTOMER_TOOLS.map((tool) => (
          <Card
            key={tool.name}
            className="flex transform flex-col items-center justify-center p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <CardContent className="p-0">
              <tool.icon className="mb-3 h-10 w-10 text-primary" />
              <p className="font-semibold">{tool.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight">
          Need a Custom Solution?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Our expertise extends beyond this list. We can build custom tools and integrations for almost any business need. Contact us to discuss your specific requirements.
        </p>
      </div>
    </section>
  );
}
