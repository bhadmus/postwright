
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('GetMySC', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/aggregators/brm/state-coordinator');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify that RM can view inventory and margin
  expect(response.status()).toBe(200);

  // Verify response keys

  // Response time is less than 200ms
  expect(responseTime).toBeLessThan(200);

});
