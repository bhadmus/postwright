
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Debit card cost config', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v2/config/debit-card/cost');
  const responseTime = Date.now() - startTime;

});
