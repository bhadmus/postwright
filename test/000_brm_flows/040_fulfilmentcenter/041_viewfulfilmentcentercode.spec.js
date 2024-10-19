
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ViewFulfilmentCenterCode', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/fulfillment-center/my-fulfilment-center');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Status code is 200
  expect(response.status()).toBe(200);

  // Set necessary variables

  // Response time is less than 100ms [fulfillmentCenters]
  expect(responseTime).toBeLessThan(100);

});
