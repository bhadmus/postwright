
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('BRM Card Inventory', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/brm/card-inventory');
  const responseTime = Date.now() - startTime;

});
