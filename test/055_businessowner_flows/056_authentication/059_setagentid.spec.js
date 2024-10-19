
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('SetAgentId', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{frontOfficeUrl}}/api/v2/businesses?pageNumber=1&pageSize=100', {
  "headers": {
    "banking-domain": "BUSINESS"
  }
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Ensure agentID was set successfully

  // OK Response
  expect(response.status()).toBe(200);

  // Response time is less than 2500ms
  expect(responseTime).toBeLessThan(2500);

  // Response status code is 502

  // Content array is present and contains at least one element

  // Pageable object should exist

});
