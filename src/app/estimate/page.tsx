import { ServiceCostEstimator } from '@/components/service-cost-estimator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Lightbulb, Zap } from 'lucide-react';

export default function EstimatePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Get a Project Estimate
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Get a preliminary cost estimate for your project. This tool provides a general budget forecast to help you plan. For a detailed quote based on your specific business needs, please contact us.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Instant Estimates</h3>
                <p className="text-muted-foreground">
                  Receive a cost range in seconds based on your inputs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Budget Planning</h3>
                <p className="text-muted-foreground">
                  Understand the factors that influence project costs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Clarify Your Needs</h3>
                <p className="text-muted-foreground">
                  Thinking through requirements helps refine your project scope.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="self-start">
          <CardHeader>
            <CardTitle>Tell us about your project</CardTitle>
          </CardHeader>
          <CardContent>
            <ServiceCostEstimator />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
