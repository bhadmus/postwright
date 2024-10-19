
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('GetPricePerCarton', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/carton-inventory/price-per-carton');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify that RM can view inventory and margin
  expect(response.status()).toBe(200);

  // Verify response keys

});
