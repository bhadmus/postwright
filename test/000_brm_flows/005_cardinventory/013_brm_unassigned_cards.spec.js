
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('BRM unassigned cards', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/brm/cards/count/unassigned');
  const responseTime = Date.now() - startTime;

});
