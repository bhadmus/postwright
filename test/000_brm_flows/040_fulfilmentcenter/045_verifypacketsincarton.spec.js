
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('VerifyPacketsInCarton', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/packet-inventory/aggregator/available-refs/{{cartonId}}');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify the view packets endpoint is reachable
  expect(response.status()).toBe(200);

});
