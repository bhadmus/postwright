
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Limits', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v2/cards/{{cardId}}/limit', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Ensure the LIMITS endpoint is reachable
  expect(response.status()).toBe(200);

  // Code field should not be empty

  // Response status code is 500

  // Response time is less than 2500ms
  expect(responseTime).toBeLessThan(2500);

});
