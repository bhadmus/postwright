
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Get cost margin', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/cards/cost-margin?cardPushMode=BUSINESS_RELATIONSHIP_MANAGER&count=50');
  const responseTime = Date.now() - startTime;

});
