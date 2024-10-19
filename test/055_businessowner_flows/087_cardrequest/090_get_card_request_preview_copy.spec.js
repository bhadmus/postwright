
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Get Card Request Preview Copy', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{logisticsServiceUrl}}/api/v1/logistics/sub-lgas/1', {
  "headers": {
    "moniepointAgentId": "{{agentId}}",
    "banking-domain": "BUSINESS"
  },
  "data": ""
});
  const responseTime = Date.now() - startTime;
  // Post-response Script (Tests)

});
