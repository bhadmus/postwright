
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Get card inventory info', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/brm/agent/nuban/{{customerAccountNumber}}/card-inventory-info');
  const responseTime = Date.now() - startTime;

});
