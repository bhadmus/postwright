
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('View delivery areas', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/cards/delivery-areas?lgaCode=1');
  const responseTime = Date.now() - startTime;

});
