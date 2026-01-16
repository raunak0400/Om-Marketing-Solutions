import { Card, CardContent } from '@/components/ui/card';
import { INTEGRATIONS } from '@/lib/constants';
import { Check } from 'lucide-react';

export default function IntegrationsPage() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
        AI-Powered Chatbots
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
        We connect your essential business tools to create a unified, efficient
        ecosystem. Enhance compatibility and streamline your workflows with our
        pre-built and custom integrations.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {INTEGRATIONS.map((integration) => (
          <Card
            key={integration.name}
            className="flex transform flex-col items-center justify-center p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <CardContent className="p-0">
              <integration.icon className="mb-3 h-10 w-10 text-primary" />
              <p className="font-semibold">{integration.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight">
          Don't see your software?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Our expertise extends beyond this list. We can build custom
          integrations for almost any platform with an API. Contact us to
          discuss your specific needs.
        </p>
      </div>
    </section>
  );
}
