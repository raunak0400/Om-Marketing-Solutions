import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { DIGITAL_TRANSFORMATION_ROADMAP } from '@/lib/constants';
import { Download } from 'lucide-react';

export default function DigitalTransformationPage() {
  return (
    <section>
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Digital Modernization Strategy
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Get a clear, practical roadmap to take your traditional business digital. We'll help you choose the right technology and plan your journey for long-term success.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <Accordion type="single" collapsible defaultValue="item-0">
          {DIGITAL_TRANSFORMATION_ROADMAP.map((item, index) => (
            <AccordionItem key={item.step} value={`item-${index}`}>
              <AccordionTrigger className="text-2xl font-semibold">
                <div className="flex items-center gap-4">
                  <span className="text-primary">{item.step}</span>
                  <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pl-12 text-base text-muted-foreground">
                <p>{item.description}</p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Template
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
