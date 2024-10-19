
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('View card delivery requests statistics', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/stats/brm/overview?taskStatuses=PENDING&requestModes=AGENT_REQUEST&requestStatuses=ACCEPTED,REJECTED');
  const responseTime = Date.now() - startTime;

});
