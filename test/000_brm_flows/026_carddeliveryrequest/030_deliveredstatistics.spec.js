
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('DeliveredStatistics', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{logisticsServiceUrl}}/api/v1/brm/cards/delivered-statistics', {
  "data": {
    "brmCode": "{{BRMCode}}",
    "startDate": "2022-11-16",
    "endDate": "2024-11-23"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Ensure that delivered statistics is available
  expect(response.status()).toBe(200);

  // Verify response body

});
