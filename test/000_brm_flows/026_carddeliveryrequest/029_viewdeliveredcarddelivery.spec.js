
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ViewDeliveredCardDelivery', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{logisticsServiceUrl}}/api/v1/brm/cards/get-brm-requests', {
  "data": {
    "status": "DELIVERED",
    "brmCode": "{{BRMCode}}",
    "startDate": "2022-11-16",
    "endDate": "2024-11-23",
    "pageNumber": 1,
    "pageSize": 20
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify that the Pending card delivery page is reachable
  expect(response.status()).toBe(200);

});
