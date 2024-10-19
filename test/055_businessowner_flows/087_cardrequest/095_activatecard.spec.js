
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ActivateCard', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v2/cards/354/activate', {
  "headers": {
    "moniepointAgentId": "{{agentId}}",
    "banking-domain": "BUSINESS"
  },
  "data": {
    "serialNumber": "1179611107",
    "pin": "1111"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify OK Response while activating card
  expect(response.status()).toBe(200);

  // Verify that expected response upon activation

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
