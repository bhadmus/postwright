
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('View public request', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{logisticsServiceUrl}}/api/v1/logistics/cards/tasks/public-requests?stateId=1&page=1&size=20&phoneNumber=2348079454567');
  const responseTime = Date.now() - startTime;

});
