
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('CardPushRequest', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/card-push-requests/brm', {
  "data": {
    "customerCode": "1757365789973499904",
    "customerAccountNumber": "8091691004"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Validate the response body
  expect(response.status()).toBe(200);
  expect(response.status()).toBe(400);

  // Response time is less than 250ms
  expect(responseTime).toBeLessThan(250);

});
