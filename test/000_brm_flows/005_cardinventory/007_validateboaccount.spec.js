
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ValidateBOAccount', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{logisticsServiceUrl}}/api/v1/account/validate?accountNumber=9048567947');
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

  // Verify that view BO account validation is reachable [200]
  expect(response.status()).toBe(200);

});
