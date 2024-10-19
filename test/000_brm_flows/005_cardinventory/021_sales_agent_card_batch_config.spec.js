
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Sales agent card batch config', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/sales-agents/card-batch-requests/config');
  const responseTime = Date.now() - startTime;

});
