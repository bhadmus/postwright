
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('FetchCardDetails', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v2/cards/fetch-card-details', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  },
  "data": {
    "cardId": "{{cardId}}",
    "otp": "123456",
    "userPin": 1111
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify response [Fetch card details]
  expect(response.status()).toBe(200);

  // Verify the responseBody on [Fetch card details]

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
