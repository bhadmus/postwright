
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('View aggregator order history', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/carton-inventory/aggregators/requests-history/state-coordinator?approvalStatuses=PENDING&requestTypes=AGGREGATOR_REQUEST&page=0&size=20');
  const responseTime = Date.now() - startTime;

});
