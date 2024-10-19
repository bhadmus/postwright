
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('SetUserId', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v2/businesses/users', {
  "headers": {
    "moniepointAgentId": "{{agentId}}",
    "banking-domain": "PERSONAL"
  },
  "data": ""
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Ensure userID was set successfully

  // Verify OK Response while setting UserID
  expect(response.status()).toBe(200);

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
