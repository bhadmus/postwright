
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('View customer card requests', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/card-delivery-requests/brm?page=0&size=20&statuses=PROCESSING,DELIVERY_FAILED,DELIVERED');
  const responseTime = Date.now() - startTime;

});
