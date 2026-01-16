'use server';

/**
 * @fileOverview A flow for estimating the ROI of automation solutions.
 *
 * - estimateAutomationROI - A function that takes in automation details and returns an ROI estimate.
 * - AutomationROIInput - The input type for the estimateAutomationROI function.
 * - AutomationROIOutput - The return type for the estimateAutomationROI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomationROIInputSchema = z.object({
  currentManualHoursPerWeek: z
    .number()
    .describe('The number of manual hours spent per week on the task.'),
  hourlyRate: z.number().describe('The hourly rate of the employee.'),
  automationCost: z.number().describe('The estimated cost of the automation solution.'),
  errorRateReduction: z
    .number()
    .describe(
      'The estimated reduction in error rate as a percentage (e.g., 0.1 for 10% reduction).' ),
  revenuePerError: z.number().describe('The cost incurred per error.'),
});
export type AutomationROIInput = z.infer<typeof AutomationROIInputSchema>;

const AutomationROIOutputSchema = z.object({
  estimatedAnnualSavings: z
    .number()
    .describe('The estimated annual savings from the automation solution.'),
  roiPercentage: z.number().describe('The estimated ROI percentage.'),
  summary: z.string().describe('A brief summary of the ROI estimation.'),
});
export type AutomationROIOutput = z.infer<typeof AutomationROIOutputSchema>;

export async function estimateAutomationROI(
  input: AutomationROIInput
): Promise<AutomationROIOutput> {
  return estimateAutomationROIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automationROIPrompt',
  input: {schema: AutomationROIInputSchema},
  output: {schema: AutomationROIOutputSchema},
  prompt: `You are an expert financial analyst specializing in ROI calculations for automation solutions.

  Calculate the estimated annual savings and ROI percentage based on the following inputs:

  Current Manual Hours Per Week: {{{currentManualHoursPerWeek}}}
  Hourly Rate: {{{hourlyRate}}}
  Automation Cost: {{{automationCost}}}
  Error Rate Reduction: {{{errorRateReduction}}}
  Revenue Per Error: {{{revenuePerError}}}

  Provide a brief summary of the ROI estimation, highlighting the key benefits of the automation solution.

  Be specific with the calculation and the result, and avoid generic marketing language.

  Output should include estimatedAnnualSavings, roiPercentage, and summary fields.
  `,
});

const estimateAutomationROIFlow = ai.defineFlow(
  {
    name: 'estimateAutomationROIFlow',
    inputSchema: AutomationROIInputSchema,
    outputSchema: AutomationROIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
