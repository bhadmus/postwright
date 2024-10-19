
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Get Sales Agent Request history', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/brm/card-batch-requests?requestStatuses=PENDING&requestModes=AGGREGATOR_TO_AGENT_REQUEST,AGENT_REQUEST');
  const responseTime = Date.now() - startTime;

});
