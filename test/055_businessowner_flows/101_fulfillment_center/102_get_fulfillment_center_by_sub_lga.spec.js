
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Get fulfillment center by sub Lga', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/fulfillment-center/sub-lga/99');
  const responseTime = Date.now() - startTime;

});
