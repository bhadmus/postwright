
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ViewLogisticsCompanyAssigned', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{logisticsServiceUrl}}/api/v1/logistics/partners?fulfilmentCenterCode={{fcCode}}');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify that the logisics company endpoint is reachable
  expect(response.status()).toBe(200);

});
