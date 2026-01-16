'use client';

import { estimateAutomationROI } from '@/app/actions';
import type { AutomationROIOutput } from '@/ai/flows/automation-roi-estimation';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

const formSchema = z.object({
  currentManualHoursPerWeek: z.coerce
    .number()
    .min(0, 'Must be a positive number.'),
  hourlyRate: z.coerce.number().min(0, 'Must be a positive number.'),
  automationCost: z.coerce.number().min(0, 'Must be a positive number.'),
  errorRateReduction: z.coerce
    .number()
    .min(0, 'Must be between 0 and 1.')
    .max(1, 'Must be between 0 and 1.'),
  revenuePerError: z.coerce.number().min(0, 'Must be a positive number.'),
});

export function AutomationRoiCalculator() {
  const [result, setResult] = useState<AutomationROIOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentManualHoursPerWeek: 40,
      hourlyRate: 50,
      automationCost: 10000,
      errorRateReduction: 0.1,
      revenuePerError: 200,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    const response = await estimateAutomationROI(values);
    setIsLoading(false);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: response.error,
      });
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="currentManualHoursPerWeek"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Manual Hours / Week</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 40" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hourlyRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee Hourly Rate ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="automationCost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>One-Time Automation Cost ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 10000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="errorRateReduction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Error Rate Reduction</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" placeholder="e.g., 0.1 for 10%" {...field} />
                  </FormControl>
                  <FormDescription>Enter as a decimal (e.g., 0.1 for 10%)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="revenuePerError"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cost per Error ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 200" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Calculate ROI
          </Button>
        </form>
      </Form>

      {isLoading && (
        <div className="mt-8 text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-muted-foreground">
            Calculating your potential return on investment...
          </p>
        </div>
      )}

      {result && (
        <Card className="mt-8 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Your Estimated ROI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-background p-4">
                <p className="text-sm text-muted-foreground">Annual Savings</p>
                <p className="text-3xl font-bold text-primary">
                  ${result.estimatedAnnualSavings.toLocaleString()}
                </p>
              </div>
              <div className="rounded-lg bg-background p-4">
                <p className="text-sm text-muted-foreground">ROI Percentage</p>
                <p className="text-3xl font-bold text-primary">
                  {result.roiPercentage.toFixed(2)}%
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Summary</h4>
              <p className="text-muted-foreground">{result.summary}</p>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              Disclaimer: This is an estimate. Actual ROI may vary.
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
