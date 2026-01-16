'use server';

import {
  AutomationROIInput,
  estimateAutomationROI as estimateAutomationROIAI,
} from '@/ai/flows/automation-roi-estimation';
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

export async function estimateAutomationROI(input: AutomationROIInput) {
  try {
    const result = await estimateAutomationROIAI(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in estimateAutomationROI action:', error);
    return {
      success: false,
      error: 'Failed to calculate ROI. Please try again later.',
    };
  }
}
