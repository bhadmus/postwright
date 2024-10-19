
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('Aggregator requests', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/carton-inventory/agent/aggregator/requests');
  const responseTime = Date.now() - startTime;

});
