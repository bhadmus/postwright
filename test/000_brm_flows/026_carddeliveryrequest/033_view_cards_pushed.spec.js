
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('View cards pushed', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/cards/brm/card-pushed/business-owner-info');
  const responseTime = Date.now() - startTime;

});
