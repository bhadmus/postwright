
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ViewBRMStockInventoryAndProftMargin', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/carton-inventory/aggregator/card-stock/price-margin');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify that BRM can view inventory and margin
  expect(response.status()).toBe(200);

  // Verify response keys

});
