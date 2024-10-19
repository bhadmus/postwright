
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Sales agent performance', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/brm/sales-agents/performance');
  const responseTime = Date.now() - startTime;

});
