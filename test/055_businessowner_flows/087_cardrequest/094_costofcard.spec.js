
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('CostOfCard', async ({ request }) => {
  // Pre-request Script

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/cards/cost', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  },
  "data": ""
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify OK Response while checking setUpKey
  expect(response.status()).toBe(200);
  expect(response.status()).toBe(400);

  // Validate the response body

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
