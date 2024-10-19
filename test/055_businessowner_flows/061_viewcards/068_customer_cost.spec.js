
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Customer cost', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/card-push-requests/customer-cost?cardPushMode=BUSINESS_RELATIONSHIP_MANAGER&customerAccountNumber={{customerAccountNumber}}');
  const responseTime = Date.now() - startTime;

});
