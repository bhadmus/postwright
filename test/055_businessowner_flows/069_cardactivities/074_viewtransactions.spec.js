
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ViewTransactions', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v2/cards/transactions/{{cardId}}?startDate=2024-05-01&endDate=2024-08-30&pageNumber=1&pageSize=10', {
  "headers": {
    "moniepointAgentId": "{{agentId}}"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify response [Get OTP]
  expect(response.status()).toBe(200);

  // Verify the responseBody on [Get OTP]

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
