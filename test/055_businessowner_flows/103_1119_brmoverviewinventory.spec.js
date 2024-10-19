
import { test, expect } from '@playwright/test';
import { variables } from '../variables.js';

test('1119-BRMOverviewInventory', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/stats/brm/tasks?approvalStatuses=APPROVED,REJECTED,PENDING&requestTypes=AGGREGATOR_REQUEST,AGENT_REQUEST&taskStatuses=PROCESSING,DELIVERY_FAILED');
  const responseTime = Date.now() - startTime;

});
