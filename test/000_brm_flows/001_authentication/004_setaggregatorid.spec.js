
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('SetAggregatorID', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{frontOfficeUrl}}/api/v1/profiles/aggregators');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Ensure the aggregator page is reachable
  expect(response.status()).toBe(200);

});
