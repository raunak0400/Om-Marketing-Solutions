import { AutomationRoiCalculator } from '@/components/automation-roi-calculator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
  'Reduce manual errors and improve data accuracy.',
  'Increase operational efficiency and productivity.',
  'Free up your team for high-value strategic work.',
  'Scale your business without proportionally increasing headcount.',
  'Enhance customer satisfaction with faster response times.',
];

const automationImage = PlaceHolderImages.find(
  (img) => img.id === 'service-automation'
);

export default function AutomationPage() {
  return (
    <div className="space-y-16">
      <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Streamline Your Business with Automation
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Unlock your business's full potential by automating repetitive
            tasks and complex workflows. Our intelligent automation solutions
            are designed to save you time, reduce costs, and minimize errors.
          </p>
          <ul className="mt-8 space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        {automationImage && (
          <div className="flex items-center justify-center">
            <Image
              src={automationImage.imageUrl}
              alt="Automation workflow"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint={automationImage.imageHint}
            />
          </div>
        )}
      </section>

      <section>
        <Card className="mx-auto max-w-4xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl">
              Calculate Your Potential ROI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AutomationRoiCalculator />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
