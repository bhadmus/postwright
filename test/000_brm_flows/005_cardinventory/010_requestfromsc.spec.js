
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('RequestFromSC', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.post('{{cardServiceUrl}}/api/v1/carton-inventory/aggregator/request', {
  "data": {
    "numberOfCartons": "1",
    "reason": "Test from Postman"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify that max carton to be pushed is reachable
  expect(response.status()).toBe(202);

  // Verify response code

});
