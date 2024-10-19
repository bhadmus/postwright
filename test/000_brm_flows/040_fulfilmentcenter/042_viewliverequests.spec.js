
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('ViewLiveRequests', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{logisticsServiceUrl}}/api/v1/logistics/cards/requests/fulfillment-center/{{fcCode}}');
  const responseTime = Date.now() - startTime;

});
