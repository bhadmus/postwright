
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Delivery Request Logistics Partner', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/cards/delivery-requests/355/logistics-partner');
  const responseTime = Date.now() - startTime;

});
