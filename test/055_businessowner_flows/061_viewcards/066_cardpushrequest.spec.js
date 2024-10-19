
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('CardPushRequest', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/cards/push-requests', {
  "headers": {
    "moniepointAgentId": "{{agentId}}",
    "banking-domain": "PERSONAL"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Ensure status code is 200 card push
  expect(response.status()).toBe(200);

  // Validate the response body

  // Response time is less than 2500ms
  expect(responseTime).toBeLessThan(2500);

});
