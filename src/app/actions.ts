'use server';

import {
  estimateServiceCost as estimateServiceCostAI,
  ServiceCostInput,
} from '@/ai/flows/service-cost-estimation';

export async function estimateServiceCost(input: ServiceCostInput) {
  try {
    const result = await estimateServiceCostAI(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in estimateServiceCost action:', error);
    return {
      success: false,
      error: 'Failed to get an estimate. Please try again later.',
    };
  }
}
