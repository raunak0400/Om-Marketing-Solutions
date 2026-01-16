'use server';

/**
 * @fileOverview An AI-powered tool to estimate the cost of services.
 *
 * - estimateServiceCost - A function that estimates the cost of a service.
 * - ServiceCostInput - The input type for the estimateServiceCost function.
 * - ServiceCostOutput - The return type for the estimateServiceCost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceCostInputSchema = z.object({
  serviceType: z
    .string()
    .describe(
      'The type of service requested (e.g., web development, automation system, business software, digital transformation).'
    ),
  businessType: z
    .string()
    .describe('The type of business requesting the service (e.g., SME, enterprise, startup).'),
  requirements: z
    .string()
    .describe('A detailed description of the specific requirements for the service.'),
});

export type ServiceCostInput = z.infer<typeof ServiceCostInputSchema>;

const ServiceCostOutputSchema = z.object({
  estimatedCost: z
    .string()
    .describe(
      'An estimated cost range for the requested service, including currency (e.g., $5,000 - $10,000).'
    ),
  costFactors: z
    .string()
    .describe(
      'A brief explanation of the factors influencing the estimated cost (e.g., complexity, scale, technology stack).'
    ),
  disclaimer: z
    .string()
    .describe(
      'A disclaimer indicating that the estimate is approximate and may vary based on a detailed assessment.'
    ),
});

export type ServiceCostOutput = z.infer<typeof ServiceCostOutputSchema>;

export async function estimateServiceCost(
  input: ServiceCostInput
): Promise<ServiceCostOutput> {
  return estimateServiceCostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'serviceCostEstimationPrompt',
  input: {schema: ServiceCostInputSchema},
  output: {schema: ServiceCostOutputSchema},
  prompt: `You are a cost estimation expert for a tech services company. Provide a cost estimate based on the service type, business type, and requirements. Be specific and business-focused, not generic.

Service Type: {{{serviceType}}}
Business Type: {{{businessType}}}
Requirements: {{{requirements}}}

Respond with the estimated cost, the factors influencing the cost, and a disclaimer that the estimate is approximate.`,
});

const estimateServiceCostFlow = ai.defineFlow(
  {
    name: 'estimateServiceCostFlow',
    inputSchema: ServiceCostInputSchema,
    outputSchema: ServiceCostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
