
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('SetLastCardID', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/cards/business-owner', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  },
  "data": ""
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Ensure status code is 200 business owner
  expect(response.status()).toBe(200);

  // Ensure all key attributes exist in response

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
