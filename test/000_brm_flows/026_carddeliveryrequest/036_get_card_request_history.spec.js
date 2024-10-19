
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Get card request History', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/stats/requests');
  const responseTime = Date.now() - startTime;

});
