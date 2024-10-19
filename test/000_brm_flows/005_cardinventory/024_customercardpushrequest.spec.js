
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('CustomerCardPushRequest', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/customer-card/push-request', {
  "data": {
    "businessAccountNumber": "5000377821"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Validate the response body
  expect(response.status()).toBe(200);
  expect(response.status()).toBe(400);

});
