
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('AvailableCardCarton', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/carton-inventory/aggregator/available-refs');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify the view available carton is available
  expect(response.status()).toBe(200);

});
