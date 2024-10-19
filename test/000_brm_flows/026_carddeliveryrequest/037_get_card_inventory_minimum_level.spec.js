
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Get Card Inventory Minimum Level', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/carton-inventory/minimum-carton-level');
  const responseTime = Date.now() - startTime;

});
